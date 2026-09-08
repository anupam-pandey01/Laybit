// History visual for "Conversion History": a small app-like row showing a past
// conversion with the file meta and an "Open" affordance.

import { ChevronRight, Image as ImageIcon } from "lucide-react";

const items = [
  { name: "Landing page", meta: "Today · 9:41 AM", active: true },
  { name: "Pricing table", meta: "Yesterday · 4:12 PM", active: false },
  { name: "Dashboard UI", meta: "Aug 28 · 11:03 AM", active: false },
];

export default function HistoryVisual() {
  return (
    <div className="rounded-xl border border-border bg-surface p-3 shadow-xl shadow-black/30 sm:p-4">
      <div className="flex items-center gap-2 border-b border-border pb-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <ImageIcon size={13} />
        </span>
        <div>
          <p className="text-xs font-medium text-text">Conversion History</p>
          <p className="text-[11px] text-text-muted">3 recent conversions</p>
        </div>
      </div>

      <div className="mt-2.5 flex flex-col gap-1.5">
        {items.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 transition-colors ${
              item.active
                ? "border-primary/30 bg-primary/5"
                : "border-border/70 bg-card"
            }`}
          >
            <div className="flex h-7 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="h-2.5 w-2.5 rounded-[2px] bg-primary/50" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-text">
                {item.name}
              </p>
              <p className="text-[10px] text-text-muted">{item.meta}</p>
            </div>
            {item.active && (
              <span className="ml-auto inline-flex items-center gap-1 rounded-md border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                Open
                <ChevronRight size={10} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
