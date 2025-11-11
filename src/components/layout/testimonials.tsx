/**
 * Testimonials Section Component
 *
 * Features:
 * - Top: Scrolling text banner with mixed styles (black/gray text with orange dots)
 * - Middle: Customer testimonial with scroll-based fill animation
 * - Bottom: Three customer avatars with names
 *
 * Animations:
 * 1. Horizontal scrolling banner (right to left)
 * 2. Text fill effect on scroll (gray to black)
 */

"use client";

import { useEffect, useRef, useState } from "react";

const SCROLL_TEXT_ITEMS = [
  { text: "Faster", style: "gray" },
  { text: "Greater", style: "black", dot: true },
  { text: "Work", style: "gray" },
  { text: "Smarter", style: "black", dot: true },
  { text: "Stronger", style: "gray" },
];

const TESTIMONIAL_LINES = [
  '"Mitchy are a great team who not only complete',
  'designs in a timely manner but execute our',
  'creative briefs effectively and manage to keep the',
  'designs consistent with our brand look and feel."'
];

const CLIENTS = [
  {
    name: "Daoud Farooq",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
  },
  {
    name: "Alex Petrovski",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
  },
  {
    name: "Sara Steiniger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
  }
];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const progress = Math.max(0, Math.min(1,
        (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5)
      ));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLineFillPercentage = (lineIndex: number) => {
    const totalLines = TESTIMONIAL_LINES.length;
    const progressPerLine = 1 / totalLines;
    const lineStart = lineIndex * progressPerLine;
    const lineEnd = (lineIndex + 1) * progressPerLine;

    if (scrollProgress < lineStart) return 0;
    if (scrollProgress > lineEnd) return 100;

    const lineProgress = (scrollProgress - lineStart) / progressPerLine;
    return lineProgress * 100;
  };

  return (
    <section ref={sectionRef} className="w-full py-20">
      {/* Top Scrolling Banner */}
      <div className="w-full overflow-hidden mb-20">
        <div className="flex animate-scroll-left">
          {/* First set */}
          <div className="flex shrink-0 items-center">
            {SCROLL_TEXT_ITEMS.map((item, index) => (
              <div key={`first-${index}`} className="px-4">
                <span className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tight whitespace-nowrap ${
                  item.style === 'gray' ? 'text-black/15' : 'text-black'
                }`}>
                  {item.text}
                  {item.dot && <span className="text-[#f43c00]">.</span>}
                </span>
              </div>
            ))}
          </div>

          {/* Second set for seamless loop */}
          <div className="flex shrink-0 items-center">
            {SCROLL_TEXT_ITEMS.map((item, index) => (
              <div key={`second-${index}`} className="px-4">
                <span className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tight whitespace-nowrap ${
                  item.style === 'gray' ? 'text-black/15' : 'text-black'
                }`}>
                  {item.text}
                  {item.dot && <span className="text-[#f43c00]">.</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Content */}
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Testimonials Label */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f43c00]"></span>
          <span className="text-[11px] font-semibold uppercase tracking-wider">TESTIMONIALS</span>
        </div>

        {/* Quote with Fill Effect */}
        <div className="space-y-2 mb-16">
          {TESTIMONIAL_LINES.map((line, index) => (
            <div key={index} className="relative text-center">
              {/* Gray text (background) */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black/20">
                {line}
              </div>

              {/* Black text (foreground with clip) */}
              <div
                className="absolute top-0 left-0 right-0 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black pointer-events-none"
                style={{
                  clipPath: `inset(0 ${100 - getLineFillPercentage(index)}% 0 0)`
                }}
              >
                {line}
              </div>
            </div>
          ))}
        </div>

        {/* Client Avatars */}
        <div className="flex items-center justify-center gap-8">
          {CLIENTS.map((client, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="relative w-40 h-44 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`text-sm font-medium ${
                index === 1 ? 'text-black' : 'text-black/40'
              }`}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
