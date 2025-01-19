import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport"
import cors from 'cors';

import { sessionObject } from "./utlis/sessionObject";
import router from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Express with TypeScript Server");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(session(sessionObject))
app.use(passport.initialize())
// app.use(passport.session())

app.use((req: any, res:any, next) => { 
  if (req.session && req.session.messages) { 
    res.locals.messages = req.session.messages; 
    req.session.messages = [];
    // console.log(res.locals.messages)
   } 
   next();
   });

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});