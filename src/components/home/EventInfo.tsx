import eventVenuePhoto from "@/assets/event-venue-photo";
import { Reveal, SectionEyebrow } from "./primitives";

export function EventInfo() {
  return (
    <section
      id="informacoes"
      className="relative overflow-hidden border-t border-copper/10 bg-background py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 82% 48%, oklch(0.42 0.12 38 / 12%), transparent 72%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[78rem] gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-x-16 lg:gap-y-8">
        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <Reveal>
            <SectionEyebrow>Informações do evento</SectionEyebrow>
          </Reveal>

          <Reveal delay={90}>
            <div className="mt-7">
              <h2 className="font-display text-4xl leading-[0.98] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                RPM SUMMIT
              </h2>
              <p className="mt-3 font-sans text-sm font-medium uppercase tracking-[0.28em] text-foreground/80">
                Cuiabá - MT
              </p>
              <p className="mt-4 font-sans text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#D97945]">
                Raiz <span className="mx-2 text-copper/45">•</span> Prioridade{" "}
                <span className="mx-2 text-copper/45">•</span> Métrica
              </p>
            </div>
          </Reveal>

          <div className="mt-10 border-y border-copper/20">
            <Reveal delay={150}>
              <div className="grid gap-2 border-b border-copper/15 py-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#D97945]">
                  Data
                </p>
                <p className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                  10 de Dezembro
                </p>
              </div>
            </Reveal>

            <Reveal delay={210}>
              <div className="grid gap-2 border-b border-copper/15 py-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#D97945]">
                  Horário
                </p>
                <p className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                  Das 15h às 18h
                </p>
              </div>
            </Reveal>

            <Reveal delay={270}>
              <div className="grid gap-3 py-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#D97945]">
                  Local
                </p>
                <div>
                  <p className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                    Ministério O Pescador Sal da Terra
                  </p>
                  <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                    Av. Miguel Sutil, 2974
                    <br />
                    Pico do Amor, Cuiabá - MT
                    <br />
                    CEP 78065-120
                  </address>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={330}>
            <p className="mt-8 max-w-2xl font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
              3 horas para olhar sua empresa pela raiz, definir a prioridade e decidir com base em métricas.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={180}
          className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <figure className="overflow-hidden rounded-md border border-copper/25 bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <img
              src={eventVenuePhoto}
              alt="Fachada do Ministério O Pescador Sal da Terra, local do RPM Summit em Cuiabá"
              className="aspect-[4/3] w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Reveal>

        <div className="space-y-3 border-t border-copper/15 pt-6 text-sm leading-relaxed text-muted-foreground lg:col-start-1 lg:row-start-2">
          <Reveal delay={390}>
            <p>
              A programação e os horários poderão sofrer pequenos ajustes para garantir a melhor experiência durante o evento.
            </p>
          </Reveal>
          <Reveal delay={440}>
            <p className="font-medium text-foreground/85">
              Todos os detalhes e orientações para sua participação no RPM Summit serão enviados com antecedência.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
