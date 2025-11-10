/**
 * Benefits Stack Component
 *
 * Recreates the black parallax section with a sticky headline on the left
 * and three cards that climb upward and stack on the right as the user scrolls.
 * Cards stay pinned with sticky positioning, while lightweight scroll math
 * nudges the earlier cards upward to reveal a subtle “header” peek, mimicking
 * a solitaire-style stack.
 */

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Benefit = {
  title: string;
  description: string;
  icon: "pricing" | "speed" | "team";
};

const BENEFITS: Benefit[] = [
  {
    icon: "pricing",
    title: "Fixed Monthly Price",
    description:
      "Enjoy unlimited access to our design services with a transparent, fixed subscription. No hidden costs—just continuous design support that fits your budget.",
  },
  {
    icon: "speed",
    title: "Quick Turnaround",
    description:
      "Expect rapid delivery without compromising quality. Tight feedback loops keep every project on track and moving forward.",
  },
  {
    icon: "team",
    title: "Expert Designers",
    description:
      "Collaborate with senior-level designers dedicated to delivering thoughtful, high-quality experiences that elevate your brand presence.",
  },
];

const ICONS: Record<Benefit["icon"], ReactNode> = {
  pricing: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect
        x="10"
        y="14"
        width="30"
        height="30"
        rx="10"
        stroke="white"
        strokeWidth="2.5"
      />
      <rect
        x="28"
        y="22"
        width="20"
        height="20"
        rx="7"
        stroke="white"
        strokeWidth="2.5"
      />
    </svg>
  ),
  speed: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect
        x="16"
        y="12"
        width="10"
        height="40"
        rx="5"
        stroke="white"
        strokeWidth="2.5"
      />
      <rect
        x="34"
        y="12"
        width="14"
        height="40"
        rx="7"
        stroke="white"
        strokeWidth="2.5"
      />
    </svg>
  ),
  team: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect
        x="12"
        y="18"
        width="16"
        height="28"
        rx="8"
        stroke="white"
        strokeWidth="2.5"
      />
      <rect
        x="30"
        y="18"
        width="22"
        height="28"
        rx="11"
        stroke="white"
        strokeWidth="2.5"
      />
    </svg>
  ),
};

function CardIcon({ name }: { name: Benefit["icon"] }) {
  return <div className="text-white">{ICONS[name]}</div>;
}

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const STACK_PEEK = 72; // px height of the exposed “header” when stacked
const STICKY_OFFSET_REM = 6; // aligns with lg:top-24 (6rem ~= 96px)

export function BenefitsStack() {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      const rawProgress =
        (windowHeight * 0.8 - rect.top) / (containerHeight + windowHeight * 0.5);

      setScrollProgress(clamp(rawProgress));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const getCardStyles = (index: number) => {
    const total = BENEFITS.length;

    // Calculate when each card should start moving up
    // Card 0 starts at 0, Card 1 at 0.33, Card 2 at 0.66
    const cardStartProgress = index / total;
    const cardEndProgress = (index + 1) / total;

    // Individual card progress: 0 = hasn't started, 1 = fully positioned
    const cardProgress = clamp(
      (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress),
      0,
      1
    );

    // CRITICAL: Later cards need LOWER top values to cover earlier cards
    // Card 0: top = 96px + (2 * 72) = 240px (bottom position)
    // Card 1: top = 96px + (1 * 72) = 168px (middle position, covers card 0)
    // Card 2: top = 96px + (0 * 72) = 96px (top position, covers card 1 & 0)
    const stackOffset = (total - 1 - index) * STACK_PEEK;

    // Cards move up from below (positive translateY to 0)
    // Starting from 400px below their final position
    const translateY = (1 - cardProgress) * 400;

    return {
      transform: `translate3d(0, ${translateY}px, 0)`,
      zIndex: index, // Higher index = higher z-index, so later cards cover earlier ones
      top: `calc(${STICKY_OFFSET_REM}rem + ${stackOffset}px)`,
    };
  };

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#050505] py-20 text-white lg:min-h-[200vh] lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:h-full lg:px-12">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left rail */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
              <span className="inline-block h-2 w-2 rounded-full bg-[#f43c00]" />
              Web Development
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Ready to unlock these incredible{" "}
              <span className="text-white/30">subscription benefits?</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-white/65">
              At the heart of our design process is a commitment to actively
              listen and understand your unique challenges and needs.
            </p>
          </div>

          {/* Right column - stacked cards */}
          <div className="relative space-y-6 lg:space-y-0 lg:pb-64">
            {BENEFITS.map((benefit, index) => (
              <div key={benefit.title} className="lg:min-h-[360px]">
                <article
                  className="relative rounded-[32px] border border-white/12 bg-black/40 p-7 text-left shadow-[0_35px_90px_rgba(0,0,0,0.65)] backdrop-blur-[2px] transition-transform duration-500 md:p-9 lg:sticky"
                  style={getCardStyles(index)}
                >
                  <div className="pointer-events-none absolute inset-4 rounded-[28px] border border-white/5" />
                  <div className="relative flex h-full flex-col justify-between gap-10">
                    <p className="text-sm leading-relaxed text-white/70">
                      {benefit.description}
                    </p>
                    <div>
                      <CardIcon name={benefit.icon} />
                      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
