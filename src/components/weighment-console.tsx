"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Camera,
  CheckCircle2,
  Cpu,
  RefreshCw,
  Shield,
  Wifi,
  WifiOff,
  Truck,
  Hash,
  Activity,
  FileText,
  AlertTriangle,
} from "lucide-react";

interface VehicleScenario {
  id: string;
  plate: string;
  type: string;
  material: string;
  grossWeight: number;
  tareWeight: number;
  netWeight: number;
  axleCount: string;
  destination: string;
  confidence: number;
}

const SCENARIOS: VehicleScenario[] = [
  {
    id: "TRK-01",
    plate: "PB 65 T 9421",
    type: "12-Wheeler Heavy Tipper",
    material: "Limestone Crushed Aggregate (20mm)",
    grossWeight: 42840,
    tareWeight: 14220,
    netWeight: 28620,
    axleCount: "4 Axles / 12 Wheels",
    destination: "Duraton Cement Grinding Unit",
    confidence: 99.7,
  },
  {
    id: "TRK-02",
    plate: "HR 49 C 8102",
    type: "Bulk Powder Tanker",
    material: "Fly Ash Type-F (Class C)",
    grossWeight: 38450,
    tareWeight: 12100,
    netWeight: 26350,
    axleCount: "3 Axles / 10 Wheels",
    destination: "UltraTech RMC Plant - Dera Bassi",
    confidence: 99.4,
  },
  {
    id: "TRK-03",
    plate: "CH 01 TA 3391",
    type: "High-Sided Scrap Trailer",
    material: "Heavy Melting Scrap (HMS 1/2)",
    grossWeight: 48920,
    tareWeight: 16800,
    netWeight: 32120,
    axleCount: "5 Axles / 18 Wheels",
    destination: "Mandigobindgarh Steel Works",
    confidence: 98.9,
  },
  {
    id: "TRK-04",
    plate: "DL 1L P 9012",
    type: "Ready-Mix Transit Mixer",
    material: "M-35 Grade Concrete Mix",
    grossWeight: 31200,
    tareWeight: 13950,
    netWeight: 17250,
    axleCount: "3 Axles / 10 Wheels",
    destination: "Airport Road Infrastructure Site",
    confidence: 99.8,
  },
];

export function WeighmentConsole() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [isOffline, setIsOffline] = useState(false);
  const [stage, setStage] = useState<"approaching" | "settling" | "locked" | "dispatched">("locked");
  const [displayedWeight, setDisplayedWeight] = useState(SCENARIOS[0].grossWeight);
  const [showRawSerial, setShowRawSerial] = useState(false);

  const current = SCENARIOS[scenarioIndex];

  // Cycle scenario
  const handleNextVehicle = () => {
    const nextIdx = (scenarioIndex + 1) % SCENARIOS.length;
    setScenarioIndex(nextIdx);
    setStage("approaching");
    setDisplayedWeight(0);

    setTimeout(() => {
      setStage("settling");
      setDisplayedWeight(SCENARIOS[nextIdx].grossWeight - 60);
    }, 400);

    setTimeout(() => {
      setStage("locked");
      setDisplayedWeight(SCENARIOS[nextIdx].grossWeight);
    }, 900);
  };

  return (
    <section id="console" className="py-20 lg:py-24 border-b border-border/60 bg-background/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-border/60">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <span className="size-2 rounded-xs bg-amber-400" />
              LIVE EDGE TELEMETRY EMULATOR
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              The Autonomous Weighment Pipeline
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl">
              Experience Gluvok&apos;s real-time orchestration: ANPR camera feeds, serial indicator reads,
              stable-weight lock verification, and cryptographic slip issuance in sub-18 seconds.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOffline(!isOffline)}
              className="text-xs font-mono h-8 border-border"
            >
              {isOffline ? (
                <>
                  <WifiOff className="size-3.5 text-amber-400" data-icon="inline-start" />
                  Offline Edge Buffer (Active)
                </>
              ) : (
                <>
                  <Wifi className="size-3.5 text-emerald-400" data-icon="inline-start" />
                  Cloud Stream (Connected)
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowRawSerial(!showRawSerial)}
              className="text-xs font-mono h-8 border-border"
            >
              <Activity className="size-3.5" data-icon="inline-start" />
              {showRawSerial ? "Hide Raw Serial" : "View RS-232 Stream"}
            </Button>

            <Button
              size="sm"
              onClick={handleNextVehicle}
              className="text-xs font-mono h-8 bg-foreground text-background hover:bg-neutral-200"
            >
              <RefreshCw className="size-3.5" data-icon="inline-start" />
              Simulate Next Vehicle
            </Button>
          </div>
        </div>

        {/* Main Terminal Frame */}
        <div className="rounded-xs border border-border/80 bg-card overflow-hidden shadow-2xl">
          {/* Terminal Title Bar */}
          <div className="bg-secondary/60 border-b border-border/80 px-4 py-2.5 flex flex-wrap items-center justify-between text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-foreground font-semibold">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                EDGE-NODE // SCALE-01-NORTH
              </span>
              <span className="text-border">|</span>
              <span className="hidden sm:inline">SERIAL BUS: RS-232 (9600-8N1)</span>
              <span className="text-border hidden sm:inline">|</span>
              <span className="hidden sm:inline">LATENCY: 4.2ms</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] bg-background/80 px-2 py-0.5 rounded-xs border border-border">
                {isOffline ? "LOCAL SQLITE JOURNAL: BUFFERING" : "FLEET SYNC: IN-SYNC (0 PENDING)"}
              </span>
              <span className="text-foreground">STATION #4</span>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 Columns: Dual Camera Sensor Feeds */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Camera 01: ANPR OCR Feed */}
                <div className="relative aspect-video rounded-xs border border-border/80 bg-neutral-950 p-3 overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded-xs text-neutral-300 border border-neutral-800 flex items-center gap-1.5">
                      <Camera className="size-3 text-emerald-400" />
                      CAM-01 // FRONT ANPR (4MP IR)
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-xs border border-emerald-500/20">
                      CONF: {current.confidence}%
                    </span>
                  </div>

                  {/* Synthetic Truck Visual Mock */}
                  <div className="my-auto py-4 flex flex-col items-center justify-center text-center">
                    <div className="text-[11px] font-mono text-neutral-500 mb-1 flex items-center gap-1">
                      <Truck className="size-3.5" />
                      {current.type}
                    </div>
                    {/* Simulated High-Contrast License Plate Box */}
                    <div className="border-2 border-emerald-400/80 bg-neutral-900/90 px-4 py-1.5 rounded-xs shadow-inner">
                      <span className="font-mono text-lg sm:text-xl font-bold tracking-widest text-neutral-100">
                        {current.plate}
                      </span>
                    </div>
                    <div className="text-[9px] font-mono text-neutral-400 mt-1">
                      BOUNDING BOX: [x:142, y:288, w:420, h:110]
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 z-10 border-t border-neutral-800/80 pt-1.5">
                    <span>EXPOSURE: 1/1200s (ANTI-BLUR)</span>
                    <span>WDR: ACTIVE</span>
                  </div>
                </div>

                {/* Camera 02: Cargo Bed / Axle Position Feed */}
                <div className="relative aspect-video rounded-xs border border-border/80 bg-neutral-950 p-3 overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded-xs text-neutral-300 border border-neutral-800 flex items-center gap-1.5">
                      <Camera className="size-3 text-cyan-400" />
                      CAM-02 // CARGO OVERVIEW (WDR)
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      AXLE: ALIGNED
                    </span>
                  </div>

                  {/* Cargo Bed Verification Graphics */}
                  <div className="my-auto py-4 flex flex-col items-center justify-center text-center">
                    <div className="border border-cyan-500/40 border-dashed bg-cyan-950/20 p-3 rounded-xs max-w-[210px] space-y-1">
                      <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-tight">
                        LOAD INTEGRITY VERIFIED
                      </div>
                      <div className="text-[11px] font-sans font-medium text-neutral-200 truncate">
                        {current.material}
                      </div>
                      <div className="text-[9px] font-mono text-neutral-400">
                        Zero deck overhang detected
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 z-10 border-t border-neutral-800/80 pt-1.5">
                    <span>WEIGHLINE SENSORS: 4/4 ON DECK</span>
                    <span>NO TAMPER FLAGGED</span>
                  </div>
                </div>
              </div>

              {/* Raw Serial Stream Drawer (if activated) */}
              {showRawSerial && (
                <div className="rounded-xs border border-border bg-neutral-950 p-3 font-mono text-xs text-neutral-300 space-y-1 animate-in fade-in duration-200">
                  <div className="text-neutral-500 text-[10px] flex items-center justify-between">
                    <span>RAW RS-232 UART PACKET STREAM (/dev/ttyUSB0)</span>
                    <span className="text-emerald-400">STATUS: BROADCASTING</span>
                  </div>
                  <p className="text-[11px] text-emerald-400/90 overflow-x-auto">
                    &lt;STX&gt;+0{displayedWeight}kg GR 0014220kg TR 0028620kg NT 2026-10-09T16:50:12Z &lt;ETX&gt; [CRC: 0x8F]
                  </p>
                  <p className="text-[10px] text-neutral-500">
                    Protocol: Avery Weightronix / Toledo Continuous Format • Auto-Baud Synchronized
                  </p>
                </div>
              )}

              {/* Operational Dispatch Evidence Snapshot Card */}
              <div className="rounded-xs border border-border bg-secondary/30 p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-foreground font-semibold flex items-center gap-1.5">
                    <FileText className="size-3.5 text-muted-foreground" />
                    CRYPTOGRAPHIC WEIGHMENT EVIDENCE RECORD
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="size-3" />
                    AUTONOMOUS DISPATCH AUTHORIZED
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-muted-foreground pt-1 border-t border-border/50">
                  <div>
                    <span className="text-[10px] uppercase block text-muted-foreground/70">Transaction</span>
                    <span className="text-foreground font-medium">TXN-{current.id}-2026</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase block text-muted-foreground/70">Destination</span>
                    <span className="text-foreground font-medium truncate block">{current.destination}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase block text-muted-foreground/70">Axle Config</span>
                    <span className="text-foreground font-medium">{current.axleCount}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase block text-muted-foreground/70">SHA-256 Stamp</span>
                    <span className="text-foreground font-medium truncate block">e3b0c442...98c0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Indicator Telemetry Readout & Verification */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {/* Digital Scale Readout Display */}
              <div className="rounded-xs border border-border bg-neutral-950 p-5 space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
                    INDICATOR DIGITAL READOUT
                  </span>
                  <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-xs border border-emerald-500/20">
                    {stage === "locked" ? "STABLE WEIGHT LOCKED" : "SAMPLING LOAD CELLS..."}
                  </span>
                </div>

                {/* Primary Gross Weight Number */}
                <div className="text-center py-2">
                  <div className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-neutral-100 tabular-nums">
                    {displayedWeight.toLocaleString()} <span className="text-xl sm:text-2xl text-neutral-500 font-normal">KG</span>
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-1 uppercase tracking-wider">
                    GROSS MEASURED WEIGHT
                  </div>
                </div>

                {/* Tare and Net Tri-Cards */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-neutral-800 font-mono text-xs">
                  <div className="bg-neutral-900 p-2.5 rounded-xs border border-neutral-800">
                    <div className="text-[10px] text-neutral-400 uppercase">STORED FLEET TARE</div>
                    <div className="text-base font-semibold text-neutral-200 tabular-nums">
                      {current.tareWeight.toLocaleString()} KG
                    </div>
                  </div>

                  <div className="bg-neutral-900 p-2.5 rounded-xs border border-neutral-800">
                    <div className="text-[10px] text-emerald-400 uppercase">NET CARGO WEIGHT</div>
                    <div className="text-base font-semibold text-emerald-300 tabular-nums">
                      {current.netWeight.toLocaleString()} KG
                    </div>
                  </div>
                </div>
              </div>

              {/* 5-Step Autonomous State Machine */}
              <div className="rounded-xs border border-border bg-secondary/30 p-4 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center justify-between">
                  <span>UNATTENDED VERIFICATION STACK</span>
                  <span className="text-foreground font-semibold">18 SEC TOTAL</span>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex items-center justify-between p-1.5 rounded-xs bg-background/50 border border-border/50">
                    <span className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="size-3.5 text-emerald-400" />
                      01 // Optical ANPR Number Plate
                    </span>
                    <span className="text-muted-foreground text-[11px]">{current.plate}</span>
                  </div>

                  <div className="flex items-center justify-between p-1.5 rounded-xs bg-background/50 border border-border/50">
                    <span className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="size-3.5 text-emerald-400" />
                      02 // Axle Deck Positioning Check
                    </span>
                    <span className="text-emerald-400 text-[11px]">Centered (0 mm)</span>
                  </div>

                  <div className="flex items-center justify-between p-1.5 rounded-xs bg-background/50 border border-border/50">
                    <span className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="size-3.5 text-emerald-400" />
                      03 // Serial Stable-Weight Capture
                    </span>
                    <span className="text-foreground text-[11px]">{current.grossWeight.toLocaleString()} kg</span>
                  </div>

                  <div className="flex items-center justify-between p-1.5 rounded-xs bg-background/50 border border-border/50">
                    <span className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="size-3.5 text-emerald-400" />
                      04 // Anti-Pilferage Fraud Check
                    </span>
                    <span className="text-emerald-400 text-[11px]">Passed (Zero Anomaly)</span>
                  </div>

                  <div className="flex items-center justify-between p-1.5 rounded-xs bg-background/50 border border-border/50">
                    <span className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="size-3.5 text-emerald-400" />
                      05 // Boom Barrier Raised & ERP Sync
                    </span>
                    <span className="text-emerald-400 text-[11px]">Gate Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
