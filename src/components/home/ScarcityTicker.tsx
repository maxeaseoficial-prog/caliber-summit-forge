const ITEMS = Array.from({ length: 6 }, (_, index) => index);

function TickerGroup() {
  return (
    <div aria-hidden className="flex shrink-0 items-center gap-7 pr-7 sm:gap-10 sm:pr-10">
      {ITEMS.map((index) => (
        <div key={index} className="flex shrink-0 items-center gap-7 sm:gap-10">
          <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white sm:text-[0.82rem] sm:tracking-[0.18em]">
            Vagas limitadas
          </span>
          <span className="h-1 w-1 shrink-0 rounded-full bg-white/60" />
        </div>
      ))}
    </div>
  );
}

export function ScarcityTicker() {
  return (
    <section
      aria-label="Vagas limitadas"
      className="relative z-20 overflow-hidden border-y border-white/10"
    >
      <style>{`
        @keyframes scarcity-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .scarcity-track {
          animation: scarcity-marquee 22s linear infinite;
        }

        @media (max-width: 640px) {
          .scarcity-track {
            animation-duration: 18s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scarcity-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <div
        className="py-2 sm:py-2.5"
        style={{ backgroundImage: "var(--gradient-ember)" }}
      >
        <div className="scarcity-track flex w-max min-w-full items-center will-change-transform">
          <TickerGroup />
          <TickerGroup />
        </div>
      </div>
    </section>
  );
}
