"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusBadge from "@/components/ui/StatusBadge";

const items = [
  { name: "Snap2Code", status: "Live" },
  { name: "Dev", status: "Coming Soon" },
  { name: "SQL", status: "Coming Soon" },
  { name: "API", status: "Coming Soon" },
  { name: "Deploy", status: "Coming Soon" },
  { name: "Docs", status: "Coming Soon" },
  { name: "CLI", status: "Coming Soon" },
  { name: "Browser Extension", status: "Coming Soon" },
];

export default function Roadmap() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Roadmap"
          title="2026"
          description="What's shipping this year, in the order it lands."
        />

        <div className="relative mx-auto w-full max-w-3xl">
          <div className="absolute left-[15px] top-2 h-[calc(100%-16px)] w-px bg-border sm:left-1/2" />

          <div className="flex flex-col gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
                className="relative flex items-center gap-4 sm:justify-center"
              >
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-card text-xs font-semibold text-text-muted sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  {index + 1}
                </span>

                <div
                  className={`flex w-full items-center justify-between rounded-xl border border-border bg-card px-5 py-4 sm:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <span className="text-sm font-medium text-text">{item.name}</span>
                  <StatusBadge status={item.status} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
