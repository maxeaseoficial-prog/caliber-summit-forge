import { Reveal, SectionContainer, SectionEyebrow } from "./primitives";

const PILLARS = [
  {
    n: "01",
    title: "Mentalidade",
    text: "A forma como você pensa define o limite das decisões que consegue tomar.",
  },
  {
    n: "02",
    title: "Estrutura",
    text: "Crescimento sustentável exige processos, estratégia e uma empresa preparada para avançar.",
  },
  {
    n: "03",
    title: "Prosperidade",
    text: "Resultado é consequência de visão, execução, relacionamento e decisões melhores.",
  },
];

export function Pillars() {
  return (
    <SectionContainer id="pilares" className="py-24 md:py-36">
      <Reveal>
        <SectionEyebrow>Os três pilares</SectionEyebrow>
      </Reveal>

      <ul className="mt-14 grid gap-px border-t border-border md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <Reveal as="li" key={p.n} delay={i * 140} className="min-w-0">
            <div className="group relative h-full border-b border-border px-0 py-12 transition-colors duration-500 md:border-b-0 md:border-r md:px-8 md:last:border-r-0">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
                style={{
                  background: "var(--gradient-rule)",
                  transformOrigin: "left",
                  transitionTimingFunction: "var(--ease-cinematic)",
                }}
              />
              <span className="block font-display text-6xl leading-none text-foreground/12 transition-colors duration-500 group-hover:text-copper/45 md:text-7xl">
                {p.n}
              </span>
              <h3 className="mt-6 font-sans text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
                {p.title}
              </h3>
              <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </SectionContainer>
  );
}
