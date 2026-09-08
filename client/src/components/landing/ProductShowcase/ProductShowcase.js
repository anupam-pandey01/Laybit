"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Code2, Image as ImageIcon, ScanEye } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ShowcaseTabs from "./ShowcaseTabs";
import ScreenshotVisual from "./visuals/ScreenshotVisual";
import LivePreviewVisual from "./visuals/LivePreviewVisual";
import CodeShowcaseVisual from "./visuals/CodeShowcaseVisual";

const tabs = [
  {
    id: "screenshot",
    label: "Screenshot",
    icon: ImageIcon,
    description:
      "Drop in your screenshot and Snap2Code instantly maps every section, color, and spacing.",
    Component: ScreenshotVisual,
  },
  {
    id: "preview",
    label: "Live Preview",
    icon: ScanEye,
    description:
      "See the generated interface rendered pixel-perfect, then switch between desktop, tablet, and mobile.",
    Component: LivePreviewVisual,
  },
  {
    id: "code",
    label: "HTML / CSS",
    icon: Code2,
    description:
      "Inspect the clean, semantic HTML and CSS behind the preview before copying it into your project.",
    Component: CodeShowcaseVisual,
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const { Component, description } = tabs[active];

  return (
    <section
      id="product-showcase"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="glow-orb absolute -left-40 top-24 h-[420px] w-[420px] bg-glow-primary opacity-25"
      />
      <div
        aria-hidden="true"
        className="glow-orb absolute -right-40 bottom-24 h-[420px] w-[420px] bg-glow-accent opacity-20"
      />

      <Container className="relative flex flex-col gap-10">
        <SectionHeading
          eyebrow="SEE IT IN ACTION"
          title="Your Screenshot. Your Code. Your Way."
          description="See the generated interface, inspect the code, and preview your result before taking it into your project."
        />

        {/* Tabs */}
        <ShowcaseTabs tabs={tabs} active={active} onChange={setActive} />

        {/* Tab description */}
        <motion.p
          key={`desc-${tabs[active].id}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mx-auto -mt-4 max-w-xl text-center text-sm text-text-secondary"
        >
          {description}
        </motion.p>

        {/* Showcase frame */}
        <div className="relative">
          {/* Hover gradient border */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-60"
          />

          <motion.div
            key={tabs[active].id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl sm:min-h-[460px]"
          >
            {/* Top bar */}
            <div className="flex items-center gap-2 border-b border-glass-border px-4 py-3 sm:px-5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 truncate font-mono text-[11px] text-text-muted">
                app.snap2code.dev
              </span>
            </div>

            {/* Active tab visualization */}
            <div className="flex min-h-0 flex-1 flex-col">
              <Component />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
