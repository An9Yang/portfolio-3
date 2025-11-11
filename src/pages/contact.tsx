/**
 * Contact Page
 *
 * Contact form and information:
 * - Hero section
 * - Contact form with validation
 * - Contact information
 * - Map or location info
 *
 * Uses shadcn/ui form components with react-hook-form.
 */

"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const CONTACT_INFO = {
  email: "info@mitchy.com",
  phone: "+263-443-2420",
  address: {
    street: "Tebs Street",
    line2: "1007 N. College Ave. Unit B",
    city: "Fort Collins, CO 80524",
  },
  hours: {
    days: "Monday — Friday",
    time: "9:00 AM — 6:00 PM",
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#EEE9E3]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-6 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight text-black mb-8 animate-scale-in max-w-4xl">
            Let's build something <span className="text-brand-primary">amazing</span> together
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-black/70 max-w-3xl animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left - Contact Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-black uppercase tracking-wide">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="h-14 text-base bg-white border-black/10 focus:border-brand-primary rounded-xl"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-black uppercase tracking-wide">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-14 text-base bg-white border-black/10 focus:border-brand-primary rounded-xl"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-black uppercase tracking-wide">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-14 text-base bg-white border-black/10 focus:border-brand-primary rounded-xl"
                      placeholder="Your Company Name"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-black uppercase tracking-wide">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[200px] text-base bg-white border-black/10 focus:border-brand-primary rounded-xl resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-base rounded-full bg-brand-primary hover:bg-brand-primaryHover text-white font-semibold shadow-button hover:shadow-buttonHover hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Right - Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Email */}
                <div className="p-6 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Email</h3>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-base text-black/70 hover:text-brand-primary transition-colors duration-200"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Phone</h3>
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-base text-black/70 hover:text-brand-primary transition-colors duration-200"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-6 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Office</h3>
                      <address className="text-base text-black/70 not-italic leading-relaxed">
                        {CONTACT_INFO.address.street}<br />
                        {CONTACT_INFO.address.line2}<br />
                        {CONTACT_INFO.address.city}
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <p className="text-white/70">{CONTACT_INFO.hours.days}</p>
                  <p className="text-2xl font-bold">{CONTACT_INFO.hours.time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="w-full px-6 py-20 md:px-8 md:py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-black/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            Quick Response
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            We typically respond within 24 hours
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Our team is here to help you with any questions about our services, pricing, or how we can work together on your next project.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
