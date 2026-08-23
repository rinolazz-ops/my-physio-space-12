import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import studioImg from "@/assets/studio.jpg";
import manualImg from "@/assets/manual.jpg";
import { ContactForm } from "@/components/ContactForm";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valeria Ferraz — Fisioterapista a Padova" },
      {
        name: "description",
        content:
          "Fisioterapia su misura a Padova: terapia manuale, riabilitazione post-operatoria ed esercizio terapeutico. Percorsi personalizzati con Valeria Ferraz.",
      },
      { property: "og:title", content: "Valeria Ferraz — Fisioterapista a Padova" },
      {
        property: "og:description",
        content:
          "Terapia manuale, riabilitazione ed esercizio terapeutico a Padova. Percorsi personalizzati per tornare a muoverti senza dolore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const servizi = [
  {
    titolo: "Terapia manuale",
    testo:
      "Tecniche articolari e sui tessuti molli per ridurre il dolore e restituire mobilità dove il movimento si è bloccato.",
  },
  {
    titolo: "Riabilitazione post-operatoria",
    testo:
      "Percorsi graduali dopo interventi a ginocchio, spalla e anca, in dialogo costante con il chirurgo di riferimento.",
  },
  {
    titolo: "Esercizio terapeutico",
    testo:
      "Programmi di rinforzo e controllo motorio costruiti sulla tua giornata, da portare avanti anche a casa.",
  },
  {
    titolo: "Dolore cronico e posturale",
    testo:
      "Cervicalgie, mal di schiena e tensioni ricorrenti: educazione al movimento e strategie sostenibili nel tempo.",
  },
];

const percorso = [
  {
    n: "01",
    titolo: "Valutazione",
    testo: "Un'ora insieme: storia clinica, test funzionali e obiettivi reali.",
  },
  {
    n: "02",
    titolo: "Trattamento",
    testo: "Sedute individuali che uniscono lavoro manuale ed esercizio attivo.",
  },
  {
    n: "03",
    titolo: "Autonomia",
    testo: "Un programma tuo, per mantenere i risultati anche dopo il ciclo.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-sm tracking-[0.28em] uppercase text-muted-foreground">
          Valeria Ferraz
        </span>
        <a
          href="#contatti"
          className="rounded-full border border-border px-4 py-2 text-xs tracking-wide uppercase transition-colors hover:bg-secondary"
        >
          Contatti
        </a>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pt-6 pb-20 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-16 md:pt-16">
          <div>
            <p className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Fisioterapista · Padova
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-light sm:text-5xl md:text-6xl">
              Il movimento
              <br />
              torna dove
              <br />
              <span className="text-primary">c'è ascolto.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Sono Valeria Ferraz. Accompagno le persone a uscire dal dolore con percorsi
              individuali, costruiti sul corpo e sulla vita di ciascuno — non su un protocollo
              standard.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contatti"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Prenota una valutazione
              </a>
              <a
                href="#servizi"
                className="text-sm text-muted-foreground underline-offset-4 hover:underline"
              >
                Scopri i trattamenti
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="overflow-hidden rounded-[2rem]"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <img
                src={heroImg}
                alt="Valeria Ferraz durante una seduta di mobilità della spalla nel suo studio"
                width={1408}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
            {[
              ["10+", "anni di pratica"],
              ["1:1", "sedute individuali"],
              ["60'", "durata di ogni seduta"],
              ["Padova", "studio in centro"],
            ].map(([big, small]) => (
              <div key={small}>
                <p className="font-display text-2xl font-light md:text-3xl">{big}</p>
                <p className="mt-1 text-sm text-muted-foreground">{small}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="servizi" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="max-w-lg font-display text-3xl font-light md:text-4xl">
            Trattamenti e aree di lavoro
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {servizi.map((s) => (
              <article key={s.titolo} className="bg-background p-8">
                <h3 className="font-display text-xl font-medium">{s.titolo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.testo}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={studioImg}
                alt="Lo studio di fisioterapia con tappetino e panca in legno"
                width={1200}
                height={900}
                loading="lazy"
                className="col-span-2 h-56 w-full rounded-2xl object-cover md:h-64"
              />
              <img
                src={manualImg}
                alt="Dettaglio degli strumenti di lavoro: asciugamani, elastico e foam roller"
                width={1200}
                height={900}
                loading="lazy"
                className="col-span-2 h-40 w-full rounded-2xl object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-light md:text-4xl">Come lavoro</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Ogni percorso parte da una valutazione approfondita e prosegue con sedute
                individuali di un'ora, senza sovrapposizioni. Uso le mani, l'esercizio e la
                spiegazione: capire cosa sta succedendo al proprio corpo è già metà del
                risultato.
              </p>
              <ol className="mt-10 space-y-6">
                {percorso.map((p) => (
                  <li key={p.n} className="flex gap-5">
                    <span className="font-display text-sm text-clay">{p.n}</span>
                    <div>
                      <h3 className="font-display text-lg font-medium">{p.titolo}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.testo}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="contatti" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div
            className="rounded-[2rem] px-8 py-14 text-center md:px-16"
            style={{ background: "var(--gradient-warm)" }}
          >
            <h2 className="font-display text-3xl font-light md:text-4xl">
              Parliamo del tuo movimento
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Scrivimi o chiamami per fissare la prima valutazione. Rispondo personalmente entro
              24 ore.
            </p>
            <div className="mx-auto mt-10 max-w-2xl">
              <ContactForm />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:valferraz36@gmail.com"
                className="rounded-full border border-primary/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-background"
              >
                valferraz36@gmail.com
              </a>
              <a
                href="tel:+390490000000"
                className="rounded-full border border-primary/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-background"
              >
                +39 049 000 0000
              </a>
            </div>

            <p className="mt-8 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Studio in centro · Padova · Lun–Ven 8:00–19:00
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Valeria Ferraz — Fisioterapista</span>
          <span>P.IVA 00000000000</span>
        </div>
      </footer>
    </div>
  );
}
