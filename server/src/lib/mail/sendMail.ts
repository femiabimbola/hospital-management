import { Request, Response, NextFunction, Router } from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (req: Request, res: Response, next: NextFunction) => { 

  // const confirmationLink = `${domain}/auth/new-verification?token=${token}`;

  try {
    const {data, error} = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello World',
      // html: `<p>  Click <a href="${confirmationLink}"> here </a> to confirm your email </p>`,
      html: `<p>  Click to confirm your email </p>`,
    });

    res.status(200).json(data);
  } catch(error) {
    res.status(400).json(error);
  }

  return res.status(400).send({ msg: "You do not have access for this route"})
}