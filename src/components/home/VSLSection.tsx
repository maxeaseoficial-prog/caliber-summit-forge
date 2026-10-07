import { useState } from "react";
import { Play } from "lucide-react";
import { Logo, Reveal, SectionContainer } from "./primitives";

// Preencha com o ID do YouTube quando o link oficial for fornecido.
const VSL_VIDEO_ID: string | null = null;

export function VSLSection() {
  const [playing, setPlaying] = useState(false);
  const videoId = VSL_VIDEO_ID ?? "";
  const hasVideo = /^[a-zA-Z0-9_-]{11}$/.test(videoId);

  const cover = (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6"
      style={{
        background:
          "radial-gradient(ellipse at 50% 80%, color-mix(in oklch, var(--copper) 14%, transparent), transparent 65%), var(--surface)",
      }}
    >
      <Logo className="max-w-[13rem] sm:max-w-[18rem]" />
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-copper/50 bg-background/70 text-copper sm:h-16 sm:w-16">
        <Play aria-hidden="true" className="ml-1 h-6 w-6" fill="currentColor" />
      </span>
      {!hasVideo && (
        <p className="text-sm tracking-wide text-muted-foreground">Vídeo em breve</p>
      )}
    </div>
  );

  return (
    <SectionContainer id="apresentacao" className="pt-10 md:pt-14">
      <h2 className="sr-only">Apresentação em vídeo do Cáliber Summit</h2>
      <Reveal className="mx-auto max-w-[60rem]">
        <div
          className="relative aspect-video min-h-[202px] w-full overflow-hidden rounded-sm border border-copper/30 bg-surface"
          style={{
            boxShadow:
              "0 0 64px -24px color-mix(in oklch, var(--copper) 24%, transparent)",
          }}
        >
          {hasVideo && playing ? (
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1&playsinline=1&autoplay=1`}
              title="Apresentação do Cáliber Summit"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : hasVideo ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Reproduzir apresentação do Cáliber Summit"
              className="absolute inset-0 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ember"
            >
              {cover}
            </button>
          ) : (
            cover
          )}
        </div>
      </Reveal>
    </SectionContainer>
  );
}
