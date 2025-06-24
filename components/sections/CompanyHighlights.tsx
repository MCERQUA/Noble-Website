import { MapPin, Home, Star } from "lucide-react"

export function CompanyHighlights() {
  const highlights = [
    {
      icon: Home,
      title: "Locally owned and operated",
      description: "Family-owned business serving our community"
    },
    {
      icon: MapPin,
      title: "Based in Richmond, CA",
      description: "Serving the entire Bay Area and Northern California"
    },
    {
      icon: Star,
      title: "★★★★★ Top reviews on Yelp",
      description: "Consistently rated 5 stars by our customers"
    },
    {
      icon: Star,
      title: "★★★★★ Top reviews on Google",
      description: "Trusted by hundreds of satisfied customers"
    }
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-12 w-12 text-primary-600">
                  <highlight.icon className="h-full w-full" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}