import * as z from "zod";

export const postFormSchema = z.object({
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
  price: z.string().min(1, {
    message: "Price must be at least 1 characters.",
  }),
  isAvailable: z.boolean().default(false),
});
