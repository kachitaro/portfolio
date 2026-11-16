import * as THREE from 'three';

let probe: HTMLElement | null = null;
let ctx2d: CanvasRenderingContext2D | null = null;

/** Resolves a CSS colour token (oklch, p3, var(...)) to a THREE.Color in sRGB. */
export function cssColor(token: string, fallback = '#808080'): THREE.Color {
  if (typeof document === 'undefined') {
    return new THREE.Color(fallback);
  }
  probe ??= Object.assign(document.createElement('span'), { ariaHidden: 'true' });
  probe.style.cssText = `position:fixed;pointer-events:none;opacity:0;color:var(${token}, ${fallback})`;
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  probe.remove();

  ctx2d ??= Object.assign(document.createElement('canvas'), { width: 1, height: 1 }).getContext(
    '2d',
    {
      willReadFrequently: true,
    },
  );
  if (!ctx2d) {
    return new THREE.Color(fallback);
  }
  ctx2d.clearRect(0, 0, 1, 1);
  ctx2d.fillStyle = fallback;
  ctx2d.fillStyle = resolved;
  ctx2d.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx2d.getImageData(0, 0, 1, 1).data;
  return new THREE.Color().setRGB(r / 255, g / 255, b / 255, THREE.SRGBColorSpace);
}

export interface IPalette {
  brand: THREE.Color;
  brandSoft: THREE.Color;
  brandDeep: THREE.Color;
  brandMid: THREE.Color;
  bg: THREE.Color;
  ink: THREE.Color;
  muted: THREE.Color;
  line: THREE.Color;
  isDark: boolean;
}

export function readPalette(): IPalette {
  return {
    brand: cssColor('--brand-9', '#3e63dd'),
    brandSoft: cssColor('--brand-6', '#c1d0ff'),
    brandDeep: cssColor('--brand-11', '#3a5bc7'),
    brandMid: cssColor('--brand-7', '#8da4ef'),
    bg: cssColor('--neutral-1', '#fcfcfd'),
    ink: cssColor('--neutral-12', '#1c2024'),
    muted: cssColor('--neutral-9', '#8b8d98'),
    line: cssColor('--neutral-6', '#d9d9e0'),
    isDark: document.documentElement.classList.contains('dark'),
  };
}
