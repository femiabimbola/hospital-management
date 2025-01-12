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
import { Mail } from "lucide-react"

export const RegisterForm = () => {

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: "",
    },
  })

  const [isLoading, setIsLoading] = useState(false);

  const submit = async({fullName}:  z.infer<typeof registerFormSchema>) => {
    setIsLoading(true)
    try {
      console.log(fullName)
    } catch (error) {
      
    }
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              {/* Put image */}
              <FormLabel>Full Name</FormLabel>
              <div className="flex rounded-md border items-center">
              <Mail width={24} height={24} className="ml-2" />
              <FormControl>
                <Input placeholder="Enter your full name" {...field} 
                  className="shad-input border-0"
                />
              </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton isLoading={isLoading} >Submit</SubmitButton >
      </form>
    </Form>

  )
}

