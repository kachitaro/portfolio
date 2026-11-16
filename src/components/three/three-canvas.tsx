'use client';

import React from 'react';

import * as THREE from 'three';

import { readPalette, type IPalette } from '@/components/three/palette';
import { useMotionPreference } from '@/hooks/use-motion-preference';
import { cn } from '@/lib/utils';

export interface IFrame {
  /** Seconds since the scene started. */
  time: number;
  delta: number;
  /** Pointer in -1..1 relative to the canvas centre (0 when the pointer has not moved). */
  pointer: { x: number; y: number };
  /** Pointer in CSS pixels inside the canvas, or null when it is outside. */
  local: { x: number; y: number } | null;
  /** 0..1 progress of the canvas through the viewport (0 entering at the bottom, 1 leaving at the top). */
  progress: number;
  /** window.scrollY */
  scrollY: number;
  /** Canvas box in the viewport. */
  rectTop: number;
  rectHeight: number;
}

export interface IStageContext {
  renderer: THREE.WebGLRenderer;
  canvas: HTMLCanvasElement;
  palette: IPalette;
  /** True on phones, small tablets and low-memory or low-core devices. */
  isLowPower: boolean;
  /** 768-1023px: full scenes, but lighter (fewer particles, no extra lights, DPR capped). */
  isTablet: boolean;
  isReducedMotion: boolean;
  showTip: (text: string | null, x?: number, y?: number) => void;
}

export interface IScene {
  /** Called on every frame while the canvas is on screen; also once for a static render. */
  update: (frame: IFrame) => void;
  render: () => void;
  resize: (width: number, height: number) => void;
  /** Called when the accent colour or light/dark theme changes. */
  setPalette?: (palette: IPalette) => void;
  dispose: () => void;
}

interface IThreeCanvasProps {
  init: (ctx: IStageContext) => IScene;
  className?: string;
  /** The canvas takes pointer events (hover); otherwise clicks pass through to the page. */
  interactive?: boolean;
  /** Pixel-ratio ceiling. */
  maxDpr?: number;
  /** Called once the renderer and scene exist (WebGL works). */
  onReady?: () => void;
  /** Called when WebGL cannot start or the context is lost. */
  onUnavailable?: () => void;
  /** Rendered instead of the canvas when WebGL is unavailable. */
  fallback?: React.ReactNode;
  /** Pointer is tracked on the whole window (parallax) instead of only over the canvas. */
  trackWindow?: boolean;
}

let isWebglSupported: boolean | null = null;

/** Probes on a throwaway canvas so a missing GPU never reaches three.js, which would log an error. */
function supportsWebGL() {
  if (isWebglSupported === null) {
    const probe = document.createElement('canvas');
    const gl = probe.getContext('webgl2') ?? probe.getContext('webgl');
    isWebglSupported = gl !== null;
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
  }
  return isWebglSupported;
}

function detectLowPower() {
  const nav = navigator as Navigator & { deviceMemory?: number };
  return (
    window.matchMedia('(max-width: 767px)').matches ||
    (nav.hardwareConcurrency ?? 8) <= 4 ||
    (nav.deviceMemory ?? 8) <= 4
  );
}

/**
 * One WebGL renderer per canvas, with everything a scene needs around it: resize, pause while off
 * screen or in a hidden tab, a single static frame for reduced motion, pointer and scroll input,
 * theme changes, and full disposal on unmount.
 */
export function ThreeCanvas({
  init,
  className,
  interactive,
  maxDpr = 2,
  fallback,
  trackWindow = true,
  onReady,
  onUnavailable,
}: IThreeCanvasProps) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const tipRef = React.useRef<HTMLDivElement>(null);
  const [isUnavailable, setUnavailable] = React.useState(
    () => typeof document !== 'undefined' && !supportsWebGL(),
  );
  const { isReducedMotion } = useMotionPreference();
  // Latest props, read by the long-lived effect below without restarting the renderer.
  const initRef = React.useRef(init);
  const readyRef = React.useRef(onReady);
  const unavailableRef = React.useRef(onUnavailable);
  React.useEffect(() => {
    initRef.current = init;
    readyRef.current = onReady;
    unavailableRef.current = onUnavailable;
  });

  React.useEffect(() => {
    if (isUnavailable) {
      unavailableRef.current?.();
      return;
    }
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) {
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      // WebGL can only be probed by creating the renderer, so this runs inside the effect.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUnavailable(true);
      unavailableRef.current?.();
      return;
    }

    const isLowPower = detectLowPower();
    const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches;
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, isLowPower || isTablet ? 1.5 : maxDpr),
    );
    renderer.setClearColor(0x000000, 0);

    const showTip = (text: string | null, x = 0, y = 0) => {
      const tip = tipRef.current;
      if (!tip) {
        return;
      }
      if (!text) {
        tip.style.opacity = '0';
        return;
      }
      tip.textContent = text;
      tip.style.opacity = '1';
      tip.style.transform = `translate(${Math.round(x + 14)}px, ${Math.round(y + 14)}px)`;
    };

    const scene = initRef.current({
      renderer,
      canvas,
      palette: readPalette(),
      isLowPower,
      isTablet,
      isReducedMotion,
      showTip,
    });

    readyRef.current?.();
    const pointer = { x: 0, y: 0 };
    let local: { x: number; y: number } | null = null;
    let isVisible = false;
    let isTabVisible = !document.hidden;
    let rafId = 0;
    let last = performance.now();
    let elapsed = 0;
    let rect = wrap.getBoundingClientRect();

    const frame = (delta: number): IFrame => {
      rect = wrap.getBoundingClientRect();
      const view = window.innerHeight;
      const progress = THREE.MathUtils.clamp((view - rect.top) / (view + rect.height), 0, 1);
      return {
        time: elapsed,
        delta,
        pointer,
        local,
        progress,
        scrollY: window.scrollY,
        rectTop: rect.top,
        rectHeight: rect.height,
      };
    };

    const draw = (delta: number) => {
      scene.update(frame(delta));
      scene.render();
    };

    const loop = (now: number) => {
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;
      elapsed += delta;
      draw(delta);
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (isReducedMotion || rafId || !isVisible || !isTabVisible) {
        return;
      }
      last = performance.now();
      rafId = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
    };
    // With reduced motion there is no loop: redraw only when something changed.
    const redraw = () => {
      if (isReducedMotion && isVisible) {
        draw(0);
      }
    };

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = wrap;
      if (w === 0 || h === 0) {
        return;
      }
      renderer.setSize(w, h, false);
      scene.resize(w, h);
      redraw();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrap);
    resize();

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          start();
          redraw();
        } else {
          stop();
        }
      },
      { rootMargin: '80px' },
    );
    visibilityObserver.observe(wrap);

    const onVisibility = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        start();
      } else {
        stop();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    // Touch has no hover: a tap on an interactive canvas acts as a short hover.
    let tapTimer = 0;
    const onTap = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') {
        return;
      }
      rect = wrap.getBoundingClientRect();
      local = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      redraw();
      window.clearTimeout(tapTimer);
      tapTimer = window.setTimeout(() => {
        local = null;
        showTip(null);
        redraw();
      }, 2200);
    };
    if (interactive) {
      wrap.addEventListener('pointerdown', onTap, { passive: true });
    }

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') {
        return;
      }
      rect = wrap.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      local = isInside ? { x: event.clientX - rect.left, y: event.clientY - rect.top } : null;
      if (!isInside) {
        showTip(null);
      }
      redraw();
    };
    const target: Window | HTMLElement = trackWindow ? window : wrap;
    target.addEventListener('pointermove', onMove as EventListener, { passive: true });

    const onTheme = () => {
      scene.setPalette?.(readPalette());
      redraw();
    };
    const themeObserver = new MutationObserver(onTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-accent'],
    });

    const onContextLost = (event: Event) => {
      event.preventDefault();
      stop();
      setUnavailable(true);
      unavailableRef.current?.();
    };
    canvas.addEventListener('webglcontextlost', onContextLost);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      target.removeEventListener('pointermove', onMove as EventListener);
      wrap.removeEventListener('pointerdown', onTap);
      window.clearTimeout(tapTimer);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      scene.dispose();
      renderer.dispose();
    };
  }, [isReducedMotion, maxDpr, trackWindow, isUnavailable, interactive]);

  if (isUnavailable) {
    return <>{fallback ?? null}</>;
  }

  return (
    <div ref={wrapRef} className={cn('three-fade relative', className)} aria-hidden>
      <canvas
        ref={canvasRef}
        className={cn(
          'block h-full w-full',
          interactive ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      />
      <div
        ref={tipRef}
        className="bg-neutral-12 text-neutral-1 pointer-events-none absolute top-0 left-0 z-10 rounded-md px-2.5 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity duration-150"
      />
    </div>
  );
}
