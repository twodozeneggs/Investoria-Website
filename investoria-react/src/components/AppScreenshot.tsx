/**
 * AppScreenshot — renders a real app screenshot with no decorative wrapper.
 * All screenshots are 1024×1024 with phone chrome baked in.
 * The only polish: rounded corners + drop shadow.
 */
interface AppScreenshotProps {
  src: string;
  alt: string;
  accent?: 'gold' | 'green'; // kept for API compatibility, unused visually
  className?: string;
  lazy?: boolean;
}

export default function AppScreenshot({
  src,
  alt,
  className = '',
  lazy = true,
}: AppScreenshotProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      className={`block w-full max-w-[460px] mx-auto aspect-square rounded-2xl object-cover shadow-[0_20px_48px_rgba(0,0,0,0.38)] ${className}`}
    />
  );
}
