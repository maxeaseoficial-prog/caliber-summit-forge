import { Reveal, SectionContainer, SectionEyebrow } from "./primitives";

const PROFILES = ["Empresários", "Sócios", "Gestores", "Líderes", "Empreendedores em expansão"];

export function Audience() {
  return (
    <SectionContainer id="para-quem" className="py-24 md:py-36">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
        <div className="min-w-0">
          <Reveal>
            <SectionEyebrow>Para quem é</SectionEyebrow>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Para quem não quer
              <span className="block text-ember-gradient">construir pequeno.</span>
            </p>
          </Reveal>
        </div>

        <div className="min-w-0">
          <Reveal delay={160}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              O Cáliber Summit foi criado para empresários e líderes que entenderam que
              crescer exige mais do que trabalhar mais — exige pensar melhor, estruturar
              melhor e decidir melhor.
            </p>
          </Reveal>
          <ul className="mt-12 flex flex-col">
            {PROFILES.map((p, i) => (
              <Reveal as="li" key={p} delay={200 + i * 90}>
                <div className="flex items-center gap-5 border-b border-border py-4">
                  <span aria-hidden className="h-1 w-1 rotate-45 bg-ember" />
                  <span className="font-sans text-sm uppercase tracking-[0.22em] text-foreground/85">
                    {p}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
