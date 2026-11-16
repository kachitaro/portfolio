'use client';

import * as THREE from 'three';

import { ThreeCanvas, type IScene, type IStageContext } from '@/components/three/three-canvas';
import type { IPalette } from '@/components/three/palette';

interface ITimelineProps {
  /** Marker centres in CSS pixels from the top of the canvas; read every frame (layout can change). */
  getMarkers: () => number[];
  className?: string;
  onReady?: () => void;
  onUnavailable?: () => void;
}

const MARKER_RADIUS = 6;
const ACTIVE_RADIUS = 9;

function createTimelineScene(getMarkers: () => number[]) {
  return ({ renderer, palette }: IStageContext): IScene => {
    const scene = new THREE.Scene();
    // Orthographic in pixel units, so every marker lines up with its HTML entry.
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -50, 50);
    camera.position.z = 10;

    const unit = new THREE.CylinderGeometry(1, 1, 1, 10);
    const track = new THREE.Mesh(unit, new THREE.MeshBasicMaterial());
    const fill = new THREE.Mesh(unit, new THREE.MeshBasicMaterial());
    scene.add(track, fill);

    const solidGeometry = new THREE.IcosahedronGeometry(1, 1);
    const wireGeometry = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1, 1));
    const solidMaterial = new THREE.MeshStandardMaterial({ roughness: 0.4, flatShading: true });
    const wireMaterial = new THREE.LineBasicMaterial();

    interface IMarker {
      group: THREE.Group;
      solid: THREE.Mesh;
      wire: THREE.LineSegments;
      radius: number;
    }
    const markers: IMarker[] = [];
    const ensureMarkers = (n: number) => {
      while (markers.length < n) {
        const group = new THREE.Group();
        const solid = new THREE.Mesh(solidGeometry, solidMaterial);
        const wire = new THREE.LineSegments(wireGeometry, wireMaterial);
        wire.scale.setScalar(1.25);
        group.add(solid, wire);
        scene.add(group);
        markers.push({ group, solid, wire, radius: MARKER_RADIUS });
      }
    };

    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const light = new THREE.DirectionalLight(0xffffff, 2.2);
    light.position.set(4, 6, 8);
    scene.add(light);

    let width = 1;
    let height = 1;

    const applyPalette = (p: IPalette) => {
      (track.material as THREE.MeshBasicMaterial).color.copy(p.line);
      (fill.material as THREE.MeshBasicMaterial).color.copy(p.brand);
      solidMaterial.color.copy(p.brand);
      wireMaterial.color.copy(p.muted);
    };
    applyPalette(palette);

    const damp = THREE.MathUtils.damp;
    let filled = 0;

    return {
      update({ delta, rectTop }) {
        const ys = getMarkers();
        ensureMarkers(ys.length);

        // The line fills to a point 60% down the screen; the marker nearest above it is "active".
        const reach = THREE.MathUtils.clamp(window.innerHeight * 0.6 - rectTop, 0, height);
        filled = damp(filled, reach, 6, delta);

        track.scale.set(1, height, 1);
        track.position.set(0, 0, 0);
        fill.scale.set(1.5, Math.max(filled, 0.001), 1.5);
        fill.position.y = height / 2 - filled / 2;

        let activeIndex = -1;
        ys.forEach((y, i) => {
          if (y <= reach + 24) {
            activeIndex = i;
          }
        });

        markers.forEach((marker, i) => {
          const isUsed = i < ys.length;
          marker.group.visible = isUsed;
          if (!isUsed) {
            return;
          }
          const isActive = i === activeIndex;
          const isPassed = ys[i] <= reach;
          marker.radius = damp(marker.radius, isActive ? ACTIVE_RADIUS : MARKER_RADIUS, 8, delta);
          marker.group.scale.setScalar(marker.radius);
          marker.group.position.set(0, height / 2 - ys[i], 1);
          marker.solid.visible = isPassed;
          marker.group.rotation.y += delta * (isActive ? 0.9 : 0.3);
          marker.group.rotation.x += delta * 0.2;
        });
      },
      render() {
        renderer.render(scene, camera);
      },
      resize(w, h) {
        width = w;
        height = h;
        camera.left = -w / 2;
        camera.right = w / 2;
        camera.top = h / 2;
        camera.bottom = -h / 2;
        camera.updateProjectionMatrix();
      },
      setPalette: applyPalette,
      dispose() {
        unit.dispose();
        solidGeometry.dispose();
        wireGeometry.dispose();
        solidMaterial.dispose();
        wireMaterial.dispose();
        (track.material as THREE.Material).dispose();
        (fill.material as THREE.Material).dispose();
        void width;
      },
    };
  };
}

export default function TimelineScene({
  getMarkers,
  className,
  onReady,
  onUnavailable,
}: ITimelineProps) {
  return (
    <ThreeCanvas
      className={className}
      init={createTimelineScene(getMarkers)}
      onReady={onReady}
      onUnavailable={onUnavailable}
      trackWindow={false}
      maxDpr={2}
    />
  );
}
