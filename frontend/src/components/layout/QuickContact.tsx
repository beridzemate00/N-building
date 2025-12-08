import React from "react";
import { BRAND } from "../../config/brand";

export const QuickContact: React.FC = () => {
  const whatsappLink = `https://wa.me/${BRAND.whatsappNumber}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <a
        href={`tel:${BRAND.phoneTel}`}
        className="group inline-flex items-center gap-2 rounded-2xl bg-white border border-slate-200 px-3 py-2 shadow-soft hover:shadow-lg transition"
        title={BRAND.phoneDisplay}
      >
        <span className="h-7 w-7 rounded-xl bg-brand-100 flex items-center justify-center">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-600" />
        </span>
        <span className="text-xs font-semibold text-slate-900">
          {BRAND.phoneDisplay}
        </span>
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-2xl bg-brand-600 text-white px-3 py-2 shadow-soft hover:bg-brand-700 hover:shadow-lg transition"
        title="WhatsApp"
      >
        <span className="h-7 w-7 rounded-xl bg-white/15 flex items-center justify-center">
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        <span className="text-xs font-semibold">
          WhatsApp
        </span>
      </a>
    </div>
  );
};
