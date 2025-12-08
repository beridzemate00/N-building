import React from "react";
import { Container } from "./Container";
import { Logo } from "../brand/Logo";
import { useI18n } from "../../i18n/I18nContext";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="border-t border-slate-100">
      <Container className="py-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex flex-col gap-2">
          <Logo subtitle />
          <p className="text-sm text-slate-500 max-w-md">
            {t<string>("footer.text")}
          </p>
          <a
            href="/admin"
            className="text-xs text-brand-700 hover:text-brand-800 font-semibold w-fit"
          >
            {t<string>("buttons.admin")}
          </a>
        </div>
        <div className="text-sm text-slate-500">
          © {year} N-building. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
