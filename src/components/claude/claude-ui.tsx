"use client";

import React, { useState } from "react";
import {
  AnthropicSpikeMark,
  ClaudeWordmark,
  AnthropicWordmark,
} from "./anthropic-mark";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Copy,
  ExternalLink,
  Laptop,
  Menu,
  Sparkles,
  Terminal,
  X,
  Database,
  Cpu,
  Globe,
  GitBranch,
} from "lucide-react";

/* -------------------------------------------------------------------------
 * 1. Top Navigation (`top-nav`)
 * ------------------------------------------------------------------------- */
export function ClaudeTopNav({
  onNavigate,
  activeItem = "Overview",
}: {
  onNavigate?: (item: string) => void;
  activeItem?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    "Product",
    "Solutions",
    "Use Cases",
    "Pricing",
    "Research",
    "Company",
  ];

  return (
    <nav className="w-full h-16 bg-[#faf9f5] border-b border-[#e6dfd8] sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-8">
          <a
            href="#hero"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc785c]"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate("hero");
              }
            }}
          >
            <ClaudeWordmark />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate?.(item.toLowerCase())}
                className={`text-[14px] font-medium transition-colors hover:text-[#141413] ${
                  activeItem === item
                    ? "text-[#141413] font-semibold"
                    : "text-[#6c6a64]"
                }`}
                style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right Action Cluster */}
        <div className="hidden md:flex items-center gap-4">
          <ClaudeButtonTextLink onClick={() => onNavigate?.("signin")}>
            Sign in
          </ClaudeButtonTextLink>
          <ClaudeButtonPrimary onClick={() => onNavigate?.("try-claude")}>
            Try Claude
            <ArrowRight className="size-4 ml-1.5" />
          </ClaudeButtonPrimary>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#141413] rounded-md hover:bg-[#efe9de] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Sheet */}
      {mobileOpen && (
        <div className="md:hidden bg-[#faf9f5] border-b border-[#e6dfd8] px-4 pt-3 pb-6 space-y-3 shadow-md animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate?.(item.toLowerCase());
                  setMobileOpen(false);
                }}
                className="text-left py-2 px-3 rounded-md text-[15px] text-[#141413] font-medium hover:bg-[#efe9de]"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-[#e6dfd8] flex flex-col gap-2.5">
            <ClaudeButtonTextLink
              onClick={() => {
                onNavigate?.("signin");
                setMobileOpen(false);
              }}
              className="text-center py-2 text-[14px]"
            >
              Sign in
            </ClaudeButtonTextLink>
            <ClaudeButtonPrimary
              onClick={() => {
                onNavigate?.("try-claude");
                setMobileOpen(false);
              }}
              className="w-full justify-center"
            >
              Try Claude
            </ClaudeButtonPrimary>
          </div>
        </div>
      )}
    </nav>
  );
}

/* -------------------------------------------------------------------------
 * 2. Buttons
 * ------------------------------------------------------------------------- */
export function ClaudeButtonPrimary({
  children,
  onClick,
  className = "",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  if (disabled) {
    return <ClaudeButtonPrimaryDisabled className={className}>{children}</ClaudeButtonPrimaryDisabled>;
  }

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[#cc785c] hover:bg-[#b8674d] active:bg-[#a9583e] text-white font-medium text-[14px] leading-none transition-colors duration-150 shadow-none outline-none focus-visible:ring-2 focus-visible:ring-[#cc785c] focus-visible:ring-offset-2 ${className}`}
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    >
      {children}
    </button>
  );
}

export function ClaudeButtonPrimaryActive({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[#a9583e] text-white font-medium text-[14px] leading-none transition-colors shadow-none cursor-default ${className}`}
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    >
      {children}
    </button>
  );
}

export function ClaudeButtonPrimaryDisabled({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      disabled
      className={`inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[#e6dfd8] text-[#6c6a64] font-medium text-[14px] leading-none cursor-not-allowed opacity-90 ${className}`}
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    >
      {children}
    </button>
  );
}

export function ClaudeButtonSecondary({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] text-[#141413] hover:bg-[#efe9de] active:bg-[#e8e0d2] font-medium text-[14px] leading-none transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#cc785c] ${className}`}
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    >
      {children}
    </button>
  );
}

export function ClaudeButtonSecondaryOnDark({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[#252320] text-[#faf9f5] hover:bg-[#2d2b27] font-medium text-[14px] leading-none transition-colors border border-white/5 outline-none focus-visible:ring-2 focus-visible:ring-[#cc785c] ${className}`}
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    >
      {children}
    </button>
  );
}

export function ClaudeButtonTextLink({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1 bg-transparent text-[#141413] hover:text-[#cc785c] font-medium text-[14px] transition-colors ${className}`}
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    >
      {children}
    </button>
  );
}

export function ClaudeButtonIconCircular({
  children,
  onClick,
  className = "",
  ariaLabel = "Icon button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`size-[36px] inline-flex items-center justify-center rounded-full bg-[#faf9f5] border border-[#e6dfd8] text-[#141413] hover:bg-[#efe9de] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#cc785c] ${className}`}
    >
      {children}
    </button>
  );
}

export function ClaudeTextLink({
  children,
  href = "#",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1 text-[#cc785c] hover:underline active:text-[#a9583e] font-normal text-[16px] transition-colors cursor-pointer ${className}`}
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    >
      {children}
    </a>
  );
}

/* -------------------------------------------------------------------------
 * 3. Hero Band & Illustration Card
 * ------------------------------------------------------------------------- */
export function ClaudeHeroBand({
  title = "Meet your thinking partner.",
  subtitle = "Claude is next-generation AI from Anthropic, engineered for deep reasoning, creative writing, nuanced conversation, and code generation.",
  onPrimaryClick,
  onSecondaryClick,
}: {
  title?: string;
  subtitle?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}) {
  return (
    <section className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <ClaudeBadgeCoral>NEW</ClaudeBadgeCoral>
              <span className="text-[13px] font-medium text-[#6c6a64]">
                Claude 3.7 Sonnet is available now
              </span>
            </div>

            <h1
              className="text-[#141413] text-[44px] sm:text-[54px] lg:text-[64px] font-normal leading-[1.05] tracking-[-1.5px]"
              style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
            >
              {title}
            </h1>

            <p
              className="text-[#3d3d3a] text-[16px] sm:text-[18px] leading-[1.55] max-w-xl"
              style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
            >
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <ClaudeButtonPrimary onClick={onPrimaryClick}>
                Talk to Claude
                <ArrowRight className="size-4 ml-1.5" />
              </ClaudeButtonPrimary>
              <ClaudeButtonSecondary onClick={onSecondaryClick}>
                Explore Claude for Work
              </ClaudeButtonSecondary>
            </div>
          </div>

          {/* Right Column (6 Cols) */}
          <div className="lg:col-span-6">
            <ClaudeHeroIllustrationCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClaudeHeroIllustrationCard() {
  return (
    <div className="relative rounded-[16px] bg-[#faf9f5] border border-[#e6dfd8] p-6 lg:p-8 overflow-hidden shadow-xs">
      {/* Editorial Decorative Canvas Artifact */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#e6dfd8]">
          <div className="flex items-center gap-2">
            <AnthropicSpikeMark size={16} className="text-[#cc785c]" />
            <span className="text-[13px] font-semibold text-[#141413]">
              Reasoning Stream · Claude 3.7
            </span>
          </div>
          <ClaudeBadgePill>Live Demo</ClaudeBadgePill>
        </div>

        {/* User Prompt */}
        <div className="bg-[#efe9de] rounded-[8px] p-4 text-[14px] text-[#141413]">
          <p className="font-medium text-[#252523]">
            &ldquo;Synthesize the architectural trade-offs between zero-copy vector embeddings and memory-mapped IPC.&rdquo;
          </p>
        </div>

        {/* Thought Process & Response Card */}
        <div className="bg-white rounded-[8px] border border-[#e6dfd8] p-5 space-y-3">
          <div className="flex items-center gap-2 text-[12px] text-[#cc785c] font-semibold uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>Thinking (2.1s)</span>
          </div>
          <p className="text-[14px] text-[#3d3d3a] leading-relaxed">
            Zero-copy embeddings eliminate heap allocations during serialization, reducing cross-core cache invalidation. When paired with mmap IPC, page faults become deterministic under heavy I/O workloads...
          </p>
          <div className="pt-2 flex items-center justify-between text-[12px] text-[#8e8b82]">
            <span>1,420 tokens / sec</span>
            <ClaudeTextLink href="#learn-more">
              Inspect Full Thought Trace
            </ClaudeTextLink>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * 4. Feature Card (`feature-card`)
 * ------------------------------------------------------------------------- */
export function ClaudeFeatureCard({
  icon: Icon = Sparkles,
  title = "Deep contextual understanding",
  description = "Claude digests complex books, codebases, and legal filings across a 200,000 token context window with unmatched recall fidelity.",
}: {
  icon?: React.ElementType;
  title?: string;
  description?: string;
}) {
  return (
    <div className="bg-[#efe9de] rounded-[12px] p-8 flex flex-col justify-between transition-colors">
      <div className="space-y-4">
        <div className="size-10 rounded-[8px] bg-[#faf9f5] border border-[#e6dfd8] flex items-center justify-center text-[#cc785c]">
          <Icon className="size-5" />
        </div>
        <h3
          className="text-[#141413] text-[18px] font-medium leading-[1.4]"
          style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
        >
          {title}
        </h3>
        <p
          className="text-[#3d3d3a] text-[16px] font-normal leading-[1.55]"
          style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * 5. Dark Product Mockup & Code Window Cards
 * ------------------------------------------------------------------------- */
export function ClaudeProductMockupCardDark({
  title = "Interactive Artifacts",
  tag = "CLAUDE PRODUCT CHROME",
}: {
  title?: string;
  tag?: string;
}) {
  return (
    <div className="bg-[#181715] rounded-[12px] p-8 text-[#faf9f5] border border-white/5 space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-[12px] font-medium tracking-[1.5px] uppercase text-[#a09d96]">
            {tag}
          </span>
          <h3
            className="text-[#faf9f5] text-[22px] font-medium leading-[1.3]"
            style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
          >
            {title}
          </h3>
        </div>
        <ClaudeButtonSecondaryOnDark>Inspect Surface</ClaudeButtonSecondaryOnDark>
      </div>

      {/* Simulated Product UI Window */}
      <div className="bg-[#1f1e1b] rounded-[8px] border border-white/5 p-5 space-y-4">
        <div className="flex items-center justify-between text-xs text-[#a09d96] pb-2 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#5db872]" />
            <span className="font-mono">artifact://dashboard-layout.tsx</span>
          </div>
          <span className="font-mono">React 19 · TypeScript</span>
        </div>

        <div className="space-y-2 font-mono text-[13px] text-[#faf9f5]/90">
          <div className="text-[#a09d96]">// Generated interactive artifact</div>
          <div>
            <span className="text-[#5db8a6]">export default function</span>{" "}
            <span className="text-[#e8a55a]">TelemetryDashboard</span>() &#123;
          </div>
          <div className="pl-4">
            <span className="text-[#5db8a6]">return</span> (
            <div className="pl-4 text-[#cc785c]">
              &lt;<span className="text-[#e8a55a]">Card</span> className=&quot;editorial-surface&quot;&gt;
            </div>
            <div className="pl-8 text-neutral-300">
              &lt;<span className="text-[#e8a55a]">MetricsStream</span> rate=&#123;98.4&#125; /&gt;
            </div>
            <div className="pl-4 text-[#cc785c]">&lt;/<span className="text-[#e8a55a]">Card</span>&gt;</div>
            );
          </div>
          <div>&#125;</div>
        </div>
      </div>
    </div>
  );
}

export function ClaudeCodeWindowCard({
  filename = "claude-client.ts",
  code = `import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

const message = await anthropic.messages.create({
  model: "claude-3-7-sonnet-20250219",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Explain quantum error correction." }],
});

console.log(message.content[0].text);`,
}: {
  filename?: string;
  code?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split("\n");

  return (
    <div className="bg-[#181715] rounded-[12px] p-6 text-[#faf9f5] border border-white/5 space-y-4">
      {/* Top Bar Chrome */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-[#c64545]" />
            <span className="size-2.5 rounded-full bg-[#d4a017]" />
            <span className="size-2.5 rounded-full bg-[#5db872]" />
          </div>
          <span
            className="text-[13px] text-[#a09d96] font-mono"
            style={{ fontFamily: 'var(--font-claude-mono), "JetBrains Mono", monospace' }}
          >
            {filename}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs text-[#a09d96] hover:text-[#faf9f5] transition-colors font-mono"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-[#5db872]" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Editor Body */}
      <div
        className="bg-[#1f1e1b] rounded-[8px] p-4 overflow-x-auto text-[14px] leading-[1.6]"
        style={{ fontFamily: 'var(--font-claude-mono), "JetBrains Mono", monospace' }}
      >
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02]">
                <td className="pr-4 text-right select-none text-[#8e8b82] text-[12px] w-8 align-top">
                  {idx + 1}
                </td>
                <td className="whitespace-pre text-[#faf9f5]">
                  <SyntaxHighlighter line={line} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between pt-1 text-[12px] text-[#a09d96] font-mono">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[#5db872]" />
          <span>TypeScript 5.8 · Ready</span>
        </div>
        <span>UTF-8 · LF</span>
      </div>
    </div>
  );
}

function SyntaxHighlighter({ line }: { line: string }) {
  if (line.startsWith("import") || line.startsWith("const") || line.startsWith("await")) {
    const parts = line.split(" ");
    return (
      <span>
        <span className="text-[#cc785c]">{parts[0]}</span>{" "}
        {parts.slice(1).map((p, i) => {
          if (p.includes('"')) {
            return (
              <span key={i} className="text-[#5db872]">
                {p}{" "}
              </span>
            );
          }
          if (p.includes("Anthropic")) {
            return (
              <span key={i} className="text-[#e8a55a]">
                {p}{" "}
              </span>
            );
          }
          return p + " ";
        })}
      </span>
    );
  }
  if (line.includes("console.log")) {
    return (
      <span>
        <span className="text-[#5db8a6]">console</span>.
        <span className="text-[#e8a55a]">log</span>
        {line.replace("console.log", "")}
      </span>
    );
  }
  return <span>{line}</span>;
}

/* -------------------------------------------------------------------------
 * 6. Model Comparison Card (`model-comparison-card`)
 * ------------------------------------------------------------------------- */
export function ClaudeModelComparisonCard({
  model = "Claude 3.7 Sonnet",
  tagline = "Hybrid reasoning & coding flagship",
  description = "Anthropic's most intelligent model, combining near-instant responses with extended test-time thinking for complex software engineering and analysis.",
  badge = "MOST POPULAR",
  intelScore = 96,
  speedScore = 88,
  onSelect,
}: {
  model?: string;
  tagline?: string;
  description?: string;
  badge?: string;
  intelScore?: number;
  speedScore?: number;
  onSelect?: () => void;
}) {
  return (
    <div className="bg-[#faf9f5] border border-[#e6dfd8] rounded-[12px] p-8 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <AnthropicSpikeMark size={20} className="text-[#cc785c]" />
          {badge && <ClaudeBadgeCoral>{badge}</ClaudeBadgeCoral>}
        </div>

        <div>
          <h3
            className="text-[#141413] text-[24px] font-normal tracking-[-0.5px]"
            style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
          >
            {model}
          </h3>
          <p className="text-[14px] text-[#6c6a64] font-medium pt-0.5">
            {tagline}
          </p>
        </div>

        <p
          className="text-[#3d3d3a] text-[15px] leading-[1.55]"
          style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
        >
          {description}
        </p>

        {/* Meters */}
        <div className="pt-2 space-y-2.5">
          <div className="space-y-1">
            <div className="flex justify-between text-[12px] font-medium text-[#6c6a64]">
              <span>Intelligence</span>
              <span className="text-[#141413]">{intelScore}%</span>
            </div>
            <div className="h-1.5 w-full bg-[#efe9de] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#cc785c] rounded-full"
                style={{ width: `${intelScore}%` }}
              />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[12px] font-medium text-[#6c6a64]">
              <span>Speed & Latency</span>
              <span className="text-[#141413]">{speedScore}%</span>
            </div>
            <div className="h-1.5 w-full bg-[#efe9de] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#5db8a6] rounded-full"
                style={{ width: `${speedScore}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#e6dfd8] flex items-center justify-between">
        <ClaudeTextLink href="#model-spec">View Benchmark Data</ClaudeTextLink>
        <ClaudeButtonPrimary onClick={onSelect} className="h-9 px-4 text-xs">
          Select Model
        </ClaudeButtonPrimary>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * 7. Pricing Tier Cards (Standard & Featured)
 * ------------------------------------------------------------------------- */
export function ClaudePricingTierCard({
  plan = "Free",
  price = "$0",
  period = "forever",
  description = "Explore Claude with standard limits and essential features.",
  features = [
    "Access to Claude 3.5 Haiku",
    "Standard context length",
    "Web and mobile access",
  ],
  onAction,
}: {
  plan?: string;
  price?: string;
  period?: string;
  description?: string;
  features?: string[];
  onAction?: () => void;
}) {
  return (
    <div className="bg-[#faf9f5] border border-[#e6dfd8] rounded-[12px] p-8 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <div>
          <h4
            className="text-[22px] font-medium text-[#141413]"
            style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
          >
            {plan}
          </h4>
          <p className="text-[14px] text-[#6c6a64] mt-1">{description}</p>
        </div>

        <div className="flex items-baseline gap-1.5 pt-2">
          <span
            className="text-[36px] font-normal text-[#141413] tracking-[-0.3px]"
            style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
          >
            {price}
          </span>
          <span className="text-[14px] text-[#6c6a64]">/ {period}</span>
        </div>

        <ul className="space-y-3 pt-3 border-t border-[#e6dfd8]">
          {features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[15px] text-[#3d3d3a]">
              <Check className="size-4 text-[#cc785c] mt-0.5 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <ClaudeButtonSecondary onClick={onAction} className="w-full justify-center">
        Get Started
      </ClaudeButtonSecondary>
    </div>
  );
}

export function ClaudePricingTierCardFeatured({
  plan = "Pro",
  price = "$20",
  period = "month",
  description = "For engineers and thinkers needing Claude 3.7 Sonnet with extended thinking.",
  features = [
    "Claude 3.7 Sonnet with hybrid reasoning",
    "5x higher usage limits than Free",
    "Priority access during peak traffic",
    "Create and share interactive Artifacts",
  ],
  onAction,
}: {
  plan?: string;
  price?: string;
  period?: string;
  description?: string;
  features?: string[];
  onAction?: () => void;
}) {
  return (
    <div className="bg-[#181715] text-[#faf9f5] rounded-[12px] p-8 flex flex-col justify-between space-y-6 border border-[#cc785c]/30 relative overflow-hidden">
      {/* Featured Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#cc785c]" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4
            className="text-[22px] font-medium text-[#faf9f5]"
            style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
          >
            {plan}
          </h4>
          <ClaudeBadgeCoral>FEATURED</ClaudeBadgeCoral>
        </div>
        <p className="text-[14px] text-[#a09d96]">{description}</p>

        <div className="flex items-baseline gap-1.5 pt-2">
          <span
            className="text-[36px] font-normal text-[#faf9f5] tracking-[-0.3px]"
            style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
          >
            {price}
          </span>
          <span className="text-[14px] text-[#a09d96]">/ {period}</span>
        </div>

        <ul className="space-y-3 pt-3 border-t border-white/10">
          {features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[15px] text-[#faf9f5]/90">
              <Check className="size-4 text-[#cc785c] mt-0.5 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <ClaudeButtonPrimary onClick={onAction} className="w-full justify-center">
        Subscribe to Pro
      </ClaudeButtonPrimary>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * 8. Callout Card Coral (`callout-card-coral`)
 * ------------------------------------------------------------------------- */
export function ClaudeCalloutCardCoral({
  title = "Built for human-scale intellectual inquiry.",
  subtitle = "Experience an AI that asks clarifying questions, adheres to constitutional safety principles, and never pretends to know what it doesn't.",
  ctaText = "Start with Claude Today",
  onCtaClick,
}: {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}) {
  return (
    <div className="w-full bg-[#cc785c] text-white rounded-[12px] p-8 sm:p-12 transition-colors">
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-[12px] tracking-[1.5px] uppercase font-semibold">
          <AnthropicSpikeMark size={14} color="white" />
          <span>Anthropic Research</span>
        </div>

        <h3
          className="text-white text-[28px] sm:text-[36px] font-normal leading-[1.15] tracking-[-0.5px]"
          style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
        >
          {title}
        </h3>

        <p
          className="text-white/90 text-[16px] sm:text-[18px] leading-[1.55] max-w-2xl"
          style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
        >
          {subtitle}
        </p>

        <div className="pt-2">
          {/* Inverted CTA Button: cream canvas button over coral voltage */}
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center h-10 px-6 rounded-[8px] bg-[#faf9f5] hover:bg-[#efe9de] text-[#141413] font-medium text-[14px] leading-none transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
          >
            {ctaText}
            <ArrowRight className="size-4 ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * 9. Connector Tile (`connector-tile`)
 * ------------------------------------------------------------------------- */
export function ClaudeConnectorTile({
  name = "GitHub",
  description = "Index repositories, trigger pull request reviews, and run code analyses.",
  status = "Active",
  icon: Icon = GitBranch,
}: {
  name?: string;
  description?: string;
  status?: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="bg-[#faf9f5] border border-[#e6dfd8] rounded-[12px] p-5 hover:border-[#cc785c]/40 transition-colors cursor-pointer group">
      <div className="flex items-center justify-between pb-3">
        <div className="size-9 rounded-[8px] bg-[#efe9de] flex items-center justify-center text-[#141413]">
          <Icon className="size-5" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#5db8a6]" />
          <span className="text-[12px] font-medium text-[#6c6a64]">{status}</span>
        </div>
      </div>

      <h4
        className="text-[#141413] text-[16px] font-medium group-hover:text-[#cc785c] transition-colors"
        style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
      >
        {name}
      </h4>

      <p className="text-[13px] text-[#6c6a64] leading-relaxed mt-1">
        {description}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * 10. Inputs & Forms
 * ------------------------------------------------------------------------- */
export function ClaudeTextInput({
  value,
  onChange,
  placeholder = "Enter your work email...",
  className = "",
}: {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`h-10 px-3.5 rounded-[8px] bg-[#faf9f5] text-[#141413] border border-[#e6dfd8] placeholder-[#8e8b82] text-[16px] transition-all outline-none focus:border-[#cc785c] focus:ring-[3px] focus:ring-[#cc785c]/15 ${className}`}
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    />
  );
}

export function ClaudeTextInputFocused({
  defaultValue = "research@anthropic.com",
}: {
  defaultValue?: string;
}) {
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      className="h-10 px-3.5 rounded-[8px] bg-[#faf9f5] text-[#141413] border border-[#cc785c] ring-[3px] ring-[#cc785c]/15 text-[16px] outline-none"
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    />
  );
}

export function ClaudeCookieConsentCard({
  onAccept,
  onDecline,
}: {
  onAccept?: () => void;
  onDecline?: () => void;
}) {
  return (
    <div className="bg-[#181715] text-[#faf9f5] rounded-[12px] p-6 max-w-sm border border-white/10 shadow-lg space-y-4">
      <div className="flex items-center gap-2">
        <AnthropicSpikeMark size={16} className="text-[#cc785c]" />
        <span className="text-[14px] font-semibold">Privacy & Cookies</span>
      </div>
      <p className="text-[14px] text-[#a09d96] leading-relaxed">
        Anthropic uses cookies to deliver, improve, and secure our services. You can manage preferences at any time.
      </p>
      <div className="flex items-center gap-3 pt-1">
        <ClaudeButtonPrimary onClick={onAccept} className="h-9 px-4 text-xs">
          Accept All
        </ClaudeButtonPrimary>
        <button
          onClick={onDecline}
          className="text-[13px] text-[#a09d96] hover:text-[#faf9f5] transition-colors"
        >
          Manage Choices
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * 11. Tags, Badges & Tabs
 * ------------------------------------------------------------------------- */
export function ClaudeBadgePill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full bg-[#efe9de] text-[#141413] text-[13px] font-medium leading-none ${className}`}
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    >
      {children}
    </span>
  );
}

export function ClaudeBadgeCoral({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full bg-[#cc785c] text-white text-[12px] font-semibold tracking-[1.5px] uppercase leading-none ${className}`}
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    >
      {children}
    </span>
  );
}

export function ClaudeCategoryTab({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-2 rounded-[8px] text-[14px] font-medium transition-colors ${
        active
          ? "bg-[#efe9de] text-[#141413]"
          : "bg-transparent text-[#6c6a64] hover:text-[#141413]"
      }`}
      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
    >
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------------
 * 12. CTA Bands (Coral & Dark)
 * ------------------------------------------------------------------------- */
export function ClaudeCtaBandCoral({
  title = "Start collaborating with Claude today.",
  subtitle = "Join millions of developers, researchers, and creators using Anthropic's most thoughtful AI.",
  onAction,
}: {
  title?: string;
  subtitle?: string;
  onAction?: () => void;
}) {
  return (
    <section className="w-full bg-[#faf9f5] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#cc785c] text-white rounded-[12px] p-12 lg:p-16 text-center space-y-6">
          <h2
            className="text-[28px] sm:text-[36px] font-normal leading-tight tracking-[-0.3px]"
            style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
          >
            {title}
          </h2>
          <p
            className="text-white/90 text-[16px] sm:text-[18px] max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
          >
            {subtitle}
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={onAction}
              className="h-10 px-6 rounded-[8px] bg-[#faf9f5] hover:bg-[#efe9de] text-[#141413] font-medium text-[14px] leading-none transition-colors shadow-sm"
              style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
            >
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClaudeCtaBandDark({
  title = "Ready to build with Claude API?",
  subtitle = "Instant access to Claude 3.7 Sonnet, Computer Use endpoints, and prompt evaluation tooling.",
  onAction,
}: {
  title?: string;
  subtitle?: string;
  onAction?: () => void;
}) {
  return (
    <section className="w-full bg-[#181715] text-[#faf9f5] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[12px] p-12 lg:p-16 border border-white/5 bg-[#1f1e1b] text-center space-y-6">
          <h2
            className="text-[28px] sm:text-[36px] font-normal leading-tight text-[#faf9f5] tracking-[-0.3px]"
            style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
          >
            {title}
          </h2>
          <p
            className="text-[#a09d96] text-[16px] sm:text-[18px] max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
          >
            {subtitle}
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <ClaudeButtonPrimary onClick={onAction}>
              Generate API Key
              <ArrowRight className="size-4 ml-1.5" />
            </ClaudeButtonPrimary>
            <ClaudeButtonSecondaryOnDark onClick={onAction}>
              View API Documentation
            </ClaudeButtonSecondaryOnDark>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 13. Footer (`footer`)
 * ------------------------------------------------------------------------- */
export function ClaudeFooter() {
  const columns = [
    {
      title: "Product",
      links: ["Claude", "Claude for Work", "Claude Code", "Pricing", "API & Console"],
    },
    {
      title: "Models",
      links: ["Claude 3.7 Sonnet", "Claude 3.5 Sonnet", "Claude 3.5 Haiku", "Model Benchmarks"],
    },
    {
      title: "Research",
      links: ["Constitutional AI", "Interpretability", "Frontier Safety", "Alignment Science"],
    },
    {
      title: "Company",
      links: ["About Anthropic", "Careers", "Press & News", "Terms & Privacy"],
    },
  ];

  return (
    <footer className="w-full bg-[#181715] text-[#a09d96] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Branding Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <AnthropicWordmark theme="dark" />
          <p className="text-[14px] text-[#a09d96]">
            AI research and products that put human values at the center.
          </p>
        </div>

        {/* 4 Columns Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map((col, idx) => (
            <div key={idx} className="space-y-3">
              <h5 className="text-[13px] font-semibold uppercase tracking-wider text-[#faf9f5]">
                {col.title}
              </h5>
              <ul className="space-y-2 text-[14px]">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href="#"
                      className="hover:text-[#faf9f5] transition-colors"
                      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Legal Notice */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[13px] text-[#8e8b82] gap-4">
          <p>&copy; 2026 Anthropic PBC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#a09d96]">Security</a>
            <a href="#" className="hover:text-[#a09d96]">Privacy Policy</a>
            <a href="#" className="hover:text-[#a09d96]">Responsible Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
