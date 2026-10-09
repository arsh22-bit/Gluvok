"use client";

import { useState } from "react";
import { PilotDialog } from "@/components/pilot-dialog";
import {
  Building2,
  Mountain,
  Truck,
  Layers,
  Anchor,
  Factory,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";

export function IndustryVerticals() {
  const [activeVerticalId, setActiveVerticalId] = useState("cement");

  const verticals = [
    {
      id: "cement",
      name: "Cement & Clinker",
      icon: Building2,
      subtitle: "High-Volume Dispatch Operations",
      overview:
        "Cement grinding and integrated plants run intense 24/7 dispatch cycles. Gluvok integrates with plant SAP/ERP systems to automatically validate delivery orders, weigh bulk tankers and bag trailers, and issue electronic gate passes without operator bottlenecks.",
      challenges: [
        "Hours-long tanker queues during peak morning and night dispatch windows.",
        "Manual tare weight entry leading to clinker and cement billing discrepancies.",
        "Need for multi-site visibility across grinding units and mother clinker plants.",
      ],
      results: [
        "Weighment cycle slashed from 4.2 minutes to 16 seconds per tanker.",
        "Automated SAP S/4HANA weighment ticket posting with zero manual re-entry.",
        "100% elimination of operator tare override fraud.",
      ],
      recommendedKit: "Dual 4MP ANPR + RS-232 Toledo Protocol + Dual Boom Barrier Automation",
    },
    {
      id: "mining",
      name: "Mining & Crushers",
      icon: Mountain,
      subtitle: "Aggregates, Stone Crushers & Quarries",
      overview:
        "High-dust, rough-terrain environments with intense tipper truck movements. Gluvok's ruggedized hardware and adaptive optical OCR withstand thick dust clouds and mud-caked plates while automating gross/tare weighing and royalty pass matching.",
      challenges: [
        "Severe optical dust and vibration disrupting standard vision systems.",
        "Rapid turnaround required for high-frequency tipper truck round-trips.",
        "Pilferage and unauthorized overloaded trucks damaging plant access roads.",
      ],
      results: [
        "Uninterrupted operation in 50°C summer heat and dense stone dust.",
        "Instant gross-tare net calculation with automatic daily transporter tallies.",
        "Overload alarm integration with plant traffic signal relays.",
      ],
      recommendedKit: "IP67 Starlight ANPR + Heavy-Duty DIN Edge Controller + Remote Driver LED Display",
    },
    {
      id: "rmc",
      name: "Ready-Mix Concrete",
      icon: Truck,
      subtitle: "Urban Transit Mixers & Batching Plants",
      overview:
        "Transit mixers must enter and exit batching stations rapidly before concrete begins setting. Gluvok automates transit mixer tare verification and raw material aggregate receipt with microsecond timestamps.",
      challenges: [
        "Strict 90-minute concrete hydration life requiring rapid truck dispatch.",
        "High gate congestion when 15+ mixers arrive simultaneously after pour completion.",
        "Inaccurate aggregate load intake disrupting batch mix formulas.",
      ],
      results: [
        "Zero-stop transit mixer roll-through weighing with auto-tare lookup.",
        "Eliminated scale operator night-shift staffing overhead.",
        "Direct batching plant SCADA system weight feed.",
      ],
      recommendedKit: "Compact Edge Gateway + High-Mount ANPR + WhatsApp Receipt Bot",
    },
    {
      id: "steel",
      name: "Steel & Scrap",
      icon: Layers,
      subtitle: "Rolling Mills & Ingot Yards",
      overview:
        "Steel billet, bar, and scrap transport carries enormous monetary value per kilogram. Gluvok enforces strict anti-stepping and camera-backed evidence vaults to prevent scrap weight manipulation.",
      challenges: [
        "High risk of deliberate axle misplacement to artificially inflate scrap tare.",
        "Frequent disputes between scrap traders and mill receiving gates.",
        "Heavy electromagnetic interference from electric arc furnaces.",
      ],
      results: [
        "Axle sensor geometry locks scale only when 100% within perimeter.",
        "Cryptographic photo vault eliminates scrap weight disputes.",
        "Galvanically isolated RS-485 serial bus immune to furnace EMI.",
      ],
      recommendedKit: "Overhead Deck Camera + Axle Laser Array + 2.5kV Isolated Serial Bus",
    },
    {
      id: "logistics",
      name: "Inland Ports & Logistics",
      icon: Anchor,
      subtitle: "Container Depots & Freight Corridors",
      overview:
        "Multimodal logistics hubs requiring container truck gross-mass verification (SOLAS VGM) and automated gate pass reconciliation against customs manifests.",
      challenges: [
        "SOLAS VGM compliance mandates with strict axle weight tolerance.",
        "Driver language barriers causing confusion at scale consoles.",
        "Paper ticket loss during transit between container yard and port berth.",
      ],
      results: [
        "Automated VGM certification generation with instant customs EDI push.",
        "Driver LED guidance display operating in multi-language prompts.",
        "Paperless digital pass sent to driver smartphone via QR code.",
      ],
      recommendedKit: "SOLAS VGM Module + Multi-Language Driver Terminal + Container OCR",
    },
  ];

  const current = verticals.find((v) => v.id === activeVerticalId) || verticals[0];
  const CurrentIcon = current.icon;

  return (
    <section id="industries" className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <AnthropicSpikeMark size={14} className="text-[#cc785c]" />
            <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#cc785c]">
              VERTICAL PLAYBOOKS
            </span>
          </div>

          <h2
            className="text-[#141413] text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Tailored to heavy industrial realities.
          </h2>

          <p className="text-[#3d3d3a] text-[16px] sm:text-[18px] leading-[1.55]">
            Each industrial vertical possesses unique transport dynamics, fraud vectors, and ERP workflows.
            Select an industry to inspect the validated solution architecture.
          </p>
        </div>

        {/* Category Tabs Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e6dfd8]">
          {verticals.map((v) => {
            const Icon = v.icon;
            const isActive = v.id === activeVerticalId;
            return (
              <button
                key={v.id}
                onClick={() => setActiveVerticalId(v.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-[8px] text-[14px] font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-[#efe9de] text-[#141413] shadow-2xs font-semibold"
                    : "bg-transparent text-[#6c6a64] hover:text-[#141413]"
                }`}
              >
                <Icon className={`size-4 ${isActive ? "text-[#cc785c]" : "text-[#8e8b82]"}`} />
                <span>{v.name}</span>
              </button>
            );
          })}
        </div>

        {/* Vertical Profile Card in #efe9de */}
        <div className="rounded-[16px] bg-[#efe9de] p-8 sm:p-10 border border-[#e6dfd8] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e6dfd8]">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] flex items-center justify-center text-[#cc785c]">
                <CurrentIcon className="size-5" />
              </div>
              <div>
                <h3
                  className="text-[24px] font-normal text-[#141413]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {current.name}
                </h3>
                <div className="text-[13px] text-[#6c6a64] font-medium">
                  {current.subtitle}
                </div>
              </div>
            </div>

            <PilotDialog>
              <button
                className="inline-flex items-center justify-center h-9 px-4 rounded-[8px] bg-[#cc785c] hover:bg-[#b8674d] text-white text-[13px] font-medium transition-colors"
              >
                Request {current.name} Pilot
                <ArrowRight className="size-3.5 ml-1.5" />
              </button>
            </PilotDialog>
          </div>

          <p className="text-[16px] text-[#3d3d3a] leading-relaxed max-w-4xl">
            {current.overview}
          </p>

          {/* Challenges vs Results Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Operational Bottlenecks */}
            <div className="bg-[#faf9f5] rounded-[12px] p-6 border border-[#e6dfd8] space-y-4">
              <div className="text-[12px] font-mono uppercase tracking-wider text-[#c64545] font-semibold flex items-center gap-2">
                <AlertTriangle className="size-4" />
                <span>Operating Bottlenecks & Fraud Risks</span>
              </div>
              <ul className="space-y-3">
                {current.challenges.map((c, i) => (
                  <li key={i} className="text-[14px] text-[#3d3d3a] flex items-start gap-2.5">
                    <span className="size-1.5 rounded-full bg-[#c64545] mt-2 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gluvok Deployment Results */}
            <div className="bg-[#faf9f5] rounded-[12px] p-6 border border-[#e6dfd8] space-y-4">
              <div className="text-[12px] font-mono uppercase tracking-wider text-[#5db872] font-semibold flex items-center gap-2">
                <CheckCircle2 className="size-4" />
                <span>Gluvok Field Results</span>
              </div>
              <ul className="space-y-3">
                {current.results.map((r, i) => (
                  <li key={i} className="text-[14px] text-[#3d3d3a] flex items-start gap-2.5">
                    <span className="size-1.5 rounded-full bg-[#5db872] mt-2 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Hardware Configuration */}
          <div className="pt-4 border-t border-[#e6dfd8] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#8e8b82] gap-2">
            <div>RECOMMENDED KIT: {current.recommendedKit}</div>
            <span className="text-[#cc785c]">TURNKEY RETROFIT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
