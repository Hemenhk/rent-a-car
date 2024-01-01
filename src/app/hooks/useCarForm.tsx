import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { carFormSchema } from "@/utils/form-schemas/form-schemas";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { carRentalForm } from "@/utils/form-utils";
import { FormProps } from "@/utils/types/types";

import { CarValue } from "@/lib/car-axios";

type CarFormProps = {
  carData?: CarValue | undefined
};

export const useCarForm = ({ carData }: CarFormProps) => {
  const form = useForm<z.infer<typeof carFormSchema>>({
    resolver: zodResolver(carFormSchema),
    values: {
      title: carData?.title || "",
      manufacturer: carData?.manufacturer || "",
      description: carData?.description || "",
      price: carData?.price?.toString() || "",
      isAvailable: carData?.isAvailable || false,
    },
  });

  const mappedForm = carRentalForm.map((car: FormProps) => (
    <FormField
      key={car.id}
      control={form.control}
      name={car.name as "title" | "manufacturer" | "description"}
      render={({ field }) => (
        <FormItem className="py-2 flex flex-col">
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

  return { form, mappedForm };
};
