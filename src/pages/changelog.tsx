/**
 * Changelog Page
 *
 * Project update history with:
 * - Version releases
 * - Features added
 * - Bug fixes
 * - Timeline format
 *
 * Clean, chronological layout following design system.
 */

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Sparkles, Bug, Wrench, Zap } from "lucide-react";

type ChangeType = "feature" | "fix" | "improvement" | "breaking";

type Change = {
  type: ChangeType;
  description: string;
};

type Release = {
  version: string;
  date: string;
  title: string;
  changes: Change[];
};

const RELEASES: Release[] = [
  {
    version: "2.0.0",
    date: "November 11, 2024",
    title: "Major Release - Complete Redesign",
    changes: [
      { type: "feature", description: "Complete website redesign with modern, minimal aesthetic" },
      { type: "feature", description: "Added Work portfolio page with category filtering" },
      { type: "feature", description: "Added About page with team members and company values" },
      { type: "feature", description: "Added Services page with detailed service descriptions" },
      { type: "feature", description: "Added Blog page with article filtering" },
      { type: "feature", description: "Added Contact page with working form" },
      { type: "feature", description: "Project and blog detail pages with full content" },
      { type: "improvement", description: "Implemented code splitting for faster load times" },
      { type: "improvement", description: "Added scroll-based text reveal animations" },
      { type: "improvement", description: "Replaced emoji icons with professional Lucide icons" },
    ],
  },
  {
    version: "1.5.0",
    date: "October 15, 2024",
    title: "Enhanced Interactions",
    changes: [
      { type: "feature", description: "Added Benefits Stack section with sticky scroll animation" },
      { type: "feature", description: "Implemented Logo Marquee with infinite scroll" },
      { type: "improvement", description: "Enhanced hover states across all interactive elements" },
      { type: "improvement", description: "Improved mobile responsiveness" },
      { type: "fix", description: "Fixed header backdrop blur on scroll" },
    ],
  },
  {
    version: "1.0.0",
    date: "September 1, 2024",
    title: "Initial Launch",
    changes: [
      { type: "feature", description: "Launched new Mitchy website with modern design" },
      { type: "feature", description: "Implemented design token system for consistency" },
      { type: "feature", description: "Added Hero section with animated headline" },
      { type: "feature", description: "Created Features showcase section" },
      { type: "feature", description: "Built responsive navigation header" },
    ],
  },
];

const CHANGE_TYPE_CONFIG: Record<ChangeType, { icon: any; label: string; color: string }> = {
  feature: {
    icon: Sparkles,
    label: "New",
    color: "text-brand-primary bg-brand-primary/10",
  },
  fix: {
    icon: Bug,
    label: "Fix",
    color: "text-green-600 bg-green-600/10",
  },
  improvement: {
    icon: Wrench,
    label: "Improved",
    color: "text-blue-600 bg-blue-600/10",
  },
  breaking: {
    icon: Zap,
    label: "Breaking",
    color: "text-red-600 bg-red-600/10",
  },
};

function ChangeItem({ change }: { change: Change }) {
  const config = CHANGE_TYPE_CONFIG[change.type];
  const Icon = config.icon;

  return (
    <div className="flex items-start gap-4 group">
      <div className={`flex-shrink-0 w-8 h-8 rounded-full ${config.color} flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}>
        <Icon className="w-4 h-4" strokeWidth={2} />
      </div>
      <div className="flex-1">
        <p className="text-base text-black/75 leading-relaxed">
          {change.description}
        </p>
      </div>
    </div>
  );
}

function ReleaseCard({ release, index }: { release: Release; index: number }) {
  return (
    <article
      className="group relative animate-fade-in-up"
      style={{animationDelay: `${index * 100}ms`}}
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10 hidden md:block"></div>

      {/* Timeline Dot */}
      <div className="absolute left-0 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-primary hidden md:block"></div>

      <div className="md:pl-12">
        {/* Version Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-black transition-colors duration-200 group-hover:text-brand-primary">
              v{release.version}
            </h2>
            <span className="px-4 py-1.5 rounded-full bg-white border border-black/10 text-sm font-semibold text-black/70 shadow-sm">
              {release.date}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-black/70">
            {release.title}
          </h3>
        </div>

        {/* Changes List */}
        <div className="space-y-4">
          {release.changes.map((change, changeIndex) => (
            <ChangeItem key={changeIndex} change={change} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[#EEE9E3]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-6 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            Version History
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-black mb-8 animate-scale-in">
            Changelog
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-black/70 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Track our journey of continuous improvement. Every update, feature, and fix that makes Mitchy better.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="w-full px-6 pb-12 md:px-8 md:pb-16">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-wrap gap-4 p-6 rounded-xl bg-white border border-black/5 shadow-sm">
            {Object.entries(CHANGE_TYPE_CONFIG).map(([key, config]) => {
              const Icon = config.icon;
              return (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full ${config.color} flex items-center justify-center`}>
                    <Icon className="w-3 h-3" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-medium text-black">{config.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative space-y-16">
            {RELEASES.map((release, index) => (
              <ReleaseCard key={release.version} release={release} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
