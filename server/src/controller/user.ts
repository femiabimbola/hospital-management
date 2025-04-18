import { Request, Response, NextFunction } from "express";
import { validationResult, matchedData } from "express-validator";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "../model/user";
import { db } from "../lib/db";
import { sendVerificationEmail, ResetMail } from "../lib/mail/sendMail";
import {
  generatePasswordResetToken,
  generateVerificationToken,
  getVerificationTokenByToken,
} from "../lib/tokens/generateVerificationToken";
import passport from 'passport'
import { Strategy } from 'passport-local'


export const createUser = async (req: Request, res: any) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).send({ error: result.array().map((err) => err) });
  }

  const data = matchedData(req);
  const { firstName, lastName, email, password } = data;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // const exisitingUser = await db.user.findUnique({ where: { email } });
    const exisitingUser = await getUserByEmail(email);

    if (exisitingUser) return res.status(400).send({ msg: "User exists" });

    await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: "USER",
      },
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(verificationToken.email,verificationToken.token);
    
    return res
      .status(201)
      .send({
        msg: "User created successfully",
        data: { firstName, lastName, email, password },
      });
  } catch (error) {
    res.status(400).send({ msg: "Somethingwent wrong" });
  }
};

export const signUser2 = (req: any, res: Response, next: NextFunction) => {
  res.redirect("http://localhost:3000 ")
};


export const signUser = async (req: Request, res: any, next:NextFunction) => {
  passport.authenticate("local", (error:any, user:any, info:any)  => {
    if(error) return res.status(500).json({error: "something went wrong"})
    if(!user) return res.status(401).json(info)

    req.login(user, error => {
      if(error) return res.status(500).json({error: "something went wrong"})
      return res.status(200).json({id:user})
    })
  })(req, res, next)
}



export const verifyUser = async (req: Request, res: Response) => {
  const token = req.query.token as string;
  console.log(token)
  try {
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken) return res.status(400).send({ msg: "Token does not exist" });

    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) return res.status(400).send({ msg: "Token has expired" });

    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) return res.status(400).send({ msg: "Token has expired" });

    await db.user.update({
      where: { id: existingUser.id },
      data: {
        emailVerified: new Date(),
        email: existingToken.email,
      },
    });

    await db.verificationToken.delete({
      where: { id: existingToken.id },
    });

    res.status(201).send({ msg: "verified successfully" });
  } catch (error: any) {
    console.error(error);
    return res.status(500)
      .send({ msg: "An error occurred", error: error.message });
  }
};

export const logout =  (req: Request, res: any, next: NextFunction) => {
  // This isAuthenticated
  req.logOut((error) => {
    if(error) return res.status(200).json({error: "Something went wrong"})
  })
  res.status(200).json({message:"Successfully logout"})
}



export const sendPassportResetMail = async (req: Request, res: any, next: NextFunction) =>{
  const result = validationResult(req);
 
  if (!result.isEmpty()) {
    return res.status(400).send({ error: result.array().map((err) => err) });
  }
  const data = matchedData(req);
  const {email} = data;
  // const email = req.body.email
  try {
    const exisitingUser = await getUserByEmail(email);

    if (!exisitingUser) return res.status(400).send({ message: "User is not found" });
  
    const ResetToken = await generatePasswordResetToken(email);

    await ResetMail(ResetToken.email,ResetToken.token);
    
    res.status(200).send({ msg: "Password reset email sent" });
    
  } catch (error:any) {
    console.error(error);
    return res.status(500).send({ msg: "An error occurred", error: error.message });
  }
}




export const newPassword = async (req: Request, res: Response) => {
  const token = req.query.token as string;

  const result = validationResult(req);
 
  if (!result.isEmpty()) {
    return res.status(400).send({ error: result.array().map((err) => err) });
  }
  const data = matchedData(req);
  const {password} = data;
  // const password = req.body.password

  try {
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken) return res.status(400).send({ msg: "Token does not exist" });

    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) return res.status(400).send({ msg: "Token has expired" });

    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) return res.status(400).send({ msg: "User is not found " });

    const hashedPassword = await bcrypt.hash(password, 10)

    await db.user.update({
      where: { id: existingUser.id },
      data: { password: hashedPassword},
    });

    await db.passwordResetToken.delete({
      where: { id: existingToken.id },
    });

    res.status(201).send({ msg: "Password updated successfully " });
  } catch (error: any) {
    console.error(error);
    return res.status(500)
      .send({ msg: "An error occurred", error: error.message });
  }
};



/** This are not called */
// export const login = (req: Request, res: any, next: NextFunction) => {
//   passport.authenticate('local', (err:Error, user:any, info:any) => {
//     if (err) {
//       return next(err); // Pass errors to Express error handler
//     }
//     if (!user) {
//       // Access the error message from the 'info' object
//       return res.status(401).json({ message: info.message });
//     }
//     // Successful login
//     req.logIn(user, (err) => {
//       if (err) return next(err);
//       return res.status(200).json({ message: 'Login successful', user: req.user });
//     });
//   })(req, res, next);
// } ;


// export const user =  (req: Request, res: any, next: NextFunction) => {
//   // This isAuthenticated
//   if(!req.isAuthenticated) return res.status(401).json({message: "Access denied"})
//   res.status(200).json({message:req.user})
// }
