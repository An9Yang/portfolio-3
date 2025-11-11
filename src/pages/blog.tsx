/**
 * Blog Page
 *
 * Blog listing page with:
 * - Hero section
 * - Category filter
 * - Blog post grid
 * - Each post links to detail page
 *
 * Reuses BlogList card design patterns.
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

type BlogPost = {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    id: "seo-king",
    tag: "Design",
    title: "Why SEO Is Still King — and How We Help You Rule the Rankings",
    excerpt: "Master the fundamentals of SEO and learn how to dominate search results with proven strategies.",
    date: "Nov 8, 2024",
    author: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80&auto=format",
    imageAlt: "Desk with vintage items",
  },
  {
    id: "brand-identity",
    tag: "AI",
    title: "What Makes a Great Brand Identity? Our Creative Team Weighs In",
    excerpt: "Discover the key elements that make brand identities memorable and effective in today's market.",
    date: "Nov 5, 2024",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800&q=80&auto=format",
    imageAlt: "Red bottles product shot",
  },
  {
    id: "ai-creativity",
    tag: "Creativity",
    title: "AI + Creativity: How We're Using Tech to Supercharge Campaigns",
    excerpt: "Exploring the intersection of artificial intelligence and creative design in modern marketing.",
    date: "Nov 1, 2024",
    author: "Marcus Chen",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80&auto=format",
    imageAlt: "Blue tech device",
  },
  {
    id: "web-design-trends",
    tag: "Design",
    title: "Top Web Design Trends Shaping 2024",
    excerpt: "Stay ahead of the curve with these emerging design trends that are defining the digital landscape.",
    date: "Oct 28, 2024",
    author: "James Parker",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format",
    imageAlt: "Modern web interface",
  },
  {
    id: "content-strategy",
    tag: "Marketing",
    title: "Building a Content Strategy That Actually Works",
    excerpt: "Learn how to create and execute a content strategy that drives engagement and conversions.",
    date: "Oct 25, 2024",
    author: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format",
    imageAlt: "Team planning session",
  },
  {
    id: "3d-animation",
    tag: "Animation",
    title: "The Power of 3D Animation in Modern Marketing",
    excerpt: "How 3D animation is transforming the way brands tell their stories and engage audiences.",
    date: "Oct 20, 2024",
    author: "James Parker",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&auto=format",
    imageAlt: "3D rendered scene",
  },
];

const CATEGORIES = ["All", "Design", "AI", "Creativity", "Marketing", "Animation"];

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.id}`}>
      <article className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-card hover:shadow-cardHover transition-all duration-500 hover:-translate-y-2 cursor-pointer">
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Tag */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black shadow-sm">
              {post.tag}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-black/60">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-black leading-tight transition-colors duration-200 group-hover:text-brand-primary">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-base text-black/70 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.tag === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f5f4f0]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-6 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            Articles & Insights
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight text-black mb-8 animate-scale-in max-w-4xl">
            Stories, insights, and ideas
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-black/70 max-w-3xl animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Expert perspectives on design, technology, and digital strategy to help you stay ahead of the curve.
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

      {/* Blog Grid */}
      <section className="w-full px-6 pb-20 md:px-8 md:pb-24 lg:px-12 lg:pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-fade-in-up"
                style={{animationDelay: `${index * 50}ms`}}
              >
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-black/50">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
