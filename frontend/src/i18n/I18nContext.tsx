import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Lang, tdict, LANG_LABEL } from "./translations";

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T = any>(path: string, fallback?: T) => T;
  labels: typeof LANG_LABEL;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const getPath = (obj: any, path: string) => {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
};

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("nb-lang") as Lang | null;
    if (saved && (saved === "en" || saved === "ka" || saved === "ru")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("nb-lang", l);
  };

  const t = useMemo(() => {
    return <T = any,>(path: string, fallback?: T) => {
      const val = getPath(tdict[lang], path);
      return (val !== undefined ? val : fallback) as T;
    };
  }, [lang]);

  const value: I18nContextValue = {
    lang,
    setLang,
    t,
    labels: LANG_LABEL
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
