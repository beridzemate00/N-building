import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CONTENT, type Lang } from "./content";

type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  c: typeof CONTENT.en;
};

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "n-building-lang";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && ["en", "ka", "ru"].includes(saved)) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  const value = useMemo<I18nValue>(() => {
    return { lang, setLang, c: CONTENT[lang] };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
