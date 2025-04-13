import { Request, Response, NextFunction, Router } from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_API_URL;

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
   throw new Error;
  }

  return 
}

export const ResetMail = async ( email: string, token: string) => { 

  const PasswordResetLink = `${domain}/api/auth/reset?token=${token}`;
  try {
    const {data, error} = await resend.emails.send({
      from: 'femi J <hello@janennajiat50.com.ng>', 
      to: email,
      subject: 'Reset your Passwprd',
      html: `<p>  Click <a href="${PasswordResetLink}"> here </a> to confirm your email </p>`,
    });

  } catch(error) {
   throw new Error;
  }

}