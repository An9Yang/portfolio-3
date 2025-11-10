/**
 * Services Card Component
 *
 * A prominent black card showcasing services with:
 * - Left: Professional image with rounded corners
 * - Right: Service list with descriptions
 * - "WHAT WE WORK ON" section label
 * - Main service (Web Design) with description
 * - Additional services list (3D Render Design, Development, etc.)
 * - Call-to-action link at the bottom
 *
 * Dark theme for visual contrast against light background.
 */

import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  "3D Render Design",
  "Development",
  "Illustration",
  "Branding"
];

export function ServicesCard() {
  return (
    <section className="w-full px-8 py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Black Card Container */}
        <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden p-8 md:p-12 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-gray100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=750&fit=crop"
                alt="Professional in modern office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              {/* Label */}
              <div className="flex items-center gap-2 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                <span className="text-white/80 text-[11px] font-bold uppercase tracking-[0.2em]">
                  WHAT WE WORK ON
                </span>
              </div>

              {/* Main Service - Web Design */}
              <div className="space-y-4 pb-6 border-b border-white/10 animate-fade-in-up">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight transition-colors duration-300 hover:text-brand-primaryLight">
                  Web Design
                </h3>
                <p className="text-white/65 text-base leading-relaxed max-w-sm">
                  Creating beautiful, functional digital experiences that drive results and elevate your brand presence.
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-0">
                {SERVICES.map((service, index) => (
                  <div key={index} className="group/item">
                    <div className="py-4 transition-all duration-300 group-hover/item:py-5">
                      <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/30 transition-all duration-300 group-hover/item:text-white/60 group-hover/item:translate-x-2">
                        {service}
                      </h4>
                    </div>
                    {index < SERVICES.length - 1 && (
                      <div className="h-px bg-white/10"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="space-y-4 pt-6">
                <p className="text-white/65 text-sm leading-relaxed">
                  Delivering digital experiences through versatile subscription
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.15em] hover:gap-3 transition-all duration-300 border-b-2 border-brand-primary pb-1 hover:text-brand-primaryLight"
                >
                  LEARN MORE
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
