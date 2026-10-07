import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { ScarcityTicker } from "@/components/home/ScarcityTicker";
import { PainPoints } from "@/components/home/PainPoints";
import { Pillars } from "@/components/home/Pillars";
import { Experience } from "@/components/home/Experience";
import { Audience } from "@/components/home/Audience";
import { GuideSection } from "@/components/home/GuideSection";
import { PrimaryCTA } from "@/components/home/primitives";
import { Testimonials } from "@/components/home/Testimonials";
import { EventInfo } from "@/components/home/EventInfo";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/home/Footer";

const TITLE = "Cáliber Summit: Mentalidade, Estrutura e Prosperidade";
const DESCRIPTION =
  "Um encontro para empresários e líderes que buscam clareza, estrutura, conexões estratégicas e crescimento consistente.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScarcityTicker />
        <PainPoints />
        <Audience />
        <GuideSection />
        <div className="bg-background px-6 py-10 sm:px-10 sm:py-12">
          <div className="mx-auto flex w-full max-w-[78rem] justify-center">
            <PrimaryCTA
              href="#participar"
              className="w-full rounded-full px-10 [--gradient-ember:linear-gradient(135deg,#004d00_0%,#008000_52%,#16a016_100%)] sm:w-auto sm:min-w-56"
            >
              Quero participar
            </PrimaryCTA>
          </div>
        </div>
        <Pillars />
        <Experience />
        <Testimonials />
        <EventInfo />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
