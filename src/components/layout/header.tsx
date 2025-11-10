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
    <header className="fixed top-0 left-0 right-0 w-full py-4 px-8 bg-[#eee9e3] z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-foreground">Mitchy.</h1>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm border-foreground/10 hover:bg-foreground/5 bg-white/50"
          >
            Home
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm border-foreground/10 hover:bg-foreground/5 bg-white/50"
          >
            Work
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm border-foreground/10 hover:bg-foreground/5 bg-white/50"
          >
            About
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm border-foreground/10 hover:bg-foreground/5 bg-white/50"
          >
            Service
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm border-foreground/10 hover:bg-foreground/5 bg-white/50"
          >
            Blog
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm border-foreground/10 hover:bg-foreground/5 bg-white/50"
          >
            Contact
          </Button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 h-auto text-sm border-foreground/10 hover:bg-foreground/5 bg-white/50 flex items-center gap-2"
          >
            Pages
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Button
            className="rounded-full px-6 py-2.5 h-auto bg-[#f43c00] hover:bg-[#f43c00]/90 text-white font-medium text-sm"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
}