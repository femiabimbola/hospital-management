"use client"

import { registerFormSchema } from "@/lib/formValidation/registerFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { useState } from "react";
import { z } from "zod"
import { Form, FormControl,FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import SubmitButton from "../Button"
import Image from "next/image"
import { Mail, User } from "lucide-react"

export const RegisterForm = () => {

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  })

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

  const submit = async({fullName, email}:  z.infer<typeof registerFormSchema>) => {
    setIsLoading(true)
    try {
      console.log(fullName, email)
    } catch (error) {
      
    }
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
        {/* full name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              {/* Put image */}
              <FormLabel>Full Name</FormLabel>
              <div className="flex rounded-md border dark:border-gray-800 items-center">
              <User width={24} height={24} className="mx-2" />
              <FormControl>
                <Input placeholder="Enter your full name" {...field} 
                  className="shad-input border-0 "
                />
              </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* Put image */}
              <FormLabel>Email</FormLabel>
              <div className="flex rounded-md border dark:border-gray-800 items-center">
              <Mail width={24} height={24} className="mx-2" />
              <FormControl>
                <Input placeholder="Enter your email address" {...field} 
                  className="shad-input border-0 "
                />
              </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <SubmitButton isLoading={isLoading} >Submit</SubmitButton >
      </form>
    </Form>

  )
}

