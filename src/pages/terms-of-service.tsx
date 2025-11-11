/**
 * Terms of Service Page
 *
 * Legal terms and conditions with:
 * - Hero section
 * - Structured terms sections
 * - Acceptance and agreement info
 *
 * Follows same layout as Privacy Policy for consistency.
 */

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "react-router-dom";

const LAST_UPDATED = "November 1, 2024";

const TERMS_SECTIONS = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing and using Mitchy's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.",
      "We reserve the right to update and change these Terms of Service without notice. Continued use of the service after any such changes shall constitute your consent to such changes.",
    ],
  },
  {
    title: "Description of Service",
    content: [
      "Mitchy provides digital design, development, branding, and marketing services through a subscription-based model. The service includes unlimited design requests, revisions, and support as outlined in your subscription plan.",
      "We reserve the right to modify, suspend, or discontinue any aspect of the service at any time, with or without notice.",
    ],
  },
  {
    title: "User Responsibilities",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.",
      "You agree not to use the service for any illegal purposes or in any way that could damage, disable, overburden, or impair our servers or networks.",
    ],
  },
  {
    title: "Intellectual Property Rights",
    content: [
      "Upon full payment for our services, you own all rights to the final deliverables we create for you, including designs, code, and other creative assets.",
      "We retain the right to showcase completed work in our portfolio and marketing materials unless otherwise agreed upon in writing.",
      "All source files, research, concepts, and preliminary designs remain the property of Mitchy unless explicitly transferred in your agreement.",
    ],
  },
  {
    title: "Payment Terms",
    content: [
      "Subscription fees are billed monthly in advance. All fees are non-refundable except as required by law.",
      "You authorize us to charge your chosen payment method on a recurring basis. You are responsible for ensuring your payment information is current and accurate.",
      "If payment fails, we reserve the right to suspend or terminate your access to the service.",
    ],
  },
  {
    title: "Cancellation and Refunds",
    content: [
      "You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period.",
      "No refunds will be provided for partial months of service or unused service time.",
      "We reserve the right to terminate your account for violation of these terms or for any other reason at our discretion.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Our services are provided 'as is' without warranties of any kind, either express or implied.",
      "In no event shall Mitchy be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.",
      "Our total liability for any claims arising from your use of the service shall not exceed the amount you paid us in the twelve months prior to the claim.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Mitchy operates, without regard to its conflict of law provisions.",
      "Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration.",
    ],
  },
];

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-black/70 mb-4">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="text-lg leading-relaxed text-black/70 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Please read these terms of service carefully before using our services. By using Mitchy's services, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[900px] mx-auto space-y-16">
          {TERMS_SECTIONS.map((section, index) => (
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
            Questions about our terms?
          </h2>
          <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service, please contact us.
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
