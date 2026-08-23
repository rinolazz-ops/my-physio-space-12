import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Inserisci il tuo nome (min. 2 caratteri)" })
    .max(100, { message: "Il nome è troppo lungo" }),
  email: z
    .string()
    .trim()
    .email({ message: "Inserisci un indirizzo email valido" })
    .max(255, { message: "L'email è troppo lunga" }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Il numero di telefono è troppo lungo" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, { message: "Scrivi qualche parola in più (min. 10 caratteri)" })
    .max(2000, { message: "Il messaggio è troppo lungo (max 2000 caratteri)" }),
});

export type ContactInput = z.infer<typeof contactSchema>;
