import { Request, Response, NextFunction, Router } from "express";
import { validationResult, matchedData } from "express-validator";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "../model/user";
import { db } from "../lib/db";

export const createUser = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ error: result.array().map((err) => err) });
  }
  const data = matchedData(req);

  const { fullName, email, password  } = data

  const hashedPassword = await bcrypt.hash(password, 10);

  // const exisitingUser = await db.user.findUnique({ where: { email } });
  const exisitingUser = await getUserByEmail(email);

  if (exisitingUser) return res.status(400).send({ msg: "User exists" });

  await db.user.create({ data: {  email, password: hashedPassword } });
}