/**
 * About Page
 *
 * Tells the story of Mitchy agency with:
 * - Hero section introducing the team
 * - Our story section with scroll-based text reveal (like AboutSection)
 * - Team members grid
 * - Company values/culture
 * - Stats section
 * - CTA to contact
 *
 * Follows the design system and reuses animation patterns.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sarah",
    name: "Sarah Mitchell",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format",
    bio: "Leading creative vision with 15+ years in digital design",
  },
  {
    id: "marcus",
    name: "Marcus Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format",
    bio: "Building scalable solutions with modern web technologies",
  },
  {
    id: "elena",
    name: "Elena Rodriguez",
    role: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80&auto=format",
    bio: "Crafting brand narratives that resonate with audiences",
  },
  {
    id: "james",
    name: "James Parker",
    role: "3D Artist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80&auto=format",
    bio: "Creating immersive 3D experiences and animations",
  },
];

const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "8", label: "Years Experience" },
  { value: "12", label: "Team Members" },
];

const VALUES = [
  {
    title: "Innovation First",
    description: "We push boundaries and explore new technologies to deliver cutting-edge solutions.",
  },
  {
    title: "Client-Centered",
    description: "Your success is our success. We listen, understand, and deliver beyond expectations.",
  },
  {
    title: "Quality Driven",
    description: "Excellence is non-negotiable. Every pixel, every line of code matters to us.",
  },
];

const STORY_LINES = [
  "We believe that great design",
  "is more than just aesthetics—",
  "it's about creating meaningful",
  "experiences that drive results."
];

function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const progress = Math.max(0, Math.min(1,
        (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5)
      ));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLineFillPercentage = (lineIndex: number) => {
    const totalLines = STORY_LINES.length;
    const progressPerLine = 1 / totalLines;
    const lineStart = lineIndex * progressPerLine;
    const lineEnd = (lineIndex + 1) * progressPerLine;

    if (scrollProgress < lineStart) return 0;
    if (scrollProgress > lineEnd) return 100;

    const lineProgress = (scrollProgress - lineStart) / progressPerLine;
    return lineProgress * 100;
  };

  return (
    <section ref={sectionRef} className="w-full px-6 py-32 md:px-8 md:py-40 lg:py-48">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left - Animated Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
              <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              Our Story
            </div>

            <div className="space-y-2">
              {STORY_LINES.map((line, index) => (
                <div key={index} className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black/20">
                    {line}
                  </div>
                  <div
                    className="absolute top-0 left-0 right-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black pointer-events-none"
                    style={{
                      clipPath: `inset(0 ${100 - getLineFillPercentage(index)}% 0 0)`
                    }}
                  >
                    {line}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Description */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-black/70">
              Founded in 2016, Mitchy has grown from a small studio into a full-service digital agency. We combine strategic thinking with creative excellence to help brands thrive in the digital age.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-black/70">
              Our diverse team brings together expertise in design, development, branding, and strategy to deliver comprehensive solutions that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-card hover:shadow-cardHover transition-all duration-500 hover:-translate-y-2">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold text-black transition-colors duration-200 group-hover:text-brand-primary">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-brand-primary uppercase tracking-wide">
          {member.role}
        </p>
        <p className="text-base text-black/65 leading-relaxed pt-2">
          {member.bio}
        </p>
      </div>
    </article>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group p-8 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-brand-primary animate-pulse"></div>
        <h3 className="text-2xl font-semibold text-black transition-colors duration-200 group-hover:text-brand-primary">
          {title}
        </h3>
      </div>
      <p className="text-base text-black/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#EEE9E3]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-6 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight text-black mb-8 animate-scale-in max-w-4xl">
            We're a team of <span className="text-brand-primary">creators</span>, <span className="text-brand-primary">innovators</span>, and <span className="text-brand-primary">problem solvers</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-black/70 max-w-3xl animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Passionate about building digital experiences that inspire, engage, and deliver measurable results for businesses worldwide.
          </p>
        </div>
      </section>

      {/* Story Section with Scroll Animation */}
      <StorySection />

      {/* Stats Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-primary mb-3">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium text-black/70 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
              <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              Meet the Team
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              The people behind<br />the magic
            </h2>
            <p className="text-lg text-black/70 max-w-2xl">
              Our diverse team of experts brings together years of experience in design, development, and digital strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={member.id}
                className="animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
              <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              What drives us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className="animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <ValueCard title={value.title} description={value.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Ready to work together?
          </h2>
          <p className="text-lg md:text-xl text-black/70 mb-10 max-w-2xl mx-auto">
            Let's create something amazing. Get in touch and tell us about your project.
          </p>
          <Link to="/contact">
            <button className="group inline-flex items-center gap-3 rounded-full px-8 py-4 bg-brand-primary hover:bg-brand-primaryHover text-white font-semibold text-base shadow-button hover:shadow-buttonHover hover:-translate-y-1 transition-all duration-300 active:scale-95">
              Start a Project
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
