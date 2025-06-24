import { Hero } from "@/components/sections/Hero"
import { ServiceGrid } from "@/components/sections/ServiceGrid"
import { CTASection } from "@/components/sections/CTASection"
import { StatsSection } from "@/components/sections/StatsSection"
import { CompanyHighlights } from "@/components/sections/CompanyHighlights"
import { TestimonialSection } from "@/components/sections/TestimonialSection"
import { siteConfig } from "@/config/site.config"
import { BreadcrumbSchema } from "@/components/seo"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" }
        ]}
      />
      <Hero
        title="18 Years of Insulation Quality, Experience, and Expertise"
        subtitle=""
        description="Serving the San Francisco Bay Area and Northern California regions with a speciality in Spray Foam Insulation."
        primaryButtonText="Call for a free estimate"
        primaryButtonHref={`tel:${siteConfig.phone}`}
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
        backgroundImage="/images/hero-background.png"
      />
      
      <StatsSection />
      
      <ServiceGrid />
      
      <CompanyHighlights />
      
      <TestimonialSection />
      
      <CTASection
        title="Ready to Get Started?"
        description="Contact us today for a free consultation and insulation quote."
        buttonText="Call for a free estimate"
        buttonHref={`tel:${siteConfig.phone}`}
      />
    </>
  )
}