"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, LayoutGrid } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center"
        >
          <div className="glow-orb absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 bg-glow-primary opacity-50" />

          <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <LayoutGrid size={22} />
          </span>

          <h2 className="relative text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Pricing
          </h2>

          <p className="relative max-w-xl text-balance text-lg text-text-secondary">
            Every Laybit product has its own pricing. Choose only the products
            you need. Platform bundles will be introduced as the ecosystem
            grows.
          </p>

          <Link
            href="#"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-primary-hover active:scale-[0.98]"
          >
            View Pricing
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
