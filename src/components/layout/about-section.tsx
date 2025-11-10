/**
 * About Section Component
 *
 * Features:
 * - Left side: Large text with line-by-line scroll-based color fill animation
 *   Each line fills from left to right sequentially as user scrolls
 * - Right side: Team image with description
 * - Responsive two-column layout
 *
 * The text fill effect creates a typewriter-like visual
 * that responds to scroll position for enhanced engagement.
 */

"use client";

import { useEffect, useRef, useState } from "react";

const TEXT_LINES = [
  "Our service also has a",
  "high appeal because it",
  "has a beautiful color co",
  "mbination and a minimalist concept."
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Calculate scroll progress (0 to 1)
      const progress = Math.max(0, Math.min(1,
        (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5)
      ));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate fill percentage for each line
  const getLineFillPercentage = (lineIndex: number) => {
    const totalLines = TEXT_LINES.length;
    const progressPerLine = 1 / totalLines;
    const lineStart = lineIndex * progressPerLine;
    const lineEnd = (lineIndex + 1) * progressPerLine;

    if (scrollProgress < lineStart) return 0;
    if (scrollProgress > lineEnd) return 100;

    const lineProgress = (scrollProgress - lineStart) / progressPerLine;
    return lineProgress * 100;
  };

  return (
    <section ref={sectionRef} className="w-full px-8 py-32">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content - Text with Line-by-Line Fill Effect */}
          <div className="lg:col-span-7 space-y-8">
            {/* About Us Label */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#f43c00]"></span>
              <span className="text-sm font-semibold uppercase tracking-wide">ABOUT US</span>
            </div>

            {/* Main Text with Line-by-Line Fill Effect */}
            <div className="space-y-2">
              {TEXT_LINES.map((line, index) => (
                <div key={index} className="relative overflow-hidden">
                  {/* Gray text (background) */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black/20">
                    {line}
                  </div>

                  {/* Black text (foreground with clip) */}
                  <div
                    className="absolute top-0 left-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black whitespace-nowrap"
                    style={{
                      clipPath: `inset(0 ${100 - getLineFillPercentage(index)}% 0 0)`
                    }}
                  >
                    {line}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image and Description */}
          <div className="lg:col-span-5 space-y-6">
            {/* Team Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 to-slate-300">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration meeting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description Text */}
            <p className="text-base leading-relaxed text-black/70">
              Our team of experienced professionals understands the ever-changing landscape of marketing and is able to create custom strategies for each client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
