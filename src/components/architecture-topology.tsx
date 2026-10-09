"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";

export function ArchitectureTopology() {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  const layers = [
    {
      id: 0,
      title: "LAYER 01 // PHYSICAL SCALE & SENSORS",
      subtitle: "The Existing Industrial Weighbridge",
      icon: Radio,
      badge: "NON-INVASIVE PASSIVE TAP",
      description:
        "Gluvok connects directly to your existing weighbridge infrastructure without requiring new load cells, platform modifications, or scale certification changes.",
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
      badge: "SUB-10MS LOCAL INFERENCE",
      description:
        "A ruggedized industrial edge computer (Raspberry Pi Compute Module / Industrial Linux) mounted inside the scale booth. Executes weighing logic and relay triggers locally.",
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
        "High-definition IP cameras capture license plates and cargo bed perspectives simultaneously, processing OCR locally on the edge node with sub-second accuracy.",
      specs: [
        { label: "Sensor Resolution", value: "4MP / 8MP Starlight CMOS with 120dB True WDR" },
        { label: "Night Illumination", value: "Adaptive 850nm Matrix Infrared (50m Reach)" },
        { label: "OCR Models", value: "Quantized Deep Vision Network tuned for Indian & Global Commercial Plates" },
        { label: "Ingress Protection", value: "IP67 Weatherproof / NEMA 4X Dust and Rain Resistance" },
      ],
      flowNote: "Binds high-resolution photographic evidence directly to the stable weight timestamp.",
    },
    {
      id: 3,
      title: "LAYER 04 // CLOUD FLEET ORCHESTRATOR",
      subtitle: "Multi-Site Enterprise Command & ERP",
      icon: Cloud,
      badge: "REAL-TIME FLEET TELEMETRY",
      description:
        "Aggregates weighment transactions across all company facilities into an immutable audit vault with automated dispatch notifications and ERP sync.",
      specs: [
        { label: "Multi-Site Scale", value: "Supports 1 to 500+ Distributed Weighbridges" },
        { label: "Enterprise Integrations", value: "SAP S/4HANA, Oracle ERP Cloud, Microsoft Dynamics, REST Webhooks" },
        { label: "Audit Integrity", value: "SHA-256 Cryptographic Evidence Package with Tamper Detection" },
        { label: "Dispatch Channels", value: "Automated WhatsApp Weigh Slips, SMS, and Instant PDF Invoicing" },
      ],
      flowNote: "Enables corporate leadership to audit any weighment across any plant in under 2 seconds.",
    },
  ];

  return (
    <section id="architecture" className="py-20 lg:py-24 border-b border-border/60 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-2">
            <span className="size-2 rounded-xs bg-cyan-400" />
            SYSTEM TOPOLOGY & EDGE ENGINEERING
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Built for the realities of the plant floor
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Zero cloud latency at the gate. Zero scale disruption. Inspect each layer of the Gluvok
            architecture to see how edge computing, machine vision, and industrial indicators unite.
          </p>
        </div>

        {/* 4 Layer Interactive Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selector Column */}
          <div className="lg:col-span-5 space-y-3 font-mono">
            {layers.map((layer) => {
              const Icon = layer.icon;
              const isSelected = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full text-left p-4 rounded-xs border transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? "border-foreground bg-card text-foreground shadow-md"
                      : "border-border/60 bg-secondary/20 text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                >
                  <div
                    className={`size-8 rounded-xs flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-foreground text-background"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <Icon className="size-4" />
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] uppercase tracking-wider">
                      {layer.title}
                    </div>
                    <div
                      className={`text-sm font-sans font-semibold ${
                        isSelected ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {layer.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Layer Deep Dive Detail Card */}
          <div className="lg:col-span-7">
            <div className="rounded-xs border border-border bg-card p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
                <div>
                  <span className="text-xs font-mono text-muted-foreground block">
                    {layers[activeLayer].title}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans mt-0.5">
                    {layers[activeLayer].subtitle}
                  </h3>
                </div>

                <Badge variant="outline" className="font-mono text-xs uppercase border-border/80 bg-secondary/50">
                  {layers[activeLayer].badge}
                </Badge>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {layers[activeLayer].description}
              </p>

              {/* Technical Specifications Table */}
              <div className="space-y-2 font-mono text-xs">
                <div className="text-[10px] uppercase text-muted-foreground tracking-wider pb-1">
                  ENGINEERING SPECIFICATIONS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {layers[activeLayer].specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xs border border-border/60 bg-secondary/20 space-y-1"
                    >
                      <span className="text-[10px] text-muted-foreground uppercase block">
                        {spec.label}
                      </span>
                      <span className="text-xs font-medium text-foreground block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pipeline Flow Note */}
              <div className="p-3 rounded-xs bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-emerald-400 shrink-0" />
                <span>
                  <strong className="text-foreground">DATA PIPELINE FLOW:</strong>{" "}
                  {layers[activeLayer].flowNote}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
