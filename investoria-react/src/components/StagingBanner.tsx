/**
 * StagingBanner
 * -------------
 * Renders a clear "STAGING / PREVIEW" indicator ONLY when the build was produced
 * with VITE_STAGING="true" (set in netlify.toml for the staging deploy).
 *
 * In the production GitHub Pages build the flag is unset, so this renders nothing
 * and has zero effect on www.buildinvestoria.com.
 *
 * Placed as a fixed bottom bar so it never fights the sticky header.
 */
export default function StagingBanner() {
  if (import.meta.env.VITE_STAGING !== 'true') return null;

  return (
    <div
      role="status"
      aria-label="Staging preview environment"
      className="fixed bottom-0 inset-x-0 z-[60] flex items-center justify-center gap-2 bg-gold-500 text-green-1000 text-xs sm:text-sm font-semibold px-4 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.35)]"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-green-1000 animate-pulse" />
      STAGING PREVIEW — not live. This is a QA build of buildinvestoria.com and is not indexed by search engines.
    </div>
  );
}
