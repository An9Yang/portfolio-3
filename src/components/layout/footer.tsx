import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const FOOTER_NAV = {
  main: ["Home", "About us", "Service", "Works", "Blogs"],
  secondary: ["404", "Styleguide", "License", "Changelog"],
  legal: ["Privacy policy", "Terms of service"],
};

const CONTACT_INFO = {
  phone: "+263-443-2420",
  email: "info@mitchy.com",
  address: {
    street: "Tebs Street",
    line2: "1007 N. College Ave. Unit B",
    city: "Fort Collins, CO 80524",
  },
};

const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

function SocialIcon({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:border-white/40 hover:bg-white/10"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="overflow-hidden rounded-[48px] bg-[#ff4800] px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
          {/* Top Section */}
          <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:gap-8 lg:pb-16">
            {/* Column 1: Copyright + CTA */}
            <div className="flex flex-col gap-8">
              <p className="text-base font-medium text-white">©Mitchy 2025</p>
              <button className="w-fit rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get Started Today
              </button>
            </div>

            {/* Column 2: Contact Info */}
            <div className="flex flex-col gap-3 text-white">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-base font-medium transition-opacity hover:opacity-70"
              >
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-base font-medium transition-opacity hover:opacity-70"
              >
                {CONTACT_INFO.email}
              </a>
              <address className="mt-2 text-base not-italic leading-relaxed">
                {CONTACT_INFO.address.street}
                <br />
                {CONTACT_INFO.address.line2}
                <br />
                {CONTACT_INFO.address.city}
              </address>
            </div>

            {/* Column 3: Main Nav */}
            <div className="flex flex-col gap-3">
              {FOOTER_NAV.main.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-base font-medium text-white transition-opacity hover:opacity-70"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Column 4: Secondary Nav */}
            <div className="flex flex-col gap-3">
              {FOOTER_NAV.secondary.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-base font-medium text-white transition-opacity hover:opacity-70"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Column 5: Legal + Hours */}
            <div className="flex flex-col gap-3">
              {FOOTER_NAV.legal.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-base font-medium text-white transition-opacity hover:opacity-70"
                >
                  {link}
                </a>
              ))}
              <div className="mt-6 text-white">
                <p className="text-base font-medium">Mo—Fr</p>
                <p className="text-2xl font-semibold">9am—6pm</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="relative mt-12 lg:mt-16">
            {/* Giant Mitchy Logo */}
            <div className="mb-8">
              <h2 className="text-[80px] font-bold leading-none text-white md:text-[120px] lg:text-[180px] xl:text-[220px]">
                Mitchy.
              </h2>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              {/* Left: Powered by */}
              <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                POWERED BY WEBFLOW.
              </p>

              {/* Right: Social Icons + Badge */}
              <div className="flex flex-col items-start gap-6 md:items-end">
                {/* Social Icons */}
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <SocialIcon
                      key={social.label}
                      icon={social.icon}
                      label={social.label}
                    />
                  ))}
                </div>

                {/* Made in Webflow Badge */}
                <div className="flex items-center gap-2 rounded-md bg-white px-3 py-2">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7 8.7c-2.4 0-4.3 1.5-5.2 3.8-.9-2.3-2.8-3.8-5.2-3.8-3.1 0-5.6 2.5-5.6 5.6 0 4.5 5.6 8.7 10.8 11.6 5.2-2.9 10.8-7.1 10.8-11.6 0-3.1-2.5-5.6-5.6-5.6z"
                      fill="#4353FF"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-black">
                    Made in Webflow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
