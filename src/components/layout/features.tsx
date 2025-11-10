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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-[#f43c00] text-lg md:text-xl font-bold tracking-wide uppercase">
              PUSH LIMITS
            </h3>
          </div>
          <div>
            <h3 className="text-[#f43c00] text-lg md:text-xl font-bold tracking-wide uppercase">
              PULL TOGETHER
            </h3>
          </div>
          <div>
            <h3 className="text-[#f43c00] text-lg md:text-xl font-bold tracking-wide uppercase">
              AND UNITE THE CULTURE.
            </h3>
          </div>
        </div>

        {/* Three Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-200 to-slate-300">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop"
              alt="Office workspace showing modern work environment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] bg-gradient-to-br from-amber-200 to-orange-300">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=1000&fit=crop"
              alt="Collaborative office space with orange lighting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-300 to-slate-400">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=1000&fit=crop"
              alt="Professional working in modern office environment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
