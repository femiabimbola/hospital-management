"use client";

import { registerFormSchema } from "@/lib/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SubmitButton from "../Button";
import { Mail, User, Key, Eye, EyeOff } from "lucide-react";
import { FormError, FormSuccess } from "@/components/Messages";
import axios from "axios"
import { useRouter } from "next/navigation";


export const RegisterForm = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter();

  const submit = async (values: z.infer<typeof registerFormSchema>) => {
    setIsLoading(true);
    setError('')
    setSuccess('')
    try {
      // console.log(values.fullName, values.email, values.password);
      const response = await axios.post("http://localhost:9000/api/auth/register", values)
      form.reset()
      setSuccess(response.data.msg)
      router.push(`http://localhost:3000/login`)
      
    } catch (error: any) {
      setError(error.response.data.error[0].msg)
    }finally {
      setIsLoading(false);
    }
    
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-2">
        {/* first name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              {/* Put image */}
              <FormLabel>First Name</FormLabel>
              <div className="flex rounded-md border dark:border-gray-800 items-center">
                <User width={24} height={24} className="mx-2" />
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    {...field}
                    className="shad-input border-0 "
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

          {/* Last Name*/}
          <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              {/* Put image */}
              <FormLabel>Last Name</FormLabel>
              <div className="flex rounded-md border dark:border-gray-800 items-center">
                <User width={24} height={24} className="mx-2" />
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    {...field}
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

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <div className="flex rounded-md border dark:border-gray-800 items-center">
                <Key width={24} height={24} className="mx-2" />
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    {...field}
                    className="shad-input border-0 "
                    type={showPassword ? "text" : "password"}
                  />
                </FormControl>
                {showPassword ? (
                  <EyeOff
                    onClick={() => setShowPassword(false)}
                    className="m-2"
                  />
                ) : (
                  <Eye
                    className="m-2 "
                    onClick={() => setShowPassword(true)}
                  />
                )}
              
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
};
