import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, { message: "este campo é obrigatório" }),
  lastName: z.string().min(1, { message: "este campo é obrigatório" }),
  email: z.string().email({ message: "email invalido" }),
  password: z.string().min(8, { message: "sua senha precisa ter 8 digitos" }),
  comfirm: z
    .string()
    .min(8, { message: "sua comfirmacao precisa ser identica" }),
}) satisfies Object;
