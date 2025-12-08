import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";

export function RotatingCluster() {
  const group = useRef<any>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.18;
  });

  const towers = useMemo(
    () =>
      Array.from({ length: 7 }).map((_, i) => ({
        id: i,
        h: 1.3 + (i * 0.33) % 1.7,
        w: 0.75 + (i % 3) * 0.12,
        d: 0.75 + ((i + 1) % 3) * 0.12,
        x: -1.5 + i * 0.5,
        z: i % 2 === 0 ? -0.32 : 0.32,
        r: 0.09,
      })),
    []
  );

  return (
    <group ref={group} position={[0, -0.05, 0]} scale={1.15}>
      <Float speed={1.0} rotationIntensity={0.15} floatIntensity={0.12}>
        {/* Towers */}
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

        {/* Base slab */}
        <RoundedBox
          args={[4.2, 0.2, 1.5]}
          radius={0.07}
          smoothness={8}
          position={[0, 0.1, 0]}
        >
          <meshStandardMaterial color="#F7FAFF" roughness={0.55} />
        </RoundedBox>
      </Float>
    </group>
  );
}
