"use client";

import { PilotDialog } from "@/components/pilot-dialog";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Clock,
  Activity,
  Check,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full bg-[#faf9f5] border-b border-[#e6dfd8] py-20 lg:py-24">
      {/* Subtle Warm Grid */}
      <div className="absolute inset-0 claude-grid pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category / Highlight Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#cc785c] text-white text-[12px] font-semibold tracking-[1.5px] uppercase">
                RETROFIT PLATFORM
              </span>
              <span className="text-[13px] font-medium text-[#6c6a64]">
                Zero Scale Replacement · RS-232/485 Serial Bus
              </span>
            </div>

            {/* Display XL Headline in Copernicus Slab-Serif */}
            <h1
              className="text-[#141413] text-[42px] sm:text-[54px] lg:text-[62px] font-normal leading-[1.05] tracking-[-1.5px]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Turn existing weighbridges into autonomous weighing stations.
            </h1>

            {/* Precision Narrative Body Text */}
            <p className="text-[#3d3d3a] text-[17px] sm:text-[19px] leading-[1.55] max-w-2xl font-normal">
              Gluvok retrofits onto your operational scale indicators via secondary serial bus,
              synchronizing industrial ANPR vision and on-premises edge AI. Cut truck turnaround from 4 minutes
              to under 18 seconds while eliminating manual entry errors, axle cheating, and load discrepancies.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <PilotDialog>
                <button
                  className="inline-flex items-center justify-center h-10 px-6 rounded-[8px] bg-[#cc785c] hover:bg-[#b8674d] active:bg-[#a9583e] text-white font-medium text-[14px] leading-none transition-colors shadow-none"
                >
                  Schedule 48-Hour Plant Pilot
                  <ArrowRight className="size-4 ml-2" />
                </button>
              </PilotDialog>

              <a
                href="#console"
                className="inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] text-[#141413] hover:bg-[#efe9de] font-medium text-[14px] leading-none transition-colors"
              >
                Inspect Live Console
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-[13px] text-[#6c6a64] border-t border-[#e6dfd8]">
              <span className="flex items-center gap-1.5">
                <Check className="size-3.5 text-[#cc785c]" />
                Non-invasive passive tap
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="size-3.5 text-[#cc785c]" />
                100% offline edge daemon
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="size-3.5 text-[#cc785c]" />
                Direct ERP & SAP synchronization
              </span>
            </div>
          </div>

          {/* Right Column: Hero Illustration Card / Telemetry Snippet */}
          <div className="lg:col-span-5">
            <div className="rounded-[16px] bg-[#efe9de] border border-[#e6dfd8] p-6 sm:p-7 space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#e6dfd8]">
                <div className="flex items-center gap-2">
                  <AnthropicSpikeMark size={16} className="text-[#cc785c]" />
                  <span className="text-[13px] font-semibold text-[#141413]">
                    Live Edge Telemetry · Scale #02
                  </span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#5db872]/15 text-[#5db872]">
                  STREAM ACTIVE
                </span>
              </div>

              {/* Status Metric Card */}
              <div className="bg-[#faf9f5] rounded-[10px] p-4 border border-[#e6dfd8] space-y-2">
                <div className="flex items-center justify-between text-xs text-[#6c6a64]">
                  <span>VEHICLE IDENTIFIED</span>
                  <span className="font-mono text-[#141413] font-semibold">PB 65 T 9421</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-[32px] font-mono font-medium text-[#141413] leading-none">
                      42,840 <span className="text-sm font-sans font-normal text-[#6c6a64]">kg</span>
                    </div>
                    <div className="text-[11px] text-[#5db872] font-mono mt-1">
                      Stable weight locked · 5 consecutive samples
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 rounded-[6px] bg-[#efe9de] text-[#cc785c] font-mono text-xs font-semibold">
                      16.8s ELAPSED
                    </span>
                  </div>
                </div>
              </div>

              {/* Edge Processing Steps */}
              <div className="space-y-2 text-[12px] font-mono">
                <div className="flex items-center justify-between p-2 rounded-[6px] bg-[#faf9f5]/80 text-[#3d3d3a]">
                  <span className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#5db872]" />
                    Dual ANPR Plate Extraction (Front/Rear)
                  </span>
                  <span className="text-[#8e8b82]">99.7%</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-[6px] bg-[#faf9f5]/80 text-[#3d3d3a]">
                  <span className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#5db872]" />
                    Axle Boundary & Wheel Alignment Sensor
                  </span>
                  <span className="text-[#8e8b82]">CLEAR</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-[6px] bg-[#faf9f5]/80 text-[#3d3d3a]">
                  <span className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#cc785c]" />
                    Boom Barrier Relays Triggered
                  </span>
                  <span className="text-[#cc785c] font-semibold">OPEN</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[12px] text-[#8e8b82]">
                <span>DIN Edge Gateway v2.4</span>
                <span className="font-mono text-[#cc785c]">RS-232 Toledo Protocol</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
