"use client";

import { motion } from "motion/react";

// Reusable tab bar for the product showcase. Renders a 3-up segmented control
// with an animated active pill (spring transition via layoutId).
export default function ShowcaseTabs({ tabs, active, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Product showcase views"
      className="grid grid-cols-3 gap-1.5 rounded-xl border border-border bg-card/80 p-1.5"
    >
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const isActive = index === active;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`showcase-tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`showcase-panel-${tab.id}`}
            onClick={() => onChange(index)}
            className={`relative flex min-w-0 items-center justify-center rounded-lg px-2 py-2 text-xs font-semibold transition-colors duration-200 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
              isActive
                ? "text-text"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="showcase-tab-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-lg border border-primary/40 bg-primary/15"
              />
            )}
            <span className="relative z-10 flex min-w-0 items-center justify-center gap-1.5 sm:gap-2">
              <Icon
                size={15}
                className={`shrink-0 ${isActive ? "text-primary" : ""}`}
              />
              <span className="truncate">{tab.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
