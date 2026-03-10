
import { z } from "zod";

export const nameSchema = z
  .string()
  .min(2, "Mínimo 2 caracteres.")
  .max(60, "Demasiado largo.");
export const emailSchema = z
  .string()
  .min(1, "El correo es obligatorio.")
  .email("Correo inválido.");
export const messageSchema = z
  .string()
  .min(10, "Mínimo 10 caracteres.")
  .max(1000, "Máximo 1000 caracteres.");

export function validate<T>(schema: z.ZodType<T>, value: T): string | undefined {
  const r = schema.safeParse(value);
  if (!r.success) return r.error.issues[0].message;
}
