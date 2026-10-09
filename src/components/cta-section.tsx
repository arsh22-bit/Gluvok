"use client";

import { PilotDialog } from "@/components/pilot-dialog";
import { PhoneCall, ArrowRight, Check } from "lucide-react";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";

export function CtaSection() {
  return (
    <section className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-Bleed High-Voltage Coral Card (#cc785c) */}
        <div className="rounded-[16px] bg-[#cc785c] text-white p-10 sm:p-16 text-center space-y-8 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-[12px] font-semibold tracking-[1.5px] uppercase">
            <AnthropicSpikeMark size={14} color="white" />
            <span>2026 INDUSTRIAL FLEET COHORT</span>
          </div>

          <h2
            className="text-white text-[32px] sm:text-[46px] font-normal leading-[1.1] tracking-[-1px] max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Eliminate weighbridge bottlenecks before your next dispatch peak.
          </h2>

          <p className="text-white/90 text-[16px] sm:text-[18px] max-w-2xl mx-auto leading-relaxed">
            Arrange a 48-hour parallel pilot on your scale. Our engineers arrive with pre-configured edge hardware
            ready to plug into your indicator over secondary serial bus with zero scale downtime.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <PilotDialog>
              <button
                className="inline-flex items-center justify-center h-11 px-8 rounded-[8px] bg-[#faf9f5] hover:bg-[#efe9de] text-[#141413] font-medium text-[15px] leading-none transition-colors shadow-sm"
              >
                Schedule 48-Hour Pilot
                <ArrowRight className="size-4 ml-2" />
              </button>
            </PilotDialog>

            <a href="tel:+919988071707">
              <button
                className="inline-flex items-center justify-center h-11 px-6 rounded-[8px] bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium text-[14px] leading-none transition-colors"
              >
                <PhoneCall className="size-4 mr-2" />
                Direct Desk: +91 99880 71707
              </button>
            </a>
          </div>

          {/* Assurance Checkpoints */}
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-8 text-[13px] text-white/90">
            <span className="flex items-center gap-2">
              <Check className="size-4 text-white" />
              Zero civil work or new load cells
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-white" />
              Non-disclosure agreement on plant logs
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-white" />
              Compatible with Avery, Mettler, Cardinal & regional OEMs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
