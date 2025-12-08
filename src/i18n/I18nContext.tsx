import React, { createContext, useMemo, useState } from "react";
import { CONTENT, type Lang } from "./content";

type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  c: typeof CONTENT.en;
};

export const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "n-building-lang";

function isLang(v: unknown): v is Lang {
  return v === "en" || v === "ka" || v === "ru";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return isLang(saved) ? saved : "en";
    } catch {
      return "en";
    }
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {//error
        }
  };

  const value = useMemo(() => ({ lang, setLang, c: CONTENT[lang] }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
