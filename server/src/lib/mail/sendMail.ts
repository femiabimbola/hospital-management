import { Request, Response, NextFunction, Router } from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = (req: Request, res: Response, next: NextFunction) => { 
  return res.status(400).send({ msg: "You do not have access for this route"})
}