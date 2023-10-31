import { z } from "zod";

const schemaProduct = z.object({
  id: z?.number(),
  image: z.string(),
  price: z.number(),
  tag: z.string(),
  name: z.string(),
  description: z.string(),
});

export type User = z.infer<typeof schemaProduct>;
