import { z } from "zod"

export const registerFormSchema = z.object({
  firstName: z.string().min(3, {
    message: "Firstname must be at least 3 characters.",
  }),
  lastName: z.string().min(3, {
    message: "Latname must be at least 3 characters.",
  }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(3, {
    message: "Fullname must be at least 3 characters.",
  })
})


export const loginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(3, {
    message: "Fullname must be at least 3 characters.",
  })
})


export const resetEmailSchema =  z.object({
  email: z.string().email("Invalid email address"),
})