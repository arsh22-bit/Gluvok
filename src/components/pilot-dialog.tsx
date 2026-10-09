"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
} from "lucide-react";

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
    primaryObjective: "throughput",
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
            <Button className={className} data-slot="dialog-trigger">
              {triggerText}
            </Button>
          }
        />
      )}
      <DialogContent className="sm:max-w-xl bg-card border-border text-foreground p-0 overflow-hidden">
        <div className="border-b border-border p-6 bg-secondary/30">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider font-mono border-border">
              48-Hour On-Site Deployment
            </Badge>
            <Badge variant="outline" className="text-xs font-mono border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
              Zero Scale Downtime
            </Badge>
          </div>
          <DialogTitle className="text-xl font-semibold tracking-tight">
            Schedule Technical Feasibility & Pilot
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm mt-1">
            We connect passively to your existing weighing indicator via RS-232/485 in parallel. Your current weighbridge operations are never interrupted.
          </DialogDescription>
        </div>

        {submitted ? (
          <div className="p-8 flex flex-col items-center text-center gap-4">
            <div className="size-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="size-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Pilot Request Registered</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                Our industrial integration engineering team will review your indicator protocol ({formData.indicatorModel || "Standard Serial"}) and reach out within 4 business hours.
              </p>
            </div>

            <div className="w-full bg-secondary/50 border border-border p-4 rounded text-left font-mono text-xs space-y-1.5 mt-2">
              <div className="text-muted-foreground">REFERENCE ID: <span className="text-foreground">GLV-PLT-{Math.floor(100000 + Math.random() * 900000)}</span></div>
              <div className="text-muted-foreground">FACILITY: <span className="text-foreground">{formData.companyName || "Industrial Site"}</span></div>
              <div className="text-muted-foreground">PROTOCOL TAP: <span className="text-foreground">{formData.indicatorModel || "RS-232 Passive Splitter"}</span></div>
              <div className="text-muted-foreground">STATUS: <span className="text-emerald-400">DISPATCHING SITE ENGINEER</span></div>
            </div>

            <Button
              onClick={handleReset}
              className="mt-4 w-full"
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="companyName" className="text-xs font-mono uppercase text-muted-foreground">
                  Enterprise / Plant Name *
                </Label>
                <Input
                  id="companyName"
                  required
                  placeholder="e.g. Ambuja Cements / Tata Steel"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="bg-background text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="plantLocation" className="text-xs font-mono uppercase text-muted-foreground">
                  Plant Location / Industrial Cluster *
                </Label>
                <Input
                  id="plantLocation"
                  required
                  placeholder="e.g. Baddi, Dera Bassi, Panchkula"
                  value={formData.plantLocation}
                  onChange={(e) => setFormData({ ...formData, plantLocation: e.target.value })}
                  className="bg-background text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="contactPerson" className="text-xs font-mono uppercase text-muted-foreground">
                  Contact Person & Designation *
                </Label>
                <Input
                  id="contactPerson"
                  required
                  placeholder="e.g. Rajesh Kumar (Head of Dispatch)"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="bg-background text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs font-mono uppercase text-muted-foreground">
                  Mobile / Direct WhatsApp *
                </Label>
                <Input
                  id="phone"
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background text-sm font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="indicatorModel" className="text-xs font-mono uppercase text-muted-foreground">
                  Current Weighing Indicator Make
                </Label>
                <Input
                  id="indicatorModel"
                  placeholder="e.g. Avery Weigh-Tronix, Mettler, Essae"
                  value={formData.indicatorModel}
                  onChange={(e) => setFormData({ ...formData, indicatorModel: e.target.value })}
                  className="bg-background text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="truckVolume" className="text-xs font-mono uppercase text-muted-foreground">
                  Estimated Daily Truck Volume
                </Label>
                <select
                  id="truckVolume"
                  value={formData.dailyTruckVolume}
                  onChange={(e) => setFormData({ ...formData, dailyTruckVolume: e.target.value })}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="under-100">Under 100 trucks/day</option>
                  <option value="150-300">150 – 300 trucks/day</option>
                  <option value="300-600">300 – 600 trucks/day</option>
                  <option value="over-600">600+ trucks/day (High Throughput)</option>
                </select>
              </div>
            </div>

            <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-mono">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                NDA Protected & Non-Intrusive
              </span>
              <Button type="submit" className="gap-2">
                Initiate Pilot Qualification
                <ArrowRight className="size-4" data-icon="inline-end" />
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
