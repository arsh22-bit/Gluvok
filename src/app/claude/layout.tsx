import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Design System for React — Copernicus serif, coral #cc785c, 30 components",
  description:
    "Anthropic's Claude design system as a DESIGN.md file. Cream canvas #faf9f5, coral #cc785c, Copernicus serif, 30 components. For React, Next.js, and AI tools.",
};

export default function ClaudeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen bg-[#faf9f5] text-[#141413] antialiased selection:bg-[#cc785c] selection:text-white"
      style={
        {
          "--font-claude-serif":
            '"Copernicus", "Tiempos Headline", "Cormorant Garamond", Garamond, "Times New Roman", serif',
          "--font-claude-sans":
            '"StyreneB", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          "--font-claude-mono":
            '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace',
          backgroundColor: "#faf9f5",
          color: "#141413",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
