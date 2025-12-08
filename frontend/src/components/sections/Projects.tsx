import React, { useEffect, useMemo, useState } from "react";
import { Container } from "../layout/Container";
import { api } from "../../api/client";
import type { Project } from "../../types";
import { useI18n } from "../../i18n/I18nContext";

export const Projects: React.FC = () => {
  const { t } = useI18n();
  const [items, setItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<string>("__all");

  useEffect(() => {
    let alive = true;
    api.get("/api/projects")
      .then(res => {
        if (!alive) return;
        setItems(res.data.items || []);
      })
      .catch(() => {
        if (!alive) return;
        setItems([]);
      })
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, []);

  const tags = useMemo(() => {
    const s = new Set<string>();
    items.forEach(p => p.tags.forEach(tg => s.add(tg)));
    return Array.from(s).sort();
  }, [items]);

  const filtered = useMemo(() => {
    if (active === "__all") return items;
    return items.filter(p => p.tags.includes(active));
  }, [items, active]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50/50">
      <Container>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-brand-600">
            {t<string>("projects.label")}
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">
            {t<string>("projects.title")}
          </h2>
          <p className="max-w-2xl text-slate-600">
            {t<string>("projects.text")}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActive("__all")}
            className={`text-xs px-3 py-1.5 rounded-full border transition ${
              active === "__all"
                ? "bg-brand-600 text-white border-brand-600"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {t<string>("projects.filterAll")}
          </button>

          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                active === tag
                  ? "bg-brand-600 text-white border-brand-600"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {loading && Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-soft animate-pulse">
              <div className="h-44 rounded-xl bg-slate-100" />
              <div className="mt-4 h-4 w-2/3 bg-slate-100 rounded" />
              <div className="mt-2 h-3 w-1/2 bg-slate-100 rounded" />
              <div className="mt-4 h-3 w-full bg-slate-100 rounded" />
            </div>
          ))}

          {!loading && filtered.map(p => (
            <article
              key={p.id}
              className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-soft hover:shadow-lg transition"
            >
              <div className="relative h-44 rounded-xl bg-gradient-to-br from-brand-50 to-white border border-slate-100 overflow-hidden flex items-center justify-center">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-brand-100/40 to-transparent" />
                <div className="text-xs text-slate-400">Demo cover</div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-slate-900 leading-snug">
                  {p.title}
                </h3>
                <span className="text-xs text-slate-500 shrink-0">{p.year}</span>
              </div>
              <div className="text-xs text-slate-500">{p.location}</div>
              <p className="mt-3 text-sm text-slate-600">{p.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(tg => (
                  <span
                    key={tg}
                    className="text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-700 font-medium"
                  >
                    {tg}
                  </span>
                ))}
              </div>
            </article>
          ))}

          {!loading && filtered.length === 0 && (
            <div className="text-sm text-slate-500">
              No projects for this filter yet.
            </div>
          )}
        </div>
      </Container>

      <div className="mt-16 h-px section-divider" />
    </section>
  );
};
