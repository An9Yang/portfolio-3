/**
 * Services Page
 *
 * Comprehensive overview of all services offered:
 * - Hero section
 * - Detailed service cards with icons
 * - Process/workflow section
 * - Pricing approach
 * - CTA to contact
 *
 * Follows design system with dark/light section alternation.
 */

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowUpRight, Palette, Film, Code2, Pen, Tag, TrendingUp, DollarSign, Zap, Infinity } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
};

const SERVICES: Service[] = [
  {
    id: "web-design",
    title: "Web Design",
    description: "Creating beautiful, functional digital experiences that drive results and elevate your brand presence in the digital landscape.",
    features: [
      "Responsive Design",
      "UI/UX Strategy",
      "Prototyping & Wireframing",
      "Design Systems",
    ],
    icon: <Palette className="w-12 h-12 text-brand-primary" strokeWidth={1.5} />,
  },
  {
    id: "3d-animation",
    title: "3D Render & Animation",
    description: "Bringing ideas to life with stunning 3D visualizations and animations that captivate and engage your audience.",
    features: [
      "Product Visualization",
      "Motion Graphics",
      "Character Animation",
      "Architectural Rendering",
    ],
    icon: <Film className="w-12 h-12 text-brand-primary" strokeWidth={1.5} />,
  },
  {
    id: "development",
    title: "Development",
    description: "Building scalable, performant web applications using modern technologies and best practices for long-term success.",
    features: [
      "Frontend Development",
      "Backend Solutions",
      "API Integration",
      "Performance Optimization",
    ],
    icon: <Code2 className="w-12 h-12 text-brand-primary" strokeWidth={1.5} />,
  },
  {
    id: "illustration",
    title: "Illustration",
    description: "Custom illustrations and visual content that tell your brand story in unique and memorable ways.",
    features: [
      "Custom Artwork",
      "Icon Design",
      "Editorial Illustration",
      "Brand Visuals",
    ],
    icon: <Pen className="w-12 h-12 text-brand-primary" strokeWidth={1.5} />,
  },
  {
    id: "branding",
    title: "Branding",
    description: "Crafting comprehensive brand identities that resonate with your audience and stand out in the marketplace.",
    features: [
      "Brand Strategy",
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
    ],
    icon: <Tag className="w-12 h-12 text-brand-primary" strokeWidth={1.5} />,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that grow your online presence and deliver measurable results.",
    features: [
      "SEO Optimization",
      "Content Strategy",
      "Social Media",
      "Analytics & Reporting",
    ],
    icon: <TrendingUp className="w-12 h-12 text-brand-primary" strokeWidth={1.5} />,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and challenges.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Developing a comprehensive plan tailored to your unique needs.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Bringing the vision to life with precision and creativity.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Delivering results and providing ongoing support for your success.",
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card hover:shadow-cardHover transition-all duration-500 hover:-translate-y-2">
      <div className="p-8 md:p-10 space-y-6">
        {/* Icon */}
        <div className="transition-transform duration-300 group-hover:scale-110">{service.icon}</div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-black transition-colors duration-200 group-hover:text-brand-primary">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-base text-black/70 leading-relaxed">
          {service.description}
        </p>

        {/* Features List */}
        <div className="pt-4 space-y-3">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0"></div>
              <span className="text-sm text-black/75">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="group/link inline-flex items-center gap-2 text-brand-primary font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all duration-300 pt-4"
        >
          Learn More
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}

function ProcessStep({ step }: { step: typeof PROCESS_STEPS[0] }) {
  return (
    <div className="group">
      <div className="flex items-start gap-6">
        {/* Number */}
        <div className="text-5xl md:text-6xl font-black text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors duration-300">
          {step.number}
        </div>

        {/* Content */}
        <div className="flex-1 pt-2">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-colors duration-200 group-hover:text-brand-primaryLight">
            {step.title}
          </h3>
          <p className="text-base text-white/70 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#EEE9E3]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-6 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            What We Do
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight text-black mb-8 animate-scale-in max-w-4xl">
            Services that drive <span className="text-brand-primary">growth</span> and <span className="text-brand-primary">success</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-black/70 max-w-3xl animate-fade-in-up" style={{animationDelay: '100ms'}}>
            From strategy to execution, we provide comprehensive digital services designed to help your business thrive in the modern marketplace.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="animate-fade-in-up"
                style={{animationDelay: `${index * 80}ms`}}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark Background */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">
              <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How we work
            </h2>
            <p className="text-lg text-white/70 max-w-2xl">
              A proven methodology that ensures every project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.number}
                className="animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <ProcessStep step={step} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Approach Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Flexible subscription model
          </h2>
          <p className="text-lg md:text-xl text-black/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            We offer a transparent, fixed monthly subscription that gives you unlimited access to our design and development services. No hidden costs, no surprises—just continuous support that fits your budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            <div className="group p-8 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                <DollarSign className="w-10 h-10 text-brand-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 transition-colors duration-200 group-hover:text-brand-primary">Fixed Pricing</h3>
              <p className="text-base text-black/70">
                One flat monthly rate with no surprises or hidden fees.
              </p>
            </div>
            <div className="group p-8 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                <Zap className="w-10 h-10 text-brand-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 transition-colors duration-200 group-hover:text-brand-primary">Quick Delivery</h3>
              <p className="text-base text-black/70">
                Fast turnaround times without compromising quality.
              </p>
            </div>
            <div className="group p-8 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                <Infinity className="w-10 h-10 text-brand-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 transition-colors duration-200 group-hover:text-brand-primary">Unlimited Requests</h3>
              <p className="text-base text-black/70">
                Submit as many design requests as you need, we'll handle them all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Let's bring your vision to life
          </h2>
          <p className="text-lg md:text-xl text-black/70 mb-10 max-w-2xl mx-auto">
            Ready to get started? Schedule a call with our team to discuss your project.
          </p>
          <Link to="/contact">
            <button className="group inline-flex items-center gap-3 rounded-full px-8 py-4 bg-brand-primary hover:bg-brand-primaryHover text-white font-semibold text-base shadow-button hover:shadow-buttonHover hover:-translate-y-1 transition-all duration-300 active:scale-95">
              Get Started
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
