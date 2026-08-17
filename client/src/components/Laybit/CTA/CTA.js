"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden py-24 lg:py-32">
      <div className="glow-orb absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-glow-primary opacity-40" />

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-4xl font-semibold tracking-tight text-text sm:text-5xl"
        >
          Ready to Build Better Software?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-xl text-balance text-lg text-text-secondary"
        >
          Start with Snap2Code today and discover the future of developer tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <Link
            href="#"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:scale-[1.03] hover:bg-primary-hover active:scale-[0.98]"
          >
            Get Started
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
