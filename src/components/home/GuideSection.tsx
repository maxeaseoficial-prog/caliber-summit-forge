import leonardoHeroAsset from "@/assets/leonardo-lounge.png.asset.json";
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
      className="relative isolate min-h-[760px] overflow-hidden bg-background sm:min-h-[780px] lg:min-h-[680px] xl:min-h-[700px]"
    >
      <img
        src={leonardoHeroAsset.url}
        alt="Leonardo Froese"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-[72%_38%] sm:object-[70%_36%] lg:object-[68%_34%]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.91) 28%, rgba(0,0,0,0.75) 43%, rgba(0,0,0,0.42) 57%, rgba(0,0,0,0.13) 72%, rgba(0,0,0,0.02) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.04) 58%, rgba(0,0,0,0.42) 82%, var(--background) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[78rem] items-end px-6 pb-16 pt-[300px] sm:min-h-[780px] sm:px-10 sm:pb-20 sm:pt-[340px] lg:min-h-[680px] lg:items-center lg:px-10 lg:py-16 xl:min-h-[700px]">
        <div className="max-w-[600px] lg:max-w-[610px]">
          <Reveal>
            <SectionEyebrow>Quem vai guiar você?</SectionEyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]">
              <span className="block">LEONARDO</span>
              <span className="block">FROESE</span>
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/90 sm:text-base lg:mt-7">
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
