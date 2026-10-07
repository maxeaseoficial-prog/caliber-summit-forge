import { Reveal, SectionContainer, SectionEyebrow } from "./primitives";

const METRICS = [
  ["19 anos", "de atuação prática"],
  ["+450 empresas", "estruturadas"],
  ["10 estados", "atendidos"],
  ["+R$ 100 milhões", "em lucro gerado"],
] as const;

export function GuideSection() {
  return (
    <SectionContainer
      id="quem-vai-guiar"
      className="relative min-h-[58rem] overflow-hidden bg-background py-0 sm:min-h-[62rem] lg:min-h-[48rem] lg:py-28"
    >
      <img
        src="/images/leonardo-guide.svg"
        alt="Leonardo Froese"
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] w-full select-none object-cover object-[42%_center] sm:h-[38rem] lg:inset-0 lg:h-full lg:object-center"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,4,3,0.08) 0%, rgba(5,4,3,0.22) 30%, rgba(5,4,3,0.76) 52%, var(--background) 67%, var(--background) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,4,3,0.08) 0%, rgba(5,4,3,0.16) 40%, rgba(5,4,3,0.72) 58%, rgba(5,4,3,0.92) 72%, var(--background) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44"
        style={{ background: "linear-gradient(180deg, transparent, var(--background))" }}
      />

      <div className="relative z-10 grid pt-[26rem] sm:pt-[30rem] lg:grid-cols-2 lg:pt-0">
        <div aria-hidden className="hidden lg:block" />

        <div className="min-w-0 pb-20 lg:pl-10 lg:pb-16 xl:pl-16">
          <Reveal>
            <SectionEyebrow>Quem vai guiar você?</SectionEyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              LEONARDO FROESE
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 text-[0.98rem] leading-relaxed text-foreground/85 sm:text-base">
            <Reveal delay={180}>
              <p>
                Leonardo Froese é fundador da Cáliber e do Grupo Froese. Há <span className="font-semibold text-[#D97945]">19 anos</span> atua dentro de empresas, estruturando gestão ao lado do dono e transformando problemas de operação em decisões práticas.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p>
                Ao longo dessa trajetória, já participou da estruturação de <span className="font-semibold text-[#D97945]">mais de 450 empresas em 10 estados</span>, atendendo negócios de diferentes portes e acumulando <span className="font-semibold text-[#D97945]">mais de R$ 100 milhões em lucro gerado para clientes</span>.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p>
                No RPM Summit, Leonardo vai colocar Pessoas, Finanças e Vendas sob uma visão construída dentro de operações reais, para ajudar você a identificar o que está travando resultado, qual prioridade precisa vir primeiro e onde sua empresa precisa ganhar estrutura para crescer com mais força e menos dependência do dono.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6 border-y border-copper/20 py-6">
            {METRICS.map(([value, label], index) => (
              <Reveal key={value} delay={340 + index * 60}>
                <div>
                  <p className="font-display text-2xl leading-none text-[#D97945] sm:text-3xl">{value}</p>
                  <p className="mt-2 font-sans text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.68rem]">
                    {label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={620}>
            <p className="mt-8 font-display text-2xl italic leading-tight text-foreground sm:text-3xl">
              Validado no caixa, não na teoria.
            </p>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}
