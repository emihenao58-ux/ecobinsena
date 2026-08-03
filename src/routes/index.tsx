import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/ecobin/SiteHeader";
import { HeroSection } from "@/components/ecobin/HeroSection";
import { ProblemSection } from "@/components/ecobin/ProblemSection";
import { ObjectivesSection } from "@/components/ecobin/ObjectivesSection";
import { ImpactSection } from "@/components/ecobin/ImpactSection";
import { ArchitectureSection } from "@/components/ecobin/ArchitectureSection";
import { TechSection } from "@/components/ecobin/TechSection";
import { EcoScanSection } from "@/components/ecobin/EcoScanSection";
import { ResultsSection } from "@/components/ecobin/ResultsSection";
import { PrototypeSection } from "@/components/ecobin/PrototypeSection";
import { TeamSection } from "@/components/ecobin/TeamSection";
import { ClosingSection } from "@/components/ecobin/ClosingSection";
import { SiteFooter } from "@/components/ecobin/SiteFooter";

const title = "EcoBin — Caneca inteligente con IA, IoT y analítica | SENA";
const description =
  "EcoBin es un prototipo escolar del SENA: caneca inteligente y app EcoScan IA que usan visión artificial, IoT y analítica de datos para mejorar la separación de residuos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/**
 * Landing page de EcoBin: una sola página con navegación por anclas.
 * Cada sección vive en src/components/ecobin/ para poder editarla por separado.
 */
function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <ObjectivesSection />
        <ImpactSection />
        <ArchitectureSection />
        <TechSection />
        <EcoScanSection />
        <ResultsSection />
        <PrototypeSection />
        <TeamSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
