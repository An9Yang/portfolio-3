/**
 * License Page
 *
 * Software and content licensing information.
 */

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "react-router-dom";

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-[#EEE9E3]">
      <Header />

      <section className="w-full px-6 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            Legal
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-black mb-8 animate-scale-in">
            License
          </h1>
        </div>
      </section>

      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[900px] mx-auto space-y-12">
          <article>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Website License
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-black/75">
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Mitchy or its content suppliers and is protected by international copyright laws.
              </p>
              <p>
                Unless otherwise stated, Mitchy and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Client Work License
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-black/75">
              <p>
                Upon full payment, clients receive full ownership and commercial rights to deliverables created specifically for their project. This includes designs, code, and other creative assets as outlined in the project agreement.
              </p>
              <p>
                Mitchy retains the right to display completed client work in portfolios, case studies, and marketing materials unless explicitly restricted by a non-disclosure agreement.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Third-Party Licenses
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-black/75">
              <p>
                This website uses various open-source libraries and frameworks. We are grateful to the open-source community for their contributions:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0 mt-2.5"></div>
                  <span>React - MIT License</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0 mt-2.5"></div>
                  <span>Tailwind CSS - MIT License</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0 mt-2.5"></div>
                  <span>Lucide Icons - ISC License</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0 mt-2.5"></div>
                  <span>Images from Unsplash - Unsplash License</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Questions about licensing?
          </h2>
          <p className="text-lg text-black/70 mb-8">
            Contact our team for clarification on any licensing matters.
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
