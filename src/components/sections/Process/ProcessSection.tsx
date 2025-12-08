import { SITE } from "../../../data/site";
import { Container } from "../../common/Container";
import { SectionTitle } from "../../common/SectionTitle";

export function ProcessSection() {
  return (
    <section id="process" className="py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="How we work"
          title="A simple, reliable delivery pipeline"
          subtitle="Clear steps help clients trust you — even on a frontend-only site."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {SITE.process.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-3xl border border-brand-100 bg-white p-6"
            >
              <div className="text-xs font-semibold text-brand-700">
                Step {idx + 1}
              </div>
              <div className="mt-2 text-lg font-semibold">{s.title}</div>
              <div className="mt-1 text-sm text-slate-600">{s.text}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
