import { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/config/site.config"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactStructuredData } from "@/components/seo/ContactStructuredData"

// Metadata is handled in the metadata.ts file

export default function ContactPage() {
  return (
    <>
      <ContactStructuredData />
      <Hero
        title="Contact Noble Insulation"
        description="Get in touch for a free insulation consultation and estimate. Serving the San Francisco Bay Area."
        primaryButtonText="Call Now"
        primaryButtonHref={`tel:${siteConfig.phone}`}
        secondaryButtonText="Email Us"
        secondaryButtonHref={`mailto:${siteConfig.email}`}
        backgroundImage="/images/contact-background.png"
      />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Insulation Estimate</h2>
                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  action="/thank-you"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </div>
                  
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Your First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                      Best way to reach you (Phone Number or Email) *
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      required
                      placeholder="555-123-4567 or email@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your insulation project..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Submit
                  </Button>
                </form>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${siteConfig.phone}`} className="text-gray-600 hover:text-primary-500">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-primary-500">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  {Object.entries(siteConfig.businessHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-medium capitalize">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}