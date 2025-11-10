/**
 * Home Page
 * 
 * Main landing page that combines the Header and Hero components
 * to create the first section of the Mitchy website.
 * 
 * This page renders:
 * 1. Header navigation with logo, menu items, and CTA
 * 2. Hero section with large headline and description
 */

import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import { ScrollingBanner } from "@/components/layout/scrolling-banner";
import { Features } from "@/components/layout/features";
import { AboutSection } from "@/components/layout/about-section";
import { LogoMarquee } from "@/components/layout/logo-marquee";
import { ServicesCard } from "@/components/layout/services-card";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
      <Hero />
      <Features />
      <ScrollingBanner />
      <AboutSection />
      <LogoMarquee />
      <ServicesCard />
      </div>
    </div>
  );
}
