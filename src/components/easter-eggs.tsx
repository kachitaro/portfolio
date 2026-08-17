'use client';

import React, { useEffect } from 'react';
import { NyanCat } from '@/components/nyan-cat';

export function EasterEggs() {
  useEffect(() => {
    console.log(
      '%c🐱 Meow! Nhấn phím "N" trên bàn phím để kích hoạt hiệu ứng bí mật!',
      'color: #38bdf8; font-size: 13px; font-weight: bold; font-family: monospace; background: rgba(14, 165, 233, 0.1); padding: 4px 8px; rounded-lg: 6px;'
    );
  }, []);

  return (
    <>
      <NyanCat />
    </>
  );
}
