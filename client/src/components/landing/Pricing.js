"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/constants/snap2code";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="glow-orb absolute -right-40 top-1/4 h-[420px] w-[420px] bg-glow-primary opacity-20"
      />
      <div
        aria-hidden="true"
        className="glow-orb absolute -left-40 bottom-10 h-[380px] w-[380px] bg-glow-accent opacity-15"
      />

      <Container className="relative flex flex-col gap-16">
        <SectionHeading
          eyebrow="SIMPLE, FLEXIBLE PRICING"
          title="Start Free. Build More."
          description="Try Snap2Code for free, then add credits when you need more conversions. No complicated subscriptions."
        />

        {/* Free | Starter | Launch | Builder Desktop: 4 across. Tablet: 2x2. Mobile: stacked. */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
            />
          ))}
        </div>
        
      </Container>
    </section>
  );
}
