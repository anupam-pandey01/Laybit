// Small "code editor" visual: a window chrome + syntax-highlighted sample.
// Pure presentational.

const code = [
  [
    { t: "<div", c: "text-primary" },
    { t: ' class="', c: "text-text-muted" },
    { t: "card", c: "text-sky-400" },
    { t: '">', c: "text-text-muted" },
  ],
  [
    { t: "  <h1", c: "text-primary" },
    { t: ">", c: "text-text-muted" },
    { t: "Welcome", c: "text-text" },
    { t: "</h1>", c: "text-primary" },
  ],
  [
    { t: "  <p", c: "text-primary" },
    { t: ">", c: "text-text-muted" },
    { t: "Clean, semantic markup", c: "text-text" },
    { t: "</p>", c: "text-primary" },
  ],
  [
    { t: "  <button", c: "text-primary" },
    { t: ' class="', c: "text-text-muted" },
    { t: "btn", c: "text-sky-400" },
    { t: '">', c: "text-text-muted" },
    { t: "Get Started", c: "text-text" },
    { t: "</button>", c: "text-primary" },
  ],
  [
    { t: "</div>", c: "text-primary" },
  ],
];

export default function CodeEditorVisual() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-xl shadow-black/30">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 font-mono text-[11px] text-text-muted">
          index.html
        </span>
      </div>

      {/* Code */}
      <div className="overflow-x-auto px-4 py-4 font-mono text-[11px] leading-relaxed sm:text-xs">
        {code.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {line.map((tok, j) => (
              <span key={j} className={tok.c}>
                {tok.t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
