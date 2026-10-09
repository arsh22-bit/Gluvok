import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gluvok | Autonomous Weighbridge Automation & Industrial AI",
  description:
    "Turn existing weighbridges into autonomous weighing stations. Seamlessly interfaces with operational scale indicators, synchronizing high-speed ANPR cameras and edge AI.",
  keywords: [
    "weighbridge automation",
    "industrial AI",
    "autonomous weighbridge",
    "ANPR truck weighing",
    "gross tare net automation",
    "RS-232 indicator integration",
    "cement plant dispatch",
    "mining weighbridge software",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#faf9f5] text-[#141413] selection:bg-[#cc785c] selection:text-white font-sans">
        <TooltipProvider delay={100}>{children}</TooltipProvider>
      </body>
    </html>
  );
}
