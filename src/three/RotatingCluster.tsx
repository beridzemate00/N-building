import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

type RotatingClusterProps = { scale?: number };

export function RotatingCluster({ scale = 1 }: RotatingClusterProps) {
  const group = useRef<THREE.Group | null>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.18;
  });

  const towers = useMemo(
    () =>
      Array.from({ length: 7 }).map((_, i) => ({
        id: i,
        h: 1.3 + i * 0.33,
        w: 0.75 + (i % 3) * 0.12,
        d: 0.75 + ((i + 1) % 3) * 0.12,
        x: -1.5 + i * 0.5,
        z: i % 2 === 0 ? -0.32 : 0.32,
        r: 0.09,
      })),
    []
  );

  return (
    <group
      ref={group}
      position={[0, -0.05, 0]}
      scale={[scale, scale, scale]}
    >
      <Float speed={1.0} rotationIntensity={0.15} floatIntensity={0.12}>
        {towers.map((t) => (
          <RoundedBox
            key={t.id}
            args={[t.w, t.h, t.d]}
            radius={t.r}
            smoothness={10}
            position={[t.x, t.h / 2, t.z]}
          >
            <meshStandardMaterial
              color={t.id % 2 === 0 ? "#ffffff" : "#ECF3FF"}
              metalness={0.08}
              roughness={0.32}
            />
          </RoundedBox>
        ))}
      </Float>
    </group>
  );
}
