// Responsive output visual: three scaled device frames (desktop / tablet /
// mobile) showing the same generated layout adapting to each screen.

function MiniLayout({ compact = false }) {
  return (
    <div className="flex h-full w-full flex-col gap-1.5 overflow-hidden rounded-md bg-background p-1.5">
      <div className="h-1.5 rounded-sm bg-gradient-to-r from-primary/50 to-accent/40" />
      {!compact && <div className="h-1 rounded-sm bg-white/10" />}
      <div className="flex gap-1.5">
        <div className="h-4 flex-1 rounded-sm bg-card" />
        <div className="h-4 flex-1 rounded-sm bg-card" />
      </div>
    </div>
  );
}

export default function ResponsiveVisual() {
  return (
    <div className="flex items-end justify-center gap-3 rounded-xl border border-border bg-surface px-4 pb-4 pt-5 shadow-xl shadow-black/30 sm:gap-5 sm:px-6">
      {/* Desktop */}
      <div className="w-24 sm:w-32">
        <div className="overflow-hidden rounded-t-md border border-b-0 border-border bg-white/5 px-2 pt-2">
          <div className="mb-1.5 h-2 rounded-full bg-card" />
          <MiniLayout />
        </div>
        <p className="mt-1.5 text-center text-[10px] font-medium uppercase tracking-widest text-text-muted">
          Desktop
        </p>
      </div>

      {/* Tablet */}
      <div className="w-16 sm:w-20">
        <div className="overflow-hidden rounded-t-md border border-b-0 border-border bg-white/5 px-2 pt-2">
          <MiniLayout compact />
        </div>
        <p className="mt-1.5 text-center text-[10px] font-medium uppercase tracking-widest text-text-muted">
          Tablet
        </p>
      </div>

      {/* Mobile */}
      <div className="w-10 sm:w-12">
        <div className="mx-auto overflow-hidden rounded-t-md border border-b-0 border-border bg-white/5 px-1.5 pt-1.5">
          <div className="mx-auto mb-1 h-1 w-3 rounded-full bg-card" />
          <MiniLayout compact />
        </div>
        <p className="mt-1.5 text-center text-[10px] font-medium uppercase tracking-widest text-text-muted">
          Mobile
        </p>
      </div>
    </div>
  );
}
