/**
 * Blog Detail Page - Displays full article with consistent design
 */

import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, ArrowUpRight, Calendar, User, Tag as TagIcon } from "lucide-react";
import { useEffect } from "react";

type BlogPost = {
  id: string;
  tag: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
};

const BLOG_POSTS: Record<string, BlogPost> = {
  "seo-king": {
    id: "seo-king",
    tag: "Design",
    title: "Why SEO Is Still King — and How We Help You Rule the Rankings",
    date: "Nov 8, 2024",
    author: "Sarah Mitchell",
    readTime: "8 min read",
    excerpt: "Master the fundamentals of SEO and learn how to dominate search results with proven strategies.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1600&q=80&auto=format",
    content: [
      "In the ever-evolving landscape of digital marketing, one thing remains constant: the power of Search Engine Optimization (SEO). Despite the emergence of new platforms and marketing channels, SEO continues to be the foundation of successful online visibility.",
      "The digital marketplace has become increasingly competitive, with businesses vying for the attention of potential customers. Search engines, particularly Google, remain the primary gateway through which users discover new products, services, and information. Understanding and implementing effective SEO strategies is no longer optional—it's essential for survival in the digital age.",
      "Our approach to SEO is comprehensive and data-driven. We don't just focus on keywords; we analyze user intent, competitor strategies, and emerging trends to create holistic optimization plans that deliver sustainable results.",
      "Technical SEO forms the backbone of our strategy. We ensure your website is fast, mobile-friendly, and easily crawlable by search engines. Page speed optimization, structured data implementation, and proper URL architecture are just some of the elements we perfect.",
      "Content remains king in the SEO world, but not just any content. We create valuable, engaging content that answers real questions your audience is asking. Our keyword research goes beyond search volume to understand the context and intent behind each query.",
      "Link building has evolved significantly over the years. We focus on earning high-quality backlinks through compelling content, strategic partnerships, and digital PR—no black hat tactics, just genuine authority building that stands the test of time."
    ],
  },
  "brand-identity": {
    id: "brand-identity",
    tag: "AI",
    title: "What Makes a Great Brand Identity? Our Creative Team Weighs In",
    date: "Nov 5, 2024",
    author: "Elena Rodriguez",
    readTime: "6 min read",
    excerpt: "Discover the key elements that make brand identities memorable and effective in today's market.",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=1600&q=80&auto=format",
    content: [
      "Brand identity is more than just a logo or color scheme—it's the visual, verbal, and emotional expression of what makes your business unique. In a crowded marketplace, a strong brand identity is your most powerful differentiator.",
      "Our creative team has worked with dozens of brands across industries, and we've identified several key elements that consistently make brand identities stand out and resonate with audiences.",
      "First and foremost, authenticity is paramount. Your brand identity must reflect who you truly are as a business, not who you think you should be. Audiences today have a keen sense for detecting inauthenticity, and they reward brands that stay true to their values.",
      "Visual consistency across all touchpoints creates recognition and trust. From your website to social media, packaging to advertising, every element should feel part of a cohesive whole. This doesn't mean everything looks identical, but rather that there's a clear visual language that ties everything together.",
      "The most successful brand identities tell a story. They create an emotional connection with their audience by communicating not just what the business does, but why it exists and what it stands for. This narrative becomes the thread that runs through all brand communications.",
      "Finally, great brand identities are flexible enough to evolve. The best brands maintain their core identity while adapting to changing markets, technologies, and audience expectations. Planning for longevity means building a system that can grow with your business."
    ],
  },
  "ai-creativity": {
    id: "ai-creativity",
    tag: "Creativity",
    title: "AI + Creativity: How We're Using Tech to Supercharge Campaigns",
    date: "Nov 1, 2024",
    author: "Marcus Chen",
    readTime: "10 min read",
    excerpt: "Exploring the intersection of artificial intelligence and creative design in modern marketing.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80&auto=format",
    content: [
      "The rise of artificial intelligence has sparked debates about the future of creativity. Will AI replace human creatives? The answer is nuanced: AI won't replace creativity, but creatives who use AI will replace those who don't.",
      "At our agency, we've embraced AI as a powerful tool that enhances rather than replaces human creativity. The technology allows us to work faster, explore more options, and push creative boundaries in ways that weren't possible before.",
      "One of the most impactful applications of AI in our workflow is in the ideation phase. AI tools help us generate dozens of creative concepts quickly, which we then refine and develop with human insight and strategic thinking.",
      "Data analysis is another area where AI shines. By processing vast amounts of performance data, AI helps us understand what resonates with audiences and why. This insight informs our creative decisions, making them more strategic and effective.",
      "Personalization at scale is perhaps the most exciting opportunity AI presents. We can now create campaign variations tailored to different audience segments, all while maintaining brand consistency and quality.",
      "However, we're mindful of AI's limitations. While it excels at pattern recognition and optimization, it lacks the emotional intelligence, cultural understanding, and strategic thinking that human creatives bring to the table. The magic happens when we combine the best of both worlds."
    ],
  },
};

const RELATED_POSTS = [
  {
    id: "web-design-trends",
    title: "Top Web Design Trends Shaping 2024",
    tag: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format",
  },
  {
    id: "content-strategy",
    title: "Building a Content Strategy That Actually Works",
    tag: "Marketing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format",
  },
  {
    id: "3d-animation",
    title: "The Power of 3D Animation in Modern Marketing",
    tag: "Animation",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&auto=format",
  },
];

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = id ? BLOG_POSTS[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#EEE9E3] flex items-center justify-center">
        <Header />
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-black mb-4">Article Not Found</h1>
          <p className="text-lg text-black/70 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-primary font-semibold">
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEE9E3]">
      <Header />

      <article className="w-full px-6 pt-32 pb-20 md:px-8 md:pt-40 lg:pt-48">
        <div className="max-w-[900px] mx-auto">
          <button onClick={() => navigate(-1)} className="group inline-flex items-center gap-2 text-black/70 hover:text-brand-primary font-medium text-sm mb-8 transition-all duration-200">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>

          <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10 text-sm font-semibold shadow-sm">
              <TagIcon className="w-4 h-4 text-brand-primary" />
              {post.tag}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-black mb-6 animate-scale-in">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-base text-black/60 mb-10">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span>{post.readTime}</span>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-12 shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-black/75 mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="w-full px-6 py-20 md:px-8 md:py-24 bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Related Articles</h2>
            <Link to="/blog" className="group inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all">
              View All
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_POSTS.map((related) => (
              <Link key={related.id} to={`/blog/${related.id}`} className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-card hover:shadow-cardHover transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-brand-primary mb-2 uppercase tracking-wide">{related.tag}</p>
                  <h3 className="text-lg font-semibold text-black group-hover:text-brand-primary transition-colors">{related.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
