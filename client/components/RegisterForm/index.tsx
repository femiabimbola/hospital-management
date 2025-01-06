"use client"

import { registerFormSchema } from "@/lib/formValidation/registerFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const RegisterForm = () => {

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
    },
  })

  const submit = async() => {}

  return (
    <div> The register form</div>
  )
}

