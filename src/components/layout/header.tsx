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

"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full py-4 px-8 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#EEE9E3]/95 backdrop-blur-md shadow-lg"
          : "bg-[#EEE9E3]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-foreground transition-colors duration-200 hover:text-brand-primary cursor-pointer">
            Mitchy.
          </h1>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link to="/">
            <Button
              variant="outline"
              className={`rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200 ${
                isActive("/") ? "border-brand-primary/50 bg-white" : ""
              }`}
            >
              Home
            </Button>
          </Link>
          <Link to="/work">
            <Button
              variant="outline"
              className={`rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200 ${
                isActive("/work") ? "border-brand-primary/50 bg-white" : ""
              }`}
            >
              Work
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="outline"
              className={`rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200 ${
                isActive("/about") ? "border-brand-primary/50 bg-white" : ""
              }`}
            >
              About
            </Button>
          </Link>
          <Link to="/services">
            <Button
              variant="outline"
              className={`rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200 ${
                isActive("/services") ? "border-brand-primary/50 bg-white" : ""
              }`}
            >
              Service
            </Button>
          </Link>
          <Link to="/blog">
            <Button
              variant="outline"
              className={`rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200 ${
                isActive("/blog") ? "border-brand-primary/50 bg-white" : ""
              }`}
            >
              Blog
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              className={`rounded-full px-5 py-2 h-auto text-sm font-medium border-neutral-black/10 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm bg-white/70 backdrop-blur-sm transition-all duration-200 ${
                isActive("/contact") ? "border-brand-primary/50 bg-white" : ""
              }`}
            >
              Contact
            </Button>
          </Link>
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
          <Link to="/contact">
            <Button
              className="rounded-full px-6 py-2.5 h-auto bg-brand-primary hover:bg-brand-primaryHover text-white font-semibold text-sm shadow-button hover:shadow-buttonHover hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
            >
              Book a Call
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}