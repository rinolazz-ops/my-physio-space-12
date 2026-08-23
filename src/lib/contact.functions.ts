import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { contactSchema } from "./contact-schema";

const unquote = (value: string) => value.replace(/^["']|["']$/g, "");

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const key = unquote(process.env["SUPABASE_PUBLISHABLE_KEY"]!);
    const supabase = createClient<Database>(unquote(process.env["SUPABASE_URL"]!), key, {

      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase
      .from("contact_messages")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone ? data.phone : null,
        message: data.message,
      });

    if (error) {
      console.error("contact insert failed", JSON.stringify(error), key.slice(0, 6));
      throw new Error("Invio non riuscito");
    }


    return { ok: true as const };
  });
