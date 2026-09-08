"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Copy, Monitor, RefreshCw, Smartphone, Tablet } from "lucide-react";

const devices = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%", maxWidth: "none" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "72%", maxWidth: "480px" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "46%", maxWidth: "300px" },
];

// The generated website rendered live (nav + hero + feature cards).
function PreviewSite() {
  return (
    <div className="flex w-full flex-1 flex-col gap-3 overflow-hidden bg-background p-3 text-left sm:p-4">
      {/* Site nav */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded-md bg-gradient-to-br from-primary to-accent" />
          <span className="text-[10px] font-semibold text-text">SnapUI</span>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="text-[9px] text-text-muted">Features</span>
          <span className="text-[9px] text-text-muted">Pricing</span>
          <span className="text-[9px] text-text-muted">Docs</span>
        </div>
        <span className="rounded-md bg-primary px-2 py-0.5 text-[9px] font-semibold text-white">
          Sign in
        </span>
      </div>

      {/* Hero */}
      <div className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-gradient-to-b from-card to-surface p-3 text-center">
        <span className="h-2 w-16 rounded-full bg-white/15" />
        <span className="mt-1 h-3.5 w-4/5 rounded-full bg-gradient-to-r from-primary/70 to-accent/50" />
        <span className="h-2 w-3/5 rounded-full bg-white/10" />
        <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5">
          <span className="rounded-md bg-primary px-2.5 py-1 text-[9px] font-semibold text-white">
            Get started
          </span>
          <span className="rounded-md border border-border px-2.5 py-1 text-[9px] text-text-secondary">
            Learn more
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid flex-1 grid-cols-3 gap-1.5 sm:gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-md border border-border bg-card p-2"
          >
            <span className="h-3 w-3 rounded-sm bg-primary/50" />
            <span className="mt-1 h-1.5 w-3/4 rounded-full bg-white/15" />
            <span className="h-1.5 w-1/2 rounded-full bg-white/10" />
            <span className="mt-1 h-3 w-2/3 rounded-md bg-gradient-to-r from-primary/40 to-accent/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

// "Live Preview" tab: browser-style preview with an interactive device toggle.
export default function LivePreviewVisual() {
  const [device, setDevice] = useState(0);
  const activeDevice = devices[device];

  return (
    <div className="flex flex-1 flex-col gap-3 p-3 sm:p-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-border bg-card/80 px-3 py-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
          <span className="truncate font-mono text-[11px] text-text-muted">
            localhost:3000/preview
          </span>
          <span className="ml-auto hidden shrink-0 rounded-md border border-border px-1.5 py-0.5 font-mono text-[9px] text-text-muted sm:inline">
            100%
          </span>
          <RefreshCw size={13} className="shrink-0 text-text-muted" />
        </div>

        {/* Device toggle */}
        <div className="flex items-center gap-1 rounded-lg border border-border bg-card/80 p-1">
          {devices.map((d, i) => {
            const Icon = d.icon;
            const isActive = i === device;
            return (
              <button
                key={d.id}
                type="button"
                aria-label={`Preview on ${d.label}`}
                aria-pressed={isActive}
                onClick={() => setDevice(i)}
                className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-primary/15 text-primary"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <Icon size={14} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Browser preview */}
      <div className="flex min-h-[300px] flex-1 items-stretch justify-center overflow-hidden rounded-xl border border-border bg-surface shadow-xl shadow-black/30">
        <motion.div
          key={activeDevice.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: activeDevice.width, maxWidth: activeDevice.maxWidth }}
          className="mx-auto flex h-full flex-col"
        >
          <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border/70 bg-card">
            <div className="flex items-center gap-2 border-b border-border/70 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
              <span className="ml-2 truncate font-mono text-[10px] text-text-muted">
                snap2code.app
              </span>
            </div>
            <PreviewSite />
          </div>
        </motion.div>
      </div>

      {/* Footer row */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
          <span className="truncate text-[11px] text-text-secondary">
            Generated from your screenshot · pixel-perfect
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/70 px-2.5 py-1 text-[10px] font-medium text-text-secondary">
            <Copy size={11} className="text-primary" />
            Copy code
          </span>
          <span className="hidden items-center gap-1.5 rounded-md border border-border bg-card/70 px-2.5 py-1 text-[10px] font-medium text-text-secondary sm:inline-flex">
            <span className="font-mono">↓</span>
            ZIP
          </span>
        </div>
      </div>
    </div>
  );
}
