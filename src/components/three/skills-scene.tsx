'use client';

import * as THREE from 'three';

import { ThreeCanvas, type IScene, type IStageContext } from '@/components/three/three-canvas';
import type { IPalette } from '@/components/three/palette';

export interface ISkillGroup {
  name: string;
  items: string[];
}

interface ISkillsProps {
  groups: ISkillGroup[];
  className?: string;
  onUnavailable?: () => void;
}

// One shape per group, so the groups differ even when the colours are close.
const SHAPES = [
  () => new THREE.OctahedronGeometry(0.2),
  () => new THREE.BoxGeometry(0.28, 0.28, 0.28),
  () => new THREE.TetrahedronGeometry(0.27),
  () => new THREE.DodecahedronGeometry(0.2),
];
const RADII = [1.7, 2.35, 3.0, 3.65];
const TILTS = [0.35, -0.25, 0.5, -0.4];
const SPEEDS = [0.22, -0.17, 0.13, -0.1];

export function groupColor(p: IPalette, index: number) {
  return [p.brand, p.ink, p.brandMid, p.muted][index % 4];
}

function createSkillsScene(groups: ISkillGroup[]) {
  return ({ renderer, canvas, palette, showTip }: IStageContext): IScene => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
    camera.position.set(0, 1.2, 11);
    camera.lookAt(0, 0, 0);

    const rig = new THREE.Group();
    scene.add(rig);

    const disposables: { dispose: () => void }[] = [];
    const track = <T extends { dispose: () => void }>(item: T) => {
      disposables.push(item);
      return item;
    };

    // Centre: the person the orbits belong to.
    const coreGeometry = track(new THREE.IcosahedronGeometry(0.8, 1));
    const coreMaterial = track(
      new THREE.MeshPhysicalMaterial({ roughness: 0.3, clearcoat: 1, flatShading: true }),
    );
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    rig.add(core);

    interface IOrbit {
      mesh: THREE.InstancedMesh;
      pivot: THREE.Group;
      radius: number;
      speed: number;
      count: number;
    }
    const orbits: IOrbit[] = [];
    const ringMaterials: THREE.LineBasicMaterial[] = [];

    groups.slice(0, 4).forEach((group, g) => {
      const geometry = track(SHAPES[g]());
      const material = track(
        new THREE.MeshStandardMaterial({ roughness: 0.35, metalness: 0.1, flatShading: true }),
      );
      const mesh = new THREE.InstancedMesh(geometry, material, group.items.length);
      mesh.userData.group = g;

      const pivot = new THREE.Group();
      pivot.rotation.x = TILTS[g];
      pivot.rotation.z = g * 0.4;
      pivot.add(mesh);

      const ringGeometry = track(
        new THREE.BufferGeometry().setFromPoints(
          Array.from({ length: 129 }, (_, i) => {
            const a = (i / 128) * Math.PI * 2;
            return new THREE.Vector3(Math.cos(a) * RADII[g], 0, Math.sin(a) * RADII[g]);
          }),
        ),
      );
      const ringMaterial = track(new THREE.LineBasicMaterial({ transparent: true, opacity: 0.35 }));
      ringMaterials.push(ringMaterial);
      pivot.add(new THREE.Line(ringGeometry, ringMaterial));

      rig.add(pivot);
      orbits.push({ mesh, pivot, radius: RADII[g], speed: SPEEDS[g], count: group.items.length });
    });

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(3, 5, 6);
    scene.add(key);

    const applyPalette = (p: IPalette) => {
      coreMaterial.color.copy(p.isDark ? p.brandDeep : p.brandSoft);
      orbits.forEach((orbit, g) => {
        (orbit.mesh.material as THREE.MeshStandardMaterial).color.copy(groupColor(p, g));
        ringMaterials[g].color.copy(p.muted);
      });
    };
    applyPalette(palette);

    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const position = new THREE.Vector3();
    const scale = new THREE.Vector3();
    const euler = new THREE.Euler();
    const scales = orbits.map((orbit) => new Float32Array(orbit.count).fill(1));
    let width = 1;
    let height = 1;
    let hovered: { g: number; i: number } | null = null;
    const damp = THREE.MathUtils.damp;

    return {
      update({ time, delta, pointer, local }) {
        core.rotation.y += delta * 0.2;
        rig.rotation.y = damp(rig.rotation.y, pointer.x * 0.25, 3, delta);
        rig.rotation.x = damp(rig.rotation.x, -pointer.y * 0.12, 3, delta);

        orbits.forEach((orbit, g) => {
          for (let i = 0; i < orbit.count; i++) {
            const angle = (i / orbit.count) * Math.PI * 2 + time * orbit.speed;
            position.set(Math.cos(angle) * orbit.radius, 0, Math.sin(angle) * orbit.radius);
            euler.set(time * 0.4 + i, time * 0.3, 0);
            quaternion.setFromEuler(euler);
            const isHover = hovered?.g === g && hovered.i === i;
            scales[g][i] = damp(scales[g][i], isHover ? 1.7 : 1, 10, delta);
            scale.setScalar(scales[g][i]);
            matrix.compose(position, quaternion, scale);
            orbit.mesh.setMatrixAt(i, matrix);
          }
          orbit.mesh.instanceMatrix.needsUpdate = true;
          // Raycasting reads the world matrix and the instance bounds.
          orbit.mesh.computeBoundingSphere();
        });
        rig.updateMatrixWorld(true);

        // Hover: ray from the pointer through the camera, nearest instance wins.
        hovered = null;
        if (local && width > 0) {
          ndc.set((local.x / width) * 2 - 1, -(local.y / height) * 2 + 1);
          raycaster.setFromCamera(ndc, camera);
          const hit = raycaster.intersectObjects(
            orbits.map((o) => o.mesh),
            false,
          )[0];
          if (hit && hit.instanceId !== undefined) {
            const g = hit.object.userData.group as number;
            hovered = { g, i: hit.instanceId };
          }
        }
        if (hovered && local) {
          showTip(groups[hovered.g].items[hovered.i], local.x, local.y);
          canvas.style.cursor = 'pointer';
        } else {
          showTip(null);
          canvas.style.cursor = '';
        }
      },
      render() {
        renderer.render(scene, camera);
      },
      resize(w, h) {
        width = w;
        height = h;
        camera.aspect = w / h;
        // Keep the whole system in view on narrow canvases.
        camera.position.z = w < 520 ? 14 : 11;
        camera.updateProjectionMatrix();
      },
      setPalette: applyPalette,
      dispose() {
        disposables.forEach((d) => d.dispose());
        orbits.forEach((o) => o.mesh.dispose());
      },
    };
  };
}

export default function SkillsScene({ groups, className, onUnavailable }: ISkillsProps) {
  return (
    <ThreeCanvas
      className={className}
      init={createSkillsScene(groups)}
      onUnavailable={onUnavailable}
      interactive
      trackWindow={false}
      maxDpr={2}
    />
  );
}
