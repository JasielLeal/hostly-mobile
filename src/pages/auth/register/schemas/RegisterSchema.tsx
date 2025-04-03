import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email invalido" }),
  password: z.string().optional(),
  isAccepted: z.boolean().refine(val => val === true, {
    message: "Você deve aceitar os termos de uso e privacidade."
  })
});