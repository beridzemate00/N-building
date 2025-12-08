import { SITE } from "../../../data/site";
import { Container } from "../../common/Container";
import { SectionTitle } from "../../common/SectionTitle";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Portfolio"
          title="Selected work & concepts"
          subtitle="Replace these placeholders with real projects, photos, and numbers anytime."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {SITE.projects.map((p) => (
            <div
              key={p.name}
              className="rounded-3xl border border-brand-100 bg-gradient-to-br from-white via-white to-brand-50 p-6"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                {p.tag}
              </div>
              <div className="mt-2 text-lg font-semibold">{p.name}</div>
              <div className="mt-1 text-sm text-slate-600">{p.note}</div>

              <div className="mt-5 h-28 rounded-2xl border border-brand-100 bg-white" />
              <div className="mt-2 text-[10px] text-slate-500">
                Placeholder for image/gallery
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
