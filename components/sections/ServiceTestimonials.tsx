import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Shuya W.",
    rating: 5,
    text: "The consultation process was thorough--they took the time to assess our needs and explain the benefits of spray foam insulation in a way that made us feel confident about our decision",
    image: "/images/spray-foam-testimonial.jpg"
  },
  {
    id: 2,
    name: "Danny W.",
    rating: 5,
    text: "the team were awesome from the beginning. They helped me think through insulation options with expertise, patience, and clarity. The spray foam they added to our attic has made a massive improvement to the comfort of our home"
  }
]

export function ServiceTestimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Customer Testimonials</h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our satisfied customers have to say
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {testimonial.image && (
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={testimonial.image}
                    alt="Spray foam insulation"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-secondary-500">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{testimonial.rating}.0</span>
                </div>
                <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}