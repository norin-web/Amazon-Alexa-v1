import React from "react";
import { motion } from "motion/react";
import clsx from "clsx";

interface PhoneMockupProps {
  src: string;
  alt?: string;
  className?: string;
}

export function PhoneMockup({ src, alt = "App Screenshot", className }: PhoneMockupProps) {
  return (
    <div className={clsx("relative w-full max-w-[320px] mx-auto", className)}>
      <div className="relative aspect-[1170/2532] rounded-[48px] overflow-hidden shadow-2xl border-[8px] border-[#2a2a2a] bg-[#1f1f1f]">
        {/* Dynamic Island Mockup */}
        <div className="absolute top-0 inset-x-0 h-8 flex justify-center z-20 pt-2">
          <div className="w-1/3 h-7 bg-black rounded-full" />
        </div>
        
        {/* Screen Content */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
