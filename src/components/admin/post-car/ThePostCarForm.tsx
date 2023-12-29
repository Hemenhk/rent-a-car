"use client";

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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

import { carRentalForm } from "@/utils/form-utils";
import { FormProps } from "@/utils/types/types";

import { postFormSchema } from "@/utils/form-schemas/form-schemas";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CarValue, postCar } from "@/lib/car-axios";
import { useRouter } from "next/navigation";

export default function ThePostCarForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    mutateAsync: createCarMutation,
    isPaused,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: async (data: CarValue) => {
      postCar(data);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["cars"], data);
      queryClient.refetchQueries({ queryKey: ["cars"] });
    },
  });

  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title: "",
      manufacturer: "",
      description: "",
      price: 0,
      isAvailable: false,
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
            {car.type === "text" || car.type === "number" ? (
              <Input type={car.type} placeholder={car.placeholder} {...field} />
            ) : car.type === "textArea" ? (
              <Textarea placeholder={car.placeholder} {...field} />
            ) : car.type === "radio" ? (
              <Switch
                checked={!!field.value}
                onCheckedChange={field.onChange}
              />
            ) : null}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ));

  const handleSubmit = async (values: z.infer<typeof postFormSchema>) => {
    try {
      const { description, isAvailable, manufacturer, price, title } = values;
      await createCarMutation({
        description,
        isAvailable,
        manufacturer,
        price,
        title,
      });
      setTimeout(() => {
        router.push("/cars");
      }, 1500);
    } catch (error) {
      console.log("could not create car", error);
    }
  };
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Post A Car</CardTitle>
        <CardDescription>Post a car you wish to rent out.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="px-5">{mappedForm}</CardContent>
          <CardFooter className="flex gap-3 pl-5 pb-5">
            <Button type="submit">Create</Button>
            <Button>Cancel</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
