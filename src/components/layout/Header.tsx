import { useState } from "react";
import { Container } from "../common/Container";
import { NBuildingLogo } from "../brand/NBuildingLogo";
import { MobileMenu } from "./MobileMenu";
import { useI18n } from "../../i18n/useI18n";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function Header() {
  const { c, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <NBuildingLogo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {c.nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollToId(n.id)}
                className="text-sm font-medium text-slate-700 hover:text-brand-700"
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden items-center gap-2 md:flex">
            {/* Language switch */}
            <div className="flex rounded-xl border border-brand-100 bg-white p-1">
              {(["en", "ka", "ru"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={[
                    "rounded-lg px-2 py-1 text-[11px] font-semibold transition",
                    lang === l
                      ? "bg-brand-500 text-white"
                      : "text-slate-600 hover:bg-brand-50",
                  ].join(" ")}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Optional small search/quote placeholder */}
            <div className="h-9 w-44 rounded-xl border border-brand-100 bg-white" />
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(true)}
            className="inline-flex rounded-xl border border-brand-100 bg-white px-3 py-2 text-xs font-semibold text-slate-700 md:hidden"
          >
            Menu
          </button>
        </div>
      </Container>

      {/* ✅ The only divider line (clean + aligned) */}
      <div className="h-px w-full bg-brand-100/80" />

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
