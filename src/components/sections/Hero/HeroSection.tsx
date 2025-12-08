import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SITE } from "../../../data/site";
import { Container } from "../../common/Container";
import { Badge } from "../../common/Badge";
import { BuildingScene } from "../../../three/BuildingScene";
import { scrollToId } from "../../../utils/scroll";
import { StatsStrip } from "./StatsStrip";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section id="top" className="pb-10 pt-10 md:pb-16 md:pt-16">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Badge>{SITE.locationShort}</Badge>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Build smarter with
              <span className="text-brand-600"> {SITE.name}</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm text-slate-600 md:text-base">
              Blueprints to handover — we deliver durable, modern spaces with
              clear timelines, transparent budgets, and a safety-first culture.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToId("projects")}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollToId("services")}
                className="rounded-xl border border-brand-100 bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                Our services
              </button>
            </div>

            <StatsStrip />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-brand-100" />

            <div className="relative h-[320px] md:h-[420px]">
              <BuildingScene />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-brand-100 bg-white p-4 shadow-md md:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-brand-50 p-2">
                  <ShieldCheck className="h-5 w-5 text-brand-700" />
                </div>
                <div className="text-sm font-semibold">Safety & QA first</div>
              </div>
              <div className="mt-1 text-xs text-slate-600">
                Standards-driven site management
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
