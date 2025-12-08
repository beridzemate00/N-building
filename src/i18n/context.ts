import { createContext } from "react";
import { CONTENT, type Lang } from "./content";

export type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  c: typeof CONTENT.en;
};

export const I18nContext = createContext<I18nValue | null>(null);

export const STORAGE_KEY = "n-building-lang";

export function isLang(v: unknown): v is Lang {
  return v === "en" || v === "ka" || v === "ru";
}
