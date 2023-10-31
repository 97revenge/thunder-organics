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

const schemaUser = z.object({
  id: z.number(),
  name: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8).includes(String(/@/)),
});

export type User = z.infer<typeof schemaUser>;
