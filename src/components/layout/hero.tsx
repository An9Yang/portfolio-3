/**
 * Hero Component
 * 
 * Main hero section featuring:
 * - Large bold "GROWTH HACKING" headline with orange period accent
 * - Left-aligned description text with service details
 * - "BOOK A CALL" link with arrow
 * 
 * The headline dominates the right side of the viewport,
 * while the description sits on the left in a more modest size.
 */

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full px-8 py-6 pb-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content - Description */}
          <div className="lg:col-span-3 space-y-5 pt-1">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#f43c00] font-semibold text-[13px] tracking-wide hover:gap-3 transition-all uppercase"
            >
              BOOK A CALL
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <p className="text-black/60 text-[17px] leading-[1.3] max-w-[260px]">
              Our services help you create digital products and solve your problems objectively, strategy, technology and analysis.
            </p>
          </div>

          {/* Right Content - Large Headline */}
          <div className="lg:col-span-9 relative flex items-center justify-center">
            <h2 className="text-[clamp(3.5rem,11vw,9rem)] font-black leading-[0.88] tracking-[-0.03em] text-center lg:text-right w-full">
              <span className="block">GROWTH</span>
              <span className="block inline-flex items-start justify-center lg:justify-end">
                HACKING
                <span className="inline-block w-[0.16em] h-[0.16em] bg-[#f43c00] ml-2 mt-[0.12em] flex-shrink-0"></span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}