import type { PropsWithChildren } from "react";

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
      {children}
    </span>
  );
}
