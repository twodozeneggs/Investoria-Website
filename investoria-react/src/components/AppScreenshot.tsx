import { useState } from 'react';
import Lightbox from './Lightbox';

interface AppScreenshotProps {
  src: string;
  alt: string;
  accent?: 'gold' | 'green'; // kept for API compatibility
  className?: string;
  lazy?: boolean;
}

export default function AppScreenshot({
  src,
  alt,
  className = '',
  lazy = true,
}: AppScreenshotProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        onClick={() => setOpen(true)}
        className={`block w-full max-w-[460px] mx-auto aspect-square object-cover cursor-zoom-in ${className}`}
      />
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
