"use client";

import Link from "next/link";
import { PilotDialog } from "@/components/pilot-dialog";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";

export function Footer() {
  const columns = [
    {
      title: "Platform",
      links: [
        { label: "Weighment Console", href: "#console" },
        { label: "Edge-to-Cloud Topology", href: "#architecture" },
        { label: "Core Capabilities", href: "#capabilities" },
        { label: "Indicator Protocol Matrix", href: "#hardware" },
        { label: "Throughput ROI Calculator", href: "#roi" },
      ],
    },
    {
      title: "Verticals",
      links: [
        { label: "Cement & Clinker", href: "#industries" },
        { label: "Mining & Aggregates", href: "#industries" },
        { label: "Ready-Mix Concrete", href: "#industries" },
        { label: "Steel & Scrap Yards", href: "#industries" },
        { label: "Inland Logistics & Ports", href: "#industries" },
      ],
    },
    {
      title: "Compatibility",
      links: [
        { label: "Avery Weigh-Tronix", href: "#hardware" },
        { label: "Mettler Toledo IND Series", href: "#hardware" },
        { label: "Cardinal Scale 205/825", href: "#hardware" },
        { label: "Rice Lake 920i / 880", href: "#hardware" },
        { label: "Essae Industrial Series", href: "#hardware" },
      ],
    },
    {
      title: "Company & Lineage",
      links: [
        { label: "Lathey Weigh Trix Heritage", href: "#" },
        { label: "Regional Engineering Operations", href: "#" },
        { label: "Field Case Studies", href: "#" },
        { label: "Contact Engineering Desk", href: "tel:+919988071707" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#181715] text-[#a09d96] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Branding Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <AnthropicSpikeMark size={22} className="text-[#cc785c]" />
            <span
              className="text-[22px] font-normal tracking-[-0.3px] text-[#faf9f5]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Gluvok
            </span>
            <span className="text-xs text-[#a09d96] pl-2 border-l border-white/10 hidden sm:inline">
              Industrial AI & Autonomous Scale Automation
            </span>
          </div>

          <div className="flex items-center gap-3">
            <PilotDialog>
              <button
                className="h-9 px-4 rounded-[8px] bg-[#cc785c] hover:bg-[#b8674d] text-white text-xs font-medium transition-colors"
              >
                Schedule Technical Pilot
              </button>
            </PilotDialog>
          </div>
        </div>

        {/* 4 Columns Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map((col, idx) => (
            <div key={idx} className="space-y-3">
              <h5 className="text-[12px] font-mono uppercase tracking-[1.5px] text-[#faf9f5]">
                {col.title}
              </h5>
              <ul className="space-y-2.5 text-[14px]">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="hover:text-[#faf9f5] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Lineage and Location Note */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#8e8b82]">
          <div className="space-y-1">
            <p className="text-[#a09d96]">
              Developed with the industrial weighing engineering lineage of Lathey Weigh Trix.
            </p>
            <p>
              Regional Engineering Hub: Chandigarh • Panchkula • Mohali • Dera Bassi • Baddi Industrial Belt.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span>&copy; {new Date().getFullYear()} Gluvok Industrial.</span>
            <a href="#" className="hover:text-[#faf9f5]">Privacy</a>
            <a href="#" className="hover:text-[#faf9f5]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
