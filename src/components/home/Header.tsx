import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./primitives";

const NAV = [
  { label: "O Summit", href: "#summit" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Pilares", href: "#pilares" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
      style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
    >
      <div className="mx-auto grid w-full max-w-[78rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:px-10">
        <a href="#topo" aria-label="Cáliber Summit — início" className="min-w-0">
          <Logo variant="compact" className="w-32 md:w-40" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link font-sans text-[0.72rem] font-medium uppercase tracking-[0.2em]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#participar"
            className="rounded-sm border border-copper/40 px-5 py-2.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:border-ember/70 hover:bg-copper/10"
          >
            Quero participar
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 items-center justify-center justify-self-end lg:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-foreground transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-foreground transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="Principal (mobile)" className="mx-auto max-w-[78rem] px-6 py-6">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-border/70 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl tracking-wide text-foreground/90"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#participar"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-sm px-6 py-4 text-center font-sans text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-ember)" }}
          >
            Quero participar
          </a>
        </nav>
      </div>
    </header>
  );
}
