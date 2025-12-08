import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "../brand/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "../../i18n/I18nContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  const links = [
    { href: "/#services", label: t<string>("nav.services") },
    { href: "/#projects", label: t<string>("nav.projects") },
    { href: "/#about", label: t<string>("nav.about") },
    { href: "/#contact", label: t<string>("nav.contact") }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-white/80 backdrop-blur border-b border-slate-100" : "bg-transparent"}`}>
      <Container className="py-3 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center">
          <Logo subtitle />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-soft bg-brand-600 text-white hover:bg-brand-700 transition"
          >
            {t<string>("buttons.quote")}
          </a>
        </div>
      </Container>
    </div>
  );
};
