"use client";

import Container from "@/components/ui/Container";
import { heroFeature } from "@/constants/snap2code";
import { easeIn, easeOut, motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="glow-orb absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 bg-glow-primary opacity-60" />
      <div className="glow-orb absolute right-0 top-32 h-[400px] w-[400px] bg-glow-accent opacity-40" />

      <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary">
            🚀 Turn Screenshot to Code
          </span>

          <h1 className="text-balance text-5xl font-semibold tracking-tight text-text sm:text-6xl lg:text-5xl">
            Turn Screenshots into <br /> Production-Ready Code
          </h1>

          <p className="max-w-lg text-balance text-lg text-text-secondary sm:text-xl">
            Upload any UI screenshot and generate clean, responsive frontend
            code in seconds.
          </p>

          {heroFeature.map((feature, index) => (
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted ml-2" key={index}>
              <span className="text-green-400 mr-2">✓</span>
              {feature}
            </p>
          ))}

          <div className="flex flex-wrap items-center gap-8 pt-2">
            <Link
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-primary-hover active:scale-[0.98]"
            >
              Start Free <ArrowRight size={15}/>
            </Link>

            <Link
              href="#products"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-all hover:scale-[1.03] hover:bg-white/5 active:scale-[0.98]"
            >
              View Demo
            </Link>
          </div>
          <div className="flex items-center gap-4 text-center text-xs">
            <span>⭐ 3 Free Credits</span> • <span>No Credit Card Requried</span>
          </div>
        </motion.div>

        {/* Right side placeholder — demo video will go here in the future */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeIn }}
          className="relative"
        >
          <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-border bg-white/[0.03]">
            {/* TODO: replace with <video> element / embed */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
                ▶
              </div>
              <p className="text-sm font-medium text-text-secondary">
                Demo video will be added here
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
