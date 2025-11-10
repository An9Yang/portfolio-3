/**
 * Logo Marquee Component
 *
 * Displays partner/client logos in an infinite scrolling banner.
 * - Smooth right-to-left animation
 * - Seamless infinite loop
 * - Separated by vertical dividers
 * - Grayscale logos for professional appearance
 */

export function LogoMarquee() {
  const logos = [
    "Epicurious",
    "FeatherDev",
    "Nietzsche",
    "Luminous",
    "Hourglass",
    "Epicurious",
    "FeatherDev",
    "Nietzsche",
  ];

  return (
    <section className="w-full overflow-hidden py-8 border-y border-black/10">
      <div className="relative flex">
        {/* First set of logos */}
        <div className="flex shrink-0 items-center gap-0 animate-scroll-left">
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex items-center">
              <div className="px-12 md:px-16">
                <span className="text-2xl md:text-3xl font-semibold text-black/40 whitespace-nowrap tracking-wide">
                  {logo}
                </span>
              </div>
              {index < logos.length - 1 && (
                <div className="w-px h-12 bg-black/10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Second set of logos for seamless loop */}
        <div className="flex shrink-0 items-center gap-0 animate-scroll-left">
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex items-center">
              <div className="px-12 md:px-16">
                <span className="text-2xl md:text-3xl font-semibold text-black/40 whitespace-nowrap tracking-wide">
                  {logo}
                </span>
              </div>
              {index < logos.length - 1 && (
                <div className="w-px h-12 bg-black/10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
