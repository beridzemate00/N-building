import React from "react";
import { BRAND } from "../../config/brand";

type LogoProps = {
  className?: string;
  withText?: boolean;
  subtitle?: boolean;
};

export const Logo: React.FC<LogoProps> = ({
  className = "",
  withText = true,
  subtitle = false
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 36 36" role="img" aria-label="N-building logo">
        <defs>
          <linearGradient id="nb-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b7bff" />
            <stop offset="100%" stopColor="#1f5de6" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="32" height="32" rx="10" fill="#ffffff" />
        <rect x="2" y="2" width="32" height="32" rx="10" fill="url(#nb-grad)" opacity="0.10" />
        <rect x="9" y="9" width="5" height="18" rx="2" fill="url(#nb-grad)" />
        <rect x="22" y="9" width="5" height="18" rx="2" fill="url(#nb-grad)" />
        <path
          d="M14 25 L14 11 L22 25 L22 11"
          fill="none"
          stroke="url(#nb-grad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {withText && (
        <div className="leading-tight">
          <div className="font-semibold tracking-tight text-slate-900">
            {BRAND.name}
          </div>
          {subtitle && (
            <div className="text-xs text-slate-500">
              {BRAND.subtitle}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
