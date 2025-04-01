import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport"
import cors from 'cors';


import { sessionObject } from "./utlis/sessionObject";
import router from "./routes";
import { db } from "./lib/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Express with TypeScript Server");
});



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(session(sessionObject))
app.use(passport.initialize())
app.use(passport.session())

app.use(router);

// app.use((req: any, res:any, next) => { 
//   if (req.session && req.session.messages) { 
//     res.locals.messages = req.session.messages; 
//     req.session.messages = [];
//     // console.log(res.locals.messages)
//    } 
//    next();
//    });

   app.use((err:any, req: any, res:any, next:NextFunction) => {
    res.status(err.status >= 100 && err.status < 600 ? err.status : 500);
    res.send({
      status: err.status ? err.status : 500,
      error: err.message,
    });
  });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});