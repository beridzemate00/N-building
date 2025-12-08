import React from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { useI18n } from "../../i18n/I18nContext";

type ServiceItem = {
  title: string;
  desc: string;
  bullets: string[];
};

const cardAnim = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.05 * i }
  })
};

export const Services: React.FC = () => {
  const { t } = useI18n();
  const items = t<ServiceItem[]>("services.items", []);

  return (
    <section id="services" className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-brand-600">
            {t<string>("services.label")}
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">
            {t<string>("services.title")}
          </h2>
          <p className="max-w-2xl text-slate-600">
            {t<string>("services.text")}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <motion.div
              key={`${s.title}-${i}`}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardAnim}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft hover:shadow-lg transition"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-brand-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
              <ul className="mt-4 space-y-1">
                {s.bullets.map(b => (
                  <li key={b} className="text-sm text-slate-500">
                    • {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="mt-16 h-px section-divider" />
    </section>
  );
};
