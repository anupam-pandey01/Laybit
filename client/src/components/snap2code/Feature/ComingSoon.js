"use client";

import { motion } from "motion/react";
import { Atom, Boxes, Braces, Clock, Triangle } from "lucide-react";

const futureItems = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Triangle },
  { name: "Tailwind CSS", icon: Boxes },
  { name: "Vue", icon: Braces },
];

export default function ComingSoon() {
  return (
    <motion.section
      id="coming-soon"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl border border-border bg-card/60"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="flex max-w-2xl flex-col items-start gap-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              <Clock size={13} />
              Coming Soon
            </span>

            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                More Ways to Build, Coming Soon
              </h3>
              <p className="text-balance text-base text-text-secondary sm:text-lg">
                HTML and CSS are just the beginning. Generate code for the
                frameworks and tools you already use.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 lg:max-w-md lg:justify-end">
            {futureItems.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-surface/80 px-4 py-2.5 text-sm font-medium text-text-secondary"
              >
                <Icon size={16} className="text-text-muted" />
                {name}
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  Soon
                </span>
              </span>
            ))}
            <span className="inline-flex items-center rounded-xl border border-dashed border-border bg-surface/40 px-4 py-2.5 text-sm text-text-muted">
              + More frameworks
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
