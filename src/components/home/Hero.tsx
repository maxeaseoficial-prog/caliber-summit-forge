import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { EmberField, Logo, PrimaryCTA, SecondaryCTA } from "./primitives";

export function Hero() {
  const [enter, setEnter] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const t = window.setTimeout(() => setEnter(true), 60);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return () => window.clearTimeout(t);
    const onScroll = () => setOffset(Math.min(window.scrollY, 600));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const step = (i: number) =>
    cn(
      "transition-[opacity,transform,filter] duration-[900ms]",
      enter ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-[3px]",
    ) + ` [transition-delay:${i}ms]`;

  return (
    <section
      id="topo"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          transform: `translate3d(0, ${offset * 0.18}px, 0)`,
          background:
            "radial-gradient(120% 70% at 50% 108%, oklch(0.45 0.16 34 / 45%), transparent 62%)," +
            "radial-gradient(60% 40% at 50% 12%, oklch(0.32 0.09 40 / 35%), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(180deg, transparent, var(--background))",
        }}
      />
      <div className="hidden md:block">
        <EmberField count={16} />
      </div>

      <div className="relative mx-auto w-full max-w-[78rem] px-6 text-center md:px-10">
        <div
          className={cn("mx-auto w-full max-w-[26rem] md:max-w-[34rem]", step(0))}
          style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
        >
          <h1 className="sr-only">
            Cáliber Summit — o próximo nível do seu negócio começa pelo seu
          </h1>
          <Logo />
        </div>

        <p
          className={cn(
            "mx-auto mt-8 max-w-2xl font-sans text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.3em] text-muted-foreground sm:text-[0.72rem]",
            step(160),
          )}
          style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
        >
          Uma experiência para empresários que decidiram subir o nível
        </p>

        <p
          className={cn(
            "mx-auto mt-8 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl",
            step(300),
          )}
          style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
        >
          O próximo nível do seu negócio
          <span className="block text-ember-gradient">começa pelo seu.</span>
        </p>

        <p
          className={cn(
            "mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground",
            step(440),
          )}
          style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
        >
          Um encontro criado para empresários que buscam clareza, estrutura, conexões
          estratégicas e crescimento consistente.
        </p>

        <div
          className={cn(
            "mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row",
            step(580),
          )}
          style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
        >
          <PrimaryCTA href="#participar" className="w-full sm:w-auto">
            Quero participar
          </PrimaryCTA>
          <SecondaryCTA href="#summit" className="w-full sm:w-auto">
            Conhecer o Summit
          </SecondaryCTA>
        </div>

        <div
          className={cn("mt-12 flex items-center justify-center gap-4", step(720))}
          style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
        >
          <span aria-hidden className="hidden h-px w-16 bg-copper/40 sm:block" />
          <span className="font-sans text-[0.6rem] uppercase tracking-[0.42em] text-bronze sm:text-[0.68rem]">
            Mentalidade • Estrutura • Prosperidade
          </span>
          <span aria-hidden className="hidden h-px w-16 bg-copper/40 sm:block" />
        </div>
      </div>
    </section>
  );
}
