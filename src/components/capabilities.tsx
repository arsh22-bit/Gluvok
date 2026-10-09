"use client";

import {
  Cpu,
  Eye,
  ShieldCheck,
  HardDrive,
  Network,
  FileCheck2,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";

export function Capabilities() {
  const capabilities = [
    {
      index: "01",
      title: "Universal Indicator Retrofit Engine",
      subtitle: "Zero scale replacement or recertification required",
      description:
        "Seamlessly interfaces with existing Avery Weigh-Tronix, Mettler Toledo, Cardinal, Rice Lake, and Indian indigenous indicators via secondary RS-232/485 serial ports without disturbing existing calibration seals.",
      technicalHighlight: "Compatible with ASCII continuous, polled, Toledo continuous, and Modbus RTU protocols.",
      icon: Layers,
    },
    {
      index: "02",
      title: "Harsh-Environment Industrial ANPR",
      subtitle: "Trained on dirty, bent, and unstandardized commercial plates",
      description:
        "Deep convolutional vision models fine-tuned on industrial transport environments. Accurately decodes mud-splattered, hand-painted, embossed, and non-standard plates under blinding high-beam glare, heavy rain, and zero ambient light.",
      technicalHighlight: "Under 250ms plate classification latency at 99.4% field precision.",
      icon: Eye,
    },
    {
      index: "03",
      title: "Stable-Weight Lock & Anomaly Detection",
      subtitle: "Prevents axle stepping, bounce fraud, and premature reads",
      description:
        "Statistical filtering monitors load cell motion vectors, rejecting fluctuating weight spikes caused by truck braking, engine idle vibration, or partial wheel stepping off the platform.",
      technicalHighlight: "Requires 5 consecutive identical samples within ±0.02% scale tolerance.",
      icon: ShieldCheck,
    },
    {
      index: "04",
      title: "100% Offline-First Edge Resilience",
      subtitle: "Guaranteed uninterrupted plant dispatch during network blackouts",
      description:
        "The entire state machine runs self-contained on the scale-side industrial controller. If plant fiber drops, weighing operations, barrier automation, and slip printing proceed with zero pause. Syncs automatically upon reconnection.",
      technicalHighlight: "Zero dependence on public cloud roundtrips for gate-open decisions.",
      icon: HardDrive,
    },
    {
      index: "05",
      title: "Cryptographic Evidence Vault",
      subtitle: "Tamper-evident legal audit trails for billing disputes",
      description:
        "Synchronizes vehicle front/rear photos, cargo bed snapshot, driver cab image, and raw serial hex telemetry at the exact millisecond of stable weight capture into an immutable record.",
      technicalHighlight: "Generates an SHA-256 integrity hash verifiable by corporate auditors.",
      icon: Lock,
    },
    {
      index: "06",
      title: "Direct SAP & ERP Synchronization",
      subtitle: "Eliminates duplicate ledger entry and paperwork delays",
      description:
        "Bi-directional webhooks post gross and tare weight directly into your SAP S/4HANA, Oracle NetSuite, or proprietary plant ERP, automatically generating e-Way bills and clearing purchase order lines.",
      technicalHighlight: "Automated webhook retry queue with end-to-end receipt acknowledgments.",
      icon: Network,
    },
  ];

  return (
    <section id="capabilities" className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Editorial Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <AnthropicSpikeMark size={14} className="text-[#cc785c]" />
            <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#cc785c]">
              ENGINEERED FOR SCALE
            </span>
          </div>

          <h2
            className="text-[#141413] text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Core platform capabilities.
          </h2>

          <p className="text-[#3d3d3a] text-[16px] sm:text-[18px] leading-[1.55]">
            Built with the weighing engineering pedigree of industrial plants. Every feature is hardened
            against rough transport conditions, dust, and tamper attempts.
          </p>
        </div>

        {/* 3-Up Feature Card Grid (#efe9de with 32px padding) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.index}
                className="rounded-[12px] bg-[#efe9de] p-8 border border-[#e6dfd8] flex flex-col justify-between space-y-6 transition-all hover:border-[#cc785c]/40"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-10 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] flex items-center justify-center text-[#cc785c]">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-xs text-[#8e8b82]">
                      {cap.index}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-[#141413] text-[18px] font-medium leading-[1.4]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {cap.title}
                    </h3>
                    <div className="text-[13px] text-[#6c6a64] font-medium mt-0.5">
                      {cap.subtitle}
                    </div>
                  </div>

                  <p className="text-[#3d3d3a] text-[15px] leading-[1.55]">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e6dfd8] text-[12px] font-mono text-[#8e8b82]">
                  {cap.technicalHighlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
