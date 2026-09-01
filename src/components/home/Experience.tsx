import { Reveal, SectionContainer, SectionEyebrow } from "./primitives";

const ITEMS = [
  {
    title: "Conteúdo de alto nível",
    text: "Discussões densas, aplicáveis e alinhadas à realidade de quem conduz uma empresa.",
  },
  {
    title: "Networking estratégico",
    text: "Um ambiente desenhado para aproximar pessoas que constroem em escala.",
  },
  {
    title: "Experiência premium",
    text: "Cada detalhe pensado para sustentar o nível da conversa que acontece ali.",
  },
  {
    title: "Aplicação prática",
    text: "Sair com direção: o que decidir, o que estruturar e por onde começar.",
  },
];

export function Experience() {
  return (
    <SectionContainer id="experiencia" className="grain py-24 md:py-36">
      <div aria-hidden className="rule-ember mb-20" />
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="min-w-0 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionEyebrow>A experiência Cáliber</SectionEyebrow>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              Um ambiente construído
              <span className="block text-ember-gradient">para gerar movimento.</span>
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div
              aria-hidden
              className="mt-12 hidden h-56 w-full overflow-hidden rounded-sm border border-border lg:block"
              style={{
                background:
                  "radial-gradient(70% 80% at 20% 100%, oklch(0.48 0.16 34 / 45%), transparent 65%)," +
                  "linear-gradient(140deg, oklch(0.17 0.006 40), oklch(0.13 0.004 40))",
              }}
            />
          </Reveal>
        </div>

        <ul className="min-w-0 divide-y divide-border border-y border-border">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 120}>
              <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-6 py-10 transition-colors duration-500">
                <span className="pt-1 font-sans text-[0.7rem] tracking-[0.25em] text-copper/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl tracking-tight text-foreground transition-colors duration-500 group-hover:text-gold/90 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
