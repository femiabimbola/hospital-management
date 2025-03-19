// import genFunc from 'connect-pg-simple';
import session from "express-session";
import connectPgSimple from 'connect-pg-simple'
import dotenv from "dotenv";

dotenv.config();

// const PostgresqlStore = genFunc(session);

// const sessionStore = new PostgresqlStore({
//   conString: process.env.DATABASE_URL,
//   ttl: 2 * 60 * 60
// });

const pgSession = connectPgSimple(session);

const sessionStore = new pgSession({
  conString: process.env.DATABASE_URL,
  createTableIfMissing: true,
  ttl:  2 * 60 * 60,
  pruneSessionInterval:  60 * 60
  // tableName: 'session', 
})


export const sessionObject = {
  secret: "some tough secret", // to sign the cookies
  saveUninitialized: false, // Not saving unmodified session storage. No need to save random user
  resave: false,  //if session data is not modified, why store?
  cookie: { maxAge: 6000 * 60},
  store: sessionStore
}