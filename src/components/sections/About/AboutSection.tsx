import { Container } from "../../common/Container";
import { SectionTitle } from "../../common/SectionTitle";
import { SITE } from "../../../data/site";

export function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Who we are"
          title="A pragmatic, quality-first builder"
          subtitle="A clean section that builds trust even before you add real photos and certificates."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-brand-100 bg-white p-6">
            <div className="text-sm text-slate-600">
              {SITE.name} is focused on reliable execution, modern standards,
              and transparent communication. We deliver durable structures with
              thoughtful details and clear timeline control.
            </div>
            <div className="mt-4 text-sm text-slate-600">
              Add your father's real company story here: when it started, key
              projects, and what makes your team special.
            </div>
          </div>

          <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-white to-brand-50 p-6">
            <ul className="space-y-3 text-sm text-slate-700">
              <li>• Clear scope & milestones</li>
              <li>• Quality control checkpoints</li>
              <li>• Safety and compliance culture</li>
              <li>• Long-term durability mindset</li>
              <li>• Modern architecture-friendly execution</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
