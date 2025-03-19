import { Request, Response, NextFunction,  } from "express";
import { validationResult, matchedData } from "express-validator";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "../model/user";
import { db } from "../lib/db";
import { sendVerificationEmail } from "../lib/mail/sendMail";
import { generateVerificationToken } from "../lib/tokens/generateVerificationToken";

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

export const verifyUser  = (req:any, res: Response) => {
  res.status(201).send({msg: "verified successfully"});
}