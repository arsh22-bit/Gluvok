"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PilotDialog } from "@/components/pilot-dialog";
import { Activity, ArrowUpRight, Cpu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand & Technical Revision Indicator */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="size-8 rounded-xs bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold text-sm tracking-wider">
              GV
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-wider text-sm text-foreground flex items-center gap-1.5 font-mono">
                GLUVOK
                <span className="text-[10px] text-muted-foreground font-normal border border-border/80 px-1 py-0.2 rounded-xs">
                  EDGE V2.4
                </span>
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                Industrial Scale AI
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-border/60 text-xs font-mono text-muted-foreground">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] tracking-tight">INDICATOR BUS: ACTIVE (RS-232/485)</span>
          </div>
        </div>

        {/* Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-tight text-muted-foreground">
          <Link
            href="#console"
            className="hover:text-foreground transition-colors"
          >
            01//CONSOLE
          </Link>
          <Link
            href="#architecture"
            className="hover:text-foreground transition-colors"
          >
            02//ARCHITECTURE
          </Link>
          <Link
            href="#capabilities"
            className="hover:text-foreground transition-colors"
          >
            03//CAPABILITIES
          </Link>
          <Link
            href="#industries"
            className="hover:text-foreground transition-colors"
          >
            04//INDUSTRIES
          </Link>
          <Link
            href="#hardware"
            className="hover:text-foreground transition-colors"
          >
            05//COMPATIBILITY
          </Link>
          <Link
            href="#roi"
            className="hover:text-foreground transition-colors"
          >
            06//ROI CALCULATOR
          </Link>
        </nav>

        {/* Action Cluster */}
        <div className="flex items-center gap-3">
          <PilotDialog>
            <Button
              variant="outline"
              size="sm"
              className="text-xs font-mono tracking-tight border-border/90 hover:bg-secondary/70 h-8 px-3.5"
            >
              Request 48h Pilot
              <ArrowUpRight className="size-3.5" data-icon="inline-end" />
            </Button>
          </PilotDialog>
        </div>
      </div>
    </header>
  );
}
