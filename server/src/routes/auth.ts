import { Request, NextFunction, Router } from "express";
import passport from "passport";
import {  checkSchema } from "express-validator";
import "../utlis/passportStrategy/localStrategy";
import { createUserValidationSchema } from "../validation/user";
import { createUser, signUser } from "../controller/user";

const router = Router();

router.post("/api/auth/register", checkSchema(createUserValidationSchema), createUser)
// router.post("/api/auth/login", passport.authenticate("local", {failureMessage: true,}), signUser)
router.post("/api/auth/login", passport.authenticate("local"), signUser)
// router.post("/api/auth/login",  signUser)

export default router