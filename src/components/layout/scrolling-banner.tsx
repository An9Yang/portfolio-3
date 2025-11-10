/**
 * Scrolling Banner Component
 *
 * Implements an infinite horizontal scrolling text banner with:
 * - Smooth right-to-left animation
 * - Seamless infinite loop
 * - Multiple items separated by bullet points (•)
 * - Large bold text for maximum impact
 *
 * This component showcases services and expertise areas
 * in a dynamic, eye-catching way.
 */

"use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  "DIGITAL EXPERTISES",
  "LOGO DESIGN",
  "BRAND IDENTITY",
  "WEB DEVELOPMENT",
  "UX/UI DESIGN",
  "MARKETING STRATEGY",
  "CREATIVE SOLUTIONS",
  "DIGITAL MARKETING",
];

export function ScrollingBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full overflow-hidden bg-background py-8 border-y border-black/10">
      <div className="relative flex">
        {/* First set of items */}
        <div className="flex shrink-0 items-center justify-around gap-8 animate-scroll-left">
          {ITEMS.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                {item}
              </span>
              <span className="text-5xl md:text-7xl font-black text-[#f43c00]">
                •
              </span>
            </div>
          ))}
        </div>

        {/* Second set of items for seamless loop */}
        <div className="flex shrink-0 items-center justify-around gap-8 animate-scroll-left">
          {ITEMS.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                {item}
              </span>
              <span className="text-5xl md:text-7xl font-black text-[#f43c00]">
                •
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
