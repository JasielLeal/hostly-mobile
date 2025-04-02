import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email({ message: "Email invalido" }),
  password: z.string().optional(),
});