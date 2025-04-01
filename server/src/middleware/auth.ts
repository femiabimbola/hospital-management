
import { Request, Response, NextFunction } from "express";

export const isAuth =  (req: Request, res: any, next: NextFunction) => {
  // This isAuthenticated
  if(!req.isAuthenticated()) return res.status(401).json({message: "Access denied"})
  
  next()
}