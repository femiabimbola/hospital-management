"use client";

import { loginFormSchema, resetEmailSchema, } from "@/lib/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import {
  Form, FormControl, FormField,
  FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import SubmitButton from "@/components/Button";
import { Mail } from "lucide-react";
import { FormError, FormSuccess } from "@/components/Messages";
import axios from "axios"
import { useRouter } from "next/navigation";


export const ForgetPassword = () => {
    const form = useForm<z.infer<typeof resetEmailSchema>>({
      resolver: zodResolver(resetEmailSchema),
      defaultValues: {
        email: "",
      },
    });
  
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
  
    const submit = async (values: z.infer<typeof loginFormSchema>) => {
      setIsLoading(true);
      setError('')
      setSuccess('')
      try {
        form.reset()
      } catch (error: any) {
        setError(error.response.data.error[0].msg)
      }finally {
        setIsLoading(false);
      } 
    };

    return (
      <Form {...form}>
        <form onSubmit={() =>{}} className="space-y-4">
  
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <div className="flex rounded-md border dark:border-gray-800 items-center">
                  <Mail width={24} height={24} className="mx-2" />
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      {...field}
                      className="shad-input border-0 "
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          {/* Submit button */}
          <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
        </form>
      </Form>
    );
}