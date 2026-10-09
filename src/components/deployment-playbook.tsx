"use client";

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
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";

export function DeploymentPlaybook() {
  const steps = [
    {
      day: "DAY 01",
      title: "Passive Parallel Serial Tap",
      hours: "4 Hours On-Site",
      icon: Radio,
      badge: "ZERO SCALE DOWNTIME",
      description:
        "Our engineers install the DIN-rail edge appliance inside your scale cabin and tap passively into the indicator's secondary serial port. Your existing weighbridge software and operator workflow continue with zero disruption.",
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
        "We position and calibrate front and rear IP cameras on existing scale entry poles. The edge vision pipeline runs in shadow mode, recognizing plates across shifts and comparing OCR outputs directly against operator keystrokes.",
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
        "With optical recognition and indicator weight capture running with 100% agreement, we enable automated boom barrier relays and digital ticket issuance. Your operators transition from data entry clerks to supervisory managers.",
      activities: [
        "Unattended pilot for 200+ consecutive commercial truck dispatches",
        "Instant WhatsApp weigh slip delivery verification to transport fleet",
        "ERP webhook sync check and management executive review",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <AnthropicSpikeMark size={14} className="text-[#cc785c]" />
            <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#cc785c]">
              DEPLOYMENT TIMELINE
            </span>
          </div>

          <h2
            className="text-[#141413] text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            From zero to autonomous in 72 hours.
          </h2>

          <p className="text-[#3d3d3a] text-[16px] sm:text-[18px] leading-[1.55]">
            Our deployment engineers arrive on-site with pre-flashed, calibrated hardware.
            Zero scale shutdown, zero civil excavation, and zero operational downtime.
          </p>
        </div>

        {/* 3-Up Deployment Cards in #efe9de */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="rounded-[12px] bg-[#efe9de] p-8 border border-[#e6dfd8] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#e6dfd8]">
                    <span className="text-[12px] font-mono font-bold tracking-wider text-[#cc785c]">
                      {st.day}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#faf9f5] text-[#6c6a64]">
                      {st.hours}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-[20px] font-medium text-[#141413]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {st.title}
                    </h3>
                    <div className="text-[12px] text-[#5db872] font-mono font-semibold mt-0.5">
                      {st.badge}
                    </div>
                  </div>

                  <p className="text-[14px] text-[#3d3d3a] leading-relaxed">
                    {st.description}
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2 pt-2 border-t border-[#e6dfd8]">
                    {st.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2 text-[13px] text-[#3d3d3a]">
                        <CheckCircle2 className="size-3.5 text-[#cc785c] mt-1 shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Row */}
        <div className="rounded-[12px] bg-[#faf9f5] border border-[#e6dfd8] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-[#cc785c] shrink-0" />
            <p className="text-[14px] text-[#3d3d3a]">
              Every pilot is protected by a strict Non-Disclosure Agreement and parallel verification protocol.
            </p>
          </div>
          <PilotDialog>
            <button
              className="inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[#cc785c] hover:bg-[#b8674d] text-white text-[14px] font-medium transition-colors shrink-0"
            >
              Request Plant Walkthrough
              <ArrowRight className="size-4 ml-1.5" />
            </button>
          </PilotDialog>
        </div>
      </div>
    </section>
  );
}
