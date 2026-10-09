"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { AnthropicSpikeMark } from "@/components/claude/anthropic-mark";

interface PilotDialogProps {
  children?: React.ReactNode;
  triggerText?: string;
  className?: string;
}

export function PilotDialog({
  children,
  triggerText = "Request Technical Pilot",
  className,
}: PilotDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    plantLocation: "",
    indicatorModel: "",
    dailyTruckVolume: "150-300",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children ? (
        <DialogTrigger render={children as React.ReactElement} />
      ) : (
        <DialogTrigger
          render={
            <button
              className={`h-10 px-5 rounded-[8px] bg-[#cc785c] hover:bg-[#b8674d] text-white font-medium text-[14px] transition-colors ${className}`}
              data-slot="dialog-trigger"
            >
              {triggerText}
            </button>
          }
        />
      )}
      <DialogContent className="sm:max-w-xl bg-[#faf9f5] border border-[#e6dfd8] text-[#141413] p-0 overflow-hidden rounded-[16px] shadow-lg">
        <div className="border-b border-[#e6dfd8] p-6 sm:p-7 bg-[#efe9de]">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-[#faf9f5] text-[#cc785c] font-semibold border border-[#e6dfd8]">
              <AnthropicSpikeMark size={12} className="text-[#cc785c]" />
              48-Hour On-Site Deployment
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#5db872] bg-[#5db872]/15">
              Zero Scale Downtime
            </span>
          </div>
          <DialogTitle
            className="text-[24px] font-normal tracking-[-0.5px] text-[#141413]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Schedule Technical Feasibility & Pilot
          </DialogTitle>
          <DialogDescription className="text-[#6c6a64] text-sm mt-1 leading-relaxed">
            We connect passively to your existing weighing indicator via RS-232/485 in parallel.
            Your current weighbridge software and operations are never interrupted.
          </DialogDescription>
        </div>

        {submitted ? (
          <div className="p-8 flex flex-col items-center text-center gap-4 bg-[#faf9f5]">
            <div className="size-12 rounded-full bg-[#5db872]/15 border border-[#5db872]/30 flex items-center justify-center text-[#5db872]">
              <CheckCircle2 className="size-6" />
            </div>
            <div className="space-y-1">
              <h3
                className="text-xl font-normal text-[#141413]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Pilot Request Registered
              </h3>
              <p className="text-sm text-[#6c6a64] max-w-sm">
                Our industrial integration engineering team will review your indicator protocol ({formData.indicatorModel || "Standard Serial"}) and reach out within 4 business hours.
              </p>
            </div>

            <div className="w-full bg-[#efe9de] border border-[#e6dfd8] p-4 rounded-[8px] text-left font-mono text-xs space-y-1.5 mt-2">
              <div className="text-[#6c6a64]">REFERENCE ID: <span className="text-[#141413] font-semibold">GLV-PLT-48H</span></div>
              <div className="text-[#6c6a64]">FACILITY: <span className="text-[#141413]">{formData.companyName || "Industrial Site"}</span></div>
              <div className="text-[#6c6a64]">PROTOCOL TAP: <span className="text-[#141413]">{formData.indicatorModel || "RS-232 Passive Splitter"}</span></div>
              <div className="text-[#6c6a64]">ENGINEER ASSIGNMENT: <span className="text-[#5db872]">DISPATCHING CHANDIGARH HUB</span></div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 w-full h-10 rounded-[8px] bg-[#cc785c] hover:bg-[#b8674d] text-white font-medium text-[14px] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 bg-[#faf9f5]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#6c6a64]">
                  Enterprise / Plant Name *
                </label>
                <input
                  required
                  placeholder="e.g. Ambuja Cements / Tata Steel"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full h-10 px-3.5 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] text-sm text-[#141413] placeholder-[#8e8b82] outline-none focus:border-[#cc785c] focus:ring-[3px] focus:ring-[#cc785c]/15"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#6c6a64]">
                  Plant Location / Cluster *
                </label>
                <input
                  required
                  placeholder="e.g. Baddi, Dera Bassi, Panchkula"
                  value={formData.plantLocation}
                  onChange={(e) => setFormData({ ...formData, plantLocation: e.target.value })}
                  className="w-full h-10 px-3.5 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] text-sm text-[#141413] placeholder-[#8e8b82] outline-none focus:border-[#cc785c] focus:ring-[3px] focus:ring-[#cc785c]/15"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#6c6a64]">
                  Contact Person & Title *
                </label>
                <input
                  required
                  placeholder="e.g. Rajesh Kumar (Head of Dispatch)"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full h-10 px-3.5 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] text-sm text-[#141413] placeholder-[#8e8b82] outline-none focus:border-[#cc785c] focus:ring-[3px] focus:ring-[#cc785c]/15"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#6c6a64]">
                  Mobile / WhatsApp *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-10 px-3.5 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] text-sm text-[#141413] placeholder-[#8e8b82] font-mono outline-none focus:border-[#cc785c] focus:ring-[3px] focus:ring-[#cc785c]/15"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#6c6a64]">
                  Current Weighing Indicator Make
                </label>
                <input
                  placeholder="e.g. Avery Weigh-Tronix, Mettler, Essae"
                  value={formData.indicatorModel}
                  onChange={(e) => setFormData({ ...formData, indicatorModel: e.target.value })}
                  className="w-full h-10 px-3.5 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] text-sm text-[#141413] placeholder-[#8e8b82] outline-none focus:border-[#cc785c] focus:ring-[3px] focus:ring-[#cc785c]/15"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#6c6a64]">
                  Estimated Daily Truck Volume
                </label>
                <select
                  value={formData.dailyTruckVolume}
                  onChange={(e) => setFormData({ ...formData, dailyTruckVolume: e.target.value })}
                  className="w-full h-10 rounded-[8px] border border-[#e6dfd8] bg-[#faf9f5] px-3.5 text-sm text-[#141413] outline-none focus:border-[#cc785c] focus:ring-[3px] focus:ring-[#cc785c]/15"
                >
                  <option value="under-100">Under 100 trucks/day</option>
                  <option value="150-300">150 – 300 trucks/day</option>
                  <option value="300-600">300 – 600 trucks/day</option>
                  <option value="over-600">600+ trucks/day (High Throughput)</option>
                </select>
              </div>
            </div>

            <div className="pt-3 border-t border-[#e6dfd8] flex items-center justify-between text-xs text-[#6c6a64]">
              <span className="flex items-center gap-1.5 font-mono">
                <ShieldCheck className="size-3.5 text-[#cc785c]" />
                NDA Protected & Non-Intrusive Tap
              </span>
              <button
                type="submit"
                className="inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[#cc785c] hover:bg-[#b8674d] text-white font-medium text-[14px] transition-colors"
              >
                Schedule Technical Pilot
                <ArrowRight className="size-4 ml-1.5" />
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
