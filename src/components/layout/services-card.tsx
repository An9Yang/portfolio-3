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
        <div className="bg-[#141414] rounded-[40px] overflow-hidden p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#f6f6f6]">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=750&fit=crop"
                alt="Professional in modern office"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              {/* Label */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f43c00]"></span>
                <span className="text-white text-[11px] font-semibold uppercase tracking-wider">
                  WHAT WE WORK ON
                </span>
              </div>

              {/* Main Service - Web Design */}
              <div className="space-y-3 pb-6 border-b border-white/10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Web Design
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-0">
                {SERVICES.map((service, index) => (
                  <div key={index}>
                    <div className="py-4">
                      <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/25">
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
                <p className="text-white/60 text-sm leading-relaxed">
                  Delivering digital experiences through versatile subscription
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider hover:gap-3 transition-all group border-b border-white pb-0.5"
                >
                  LEARN MORE
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
