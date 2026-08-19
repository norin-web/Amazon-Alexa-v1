import React from "react";
import clsx from "clsx";

interface AppPhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
}

export function AppPhoneMockup({ children, className, scale = 1 }: AppPhoneMockupProps) {
  return (
    <div 
      className={clsx("relative flex items-center justify-center shrink-0", className)}
      style={{ width: `${393 * scale}px`, height: `${852 * scale}px` }}
    >
      <div 
        className="absolute top-0 left-0 bg-black rounded-[52px] overflow-hidden shadow-2xl border-[12px] border-[#1C1C1E] box-content"
        style={{ 
          width: '393px', 
          height: '852px',
          transform: `scale(${scale})`, 
          transformOrigin: "top left"
        }}
      >
        {/* Dynamic Island container is usually inside the figma code, but we can add an extra glow or bezel if needed */}
        {children}
      </div>
    </div>
  );
}
