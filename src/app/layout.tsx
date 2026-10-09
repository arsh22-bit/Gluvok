import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gluvok | Autonomous Weighbridge Automation & Industrial AI",
  description:
    "Industrial edge AI platform for autonomous weighbridge operations. Connect weighing indicators, ANPR cameras, and edge computing for unattended weighment, tamper prevention, and multi-site visibility without scale replacement.",
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
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TooltipProvider delay={100}>{children}</TooltipProvider>
      </body>
    </html>
  );
}
