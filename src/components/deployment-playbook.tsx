"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PilotDialog } from "@/components/pilot-dialog";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Radio,
  Eye,
  Zap,
} from "lucide-react";

export function DeploymentPlaybook() {
  const steps = [
    {
      day: "DAY 01",
      title: "Passive Parallel Serial Tap",
      hours: "4 Hours On-Site",
      icon: Radio,
      badge: "ZERO SCALE DOWNTIME",
      description:
        "Our engineers install the DIN-rail edge appliance inside your weighbridge cabin and tap passively into the indicator's secondary serial port or an isolated RS-232 splitter. Your existing weighbridge software and operator workflow continue with zero disruption.",
      activities: [
        "Indicator baud rate, framing, and continuous protocol handshake",
        "Load cell zero-tracking and stable-weight verification",
        "Galvanic isolation test ensuring no electrical load interference",
      ],
    },
    {
      day: "DAY 02",
      title: "Optical Calibration & Edge Baseline",
      hours: "6 Hours On-Site",
      icon: Eye,
      badge: "99.4% ANPR BENCHMARK",
      description:
        "We position and calibrate the front and rear IP cameras on existing scale entry poles. The edge vision pipeline runs in passive shadow mode, recognizing plates across shifts and comparing OCR outputs directly against operator keystrokes.",
      activities: [
        "Night IR illumination and headlight anti-glare tuning",
        "Dirty, weathered, and non-standard license plate model calibration",
        "Axle positioning line boundary sensor configuration",
      ],
    },
    {
      day: "DAY 03",
      title: "Controlled Pilot & Autonomous Go-Live",
      hours: "Go-Live Authorization",
      icon: Zap,
      badge: "MANAGEMENT SIGN-OFF",
      description:
        "With optical recognition and indicator weight capture running with 100% agreement, we enable automated boom barrier relays and digital ticket issuance. Your operators transition from data entry typists to supervisory managers.",
      activities: [
        "Unattended pilot for 200+ consecutive commercial truck dispatches",
        "Instant WhatsApp weigh slip delivery verification to transport fleet",
        "ERP webhook sync check and management executive review",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-24 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <span className="size-2 rounded-xs bg-cyan-400" />
              NON-INTRUSIVE IMPLEMENTATION PLAYBOOK
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              48-Hour Pilot on your active scale. Zero shutdown.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              We never ask a plant to halt operations for software installation. Gluvok runs
              passively in parallel until you have 100% empirical proof of accuracy.
            </p>
          </div>

          <PilotDialog>
            <Button className="font-mono text-xs uppercase tracking-wider bg-foreground text-background hover:bg-neutral-200">
              Book Controlled Site Pilot
              <ArrowRight className="size-3.5" data-icon="inline-end" />
            </Button>
          </PilotDialog>
        </div>

        {/* 3 Step Day-by-Day Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-xs border border-border/70 bg-card p-6 flex flex-col justify-between space-y-5 hover:border-foreground/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="text-xs font-semibold text-foreground">
                      {step.day}
                    </span>
                    <Badge variant="outline" className="text-[10px] border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                      {step.badge}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-foreground font-sans">
                      {step.title}
                    </h3>
                    <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Clock className="size-3 text-muted-foreground" />
                      {step.hours}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/50 space-y-2">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    VERIFICATION PROTOCOL
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-300 font-sans">
                    {step.activities.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="text-[11px] leading-tight text-muted-foreground">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
