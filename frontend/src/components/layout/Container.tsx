import React from "react";

export const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children
}) => {
  return (
    <div className={`mx-auto max-w-6xl px-4 ${className}`}>
      {children}
    </div>
  );
};
