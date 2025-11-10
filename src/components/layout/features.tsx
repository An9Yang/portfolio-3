/**
 * Features Component
 *
 * Displays three featured sections with:
 * - Bold orange headlines ("PUSH LIMITS", "PULL TOGETHER", "AND UNITE THE CULTURE.")
 * - Three office/workspace images in a horizontal grid
 *
 * This section showcases the company culture and values through
 * visual storytelling with images and motivational headlines.
 */

export function Features() {
  return (
    <section className="w-full px-8 pt-12 pb-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Three Headlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="animate-slide-in-left">
            <h3 className="text-brand-primary text-xl md:text-2xl font-bold tracking-wide uppercase transition-all duration-300 hover:tracking-wider">
              PUSH LIMITS
            </h3>
          </div>
          <div className="animate-slide-in-left" style={{animationDelay: '100ms'}}>
            <h3 className="text-brand-primary text-xl md:text-2xl font-bold tracking-wide uppercase transition-all duration-300 hover:tracking-wider">
              PULL TOGETHER
            </h3>
          </div>
          <div className="animate-slide-in-left" style={{animationDelay: '200ms'}}>
            <h3 className="text-brand-primary text-xl md:text-2xl font-bold tracking-wide uppercase transition-all duration-300 hover:tracking-wider">
              AND UNITE THE CULTURE.
            </h3>
          </div>
        </div>

        {/* Three Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop"
              alt="Office workspace showing modern work environment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-amber-200 to-orange-300 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2" style={{transitionDelay: '50ms'}}>
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=1000&fit=crop"
              alt="Collaborative office space with orange lighting"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-slate-300 to-slate-400 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2" style={{transitionDelay: '100ms'}}>
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=1000&fit=crop"
              alt="Professional working in modern office environment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
