import { useState } from "react";
import { Play } from "lucide-react";
import { Logo, Reveal, SectionContainer, SectionEyebrow } from "./primitives";

type Testimonial = {
  id: string;
  title: string;
  videoId: string | null;
};

const TESTIMONIALS: readonly Testimonial[] = [
  { id: "depoimento-01", title: "Depoimento 01", videoId: "s5Xw05eyuOM" },
  { id: "depoimento-02", title: "Depoimento 02", videoId: "nGj5NN4XvyM" },
  { id: "depoimento-03", title: "Depoimento 03", videoId: "odkL-rQqsC8" },
];

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState<string | null>(null);

  return (
    <SectionContainer
      id="depoimentos"
      className="border-t border-border py-24 md:py-32"
    >
      <div className="mb-12 max-w-2xl md:mb-16">
        <Reveal>
          <SectionEyebrow>Depoimentos</SectionEyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-8 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
            Experiências que
            <span className="block text-ember-gradient">merecem ser ouvidas.</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => {
          const videoId = testimonial.videoId?.trim() ?? "";
          const hasVideo = /^[a-zA-Z0-9_-]{11}$/.test(videoId);
          const titleId = `${testimonial.id}-titulo`;

          const pendingCover = (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 80%, color-mix(in oklch, var(--copper) 14%, transparent), transparent 65%), var(--surface)",
              }}
            >
              <Logo className="max-w-[10rem]" />
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/50 bg-background/70 text-copper">
                <Play aria-hidden="true" className="ml-1 h-5 w-5" fill="currentColor" />
              </span>
            </div>
          );

          const youtubeCover = hasVideo ? (
            <div className="absolute inset-0 overflow-hidden bg-black">
              <img
                src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  const image = event.currentTarget;
                  const fallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                  if (image.src !== fallback) image.src = fallback;
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/5"
              />
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-copper/60 bg-black/70 text-copper shadow-[0_0_30px_rgba(0,0,0,0.35)] transition-transform duration-300 motion-safe:group-hover:scale-110">
                <Play aria-hidden="true" className="ml-1 h-6 w-6" fill="currentColor" />
              </span>
            </div>
          ) : null;

          return (
            <Reveal key={testimonial.id} delay={160 + index * 100} className="min-w-0">
              <article
                aria-labelledby={titleId}
                className="overflow-hidden rounded-sm border border-copper/30 bg-surface"
              >
                <div className="relative aspect-video min-h-[202px] w-full overflow-hidden">
                  {hasVideo && activeTestimonial === testimonial.id ? (
                    <iframe
                      className="absolute inset-0 h-full w-full border-0"
                      src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1&playsinline=1&autoplay=1`}
                      title={`${testimonial.title} do RPM Summit`}
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                      allowFullScreen
                    />
                  ) : hasVideo ? (
                    <button
                      type="button"
                      onClick={() => setActiveTestimonial(testimonial.id)}
                      aria-label={`Reproduzir ${testimonial.title.toLowerCase()}`}
                      className="group absolute inset-0 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ember"
                    >
                      {youtubeCover}
                    </button>
                  ) : (
                    pendingCover
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-4">
                  <h3
                    id={titleId}
                    className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground/85"
                  >
                    {testimonial.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {hasVideo ? "YouTube" : "Em breve"}
                  </span>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionContainer>
  );
}
