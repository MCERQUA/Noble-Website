import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/config/site.config"

export const metadata: Metadata = {
  title: `Thank You | ${siteConfig.name}`,
  description: "Thank you for contacting Noble Insulation. We'll get back to you soon!",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-8">
          We've received your message and will get back to you within 24 hours.
        </p>
        <p className="text-gray-600 mb-8">
          For immediate assistance, please call us at{' '}
          <a href={`tel:${siteConfig.phone}`} className="text-primary-500 font-semibold hover:underline">
            {siteConfig.phone}
          </a>
        </p>
        <div className="space-y-4">
          <Button href="/" size="lg" className="w-full sm:w-auto">
            Return to Home
          </Button>
          <div>
            <Link href="/services" className="text-primary-500 hover:underline">
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}