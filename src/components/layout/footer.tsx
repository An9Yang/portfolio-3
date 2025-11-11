import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const FOOTER_NAV = {
  main: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Service", href: "/services" },
    { label: "Works", href: "/work" },
    { label: "Blogs", href: "/blog" },
  ],
  secondary: [
    { label: "404", href: "/404-page" },
    { label: "Styleguide", href: "/styleguide" },
    { label: "License", href: "/license" },
    { label: "Changelog", href: "/changelog" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms of service", href: "/terms-of-service" },
  ],
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
  { icon: Facebook, label: "Facebook", href: "https://facebook.com", external: true },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", external: true },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", external: true },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", external: true },
];

function SocialIcon({ icon: Icon, label, href }: { icon: any; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/25 text-white transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-brand-primary active:scale-95 hover:shadow-lg"
    >
      <Icon className="h-5 w-5 transition-transform duration-300" />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-neutral-black px-6 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="overflow-hidden rounded-3xl bg-[#FF4500] px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 shadow-2xl">
          {/* Top Section */}
          <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:gap-8 lg:pb-16">
            {/* Column 1: Copyright + CTA */}
            <div className="flex flex-col gap-8">
              <p className="text-base font-medium text-white">©Mitchy 2025</p>
              <Link to="/contact">
                <button className="w-fit rounded-full bg-white px-8 py-4 text-base font-bold text-neutral-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                  Get Started Today
                </button>
              </Link>
            </div>

            {/* Column 2: Contact Info */}
            <div className="flex flex-col gap-3 text-white">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-base font-medium transition-all duration-200 hover:translate-x-1 hover:text-white/90"
              >
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-base font-medium transition-all duration-200 hover:translate-x-1 hover:text-white/90"
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
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-base font-medium text-white transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Column 4: Secondary Nav */}
            <div className="flex flex-col gap-3">
              {FOOTER_NAV.secondary.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-base font-medium text-white transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Column 5: Legal + Hours */}
            <div className="flex flex-col gap-3">
              {FOOTER_NAV.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-base font-medium text-white transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
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

              {/* Right: Social Icons */}
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <SocialIcon
                    key={social.label}
                    icon={social.icon}
                    label={social.label}
                    href={social.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
