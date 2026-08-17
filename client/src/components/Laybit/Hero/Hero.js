"use client";

import Link from "next/link";
import { easeOut, motion } from "motion/react";
import { ArrowRight, Camera, Brain, Database } from "lucide-react";
import Container from "@/components/ui/Container";
import StatusBadge from "@/components/ui/StatusBadge";

const floatingCards = [
  {
    icon: Camera,
    name: "Snap2Code",
    status: "Live",
    className: "top-0 right-4 lg:right-8",
    animation: "animate-float",
  },
  {
    icon: Brain,
    name: "JSON ANALIZER",
    status: "Coming Soon",
    className: "top-40 right-24 lg:right-32",
    animation: "animate-float-delayed",
  },
  {
    icon: Database,
    name: "SQL",
    status: "Coming Soon",
    className: "top-72 right-2 lg:right-4",
    animation: "animate-float-slow",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div className="glow-orb absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 bg-glow-primary opacity-60" />
      <div className="glow-orb absolute right-0 top-32 h-[400px] w-[400px] bg-glow-accent opacity-40" />

      <Container className="relative grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Snap2Code is live
          </span>

          <h1 className="text-balance text-5xl font-semibold tracking-tight text-text sm:text-6xl lg:text-7xl">
            Build Better Software.
          </h1>

          <p className="max-w-lg text-balance text-lg text-text-secondary sm:text-xl">
            Everything developers need—from AI-powered assistants to everyday
            developer tools.
          </p>

          <p className="text-sm font-medium uppercase tracking-widest text-text-muted">
            One platform. Multiple products.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/product/snap2code"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-primary-hover active:scale-[0.98]"
            >
              Get Started
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-all hover:scale-[1.03] hover:bg-white/5 active:scale-[0.98]"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>

        <div className="relative hidden h-[420px] lg:block">
          {floatingCards.map(({ icon: Icon, name, status, className, animation }) => (
            <div
              key={name}
              className={`absolute w-52 ${animation} ${className}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/80 p-4 shadow-2xl shadow-black/40 backdrop-blur"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon size={18} />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-text">{name}</span>
                  <StatusBadge status={status} />
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
