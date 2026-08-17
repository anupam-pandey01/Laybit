"use client";

import { motion } from "motion/react";
import { UserCheck, Code2, TrendingUp, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: UserCheck,
    title: "One Account",
    description: "Use every Laybit product with one account.",
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Built for developers.",
  },
  {
    icon: TrendingUp,
    title: "Growing Ecosystem",
    description: "New products are continuously added.",
  },
  {
    icon: Sparkles,
    title: "Modern Experience",
    description: "Beautiful UI and fast performance.",
  },
];

export default function WhyLaybit() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow="Why Laybit" title="Made for how developers actually work." />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon size={20} />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold text-text">{title}</h3>
                <p className="text-sm text-text-secondary">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
