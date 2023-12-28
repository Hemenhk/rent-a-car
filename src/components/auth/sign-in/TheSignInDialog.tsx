import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { signInForm } from "@/utils/form-utils";
import { FormProps } from "@/utils/types/types";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

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
});

export default function TheSignInDialog() {
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mappedForm = signInForm.map((sign: FormProps) => (
    <FormField
      key={sign.id}
      control={form.control}
      name={sign.htmlFor as "email" | "password"}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{sign.label}</FormLabel>
          <FormControl>
            <Input type={sign.type} placeholder={sign.placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ));

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setSubmitting(true);
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (res?.error) {
        setError(true);
      }
      // console.log(res);
      // console.log({ res });
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const renderErrorAlert = (
    <Alert variant={"destructive"} className="h-12">
      <MdError />
      <AlertTitle>Failed to sign in!</AlertTitle>
    </Alert>
  );

  return (
    <>
      <DialogHeader className="py-4">
        <DialogTitle>Sign In</DialogTitle>
        <DialogDescription>Sign in to your account.</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          {mappedForm}
          <CardFooter className="mt-3 flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={submitting}>
              Sign In
            </Button>
            {error && renderErrorAlert}
          </CardFooter>
        </form>
      </Form>
    </>
  );
}
