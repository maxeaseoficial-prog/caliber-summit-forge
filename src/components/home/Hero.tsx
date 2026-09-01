import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { EmberField, PrimaryCTA, SecondaryCTA } from "./primitives";

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
    <section id="topo" className="grain relative min-h-[100svh] overflow-hidden bg-background">
      {/* Base atmosphere preserved behind the new portrait composition */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 75% at 78% 72%, oklch(0.42 0.14 32 / 26%), transparent 66%)," +
            "radial-gradient(70% 52% at 18% 16%, oklch(0.55 0.11 45 / 14%), transparent 64%)," +
            "var(--background)",
        }}
      />

      {/* Leonardo portrait — the original aspect ratio is preserved */}
      <div aria-hidden className="hero-portrait pointer-events-none absolute overflow-hidden">
        <img
          src="/images/leonardo-hero.jpg"
          alt=""
          width={1920}
          height={2880}
          fetchPriority="high"
          decoding="async"
          className="hero-portrait-image will-change-transform"
          style={{ transform: `translate3d(0, ${offset * 0.03}px, 0) scale(1.03)` }}
        />
        <div aria-hidden className="hero-portrait-tone pointer-events-none absolute inset-0" />
      </div>

      {/* Responsive fade joins the photograph to the existing dark/magma world */}
      <div aria-hidden className="hero-atmosphere pointer-events-none absolute inset-0" />

      {/* Warm ember glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          transform: `translate3d(0, ${offset * 0.18}px, 0)`,
          background:
            "radial-gradient(120% 70% at 70% 100%, oklch(0.42 0.14 32 / 30%), transparent 62%)," +
            "radial-gradient(80% 50% at 20% 20%, oklch(0.55 0.11 45 / 18%), transparent 60%)",
        }}
      />

      {/* Bottom fade into page background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{
          background: "linear-gradient(180deg, transparent, var(--background))",
        }}
      />

      <div className="hidden md:block">
        <EmberField count={16} />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[78rem] grid-cols-1 px-6 pt-[48svh] pb-16 md:px-10 md:pt-[52svh] md:pb-20 lg:min-h-[100svh] lg:grid-cols-[minmax(0,56%)_minmax(0,44%)] lg:items-center lg:pt-28 lg:pb-20">
        <div className="min-w-0 max-w-[46rem] text-left lg:pr-8 xl:pr-10">
          <h1
            className={cn(
              "font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl",
              step(0),
            )}
            style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
          >
            Cáliber Summit
          </h1>

          <p
            className={cn(
              "mt-6 max-w-2xl font-sans text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.3em] text-muted-foreground sm:text-[0.72rem] lg:mt-7",
              step(160),
            )}
            style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
          >
            Uma experiência para empresários que decidiram subir o nível
          </p>

          <p
            className={cn(
              "mt-7 max-w-[46rem] font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] xl:text-6xl 2xl:text-7xl",
              step(300),
            )}
            style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
          >
            O próximo nível do seu negócio
            <span className="block text-ember-gradient">começa pelo seu.</span>
          </p>

          <p
            className={cn(
              "mt-7 max-w-xl text-base leading-relaxed text-muted-foreground lg:mt-8",
              step(440),
            )}
            style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
          >
            Um encontro criado para empresários que buscam clareza, estrutura, conexões estratégicas
            e crescimento consistente.
          </p>

          <div
            className={cn(
              "mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-start lg:mt-10",
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
            className={cn("mt-10 flex items-center justify-start gap-4 lg:mt-11", step(720))}
            style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
          >
            <span aria-hidden className="hidden h-px w-12 bg-copper/40 sm:block" />
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-bronze sm:text-[0.68rem] sm:tracking-[0.38em]">
              Mentalidade • Estrutura • Prosperidade
            </span>
            <span aria-hidden className="hidden h-px w-12 bg-copper/40 sm:block" />
          </div>
        </div>

        <div aria-hidden className="hidden lg:block" />
      </div>
    </section>
  );
}
