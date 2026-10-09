"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { PilotDialog } from "@/components/pilot-dialog";
import { Clock, TrendingUp, ShieldCheck, ArrowRight, DollarSign } from "lucide-react";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";

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

  // Estimated annual leakage/discrepancy savings
  const annualLeakageINR = Math.round(monthlyTrucks * 12 * 320);

  return (
    <section id="roi" className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <AnthropicSpikeMark size={14} className="text-[#cc785c]" />
            <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#cc785c]">
              THROUGHPUT & ROI
            </span>
          </div>

          <h2
            className="text-[#141413] text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Quantify your facility&apos;s efficiency gain.
          </h2>

          <p className="text-[#3d3d3a] text-[16px] sm:text-[18px] leading-[1.55]">
            Calculate the exact hours saved, additional truck throughput capacity, and shrinkage prevented
            by converting your weighbridges to unattended autonomous operation.
          </p>
        </div>

        {/* 2-Column Grid: Sliders in #efe9de, Results in #181715 Dark Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sliders Input Panel in #efe9de (32px padding) */}
          <div className="lg:col-span-6 rounded-[16px] bg-[#efe9de] p-8 border border-[#e6dfd8] space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Slider 1: Weighbridges */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#141413] uppercase tracking-wider font-medium">
                    Active Weighbridges
                  </span>
                  <span className="text-sm font-bold text-[#141413] bg-[#faf9f5] px-3 py-1 rounded-[6px] border border-[#e6dfd8]">
                    {scales} {scales === 1 ? "Scale" : "Scales"}
                  </span>
                </div>
                <Slider
                  value={scales}
                  onValueChange={(val) => setScales(Array.isArray(val) ? val[0] : (val as number))}
                  min={1}
                  max={12}
                  step={1}
                  className="w-full py-2 accent-[#cc785c]"
                />
              </div>

              {/* Slider 2: Trucks Per Day */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#141413] uppercase tracking-wider font-medium">
                    Daily Trucks Per Weighbridge
                  </span>
                  <span className="text-sm font-bold text-[#141413] bg-[#faf9f5] px-3 py-1 rounded-[6px] border border-[#e6dfd8]">
                    {trucks} Trucks / Day
                  </span>
                </div>
                <Slider
                  value={trucks}
                  onValueChange={(val) => setTrucks(Array.isArray(val) ? val[0] : (val as number))}
                  min={30}
                  max={600}
                  step={10}
                  className="w-full py-2 accent-[#cc785c]"
                />
              </div>

              {/* Slider 3: Current Time */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#141413] uppercase tracking-wider font-medium">
                    Current Scale Dwell Time
                  </span>
                  <span className="text-sm font-bold text-[#141413] bg-[#faf9f5] px-3 py-1 rounded-[6px] border border-[#e6dfd8]">
                    {currentMinutes.toFixed(1)} Minutes
                  </span>
                </div>
                <Slider
                  value={currentMinutes}
                  onValueChange={(val) => setCurrentMinutes(Array.isArray(val) ? val[0] : (val as number))}
                  min={1.5}
                  max={8.0}
                  step={0.5}
                  className="w-full py-2 accent-[#cc785c]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#e6dfd8] text-xs text-[#6c6a64]">
              Model compares against Gluvok verified average of 18 seconds (0.3 minutes) per autonomous weighment.
            </div>
          </div>

          {/* Results Showcase in Dark Navy Product Card #181715 */}
          <div className="lg:col-span-6 rounded-[16px] bg-[#181715] text-[#faf9f5] p-8 sm:p-10 border border-white/5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-[12px] font-mono uppercase tracking-[1.5px] text-[#cc785c]">
                  ESTIMATED VALUE UNLOCKED
                </span>
                <span className="text-xs font-mono text-[#a09d96]">
                  {monthlyTrucks.toLocaleString()} TRUCKS / MO
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Metric 1 */}
                <div className="p-4 rounded-[10px] bg-[#1f1e1b] border border-white/5 space-y-1">
                  <div className="text-[11px] font-mono text-[#a09d96]">MONTHLY HOURS SAVED</div>
                  <div
                    className="text-[36px] font-normal text-[#faf9f5] tracking-[-0.5px]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {monthlyHoursSaved.toLocaleString()}
                    <span className="text-sm font-sans font-normal text-[#a09d96] ml-1">hrs/mo</span>
                  </div>
                  <div className="text-[11px] text-[#5db872]">Eliminates driver idling bottlenecks</div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-[10px] bg-[#1f1e1b] border border-white/5 space-y-1">
                  <div className="text-[11px] font-mono text-[#a09d96]">ADDED DISPATCH CAPACITY</div>
                  <div
                    className="text-[36px] font-normal text-[#faf9f5] tracking-[-0.5px]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    +{additionalTrucksCapacity}
                    <span className="text-sm font-sans font-normal text-[#a09d96] ml-1">trucks/day</span>
                  </div>
                  <div className="text-[11px] text-[#5db872]">Without adding physical scales</div>
                </div>
              </div>

              {/* Metric 3: Shrinkage Savings */}
              <div className="p-4 rounded-[10px] bg-[#1f1e1b] border border-white/5 space-y-1">
                <div className="text-[11px] font-mono text-[#cc785c]">ANNUAL FRAUD & SHRINKAGE PREVENTED</div>
                <div
                  className="text-[32px] sm:text-[38px] font-normal text-[#faf9f5] tracking-[-0.5px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  ₹{(annualLeakageINR / 100000).toFixed(1)} Lakhs
                  <span className="text-xs font-sans text-[#a09d96] ml-2">est. annual recovery</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#a09d96]">
                Average plant payback period: 45–60 days
              </span>
              <PilotDialog>
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center h-10 px-6 rounded-[8px] bg-[#cc785c] hover:bg-[#b8674d] text-white font-medium text-[14px] transition-colors"
                >
                  Schedule 48-Hour Plant Pilot
                  <ArrowRight className="size-4 ml-2" />
                </button>
              </PilotDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
