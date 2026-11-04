'use client';

import { useLanguage } from '@/context/language-context';
import { Check, X } from 'lucide-react';
import type React from 'react';

const ROWS = 10;
const COLUMNS = ['A', 'B', 'C', 'D'] as const;
// Sample data only: invented seat states for the illustration.
const TAKEN = [
  '1A',
  '1B',
  '2C',
  '3A',
  '3B',
  '3D',
  '5A',
  '5D',
  '6B',
  '6C',
  '7A',
  '8D',
  '9B',
  '9C',
  '10A',
];
const SELECTED = ['4C', '4D'];

type TSeatState = 'available' | 'taken' | 'selected';

function stateOf(id: string): TSeatState {
  if (SELECTED.includes(id)) {
    return 'selected';
  }
  return TAKEN.includes(id) ? 'taken' : 'available';
}

const seatClass: Record<TSeatState, string> = {
  available: 'border border-input bg-card text-foreground',
  taken: 'bg-muted text-muted-foreground',
  selected: 'bg-primary text-primary-foreground',
};

const seatGlyph: Record<TSeatState, React.ReactNode> = {
  available: null,
  taken: <X aria-hidden="true" className="size-4" />,
  selected: <Check aria-hidden="true" className="size-4" />,
};

function Seat({ id }: { id: string }) {
  const state = stateOf(id);
  return (
    <div
      className={`text-data flex size-9 items-center justify-center rounded-sm sm:size-11 ${seatClass[state]}`}>
      {seatGlyph[state] ?? id}
    </div>
  );
}

/**
 * Illustration of the seat-selection step. Drawn from sample data: it is not a screenshot
 * of any real product. The whole figure is one labelled image for assistive tech.
 */
export function SeatMapMockup() {
  const { t } = useLanguage();

  const legend: { state: TSeatState; label: string }[] = [
    { state: 'available', label: t('Còn trống', 'Available') },
    { state: 'taken', label: t('Đã đặt', 'Taken') },
    { state: 'selected', label: t('Đang chọn', 'Selected') },
  ];

  return (
    <div
      data-ui
      role="img"
      aria-label={t(
        'Minh họa bước chọn ghế: sơ đồ 10 hàng, 4 ghế mỗi hàng, 2 ghế 4C và 4D đang được chọn.',
        'Illustration of the seat selection step: a 10-row, 4-seat layout with seats 4C and 4D selected.',
      )}
      className="bg-card text-card-foreground border-border grid w-full max-w-3xl gap-6 border p-4 sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-8">
      <div aria-hidden="true" className="flex flex-col items-center gap-3">
        <p className="text-data text-muted-foreground self-start">
          {t('Sài Gòn → Đà Lạt · 08:00 (mẫu)', 'Saigon → Da Lat · 08:00 (sample)')}
        </p>
        <div className="grid grid-cols-[repeat(2,auto)_1.25rem_repeat(2,auto)] items-center gap-1.5 sm:gap-2">
          {Array.from({ length: ROWS }, (_, row) =>
            [
              ...COLUMNS.slice(0, 2).map((c) => `${row + 1}${c}`),
              'aisle',
              ...COLUMNS.slice(2).map((c) => `${row + 1}${c}`),
            ].map((id, i) =>
              id === 'aisle' ? <span key={`${row}-${i}`} /> : <Seat key={id} id={id} />,
            ),
          )}
        </div>
      </div>

      <div aria-hidden="true" className="flex flex-col justify-between gap-6">
        <ul className="flex flex-col gap-3">
          {legend.map(({ state, label }) => (
            <li key={state} className="text-body flex items-center gap-3">
              <span
                className={`text-data flex size-7 items-center justify-center rounded-sm ${seatClass[state]}`}>
                {seatGlyph[state]}
              </span>
              {label}
            </li>
          ))}
        </ul>

        <div>
          <p className="text-data text-muted-foreground">{t('Ghế đã chọn', 'Selected seats')}</p>
          <p className="text-lead font-medium">{SELECTED.join(', ')}</p>
          <div className="bg-primary text-primary-foreground text-body mt-4 flex min-h-12 items-center justify-center rounded-md px-6 font-medium">
            {t('Tiếp tục', 'Continue')}
          </div>
        </div>
      </div>
    </div>
  );
}
