"use client";

import { motion } from "motion/react";

export default function StepCard({
  step,
  icon: Icon,
  title,
  description,
  tags = [],
  index = 0,
  className = "",
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-7 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      </div>

      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Icon size={20} />
          </span>
          <span className="rounded-lg border border-border bg-white/5 px-2.5 py-1 text-xs font-semibold tabular-nums tracking-widest text-text-secondary transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
            {step}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-text sm:text-xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            {description}
          </p>
        </div>

        {tags.length > 0 && (
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-white/5 px-2 py-0.5 font-mono text-[11px] text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
