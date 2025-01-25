import { Request, NextFunction, Router } from "express";
import {  checkSchema } from "express-validator";
import { createUserValidationSchema } from "../validation/user";
import { createUser, signUser } from "../controller/user";

const router = Router();

router.post("/api/auth/register", checkSchema(createUserValidationSchema), createUser)
router.post("/api/auth/login", signUser)

export default router