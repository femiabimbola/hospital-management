import { Request, NextFunction, Router } from "express";
import passport from "passport";
import {  checkSchema } from "express-validator";
import "../utlis/passportStrategy/localStrategy";
import { createUserValidationSchema } from "../validation/user";
import { createUser, signUser, verifyUser } from "../controller/user";

const router = Router();

router.post("/api/auth/register", checkSchema(createUserValidationSchema), createUser)
// router.post("/api/auth/login", passport.authenticate("local", {failureMessage: true,}), signUser)

// @ts-ignore
router.get("/api/auth/verify", verifyUser)
// router.post("/api/auth/login", passport.authenticate("local", {failureRedirect: '/login',failureFlash: true} ), signUser)
router.post("/api/auth/login", passport.authenticate("local", {failureFlash: true, failureRedirect: '/login' } ), signUser)
// router.post("/api/auth/login",  signUser)

export default router