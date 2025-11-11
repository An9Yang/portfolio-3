/**
 * Work Page
 *
 * Displays all projects in a filterable grid layout.
 * Follows the design system established in FeaturedWorks and BlogList components.
 *
 * Features:
 * - Hero section with page title
 * - Category filter tabs
 * - Project grid with hover animations
 * - Each card links to project detail page
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

type Project = {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  imageAlt: string;
  aspect?: "tall" | "wide";
};

const PROJECTS: Project[] = [
  {
    id: "keelra",
    title: "Keëlra Industries",
    year: "2024",
    category: "3D Animation",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&q=80&auto=format",
    imageAlt: "Keyboard 3D render",
    aspect: "tall",
  },
  {
    id: "gen-ai",
    title: "How Gen AI Transforms Process",
    year: "2024",
    category: "3D Animation",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=1200&q=80&auto=format",
    imageAlt: "Bicycle detail",
    aspect: "tall",
  },
  {
    id: "willo",
    title: "Willo",
    year: "2024",
    category: "3D Animation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format",
    imageAlt: "Portrait with blindfold",
    aspect: "tall",
  },
  {
    id: "justine",
    title: "Justine Mahoney - Personal Website",
    year: "2024",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&auto=format",
    imageAlt: "Modern office meeting pod",
    aspect: "wide",
  },
  {
    id: "nexus-platform",
    title: "Nexus - SaaS Platform",
    year: "2024",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format",
    imageAlt: "Digital interface design",
    aspect: "wide",
  },
  {
    id: "brand-identity-studio",
    title: "Studio Craft - Brand Identity",
    year: "2023",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80&auto=format",
    imageAlt: "Brand identity materials",
    aspect: "tall",
  },
  {
    id: "mobile-app-finance",
    title: "FinFlow - Mobile Banking App",
    year: "2023",
    category: "Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80&auto=format",
    imageAlt: "Mobile app interface",
    aspect: "tall",
  },
  {
    id: "ecommerce-redesign",
    title: "ShopHub - E-commerce Redesign",
    year: "2023",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80&auto=format",
    imageAlt: "E-commerce interface",
    aspect: "wide",
  },
  {
    id: "illustration-series",
    title: "Nature Series - Illustrations",
    year: "2023",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&q=80&auto=format",
    imageAlt: "Illustration artwork",
    aspect: "tall",
  },
];

const CATEGORIES = ["All", "Web Design", "3D Animation", "Branding", "Development", "Illustration"];

function ProjectCard({ project }: { project: Project }) {
  const aspectClass = project.aspect === "wide" ? "aspect-[4/3]" : "aspect-[5/4]";

  return (
    <Link to={`/project/${project.id}`}>
      <article className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-card hover:shadow-cardHover transition-all duration-500 hover:-translate-y-2 cursor-pointer">
        <div className={`relative overflow-hidden ${aspectClass}`}>
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="flex items-end justify-between gap-6 px-6 pb-7 pt-6 md:px-8">
          <h3 className="text-lg font-semibold text-black md:text-xl transition-colors duration-200 group-hover:text-brand-primary">
            {project.title}
          </h3>
          <div className="flex flex-col items-end text-right text-black">
            <span className="text-base font-semibold md:text-lg">{project.year}</span>
            <span className="text-xs font-medium text-black/65 md:text-sm">{project.category}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f5f4f0]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-6 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            Our Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight text-black mb-6 animate-scale-in">
            Selected Work
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-black/70 max-w-2xl animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Explore our portfolio of digital experiences, branding projects, and creative solutions that have helped businesses grow and thrive.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full px-6 pb-12 md:px-8 md:pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:shadow-md hover:border-brand-primary/20 animate-fade-in-up ${
                  selectedCategory === category
                    ? "bg-brand-primary text-white shadow-button hover:bg-brand-primaryHover hover:shadow-buttonHover"
                    : "bg-white border border-black/10 text-black shadow-sm hover:-translate-y-0.5"
                }`}
                style={{animationDelay: `${index * 50}ms`}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full px-6 pb-20 md:px-8 md:pb-24 lg:px-12 lg:pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{animationDelay: `${index * 50}ms`}}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-black/50">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
