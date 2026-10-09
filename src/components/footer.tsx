"use client";

import Link from "next/link";
import { PilotDialog } from "@/components/pilot-dialog";
import { Activity, ShieldCheck, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-neutral-950 text-neutral-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Lineage */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="size-7 rounded-xs bg-foreground text-background flex items-center justify-center font-bold text-xs">
                GV
              </div>
              <span className="font-semibold text-neutral-200 tracking-wider text-sm font-mono">
                GLUVOK
              </span>
            </div>

            <p className="text-xs text-neutral-500 font-sans max-w-sm leading-relaxed">
              Industrial AI and automation platform for autonomous weighbridge operations.
              Developed with the industrial weighing engineering lineage of Lathey Weigh Trix.
            </p>

            <div className="pt-2 text-[11px] text-neutral-500 space-y-1">
              <div>REGIONAL OPERATIONS DESK:</div>
              <div className="text-neutral-300">
                Chandigarh • Panchkula • Mohali • Dera Bassi • Baddi Industrial Belt
              </div>
            </div>
          </div>

          {/* Navigation Column 1: Platform */}
          <div className="space-y-3">
            <div className="text-neutral-200 font-semibold uppercase tracking-wider text-[11px]">
              PLATFORM
            </div>
            <ul className="space-y-2 text-[11px] text-neutral-500">
              <li>
                <a href="#console" className="hover:text-neutral-200 transition-colors">
                  Live Weighment Console
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-neutral-200 transition-colors">
                  Edge-to-Cloud Topology
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-neutral-200 transition-colors">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#hardware" className="hover:text-neutral-200 transition-colors">
                  Indicator Protocol Matrix
                </a>
              </li>
              <li>
                <a href="#roi" className="hover:text-neutral-200 transition-colors">
                  Throughput & ROI Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Sectors */}
          <div className="space-y-3">
            <div className="text-neutral-200 font-semibold uppercase tracking-wider text-[11px]">
              INDUSTRIES
            </div>
            <ul className="space-y-2 text-[11px] text-neutral-500">
              <li>
                <a href="#industries" className="hover:text-neutral-200 transition-colors">
                  Cement & Clinker Dispatch
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-neutral-200 transition-colors">
                  Mining, Stone Crushers & Quarries
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-neutral-200 transition-colors">
                  Ready-Mix Concrete (RMC)
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-neutral-200 transition-colors">
                  Steel Mills & Scrap Yards
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-neutral-200 transition-colors">
                  Ports & Intermodal Terminals
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Field Engineering */}
          <div className="space-y-3">
            <div className="text-neutral-200 font-semibold uppercase tracking-wider text-[11px]">
              FIELD DEPLOYMENT
            </div>
            <ul className="space-y-2 text-[11px] text-neutral-500">
              <li>
                <PilotDialog triggerText="Request 48-Hour Pilot">
                  <span className="hover:text-neutral-200 transition-colors cursor-pointer">
                    Request 48-Hour Pilot
                  </span>
                </PilotDialog>
              </li>
              <li>
                <span className="text-neutral-400">RS-232 / 485 Passive Tap</span>
              </li>
              <li>
                <span className="text-neutral-400">DIN-Rail Edge Controller</span>
              </li>
              <li>
                <span className="text-neutral-400">Legal Weights Compliance</span>
              </li>
              <li>
                <span className="text-neutral-400">SAP / Oracle ERP Webhooks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Live Telemetry */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span className="text-neutral-400">
              ALL INDUSTRIAL EDGE NODES HEALTHY (99.98% DISPATCH UPTIME)
            </span>
          </div>

          <div className="text-neutral-500">
            © {new Date().getFullYear()} Gluvok Technologies. Lathey Weigh Trix Engineering Heritage. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
