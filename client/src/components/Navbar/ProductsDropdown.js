"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Camera, Brain, Database, Plug, Rocket, BookOpen } from "lucide-react";
import StatusBadge from "@/components/ui/StatusBadge";

const comingSoon = [
  { icon: Brain, label: "Dev" },
  { icon: Database, label: "SQL" },
  { icon: Plug, label: "API" },
  { icon: Rocket, label: "Deploy" },
  { icon: BookOpen, label: "Docs" },
];

export default function ProductsDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text"
        aria-expanded={open}
      >
        Products
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-xl border border-border shadow-2xl bg-black">
              <div className="p-2">
                <p className="px-3 pb-1 pt-2 text-xs font-medium uppercase tracking-wider text-text-muted">
                  Featured Product
                </p>
                <Link
                  href="/product/snap2code"
                  className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-white/5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-lg">
                    <Camera size={18} className="text-primary" strokeWidth={2} />
                  </span>
                  <span className="flex flex-1 flex-col gap-1">
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-text">
                        Snap2Code
                      </span>
                      <StatusBadge status="Live" />
                    </span>
                    <span className="text-xs text-text-secondary">
                      Convert screenshots into HTML &amp; CSS.
                    </span>
                  </span>
                </Link>
              </div>

              <div className="h-px bg-border" />

              <div className="p-2">
                <p className="px-3 pb-1 pt-2 text-xs font-medium uppercase tracking-wider text-text-muted">
                  Coming Soon
                </p>
                <div className="flex flex-col">
                  {comingSoon.map(({ icon: Icon, label }) => (
                    <Link
                      key={label}
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-white/5"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-text-muted">
                        <Icon size={14} />
                      </span>
                      <span className="text-sm text-text-secondary">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
