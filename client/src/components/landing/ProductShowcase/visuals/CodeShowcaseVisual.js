"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Code2, Copy, Download, FileCode2, FileText } from "lucide-react";

const htmlLines = [
  [{ t: "<header", c: "text-primary" }, { t: ' class="', c: "text-text-muted" }, { t: "site-header", c: "text-sky-400" }, { t: '">', c: "text-text-muted" }],
  [{ t: "  <nav", c: "text-primary" }, { t: ' class="', c: "text-text-muted" }, { t: "nav", c: "text-sky-400" }, { t: '">', c: "text-text-muted" }],
  [{ t: "    <a", c: "text-primary" }, { t: ' href="', c: "text-text-muted" }, { t: "#", c: "text-sky-400" }, { t: '">', c: "text-text-muted" }, { t: "Logo", c: "text-text" }, { t: "</a>", c: "text-primary" }],
  [{ t: "    <ul", c: "text-primary" }, { t: ' class="', c: "text-text-muted" }, { t: "nav-links", c: "text-sky-400" }, { t: '">', c: "text-text-muted" }],
  [{ t: "      <li", c: "text-primary" }, { t: ">", c: "text-text-muted" }, { t: "Features", c: "text-text" }, { t: "</li>", c: "text-primary" }],
  [{ t: "      <li", c: "text-primary" }, { t: ">", c: "text-text-muted" }, { t: "Pricing", c: "text-text" }, { t: "</li>", c: "text-primary" }],
  [{ t: "    </ul>", c: "text-primary" }],
  [{ t: "  </nav>", c: "text-primary" }],
  [{ t: "</header>", c: "text-primary" }],
  [{ t: "", c: "text-text" }],
  [{ t: "<main", c: "text-primary" }, { t: ' class="', c: "text-text-muted" }, { t: "hero", c: "text-sky-400" }, { t: '">', c: "text-text-muted" }],
  [{ t: "  <h1", c: "text-primary" }, { t: ">", c: "text-text-muted" }, { t: "Build faster", c: "text-text" }, { t: "</h1>", c: "text-primary" }],
  [{ t: "  <p", c: "text-primary" }, { t: ">", c: "text-text-muted" }, { t: "Clean, responsive markup.", c: "text-text" }, { t: "</p>", c: "text-primary" }],
  [{ t: "  <button", c: "text-primary" }, { t: ' class="', c: "text-text-muted" }, { t: "btn-primary", c: "text-sky-400" }, { t: '">', c: "text-text-muted" }, { t: "Get Started", c: "text-text" }, { t: "</button>", c: "text-primary" }],
  [{ t: "</main>", c: "text-primary" }],
];

const cssLines = [
  [{ t: ":root", c: "text-primary" }, { t: " {", c: "text-text-muted" }],
  [{ t: "  --primary:", c: "text-accent" }, { t: " ", c: "text-text" }, { t: "#6366f1", c: "text-sky-400" }, { t: ";", c: "text-text-muted" }],
  [{ t: "  --surface:", c: "text-accent" }, { t: " ", c: "text-text" }, { t: "#111827", c: "text-sky-400" }, { t: ";", c: "text-text-muted" }],
  [{ t: "}", c: "text-text-muted" }],
  [{ t: "", c: "text-text" }],
  [{ t: ".site-header", c: "text-accent" }, { t: " {", c: "text-text-muted" }],
  [{ t: "  display:", c: "text-accent" }, { t: " ", c: "text-text" }, { t: "flex", c: "text-sky-400" }, { t: ";", c: "text-text-muted" }],
  [{ t: "  justify-content:", c: "text-accent" }, { t: " ", c: "text-text" }, { t: "space-between", c: "text-sky-400" }, { t: ";", c: "text-text-muted" }],
  [{ t: "  padding:", c: "text-accent" }, { t: " ", c: "text-text" }, { t: "1rem 2rem", c: "text-sky-400" }, { t: ";", c: "text-text-muted" }],
  [{ t: "}", c: "text-text-muted" }],
  [{ t: "", c: "text-text" }],
  [{ t: ".hero", c: "text-accent" }, { t: " {", c: "text-text-muted" }],
  [{ t: "  display:", c: "text-accent" }, { t: " ", c: "text-text" }, { t: "grid", c: "text-sky-400" }, { t: ";", c: "text-text-muted" }],
  [{ t: "  place-items:", c: "text-accent" }, { t: " ", c: "text-text" }, { t: "center", c: "text-sky-400" }, { t: ";", c: "text-text-muted" }],
  [{ t: "  min-height:", c: "text-accent" }, { t: " ", c: "text-text" }, { t: "60vh", c: "text-sky-400" }, { t: ";", c: "text-text-muted" }],
  [{ t: "}", c: "text-text-muted" }],
  [{ t: "", c: "text-text" }],
  [{ t: "@media", c: "text-primary" }, { t: " (", c: "text-text-muted" }, { t: "max-width", c: "text-text" }, { t: ": ", c: "text-text-muted" }, { t: "768px", c: "text-sky-400" }, { t: ") {", c: "text-text-muted" }],
  [{ t: "  .site-header", c: "text-accent" }, { t: " {", c: "text-text-muted" }],
  [{ t: "    flex-direction:", c: "text-accent" }, { t: " ", c: "text-text" }, { t: "column", c: "text-sky-400" }, { t: ";", c: "text-text-muted" }],
  [{ t: "  }", c: "text-text-muted" }],
  [{ t: "}", c: "text-text-muted" }],
];

const fileTabs = [
  { id: "html", label: "index.html", icon: FileCode2 },
  { id: "css", label: "styles.css", icon: FileText },
];

// Syntax-highlighted code editor: file tabs + line numbers + copy/download
// affordances. Uses the same token colors as the existing CodeEditorVisual.
function CodeEditor({ files }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const file = files[active];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex min-h-[300px] flex-1 flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-xl shadow-black/30 sm:min-h-[340px]">
      {/* File tabs */}
      <div className="flex items-center gap-1 border-b border-border bg-card px-2 pt-2">
        {files.map((f, i) => {
          const Icon = f.icon;
          const isActive = i === active;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(i)}
              className={`flex min-w-0 items-center gap-1.5 rounded-t-md border border-b-0 px-2.5 py-1.5 font-mono text-[11px] transition-colors duration-200 sm:px-3 ${
                isActive
                  ? "border-border bg-surface text-text"
                  : "border-transparent text-text-muted hover:text-text-secondary"
              }`}
            >
              <Icon
                size={12}
                className={isActive ? "text-primary" : "text-text-muted"}
              />
              <span className="truncate">{f.label}</span>
            </button>
          );
        })}

        <div className="ml-auto flex items-center gap-1 pr-1">
          <button
            type="button"
            aria-label="Copy code"
            onClick={handleCopy}
            className="flex h-7 w-7 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-white/5 hover:text-text"
          >
            {copied ? (
              <Check size={13} className="text-success" strokeWidth={3} />
            ) : (
              <Copy size={13} />
            )}
          </button>
          <button
            type="button"
            aria-label="Download code"
            className="flex h-7 w-7 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-white/5 hover:text-text"
          >
            <Download size={13} />
          </button>
        </div>
      </div>

      {/* Code body */}
      <motion.div
        key={file.id}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex min-h-0 min-w-0 flex-1"
      >
        <div className="overflow-x-auto px-0 py-3 font-mono text-[11px] leading-relaxed sm:text-xs">
          <table className="border-collapse">
            <tbody>
              {file.lines.map((line, i) => (
                <tr key={i}>
                  <td className="select-none pr-3 pl-3 text-right align-top text-text-muted/50">
                    {i + 1}
                  </td>
                  <td className="whitespace-pre pr-4 align-top">
                    {line.length === 0 ? (
                      <span>&nbsp;</span>
                    ) : (
                      line.map((tok, j) => (
                        <span key={j} className={tok.c}>
                          {tok.t}
                        </span>
                      ))
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

// "HTML / CSS" tab: the generated code editor with file tabs and meta chips.
export default function CodeShowcaseVisual() {
  const files = [
    { id: "html", label: "index.html", icon: FileCode2, lines: htmlLines },
    { id: "css", label: "styles.css", icon: FileText, lines: cssLines },
  ];

  return (
    <div className="flex flex-1 flex-col gap-3 p-3 sm:p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-text-muted">
          <Code2 size={11} className="text-primary" />
          Generated Code
        </span>
        <span className="rounded-md border border-border bg-card/70 px-2 py-1 font-mono text-[10px] text-text-secondary">
          1 file · 142 lines
        </span>
        <span className="rounded-md border border-border bg-card/70 px-2 py-1 font-mono text-[10px] text-text-secondary">
          semantic + responsive
        </span>
        <span className="ml-auto hidden items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[10px] font-medium text-success sm:inline-flex">
          <Check size={11} strokeWidth={3} />
          Ready to copy
        </span>
      </div>

      <CodeEditor files={files} />
    </div>
  );
}
