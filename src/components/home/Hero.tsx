import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { EmberField, PrimaryCTA } from "./primitives";

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

      <div aria-hidden className="hero-atmosphere pointer-events-none absolute inset-0" />

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
      <div className="relative z-10 mx-auto grid w-full max-w-[78rem] grid-cols-1 px-6 pt-[54svh] pb-16 md:px-10 md:pt-[58svh] md:pb-20 lg:min-h-[100svh] lg:grid-cols-[minmax(0,56%)_minmax(0,44%)] lg:items-center lg:pt-44 lg:pb-20">
        <div className="min-w-0 max-w-[46rem] text-left lg:pr-8 xl:pr-10">
          <p
            className={cn(
              "max-w-[46rem] font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[5rem]",
              step(0),
            )}
            style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
          >
            Sua empresa cresceu.
            <span className="block text-ember-gradient">Agora ela precisa ficar mais forte.</span>
          </p>

          <p
            className={cn(
              "mt-7 max-w-xl text-lg font-medium leading-relaxed text-foreground sm:text-xl lg:mt-8",
              step(440),
            )}
            style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
          >
            Descubra onde Pessoas, Finanças e Vendas estão travando lucro, autonomia e crescimento, e{" "}
            <span style={{ color: "#D97945" }}>qual prioridade precisa ganhar estrutura primeiro.</span>
          </p>

          <div
            className={cn(
              "mt-9 flex justify-center lg:mt-10",
              step(580),
            )}
            style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
          >
            <PrimaryCTA
              href="#participar"
              className="w-full rounded-full px-10 [--gradient-ember:linear-gradient(135deg,#004d00_0%,#008000_52%,#16a016_100%)] sm:w-auto sm:min-w-56"
            >
              Quero participar
            </PrimaryCTA>
          </div>
        </div>

        <div aria-hidden className="hidden lg:block" />
      </div>
    </section>
  );
}
