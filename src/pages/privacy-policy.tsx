/**
 * Privacy Policy Page
 *
 * Legal privacy policy document with:
 * - Hero section with page title
 * - Structured policy sections
 * - Last updated date
 * - Contact information
 *
 * Follows design system with clean, readable typography.
 */

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "react-router-dom";

const LAST_UPDATED = "November 1, 2024";

const POLICY_SECTIONS = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you provide directly to us when you create an account, fill out a form, or communicate with us. This may include your name, email address, company name, phone number, and any other information you choose to provide.",
      "We automatically collect certain information about your device when you use our services, including your IP address, browser type, operating system, referring URLs, and pages visited.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to provide, maintain, and improve our services, including to process your requests, send you technical notices and support messages, and respond to your comments and questions.",
      "We may use your information to communicate with you about products, services, offers, and events, and provide news and information we think will be of interest to you.",
      "We use analytics to understand how our services are used and to improve user experience.",
    ],
  },
  {
    title: "Information Sharing and Disclosure",
    content: [
      "We do not share your personal information with third parties except as described in this privacy policy.",
      "We may share your information with service providers who perform services on our behalf, such as hosting providers, analytics providers, and customer support services.",
      "We may disclose your information if required by law or in response to valid requests by public authorities.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.",
      "However, no Internet or email transmission is ever fully secure or error-free. Please keep this in mind when disclosing any personal information to us.",
    ],
  },
  {
    title: "Your Rights and Choices",
    content: [
      "You may update, correct, or delete your account information at any time by logging into your account or contacting us directly.",
      "You may opt out of receiving promotional communications from us by following the instructions in those communications.",
      "If you are a resident of the European Economic Area, you have certain rights under the GDPR, including the right to access, correct, or delete your personal data.",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    content: [
      "We use cookies and similar tracking technologies to collect and track information about your use of our services and to improve your experience.",
      "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Our services are not directed to children under 13 (or other age as required by local law), and we do not knowingly collect personal information from children.",
      "If you learn that a child has provided us with personal information without parental consent, please contact us.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this privacy policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective.",
      "We encourage you to review this privacy policy periodically to stay informed about our information practices.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#EEE9E3]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-6 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            Legal
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-black mb-6 animate-scale-in">
            Privacy Policy
          </h1>
          <p className="text-lg text-black/70 mb-4">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="text-lg leading-relaxed text-black/70 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            At Mitchy, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[900px] mx-auto space-y-16">
          {POLICY_SECTIONS.map((section, index) => (
            <article
              key={section.title}
              className="animate-fade-in-up"
              style={{animationDelay: `${index * 50}ms`}}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-lg leading-relaxed text-black/75">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Questions about our privacy policy?
          </h2>
          <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
            If you have any questions or concerns about this Privacy Policy, please don't hesitate to contact us.
          </p>
          <Link to="/contact">
            <button className="inline-flex rounded-full px-8 py-4 bg-brand-primary hover:bg-brand-primaryHover text-white font-semibold text-base shadow-button hover:shadow-buttonHover hover:-translate-y-1 transition-all duration-300 active:scale-95">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
