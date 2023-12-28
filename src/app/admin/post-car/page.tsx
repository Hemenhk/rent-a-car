"use client"

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { carRentalForm } from "@/utils/form-utils";
import { FormProps } from "@/utils/types/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 1 characters.",
    })
    .trim(),
  manufacturer: z
    .string()
    .min(2, {
      message: "Manufacturer must be at least 1 characters.",
    })
    .trim(),
  description: z
    .string()
    .min(2, {
      message: "Description must be at least 1 characters.",
    })
    .trim(),
  price: z.number().min(2, {
    message: "Price must be at least 1 characters.",
  }),
});

export default function PostCarPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      manufacturer: "",
      description: "",
      price: 0,
    },
  });

  const mappedForm = carRentalForm.map((car: FormProps) => (
    <FormField
      key={car.id}
      control={form.control}
      name={car.name as "title" | "manufacturer" | "description"}
      render={({ field }) => (
        <FormItem className="pb-2">
          <FormLabel>{car.label}</FormLabel>
          <FormControl>
            {car.type !== "textArea" ? <Input type={car.type} placeholder={car.placeholder} {...field} /> : <Textarea placeholder={car.placeholder} />}
          </FormControl>
        </FormItem>
      )}
    />
  ));
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Post A Car</CardTitle>
        <CardDescription>Post a car you wish to rent out.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form>
          <CardContent className="px-5">
            {mappedForm}
          </CardContent>
          <CardFooter className="flex gap-3 pl-5 pb-5">
            <Button type="submit">Create</Button>
            <Button>Cancel</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
