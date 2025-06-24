import { Metadata } from "next"
import Image from "next/image"
import { Hero } from "@/components/sections/Hero"
import { CTASection } from "@/components/sections/CTASection"
import { Card } from "@/components/ui/Card"
import { siteConfig } from "@/config/site.config"
import { BreadcrumbSchema, FAQSchema } from "@/components/seo"

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: "Learn about Noble Insulation's story, 18+ years of experience, and commitment to quality insulation services in the Bay Area.",
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: "Learn about Noble Insulation's story, 18+ years of experience, and commitment to quality insulation services in the Bay Area.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
}


const stats = [
  { label: "Years of Experience", value: "18+" },
  { label: "Projects Insulated", value: "700+" },
  { label: "Insulation Options", value: "10+" },
  { label: "Established", value: "2019" },
]

export default function AboutPage() {
  const faqItems = [
    {
      question: "How long have you been in business?",
      answer: "Noble Insulation, Inc. was established in 2019, but our team brings 18+ years of insulation experience to every project."
    },
    {
      question: "Are your technicians certified?",
      answer: "Yes, all our insulation technicians are fully certified, licensed, and insured. We specialize in spray foam insulation and stay current with all industry standards."
    },
    {
      question: "What makes Noble Insulation different?",
      answer: "We're locally owned and operated in Richmond, CA. Our expertise in spray foam insulation, transparent pricing, and top-rated customer reviews on Yelp and Google set us apart."
    },
    {
      question: "Where are you located?",
      answer: "Our warehouse is located at 1201 Pennsylvania Ave, Suite D, Richmond, CA 95801. We serve the entire San Francisco Bay Area and Northern California."
    }
  ]

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" }
        ]}
      />
      <FAQSchema items={faqItems} />
      <Hero
        title="About Noble Insulation"
        description="18 Years of Insulation Quality, Experience, and Expertise. Locally owned and operated in Richmond, CA."
        primaryButtonText="Call for free estimate"
        primaryButtonHref={`tel:${siteConfig.phone}`}
        secondaryButtonText="Our Services"
        secondaryButtonHref="/services"
        backgroundImage="/images/about-image.png"
      />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Noble Insulation, Inc was started in 2019 with 1 spray foam machine and 2 Bay Area friends 
                with 13 years of insulation experience. After using their parent&apos;s garage to store material 
                and equipment, they soon grew and expanded to their current warehouse in Richmond, CA.
              </p>
              <p className="text-lg text-gray-600">
                Built on customer trust and a deep knowledge of the industry, Noble Insulation, Inc. has 
                proven to be the top insulation contractor in the San Francisco Bay Area and Northern 
                California regions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Image 
                  src="/images/about-image.png" 
                  alt="Noble - Our Mascot"
                  width={400}
                  height={300}
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-lg text-gray-600">
                  Meet Noble, our official company mascot and the inspiration behind our name!
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What&apos;s in a name?</h3>
              <p className="text-lg text-gray-600 mb-4">
                The name &apos;Noble&apos; and logo are inspired by the company&apos;s official mascot, Noble. 
                Just like our furry friend, we believe in loyalty, reliability, and bringing 
                warmth to every home we service.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence and customer satisfaction reflects the noble 
                qualities we strive to embody in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-primary rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-white/90">18+ years of insulation expertise you can trust.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Local Service</h3>
                <p className="text-white/90">Locally owned and operated in Richmond, CA.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-white/90">Top-rated service with 5-star reviews on Yelp and Google.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to Improve Your Insulation?"
        description="Join over 700 satisfied customers who trust Noble Insulation for their insulation needs."
        buttonText="Call for free estimate"
        buttonHref={`tel:${siteConfig.phone}`}
      />
    </>
  )
}