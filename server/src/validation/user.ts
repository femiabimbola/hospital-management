import { query, validationResult, body, matchedData } from "express-validator";

export const createUserValidationSchema = {
  firstName: {
    isLength: {
      options: { min: 3, max: 32 },
      errorMessage: "firstname cannot be less than 2",
    },
    notEmpty: { errorMessage: "firstname can not be empty" },
    isString: { errorMessage: "firstname is a string" },
  },
  
  lastName: {
    isLength: {
      options: { min: 3, max: 32 },
      errorMessage: "firstame cannot be less than 2",
    },
    notEmpty: { errorMessage: "Last Name can not be empty" },
    isString: { errorMessage: "Last name is a string" },
  },


  email: {
    notEmpty: { errorMessage: "email cannot be empty" },
    isEmail: { errorMessage: "Enter a valid email" },
  },

  password: {
    notEmpty: { errorMessage: "Password cannot be empty" },
    isLength: { options: { min: 6 }, errorMessage: "password cannot be less than 6" },
    matches: {
      options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
      errorMessage: "Password must contain at least a digit, symbol, uppercase and lowercase",
    },
  },

};