import {v4 as uuid} from "uuid";
import { db } from "../db";


export const getVerificationTokenByEmail = async( email: string) => {
  try {
    const verificiationToken = await db.verificationToken.findFirst({ where: {email} })
    return verificiationToken
  } catch(error) {
    return null
  }
}

export const getVerificationTokenByToken = async( token: string) => {
  try {
    const verificiationToken = await db.verificationToken.findUnique({ where: {token} })
    console.log("hey")
    return verificiationToken
  } catch(error) {
    return null
  }
}


export const generateVerificationToken = async (email: string) => {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  // shows how to remove a value from database
  if (existingToken) {
    await db.verificationToken.delete({
      where: {id: existingToken.id},
    });
  }
  const verificationToken = await db.verificationToken.create({
    data: {email, token, expires},
  });

  return verificationToken;
};