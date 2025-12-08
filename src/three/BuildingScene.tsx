import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { RotatingCluster } from "./RotatingCluster";

export function BuildingScene() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-brand-100 shadow-soft">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.9, 5.2], fov: 38 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#ffffff"]} />

        <ambientLight intensity={0.7} />
        <directionalLight position={[6, 8, 4]} intensity={1.2} />
        <directionalLight position={[-5, 4, -2]} intensity={0.5} />

        <RotatingCluster />

        <Environment preset="city" />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          target={[0, 0.9, 0]}
          minPolarAngle={Math.PI / 3.1}
          maxPolarAngle={Math.PI / 2.05}
          autoRotate
          autoRotateSpeed={0.7}
        />
      </Canvas>

      <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium text-brand-800 backdrop-blur">
        3D preview (drag to rotate)
      </div>
    </div>
  );
}
