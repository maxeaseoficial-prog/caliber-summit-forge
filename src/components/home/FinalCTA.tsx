import { EmberField, PrimaryCTA, Reveal } from "./primitives";

export function FinalCTA() {
  return (
    <section id="participar" className="grain relative overflow-hidden py-32 md:py-48">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 110%, oklch(0.5 0.17 36 / 55%), transparent 62%)," +
            "radial-gradient(70% 50% at 50% -10%, oklch(0.28 0.06 45 / 60%), transparent 70%)",
        }}
      />
      <div className="hidden md:block">
        <EmberField count={10} />
      </div>

      <div className="relative mx-auto w-full max-w-[78rem] px-6 text-center md:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-4xl leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
            O seu próximo nível
            <span className="block text-ember-gradient">não acontece por acaso.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 text-base text-muted-foreground">Ele começa com uma decisão.</p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-12">
            <PrimaryCTA href="#contato" className="px-10 py-5 text-[0.8rem]">
              Quero participar do Cáliber Summit
            </PrimaryCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
