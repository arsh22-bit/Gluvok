import React from "react";

export interface AnthropicSpikeMarkProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Anthropic radial-spike mark:
 * The signature 4-spoke radial asterisk glyph that anchors the Claude / Anthropic wordmark.
 */
export function AnthropicSpikeMark({
  className = "size-4",
  size = 18,
  color = "currentColor",
}: AnthropicSpikeMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Anthropic Mark"
    >
      {/* 4-spoke radial asterisk geometry */}
      <path
        d="M12 2C11.3 2 10.75 2.55 10.75 3.25V9.5C10.75 9.8 10.5 10.05 10.2 10.05H3.25C2.55 10.05 2 10.6 2 11.3C2 12 2.55 12.55 3.25 12.55H10.2C10.5 12.55 10.75 12.8 10.75 13.1V20.75C10.75 21.45 11.3 22 12 22C12.7 22 13.25 21.45 13.25 20.75V13.1C13.25 12.8 13.5 12.55 13.8 12.55H20.75C21.45 12.55 22 12 22 11.3C22 10.6 21.45 10.05 20.75 10.05H13.8C13.5 10.05 13.25 9.8 13.25 9.5V3.25C13.25 2.55 12.7 2 12 2Z"
        fill={color}
      />
      <circle cx="12" cy="11.3" r="2.2" fill={color} />
      {/* Angled subtle micro-nodes echoing Anthropic's multi-radial spoke */}
      <path
        d="M6.3 5.6C5.8 5.1 5 5.1 4.5 5.6C4 6.1 4 6.9 4.5 7.4L7.5 10.4C7.8 10.7 8.3 10.6 8.5 10.3C8.7 10 8.6 9.5 8.3 9.3L6.3 5.6Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M17.7 17C17.2 16.5 16.4 16.5 15.9 17C15.4 17.5 15.4 18.3 15.9 18.8L18.9 21.8C19.4 22.3 20.2 22.3 20.7 21.8C21.2 21.3 21.2 20.5 20.7 20L17.7 17Z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  );
}

export function ClaudeWordmark({
  className = "",
  theme = "light",
}: {
  className?: string;
  theme?: "light" | "dark";
}) {
  const isDark = theme === "dark";
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <AnthropicSpikeMark
        size={20}
        className={isDark ? "text-[#faf9f5]" : "text-[#141413]"}
      />
      <span
        className={`font-serif text-[22px] tracking-[-0.03em] font-normal leading-none ${
          isDark ? "text-[#faf9f5]" : "text-[#141413]"
        }`}
      >
        Claude
      </span>
    </div>
  );
}

export function AnthropicWordmark({
  className = "",
  theme = "light",
}: {
  className?: string;
  theme?: "light" | "dark";
}) {
  const isDark = theme === "dark";
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <AnthropicSpikeMark
        size={18}
        className={isDark ? "text-[#faf9f5]" : "text-[#141413]"}
      />
      <span
        className={`font-sans text-[15px] tracking-[0.04em] uppercase font-semibold leading-none ${
          isDark ? "text-[#faf9f5]" : "text-[#141413]"
        }`}
      >
        ANTHROPIC
      </span>
    </div>
  );
}
