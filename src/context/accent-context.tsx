'use client';

import React from 'react';

export const ACCENTS = [
  { id: 'indigo', gray: 'slate' },
  { id: 'teal', gray: 'sage' },
  { id: 'tomato', gray: 'mauve' },
  { id: 'amber', gray: 'sand' },
  { id: 'violet', gray: 'mauve' },
  { id: 'grass', gray: 'olive' },
] as const;

export type TAccent = (typeof ACCENTS)[number]['id'];

export const DEFAULT_ACCENT: TAccent = 'indigo';
export const ACCENT_STORAGE_KEY = 'kachitaro_accent';
const CHANGE_EVENT = 'accentchange';

function isAccent(value: unknown): value is TAccent {
  return ACCENTS.some((a) => a.id === value);
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

function getSnapshot(): TAccent {
  const current = document.documentElement.dataset.accent;
  return isAccent(current) ? current : DEFAULT_ACCENT;
}

function getServerSnapshot(): TAccent {
  return DEFAULT_ACCENT;
}

let shiftTimer: ReturnType<typeof setTimeout> | undefined;

export function setAccent(next: TAccent) {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion) {
    root.classList.add('accent-shift');
    clearTimeout(shiftTimer);
    shiftTimer = setTimeout(() => root.classList.remove('accent-shift'), 520);
  }

  root.dataset.accent = next;
  try {
    localStorage.setItem(ACCENT_STORAGE_KEY, next);
  } catch {
    // Storage can be unavailable (private mode); the change still applies to this visit.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useAccent() {
  const accent = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const gray = ACCENTS.find((a) => a.id === accent)?.gray ?? 'slate';
  return { accent, gray, setAccent };
}

/** Runs before first paint so a returning visitor never sees the default hue flash. */
export const accentBootScript = `try{var a=localStorage.getItem('${ACCENT_STORAGE_KEY}');if(a&&${JSON.stringify(
  ACCENTS.map((a) => a.id),
)}.indexOf(a)>-1)document.documentElement.dataset.accent=a}catch(e){}`;
