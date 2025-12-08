import { useI18n } from "../../i18n/I18nContext";

export function NBuildingLogo({ size = 28 }: { size?: number }) {
  const { c } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="N-building logo"
      >
        <rect x="4" y="4" width="56" height="56" rx="14" fill="#0B5FFF" />
        <path
          d="M18 46V18H26L38 36V18H46V46H38L26 28V46H18Z"
          fill="white"
        />
        <circle cx="50" cy="50" r="2" fill="#CFE0FF" />
        <circle cx="44" cy="50" r="2" fill="#CFE0FF" />
        <circle cx="50" cy="44" r="2" fill="#CFE0FF" />
      </svg>

      <div className="leading-tight">
        <div className="text-lg font-semibold tracking-tight text-slate-900">
          {c.brand.name}
        </div>
        <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-700">
          {c.brand.subtitle}
        </div>
      </div>
    </div>
  );
}
