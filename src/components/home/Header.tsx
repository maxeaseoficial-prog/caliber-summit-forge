import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./primitives";

const TICKET_GRADIENT =
  "linear-gradient(135deg, #004d00 0%, #008000 52%, #16a016 100%)";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
      style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
    >
      <div
        className="relative overflow-hidden border-b border-white/10 px-2 text-center"
        style={{ backgroundImage: "var(--gradient-ember)" }}
      >
        <p className="relative z-10 mx-auto max-w-[78rem] px-6 py-2 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white sm:text-[0.68rem] sm:tracking-[0.26em]">
          <span aria-hidden className="mr-2 inline-block text-white/90">
            ◆
          </span>
          Exclusivo para donos de empresa com 10 a 1000 funcionários
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-[78rem] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 px-4 py-3 sm:gap-6 sm:px-6 md:px-10 md:py-4">
        <a
          href="#topo"
          aria-label="Ir para o início do Cáliber Summit"
          className="min-w-0 justify-self-start"
        >
          <Logo variant="compact" className="w-28 sm:w-36 md:w-44" />
        </a>

        <div className="min-w-0 justify-self-center text-center">
          <p className="flex max-w-[48vw] flex-wrap items-center justify-center gap-x-2 gap-y-1 font-sans text-[0.58rem] font-bold uppercase leading-tight tracking-[0.08em] text-foreground sm:max-w-none sm:flex-nowrap sm:text-[0.72rem] md:gap-x-2.5 md:text-[0.82rem] lg:text-[0.88rem]">
            <span className="whitespace-nowrap">10 de Dezembro</span>
            <span aria-hidden className="text-copper/80">•</span>
            <span className="whitespace-nowrap">Cuiabá</span>
            <span aria-hidden className="text-copper/80">•</span>
            <span className="whitespace-nowrap">3 horas presenciais</span>
          </p>
        </div>

        <a
          href="#participar"
          className="justify-self-end rounded-full px-4 py-2.5 font-sans text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white transition-[filter,transform] duration-300 hover:brightness-115 active:translate-y-px sm:px-7 sm:py-3 sm:text-[0.72rem] md:min-w-40 md:text-center"
          style={{ backgroundImage: TICKET_GRADIENT }}
        >
          Ingressos
        </a>
      </div>
    </header>
  );
}
