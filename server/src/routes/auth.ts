import { Request, NextFunction, Router } from "express";
import passport from "passport";
import {  checkSchema } from "express-validator";
import "../utlis/passportStrategy/localStrategy";
import { createUserValidationSchema,sendResetPasswordValidationSchema, loginUserValidationSchema, newPasswordValidationSchema } from "../validation/user";
import { createUser, sendPassportResetMail, signUser, signUser2, verifyUser } from "../controller/user";

const router = Router();

router.post("/api/auth/register", checkSchema(createUserValidationSchema), createUser)
router.post("/api/auth/login", checkSchema(loginUserValidationSchema), signUser)
// router.post("/api/auth/login", passport.authenticate("local", {failureMessage: true,}), signUser)

// @ts-ignore
router.get("/api/auth/verify", verifyUser)

router.post("/api/auth/forgot-password",  checkSchema(sendResetPasswordValidationSchema), sendPassportResetMail)
router.post("/api/auth/new-password",  checkSchema(newPasswordValidationSchema), sendPassportResetMail)

//for google
// router.get('/api/auth/google', passport.authenticate('google', {scope: ['google', 'email']}),)
// router.get("/api/auth/google/callback", passport.authenticate('google', {}),  signUser2 );


export default router