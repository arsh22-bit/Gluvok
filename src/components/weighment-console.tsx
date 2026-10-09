"use client";

import { useState, useEffect } from "react";
import {
  Camera,
  CheckCircle2,
  Cpu,
  RefreshCw,
  Shield,
  Wifi,
  Truck,
  Hash,
  Activity,
  FileText,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";

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
    plate: "CH 01 TA 5549",
    type: "Multi-Axle Flatbed Trailer",
    material: "Steel TMT Rebars (Fe 550D)",
    grossWeight: 49120,
    tareWeight: 16800,
    netWeight: 32320,
    axleCount: "5 Axles / 18 Wheels",
    destination: "L&T Infrastructure Site - Mohali",
    confidence: 99.8,
  },
];

export function WeighmentConsole() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<number>(4);
  const [elapsedTime, setElapsedTime] = useState(16.4);
  const [weightFluctuation, setWeightFluctuation] = useState(0);

  const scenario = SCENARIOS[selectedScenarioIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setWeightFluctuation(Math.floor(Math.random() * 20) - 10);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const triggerSimulation = (index: number) => {
    setSelectedScenarioIndex(index);
    setIsProcessing(true);
    setStep(1);
    setElapsedTime(0.8);

    setTimeout(() => {
      setStep(2);
      setElapsedTime(4.2);
    }, 900);

    setTimeout(() => {
      setStep(3);
      setElapsedTime(11.5);
    }, 1800);

    setTimeout(() => {
      setStep(4);
      setElapsedTime(16.8);
      setIsProcessing(false);
    }, 2700);
  };

  return (
    <section id="console" className="w-full bg-[#181715] text-[#faf9f5] py-20 lg:py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header with Copernicus Serif in Cream #faf9f5 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <AnthropicSpikeMark size={16} className="text-[#cc785c]" />
              <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#a09d96]">
                PRODUCT CHROME · HARDWARE EMULATOR
              </span>
            </div>

            <h2
              className="text-[#faf9f5] text-[34px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              The Unattended Weighment Console.
            </h2>

            <p className="text-[#a09d96] text-[16px] leading-[1.55]">
              Real-time visualization of Gluvok edge daemon processing live RS-232 indicator serial streams,
              dual ANPR camera frame alignment, and automated boom barrier relay switching.
            </p>
          </div>

          {/* Test Vehicle Scenario Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {SCENARIOS.map((sc, i) => (
              <button
                key={sc.id}
                onClick={() => triggerSimulation(i)}
                className={`px-3.5 py-2 rounded-[8px] text-[13px] font-medium transition-colors border ${
                  selectedScenarioIndex === i
                    ? "bg-[#cc785c] text-white border-[#cc785c]"
                    : "bg-[#252320] text-[#a09d96] border-white/5 hover:text-[#faf9f5]"
                }`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {sc.plate}
              </button>
            ))}
          </div>
        </div>

        {/* The Main Console Chrome Container */}
        <div className="rounded-[16px] bg-[#1f1e1b] border border-white/10 p-6 sm:p-8 space-y-8 shadow-md">
          {/* Top Bar Indicators */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#5db872]" />
                <span className="text-[#faf9f5]">EDGE DAEMON: ONLINE (10MS LOOP)</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[#a09d96]">
                <span>INDICATOR COM1: 9600 BAUD</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#a09d96]">CYCLE TIME:</span>
              <span className="text-[#cc785c] font-semibold text-sm">
                {elapsedTime.toFixed(1)}s
              </span>
              <button
                onClick={() => triggerSimulation(selectedScenarioIndex)}
                className="px-2.5 py-1 rounded-[6px] bg-[#252320] hover:bg-[#2d2b27] text-white flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className={`size-3 ${isProcessing ? "animate-spin" : ""}`} />
                <span>Re-weigh</span>
              </button>
            </div>
          </div>

          {/* 3 Column Grid: Vision / Indicator Load Readout / Relays */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Col 1: Vision Subsystem Camera Mockup (4 Cols) */}
            <div className="lg:col-span-4 bg-[#181715] rounded-[12px] p-5 border border-white/5 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#a09d96]">
                <span className="flex items-center gap-1.5">
                  <Camera className="size-3.5 text-[#cc785c]" />
                  FRONT ANPR (CAM-01)
                </span>
                <span className="text-[#5db872]">{scenario.confidence}% CONF</span>
              </div>

              {/* Simulated Camera Feed Container */}
              <div className="aspect-video w-full rounded-[8px] bg-[#252320] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden p-4 text-center">
                <div className="absolute top-2 left-2 flex items-center gap-1 text-[10px] font-mono text-[#5db872]">
                  <span className="size-1.5 rounded-full bg-[#5db872] animate-pulse" />
                  REC 1080P
                </div>

                <div className="space-y-1">
                  <div className="inline-block px-3 py-1 rounded-[4px] bg-[#181715] border border-white/20 font-mono text-lg font-bold tracking-wider text-[#faf9f5]">
                    {scenario.plate}
                  </div>
                  <div className="text-[11px] text-[#a09d96]">{scenario.type}</div>
                </div>

                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[#a09d96]">
                  DECK GEOMETRY: 100% IN-BOUNDS
                </div>
              </div>

              {/* Material Classification */}
              <div className="space-y-1.5 text-xs">
                <div className="text-[#a09d96]">CARGO MANIFEST CLASSIFICATION:</div>
                <div className="text-[#faf9f5] font-medium p-2 rounded-[6px] bg-[#252320]">
                  {scenario.material}
                </div>
              </div>
            </div>

            {/* Col 2: Load Cell Hardware Serial Readout (5 Cols) */}
            <div className="lg:col-span-5 bg-[#181715] rounded-[12px] p-6 border border-white/5 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#a09d96] font-mono">
                  HARDWARE SERIAL CAPTURE (RS-232)
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#5db872]/20 text-[#5db872]">
                  CALIBRATION VERIFIED
                </span>
              </div>

              {/* Huge Monospace Weight Display */}
              <div className="text-center py-4 space-y-1 bg-[#1f1e1b] rounded-[10px] border border-white/5">
                <div className="text-xs font-mono text-[#a09d96]">INDICATOR GROSS WEIGHT:</div>
                <div
                  className="text-[44px] sm:text-[54px] font-mono font-bold tracking-tight text-[#faf9f5]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {(scenario.grossWeight + (isProcessing ? weightFluctuation : 0)).toLocaleString()}{" "}
                  <span className="text-xl font-normal text-[#a09d96]">kg</span>
                </div>
                <div className="text-[12px] font-mono text-[#5db872] flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="size-3.5" />
                  STABLE WEIGHT LOCK CONFIRMED
                </div>
              </div>

              {/* Gross / Tare / Net Breakdown */}
              <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                <div className="p-2.5 rounded-[8px] bg-[#252320]">
                  <div className="text-[#a09d96] text-[10px]">GROSS</div>
                  <div className="text-[#faf9f5] font-semibold mt-1">
                    {scenario.grossWeight.toLocaleString()} kg
                  </div>
                </div>
                <div className="p-2.5 rounded-[8px] bg-[#252320]">
                  <div className="text-[#a09d96] text-[10px]">TARE (STORED)</div>
                  <div className="text-[#faf9f5] font-semibold mt-1">
                    {scenario.tareWeight.toLocaleString()} kg
                  </div>
                </div>
                <div className="p-2.5 rounded-[8px] bg-[#cc785c]/20 border border-[#cc785c]/30">
                  <div className="text-[#cc785c] text-[10px] font-semibold">NET CARGO</div>
                  <div className="text-[#faf9f5] font-bold mt-1">
                    {scenario.netWeight.toLocaleString()} kg
                  </div>
                </div>
              </div>
            </div>

            {/* Col 3: Automated State Machine & Relays (3 Cols) */}
            <div className="lg:col-span-3 bg-[#181715] rounded-[12px] p-5 border border-white/5 space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#a09d96] font-mono block">
                GATE STATE MACHINE
              </span>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded-[6px] bg-[#252320]">
                  <span>1. ANPR OCR</span>
                  <span className={step >= 1 ? "text-[#5db872]" : "text-[#8e8b82]"}>
                    {step >= 1 ? "RESOLVED" : "WAITING"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-[6px] bg-[#252320]">
                  <span>2. AXLE BOUNDARY</span>
                  <span className={step >= 2 ? "text-[#5db872]" : "text-[#8e8b82]"}>
                    {step >= 2 ? "CENTERED" : "SCANNING"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-[6px] bg-[#252320]">
                  <span>3. SERIAL WEIGHT</span>
                  <span className={step >= 3 ? "text-[#5db872]" : "text-[#8e8b82]"}>
                    {step >= 3 ? "LOCKED" : "POLLING"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-[6px] bg-[#252320]">
                  <span>4. BOOM BARRIER</span>
                  <span className={step >= 4 ? "text-[#cc785c] font-bold" : "text-[#8e8b82]"}>
                    {step >= 4 ? "RAISED" : "CLOSED"}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-center">
                <span className="text-[11px] text-[#a09d96]">
                  Digital Slip SHA-256 Stamped · WhatsApp Dispatched
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
