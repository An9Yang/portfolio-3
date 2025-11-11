/**
 * Styleguide Page
 *
 * Comprehensive design system documentation showing:
 * - Color palette
 * - Typography scale
 * - Button variants
 * - Card styles
 * - Icons and animations
 *
 * A living documentation of the Mitchy design system.
 */

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Palette, Code2, Zap, ArrowUpRight } from "lucide-react";

const COLORS = {
  brand: [
    { name: "Primary", value: "#FF4500", textColor: "text-white" },
    { name: "Primary Hover", value: "#E03E00", textColor: "text-white" },
    { name: "Primary Light", value: "#FF6B35", textColor: "text-white" },
  ],
  backgrounds: [
    { name: "Primary", value: "#EEE9E3", textColor: "text-black" },
    { name: "Secondary", value: "#F5F4F0", textColor: "text-black" },
    { name: "Tertiary", value: "#E8E5DF", textColor: "text-black" },
    { name: "Dark", value: "#0A0A0A", textColor: "text-white" },
  ],
  neutrals: [
    { name: "Black", value: "#000000", textColor: "text-white" },
    { name: "Gray 700", value: "#2A2A2A", textColor: "text-white" },
    { name: "Gray 500", value: "#6B6B6B", textColor: "text-white" },
    { name: "Gray 300", value: "#CBCBCB", textColor: "text-black" },
    { name: "White", value: "#FFFFFF", textColor: "text-black" },
  ],
};

const TYPOGRAPHY_EXAMPLES = [
  { name: "Display", class: "text-[clamp(3.5rem,11vw,9rem)] font-black", text: "GROWTH" },
  { name: "H1", class: "text-7xl font-black", text: "Heading 1" },
  { name: "H2", class: "text-6xl font-bold", text: "Heading 2" },
  { name: "H3", class: "text-4xl font-bold", text: "Heading 3" },
  { name: "H4", class: "text-2xl font-semibold", text: "Heading 4" },
  { name: "Body Large", class: "text-lg font-normal", text: "Large body text for emphasis and readability" },
  { name: "Body", class: "text-base font-normal", text: "Standard body text for comfortable reading" },
  { name: "Small", class: "text-sm font-medium", text: "Small text for captions and metadata" },
  { name: "Label", class: "text-xs font-bold uppercase tracking-[0.35em]", text: "Label Text" },
];

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-[#EEE9E3]">
      <Header />

      {/* Hero */}
      <section className="w-full px-6 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            Design System
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight text-black mb-8 animate-scale-in">
            Mitchy Styleguide
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-black/70 max-w-3xl animate-fade-in-up" style={{animationDelay: '100ms'}}>
            A comprehensive overview of our design system, including colors, typography, components, and interactions that define the Mitchy brand experience.
          </p>
        </div>
      </section>

      {/* Colors Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Color Palette</h2>
          <p className="text-lg text-black/70 mb-12 max-w-2xl">
            Our carefully selected color palette balances warmth, professionalism, and energy.
          </p>

          {/* Brand Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-black mb-6">Brand Colors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {COLORS.brand.map((color) => (
                <div key={color.name} className="group">
                  <div
                    className="h-32 rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 flex items-center justify-center"
                    style={{ backgroundColor: color.value }}
                  >
                    <span className={`font-semibold ${color.textColor}`}>{color.value}</span>
                  </div>
                  <p className="mt-3 text-base font-medium text-black">{color.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Background Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-black mb-6">Backgrounds</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {COLORS.backgrounds.map((color) => (
                <div key={color.name} className="group">
                  <div
                    className="h-24 rounded-xl border border-black/10 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 flex items-center justify-center text-sm"
                    style={{ backgroundColor: color.value }}
                  >
                    <span className={`font-medium ${color.textColor} opacity-70`}>{color.value}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-black">{color.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral Colors */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6">Neutrals</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {COLORS.neutrals.map((color) => (
                <div key={color.name} className="group">
                  <div
                    className="h-24 rounded-xl border border-black/10 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 flex items-center justify-center text-sm"
                    style={{ backgroundColor: color.value }}
                  >
                    <span className={`font-medium ${color.textColor} opacity-70`}>{color.value}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-black">{color.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Typography</h2>
          <p className="text-lg text-black/70 mb-12 max-w-2xl">
            Helvetica Neue provides a clean, modern foundation for our typographic system.
          </p>

          <div className="space-y-8">
            {TYPOGRAPHY_EXAMPLES.map((example) => (
              <div key={example.name} className="pb-6 border-b border-black/10">
                <p className="text-sm font-semibold text-black/50 mb-3 uppercase tracking-wide">
                  {example.name}
                </p>
                <p className={`${example.class} text-black`}>
                  {example.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Buttons</h2>
          <p className="text-lg text-black/70 mb-12 max-w-2xl">
            Our button system emphasizes clarity and consistent interaction patterns.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Primary CTA</h3>
              <div className="flex flex-wrap gap-4">
                <Button className="rounded-full px-8 py-4 h-auto bg-brand-primary hover:bg-brand-primaryHover text-white font-semibold shadow-button hover:shadow-buttonHover hover:-translate-y-0.5 transition-all duration-200 active:scale-95">
                  Primary Button
                </Button>
                <button className="group inline-flex items-center gap-3 rounded-full px-8 py-4 bg-brand-primary hover:bg-brand-primaryHover text-white font-semibold shadow-button hover:shadow-buttonHover hover:-translate-y-1 transition-all duration-300 active:scale-95">
                  With Icon
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Outline Variant</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200">
                  Outline Button
                </Button>
                <Button variant="outline" className="rounded-full px-5 py-2 h-auto text-sm font-medium border-brand-primary/50 bg-white">
                  Active State
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Text Links</h3>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="group inline-flex items-center gap-2 text-brand-primary font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all duration-300">
                  Link with Arrow
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href="#" className="group inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-[0.15em] hover:gap-3 transition-all duration-300 border-b-2 border-brand-primary pb-1 hover:text-brand-primaryLight">
                  Underlined Link
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Cards</h2>
          <p className="text-lg text-black/70 mb-12 max-w-2xl">
            Versatile card components with consistent spacing and elevation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Standard Card */}
            <div className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-card hover:shadow-cardHover transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80&auto=format"
                  alt="Example"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2 transition-colors duration-200 group-hover:text-brand-primary">
                  Standard Card
                </h3>
                <p className="text-base text-black/70">
                  With image, hover lift, and shadow transition.
                </p>
              </div>
            </div>

            {/* Service Card */}
            <div className="group p-8 rounded-2xl border border-black/5 bg-white shadow-card hover:shadow-cardHover transition-all duration-500 hover:-translate-y-2">
              <div className="transition-transform duration-300 group-hover:scale-110 mb-6">
                <Palette className="w-12 h-12 text-brand-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-200 group-hover:text-brand-primary">
                Service Card
              </h3>
              <p className="text-base text-black/70">
                Icon-based card with hover scale effect.
              </p>
            </div>

            {/* Dark Card */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white shadow-xl">
              <Code2 className="w-10 h-10 text-brand-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Dark Variant</h3>
              <p className="text-white/70 text-base">
                Dark background for contrast and emphasis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Icons & Animations */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Icons & Animations</h2>
          <p className="text-lg text-black/70 mb-12 max-w-2xl">
            Lucide React icons with consistent sizing and animations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Animation Examples */}
            <div className="p-8 rounded-xl border border-black/5 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-6">Entrance Animations</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#EEE9E3] animate-fade-in-up">
                  <p className="text-sm font-medium text-black">Fade In Up (0.5s ease-out)</p>
                </div>
                <div className="p-4 rounded-lg bg-[#EEE9E3] animate-scale-in">
                  <p className="text-sm font-medium text-black">Scale In (0.3s ease-out)</p>
                </div>
                <div className="p-4 rounded-lg bg-[#EEE9E3] animate-slide-in-left">
                  <p className="text-sm font-medium text-black">Slide In Left (0.4s ease-out)</p>
                </div>
              </div>
            </div>

            {/* Hover Interactions */}
            <div className="p-8 rounded-xl border border-black/5 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-6">Hover Interactions</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#EEE9E3] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <p className="text-sm font-medium text-black">Lift on Hover</p>
                </div>
                <div className="p-4 rounded-lg bg-[#EEE9E3] hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <p className="text-sm font-medium text-black">Scale on Hover</p>
                </div>
                <div className="group p-4 rounded-lg bg-[#EEE9E3] cursor-pointer">
                  <p className="text-sm font-medium text-black group-hover:text-brand-primary transition-colors duration-200">
                    Color Change on Hover
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Typography Scale</h2>
          <p className="text-lg text-black/70 mb-12 max-w-2xl">
            A modular type scale that ensures visual hierarchy and readability across all devices.
          </p>

          <div className="space-y-8">
            {TYPOGRAPHY_EXAMPLES.map((example) => (
              <div key={example.name} className="pb-6 border-b border-black/10">
                <p className="text-sm font-semibold text-brand-primary mb-3 uppercase tracking-wide">
                  {example.name}
                </p>
                <p className={`${example.class} text-black`}>
                  {example.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing & Layout */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Spacing System</h2>
          <p className="text-lg text-black/70 mb-12 max-w-2xl">
            Consistent spacing creates rhythm and improves readability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-black/5 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-6">Section Padding</h3>
              <div className="space-y-3 text-base text-black/75">
                <p><span className="font-semibold text-black">Mobile:</span> py-20 (80px)</p>
                <p><span className="font-semibold text-black">Tablet:</span> py-24 (96px)</p>
                <p><span className="font-semibold text-black">Desktop:</span> py-32 (128px)</p>
              </div>
            </div>

            <div className="p-8 rounded-xl border border-black/5 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-6">Container Width</h3>
              <div className="space-y-3 text-base text-black/75">
                <p><span className="font-semibold text-black">Standard:</span> max-w-[1400px]</p>
                <p><span className="font-semibold text-black">Wide:</span> max-w-[1600px]</p>
                <p><span className="font-semibold text-black">Narrow:</span> max-w-[900px]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
