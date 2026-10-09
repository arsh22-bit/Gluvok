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
  ArrowUpRight,
} from "lucide-react";

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
      title: "Multi-Site Fleet Orchestrator & ERP Sync",
      subtitle: "Manage 5 to 500+ weighbridges across distributed industrial clusters",
      description:
        "Unified headquarters dashboard providing real-time truck velocity, weight discrepancies, and live camera streams. Pushes verified gross/tare records directly into SAP S/4HANA, Oracle ERP, or custom dispatch software.",
      technicalHighlight: "Automated WhatsApp and SMS digital weigh slips delivered to drivers & transporters.",
      icon: Network,
    },
  ];

  return (
    <section id="capabilities" className="py-20 lg:py-24 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-2">
            <span className="size-2 rounded-xs bg-amber-400" />
            CORE ENGINEERING CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Precision engineering for mission-critical logistics
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Heavy industrial operations cannot tolerate toy software. Every capability in Gluvok
            is architected for continuous 24/7 duty cycles under extreme mechanical and environmental conditions.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-xs border border-border/70 bg-card p-6 flex flex-col justify-between space-y-5 hover:border-foreground/40 transition-colors group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="text-xs font-mono font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.index} // ARCHITECTURE
                    </span>
                    <div className="size-7 rounded-xs bg-secondary/80 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                      <Icon className="size-3.5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground font-sans">
                      {item.title}
                    </h3>
                    <div className="text-xs font-medium text-emerald-400 font-mono">
                      {item.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/50 font-mono text-[11px] text-muted-foreground/80 bg-secondary/20 p-2.5 rounded-xs">
                  <strong className="text-foreground">SPEC:</strong> {item.technicalHighlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
