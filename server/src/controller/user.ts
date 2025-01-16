import { Request, Response, NextFunction, Router } from "express";
import { validationResult, matchedData } from "express-validator";

export const createUser = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ error: result.array().map((err) => err) });
  }
  const data = matchedData(req);
}