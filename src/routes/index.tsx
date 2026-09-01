import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Pillars } from "@/components/home/Pillars";
import { Experience } from "@/components/home/Experience";
import { Audience } from "@/components/home/Audience";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/home/Footer";

const TITLE = "Cáliber Summit — Mentalidade, Estrutura e Prosperidade";
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
        <Manifesto />
        <Pillars />
        <Experience />
        <Audience />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
