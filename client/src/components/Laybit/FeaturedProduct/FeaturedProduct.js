"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, ArrowUpRight, Camera } from "lucide-react";
import Container from "@/components/ui/Container";
import StatusBadge from "@/components/ui/StatusBadge";

const features = ["Clean HTML", "Responsive CSS", "Production Ready"];

export default function FeaturedProduct() {
  return (
    <section id="featured-product" className="py-24 lg:py-32">
      <Container>
        <span className="text-sm font-medium uppercase tracking-widest text-primary">
          Featured Product
        </span>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="flex items-center gap-1.5 border-b border-border bg-card px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <div className="relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
              <Camera size={64} strokeWidth={1} className="text-primary/40" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                Snap2Code
              </h3>
              <StatusBadge status="Live" />
            </div>

            <p className="text-balance text-lg text-text-secondary">
              Convert screenshots into clean HTML &amp; CSS in seconds.
            </p>

            <ul className="flex flex-col gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-text-secondary">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-primary-hover active:scale-[0.98]"
            >
              Open Snap2Code
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
