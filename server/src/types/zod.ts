import { z } from "zod";

const schemaProduct = z.object({
  id: z?.number(),
  image: z.string().url(),
  price: z.number(),
  tag: z.string(),
  name: z.string(),
  description: z.string(),
});

export type Product = z.infer<typeof schemaProduct>;

export const schemaUser = z.object({
  id: z?.number(),
  name: z
    .string()
    .min(1)
    .max(30, { message: "seu nome precisa ter até 30 caracteres" }),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string(),
});

export type User = z.infer<typeof schemaUser>;
