'use client';

import * as THREE from 'three';

import { ThreeCanvas, type IScene, type IStageContext } from '@/components/three/three-canvas';
import type { IPalette } from '@/components/three/palette';

function createHeroScene({ renderer, palette, isLowPower, isTablet }: IStageContext): IScene {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
  camera.position.set(0, 0, 8.4);

  const rig = new THREE.Group();
  scene.add(rig);

  const coreGeometry = new THREE.IcosahedronGeometry(1.25, 1);
  const core = new THREE.Mesh(
    coreGeometry,
    new THREE.MeshPhysicalMaterial({
      roughness: 0.28,
      metalness: 0.05,
      clearcoat: 1,
      clearcoatRoughness: 0.2,
      flatShading: true,
    }),
  );
  const cageGeometry = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.75, 1));
  const cage = new THREE.LineSegments(
    cageGeometry,
    new THREE.LineBasicMaterial({ transparent: true, opacity: 0.45 }),
  );
  const ringGeometry = new THREE.TorusGeometry(2.35, 0.014, 8, 128);
  const ring = new THREE.Mesh(
    ringGeometry,
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.5 }),
  );
  ring.rotation.x = Math.PI / 2.4;
  rig.add(core, cage, ring);

  const ambient = new THREE.AmbientLight(0xffffff, 0.7);
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(3, 4, 5);
  const accent = new THREE.PointLight(0xffffff, isLowPower || isTablet ? 0 : 18, 12);
  accent.position.set(-3, -1.5, 3);
  scene.add(ambient, key, accent);

  const applyPalette = (p: IPalette) => {
    (core.material as THREE.MeshPhysicalMaterial).color.copy(p.isDark ? p.brandDeep : p.brandSoft);
    (cage.material as THREE.LineBasicMaterial).color.copy(p.brand);
    (ring.material as THREE.MeshBasicMaterial).color.copy(p.muted);
    accent.color.copy(p.brand);
  };
  applyPalette(palette);

  const damp = THREE.MathUtils.damp;
  let width = 1;
  let height = 1;

  return {
    update({ time, delta, pointer, progress }) {
      // Slow spin and float, then ease towards the pointer and the scroll position.
      core.rotation.y += delta * 0.18;
      core.rotation.x += delta * 0.06;
      cage.rotation.y -= delta * 0.09;
      cage.rotation.z += delta * 0.04;
      ring.rotation.z += delta * 0.12;

      rig.position.y = damp(rig.position.y, Math.sin(time * 0.8) * 0.1 + progress * 1.4, 4, delta);
      rig.position.x = damp(rig.position.x, pointer.x * 0.35, 3, delta);
      rig.rotation.x = damp(rig.rotation.x, -pointer.y * 0.35 + progress * 0.9, 3, delta);
      rig.rotation.y = damp(rig.rotation.y, pointer.x * 0.5, 3, delta);
      camera.position.z = damp(camera.position.z, 8.4 + progress * 1.5, 3, delta);
      accent.position.x = -3 + pointer.x * 2;
      accent.position.y = -1.5 + pointer.y * 2;
    },
    render() {
      renderer.render(scene, camera);
    },
    resize(w, h) {
      width = w;
      height = h;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    },
    setPalette: applyPalette,
    dispose() {
      coreGeometry.dispose();
      cageGeometry.dispose();
      ringGeometry.dispose();
      (core.material as THREE.Material).dispose();
      (cage.material as THREE.Material).dispose();
      (ring.material as THREE.Material).dispose();
    },
  };
}

/** The static look when WebGL is missing: the same three shapes, flat. */
function HeroFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center" aria-hidden>
      <div className="border-brand-6 flex h-3/5 w-3/5 items-center justify-center rounded-full border">
        <div className="bg-brand-4 h-2/5 w-2/5 rotate-45 rounded-md" />
      </div>
    </div>
  );
}

export default function HeroScene({ className }: { className?: string }) {
  return <ThreeCanvas className={className} init={createHeroScene} fallback={<HeroFallback />} />;
}
