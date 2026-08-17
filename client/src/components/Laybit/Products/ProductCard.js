"use client";

import { motion } from "motion/react";
import StatusBadge from "@/components/ui/StatusBadge";

export default function ProductCard({ icon: Icon, name, description, status, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      </div>

      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Icon size={20} />
          </span>
          <StatusBadge status={status} />
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-semibold text-text">{name}</h3>
          <p className="text-sm text-text-secondary">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
