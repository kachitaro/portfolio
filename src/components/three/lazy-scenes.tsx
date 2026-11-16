'use client';

import dynamic from 'next/dynamic';

// Three.js reads window and WebGL, so none of this renders on the server.
export const HeroScene = dynamic(() => import('@/components/three/hero-scene'), { ssr: false });
export const ParticleField = dynamic(() => import('@/components/three/particle-field'), {
  ssr: false,
});
export const TimelineScene = dynamic(() => import('@/components/three/timeline-scene'), {
  ssr: false,
});
export const SkillsScene = dynamic(() => import('@/components/three/skills-scene'), { ssr: false });
