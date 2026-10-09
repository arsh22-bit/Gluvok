import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WeighmentConsole } from "@/components/weighment-console";
import { ProblemSolution } from "@/components/problem-solution";
import { ArchitectureTopology } from "@/components/architecture-topology";
import { Capabilities } from "@/components/capabilities";
import { IndustryVerticals } from "@/components/industry-verticals";
import { HardwareMatrix } from "@/components/hardware-matrix";
import { RoiCalculator } from "@/components/roi-calculator";
import { DeploymentPlaybook } from "@/components/deployment-playbook";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased selection:bg-neutral-800 selection:text-neutral-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WeighmentConsole />
        <ProblemSolution />
        <ArchitectureTopology />
        <Capabilities />
        <IndustryVerticals />
        <HardwareMatrix />
        <RoiCalculator />
        <DeploymentPlaybook />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
