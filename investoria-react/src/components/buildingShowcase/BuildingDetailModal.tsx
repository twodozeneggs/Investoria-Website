import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { ShowcaseBuilding } from './buildingShowcaseData';
import { PULSE_COLORS } from './buildingShowcaseData';

interface BuildingDetailModalProps {
  building: ShowcaseBuilding | null;
  onClose: () => void;
}

function StatChips({ building }: { building: ShowcaseBuilding }) {
  return (
    <div className="flex flex-wrap gap-2">
      {building.statChips.map((chip) => {
        const color = PULSE_COLORS[chip.stat];
        return (
          <span
            key={chip.stat}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: `${color}1f`,
              color,
              boxShadow: `inset 0 0 0 1px ${color}55`,
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            {chip.stat}
            {chip.role === 'secondary' && (
              <span className="font-normal opacity-70">· lighter</span>
            )}
          </span>
        );
      })}
    </div>
  );
}

function Note({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-300/80">
        {label}
      </div>
      <p className="mt-1 text-sm leading-relaxed text-investoria-muted">{children}</p>
    </div>
  );
}

export default function BuildingDetailModal({
  building,
  onClose,
}: BuildingDetailModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const open = building !== null;

  // Lock body scroll, remember focus, and restore it on close.
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Focus the close button once the panel is mounted.
    const id = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(id);
      previouslyFocused.current?.focus?.();
    };
  }, [open]);

  // Esc to close + simple focus trap within the dialog.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!building) return null;

  const showHoldingBadge =
    building.isHoldingLinked && building.associatedSymbol !== null;

  // Rendered through a portal to <body> so the dialog is positioned relative to
  // the viewport — never the showcase section, which carries a `transform`
  // (and would otherwise become the containing block for `position: fixed`).
  return createPortal(
    <div
      className="fixed left-0 right-0 top-0 z-[70] flex h-[100dvh] items-end justify-center px-0 pb-[env(safe-area-inset-bottom)] sm:items-center sm:px-6 sm:pb-6"
      // Safe top offset clears the sticky nav from any scroll position.
      style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 76px)' }}
      aria-hidden={false}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close details"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm animate-fade-in"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="building-modal-title"
        aria-describedby="building-modal-desc"
        className="relative flex max-h-full w-full flex-col overflow-hidden rounded-t-3xl border border-gold-400/20 bg-gradient-to-br from-green-800 via-green-900 to-green-1000 shadow-[0_-20px_60px_rgba(0,0,0,0.5)] animate-fade-in sm:max-w-lg sm:rounded-3xl sm:shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
      >
        {/* Mobile drag-handle affordance */}
        <div className="flex flex-shrink-0 justify-center pt-3 sm:hidden">
          <span className="h-1.5 w-12 rounded-full bg-white/25" />
        </div>

        {/* Close button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-investoria-text/80 outline-none transition-colors hover:bg-black/50 hover:text-investoria-text focus-visible:ring-2 focus-visible:ring-gold-300/80"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-7 pt-4 sm:pt-6 hide-scrollbar">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="relative flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl blur-xl"
                style={{
                  background: `radial-gradient(ellipse at center, ${PULSE_COLORS[building.primaryStat]}44 0%, transparent 70%)`,
                }}
              />
              <img
                src={building.asset}
                alt={building.displayName}
                className="relative h-20 w-20 object-contain"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <div className="min-w-0">
              <h3
                id="building-modal-title"
                className="font-cinzel text-2xl font-bold text-gold-400"
              >
                {building.displayName}
              </h3>
              <div className="mt-1 text-sm font-medium text-investoria-muted">
                {building.typeLabel}
              </div>
              {showHoldingBadge && (
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 px-2.5 py-1 text-xs font-semibold text-gold-300 ring-1 ring-gold-400/30">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
                  </svg>
                  Stock-linked example · {building.associatedSymbol}
                </span>
              )}
            </div>
          </div>

          {/* Lead */}
          <p id="building-modal-desc" className="mt-5 text-base leading-relaxed text-investoria-text">
            {building.shortDescription}
          </p>

          {/* Stat chips */}
          <div className="mt-4">
            <StatChips building={building} />
          </div>

          {/* Detail */}
          <p className="mt-5 text-sm leading-relaxed text-investoria-muted">
            {building.detailDescription}
          </p>

          {/* How it works */}
          <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300/80">
              How it works in Investoria
            </div>
            <ul className="mt-3 space-y-2.5">
              {building.visitorHowItWorks.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-investoria-text">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Meta row */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-investoria-muted ring-1 ring-white/10">
              <span className="text-investoria-text/60">Category:</span> {building.categoryLabel}
            </span>
            {building.marketSegment && (
              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-investoria-muted ring-1 ring-white/10">
                <span className="text-investoria-text/60">Market lens:</span> {building.marketSegment}
              </span>
            )}
            {showHoldingBadge && building.associatedCompanyName && (
              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-investoria-muted ring-1 ring-white/10">
                <span className="text-investoria-text/60">Example company:</span> {building.associatedCompanyName}
              </span>
            )}
          </div>

          {/* Notes */}
          <div className="mt-6 space-y-4">
            <Note label="City Pulse">{building.pulseNote}</Note>
            <Note label="How it progresses">{building.progressionNote}</Note>
            <Note label="What you learn">{building.marketLearningNote}</Note>
          </div>

          {/* Legal-careful microcopy (kept subtle) */}
          {building.isHoldingLinked && (
            <p className="mt-6 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-investoria-muted/60">
              Company-linked examples are used to explain the portfolio-city
              concept and do not imply endorsement, sponsorship, or partnership.
              Nothing here is investment advice or a recommendation to buy any
              security.
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
