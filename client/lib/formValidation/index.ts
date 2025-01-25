import { z } from "zod"

export const registerFormSchema = z.object({
  fullName: z.string().min(3, {
    message: "Fullname must be at least 3 characters.",
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