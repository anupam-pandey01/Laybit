"use client";

import {
  ArrowDown,
  ArrowRight,
  Code2,
  Download,
  ScanSearch,
  Upload,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StepCard from "./StepCard";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Your Screenshot",
    description:
      "Drop your UI screenshot into Snap2Code or choose an image from your device.",
    tags: ["PNG", "JPG", "WEBP"],
  },
  {
    step: "02",
    icon: ScanSearch,
    title: "AI Analyzes the Design",
    description:
      "Snap2Code analyzes the layout, spacing, colors, typography, components, and visual structure of your screenshot.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Generate the Code",
    description:
      "AI transforms the analyzed design into clean, structured HTML and CSS.",
  },
  {
    step: "04",
    icon: Download,
    title: "Preview & Export",
    description:
      "Preview the generated website instantly, copy your code, or download the complete project as a ZIP.",
    tags: ["ZIP"],
  },
];

const rows = [steps.slice(0, 2), steps.slice(2, 4)];

/* Desktop: chevron between the two cards in a row.
   Mobile: chevron between vertically stacked cards. */
function InlineConnector() {
  return (
    <>
      <div
        aria-hidden="true"
        className="flex items-center justify-center py-1 text-border md:hidden"
      >
        <ArrowDown size={16} />
      </div>
      <div
        aria-hidden="true"
        className="hidden items-center justify-center text-primary/70 md:flex"
      >
        <ArrowRight size={18} />
      </div>
    </>
  );
}

/* Mobile only: chevron that joins the end of one row to the start of the next. */
function RowBreakConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center text-border md:hidden"
    >
      <ArrowDown size={16} />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="glow-orb absolute -right-40 top-24 h-[420px] w-[420px] bg-glow-primary opacity-30"
      />

      <Container className="relative flex flex-col gap-16">
        <SectionHeading
          eyebrow="How It Works"
          title="From Screenshot to Code in Seconds."
          description="Turn any UI screenshot into clean, responsive frontend code with a simple four-step workflow."
        />

        <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-4 lg:gap-6">
                <StepCard {...row[0]} index={rowIndex * 2} />
                <InlineConnector />
                <StepCard {...row[1]} index={rowIndex * 2 + 1} />
              </div>

              {rowIndex === 0 && <RowBreakConnector />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
