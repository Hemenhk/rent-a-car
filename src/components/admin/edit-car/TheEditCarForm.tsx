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

import {
  editFormSchema,
  postFormSchema,
} from "@/utils/form-schemas/form-schemas";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CarValue, fetchCarById, postCar, updateCar } from "@/lib/car-axios";
import { useRouter } from "next/navigation";

export default function TheEditCarForm({ editCarId }: { editCarId: string }) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {data: carData, isLoading} = useQuery({
    queryKey: ["cars"],
    queryFn: () => fetchCarById(editCarId),
  });


  const {
    mutateAsync: updateMutation,
    isPaused,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: async (data: CarValue) => {
      updateCar(data, editCarId);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["cars"], data);
      queryClient.refetchQueries({ queryKey: ["cars"] });
    },
  });

  const form = useForm<z.infer<typeof editFormSchema>>({
    resolver: zodResolver(editFormSchema),
    values: {
      title: carData?.title || "",
      manufacturer: carData?.manufacturer ||"",
      description:carData?.description || "",
      price: carData?.price?.toString() || "",
      isAvailable: carData?.isAvailable || false
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
      const { description, manufacturer, price, title, isAvailable } = values;
      const numericPrice = parseFloat(price);
      await updateMutation({
        description,
        manufacturer,
        price: numericPrice,
        title,
        isAvailable: isAvailable
      });
      // setTimeout(() => {
      //   router.push("/cars");
      // }, 1500);
    } catch (error) {
      console.log("could not create car", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Edit A Car</CardTitle>
        <CardDescription>Edit a car you wish to rent out.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="px-5">{mappedForm}</CardContent>
          <CardFooter className="flex gap-3 pl-5 pb-5">
            <Button type="submit">Edit</Button>
            <Button>Cancel</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
