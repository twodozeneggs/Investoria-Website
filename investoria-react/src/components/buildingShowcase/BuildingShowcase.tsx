import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import BuildingMarqueeRow from './BuildingMarqueeRow';
import BuildingDetailModal from './BuildingDetailModal';
import { rowBuildings } from './buildingShowcaseData';
import type { ShowcaseBuilding } from './buildingShowcaseData';

const ROWS: { direction: 'left' | 'right'; durationSec: number; startOffsetSec: number; row: 1 | 2 | 3 }[] = [
  { row: 1, direction: 'right', durationSec: 72,  startOffsetSec: 24  }, // ~33% in
  { row: 2, direction: 'left',  durationSec: 82,  startOffsetSec: 55  }, // ~67% in
  { row: 3, direction: 'right', durationSec: 64,  startOffsetSec: 12  }, // ~19% in
];

export default function BuildingShowcase() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const reducedMotion = useReducedMotion();
  const [selected, setSelected] = useState<ShowcaseBuilding | null>(null);

  return (
    <section
      id="buildings"
      ref={ref}
      className={`relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* subtle band for separation, matching neighboring sections */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 2xl:max-w-7xl 2xl:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-cinzel text-3xl font-bold text-gold-400 sm:text-4xl">
            Meet the buildings that bring your portfolio to life
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-investoria-muted">
            Every building has a role. Some reflect what you own, some teach a
            market idea, and some help your city feel alive.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-investoria-muted/70">
            {reducedMotion
              ? 'Browse the buildings below and select any one to see how it works.'
              : 'Watch them drift by, then select any building to see how it works.'}
          </p>
        </div>
      </div>

      {/* Full-bleed masked parade */}
      <div className="relative overflow-hidden">
        {/* Edge fades for a polished, contained feel */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-green-900 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-green-900 to-transparent sm:w-28" />

        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-2 sm:gap-3">
          {ROWS.map(({ row, direction, durationSec, startOffsetSec }) => (
            <BuildingMarqueeRow
              key={row}
              buildings={rowBuildings(row)}
              direction={direction}
              durationSec={durationSec}
              startOffsetSec={startOffsetSec}
              selectedId={selected?.id ?? null}
              onSelect={setSelected}
              paused={selected !== null}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>

      {/* Section microcopy — kept subtle, legally careful. */}
      <div className="relative mx-auto max-w-3xl px-4 pt-10 text-center">
        <p className="text-xs leading-relaxed text-investoria-muted/60">
          Buildings grow through XP, achievements, learning, and consistent play
          — never because a stock price moved. Company-linked examples illustrate
          how holdings appear in your city and do not imply endorsement,
          sponsorship, or partnership.
        </p>
      </div>

      <BuildingDetailModal building={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
