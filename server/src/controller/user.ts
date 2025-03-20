import { Request, Response, NextFunction,  } from "express";
import { validationResult, matchedData } from "express-validator";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "../model/user";
import { db } from "../lib/db";
import { sendVerificationEmail } from "../lib/mail/sendMail";
import { generateVerificationToken, getVerificationTokenByToken } from "../lib/tokens/generateVerificationToken";

export const createUser = async (req: Request, res: any) => {

  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).send({ error: result.array().map((err) => err) });
  }

  const data = matchedData(req);
  const { firstName, lastName, email, password  } = data
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // const exisitingUser = await db.user.findUnique({ where: { email } });
    const exisitingUser = await getUserByEmail(email);
  
    if (exisitingUser) return res.status(400).send({ msg: "User exists" });

    await db.user.create({ data: { firstName, lastName, email, password: hashedPassword, role:'USER' } });

    const verificationToken = await generateVerificationToken(email)
    await sendVerificationEmail(verificationToken.email, verificationToken.token)
    
    return res.status(201).send({msg: "User created successfully", data: {firstName, lastName, email, password, }})
  } catch (error) {
    res.status(400).send({msg: "Somethingwent wrong"})
  }
  
}

export const signUser = (req: any, res: Response) => {
  res.status(201).send({msg: "successfully log in"});
}


export const verifyUser  = async (req:any, res: Response) => {
const token = req.query.token;

const existingToken = await getVerificationTokenByToken(token)
if(!existingToken) return res.status(400).send({ msg: "Token does not exist" });

const hasExpired = new Date(existingToken.expires) < new Date();
if(hasExpired) return res.status(400).send({ msg: "Token has expired" });

const existingUser = await getUserByEmail(existingToken.email)
if(!existingUser) return  res.status(400).send({ msg: "Token has expired" });


// Prisma update and delete is done here

await db.user.update({
  where: {id: existingUser.id},
  data:{
    emailVerified: new Date(),
    email: existingToken.email
  }
})

await db.verificationToken.delete({
  where: { id: existingToken.id}
})

res.status(201).send({msg: "verified successfully"});
}