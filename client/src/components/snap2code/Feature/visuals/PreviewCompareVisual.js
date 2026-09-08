// Browser preview visual for "Live Preview": a window chrome with two tabs and a
// split comparison — "Your Design" (screenshot) vs "Generated" (live rendering).

function MockScreen() {
  return (
    <div className="flex h-full w-full flex-col gap-2 overflow-hidden rounded-lg border border-border bg-background p-2.5">
      {/* Browser dot nav */}
      <div className="flex items-center gap-1.5 px-0.5">
        <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/20" />
      </div>
      {/* Mock hero line */}
      <div className="h-6 rounded-md bg-gradient-to-r from-primary/40 to-accent/30" />
      <div className="h-2 w-3/4 rounded-full bg-white/10" />
      <div className="h-2 w-1/2 rounded-full bg-white/10" />
      {/* Mock button + card row */}
      <div className="flex items-center gap-2">
        <div className="h-5 w-16 rounded-md bg-primary/40" />
        <div className="h-5 w-16 rounded-md border border-border bg-white/5" />
      </div>
      <div className="mt-auto grid grid-cols-3 gap-1.5">
        <div className="h-8 rounded-md bg-card" />
        <div className="h-8 rounded-md bg-card" />
        <div className="h-8 rounded-md bg-card" />
      </div>
    </div>
  );
}

export default function PreviewCompareVisual() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-xl shadow-black/30">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <div className="ml-3 flex min-w-0 flex-1 items-center gap-2 rounded-md bg-surface px-3 py-1.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
          <span className="truncate font-mono text-[11px] text-text-muted">
            localhost:3000/preview
          </span>
        </div>
      </div>

      {/* Split compare */}
      <div className="grid grid-cols-2 divide-x divide-border">
        <div className="p-3 sm:p-4">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-text-muted/40" />
            <span className="text-[10px] font-medium uppercase tracking-widest text-text-muted">
              Your Design
            </span>
          </div>
          <MockScreen />
        </div>
        <div className="p-3 sm:p-4">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            <span className="text-[10px] font-medium uppercase tracking-widest text-success">
              Generated
            </span>
          </div>
          <MockScreen />
        </div>
      </div>
    </div>
  );
}
