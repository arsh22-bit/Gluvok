"use client";

import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ShieldX,
  ShieldCheck,
  Database,
  Server,
  ArrowRight,
} from "lucide-react";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";

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
    <section id="problems" className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Editorial Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <AnthropicSpikeMark size={14} className="text-[#cc785c]" />
            <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#cc785c]">
              OPERATIONAL COMPARISON
            </span>
          </div>

          <h2
            className="text-[#141413] text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The gap between manual gates and autonomous dispatch.
          </h2>

          <p className="text-[#3d3d3a] text-[16px] sm:text-[18px] leading-[1.55]">
            Industrial scales are accurate; manual data entry is fragile. Gluvok replaces manual clerk booths
            with deterministic edge automation.
          </p>
        </div>

        {/* 2-Column or 3-Column Feature Cards in #efe9de */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[12px] bg-[#efe9de] p-8 border border-[#e6dfd8] flex flex-col justify-between space-y-6 transition-all hover:border-[#cc785c]/40"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-[1.5px] text-[#8e8b82]">
                  {item.category}
                </span>

                {/* Legacy Problem */}
                <div className="space-y-1.5 pb-4 border-b border-[#e6dfd8]">
                  <div className="text-[15px] font-medium text-[#6c6a64] flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#c64545]" />
                    <span>{item.problemTitle}</span>
                  </div>
                  <p className="text-[13px] text-[#6c6a64] leading-relaxed">
                    {item.problemDesc}
                  </p>
                </div>

                {/* Gluvok Solution */}
                <div className="space-y-1.5">
                  <div className="text-[16px] font-medium text-[#141413] flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#cc785c]" />
                    <span>{item.solutionTitle}</span>
                  </div>
                  <p className="text-[14px] text-[#3d3d3a] leading-relaxed">
                    {item.solutionDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
