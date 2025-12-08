import React from "react";
import { Container } from "../layout/Container";
import { useI18n } from "../../i18n/I18nContext";

export const About: React.FC = () => {
  const { t } = useI18n();
  const cards = t<[string, string][]>("about.cards", []);

  return (
    <section id="about" className="py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-sm font-semibold text-brand-600">
              {t<string>("about.label")}
            </span>
            <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">
              {t<string>("about.title")}
            </h2>
            <p className="mt-4 text-slate-600">
              {t<string>("about.p1")}
            </p>
            <p className="mt-3 text-slate-600">
              {t<string>("about.p2")}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-brand-50 p-8 shadow-soft">
            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map(([tt, ss]) => (
                <div key={tt} className="rounded-2xl bg-white border border-slate-100 p-4">
                  <div className="text-sm font-semibold text-slate-900">{tt}</div>
                  <div className="text-xs text-slate-500 mt-1">{ss}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-16 h-px section-divider" />
    </section>
  );
};
