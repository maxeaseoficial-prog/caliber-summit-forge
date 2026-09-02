import { Reveal, SectionContainer, SectionEyebrow } from "./primitives";
import manifestoHostAsset from "@/assets/manifesto-host.jpg.asset.json";

export function Manifesto() {
  return (
    <SectionContainer id="summit" className="grain py-28 md:py-40">
      <div aria-hidden className="rule-ember mb-20 md:mb-28" />
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-24">
        <div className="min-w-0">
          <Reveal>
            <SectionEyebrow>Não é apenas mais um evento</SectionEyebrow>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Empresas crescem
              <span className="block text-ember-gradient">quando seus líderes crescem.</span>
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                O Cáliber Summit foi pensado como uma experiência de transformação
                empresarial: um ambiente onde conhecimento, estratégia, relacionamento e
                execução se encontram no mesmo lugar.
              </p>
              <p>
                Não se trata de acumular conteúdo. Trata-se de sair com clareza sobre o
                que precisa ser decidido, estruturado e executado no seu negócio.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="min-w-0">
          <figure className="relative h-72 w-full overflow-hidden rounded-sm border border-border sm:h-96 lg:h-full lg:min-h-[26rem]">
            <img
              src={manifestoHostAsset.url}
              alt="Host do Cáliber Summit em ambiente de negócios"
              width={1192}
              height={1588}
              loading="lazy"
              className="h-full w-full object-cover object-center"
              style={{
                filter: "saturate(0.52) contrast(1.06) brightness(0.68) sepia(0.08)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.13 0.004 40 / 52%) 0%, transparent 30%)," +
                  "linear-gradient(0deg, oklch(0.13 0.004 40 / 82%) 0%, transparent 45%)," +
                  "linear-gradient(90deg, oklch(0.13 0.004 40 / 55%) 0%, transparent 35%)," +
                  "radial-gradient(80% 60% at 30% 100%, oklch(0.5 0.17 36 / 38%), transparent 60%)," +
                  "radial-gradient(60% 50% at 80% 10%, oklch(0.62 0.13 45 / 18%), transparent 70%)",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/2"
              style={{
                background:
                  "repeating-linear-gradient(180deg, transparent 0 22px, oklch(0.98 0 0 / 3%) 22px 23px)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 h-px w-full"
              style={{ background: "var(--gradient-rule)" }}
            />
          </figure>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
