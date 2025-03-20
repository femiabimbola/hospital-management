import { Request, Response, NextFunction, Router } from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async ( email: string, token: string) => { 

  const confirmationLink = `${domain}/api/auth/verify?token=${token}`;

  try {
    const {data, error} = await resend.emails.send({
      from: 'femi J <hello@janennajiat50.com.ng>', 
      to: email,
      subject: 'Confirm Your Email',
      html: `<p>  Click <a href="${confirmationLink}"> here </a> to confirm your email </p>`,
    });

   
  } catch(error) {
   
  }

  return 
}