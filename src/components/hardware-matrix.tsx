"use client";

import { Badge } from "@/components/ui/badge";
import { Check, Cpu, HardDrive, ShieldCheck, Radio, Server } from "lucide-react";

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
      component: "Peripheral Relay I/O Module",
      detail:
        "4 optocoupled dry-contact relay outputs for automatic boom barrier opening, green/red traffic light signals, and driver audio beeper.",
    },
    {
      component: "Local Data Store",
      detail:
        "Industrial high-endurance pSLC storage hosting an encrypted write-ahead logged SQLite database buffering up to 500,000 offline weighment transactions.",
    },
  ];

  return (
    <section id="hardware" className="py-20 lg:py-24 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-2">
            <span className="size-2 rounded-xs bg-amber-400" />
            HARDWARE COMPATIBILITY & PROTOCOL MATRIX
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Zero scale replacement. Certified compatibility.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Gluvok was built to respect your existing capital investment. Our passive serial tap
            plugs into virtually every commercial weighbridge indicator in service today.
          </p>
        </div>

        {/* Indicator Table */}
        <div className="rounded-xs border border-border/80 bg-card overflow-hidden mb-10 shadow-lg">
          <div className="bg-secondary/40 border-b border-border px-5 py-3 flex items-center justify-between text-xs font-mono">
            <span className="text-foreground font-semibold flex items-center gap-2">
              <Radio className="size-3.5 text-muted-foreground" />
              TESTED & CERTIFIED SCALE INDICATOR MAKES
            </span>
            <span className="text-emerald-400 font-mono text-[11px]">
              UNIVERSAL PARSER READY
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-border/60 bg-secondary/20 text-muted-foreground uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-5 font-medium">Manufacturer</th>
                  <th className="py-3 px-5 font-medium">Supported Models</th>
                  <th className="py-3 px-5 font-medium">Serial Protocol</th>
                  <th className="py-3 px-5 font-medium text-right">Compatibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-muted-foreground">
                {indicators.map((row, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-foreground">
                      {row.make}
                    </td>
                    <td className="py-3.5 px-5 text-neutral-300">
                      {row.models}
                    </td>
                    <td className="py-3.5 px-5 text-[11px]">
                      {row.interfaceType}
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      <span className="inline-flex items-center gap-1 text-emerald-400 text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded-xs border border-emerald-500/20">
                        <Check className="size-3" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edge Appliance Hardware Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          {specs.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xs border border-border/70 bg-card space-y-1.5"
            >
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider flex items-center justify-between">
                <span>COMPONENT SPEC</span>
                <span>0{idx + 1}</span>
              </div>
              <div className="text-sm font-semibold text-foreground font-sans">
                {item.component}
              </div>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}

          {/* Custom Indicator Protocol Inquiries */}
          <div className="p-4 rounded-xs border border-dashed border-border bg-secondary/20 flex flex-col justify-between space-y-2">
            <div>
              <div className="text-[10px] text-amber-400 uppercase tracking-wider">
                PROPRIETARY / CUSTOM PROTOCOL?
              </div>
              <div className="text-sm font-semibold text-foreground font-sans mt-1">
                Indicator Protocol Testing
              </div>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed mt-1">
                Have a specialized or legacy indicator? Share the port nameplate photo or baud settings. We write custom serial decoders within 24 hours.
              </p>
            </div>
            <div className="text-[11px] text-emerald-400">
              Zero hardware lock-in.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
