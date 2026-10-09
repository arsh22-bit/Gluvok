"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PilotDialog } from "@/components/pilot-dialog";
import {
  ArrowDown,
  ArrowRight,
  Cpu,
  Layers,
  ShieldCheck,
  Check,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 py-20 lg:py-28">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 technical-grid pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl space-y-8">
          {/* Engineering Metadata Tag */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-xs border border-border/80 bg-secondary/40 text-xs font-mono text-muted-foreground">
            <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-foreground font-medium">INDUSTRIAL WEIGHBRIDGE AUTOMATION PLATFORM</span>
            <span className="text-muted-foreground/50">|</span>
            <span className="hidden sm:inline">ZERO SCALE REPLACEMENT RETROFIT</span>
          </div>

          {/* Primary Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
            Turn existing weighbridges into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500">
              autonomous weighing stations.
            </span>
          </h1>

          {/* Precision Narrative */}
          <p className="text-lg sm:text-xl text-muted-foreground font-normal leading-relaxed max-w-3xl">
            Gluvok retrofits onto your operational scale indicators via RS-232/485 serial bus,
            synchronizing high-speed ANPR cameras and Raspberry Pi edge AI.
            Cut truck turnaround from 4 minutes to under 18 seconds while eliminating manual entry errors,
            axle misplacement, and load discrepancies.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <PilotDialog>
              <Button
                size="lg"
                className="h-12 px-6 rounded-xs font-mono text-xs uppercase tracking-wider bg-foreground text-background hover:bg-neutral-200 transition-colors"
              >
                Schedule 48-Hour Plant Pilot
                <ArrowRight className="size-4" data-icon="inline-end" />
              </Button>
            </PilotDialog>

            <a href="#console">
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-6 rounded-xs font-mono text-xs uppercase tracking-wider border-border/80 hover:bg-secondary/60 text-foreground"
              >
                Inspect Live Console
                <ArrowDown className="size-4" data-icon="inline-end" />
              </Button>
            </a>
          </div>

          {/* Proof Markers & Micro-Specifications */}
          <div className="pt-8 border-t border-border/60 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                &lt; 18s
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-tight">
                Cycle Throughput
              </div>
              <div className="text-[11px] text-muted-foreground/70">
                Down from 3–5 min queues
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                99.4%
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-tight">
                ANPR Plate Precision
              </div>
              <div className="text-[11px] text-muted-foreground/70">
                Dust, rain & night vision
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                0 Days
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-tight">
                Scale Downtime
              </div>
              <div className="text-[11px] text-muted-foreground/70">
                Parallel passive serial tap
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                100%
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-tight">
                Edge Offline Buffer
              </div>
              <div className="text-[11px] text-muted-foreground/70">
                Zero dispatch disruption
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
