import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
}) satisfies Object;
