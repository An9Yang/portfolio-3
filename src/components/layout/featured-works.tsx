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
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&q=80&auto=format",
    imageAlt: "Keyboard 3D render",
    aspect: "tall",
  },
  {
    id: "gen-ai",
    title: "How Gen AI Transforms Process",
    year: "2024",
    category: "3D Animation",
    image:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=1200&q=80&auto=format",
    imageAlt: "Bicycle detail",
    aspect: "tall",
  },
  {
    id: "willo",
    title: "Willo",
    year: "2024",
    category: "3D Animation",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format",
    imageAlt: "Portrait with blindfold",
    aspect: "tall",
  },
  {
    id: "justine",
    title: "Justine Mahoney - Personal Website",
    year: "2024",
    category: "3D Animation",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&auto=format",
    imageAlt: "Modern office meeting pod",
    aspect: "wide",
  },
];

const FEATURED_COPY = {
  label: "Featured Works",
  tagline: "We strive to deliver measurable",
  body: "Our marketing agency offers a full range of services to help businesses create, execute, and maintain a successful online presence.",
  emphasis: "-",
};

const QUOTE_TEXT =
  "- tangible results that help our clients reach their goals.";

function ProjectCard({ project }: { project: Project }) {
  const aspectClass =
    project.aspect === "wide" ? "aspect-[4/3]" : "aspect-[5/4]";

  return (
    <article className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-card hover:shadow-cardHover transition-all duration-500 hover:-translate-y-2">
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
          <span className="text-base font-semibold md:text-lg">
            {project.year}
          </span>
          <span className="text-xs font-medium text-black/65 md:text-sm">
            {project.category}
          </span>
        </div>
      </div>
    </article>
  );
}

function QuoteCard() {
  return (
    <div className="group rounded-xl bg-bg-tertiary px-8 py-14 md:px-10 md:py-16 lg:min-h-[320px] shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
      <p className="text-3xl font-light leading-tight text-black/35 md:text-4xl lg:text-[48px] transition-colors duration-300 group-hover:text-black/50">
        {QUOTE_TEXT}
      </p>
    </div>
  );
}

function IntroCard() {
  return (
    <div className="rounded-xl border border-black/5 bg-white px-8 py-12 shadow-card md:px-10 md:py-14 animate-fade-in-up">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-black/75">
        <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
        {FEATURED_COPY.label}
      </div>
      <h2 className="mt-6 text-3xl font-semibold leading-[1.15] text-black md:text-4xl lg:text-[50px] transition-colors duration-300">
        {FEATURED_COPY.tagline}{" "}
        <span className="text-black/30 transition-colors duration-300 hover:text-black/45">{FEATURED_COPY.emphasis}</span>
      </h2>
      <p className="mt-6 max-w-md text-base leading-relaxed text-black/70 md:text-lg transition-colors duration-200 hover:text-black/85">
        {FEATURED_COPY.body}
      </p>
    </div>
  );
}

export function FeaturedWorks() {
  return (
    <section className="w-full bg-[#f5f4f0] py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12 lg:px-20 xl:px-24">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
          <div className="w-full space-y-5 lg:space-y-6">
            <ProjectCard project={PROJECTS[0]} />
            <ProjectCard project={PROJECTS[1]} />
            <QuoteCard />
          </div>
          <div className="w-full space-y-5 lg:mt-28 lg:space-y-6">
            <IntroCard />
            <ProjectCard project={PROJECTS[2]} />
            <ProjectCard project={PROJECTS[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
