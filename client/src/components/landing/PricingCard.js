"use client";

import { motion } from "motion/react";
import { Check, Sparkles, Zap } from "lucide-react";

/* CTA button treatments — kept in sync with the rest of the product UI. */
const CTA_STYLES = {
  primary:
    "bg-primary text-white shadow-[0_10px_30px_-12px_rgba(99,102,241,0.65)] hover:bg-primary-hover",
  ghost:
    "border border-border bg-white/[0.03] text-text hover:border-primary/40 hover:bg-white/5",
  soft: "border border-primary/30 bg-primary/10 text-primary hover:border-primary/50 hover:bg-primary/20",
};

export default function PricingCard({ plan, index = 0, className = "" }) {
  const {
    name,
    subtitle,
    price,
    credits,
    cta,
    ctaVariant = "primary",
    features = [],
    badge,
    highlighted = false,
  } = plan;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
        highlighted
          ? "border-primary/40 bg-surface/80 shadow-[0_0_50px_-18px_rgba(99,102,241,0.45)] hover:border-primary/60 hover:shadow-[0_0_70px_-18px_rgba(99,102,241,0.6)] lg:scale-[1.03]"
          : "border-border bg-card shadow-[0_15px_40px_-35px_rgba(0,0,0,0.8)] hover:-translate-y-1.5 hover:border-primary/35"
      } ${className}`}
    >
      {highlighted && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
          <div className="absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-glow-primary opacity-30 blur-3xl" />
        </div>
      )}

      <div className="relative flex h-full flex-col">
        {/* Plan name + optional badge */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-text">
            {name}
          </h3>
          {badge && (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary">
              <Sparkles size={12} />
              {badge}
            </span>
          )}
        </div>

        <p className="mt-1.5 text-sm text-text-muted">{subtitle}</p>

        {/* Price */}
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-baseline gap-1">
            <span
              className={`text-xl font-semibold ${
                highlighted ? "text-primary" : "text-text-secondary"
              }`}
            >
              ₹
            </span>
            <span className="text-5xl font-semibold leading-none tracking-tight text-text tabular-nums">
              {price}
            </span>
          </div>

          {credits && (
            <span
              className={`inline-flex w-fit items-center gap-1.5 rounded-lg border px-2.5 py-1 font-mono text-xs ${
                highlighted
                  ? "border-primary/30 bg-primary/15 text-primary"
                  : "border-border bg-white/5 text-text-secondary"
              }`}
            >
              <Zap size={12} />
              {credits}
            </span>
          )}
        </div>

        <div aria-hidden="true" className="mt-7 h-px w-full bg-border/70" />

        {/* Feature list */}
        <ul className="mt-6 flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  highlighted
                    ? "bg-primary/25 text-primary"
                    : "bg-white/[0.06] text-text-secondary"
                }`}
              >
                <Check size={11} strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-text-secondary">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto pt-8">
          <button
            type="button"
            className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
              CTA_STYLES[ctaVariant]
            }`}
          >
            {cta}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
