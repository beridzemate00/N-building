import { SITE } from "../../data/site";
import { Container } from "../common/Container";
import { NBuildingLogo } from "../brand/NBuildingLogo";

export function Footer() {
  return (
    <footer className="border-t border-brand-50 bg-white">
      <Container>
        <div className="grid gap-6 py-10 md:grid-cols-3 md:items-center">
          <div>
            <NBuildingLogo />
            <p className="mt-2 text-xs text-slate-600">
              {SITE.tagline}
            </p>
          </div>

          <div className="text-xs text-slate-600">
            <div className="font-semibold text-slate-900">Contact</div>
            <div className="mt-1">{SITE.contact.phone}</div>
            <div>{SITE.contact.email}</div>
            <div>{SITE.contact.address}</div>
          </div>

          <div className="text-xs text-slate-500 md:text-right">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
