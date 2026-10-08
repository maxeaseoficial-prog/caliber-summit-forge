import { Reveal } from "./primitives";

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
            "radial-gradient(70% 55% at 50% 48%, oklch(0.42 0.12 38 / 10%), transparent 72%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.32em] text-copper sm:text-base">
            Informações do evento
          </p>
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
            <div className="border-b border-copper/15 py-6">
              <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#D97945]">
                Data
              </p>
              <p className="mt-3 font-display text-2xl leading-tight text-foreground sm:text-3xl">
                10 de Dezembro
              </p>
            </div>
          </Reveal>

          <Reveal delay={210}>
            <div className="border-b border-copper/15 py-6">
              <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#D97945]">
                Horário
              </p>
              <p className="mt-3 font-display text-2xl leading-tight text-foreground sm:text-3xl">
                19:30 → 22:30
              </p>
            </div>
          </Reveal>

          <Reveal delay={270}>
            <div className="py-6">
              <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#D97945]">
                Local
              </p>
              <address className="mt-3 not-italic text-base leading-relaxed text-foreground/85 sm:text-lg">
                Av. Miguel Sutil, 2974
                <br />
                Pico do Amor, Cuiabá - MT
                <br />
                CEP 78065-120
              </address>
            </div>
          </Reveal>
        </div>

        <Reveal delay={330}>
          <p className="mx-auto mt-8 max-w-2xl font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
            3 horas para olhar sua empresa pela raiz, definir a prioridade e decidir com base em métricas.
          </p>
        </Reveal>

        <div className="mx-auto mt-8 max-w-2xl space-y-3 border-t border-copper/15 pt-6 text-sm leading-relaxed text-muted-foreground">
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
