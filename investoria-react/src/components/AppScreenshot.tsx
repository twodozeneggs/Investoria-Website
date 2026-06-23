/**
 * AppScreenshot
 * -------------
 * Frames a real app screenshot in an on-brand phone-bezel container.
 * All screenshots are 1024×1024 so `aspect-square` is used internally.
 * Pass `className` for layout overrides (width, margin, etc.) from the parent.
 */

interface AppScreenshotProps {
  src: string;
  alt: string;
  /** Gold or green glow tint — matches the surrounding section accent. */
  accent?: 'gold' | 'green';
  className?: string;
  /** Lazy-load for below-fold images (default true). */
  lazy?: boolean;
}

export default function AppScreenshot({
  src,
  alt,
  accent = 'gold',
  className = '',
  lazy = true,
}: AppScreenshotProps) {
  const glowColor =
    accent === 'gold' ? 'rgba(212,175,55,0.18)' : 'rgba(52,211,153,0.15)';
  const ringColor =
    accent === 'gold' ? 'ring-gold-400/25' : 'ring-green-400/25';

  // Phone frame — consistent across all product surface screenshots
  return (
    <div className={`relative mx-auto w-full max-w-[320px] ${className}`}>
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
