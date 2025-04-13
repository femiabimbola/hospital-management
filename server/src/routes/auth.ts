import { Request, NextFunction, Router } from "express";
import passport from "passport";
import {  checkSchema } from "express-validator";
import "../utlis/passportStrategy/localStrategy";
import { createUserValidationSchema } from "../validation/user";
import { createUser, sendPassportResetMail, signUser, signUser2, verifyUser } from "../controller/user";

const router = Router();

router.post("/api/auth/register", checkSchema(createUserValidationSchema), createUser)
// router.post("/api/auth/login", passport.authenticate("local", {failureMessage: true,}), signUser)

// @ts-ignore
router.get("/api/auth/verify", verifyUser)

router.post("/api/auth/login", signUser)

router.post("/api/auth/forgot-password", sendPassportResetMail)

//for google
// router.get('/api/auth/google', passport.authenticate('google', {scope: ['google', 'email']}),)
// router.get("/api/auth/google/callback", passport.authenticate('google', {}),  signUser2 );


export default router