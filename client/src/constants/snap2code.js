export const heroFeature = ["HTML + CSS ", "Responsive Layout", "Clean Structure", "Download ZIP"]

/**
 * Temporary launch pricing for the Snap2Code landing page (UI only).
 * Prices, credits, and feature copy are easy to tweak here.
 * Payment / credit purchase is NOT wired up yet.
 */
export const pricingPlans = [
  {
    name: "Free",
    subtitle: "For trying Snap2Code",
    price: 0,
    cta: "Start Free",
    ctaVariant: "ghost",
    highlighted: false,
    features: [
      "2 credits",
      "Screenshot → HTML & CSS",
      "Live Preview",
      "Copy HTML & CSS",
      "Conversion History",
      "Standard generation",
      "PNG, JPG & WEBP",
    ],
  },
  {
    name: "Starter",
    subtitle: "For occasional conversions",
    price: 10,
    credits: "5 credits",
    cta: "Get Starter",
    ctaVariant: "soft",
    highlighted: false,
    features: [
      "Everything in Free",
      "Download ZIP",
      "Responsive code",
      "Faster generation",
      "Credits never expire",
      "Unlimited history",
    ],
  },
  {
    name: "Launch",
    subtitle: "For developers getting started",
    price: 99,
    credits: "30 credits",
    cta: "Get Launch",
    ctaVariant: "primary",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Everything in Free",
      "Download ZIP",
      "Responsive code",
      "Faster generation",
      "Unlimited history",
      "Credits never expire",
    ],
  },
  {
    name: "Builder",
    subtitle: "For frequent development",
    price: 249,
    credits: "100 credits",
    cta: "Get Builder",
    ctaVariant: "soft",
    highlighted: false,
    features: [
      "Everything in Launch",
      "Priority generation",
      "Higher usage",
      "Advanced export",
      "Early access to new features",
      "Future framework support",
    ],
  },
];