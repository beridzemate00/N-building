import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, ShieldCheck } from "lucide-react";

import { Container } from "../../common/Container";
import { Badge } from "../../common/Badge";
import { BuildingScene } from "../../../three/BuildingScene";
import { StatsStrip } from "./StatsStrip";
import { useI18n } from "../../../i18n/useI18n";

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

export function HeroSection() {
  const { c } = useI18n();

  const [scale, setScale] = useState(1);

  const inc = () =>
    setScale((s) => clamp(Number((s + 0.08).toFixed(2)), 0.8, 1.4));

  const dec = () =>
    setScale((s) => clamp(Number((s - 0.08).toFixed(2)), 0.8, 1.4));

  const reset = () => setScale(1);

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0 },
    }),
    []
  );

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="hero" className="pt-12 md:pt-16">
      <Container>
        {/* ✅ more balanced alignment */}
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.35 }}
            className="pt-2"
          >
            <Badge>{c.brand.locationShort}</Badge>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              {c.hero.headline}{" "}
              <span className="text-brand-600">{c.brand.name}</span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-slate-600">
              {c.hero.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">
                {c.hero.primaryCta}
              </button>

              <button
                onClick={scrollToServices}
                className="rounded-xl border border-brand-100 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-brand-50"
              >
                {c.hero.secondaryCta}
              </button>
            </div>

            {/* ✅ bigger, cleaner stats */}
            <div className="mt-8">
              <StatsStrip />
            </div>
          </motion.div>

          {/* RIGHT - 3D CARD */}
          {/* ✅ pushed down on desktop */}
          <div className="relative md:mt-10">
            {/* ✅ bigger card heights */}
            <div
              className="
                relative overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-soft
                h-[320px] sm:h-[360px] md:h-[430px]
              "
            >
              <BuildingScene scale={scale} />

              {/* ✅ ZOOM CONTROLS */}
              <div className="absolute right-3 top-3 flex items-center gap-1 rounded-xl border border-brand-100 bg-white/90 p-1 backdrop-blur">
                <button
                  onClick={dec}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-brand-50"
                  title="Zoom out"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <button
                  onClick={reset}
                  className="px-2 text-[10px] font-semibold text-slate-600 hover:text-brand-700"
                  title="Reset"
                >
                  {Math.round(scale * 100)}%
                </button>

                <button
                  onClick={inc}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-brand-50"
                  title="Zoom in"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* 3D hint */}
              <div className="absolute bottom-3 right-4 text-[10px] font-medium text-slate-500">
                {c.hero.hint3d}
              </div>
            </div>

            {/* ✅ Safety pill tuned placement */}
            <div className="absolute -bottom-7 left-4 hidden w-[300px] rounded-2xl border border-brand-100 bg-white p-4 shadow-soft md:block">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-brand-50 p-2">
                  <ShieldCheck className="h-4 w-4 text-brand-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {c.hero.safetyTitle}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-600">
                    {c.hero.safetyText}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </Container>
    </section>
  );
}
