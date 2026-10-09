"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PilotDialog } from "@/components/pilot-dialog";
import {
  Building2,
  Mountain,
  Truck,
  Layers,
  Anchor,
  Factory,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function IndustryVerticals() {
  const verticals = [
    {
      id: "cement",
      name: "Cement & Clinker",
      icon: Building2,
      subtitle: "High-Volume Dispatch Operations",
      overview:
        "Cement grinding and integrated plants run intense 24/7 dispatch cycles. Gluvok integrates with plant SAP/ERP systems to automatically validate delivery orders, weigh bulk tankers and bag trailers, and issue electronic gate passes without operator bottlenecks.",
      challenges: [
        "Hours-long tanker queues during peak morning and night dispatch windows.",
        "Manual tare weight entry leading to clinker and cement billing discrepancies.",
        "Need for multi-site visibility across grinding units and mother clinker plants.",
      ],
      results: [
        "Weighment cycle slashed from 4.2 minutes to 16 seconds per tanker.",
        "Automated SAP S/4HANA weighment ticket posting with zero manual re-entry.",
        "100% elimination of operator tare override fraud.",
      ],
      recommendedKit: "Dual 4MP ANPR + RS-232 Toledo Protocol + Dual Boom Barrier Automation",
    },
    {
      id: "mining",
      name: "Mining & Crushers",
      icon: Mountain,
      subtitle: "Aggregates, Stone Crushers & Quarries",
      overview:
        "High-dust, rough-terrain environments with intense tipper truck movements. Gluvok's ruggedized hardware and adaptive optical OCR withstand thick dust clouds and mud-caked plates while automating gross/tare weighing and royalty pass matching.",
      challenges: [
        "Severe optical dust and vibration disrupting standard vision systems.",
        "Rapid turnaround required for high-frequency tipper truck round-trips.",
        "Pilferage and unauthorized overloaded trucks damaging plant access roads.",
      ],
      results: [
        "Uninterrupted operation in 50°C summer heat and dense stone dust.",
        "Instant gross-tare net calculation with automatic daily transporter tallies.",
        "Overload alarm integration with plant traffic signal relays.",
      ],
      recommendedKit: "IP67 Starlight ANPR + Heavy-Duty DIN Edge Controller + Remote Driver LED Display",
    },
    {
      id: "rmc",
      name: "Ready-Mix Concrete",
      icon: Truck,
      subtitle: "RMC Transit Mixer Logistics",
      overview:
        "Concrete is a perishable cargo with strict slump retention time limits. Inbound aggregate deliveries and outbound transit mixers require zero-delay gate clearance to prevent batch spoiling and maintain delivery schedules.",
      challenges: [
        "Mixers delayed at scales risk setting concrete before site arrival.",
        "Frequent tare fluctuations due to residual drum wash water and build-up.",
        "Disputes between aggregate suppliers on moisture and delivered volume.",
      ],
      results: [
        "Fast-path unattended weighing for registered fleet mixers in under 12 seconds.",
        "Continuous tare history tracking flagging excessive drum residual concrete buildup.",
        "Synchronized batching plant ticket matching with cloud ledger.",
      ],
      recommendedKit: "Single Lane Bi-Directional ANPR + RS-485 Modbus Indicator + Cloud Dispatch Sync",
    },
    {
      id: "steel",
      name: "Steel & Scrap",
      icon: Layers,
      subtitle: "High-Value Material Tracking",
      overview:
        "Heavy melting scrap and finished steel coils represent extreme financial value per ton. Even small weight discrepancies or operator collusion cause immense monthly balance-sheet leakage.",
      challenges: [
        "Scrap adulteration and hollow-weight tampering by rogue transporters.",
        "Axle misplacement fraud where trailers are parked partially off the scale platform.",
        "Lost physical slips creating supplier disputes on delivered scrap grade.",
      ],
      results: [
        "Synchronized overhead cargo photo capturing physical scrap load composition.",
        "Zero-tolerance axle boundary sensors preventing scale edge stepping.",
        "Complete tamper-evident evidence package stored for 7 years in cloud vault.",
      ],
      recommendedKit: "Dual ANPR + Overhead Cargo Bed Camera + SHA-256 Cryptographic Vault",
    },
    {
      id: "ports",
      name: "Ports & Logistics",
      icon: Anchor,
      subtitle: "Intermodal Terminals & Bulk Ports",
      overview:
        "Multi-trailer container chassis and bulk material haulers entering intermodal freight terminals require customs-grade accuracy, container number recognition, and terminal operating system (TOS) data synchronization.",
      challenges: [
        "Multi-axle vehicle complexity and container code tracking.",
        "Strict regulatory weighing and SOLAS gross mass verification compliance.",
        "High gate volume requiring automated biometric or RFID driver validation.",
      ],
      results: [
        "Simultaneous license plate and ISO container code recognition.",
        "Instant VGM (Verified Gross Mass) compliance certificate generation.",
        "Seamless integration with enterprise Terminal Operating Systems (TOS).",
      ],
      recommendedKit: "High-Speed Dual ANPR + Multi-Axle Scale Interfacing + Enterprise API Gateway",
    },
    {
      id: "manufacturing",
      name: "Large Facilities",
      icon: Factory,
      subtitle: "Industrial Parks & Manufacturing",
      overview:
        "Automotive, chemical, FMCG, and heavy engineering facilities with hundreds of raw material and finished goods shipments daily. Replace manual security register books with autonomous gate logistics.",
      challenges: [
        "Security guard manual registers prone to delays, lost slips, and illegible handwriting.",
        "Lack of ERP integration requiring manual paper data entry by dispatch clerks.",
        "Zero audit trail when shipments are disputed by suppliers or transport vendors.",
      ],
      results: [
        "Paperless gate entry and exit with digital weighment receipts sent via WhatsApp.",
        "Automated PO and delivery challan matching against ERP purchase orders.",
        "Executive multi-site visibility across all regional manufacturing plants.",
      ],
      recommendedKit: "Full Turnkey Kit + Automated Boom Barrier + Cloud Multi-Site Fleet Management",
    },
  ];

  return (
    <section id="industries" className="py-20 lg:py-24 border-b border-border/60 bg-secondary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-2">
            <span className="size-2 rounded-xs bg-emerald-400" />
            TARGET INDUSTRIAL SECTORS
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Engineered for high-volume industrial environments
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Each heavy industry vertical faces distinct operational friction. Explore how Gluvok
            adapts its autonomous pipeline to your sector&apos;s specific dispatch and weighing workflows.
          </p>
        </div>

        {/* Shadcn Tabs Component */}
        <Tabs defaultValue="cement" className="space-y-8">
          <TabsList className="bg-card border border-border/70 p-1 flex flex-wrap h-auto gap-1 rounded-xs">
            {verticals.map((v) => {
              const Icon = v.icon;
              return (
                <TabsTrigger
                  key={v.id}
                  value={v.id}
                  className="font-mono text-xs py-2 px-3.5 rounded-xs data-[state=active]:bg-foreground data-[state=active]:text-background transition-colors flex items-center gap-2"
                >
                  <Icon className="size-3.5" />
                  {v.name}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {verticals.map((v) => (
            <TabsContent key={v.id} value={v.id} className="mt-0">
              <div className="rounded-xs border border-border bg-card p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                      SECTOR PROFILE // {v.name}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans mt-0.5">
                      {v.subtitle}
                    </h3>
                  </div>

                  <PilotDialog triggerText={`Pilot for ${v.name}`}>
                    <Button variant="outline" size="sm" className="font-mono text-xs border-border">
                      Schedule Sector Pilot
                      <ArrowRight className="size-3.5" data-icon="inline-end" />
                    </Button>
                  </PilotDialog>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {v.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Pain Points */}
                  <div className="space-y-3 p-4 rounded-xs bg-secondary/30 border border-border/60">
                    <div className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider">
                      OPERATIONAL VULNERABILITIES RESOLVED
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {v.challenges.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="size-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Measurable Results */}
                  <div className="space-y-3 p-4 rounded-xs bg-emerald-950/10 border border-emerald-500/20">
                    <div className="text-xs font-mono font-semibold text-emerald-300 uppercase tracking-wider">
                      MEASURED IMPACT AFTER GLUVOK RETROFIT
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {v.results.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommended Kit */}
                <div className="p-3.5 rounded-xs bg-secondary/50 border border-border text-xs font-mono flex items-center justify-between flex-wrap gap-2">
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">RECOMMENDED HARDWARE KIT:</strong>{" "}
                    {v.recommendedKit}
                  </span>
                  <Badge variant="outline" className="border-border text-[10px]">
                    48H DEPLOYMENT
                  </Badge>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
