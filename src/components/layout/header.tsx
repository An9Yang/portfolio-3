/**
 * Header Component
 * 
 * Implements the top navigation bar with:
 * - Left: "Mitchy" logo/brand
 * - Center: Navigation menu items (Home, Work, About, Service, Blog, Contact)
 * - Right: Pages dropdown and "Book a Call" CTA button
 * 
 * All items use pill-shaped buttons with borders and hover states.
 * The CTA button has an orange background to stand out.
 */

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full py-4 px-8 bg-bg-primary z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-foreground transition-colors duration-200 hover:text-brand-primary cursor-pointer">
            Mitchy.
          </h1>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200"
          >
            Home
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200"
          >
            Work
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200"
          >
            About
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200"
          >
            Service
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200"
          >
            Blog
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200"
          >
            Contact
          </Button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm flex items-center gap-2 transition-all duration-200"
          >
            Pages
            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </Button>
          <Button
            className="rounded-full px-6 py-2.5 h-auto bg-brand-primary hover:bg-brand-primaryHover text-white font-semibold text-sm shadow-button hover:shadow-buttonHover hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
}