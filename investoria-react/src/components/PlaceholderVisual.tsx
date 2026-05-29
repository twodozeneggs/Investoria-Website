/**
 * PlaceholderVisual
 * -----------------
 * A polished, on-brand stand-in for a real app screenshot. Use this anywhere the
 * marketing site references a product surface (Pulse, Explore, City, etc.) but we
 * don't have a final screenshot yet.
 *
 * HOW TO SWAP IN A REAL SCREENSHOT LATER:
 *   Replace <PlaceholderVisual ... /> with an <img src="/your-screenshot.png" .../>
 *   (or drop the image into the `phone` frame). Everything tagged below with
 *   `data-placeholder="..."` is intended to be replaced.
 *
 * This is intentionally NOT an empty broken box — it renders a styled "screen"
 * with a caption so the layout reads as finished while awaiting real art.
 */

interface PlaceholderVisualProps {
  /** Short label shown on the placeholder, e.g. "Pulse dashboard". */
  label: string;
  /** One-line description of what the real screenshot will show. */
  caption?: string;
  /** Render inside a phone frame (true) or a flat panel (false). Default phone. */
  phone?: boolean;
  /** Accent tint key — maps to the brand palette. */
  accent?: 'gold' | 'green';
  className?: string;
  /** Optional decorative children rendered inside the screen (mock UI). */
  children?: React.ReactNode;
}

export default function PlaceholderVisual({
  label,
  caption,
  phone = true,
  accent = 'gold',
  className = '',
  children,
}: PlaceholderVisualProps) {
  const ring = accent === 'gold' ? 'ring-gold-400/25' : 'ring-green-400/25';
  const glow = accent === 'gold' ? 'from-gold-400/15' : 'from-green-500/15';

  const screen = (
    <div
      data-placeholder={label}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-800/40 via-green-900/30 to-green-1000/50 ring-1 ${ring} ${
        phone ? 'aspect-[9/19]' : 'aspect-[4/3]'
      }`}
    >
      {/* soft brand glow */}
      <div className={`pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-radial ${glow} to-transparent blur-2xl`} />

      {/* faint grid texture so the empty area still feels like a "screen" */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* mock content (optional) */}
      {children && <div className="relative h-full w-full p-5">{children}</div>}

      {/* "preview" badge + label, always visible so it's clearly a placeholder */}
      {!children && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold-300 ring-1 ring-gold-400/30">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Screenshot coming
          </span>
          <span className="font-cinzel text-lg font-bold text-gold-400">{label}</span>
          {caption && <span className="mt-2 text-xs leading-relaxed text-investoria-muted/80">{caption}</span>}
        </div>
      )}
    </div>
  );

  if (!phone) {
    return <div className={className}>{screen}</div>;
  }

  // Phone frame
  return (
    <div className={`relative mx-auto w-full max-w-[260px] ${className}`}>
      <div className="rounded-[2.2rem] bg-green-1000/80 p-2.5 ring-1 ring-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
        <div className="rounded-[1.8rem] bg-black/30 p-1.5">
          {screen}
        </div>
      </div>
    </div>
  );
}
