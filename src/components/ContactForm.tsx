import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { submitContact } from "@/lib/contact.functions";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    try {
      await send({ data: values });
      setSent(true);
      reset();
      toast.success("Messaggio inviato", {
        description: "Ti risponderò personalmente entro 24 ore.",
      });
    } catch {
      toast.error("Invio non riuscito", {
        description: "Riprova tra qualche minuto o scrivimi via email.",
      });
    }
  };

  const fieldClass =
    "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-2 focus:ring-ring/40";

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-background p-10 text-center">
        <h3 className="font-display text-2xl font-light">Grazie, ho ricevuto il tuo messaggio</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Ti rispondo personalmente entro 24 ore, di solito molto prima.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-muted-foreground underline underline-offset-4"
        >
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-border bg-background p-6 text-left sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Nome e cognome
          </label>
          <input id="name" type="text" autoComplete="name" className={fieldClass} {...register("name")} />
          {errors.name && (
            <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input id="email" type="email" autoComplete="email" className={fieldClass} {...register("email")} />
          {errors.email && (
            <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="phone" className="text-sm font-medium">
          Telefono <span className="text-muted-foreground">(facoltativo)</span>
        </label>
        <input id="phone" type="tel" autoComplete="tel" className={fieldClass} {...register("phone")} />
        {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone.message}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium">
          Il tuo messaggio
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Raccontami cosa ti succede e da quanto tempo…"
          className={`${fieldClass} resize-y`}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? "Invio in corso…" : "Invia messaggio"}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        I tuoi dati vengono usati solo per rispondere alla tua richiesta.
      </p>
    </form>
  );
}
