"use client"

import { registerFormSchema } from "@/lib/formValidation/registerFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { useState } from "react";
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import SubmitButton from "../Button"

export const RegisterForm = () => {

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
    },
  })

  const [isLoading, setIsLoading] = useState(false);

  const submit = async({username}:  z.infer<typeof registerFormSchema>) => {
    console.log(username)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton isLoading={isLoading} >Submit</SubmitButton >
      </form>
    </Form>

  )
}

