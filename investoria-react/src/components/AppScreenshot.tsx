/**
 * AppScreenshot
 * -------------
 * Shows a real app screenshot directly — no decorative phone bezel.
 * The screenshots already have phone chrome (status bars, nav bars) baked in,
 * so the only styling applied is rounded corners, a soft shadow, and an
 * accent glow. The image is the star.
 *
 * All screenshots are 1024×1024 so `aspect-square` is used internally.
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
    accent === 'gold' ? 'rgba(212,175,55,0.20)' : 'rgba(52,211,153,0.18)';

  return (
    <div className={`relative mx-auto w-full max-w-[440px] ${className}`}>
      {/* Soft ambient glow — stays behind the image */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-3xl blur-3xl opacity-50"
        style={{
          background: `radial-gradient(ellipse at 60% 40%, ${glowColor} 0%, transparent 65%)`,
        }}
      />
      <img
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        className="relative w-full aspect-square rounded-2xl object-cover shadow-[0_24px_56px_rgba(0,0,0,0.45)]"
      />
    </div>
  );
}
