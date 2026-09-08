"use client";

import { motion } from "motion/react";
import { Check, Image as ImageIcon, ScanEye, Sparkles } from "lucide-react";

const sections = [
  { name: "Navbar", pct: 96 },
  { name: "Hero", pct: 98 },
  { name: "Feature Grid", pct: 92 },
  { name: "Pricing", pct: 89 },
  { name: "Footer", pct: 95 },
];

const palette = [
  { hex: "#09090b", label: "Background" },
  { hex: "#6366f1", label: "Primary" },
  { hex: "#8b5cf6", label: "Accent" },
  { hex: "#f8fafc", label: "Text" },
];

// A mock UI screenshot (a small landing page) drawn with divs.
function MockScreenshot() {
  return (
    <div className="flex w-full flex-1 flex-col overflow-hidden rounded-lg border border-border bg-background p-3">
      {/* Browser dots */}
      <div className="mb-2.5 flex items-center gap-1.5 px-0.5">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
      </div>

      {/* Nav */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-md bg-gradient-to-br from-primary to-accent" />
          <span className="h-1.5 w-10 rounded-full bg-white/15" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-7 rounded-full bg-white/10" />
          <span className="h-2 w-7 rounded-full bg-white/10" />
          <span className="h-4 w-10 rounded-md bg-primary/50" />
        </div>
      </div>

      {/* Hero */}
      <div className="flex flex-col gap-1.5">
        <div className="h-4 w-2/3 rounded-full bg-gradient-to-r from-primary/60 to-accent/40" />
        <div className="h-2 w-1/2 rounded-full bg-white/15" />
        <div className="h-2 w-1/3 rounded-full bg-white/10" />
        <div className="mt-1.5 flex gap-1.5">
          <span className="h-4 w-12 rounded-md bg-primary/60" />
          <span className="h-4 w-12 rounded-md border border-border bg-white/5" />
        </div>
      </div>

      {/* Cards */}
      <div className="mt-auto grid grid-cols-3 gap-1.5 pt-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-md border border-border bg-card p-1.5"
          >
            <span className="h-3 w-3 rounded-sm bg-primary/40" />
            <span className="h-1.5 w-3/4 rounded-full bg-white/15" />
            <span className="h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

// "Screenshot" tab: shows the uploaded screenshot being scanned + the AI
// design analysis panel Snap2Code generates from it.
export default function ScreenshotVisual() {
  return (
    <div className="grid flex-1 gap-3 p-3 sm:p-4 lg:grid-cols-[1.05fr_1fr] lg:gap-4">
      {/* Screenshot side */}
      <div className="flex min-w-0 flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-text-muted">
            <ImageIcon size={11} className="text-primary" />
            Your Screenshot
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2 py-1 text-[10px] font-medium text-accent">
            <Sparkles size={11} />
            AI Analyzing…
          </span>
        </div>

        <div className="relative flex min-h-[220px] flex-col overflow-hidden rounded-xl border border-border shadow-xl shadow-black/30 sm:min-h-[260px]">
          <MockScreenshot />

          {/* Crop corner brackets */}
          <span className="pointer-events-none absolute left-1.5 top-1.5 h-3.5 w-3.5 rounded-tl border-l-2 border-t-2 border-primary/70" />
          <span className="pointer-events-none absolute right-1.5 top-1.5 h-3.5 w-3.5 rounded-tr border-r-2 border-t-2 border-primary/70" />
          <span className="pointer-events-none absolute bottom-1.5 left-1.5 h-3.5 w-3.5 rounded-bl border-b-2 border-l-2 border-primary/70" />
          <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-3.5 w-3.5 rounded-br border-b-2 border-r-2 border-primary/70" />

          {/* Scanning line */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-primary/25 to-transparent"
            initial={{ top: "-12%" }}
            animate={{ top: "108%" }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 0.5,
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"
          />
        </div>

        {/* Upload meta */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-border bg-card/70 px-3 py-2">
          <span className="truncate font-mono text-[11px] text-text-secondary">
            dashboard-dark.png
          </span>
          <span className="text-[10px] text-text-muted">412 KB · 2400 × 1350</span>
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-medium text-success">
            <Check size={11} strokeWidth={3} />
            Uploaded
          </span>
        </div>
      </div>

      {/* Analysis side */}
      <div className="flex min-w-0 flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-text-muted">
            <ScanEye size={11} className="text-primary" />
            Design Analysis
          </span>
          <span className="font-mono text-[10px] text-text-muted">
            in progress…
          </span>
        </div>

        {/* Detected sections */}
        <div className="rounded-xl border border-border bg-card/70 p-3">
          <p className="pb-2 text-[10px] font-medium uppercase tracking-widest text-text-muted">
            Detected sections
          </p>
          <div className="flex flex-col gap-2">
            {sections.map((s, i) => (
              <div key={s.name} className="flex items-center gap-2.5">
                <span className="w-24 shrink-0 truncate text-[11px] text-text-secondary sm:w-28">
                  {s.name}
                </span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.06,
                    }}
                  />
                </div>
                <span className="w-7 shrink-0 text-right font-mono text-[10px] tabular-nums text-text-muted">
                  {s.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Color palette */}
        <div className="rounded-xl border border-border bg-card/70 p-3">
          <p className="pb-2 text-[10px] font-medium uppercase tracking-widest text-text-muted">
            Color palette
          </p>
          <div className="grid grid-cols-4 gap-2">
            {palette.map((c) => (
              <div key={c.hex} className="flex min-w-0 flex-col gap-1.5">
                <span
                  className="h-8 rounded-md border border-border"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="truncate text-center font-mono text-[9px] text-text-muted">
                  {c.hex}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography + status */}
        <div className="mt-auto flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-border bg-card/70 px-2 py-1 font-mono text-[10px] text-text-secondary">
            Inter · 16px base
          </span>
          <span className="rounded-md border border-border bg-card/70 px-2 py-1 font-mono text-[10px] text-text-secondary">
            Dark theme
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[10px] font-medium text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Ready to generate
          </span>
        </div>
      </div>
    </div>
  );
}
