"use client";

import { motion } from "motion/react";

export default function FeatureBlock({
  icon: Icon,
  title,
  description,
  status,
  index = 0,
  className = "",
  children,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
      </div>

      <div className="relative flex h-full flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Icon size={20} />
          </span>

          {status && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              {status}
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-text sm:text-xl">{title}</h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            {description}
          </p>
        </div>

        {children && (
          <div className="mt-auto flex min-h-0 flex-col pt-6">{children}</div>
        )}
      </div>
    </motion.article>
  );
}
