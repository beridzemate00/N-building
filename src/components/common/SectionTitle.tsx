export function SectionTitle(props: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
  }) {
    const { eyebrow, title, subtitle } = props;
  
    return (
      <div className="mx-auto max-w-2xl text-center">
        {eyebrow && (
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            {eyebrow}
          </div>
        )}
  
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {title}
        </h2>
  
        {subtitle && (
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
  