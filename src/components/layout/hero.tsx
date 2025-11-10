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
    <section className="w-full px-6 py-8 pb-12 md:px-8 md:py-10 lg:pb-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Content - Description */}
          <div className="lg:col-span-3 space-y-5 pt-1 animate-fade-in-up">
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-brand-primary font-bold text-[13px] tracking-wide hover:gap-3 transition-all duration-300 uppercase relative"
            >
              BOOK A CALL
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
            </a>

            <p className="text-black/65 text-[17px] leading-[1.4] max-w-[280px] transition-colors duration-200 hover:text-black/80">
              Expert services in digital products, strategy, technology and data-driven analysis.
            </p>
          </div>

          {/* Right Content - Large Headline */}
          <div className="lg:col-span-9 relative flex items-center justify-center animate-scale-in">
            <h2 className="text-[clamp(3.5rem,11vw,9rem)] font-black leading-[0.88] tracking-[-0.03em] text-center lg:text-right w-full transition-all duration-500">
              <span className="block">GROWTH</span>
              <span className="block inline-flex items-start justify-center lg:justify-end">
                HACKING
                <span className="inline-block w-[0.16em] h-[0.16em] bg-brand-primary ml-2 mt-[0.12em] flex-shrink-0 rounded-full animate-pulse"></span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}