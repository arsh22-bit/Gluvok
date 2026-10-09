"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ClaudeTopNav,
  ClaudeButtonPrimary,
  ClaudeButtonPrimaryActive,
  ClaudeButtonPrimaryDisabled,
  ClaudeButtonSecondary,
  ClaudeButtonSecondaryOnDark,
  ClaudeButtonTextLink,
  ClaudeButtonIconCircular,
  ClaudeTextLink,
  ClaudeHeroBand,
  ClaudeHeroIllustrationCard,
  ClaudeFeatureCard,
  ClaudeProductMockupCardDark,
  ClaudeCodeWindowCard,
  ClaudeModelComparisonCard,
  ClaudePricingTierCard,
  ClaudePricingTierCardFeatured,
  ClaudeCalloutCardCoral,
  ClaudeConnectorTile,
  ClaudeTextInput,
  ClaudeTextInputFocused,
  ClaudeCookieConsentCard,
  ClaudeCategoryTab,
  ClaudeBadgePill,
  ClaudeBadgeCoral,
  ClaudeCtaBandCoral,
  ClaudeCtaBandDark,
  ClaudeFooter,
} from "@/components/claude/claude-ui";
import {
  AnthropicSpikeMark,
  ClaudeWordmark,
  AnthropicWordmark,
} from "@/components/claude/anthropic-mark";
import {
  claudeColors,
  claudeTypography,
  claudeRadii,
  claudeSpacing,
  claudeComponentsRegistry,
} from "@/components/claude/claude-tokens";
import {
  Layers,
  BookOpen,
  Palette,
  FileCode,
  ArrowRight,
  Check,
  Copy,
  ChevronRight,
  ExternalLink,
  Search,
  Sparkles,
  Database,
  Cpu,
  Globe,
  GitBranch,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";

type ViewTab = "editorial" | "catalog" | "tokens" | "spec";

export default function ClaudeDesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState<ViewTab>("editorial");
  const [showCookie, setShowCookie] = useState(true);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [catalogCategory, setCatalogCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>("all");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedToken(id);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const categories = [
    "All",
    "Navigation",
    "Buttons",
    "Cards & Containers",
    "Inputs",
    "Badges & Tabs",
    "Callout & Footer",
    "Branding",
  ];

  const filteredComponents = claudeComponentsRegistry.filter((comp) => {
    const matchesCat = catalogCategory === "All" || comp.category === catalogCategory;
    const matchesSearch =
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#141413] flex flex-col font-sans">
      {/* =========================================================================
       * System Meta Header & Mode Switcher Bar
       * ========================================================================= */}
      <header className="w-full bg-[#181715] text-[#faf9f5] border-b border-white/10 px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2.5">
              <AnthropicSpikeMark size={18} className="text-[#cc785c]" />
              <span className="font-serif text-lg text-[#faf9f5] font-normal tracking-[-0.3px]">
                Claude DESIGN.md
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase bg-[#252320] text-[#cc785c] border border-[#cc785c]/30">
                Specification v1.0
              </span>
            </div>

            <Link
              href="/"
              className="md:hidden text-xs text-[#a09d96] hover:text-[#faf9f5] inline-flex items-center gap-1 font-mono"
            >
              Back to Gluvok &rarr;
            </Link>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#252320] p-1 rounded-[8px] border border-white/5 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab("editorial")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-medium transition-all ${
                activeTab === "editorial"
                  ? "bg-[#cc785c] text-white shadow-xs"
                  : "text-[#a09d96] hover:text-[#faf9f5]"
              }`}
            >
              <Layers className="size-3.5" />
              <span>Editorial Page</span>
            </button>
            <button
              onClick={() => setActiveTab("catalog")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-medium transition-all ${
                activeTab === "catalog"
                  ? "bg-[#cc785c] text-white shadow-xs"
                  : "text-[#a09d96] hover:text-[#faf9f5]"
              }`}
            >
              <BookOpen className="size-3.5" />
              <span>30 Components</span>
            </button>
            <button
              onClick={() => setActiveTab("tokens")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-medium transition-all ${
                activeTab === "tokens"
                  ? "bg-[#cc785c] text-white shadow-xs"
                  : "text-[#a09d96] hover:text-[#faf9f5]"
              }`}
            >
              <Palette className="size-3.5" />
              <span>Tokens & Colors</span>
            </button>
            <button
              onClick={() => setActiveTab("spec")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-medium transition-all ${
                activeTab === "spec"
                  ? "bg-[#cc785c] text-white shadow-xs"
                  : "text-[#a09d96] hover:text-[#faf9f5]"
              }`}
            >
              <FileCode className="size-3.5" />
              <span>DESIGN.md Spec</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/"
              className="text-xs text-[#a09d96] hover:text-[#faf9f5] inline-flex items-center gap-1 transition-colors font-mono"
            >
              &larr; Return to Gluvok Platform
            </Link>
          </div>
        </div>
      </header>

      {/* =========================================================================
       * VIEW 1: Full Editorial Page Experience
       * ========================================================================= */}
      {activeTab === "editorial" && (
        <main className="flex-1 flex flex-col">
          {/* Top Nav */}
          <ClaudeTopNav
            activeItem="Product"
            onNavigate={(item) => {
              if (item === "try-claude" || item === "signin") {
                alert(`Triggered action: ${item}`);
              }
            }}
          />

          {/* Hero Band */}
          <ClaudeHeroBand
            title="Meet your thinking partner."
            subtitle="Claude is Anthropic's next-generation AI, built on constitutional principles for nuanced reasoning, rigorous analysis, code synthesis, and long-form prose."
            onPrimaryClick={() => alert("Launching Claude Conversation...")}
            onSecondaryClick={() => alert("Opening Enterprise Solutions...")}
          />

          {/* Feature Grid Band (3-Up Cream Cards #efe9de) */}
          <section className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="max-w-2xl space-y-3">
                <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#cc785c]">
                  CAPABILITIES AT SCALE
                </span>
                <h2
                  className="text-[#141413] text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
                  style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
                >
                  Thoughtful by design.
                </h2>
                <p className="text-[#3d3d3a] text-[16px] leading-[1.55]">
                  Claude avoids false certainty, reasons through complex multi-step problems with transparent chains of thought, and keeps human agency in control.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ClaudeFeatureCard
                  icon={Sparkles}
                  title="200k Token Context Window"
                  description="Process entire technical codebases, thousands of pages of legal documentation, or semester-long financial filings in a single context window with near-perfect needle retrieval."
                />
                <ClaudeFeatureCard
                  icon={Cpu}
                  title="Hybrid Test-Time Thinking"
                  description="Claude dynamically modulates reasoning depth: instantly responding to straightforward queries while executing deep internal reasoning paths on complex proofs."
                />
                <ClaudeFeatureCard
                  icon={Database}
                  title="Constitutional Safety Core"
                  description="Trained using Constitutional AI principles to remain helpful, harmless, and honest without refusing benign requests or adopting political biases."
                />
              </div>
            </div>
          </section>

          {/* Dark Surface Band: Product Mockup & Code Window Card */}
          <section className="w-full bg-[#181715] text-[#faf9f5] py-20 lg:py-24 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="max-w-2xl space-y-3">
                <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#a09d96]">
                  DEVELOPER EXPERIENCE
                </span>
                <h2
                  className="text-[#faf9f5] text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
                  style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
                >
                  Code alongside a frontier mind.
                </h2>
                <p className="text-[#a09d96] text-[16px] leading-[1.55]">
                  From zero-shot bug isolation to full-stack application refactoring, Claude runs product chrome directly in dark surfaces for maximum developer ergonomics.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <ClaudeCodeWindowCard
                    filename="src/engine/agentic-loop.ts"
                    code={`import { Anthropic } from "@anthropic-ai/sdk";

const client = new Anthropic();

// Initialize autonomous agentic loop with tool calls
export async function executeAgentStep(prompt: string) {
  const response = await client.messages.create({
    model: "claude-3-7-sonnet-20250219",
    max_tokens: 4096,
    thinking: { type: "enabled", budget_tokens: 2048 },
    messages: [{ role: "user", content: prompt }],
  });

  return response.content;
}`}
                  />
                </div>
                <div className="lg:col-span-5">
                  <ClaudeProductMockupCardDark
                    title="Real-time Artifacts"
                    tag="PRODUCT CHROMIUM"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Model Family Showcase Band (Cream Floor with Hairline Borders) */}
          <section className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-xl space-y-2">
                  <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#cc785c]">
                    THE MODEL SPECTRUM
                  </span>
                  <h2
                    className="text-[#141413] text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
                    style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
                  >
                    Engineered for every tier of ambition.
                  </h2>
                </div>
                <ClaudeTextLink href="#benchmarks">
                  Compare Full Technical Benchmarks &rarr;
                </ClaudeTextLink>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ClaudeModelComparisonCard
                  model="Claude 3.5 Haiku"
                  tagline="Sub-second speed & ultra-lightweight latency"
                  description="Blazing fast execution for user-facing chat streaming, classification filters, and lightweight tool routing at unprecedented efficiency."
                  badge="FASTEST"
                  intelScore={82}
                  speedScore={99}
                  onSelect={() => alert("Selected Claude 3.5 Haiku")}
                />
                <ClaudeModelComparisonCard
                  model="Claude 3.7 Sonnet"
                  tagline="Hybrid reasoning & coding flagship"
                  description="Anthropic's premier workhorse. Dynamically allocates test-time thinking compute for complex full-stack coding, math proofs, and nuanced analysis."
                  badge="RECOMMENDED"
                  intelScore={98}
                  speedScore={88}
                  onSelect={() => alert("Selected Claude 3.7 Sonnet")}
                />
                <ClaudeModelComparisonCard
                  model="Claude 3 Opus"
                  tagline="Maximum depth for heavy synthesis"
                  description="Unrivaled fluency and deep thematic comprehension for creative prose, philosophical reasoning, and high-stakes executive distillation."
                  badge="DEEPEST PROSE"
                  intelScore={94}
                  speedScore={72}
                  onSelect={() => alert("Selected Claude 3 Opus")}
                />
              </div>
            </div>
          </section>

          {/* Connectors & Integrations Grid */}
          <section className="w-full bg-[#faf9f5] py-20 border-b border-[#e6dfd8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3
                    className="text-[#141413] text-[28px] font-normal tracking-[-0.3px]"
                    style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
                  >
                    Ecosystem Connectors
                  </h3>
                  <p className="text-[14px] text-[#6c6a64] mt-1">
                    Connect Claude with your existing developer infrastructure and enterprise datastores.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <ClaudeCategoryTab
                    active={activeCategoryTab === "all"}
                    onClick={() => setActiveCategoryTab("all")}
                  >
                    All Tools
                  </ClaudeCategoryTab>
                  <ClaudeCategoryTab
                    active={activeCategoryTab === "dev"}
                    onClick={() => setActiveCategoryTab("dev")}
                  >
                    Developer
                  </ClaudeCategoryTab>
                  <ClaudeCategoryTab
                    active={activeCategoryTab === "cloud"}
                    onClick={() => setActiveCategoryTab("cloud")}
                  >
                    Cloud & API
                  </ClaudeCategoryTab>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <ClaudeConnectorTile
                  name="GitHub Enterprise"
                  description="Direct repo synchronization, semantic code search, and autonomous pull request reviews."
                  status="Connected"
                  icon={GitBranch}
                />
                <ClaudeConnectorTile
                  name="Amazon Bedrock"
                  description="Serverless Claude deployment in your VPC with IAM access policies and compliance."
                  status="Active"
                  icon={Cpu}
                />
                <ClaudeConnectorTile
                  name="Google Cloud Vertex"
                  description="Enterprise AI platform integration with BigQuery and Google Workspace pipelines."
                  status="Active"
                  icon={Globe}
                />
                <ClaudeConnectorTile
                  name="PostgreSQL & Vector"
                  description="Direct pgvector semantic embeddings search and autonomous SQL query verification."
                  status="Active"
                  icon={Database}
                />
              </div>
            </div>
          </section>

          {/* Pricing Tiers Band (Featured Tier on Dark Surface #181715) */}
          <section className="w-full bg-[#faf9f5] py-20 lg:py-24 border-b border-[#e6dfd8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-xl mx-auto space-y-3">
                <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#cc785c]">
                  TRANSPARENT PRICING
                </span>
                <h2
                  className="text-[#141413] text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1px]"
                  style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
                >
                  Predictable, generous plans.
                </h2>
                <p className="text-[#3d3d3a] text-[16px] leading-[1.55]">
                  Start for free, upgrade when you need extended test-time thinking and priority burst capacity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
                <ClaudePricingTierCard
                  plan="Free"
                  price="$0"
                  period="forever"
                  description="For individual exploration and daily conversational assistance."
                  features={[
                    "Access to Claude 3.5 Haiku",
                    "Standard context window",
                    "Web, macOS and mobile apps",
                    "Community support",
                  ]}
                  onAction={() => alert("Selected Free Plan")}
                />
                <ClaudePricingTierCardFeatured
                  plan="Pro"
                  price="$20"
                  period="month"
                  description="For engineers, writers, and power users who need peak cognitive horsepower."
                  features={[
                    "Claude 3.7 Sonnet with extended thinking",
                    "5x higher usage limits vs Free",
                    "Early access to new research releases",
                    "Interactive Artifacts and code sandboxes",
                    "Priority compute during peak hours",
                  ]}
                  onAction={() => alert("Selected Pro Plan")}
                />
                <ClaudePricingTierCard
                  plan="Team"
                  price="$25"
                  period="user / month"
                  description="For organizations scaling autonomous intelligence across multiple domains."
                  features={[
                    "Everything in Pro tier",
                    "Centralized billing & seat management",
                    "Shared projects & system prompts",
                    "Higher rate limits and API access",
                    "SOC 2 Type II compliance controls",
                  ]}
                  onAction={() => alert("Selected Team Plan")}
                />
              </div>
            </div>
          </section>

          {/* Full-Bleed Coral Callout Card */}
          <section className="w-full bg-[#faf9f5] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ClaudeCalloutCardCoral
                title="Built for human-scale intellectual inquiry."
                subtitle="Experience an AI that asks clarifying questions, adheres to constitutional safety principles, and never pretends to know what it doesn't."
                ctaText="Start Chatting with Claude"
                onCtaClick={() => alert("Opening Claude...")}
              />
            </div>
          </section>

          {/* Dark Pre-Footer API CTA Band */}
          <ClaudeCtaBandDark
            title="Build next-generation applications with the Claude API."
            subtitle="Access Claude 3.7 Sonnet with extended thinking, Computer Use endpoints, and prompt optimization SDKs."
            onAction={() => alert("Redirecting to Anthropic Console...")}
          />

          {/* Navy Dark Footer */}
          <ClaudeFooter />

          {/* Floating Cookie Consent Banner */}
          {showCookie && (
            <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <ClaudeCookieConsentCard
                onAccept={() => setShowCookie(false)}
                onDecline={() => setShowCookie(false)}
              />
            </div>
          )}
        </main>
      )}

      {/* =========================================================================
       * VIEW 2: 30 Components Catalog
       * ========================================================================= */}
      {activeTab === "catalog" && (
        <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <ClaudeBadgeCoral>SPECIFICATION AUDIT</ClaudeBadgeCoral>
              <span className="text-xs font-mono text-[#6c6a64]">
                30 / 30 COMPONENTS IMPLEMENTED
              </span>
            </div>
            <h1
              className="text-[40px] sm:text-[48px] font-normal leading-tight tracking-[-1px]"
              style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
            >
              Components Catalog
            </h1>
            <p className="text-[#3d3d3a] text-lg max-w-3xl leading-relaxed">
              Every component defined in <code className="px-1.5 py-0.5 rounded bg-[#efe9de] text-[#141413] font-mono text-sm">DESIGN.md</code>, built with quoted tokens, authentic typography hierarchy, and editorial padding.
            </p>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-between">
              <div className="flex items-center gap-1.5 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCatalogCategory(cat)}
                    className={`px-3 py-1.5 rounded-[8px] text-xs font-medium transition-colors ${
                      catalogCategory === cat
                        ? "bg-[#cc785c] text-white"
                        : "bg-[#efe9de] text-[#141413] hover:bg-[#e8e0d2]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="size-4 text-[#8e8b82] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-9 pl-9 pr-3 rounded-[8px] bg-white border border-[#e6dfd8] text-xs text-[#141413] placeholder-[#8e8b82] outline-none focus:border-[#cc785c]"
                />
              </div>
            </div>
          </div>

          {/* Component Showcase Cards */}
          <div className="space-y-8">
            {filteredComponents.map((comp) => (
              <div
                key={comp.key}
                id={comp.key}
                className="bg-white rounded-[12px] border border-[#e6dfd8] overflow-hidden shadow-xs space-y-0"
              >
                {/* Header */}
                <div className="bg-[#faf9f5] border-b border-[#e6dfd8] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#efe9de] text-[#cc785c] font-semibold">
                      {comp.key}
                    </span>
                    <h3
                      className="text-lg font-medium text-[#141413]"
                      style={{ fontFamily: 'var(--font-claude-sans), "StyreneB", Inter, sans-serif' }}
                    >
                      {comp.name}
                    </h3>
                  </div>
                  <ClaudeBadgePill>{comp.category}</ClaudeBadgePill>
                </div>

                {/* Body: Live Preview & Token Specs */}
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#e6dfd8]">
                  {/* Live Component Render Area */}
                  <div className="lg:col-span-8 p-6 sm:p-8 flex items-center justify-center min-h-[160px] bg-[#faf9f5]/50">
                    <div className="w-full flex justify-center">
                      <ComponentDemoRenderer compKey={comp.key} />
                    </div>
                  </div>

                  {/* Token Specs & Details */}
                  <div className="lg:col-span-4 p-6 bg-[#faf9f5] space-y-4 text-xs font-mono">
                    <div>
                      <span className="text-[#8e8b82] uppercase text-[10px] tracking-wider block mb-1">
                        Description
                      </span>
                      <p className="font-sans text-[13px] text-[#3d3d3a] leading-relaxed">
                        {comp.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-[#e6dfd8]">
                      <span className="text-[#8e8b82] uppercase text-[10px] tracking-wider block mb-1">
                        Token Specs
                      </span>
                      {Object.entries(comp.specs).map(([specKey, specVal]) => (
                        <div
                          key={specKey}
                          className="flex items-center justify-between py-0.5 text-[#252523]"
                        >
                          <span className="text-[#6c6a64]">{specKey}:</span>
                          <span className="text-[#cc785c] font-semibold">
                            {specVal}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() =>
                          copyToClipboard(
                            `<${toPascalCase(comp.key)} />`,
                            comp.key
                          )
                        }
                        className="w-full inline-flex items-center justify-center gap-1.5 h-8 rounded-[6px] bg-[#efe9de] hover:bg-[#e8e0d2] text-[#141413] font-medium text-xs transition-colors"
                      >
                        {copiedToken === comp.key ? (
                          <>
                            <Check className="size-3.5 text-[#5db872]" />
                            <span>Copied React Tag</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3.5" />
                            <span>Copy React Usage</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
       * VIEW 3: Tokens & Colors (24 Colors, Typography, Radii, Spacing)
       * ========================================================================= */}
      {activeTab === "tokens" && (
        <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <div className="space-y-3">
            <ClaudeBadgeCoral>FOUNDATIONS & TOKENS</ClaudeBadgeCoral>
            <h1
              className="text-[40px] sm:text-[48px] font-normal leading-tight tracking-[-1px]"
              style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
            >
              The Claude Design Tokens
            </h1>
            <p className="text-[#3d3d3a] text-lg max-w-3xl leading-relaxed">
              24 strict color tokens, Copernicus slab-serif and StyreneB humanist type ladders, 7 corner radii, and 9 spacing tokens. Click any swatch to copy its hex token.
            </p>
          </div>

          {/* Color Palettes */}
          <section className="space-y-6">
            <h2
              className="text-[28px] font-normal text-[#141413]"
              style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
            >
              24 Color Tokens
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.entries(claudeColors).map(([name, hex]) => (
                <div
                  key={name}
                  onClick={() => copyToClipboard(hex, name)}
                  className="bg-white rounded-[10px] border border-[#e6dfd8] p-3 flex items-center gap-3 cursor-pointer hover:border-[#cc785c] transition-all group"
                >
                  <div
                    className="size-12 rounded-[8px] border border-black/10 shrink-0 shadow-2xs"
                    style={{ backgroundColor: hex }}
                  />
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <div className="text-[13px] font-medium text-[#141413] truncate group-hover:text-[#cc785c]">
                      {name}
                    </div>
                    <div className="text-[12px] font-mono text-[#8e8b82]">
                      {hex}
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-[#cc785c] opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedToken === name ? "Copied!" : "Copy"}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography Scale */}
          <section className="space-y-6 pt-6 border-t border-[#e6dfd8]">
            <h2
              className="text-[28px] font-normal text-[#141413]"
              style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
            >
              Typography Hierarchy
            </h2>
            <div className="bg-white rounded-[12px] border border-[#e6dfd8] overflow-hidden divide-y divide-[#e6dfd8]">
              {Object.entries(claudeTypography).map(([token, spec]) => (
                <div
                  key={token}
                  className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1 md:w-1/3">
                    <span className="font-mono text-xs text-[#cc785c] font-semibold">
                      {`{typography.${token}}`}
                    </span>
                    <div className="text-xs text-[#8e8b82] font-mono">
                      {spec.fontSize} · W{spec.fontWeight} · LH {spec.lineHeight} · Track {spec.letterSpacing}
                    </div>
                    <div className="text-xs text-[#6c6a64] font-sans">
                      {spec.use}
                    </div>
                  </div>

                  <div className="md:w-2/3 overflow-x-auto">
                    <div
                      style={{
                        fontFamily: spec.fontFamily,
                        fontSize: spec.fontSize,
                        fontWeight: spec.fontWeight,
                        lineHeight: spec.lineHeight,
                        letterSpacing: spec.letterSpacing,
                      }}
                      className="text-[#141413] truncate py-1"
                    >
                      {token.includes("display")
                        ? "Deep Constitutional Intelligence"
                        : token === "code"
                        ? "anthropic.messages.create({ ... })"
                        : "Nuanced, grounded analysis for human partners."}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Radii and Spacing */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#e6dfd8]">
            <div className="space-y-4">
              <h2
                className="text-[24px] font-normal text-[#141413]"
                style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
              >
                Corner Radius Ladder
              </h2>
              <div className="bg-white rounded-[12px] border border-[#e6dfd8] p-5 space-y-3 font-mono text-xs">
                {Object.entries(claudeRadii).map(([k, val]) => (
                  <div key={k} className="flex items-center justify-between">
                    <span className="text-[#6c6a64]">{`{rounded.${k}}`}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#141413] font-semibold">{val}</span>
                      <div
                        className="size-6 bg-[#efe9de] border border-[#cc785c]"
                        style={{ borderRadius: val }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2
                className="text-[24px] font-normal text-[#141413]"
                style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
              >
                Spacing Rhythm
              </h2>
              <div className="bg-white rounded-[12px] border border-[#e6dfd8] p-5 space-y-3 font-mono text-xs">
                {Object.entries(claudeSpacing).map(([k, val]) => (
                  <div key={k} className="flex items-center justify-between">
                    <span className="text-[#6c6a64]">{`{spacing.${k}}`}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#141413] font-semibold">{val}</span>
                      <div
                        className="h-3 bg-[#cc785c] rounded-xs"
                        style={{ width: val === "96px" ? "72px" : val }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================================
       * VIEW 4: Full DESIGN.md Specification Viewer
       * ========================================================================= */}
      {activeTab === "spec" && (
        <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1
                className="text-[32px] font-normal text-[#141413]"
                style={{ fontFamily: 'var(--font-claude-serif), "Copernicus", "Tiempos Headline", "Cormorant Garamond", serif' }}
              >
                DESIGN.md File Specification
              </h1>
              <p className="text-sm text-[#6c6a64]">
                Direct mirror of the root <code className="text-[#cc785c] font-mono">/DESIGN.md</code> specification in this repository.
              </p>
            </div>
            <button
              onClick={() => {
                // Copy notice
                copyToClipboard(
                  `# Claude DESIGN.md is stored at /DESIGN.md in this project`,
                  "file"
                );
              }}
              className="inline-flex items-center gap-2 h-9 px-4 rounded-[8px] bg-[#cc785c] text-white text-xs font-medium"
            >
              <Copy className="size-3.5" />
              <span>Copy Specification</span>
            </button>
          </div>

          <div className="bg-[#181715] text-[#faf9f5] rounded-[12px] p-6 font-mono text-xs leading-relaxed overflow-x-auto border border-white/10 max-h-[700px] overflow-y-auto">
            <pre className="whitespace-pre">
{`# Claude Design System Specification (DESIGN.md)

colors:
  primary: "#cc785c"
  primary-active: "#a9583e"
  primary-disabled: "#e6dfd8"
  ink: "#141413"
  body: "#3d3d3a"
  body-strong: "#252523"
  muted: "#6c6a64"
  muted-soft: "#8e8b82"
  hairline: "#e6dfd8"
  hairline-soft: "#ebe6df"
  canvas: "#faf9f5"
  surface-soft: "#f5f0e8"
  surface-card: "#efe9de"
  surface-cream-strong: "#e8e0d2"
  surface-dark: "#181715"
  surface-dark-elevated: "#252320"
  surface-dark-soft: "#1f1e1b"
  on-primary: "#ffffff"
  on-dark: "#faf9f5"
  on-dark-soft: "#a09d96"

typography:
  display-xl: Copernicus 64px 400 LH 1.05 Track -1.5px
  display-lg: Copernicus 48px 400 LH 1.10 Track -1.0px
  display-md: Copernicus 36px 400 LH 1.15 Track -0.5px
  display-sm: Copernicus 28px 400 LH 1.20 Track -0.3px
  title-lg:   StyreneB   22px 500 LH 1.30 Track 0
  body-md:    StyreneB   16px 400 LH 1.55 Track 0
  code:       JetBrains  14px 400 LH 1.60 Track 0

rounded:
  xs: 4px | sm: 6px | md: 8px | lg: 12px | xl: 16px | pill: 9999px

spacing:
  section: 96px | card-padding: 32px | base: 4px

surface-modes:
  1. Cream canvas #faf9f5
  2. Cream feature cards #efe9de
  3. Dark navy product mockups #181715
  4. Full-bleed coral callout cards #cc785c`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

function toPascalCase(str: string): string {
  return "Claude" + str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function ComponentDemoRenderer({ compKey }: { compKey: string }) {
  switch (compKey) {
    case "top-nav":
      return (
        <div className="w-full max-w-2xl shadow-xs border border-[#e6dfd8] rounded-[8px] overflow-hidden">
          <ClaudeTopNav />
        </div>
      );
    case "button-primary":
      return <ClaudeButtonPrimary>Try Claude</ClaudeButtonPrimary>;
    case "button-primary-active":
      return <ClaudeButtonPrimaryActive>Active State</ClaudeButtonPrimaryActive>;
    case "button-primary-disabled":
      return <ClaudeButtonPrimaryDisabled>Disabled State</ClaudeButtonPrimaryDisabled>;
    case "button-secondary":
      return <ClaudeButtonSecondary>Secondary Button</ClaudeButtonSecondary>;
    case "button-secondary-on-dark":
      return (
        <div className="p-4 bg-[#181715] rounded-[8px]">
          <ClaudeButtonSecondaryOnDark>Secondary on Dark</ClaudeButtonSecondaryOnDark>
        </div>
      );
    case "button-text-link":
      return <ClaudeButtonTextLink>Sign in &rarr;</ClaudeButtonTextLink>;
    case "button-icon-circular":
      return (
        <ClaudeButtonIconCircular>
          <ArrowRight className="size-4" />
        </ClaudeButtonIconCircular>
      );
    case "text-link":
      return <ClaudeTextLink href="#demo">Read research paper &rarr;</ClaudeTextLink>;
    case "hero-band":
      return (
        <div className="w-full max-w-2xl scale-90 border border-[#e6dfd8] rounded-[12px] overflow-hidden">
          <ClaudeHeroBand />
        </div>
      );
    case "hero-illustration-card":
      return (
        <div className="w-full max-w-md">
          <ClaudeHeroIllustrationCard />
        </div>
      );
    case "feature-card":
      return (
        <div className="w-full max-w-sm">
          <ClaudeFeatureCard />
        </div>
      );
    case "product-mockup-card-dark":
      return (
        <div className="w-full max-w-md">
          <ClaudeProductMockupCardDark />
        </div>
      );
    case "code-window-card":
      return (
        <div className="w-full max-w-md">
          <ClaudeCodeWindowCard />
        </div>
      );
    case "model-comparison-card":
      return (
        <div className="w-full max-w-sm">
          <ClaudeModelComparisonCard />
        </div>
      );
    case "pricing-tier-card":
      return (
        <div className="w-full max-w-sm">
          <ClaudePricingTierCard />
        </div>
      );
    case "pricing-tier-card-featured":
      return (
        <div className="w-full max-w-sm">
          <ClaudePricingTierCardFeatured />
        </div>
      );
    case "callout-card-coral":
      return (
        <div className="w-full max-w-xl">
          <ClaudeCalloutCardCoral />
        </div>
      );
    case "connector-tile":
      return (
        <div className="w-full max-w-xs">
          <ClaudeConnectorTile />
        </div>
      );
    case "text-input":
      return (
        <div className="w-full max-w-xs">
          <ClaudeTextInput placeholder="name@company.com" />
        </div>
      );
    case "text-input-focused":
      return (
        <div className="w-full max-w-xs">
          <ClaudeTextInputFocused />
        </div>
      );
    case "cookie-consent-card":
      return <ClaudeCookieConsentCard />;
    case "category-tab":
      return (
        <div className="flex items-center gap-2">
          <ClaudeCategoryTab active={false}>Inactive Tab</ClaudeCategoryTab>
          <ClaudeCategoryTab active={true}>Active Tab</ClaudeCategoryTab>
        </div>
      );
    case "category-tab-active":
      return <ClaudeCategoryTab active={true}>Active Tab</ClaudeCategoryTab>;
    case "badge-pill":
      return <ClaudeBadgePill>Research Preview</ClaudeBadgePill>;
    case "badge-coral":
      return <ClaudeBadgeCoral>NEW RELEASE</ClaudeBadgeCoral>;
    case "cta-band-coral":
      return (
        <div className="w-full max-w-xl scale-90">
          <ClaudeCtaBandCoral />
        </div>
      );
    case "cta-band-dark":
      return (
        <div className="w-full max-w-xl scale-90">
          <ClaudeCtaBandDark />
        </div>
      );
    case "footer":
      return (
        <div className="w-full max-w-2xl scale-90 border border-white/10 rounded-[12px] overflow-hidden">
          <ClaudeFooter />
        </div>
      );
    case "anthropic-mark":
      return (
        <div className="flex items-center gap-6 p-4 bg-[#efe9de] rounded-[8px]">
          <AnthropicSpikeMark size={28} className="text-[#141413]" />
          <ClaudeWordmark />
          <AnthropicWordmark />
        </div>
      );
    default:
      return <div className="text-xs text-[#8e8b82]">Component preview</div>;
  }
}
