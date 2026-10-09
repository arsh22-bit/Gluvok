"use client";

import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, Clock, ShieldX, ShieldCheck, Database, Server } from "lucide-react";

export function ProblemSolution() {
  const comparisons = [
    {
      category: "DISPATCH VELOCITY",
      problemTitle: "3–5 Minute Scale Queues",
      problemDesc:
        "Operators manually key in vehicle registrations, gross/tare weights, and material grades into standalone desktop software, creating severe gate bottlenecks during peak hours.",
      solutionTitle: "Sub-18 Second Autonomous Flow",
      solutionDesc:
        "ANPR cameras recognize the vehicle, verify axle deck boundaries, grab stable weight from the indicator serial bus, and raise the boom barrier without driver exit.",
    },
    {
      category: "DATA INTEGRITY",
      problemTitle: "Manual Typing & Collusion Risk",
      problemDesc:
        "Typographical errors on weights and truck numbers lead to billing disputes, inventory shrinkage, and operator collusion with rogue drivers on gross/tare margins.",
      solutionTitle: "Direct Hardware Serial Capture",
      solutionDesc:
        "Weight figures are read directly from indicator load cell memory over RS-232/485. No human can tamper with or edit the recorded kilogram value.",
    },
    {
      category: "TAMPER PREVENTION",
      problemTitle: "Axle Stepping & Deck Overhang",
      problemDesc:
        "Trucks deliberately park with front wheels slightly off the weighbridge deck or straddle weigh lines, manipulating net weight by hundreds of kilograms unnoticed.",
      solutionTitle: "Dual-Camera Visual Load Geometry",
      solutionDesc:
        "Simultaneous overhead and axle cameras detect improper positioning before capturing stable weight. Weighment locks only when 100% of axles are inside boundary sensors.",
    },
    {
      category: "EVIDENCE RETENTION",
      problemTitle: "Lost Slips & Zero Visual Audit",
      problemDesc:
        "Disputes months later rely on fading carbon paper slips without photographic evidence of vehicle load, material grade, or license plate conditions.",
      solutionTitle: "Cryptographic Photo-Linked Slips",
      solutionDesc:
        "Every transaction generates a SHA-256 stamped digital record bundled with high-res camera crops, time of stable weight, and instant WhatsApp/ERP delivery.",
    },
    {
      category: "NETWORK RESILIENCE",
      problemTitle: "Fiber Cuts Paralyze Plant Gates",
      problemDesc:
        "Cloud-dependent systems halt operations completely when plant internet drops or suffers latency, backing up logistics onto public highways.",
      solutionTitle: "Zero-Latency Offline Edge Daemon",
      solutionDesc:
        "All ANPR inference, serial reading, and barrier controls run locally on the industrial edge controller. Transactions buffer safely in local SQLite and auto-sync on reconnect.",
    },
    {
      category: "ENTERPRISE VISIBILITY",
      problemTitle: "Siloed Plants & USB Stick Reports",
      problemDesc:
        "Corporate management lacks real-time insight into remote quarries, crushing units, and RMC facilities, waiting days for manual spreadsheet roll-ups.",
      solutionTitle: "Unified Multi-Site Fleet Dashboard",
      solutionDesc:
        "Monitor 1 to 50+ weighbridges across distributed sites from a single pane of glass with live truck throughput, anomaly flags, and direct SAP/ERP webhooks.",
    },
  ];

  return (
    <section id="problem" className="py-20 lg:py-24 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-2">
            <span className="size-2 rounded-xs bg-neutral-400" />
            OPERATIONAL FRICTION VS. GLUVOK AUTONOMY
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Why manual weighbridges fail heavy industry
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Traditional scale houses are the single biggest bottleneck in bulk dispatch operations.
            Here is how Gluvok replaces manual vulnerability with industrial edge rigor.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xs border border-border/70 bg-card p-5 flex flex-col justify-between space-y-4 hover:border-border transition-colors"
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-2">
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground/60">
                  REF-{String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Legacy Pain */}
              <div className="space-y-1.5 p-3 rounded-xs bg-red-950/10 border border-red-500/20 text-xs">
                <div className="font-semibold text-red-300 flex items-center gap-1.5">
                  <AlertCircle className="size-3.5 text-red-400 shrink-0" />
                  {item.problemTitle}
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  {item.problemDesc}
                </p>
              </div>

              {/* Gluvok Solution */}
              <div className="space-y-1.5 p-3 rounded-xs bg-emerald-950/10 border border-emerald-500/20 text-xs">
                <div className="font-semibold text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                  {item.solutionTitle}
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  {item.solutionDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
