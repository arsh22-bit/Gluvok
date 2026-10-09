"use client";

import { Check, Cpu, HardDrive, ShieldCheck, Radio, Server, Activity } from "lucide-react";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";

export function HardwareMatrix() {
  const indicators = [
    {
      make: "Avery Weigh-Tronix",
      models: "ZM510, ZM610, E1105, E1205, GSE 460/560",
      interfaceType: "RS-232 / RS-485 Serial (ASCII continuous, Toledo continuous)",
      status: "Certified & Tested",
    },
    {
      make: "Mettler Toledo",
      models: "IND570, IND780, IND246, IND560, Panther",
      interfaceType: "RS-232 / Modbus RTU / TCP Sockets",
      status: "Certified & Tested",
    },
    {
      make: "Cardinal Scale",
      models: "205, 210, 225 Navigator, 825 Spectrum",
      interfaceType: "RS-232 Continuous Output (SMA Format)",
      status: "Certified & Tested",
    },
    {
      make: "Rice Lake Weighing Systems",
      models: "920i, 880, 1280 Enterprise, 480 Legend",
      interfaceType: "RS-232 / RS-485 / Modbus TCP",
      status: "Certified & Tested",
    },
    {
      make: "Essae Teraoka",
      models: "DS-215, DS-415, DS-815, Industrial Series",
      interfaceType: "RS-232 COM Stream (Polled & Continuous)",
      status: "Certified & Tested",
    },
    {
      make: "Multi-Weigh & Regional OEMs",
      models: "Universal Multi-Weigh, Star Weigh, Sensocar, Eagle",
      interfaceType: "Configurable Serial Parser (Auto-Baud 1200–115200)",
      status: "Certified & Tested",
    },
  ];

  const specs = [
    {
      component: "Industrial Edge Gateway",
      detail:
        "DIN-rail mounted Quad-Core ARM64 appliance with read-only rootfs, hardware watchdog timer, and wide 9–36V DC industrial power input.",
    },
    {
      component: "Optically Isolated Serial Interface",
      detail:
        "2.5kV galvanic isolation on RS-232 / RS-485 ports preventing ground loops and electrical surges from damaging the scale indicator.",
    },
    {
      component: "Dual ANPR Vision Cameras",
      detail:
        "4MP Sony Starvis sensor, 120dB True WDR for headlight suppression, motorized varifocal lens (2.8–12mm), IP67 weatherproof housing.",
    },
    {
      component: "Relay & Barrier Controller",
      detail:
        "Optocoupled dry-contact output relays rated 250V AC / 10A for instantaneous triggering of boom barriers, traffic signals, and hooters.",
    },
  ];

  return (
    <section id="hardware" className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <AnthropicSpikeMark size={14} className="text-[#cc785c]" />
            <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#cc785c]">
              HARDWARE COMPATIBILITY
            </span>
          </div>

          <h2
            className="text-[#141413] text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Universal scale indicator compatibility.
          </h2>

          <p className="text-[#3d3d3a] text-[16px] sm:text-[18px] leading-[1.55]">
            Gluvok connects non-invasively through secondary serial ports without breaking calibration seals
            or requiring legal metrology recertification.
          </p>
        </div>

        {/* Indicator Tiles in connector-tile style (3-Up or 2-Up) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {indicators.map((ind, idx) => (
            <div
              key={idx}
              className="rounded-[12px] bg-[#faf9f5] p-5 border border-[#e6dfd8] flex flex-col justify-between space-y-4 hover:border-[#cc785c]/40 transition-colors shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Radio className="size-4 text-[#cc785c]" />
                    <span
                      className="text-[16px] font-medium text-[#141413]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {ind.make}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#5db872]" />
                    <span className="text-[11px] font-medium text-[#6c6a64]">Certified</span>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="text-[#8e8b82]">MODELS SUPPORTED:</div>
                  <div className="font-mono text-[#3d3d3a] font-medium">
                    {ind.models}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#e6dfd8] text-[11px] font-mono text-[#6c6a64]">
                {ind.interfaceType}
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Grade Specifications Grid in #efe9de */}
        <div className="rounded-[16px] bg-[#efe9de] p-8 sm:p-10 border border-[#e6dfd8] space-y-6">
          <div className="flex items-center gap-2">
            <Cpu className="size-5 text-[#cc785c]" />
            <h3
              className="text-[20px] font-medium text-[#141413]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Field-Hardened Edge Specifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map((sp, i) => (
              <div
                key={i}
                className="bg-[#faf9f5] rounded-[10px] p-5 border border-[#e6dfd8] space-y-2"
              >
                <div className="text-[13px] font-medium text-[#141413] flex items-center gap-1.5">
                  <Check className="size-3.5 text-[#cc785c] shrink-0" />
                  <span>{sp.component}</span>
                </div>
                <p className="text-[12px] text-[#6c6a64] leading-relaxed">
                  {sp.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
