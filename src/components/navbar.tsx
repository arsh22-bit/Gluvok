"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PilotDialog } from "@/components/pilot-dialog";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#console", label: "Console" },
    { href: "#problems", label: "Overview" },
    { href: "#architecture", label: "Architecture" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#industries", label: "Industries" },
    { href: "#hardware", label: "Compatibility" },
    { href: "#roi", label: "ROI" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full h-16 border-b border-[#e6dfd8] bg-[#faf9f5]/95 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand & Editorial Wordmark */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 focus:outline-none">
            <AnthropicSpikeMark size={20} className="text-[#cc785c]" />
            <span
              className="text-[22px] font-normal tracking-[-0.5px] text-[#141413]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Gluvok
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-medium tracking-wide bg-[#efe9de] text-[#6c6a64]">
              Autonomous Scale AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-[#6c6a64] hover:text-[#141413] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Action Cluster */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+919988071707"
            className="text-[14px] font-medium text-[#141413] hover:text-[#cc785c] transition-colors"
          >
            Engineering Desk
          </a>

          <PilotDialog>
            <button
              className="inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[#cc785c] hover:bg-[#b8674d] active:bg-[#a9583e] text-white font-medium text-[14px] transition-colors shadow-none"
            >
              Schedule 48h Pilot
              <ArrowRight className="size-4 ml-1.5" />
            </button>
          </PilotDialog>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-[8px] text-[#141413] hover:bg-[#efe9de] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Sheet */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#faf9f5] border-b border-[#e6dfd8] px-4 pt-3 pb-6 space-y-3 shadow-md animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-3 rounded-[8px] text-[15px] font-medium text-[#141413] hover:bg-[#efe9de] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#e6dfd8]">
            <PilotDialog>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-full h-10 rounded-[8px] bg-[#cc785c] text-white font-medium text-[14px] flex items-center justify-center gap-2"
              >
                Schedule 48h Pilot
                <ArrowRight className="size-4" />
              </button>
            </PilotDialog>
          </div>
        </div>
      )}
    </header>
  );
}
