export default function StatusBadge({ status = "Coming Soon" }) {
  const isLive = status === "Live";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
        isLive
          ? "border-success/30 bg-success/10 text-success"
          : "border-border bg-white/5 text-text-muted"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isLive ? "bg-success animate-pulse" : "bg-text-muted"
        }`}
      />
      {status}
    </span>
  );
}
