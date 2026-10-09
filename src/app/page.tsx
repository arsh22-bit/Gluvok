"use client";

import { useState } from "react";
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
import { ClaudeCookieConsentCard } from "@/components/claude/claude-ui";

export default function Home() {
  const [cookieConsent, setCookieConsent] = useState(true);

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#141413] flex flex-col antialiased selection:bg-[#cc785c] selection:text-white">
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

      {/* Floating Dark Cookie Consent Card from Claude DESIGN.md */}
      {cookieConsent && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <ClaudeCookieConsentCard
            onAccept={() => setCookieConsent(false)}
            onDecline={() => setCookieConsent(false)}
          />
        </div>
      )}
    </div>
  );
}
