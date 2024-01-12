"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCarForm } from "@/app/hooks/useCarForm";

import * as z from "zod";
import { carFormSchema } from "@/utils/form-schemas/form-schemas";
import { CarValue, postCar } from "@/lib/car-axios";

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
import MoonLoader from "react-spinners/MoonLoader";
import TheAlert from "@/app/helpers/TheAlert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useImageUpload from "@/app/hooks/useImageUpload";

export default function ThePostCarForm() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { form, mappedForm } = useCarForm({});
  const { imageUpload, setFile } = useImageUpload();

  const {
    mutateAsync: createCarMutation,
    isPending,
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

  const handleSubmit = async (values: z.infer<typeof carFormSchema>) => {
    try {
      const { description, manufacturer, price, title, isAvailable } = values;

      const numericPrice = parseFloat(price);
      const imageURL = await imageUpload();

        const res = await createCarMutation({
          description,
          manufacturer,
          price: numericPrice,
          title,
          isAvailable,
          imageCover: imageURL,
        });

        console.log("post", res);

      setTimeout(() => {
        router.push("/admin");
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
          <CardContent className="px-5">
            {mappedForm} <Label htmlFor="imageCover">Image Cover</Label>
            <Input
              type="file"
              id="imageCover"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              onChange={(e) => setFile(e.target.files?.[0])}
            />
          </CardContent>
          <CardFooter className="flex gap-3 px-5 pb-5">
            <div className="flex flex-col w-full gap-3 ">
              <Button type="submit" disabled={isPending} className={`flex ${isPending && "justify-between"}`}>
                {isPending ? (
                  <>
                    <p className="mx-auto pl-4">Creating</p>
                    <MoonLoader size={15} />
                  </>
                ) : (
                  "Create"
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
              <TheAlert type={"error"} message={"Could not create the car!"} />
            )}
            {isSuccess && (
              <TheAlert
                type={"success"}
                message={"Successfully created the car!"}
              />
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
