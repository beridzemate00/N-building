import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { RotatingCluster } from "./RotatingCluster";

type BuildingSceneProps = {
  scale?: number;
};

export function BuildingScene({ scale = 1 }: BuildingSceneProps) {
  return (
    <div className="relative h-full w-full">
      <Canvas camera={{ position: [2.2, 1.6, 3.2], fov: 42 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 8, 4]} intensity={1.0} />

        <RotatingCluster scale={scale} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={0.6}
          maxPolarAngle={1.4}
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
