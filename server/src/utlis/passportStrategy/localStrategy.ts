import passport from 'passport'
import { Strategy as LocalStrategy} from 'passport-local'
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// const GoogleStrategy = require("passport-google-oauth20").Strategy
import bcrypt from "bcryptjs"
import { getUserByEmail, getUserById } from '../../model/user'
import { generateVerificationToken } from '../../lib/tokens/generateVerificationToken'
import { sendVerificationEmail } from '../../lib/mail/sendMail'
// import {GoogleUser} from "../db/schemas/googleSchema.";

// The serialize function create the user object and stores it in the session.it get called during user sign in
passport.serializeUser((user:any, done) => {
  console.log("inside serializer")
  done(null, user.id)
})

// The deserialize function take the id from session, and find who the user is.
// It is called on every req after the user logs in 
passport.deserializeUser(async (id: string, done) => {
  console.log("inside deserializer")
  try {
    const findUser = await getUserById(id) 
    // if (!findUser) throw new Error("user not found");
    if(!findUser) return done(new Error("user not found"))
    done(null, findUser);
  } catch (error) {
    done(error, false);
  }
});


// Yet to figure out how to pass message to the frontend

/**
 * passport.use(new LocalStrategy({ {usernameField:"email"}, async (email, password, done)}))
 */

export default passport.use(
  new LocalStrategy({usernameField:"email"}, async (username, password, done) =>{
    
    try{
      const findUser = await getUserByEmail(username);
    
      if(!findUser) return done(null, false, { message: 'User is not found o'})
        
      const passwordsMatch = await bcrypt.compare(password, findUser.password); 
      if(!passwordsMatch) return done(null, false, { message: 'Password does not match'})

      // The done has 3 arg! Check the docs
      console.log(findUser)
      if(findUser.emailVerified === null){
        const verificationToken = await generateVerificationToken(findUser.email);
        await sendVerificationEmail( verificationToken.email, verificationToken.token )
      return done(null, false, { message: 'Check your email and Verify your email'})
      }
      return done(null, findUser, {message: 'User is signed in'})
    }catch(error){
      console.error('Authentication error:', error);
      done(error, false)
    }
  })
)


// passport.use(new GoogleStrategy ({
//   clientID: process.env.GOOGLE_CLIENT_ID as string,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//   callbackURL: "http://localhost:9000/api/auth/google/callback",
// },

// async (accessToken, refreshToken, profile, done: any) => {
//   let findUser;
//   try {
//     findUser = await GoogleUser.findOne({googleId: profile.id});
//   } catch (error) {
//     return done(error, null);
//   }  
//   try {
//     if (!findUser) {
//       const newUser = new GoogleUser({
//         username: profile.displayName,
//         googleId: profile.id,
//         email:profile.emails![0].value 
//       });
//       const newSavedUser = await newUser.save();
//       return done(null, newSavedUser);
//     }
//     return done(null, findUser); // done authenticate the user
//   } catch (error) {
//     return done(error, null);
//   }
// } ))