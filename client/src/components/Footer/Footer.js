import Link from "next/link";
import { Boxes, Github, Linkedin } from "lucide-react";
import Container from "@/components/ui/Container";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Blog", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  // { icon: Twitter, href: "#", label: "X" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-12 sm:flex-row">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <Boxes size={18} strokeWidth={2.2} />
              </span>
              <span className="text-base font-semibold tracking-tight text-text">
                Laybit
              </span>
            </Link>
            <p className="max-w-xs text-sm text-text-secondary">
              A developer platform. One account, multiple products, built for
              how you actually ship.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-16">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold text-text">{column.title}</h4>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-secondary transition-colors hover:text-text"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Laybit. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition-colors hover:text-text"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
