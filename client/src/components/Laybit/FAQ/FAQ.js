import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What is Laybit?",
    answer:
      "Laybit is a developer platform, not an AI company. It's home to a growing set of products—some powered by AI, some not—built for developers who want to ship faster.",
  },
  {
    question: "What products are available?",
    answer:
      "Snap2Code is live today, converting screenshots into clean HTML & CSS. Dev, SQL, API, Deploy, and Docs are in active development and launching soon.",
  },
  {
    question: "Can I buy products individually?",
    answer:
      "Yes. Every Laybit product has its own pricing, so you only pay for what you actually use—no bundled plans required.",
  },
  {
    question: "Will more products be released?",
    answer:
      "Regularly. Laybit is built as an ecosystem, and new products ship throughout the year as part of our public roadmap.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />

        <div className="mx-auto flex w-full max-w-2xl flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}
