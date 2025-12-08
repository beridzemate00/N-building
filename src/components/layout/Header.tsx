import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { SITE } from "../../data/site";
import { Container } from "../common/Container";
import { NBuildingLogo } from "../brand/NBuildingLogo";
import { MobileMenu } from "./MobileMenu";
import { scrollToId } from "../../utils/scroll";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-50 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3">
          <button
            onClick={() => scrollToId("top")}
            className="rounded-xl p-1 text-left transition hover:bg-brand-50"
            aria-label="Go to top"
          >
            <NBuildingLogo />
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {SITE.nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollToId(n.id)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {n.label}
              </button>
            ))}

            <button
              onClick={() => scrollToId("contact")}
              className="ml-2 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </nav>

          <button
            className="md:hidden rounded-xl border border-brand-100 bg-white px-3 py-2 text-xs font-semibold text-brand-700 shadow-sm"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
