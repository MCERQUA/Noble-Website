import { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { CTASection } from "@/components/sections/CTASection"
import { ServicesList } from "@/components/sections/ServicesList"
import { ServiceAreas } from "@/components/sections/ServiceAreas"
import { ServiceTestimonials } from "@/components/sections/ServiceTestimonials"
import { BreadcrumbSchema, FAQSchema } from "@/components/seo"
import { siteConfig } from "@/config/site.config"

export const metadata: Metadata = {
  title: `Insulation Services | ${siteConfig.name}`,
  description: "Professional spray foam, fiberglass, cellulose, and other insulation services in the San Francisco Bay Area. Free estimates available.",
  openGraph: {
    title: `Insulation Services | ${siteConfig.name}`,
    description: "Professional spray foam, fiberglass, cellulose, and other insulation services in the San Francisco Bay Area. Free estimates available.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
}

export default function ServicesPage() {
  const faqItems = [
    {
      question: "What types of insulation do you offer?",
      answer: "We offer a comprehensive range including Open Cell Spray Foam (our most popular), Closed Cell Spray Foam, Fiberglass, Cellulose (both attic and wall injection), Rigid Board, Mineral Wool, and Radiant Barrier insulation."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes! We provide free estimates for all insulation projects. Our team will assess your needs and provide a detailed quote with no obligation. Call us at 510-890-7888 to schedule."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Noble Insulation, Inc. is fully licensed, bonded, and insured. We've been serving the Bay Area since 2019 with 18+ years of industry experience."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the entire San Francisco Bay Area and Northern California, including South Bay, Peninsula, East Bay, North Bay, and Monterey Bay regions. Check our service areas list for specific cities."
    }
  ]

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ]}
      />
      <FAQSchema items={faqItems} />
      <Hero
        title="Professional Insulation Services"
        description="Specializing in Spray Foam Insulation with 18+ years of experience serving the San Francisco Bay Area"
        primaryButtonText="Call for free estimate"
        primaryButtonHref={`tel:${siteConfig.phone}`}
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
        backgroundImage="/images/service-image-1.png"
      />
      
      <ServicesList />
      
      <ServiceTestimonials />
      
      <ServiceAreas />
      
      <CTASection
        title="Ready to Improve Your Insulation?"
        description="Contact us today for a free consultation and estimate. Our experts will help you choose the best insulation solution for your project."
        buttonText="Call for free estimate"
        buttonHref={`tel:${siteConfig.phone}`}
      />
    </>
  )
}