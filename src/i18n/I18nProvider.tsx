import React, { useMemo, useState } from "react";
import { CONTENT, type Lang } from "./content";
import { I18nContext, STORAGE_KEY, isLang, type I18nValue } from "./context";

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
    } catch {
        // ignore
    }
  };

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, c: CONTENT[lang] }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
