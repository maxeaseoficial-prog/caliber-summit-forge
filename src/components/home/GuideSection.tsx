import { Reveal, SectionEyebrow } from "./primitives";

const METRICS = [
  ["19 anos", "de atuação prática"],
  ["+450 empresas", "estruturadas"],
  ["10 estados", "atendidos"],
  ["+R$ 100 milhões", "em lucro gerado"],
] as const;

export function GuideSection() {
  return (
    <section
      id="quem-vai-guiar"
      className="relative isolate overflow-hidden bg-background lg:min-h-[640px] xl:min-h-[660px]"
    >
      <img
        src="/images/leonardo-hero-original.jpg"
        alt="Leonardo Froese"
        className="pointer-events-none absolute inset-x-0 top-0 h-[360px] w-full select-none object-cover object-[68%_center] sm:h-[420px] lg:inset-0 lg:h-full lg:object-cover lg:object-[70%_center]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[430px] lg:inset-0 lg:h-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.80) 30%, rgba(0,0,0,0.56) 48%, rgba(0,0,0,0.18) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[460px] lg:inset-0 lg:h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.55) 82%, var(--background) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[78rem] px-6 pb-16 pt-[300px] sm:px-10 sm:pt-[340px] lg:flex lg:min-h-[640px] lg:items-center lg:px-10 lg:py-16 xl:min-h-[660px]">
        <div className="max-w-[620px]">
          <Reveal>
            <SectionEyebrow>Quem vai guiar você?</SectionEyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]">
              <span className="block">LEONARDO</span>
              <span className="block">FROESE</span>
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85 sm:text-base lg:mt-7">
            <Reveal delay={180}>
              <p>
                Leonardo Froese é fundador da Cáliber e do Grupo Froese. Há <span className="text-[#D97945]">19 anos</span> atua dentro de empresas, estruturando gestão ao lado do dono e transformando problemas de operação em decisões práticas.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p>
                Ao longo dessa trajetória, já participou da estruturação de <span className="text-[#D97945]">mais de 450 empresas</span> em <span className="text-[#D97945]">10 estados</span>, atendendo negócios de diferentes portes e acumulando <span className="text-[#D97945]">mais de R$ 100 milhões em lucro gerado para clientes</span>.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p>
                No RPM Summit, Leonardo vai colocar Pessoas, Finanças e Vendas sob uma visão construída dentro de operações reais, para ajudar você a identificar o que está travando resultado, qual prioridade precisa vir primeiro e onde sua empresa precisa ganhar estrutura para crescer com mais força e menos dependência do dono.
              </p>
            </Reveal>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-5 border-y border-copper/20 py-5 lg:grid-cols-4 lg:gap-x-4">
            {METRICS.map(([value, label], index) => (
              <Reveal key={value} delay={340 + index * 50}>
                <div>
                  <p className="font-display text-2xl leading-none text-[#D97945] lg:text-[1.7rem]">{value}</p>
                  <p className="mt-2 font-sans text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={580}>
            <p className="mt-6 font-display text-xl italic leading-tight text-foreground/90 sm:text-2xl">
              Validado no caixa, não na teoria.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
