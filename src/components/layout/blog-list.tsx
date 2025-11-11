import { Link } from "react-router-dom";

type BlogPost = {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  hasBackground?: boolean;
};

const BLOG_POSTS: BlogPost[] = [
  {
    id: "seo-king",
    tag: "Design",
    title: "Why SEO Is Still King — and How We Help You Rule the Rankings",
    description:
      "Master the fundamentals of Generative AI in just one day. Learn how to simplify and harness...",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80&auto=format",
    imageAlt: "Desk with vintage items",
  },
  {
    id: "brand-identity",
    tag: "AI",
    title: "What Makes a Great Brand Identity? Our Creative Team Weighs In",
    description:
      "Master the fundamentals of Generative AI in just one day. Learn how to simplify and harness...",
    image:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800&q=80&auto=format",
    imageAlt: "Red bottles product shot",
  },
  {
    id: "ai-creativity",
    tag: "Creativity",
    title: "AI + Creativity: How We're Using Tech to Supercharge Campaigns",
    description:
      "Master the fundamentals of Generative AI in just one day. Learn how to simplify and harness...",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80&auto=format",
    imageAlt: "Blue tech device",
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.id}`}>
      <article
        className={`group grid grid-cols-1 gap-6 py-16 md:grid-cols-[1fr_auto_1fr] md:gap-10 md:px-0 md:py-20 lg:grid-cols-[1.2fr_auto_1fr] lg:gap-12 lg:py-24 transition-all duration-500 cursor-pointer ${
          post.hasBackground ? "rounded-xl bg-[#E8E5DF] hover:shadow-lg hover:-translate-y-1" : ""
        }`}
      >
        {/* Left: Tag + Title */}
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-primary/20">
            {post.tag}
          </span>
          <h3 className="text-2xl font-semibold leading-tight text-black md:text-3xl lg:text-[38px] lg:leading-[1.15] transition-colors duration-300 group-hover:text-brand-primary">
            {post.title}
          </h3>
        </div>

        {/* Center: Image */}
        <div className="flex items-center justify-center">
          <div className="relative h-[260px] w-[260px] overflow-hidden rounded-xl shadow-md md:h-[300px] md:w-[300px] lg:h-[340px] lg:w-[340px] transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Right: Description */}
        <div className="flex flex-col justify-center">
          <p className="text-base leading-relaxed text-black/75 md:text-lg transition-colors duration-200 hover:text-black/90">
            {post.description}
          </p>
        </div>
      </article>
    </Link>
  );
}

export function BlogList() {
  return (
    <section className="w-full bg-[#f5f4f0] py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12 lg:px-20 xl:px-24">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-black/70">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#f43c00]" />
          ARTICLE & BLOGS
        </div>

        {/* Blog Posts */}
        <div className="space-y-0">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
