/**
 * Project Detail Page
 *
 * Displays full project information with:
 * - Hero image and title
 * - Project overview and details
 * - Gallery of project images
 * - Technologies used
 * - Related projects
 * - CTA to contact
 *
 * Follows design system with consistent typography and spacing.
 */

import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, ArrowUpRight, Calendar, Tag as TagIcon } from "lucide-react";
import { useEffect } from "react";

type ProjectDetail = {
  id: string;
  title: string;
  year: string;
  category: string;
  client: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  heroImage: string;
  images: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

// Project data (in real app, this would come from API/CMS)
const PROJECTS: Record<string, ProjectDetail> = {
  "keelra": {
    id: "keelra",
    title: "Keëlra Industries",
    year: "2024",
    category: "3D Animation",
    client: "Keëlra Industries",
    duration: "3 months",
    description: "A comprehensive 3D animation project showcasing Keëlra Industries' innovative keyboard designs with stunning visual effects and motion graphics.",
    challenge: "The client needed to showcase their high-end mechanical keyboards in a way that highlighted both the technical precision and aesthetic beauty of their products.",
    solution: "We created a series of 3D animated sequences featuring photorealistic rendering, dynamic camera movements, and particle effects to emphasize the craftsmanship and attention to detail.",
    results: [
      "300% increase in product page engagement",
      "Featured in major tech publications",
      "50% boost in pre-orders within first week",
    ],
    technologies: ["Blender", "Cinema 4D", "After Effects", "Octane Render"],
    heroImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1600&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=1200&q=80&auto=format",
    ],
    testimonial: {
      quote: "The 3D animations brought our products to life in ways we never imagined. The attention to detail and creative vision exceeded our expectations.",
      author: "Sarah Chen",
      role: "Marketing Director, Keëlra Industries",
    },
  },
  "gen-ai": {
    id: "gen-ai",
    title: "How Gen AI Transforms Process",
    year: "2024",
    category: "3D Animation",
    client: "TechVision Inc",
    duration: "2 months",
    description: "An educational 3D animated explainer showcasing how generative AI transforms business processes, designed for corporate training and marketing.",
    challenge: "Complex AI concepts needed to be visualized in an engaging, easy-to-understand format for non-technical audiences.",
    solution: "We developed abstract 3D visualizations and metaphors to represent AI processes, combined with smooth transitions and clear narration.",
    results: [
      "Used in training for 500+ employees",
      "90% comprehension rate in post-training surveys",
      "Nominated for corporate video awards",
    ],
    technologies: ["Blender", "Cinema 4D", "Premiere Pro", "Motion Graphics"],
    heroImage: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=1600&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80&auto=format",
    ],
  },
  "willo": {
    id: "willo",
    title: "Willo",
    year: "2024",
    category: "3D Animation",
    client: "Willo Studios",
    duration: "4 months",
    description: "A character-driven 3D animation project featuring Willo, a mascot character that brings brand personality to life across multiple touchpoints.",
    challenge: "Creating a versatile character that works across different media formats while maintaining consistent quality and appeal.",
    solution: "Developed a fully rigged 3D character with multiple expressions, poses, and animations that can be easily adapted for various use cases.",
    results: [
      "Character adopted across all brand materials",
      "40% increase in brand recognition",
      "Social media engagement up 250%",
    ],
    technologies: ["Maya", "ZBrush", "Substance Painter", "Unreal Engine"],
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&q=80&auto=format",
    ],
  },
  "justine": {
    id: "justine",
    title: "Justine Mahoney - Personal Website",
    year: "2024",
    category: "Web Design",
    client: "Justine Mahoney",
    duration: "6 weeks",
    description: "A sleek, modern personal website for photographer Justine Mahoney, showcasing her portfolio with an emphasis on visual storytelling and user experience.",
    challenge: "Balancing minimalist design with impactful imagery to let the photography work speak for itself while maintaining strong brand identity.",
    solution: "Created a clean, grid-based layout with smooth transitions, high-quality image optimization, and intuitive navigation that puts the focus on the photography.",
    results: [
      "200% increase in client inquiries",
      "Featured on Awwwards and CSS Design Awards",
      "Average session duration increased by 180%",
    ],
    technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    heroImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80&auto=format",
    ],
    testimonial: {
      quote: "The website perfectly captures my aesthetic and has significantly elevated my professional presence. I've received countless compliments and new client leads.",
      author: "Justine Mahoney",
      role: "Professional Photographer",
    },
  },
};

const RELATED_PROJECTS = [
  {
    id: "nexus-platform",
    title: "Nexus - SaaS Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format",
  },
  {
    id: "brand-identity-studio",
    title: "Studio Craft - Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80&auto=format",
  },
  {
    id: "mobile-app-finance",
    title: "FinFlow - Mobile Banking App",
    category: "Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format",
  },
];

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = id ? PROJECTS[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#EEE9E3] flex items-center justify-center">
        <Header />
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-black mb-4">Project Not Found</h1>
          <p className="text-lg text-black/70 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEE9E3]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-6 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 text-black/70 hover:text-brand-primary font-medium text-sm mb-8 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back
          </button>

          {/* Project Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10 text-sm font-semibold shadow-sm">
              <TagIcon className="w-4 h-4 text-brand-primary" />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10 text-sm font-semibold shadow-sm">
              <Calendar className="w-4 h-4 text-brand-primary" />
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight text-black mb-8 animate-scale-in">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed text-black/70 max-w-3xl animate-fade-in-up" style={{animationDelay: '100ms'}}>
            {project.description}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full px-6 pb-20 md:px-8 md:pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 shadow-2xl">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left - Project Info */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-black/50 mb-2">Client</h3>
                <p className="text-lg font-semibold text-black">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-black/50 mb-2">Duration</h3>
                <p className="text-lg font-semibold text-black">{project.duration}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-black/50 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-sm font-medium text-black shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Project Story */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">The Challenge</h2>
                <p className="text-lg text-black/70 leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Solution</h2>
                <p className="text-lg text-black/70 leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Results</h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0 mt-2.5"></div>
                      <span className="text-lg text-black/70">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.images.length > 0 && (
        <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#0A0A0A]">
          <div className="max-w-[1000px] mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">
                Client Testimonial
              </span>
            </div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-white/90 mb-8">
              "{project.testimonial.quote}"
            </blockquote>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-white">{project.testimonial.author}</p>
              <p className="text-base text-white/70">{project.testimonial.role}</p>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">More Projects</h2>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all duration-300"
            >
              View All
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {RELATED_PROJECTS.map((relatedProject) => (
              <Link
                key={relatedProject.id}
                to={`/project/${relatedProject.id}`}
                className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-card hover:shadow-cardHover transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                  <img
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-brand-primary mb-2 uppercase tracking-wide">
                    {relatedProject.category}
                  </p>
                  <h3 className="text-lg font-semibold text-black transition-colors duration-200 group-hover:text-brand-primary">
                    {relatedProject.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Have a project in mind?
          </h2>
          <p className="text-lg md:text-xl text-black/70 mb-10 max-w-2xl mx-auto">
            Let's work together to bring your vision to life.
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
