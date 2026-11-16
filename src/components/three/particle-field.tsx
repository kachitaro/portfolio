'use client';

import * as THREE from 'three';

import { ThreeCanvas, type IScene, type IStageContext } from '@/components/three/three-canvas';
import type { IPalette } from '@/components/three/palette';

function circleSprite() {
  const size = 64;
  const canvas = Object.assign(document.createElement('canvas'), { width: size, height: size });
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
    ctx.fill();
  }
  return new THREE.CanvasTexture(canvas);
}

function createParticleScene({ renderer, palette, isLowPower, isTablet }: IStageContext): IScene {
  const count = isLowPower ? 220 : isTablet ? 360 : 650;
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xffffff, 6, 22);
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 60);
  camera.position.z = 10;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const sprite = circleSprite();
  const material = new THREE.PointsMaterial({
    size: 0.09,
    map: sprite,
    transparent: true,
    opacity: 0.6,
    depthWrite: false,
    sizeAttenuation: true,
    fog: true,
  });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  const applyPalette = (p: IPalette) => {
    material.color.copy(p.isDark ? p.brandSoft : p.muted);
    (scene.fog as THREE.Fog).color.copy(p.bg);
  };
  applyPalette(palette);

  const damp = THREE.MathUtils.damp;
  return {
    update({ time, delta, pointer, scrollY }) {
      points.rotation.y += delta * 0.012;
      points.rotation.x = damp(points.rotation.x, -pointer.y * 0.05, 2, delta);
      points.position.x = damp(points.position.x, pointer.x * 0.4, 2, delta);
      points.position.y = scrollY * 0.0025 + Math.sin(time * 0.15) * 0.2;
    },
    render() {
      renderer.render(scene, camera);
    },
    resize(w, h) {
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    },
    setPalette: applyPalette,
    dispose() {
      geometry.dispose();
      material.dispose();
      sprite.dispose();
    },
  };
}

/** Fixed, behind the page; pointer events pass straight through. */
export default function ParticleField() {
  return <ThreeCanvas className="fixed inset-0 -z-10" init={createParticleScene} maxDpr={1.5} />;
}
