'use client';

import React from 'react';

export type MotionPreference = 'on' | 'off' | null;

const STORAGE_KEY = 'kachitaro_motion_pref';
const LISTENERS = new Set<() => void>();

function getRawPreference(): MotionPreference {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'on' || stored === 'off') return stored;
  return null;
}

function getSystemReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function computeReducedMotion(pref: MotionPreference): boolean {
  if (pref === 'on') return true;
  if (pref === 'off') return false;
  return getSystemReducedMotion();
}

let currentPref: MotionPreference = null;

function subscribe(callback: () => void) {
  LISTENERS.add(callback);
  return () => {
    LISTENERS.delete(callback);
  };
}

function getSnapshot(): MotionPreference {
  return currentPref;
}

function getServerSnapshot(): MotionPreference {
  return null;
}

const emptySubscribe = () => () => {};

export function setMotionPreference(pref: MotionPreference) {
  currentPref = pref;
  if (typeof window !== 'undefined') {
    if (pref === null) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, pref);
    }
  }
  LISTENERS.forEach((listener) => listener());
}

export function useMotionPreference(): {
  reducedMotion: boolean;
  preference: MotionPreference;
  ready: boolean;
} {

  const ready = React.useSyncExternalStore(
    emptySubscribe, 
    () => true, 
    () => false 
  );

  const pref = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  React.useEffect(() => {
    currentPref = getRawPreference();
    LISTENERS.forEach((l) => l());

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMediaChange = () => {
      if (currentPref === null) {
        LISTENERS.forEach((l) => l());
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const reducedMotion = ready ? computeReducedMotion(pref) : false;

  return {
    reducedMotion,
    preference: pref,
    ready,
  };
}