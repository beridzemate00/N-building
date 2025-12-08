import { SITE } from "../../../data/site";

export function StatsStrip() {
  return (
    <div className="mt-7 grid grid-cols-3 gap-3">
      {SITE.stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-brand-50 bg-white/80 p-3 shadow-sm"
        >
          <div className="text-lg font-semibold text-slate-900">
            {s.value}
          </div>
          <div className="text-[10px] font-medium text-slate-500">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
