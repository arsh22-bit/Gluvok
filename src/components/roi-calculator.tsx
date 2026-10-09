"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PilotDialog } from "@/components/pilot-dialog";
import { Clock, TrendingUp, ShieldCheck, ArrowRight, DollarSign } from "lucide-react";

export function RoiCalculator() {
  const [scales, setScales] = useState<number>(2);
  const [trucks, setTrucks] = useState<number>(180);
  const [currentMinutes, setCurrentMinutes] = useState<number>(3.5);

  // Gluvok operates at 0.3 minutes (18 seconds)
  const gluvokMinutes = 0.3;
  const minutesSavedPerTruck = currentMinutes - gluvokMinutes;

  // Monthly totals (assuming 26 working days)
  const monthlyTrucks = scales * trucks * 26;
  const monthlyHoursSaved = Math.round((monthlyTrucks * minutesSavedPerTruck) / 60);

  // Additional throughput capacity potential per scale per day
  const dailyHoursSavedPerScale = (trucks * minutesSavedPerTruck) / 60;
  const additionalTrucksCapacity = Math.round(dailyHoursSavedPerScale * (60 / currentMinutes));

  // Estimated annual leakage/discrepancy savings (conservative estimation: ~₹350 / $4.20 per truck discrepancy/pilferage reduction)
  const annualLeakagePrevented = Math.round(monthlyTrucks * 12 * 320); // In INR
  const annualLeakageUSD = Math.round((annualLeakagePrevented / 85)); // In USD

  return (
    <section id="roi" className="py-20 lg:py-24 border-b border-border/60 bg-secondary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-2">
            <span className="size-2 rounded-xs bg-emerald-400" />
            OPERATIONAL ROI & THROUGHPUT CALCULATOR
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Quantify your facility&apos;s efficiency gain
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Calculate the exact hours saved, additional truck throughput capacity, and annual shrinkage
            prevented by switching your scales to unattended autonomous operation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Input Panel */}
          <div className="lg:col-span-6 rounded-xs border border-border bg-card p-6 sm:p-8 space-y-8 shadow-sm">
            {/* Slider 1: Number of Weighbridges */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-foreground uppercase tracking-wider">Number of Active Weighbridges</span>
                <span className="text-base font-bold text-foreground bg-secondary px-2.5 py-0.5 rounded-xs border border-border">
                  {scales} {scales === 1 ? "Scale" : "Scales"}
                </span>
              </div>
              <Slider
                value={scales}
                onValueChange={(val) => setScales(Array.isArray(val) ? val[0] : (val as number))}
                min={1}
                max={10}
                step={1}
                className="py-2"
              />
              <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                <span>1 Scale</span>
                <span>5 Scales</span>
                <span>10 Scales</span>
              </div>
            </div>

            {/* Slider 2: Daily Truck Volume */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-foreground uppercase tracking-wider">Daily Trucks Per Weighbridge</span>
                <span className="text-base font-bold text-foreground bg-secondary px-2.5 py-0.5 rounded-xs border border-border">
                  {trucks} Trucks / Day
                </span>
              </div>
              <Slider
                value={trucks}
                onValueChange={(val) => setTrucks(Array.isArray(val) ? val[0] : (val as number))}
                min={40}
                max={400}
                step={10}
                className="py-2"
              />
              <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                <span>40 Trucks</span>
                <span>200 Trucks</span>
                <span>400 Trucks</span>
              </div>
            </div>

            {/* Slider 3: Current Manual Weighment Cycle */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-foreground uppercase tracking-wider">Current Manual Cycle Time</span>
                <span className="text-base font-bold text-foreground bg-secondary px-2.5 py-0.5 rounded-xs border border-border">
                  {currentMinutes.toFixed(1)} Minutes
                </span>
              </div>
              <Slider
                value={currentMinutes}
                onValueChange={(val) => setCurrentMinutes(Array.isArray(val) ? val[0] : (val as number))}
                min={1.5}
                max={6.0}
                step={0.5}
                className="py-2"
              />
              <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                <span>1.5 Min (Fast Manual)</span>
                <span>3.5 Min (Standard)</span>
                <span>6.0 Min (High Congestion)</span>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-muted-foreground border-t border-border/60 flex items-center justify-between">
              <span>AUTONOMOUS GLUVOK TARGET:</span>
              <span className="text-emerald-400 font-semibold">18 SECONDS (&lt; 0.3 MIN)</span>
            </div>
          </div>

          {/* Results Output Panel */}
          <div className="lg:col-span-6 rounded-xs border border-border bg-card p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-border/60 pb-3 font-mono text-xs">
              <span className="text-foreground font-semibold flex items-center gap-1.5">
                <TrendingUp className="size-3.5 text-emerald-400" />
                PROJECTED ANNUAL DISPATCH DIVIDEND
              </span>
              <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-[10px] bg-emerald-500/10">
                PAYBACK &lt; 45 DAYS
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Output 1: Monthly Hours Saved */}
              <div className="p-4 rounded-xs border border-border/60 bg-secondary/30 space-y-1">
                <div className="text-[10px] font-mono text-muted-foreground uppercase">
                  Operator & Driver Time Saved
                </div>
                <div className="text-3xl font-bold font-mono text-foreground tabular-nums">
                  {monthlyHoursSaved.toLocaleString()} <span className="text-xs text-muted-foreground font-normal">HRS / MO</span>
                </div>
                <p className="text-[11px] text-muted-foreground font-sans">
                  Eliminates scale queue idling and driver paperwork delays.
                </p>
              </div>

              {/* Output 2: Additional Scale Capacity */}
              <div className="p-4 rounded-xs border border-border/60 bg-secondary/30 space-y-1">
                <div className="text-[10px] font-mono text-muted-foreground uppercase">
                  Additional Daily Truck Capacity
                </div>
                <div className="text-3xl font-bold font-mono text-foreground tabular-nums">
                  +{additionalTrucksCapacity * scales} <span className="text-xs text-muted-foreground font-normal">TRUCKS</span>
                </div>
                <p className="text-[11px] text-muted-foreground font-sans">
                  Expand dispatch throughput without building a second weighbridge.
                </p>
              </div>
            </div>

            {/* Output 3: Discrepancy & Shrinkage Prevention */}
            <div className="p-4 rounded-xs border border-emerald-500/30 bg-emerald-950/10 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-emerald-400 uppercase font-semibold">
                  Estimated Annual Shrinkage & Leakage Prevented
                </span>
                <span className="text-neutral-400 text-[10px]">CONSERVATIVE AUDIT</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-300 tabular-nums">
                ₹ {(annualLeakagePrevented / 100000).toFixed(1)} Lakhs{" "}
                <span className="text-sm font-normal text-muted-foreground font-mono">
                  (≈ ${annualLeakageUSD.toLocaleString()} USD / yr)
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                Derived from preventing axle stepping, unverified driver tare overrides, duplicate weighments, and manual transcription leakage.
              </p>
            </div>

            {/* CTA within Calculator */}
            <div className="pt-2">
              <PilotDialog triggerText="Validate This ROI on Your Scale (48h Pilot)">
                <Button className="w-full h-11 font-mono text-xs uppercase tracking-wider bg-foreground text-background hover:bg-neutral-200">
                  Validate This ROI on Your Scale (48h Pilot)
                  <ArrowRight className="size-4" data-icon="inline-end" />
                </Button>
              </PilotDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
