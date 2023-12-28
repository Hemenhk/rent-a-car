import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CardFooter } from "@/components/ui/card";

import { FormProps } from "@/utils/types/types";
import { signUpForm } from "@/utils/form-utils";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(2, {
      message: "Password must be at least 2 characters.",
    })
    .trim(),
  confirmPassword: z
    .string()
    .min(2, {
      message: "Confirm Password must match Password.",
    })
    .trim(),
});

export default function TheSignUpDialog() {
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const mappedForm = signUpForm.map((sign: FormProps) => (
    <FormField
      key={sign.id}
      control={form.control}
      name={sign.name as "email" | "password" | "confirmPassword"}
      render={({ field }) => (
        <FormItem className="pt-3">
          <FormLabel>{sign.label}</FormLabel>
          <FormControl>
            <Input type={sign.type} placeholder={sign.placeholder} {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  ));

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      console.log(res);
      console.log({ res });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DialogHeader className="py-4">
        <DialogTitle>Sign Up</DialogTitle>
        <DialogDescription>Create your account to rent cars.</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          {mappedForm}
          <CardFooter className="mt-3">
            <Button type="submit" className="w-full">
              Create account
            </Button>
          </CardFooter>
        </form>
      </Form>
    </>
  );
}
