"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PilotDialog } from "@/components/pilot-dialog";
import { ShieldCheck, ArrowRight, PhoneCall, Cpu, Check } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 lg:py-24 border-b border-border/60 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 technical-grid pointer-events-none opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-border/80 bg-card text-xs font-mono text-muted-foreground">
          <span className="size-2 rounded-full bg-emerald-400" />
          <span>EARLY ADOPTER PILOT PROGRAM // 2026 FLEET COHORT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground max-w-3xl mx-auto leading-tight">
          Eliminate weighbridge bottlenecks before your next dispatch peak.
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Book an engineering walkthrough or arrange a 48-hour parallel pilot on your scale.
          Our team arrives with pre-configured edge hardware ready to plug into your indicator.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <PilotDialog>
            <Button
              size="lg"
              className="h-12 px-8 font-mono text-xs uppercase tracking-wider bg-foreground text-background hover:bg-neutral-200"
            >
              Schedule 48-Hour Pilot
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Button>
          </PilotDialog>

          <a href="tel:+919988071707">
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-6 font-mono text-xs uppercase tracking-wider border-border hover:bg-secondary/60 text-foreground"
            >
              <PhoneCall className="size-4" data-icon="inline-start" />
              Direct Engineering Desk: +91 99880 71707
            </Button>
          </a>
        </div>

        {/* Assurance badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-foreground border-t border-border/40 max-w-2xl mx-auto">
          <span className="flex items-center gap-1.5">
            <Check className="size-3.5 text-emerald-400" />
            Zero civil work or new load cells
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="size-3.5 text-emerald-400" />
            Non-disclosure agreement on plant logs
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="size-3.5 text-emerald-400" />
            Turnkey hardware + software
          </span>
        </div>
      </div>
    </section>
  );
}
