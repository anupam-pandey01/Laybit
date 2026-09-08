"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Boxes, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import ProductsDropdown from "@/components/Navbar/ProductsDropdown";

const navLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#" },
  { label: "Docs", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass fixed inset-x-0 top-0 z-50 border-b border-border"
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/web-logo.png" className="h-12"/>
          <span className="text-base font-semibold tracking-tight text-text">
            
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <ProductsDropdown />
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(99,102,241,0.4)] transition-all hover:scale-[1.03] hover:bg-primary-hover active:scale-[0.98]"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-text lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {mobileOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="glass border-t border-border lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            <span className="px-3 py-2 text-sm font-medium text-text-muted">
              Products
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary hover:text-text"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sign-up"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </Container>
        </motion.div>
      )}
    </motion.header>
  );
}
