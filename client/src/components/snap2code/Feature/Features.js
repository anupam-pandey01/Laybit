"use client";

import { Code2, Copy, Download, History, MonitorSmartphone, ScanEye } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureBlock from "./FeatureBlock";
import ComingSoon from "./ComingSoon";
import CodeEditorVisual from "./visuals/CodeEditorVisual";
import HistoryVisual from "./visuals/HistoryVisual";
import PreviewCompareVisual from "./visuals/PreviewCompareVisual";
import ResponsiveVisual from "./visuals/ResponsiveVisual";
import ZipVisual from "./visuals/ZipVisual";

const AVAILABLE_STATUS = "Available Now";

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="glow-orb absolute -left-40 top-1/4 h-[420px] w-[420px] bg-glow-accent opacity-20"
      />

      <Container className="relative flex flex-col gap-16">
        <SectionHeading
          eyebrow="What You Get"
          title="Everything You Need to Build From a Screenshot"
          description="Go beyond screenshot conversion with tools that help you preview, edit, save, and export your generated frontend code."
        />

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Clean HTML & CSS — large block with code editor visual */}
          <FeatureBlock
            className="lg:col-span-7"
            icon={Code2}
            title="Clean HTML & CSS"
            description="Get clean, structured, editable HTML and CSS generated from your screenshot."
            status={AVAILABLE_STATUS}
            index={0}
          >
            <CodeEditorVisual />
          </FeatureBlock>

          {/* Live Preview — with browser split compare */}
          <FeatureBlock
            className="lg:col-span-5"
            icon={ScanEye}
            title="Live Preview"
            description="See your generated interface rendered instantly and compare the result with your original design."
            status={AVAILABLE_STATUS}
            index={1}
          >
            <PreviewCompareVisual />
          </FeatureBlock>

          {/* Copy Code — compact */}
          <FeatureBlock
            className="lg:col-span-5"
            icon={Copy}
            title="Copy Your Code"
            description="Copy generated HTML or CSS with one click and continue building directly in your project."
            status={AVAILABLE_STATUS}
            index={2}
          />

          {/* Download ZIP — with zip visual */}
          <FeatureBlock
            className="lg:col-span-7"
            icon={Download}
            title="Download as ZIP"
            description="Download your generated HTML, CSS, assets, and project files together as a ZIP."
            status={AVAILABLE_STATUS}
            index={3}
          >
            <ZipVisual />
          </FeatureBlock>

          {/* Conversion History — with history visual */}
          <FeatureBlock
            className="lg:col-span-7"
            icon={History}
            title="Conversion History"
            description="Keep your previous screenshot conversions organized and return to your generated code whenever you need it."
            status={AVAILABLE_STATUS}
            index={4}
          >
            <HistoryVisual />
          </FeatureBlock>

          {/* Responsive Output — with responsive frames */}
          <FeatureBlock
            className="lg:col-span-5"
            icon={MonitorSmartphone}
            title="Responsive Output"
            description="Generate layouts designed to work across desktop, tablet, and mobile screen sizes."
            status={AVAILABLE_STATUS}
            index={5}
          >
            <ResponsiveVisual />
          </FeatureBlock>
        </div>

        <ComingSoon />
      </Container>
    </section>
  );
}
