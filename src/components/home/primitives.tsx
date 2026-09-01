import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/caliber-summit-logo.png.asset.json";

/** Scroll-triggered fade + translate reveal. Respects prefers-reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "span" | "li" | "p" | "h1" | "h2";
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "will-change-transform",
        shown ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-[2px]",
        className,
      )}
      style={{
        transitionProperty: "opacity, transform, filter",
        transitionDuration: "900ms",
        transitionTimingFunction: "var(--ease-cinematic)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

export function SectionContainer({
  children,
  className,
  id,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "footer" | "div";
}) {
  return (
    <Tag id={id} className={cn("relative w-full scroll-mt-24", className)}>
      <div className="mx-auto w-full max-w-[78rem] px-6 md:px-10">{children}</div>
    </Tag>
  );
}

export function SectionEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-sans text-[0.68rem] font-medium uppercase tracking-[0.36em] text-copper",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-copper/60" />
      {children}
    </span>
  );
}

export function PrimaryCTA({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-sm px-8 py-4 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-[filter,transform] duration-300 hover:brightness-115 active:translate-y-px",
        className,
      )}
      style={{ backgroundImage: "var(--gradient-ember)" }}
    >
      <span
        aria-hidden
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(100deg, transparent 30%, oklch(0.95 0.05 80 / 25%) 50%, transparent 70%)",
        }}
      />
      <span className="relative">{children}</span>
    </a>
  );
}

export function SecondaryCTA({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-sm border border-border bg-foreground/[0.02] px-8 py-4 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-foreground/85 transition-colors duration-300 hover:border-copper/50 hover:bg-copper/[0.07] hover:text-foreground",
        className,
      )}
    >
      {children}
    </a>
  );
}

/**
 * Brand mark. Swap the imported asset pointer to update the official logo —
 * no component changes required.
 */
export function Logo({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "compact";
}) {
  return (
    <img
      src={logoAsset.url}
      alt="Cáliber Summit"
      width={1656}
      height={932}
      loading={variant === "full" ? "eager" : "lazy"}
      className={cn("h-auto w-full select-none object-contain", className)}
    />
  );
}

export function EmberField({ count = 14 }: { count?: number }) {
  const seeds = Array.from({ length: count }, (_, i) => i);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((i) => (
        <span
          key={i}
          className="ember-particle"
          style={
            {
              left: `${(i * 37) % 100}%`,
              bottom: `${(i * 13) % 40}%`,
              "--dx": `${((i % 5) - 2) * 18}px`,
              "--dur": `${8 + (i % 6) * 1.7}s`,
              animationDelay: `${(i % 9) * 1.3}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
