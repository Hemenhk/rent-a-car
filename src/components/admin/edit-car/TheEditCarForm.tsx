"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCarForm } from "@/app/hooks/useCarForm";
import { useRouter } from "next/navigation";

import * as z from "zod";
import { carFormSchema } from "@/utils/form-schemas/form-schemas";
import { CarValue, fetchCarById, updateCar } from "@/lib/car-axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { MoonLoader } from "react-spinners";

import TheAlert from "@/app/helpers/TheAlert";
import useImageUpload from "@/app/hooks/useImageUpload";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export default function TheEditCarForm({ editCarId }: { editCarId: string }) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: carData, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: () => fetchCarById(editCarId),
  });

  const { form, mappedForm } = useCarForm({ carData });
  const { imageUpload, setFile } = useImageUpload();

  const {
    mutateAsync: updateMutation,
    isSuccess,
    isPending,
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

  const handleSubmit = async (values: z.infer<typeof carFormSchema>) => {
    try {
      const imageURL = await imageUpload();
      const { description, manufacturer, price, title, isAvailable } = values;
      const numericPrice = parseFloat(price);

      await updateMutation({
        description,
        manufacturer,
        price: numericPrice,
        title,
        isAvailable: isAvailable,
        imageCover: imageURL,
      });
      setTimeout(() => {
        router.push("/admin");
      }, 1500);
    } catch (error) {
      console.log("could not create car", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Edit A Car</CardTitle>
        <CardDescription>Edit a car you wish to rent out.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="px-5">
            {" "}
            {mappedForm} <Label htmlFor="imageCover">Image Cover</Label>
            <Input
              type="file"
              id="imageCover"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => setFile(e.target.files?.[0])}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-3 px-5 pb-5">
            <div className="flex flex-col w-full gap-3 ">
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <MoonLoader />
                    Updating
                  </>
                ) : (
                  "Update"
                )}
              </Button>
              <Button
                onClick={() => router.push("/admin")}
                variant={"secondary"}
              >
                Cancel
              </Button>
            </div>
            {isError && (
              <TheAlert type={"error"} message={"Could not update the car!"} />
            )}
            {isSuccess && (
              <TheAlert
                type={"success"}
                message={"Successfully updated the car!"}
              />
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
