/**
 * AppScreenshot
 * -------------
 * Frames a real app screenshot in an on-brand device-like container.
 *
 * - `phone` (default): a slim phone bezel, works great for portrait app screens.
 * - `wide`: a card frame with no bezel — used for city views and wide layouts.
 *
 * All screenshots are 1024×1024 so `aspect-square` is used internally.
 * Pass `className` for layout overrides (width, margin, etc.) from the parent.
 */

interface AppScreenshotProps {
  src: string;
  alt: string;
  /** Gold or green glow tint — matches the surrounding section accent. */
  accent?: 'gold' | 'green';
  /** Wider card frame (no phone chrome), good for city/map views. */
  wide?: boolean;
  className?: string;
  /** Lazy-load for below-fold images (default true). */
  lazy?: boolean;
}

export default function AppScreenshot({
  src,
  alt,
  accent = 'gold',
  wide = false,
  className = '',
  lazy = true,
}: AppScreenshotProps) {
  const glowColor =
    accent === 'gold' ? 'rgba(212,175,55,0.18)' : 'rgba(52,211,153,0.15)';
  const ringColor =
    accent === 'gold' ? 'ring-gold-400/25' : 'ring-green-400/25';

  if (wide) {
    return (
      <div className={`relative mx-auto w-full ${className}`}>
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -inset-4 rounded-3xl blur-2xl opacity-60"
          style={{ background: `radial-gradient(ellipse at center, ${glowColor} 0%, transparent 70%)` }}
        />
        {/* Card frame */}
        <div
          className={`relative rounded-3xl bg-green-1000/80 p-2 ring-1 ${ringColor} shadow-[0_30px_70px_rgba(0,0,0,0.5)]`}
        >
          <img
            src={src}
            alt={alt}
            loading={lazy ? 'lazy' : 'eager'}
            decoding="async"
            className="w-full rounded-[1.4rem] object-cover aspect-square"
          />
        </div>
      </div>
    );
  }

  // Phone frame
  return (
    <div className={`relative mx-auto w-full max-w-[280px] ${className}`}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-full blur-2xl opacity-50"
        style={{ background: `radial-gradient(ellipse at 70% 30%, ${glowColor} 0%, transparent 70%)` }}
      />
      {/* Phone outer bezel */}
      <div
        className={`relative rounded-[2.5rem] bg-green-1000/90 p-2.5 ring-1 ${ringColor} shadow-[0_30px_60px_rgba(0,0,0,0.5)]`}
      >
        {/* Notch bar */}
        <div className="flex justify-center pb-1 pt-0.5">
          <div className="h-1 w-10 rounded-full bg-white/15" />
        </div>
        {/* Screen area */}
        <div className="overflow-hidden rounded-[2rem] bg-black/20">
          <img
            src={src}
            alt={alt}
            loading={lazy ? 'lazy' : 'eager'}
            decoding="async"
            className="w-full object-cover aspect-square"
          />
        </div>
        {/* Home indicator */}
        <div className="flex justify-center pt-1.5 pb-0.5">
          <div className="h-1 w-8 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}
