import { Reveal, SectionContainer } from "./primitives";

const PAIN_POINTS = [
  {
    title: "Minha empresa vende, mas o lucro não aparece",
    description:
      "Você trabalha, vende, gira a operação, mas no fim do mês a sensação é a mesma: entrou dinheiro, mas sobrou menos do que deveria.",
  },
  {
    title: "Se eu sair, a empresa desacelera",
    description:
      "A operação continua exigindo sua presença para decidir, cobrar, resolver e destravar. A empresa cresce, mas ainda depende demais de você.",
  },
  {
    title: "Tenho equipe, mas tudo ainda passa por mim",
    description:
      "Você contratou, delegou parte da rotina, mas as decisões importantes continuam voltando para a sua mesa.",
  },
  {
    title: "Não sei qual problema atacar primeiro",
    description:
      "Existe muita urgência, muita demanda e pouco foco. Sem clareza de prioridade, a empresa gira, mas não avança com força.",
  },
  {
    title: "Vendo mais, mas sinto a empresa mais pesada",
    description:
      "O faturamento cresce, mas junto vêm retrabalho, desorganização, mais custo e mais pressão sobre o dono.",
  },
  {
    title: "Meu comercial gera movimento, mas perde dinheiro na execução",
    description:
      "Entram oportunidades, saem propostas, mas falta acompanhamento, conversão e processo para transformar esforço em resultado.",
  },
] as const;

export function PainPoints() {
  return (
    <SectionContainer
      id="dores"
      className="overflow-hidden border-y border-border/70 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 0%, oklch(0.42 0.14 32 / 12%), transparent 72%), radial-gradient(55% 45% at 100% 100%, oklch(0.5 0.1 45 / 8%), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-copper sm:text-[0.72rem]">
            Dores reais de quem está crescendo
          </p>
          <h2 className="mt-5 font-display text-3xl leading-[1.06] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            No Summit, vamos colocar na mesa as principais dores que travam crescimento, lucro e clareza de gestão!
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {PAIN_POINTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="group relative h-full min-h-[13rem] overflow-hidden rounded-sm border border-copper/25 bg-foreground/[0.025] p-6 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-copper/50 hover:bg-copper/[0.045] sm:p-7">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px opacity-70"
                  style={{ backgroundImage: "var(--gradient-ember)" }}
                />

                <div className="flex items-start justify-between gap-5">
                  <p className="max-w-[17rem] font-sans text-lg font-semibold leading-[1.12] text-foreground sm:text-xl">
                    “{item.title}”
                  </p>
                  <span className="shrink-0 font-display text-3xl leading-none text-copper/35 transition-colors duration-300 group-hover:text-copper/65">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
