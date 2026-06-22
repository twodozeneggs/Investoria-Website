import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { ShowcaseBuilding } from './buildingShowcaseData';
import { PULSE_COLORS } from './buildingShowcaseData';

interface BuildingTileProps {
  building: ShowcaseBuilding;
  isSelected: boolean;
  onSelect: (b: ShowcaseBuilding) => void;
  /** Spacing applied as a trailing margin so the -50% loop stays seamless. */
  gap: number;
  /** Duplicated tiles are hidden from AT and removed from the tab order. */
  duplicate?: boolean;
}

function BuildingTile({
  building,
  isSelected,
  onSelect,
  gap,
  duplicate = false,
}: BuildingTileProps) {
  const glow = PULSE_COLORS[building.primaryStat];

  return (
    <button
      type="button"
      onClick={() => onSelect(building)}
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : 0}
      aria-label={`${building.displayName} — ${building.typeLabel}. View details.`}
      aria-pressed={isSelected}
      style={{ marginRight: gap }}
      className={`group relative flex-shrink-0 rounded-2xl p-3 sm:p-4 outline-none transition-all duration-300 ease-out
        focus-visible:ring-2 focus-visible:ring-gold-300/80
        hover:-translate-y-1.5
        ${
          isSelected
            ? 'bg-gold-400/10 ring-2 ring-gold-400/70 shadow-[0_12px_40px_rgba(241,178,62,0.25)] -translate-y-1.5'
            : 'bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-gold-300/40'
        }`}
    >
      {/* Soft halo keyed to the building's primary Pulse stat */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-2xl blur-2xl transition-opacity duration-500 ${
          isSelected ? 'opacity-60' : 'opacity-0 group-hover:opacity-40'
        }`}
        style={{
          background: `radial-gradient(ellipse at center, ${glow}55 0%, transparent 70%)`,
        }}
      />
      <img
        src={building.asset}
        alt=""
        loading="lazy"
        decoding="async"
        draggable={false}
        className="relative h-20 w-20 select-none object-contain sm:h-28 sm:w-28"
        style={{ imageRendering: 'pixelated' }}
      />
      <span className="relative mt-1.5 block text-center text-xs font-semibold text-investoria-text/90 sm:text-sm">
        {building.displayName}
      </span>
    </button>
  );
}

interface BuildingMarqueeRowProps {
  buildings: ShowcaseBuilding[];
  direction: 'left' | 'right';
  durationSec: number;
  selectedId: string | null;
  onSelect: (b: ShowcaseBuilding) => void;
  /** Globally pause (e.g. while the detail modal is open). */
  paused: boolean;
  reducedMotion: boolean;
}

const GAP = 24;

export default function BuildingMarqueeRow({
  buildings,
  direction,
  durationSec,
  selectedId,
  onSelect,
  paused,
  reducedMotion,
}: BuildingMarqueeRowProps) {
  const [hovered, setHovered] = useState(false);

  // Soften the parade when the row is hovered/focused or globally paused.
  const isPaused = paused || hovered;

  const trackStyle: CSSProperties = reducedMotion
    ? {}
    : {
        animationDuration: `${durationSec}s`,
        animationDirection: direction === 'right' ? 'reverse' : 'normal',
        animationPlayState: isPaused ? 'paused' : 'running',
      };

  const renderCopy = (duplicate: boolean) =>
    buildings.map((b) => (
      <BuildingTile
        key={`${duplicate ? 'dup-' : ''}${b.id}`}
        building={b}
        isSelected={selectedId === b.id}
        onSelect={onSelect}
        gap={GAP}
        duplicate={duplicate}
      />
    ));

  return (
    <div
      className={`relative ${reducedMotion ? 'overflow-x-auto hide-scrollbar' : 'overflow-hidden'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
    >
      <div
        className={reducedMotion ? 'flex w-max py-3' : 'building-marquee-track flex w-max py-3'}
        style={trackStyle}
      >
        {renderCopy(false)}
        {/* Duplicate set creates the seamless loop; hidden from assistive tech. */}
        {!reducedMotion && renderCopy(true)}
      </div>
    </div>
  );
}
