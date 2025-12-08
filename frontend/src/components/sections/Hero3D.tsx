import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { useI18n } from "../../i18n/I18nContext";

function RenovationBlocks() {
  // Simple procedural block scene — lightweight and fast.
  const blocks = useMemo(() => {
    const arr: { x: number; z: number; h: number; w: number; d: number }[] = [];
    const grid = [-2, -1, 0, 1, 2];

    for (const gx of grid) {
      for (const gz of grid) {
        const w = 0.55 + Math.random() * 0.35;
        const d = 0.55 + Math.random() * 0.35;
        const h = 0.6 + Math.random() * 1.2;
        arr.push({ x: gx * 0.8, z: gz * 0.8, h, w, d });
      }
    }

    // Central accent cluster hinting at an "N" form
    arr.push({ x: -0.25, z: 0, h: 2.2, w: 0.5, d: 0.5 });
    arr.push({ x: 0.25, z: 0, h: 2.2, w: 0.5, d: 0.5 });
    arr.push({ x: 0, z: 0.25, h: 1.6, w: 0.5, d: 0.5 });

    return arr;
  }, []);

  return (
    <group>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f7faff" />
      </mesh>

      {blocks.map((b, i) => (
        <Float key={i} speed={1.2} rotationIntensity={0.08} floatIntensity={0.12}>
          <mesh position={[b.x, b.h / 2, b.z]}>
            <boxGeometry args={[b.w, b.h, b.d]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? "#ffffff" : i % 3 === 1 ? "#eef4ff" : "#e8f0ff"}
            />
          </mesh>
        </Float>
      ))}

      {/* Accent beams */}
      <mesh position={[0, 0.08, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[3.2, 0.05, 0.12]} />
        <meshStandardMaterial color="#3b7bff" />
      </mesh>
      <mesh position={[0, 0.14, 0]} rotation={[0, -Math.PI / 4, 0]}>
        <boxGeometry args={[3.2, 0.05, 0.12]} />
        <meshStandardMaterial color="#1f5de6" />
      </mesh>
    </group>
  );
}

export const Hero3D: React.FC = () => {
  const { t } = useI18n();
  const cards = t<[string, string][]>("hero.cards", []);

  return (
    <section className="gradient-bg">
      <Container className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-brand-100 text-brand-700 px-3 py-1 text-xs font-semibold"
            >
              {t<string>("hero.pill")}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900"
            >
              {t<string>("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 text-slate-600 max-w-xl"
            >
              {t<string>("hero.text")}
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#services"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-soft bg-brand-600 text-white hover:bg-brand-700 transition"
              >
                {t<string>("buttons.viewServices")}
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 transition"
              >
                {t<string>("buttons.requestQuote")}
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {cards.map(([title, sub]) => (
                <div key={title} className="rounded-2xl border border-slate-100 bg-white p-3 shadow-soft">
                  <div className="text-sm font-semibold text-slate-900">{title}</div>
                  <div className="text-xs text-slate-500">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand-500/5 blur-2xl" />
            <div className="relative h-[320px] md:h-[420px] rounded-3xl border border-slate-100 bg-white shadow-soft overflow-hidden">
              <Canvas camera={{ position: [3.2, 2.4, 3.2], fov: 40 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 8, 5]} intensity={1.1} />
                <Suspense fallback={null}>
                  <Environment preset="city" />
                  <RenovationBlocks />
                </Suspense>
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  minPolarAngle={Math.PI / 3.6}
                  maxPolarAngle={Math.PI / 2.1}
                  autoRotate
                  autoRotateSpeed={0.6}
                />
              </Canvas>

              <div className="absolute bottom-3 left-3 right-3 glass rounded-2xl border border-slate-100 px-4 py-3">
                <div className="text-xs text-slate-500">
                  {t<string>("hero.mini.label")}
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {t<string>("hero.mini.title")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="h-px section-divider" />
    </section>
  );
};
