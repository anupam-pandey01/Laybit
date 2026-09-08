// ZIP download visual for "Download as ZIP": a compact file explorer row with a
// finished "Downloading…" pill and a little download progress bar.

import { Archive, Check } from "lucide-react";

const files = [
  { name: "index.html", color: "bg-orange-400/70" },
  { name: "styles.css", color: "bg-sky-400/70" },
  { name: "script.js", color: "bg-yellow-400/70" },
  { name: "assets/", color: "bg-text-muted/40" },
];

export default function ZipVisual() {
  return (
    <div className="rounded-xl border border-border bg-surface p-3 shadow-xl shadow-black/30 sm:p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Archive size={15} />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-text">
              snap2code-project.zip
            </p>
            <p className="text-[11px] text-text-muted">4 files · 1.2 MB</p>
          </div>
        </div>

        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[11px] font-medium text-success">
          <Check size={12} strokeWidth={3} />
          Downloaded
        </span>
      </div>

      {/* File list */}
      <div className="mt-3 flex flex-col gap-1">
        {files.map((file) => (
          <div
            key={file.name}
            className="flex items-center gap-2 rounded-md border border-border/70 bg-card px-2.5 py-1.5"
          >
            <span className={`h-2 w-2 shrink-0 rounded-[3px] ${file.color}`} />
            <span className="truncate font-mono text-[11px] text-text-secondary">
              {file.name}
            </span>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-3">
        <div className="flex items-center justify-between pb-1 text-[10px] text-text-muted">
          <span className="font-medium uppercase tracking-widest">Download</span>
          <span className="tabular-nums">100%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>
      </div>
    </div>
  );
}
