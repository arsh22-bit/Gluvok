"use client";

import { useState } from "react";
import {
  Cpu,
  Layers,
  HardDrive,
  Cloud,
  Network,
  Radio,
  Eye,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-react";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";

export function ArchitectureTopology() {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  const layers = [
    {
      id: 0,
      title: "LAYER 01 // PHYSICAL SCALE & SENSORS",
      subtitle: "The Existing Industrial Weighbridge",
      icon: Radio,
      badge: "NON-INVASIVE TAP",
      description:
        "Gluvok connects directly to your existing weighbridge infrastructure without requiring new load cells, platform modifications, or scale recertification.",
      specs: [
        { label: "Compatible Decks", value: "Pit, Pitless, Concrete, Steel Deck" },
        { label: "Load Cell Types", value: "Analog, Digital (Canister & Compression)" },
        { label: "Indicators Supported", value: "Avery Weigh-Tronix, Mettler Toledo, Cardinal, Essae, Multi-Weigh" },
        { label: "Hardware Interfacing", value: "Optically Isolated RS-232 / RS-485 / Modbus RTU" },
      ],
      flowNote: "Load signals digitize at the indicator and output continuous serial frames.",
    },
    {
      id: 1,
      title: "LAYER 02 // ON-PREMISES EDGE CONTROLLER",
      subtitle: "Industrial DIN-Rail Edge Appliance",
      icon: Cpu,
      badge: "SUB-10MS INFERENCE",
      description:
        "A ruggedized industrial edge computer (ARM64 Industrial Linux) mounted inside the scale booth. Executes state machines, stable-weight locks, and barrier relays locally.",
      specs: [
        { label: "Processor & Architecture", value: "Industrial Quad-Core ARM64 Cortex-A72" },
        { label: "Operating System", value: "Hardened Read-Only Debian Embedded with Watchdog" },
        { label: "Local Persistence", value: "Crash-Resilient SQLite Journal with Write-Ahead Logging" },
        { label: "I/O Relays", value: "Optocoupled Dry-Contact Relays for Boom Barriers & Traffic Signals" },
      ],
      flowNote: "Filters noise, runs stable-weight algorithms, and acts as the local transaction authority.",
    },
    {
      id: 2,
      title: "LAYER 03 // VISION & DUAL ANPR SUBSYSTEM",
      subtitle: "Environmental Industrial Cameras",
      icon: Eye,
      badge: "DUST, RAIN & NIGHT PROVEN",
      description:
        "Dual high-speed 4MP Starvis optical sensors capture vehicle front and rear license plates simultaneously while verifying wheel alignment within deck boundaries.",
      specs: [
        { label: "Camera Hardware", value: "Sony Starvis 4MP Sensor with 120dB True WDR" },
        { label: "ANPR Processing", value: "Sub-250ms On-Edge TensorRT / ONNX inference" },
        { label: "Environmental Rating", value: "IP67 Weatherproof Housing with Sunshield" },
        { label: "Anti-Stepping Vision", value: "Axle Detection verifying 100% deck boundary alignment" },
      ],
      flowNote: "High-resolution frame crops timestamped and bundled into cryptographic transaction record.",
    },
    {
      id: 3,
      title: "LAYER 04 // ENTERPRISE MULTI-SITE CLOUD & ERP",
      subtitle: "Central Management & Automated SAP Sync",
      icon: Cloud,
      badge: "RESILIENT STORE-AND-FORWARD",
      description:
        "Multi-plant dashboard offering corporate visibility across all scale operations with automatic ERP webhook reconciliation and instant digital slip dispatch.",
      specs: [
        { label: "ERP Connectors", value: "SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics, REST Webhooks" },
        { label: "Communication Security", value: "TLS 1.3 mutual authentication with SHA-256 signatures" },
        { label: "Offline Sync", value: "Automatic background replay buffer upon network reconnect" },
        { label: "Dispatch Alerts", value: "Automated WhatsApp and SMS digital receipts with photo links" },
      ],
      flowNote: "Eliminates USB-drive manual tallying; executive visibility across 1 to 50+ scales.",
    },
  ];

  const current = layers[activeLayer];
  const CurrentIcon = current.icon;

  return (
    <section id="architecture" className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Editorial Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <AnthropicSpikeMark size={14} className="text-[#cc785c]" />
            <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#cc785c]">
              SYSTEM TOPOLOGY
            </span>
          </div>

          <h2
            className="text-[#141413] text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Edge-to-cloud architectural layers.
          </h2>

          <p className="text-[#3d3d3a] text-[16px] sm:text-[18px] leading-[1.55]">
            A non-invasive, retrofittable hardware and vision stack built for industrial resilience,
            zero cloud latency, and tamper-proof legal audit trails.
          </p>
        </div>

        {/* Layer Tabs in Category Tab Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {layers.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveLayer(l.id)}
              className={`p-4 rounded-[12px] text-left transition-all border ${
                activeLayer === l.id
                  ? "bg-[#efe9de] border-[#cc785c] text-[#141413] shadow-xs"
                  : "bg-[#faf9f5] border-[#e6dfd8] text-[#6c6a64] hover:bg-[#efe9de]/50"
              }`}
            >
              <div className="text-[11px] font-mono text-[#8e8b82] mb-1">
                LAYER 0{l.id + 1}
              </div>
              <div className="text-[14px] font-medium leading-snug line-clamp-1">
                {l.subtitle}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Layer Showcase (Alternating Dark Surface Card) */}
        <div className="rounded-[16px] bg-[#181715] text-[#faf9f5] p-8 sm:p-10 border border-white/5 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-[10px] bg-[#252320] border border-white/10 flex items-center justify-center text-[#cc785c]">
                <CurrentIcon className="size-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[1.5px] text-[#cc785c]">
                  {current.title}
                </span>
                <h3
                  className="text-[26px] font-normal text-[#faf9f5]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {current.subtitle}
                </h3>
              </div>
            </div>

            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-[#252320] text-[#a09d96] border border-white/5">
              {current.badge}
            </span>
          </div>

          <p className="text-[16px] text-[#a09d96] max-w-3xl leading-relaxed">
            {current.description}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {current.specs.map((sp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-[8px] bg-[#1f1e1b] border border-white/5 space-y-1"
              >
                <div className="text-[11px] font-mono uppercase text-[#cc785c]">
                  {sp.label}
                </div>
                <div className="text-[14px] text-[#faf9f5] font-medium">
                  {sp.value}
                </div>
              </div>
            ))}
          </div>

          {/* Flow Footnote */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8e8b82]">
            <span>DATA PIPELINE: {current.flowNote}</span>
            <span className="text-[#cc785c]">STANDARDIZED PROTOCOL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
