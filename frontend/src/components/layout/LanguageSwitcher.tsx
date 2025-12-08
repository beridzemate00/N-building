import React from "react";
import { useI18n } from "../../i18n/I18nContext";
import type { Lang } from "../../i18n/translations";

export const LanguageSwitcher: React.FC = () => {
  const { lang, setLang, labels } = useI18n();
  const langs: Lang[] = ["en", "ka", "ru"];

  return (
    <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1">
      {langs.map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-[10px] font-semibold rounded-lg transition ${
            lang === l ? "bg-brand-600 text-white" : "text-slate-600 hover:bg-slate-50"
          }`}
          aria-pressed={lang === l}
          title={l}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
};
