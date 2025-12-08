import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { SITE } from "../../../data/site";
import { Container } from "../../common/Container";
import { SectionTitle } from "../../common/SectionTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="What we do"
          title="Construction services built for quality"
          subtitle="A flexible service line for private homes, multi-unit buildings, retail spaces, and industrial sites."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {SITE.services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-brand-50 p-3">
                <Building2 className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand-600" />
                    <span className="text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
