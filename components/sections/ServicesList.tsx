import { Check } from "lucide-react"

const services = [
  {
    id: "open-cell",
    name: "Open Cell Spray Foam Insulation",
    popular: true,
    description: "Our most popular service - excellent for sound dampening and thermal insulation"
  },
  {
    id: "closed-cell",
    name: "Closed Cell Spray Foam Insulation",
    description: "Superior moisture barrier and structural support for demanding applications"
  },
  {
    id: "fiberglass",
    name: "Fiberglass Insulation",
    description: "Traditional, cost-effective insulation solution for walls and attics"
  },
  {
    id: "cellulose-attic",
    name: "Cellulose Insulation (Attic)",
    description: "Eco-friendly blown-in insulation for attic spaces"
  },
  {
    id: "cellulose-walls",
    name: "Cellulose Insulation Injection (Walls)",
    subtitle: "aka Drill and Fill Insulation",
    description: "Retrofit insulation for existing walls without major renovation"
  },
  {
    id: "rigid-board",
    name: "Rigid Board Insulation",
    description: "High R-value foam boards for foundations and exterior applications"
  },
  {
    id: "mineral-wool",
    name: "Mineral Wool Insulation",
    description: "Fire-resistant and soundproofing insulation option"
  },
  {
    id: "radiant-barrier",
    name: "Radiant Barrier Insulation",
    description: "Reflects radiant heat to keep your space cooler"
  },
  {
    id: "air-sealing",
    name: "Air Sealing",
    description: "Comprehensive sealing of gaps and cracks to prevent air leakage"
  },
  {
    id: "removal",
    name: "Insulation Removal",
    description: "Safe removal of old or damaged insulation"
  },
  {
    id: "consultation",
    name: "General Consultation",
    description: "Expert advice on the best insulation solutions for your project"
  }
]

export function ServicesList() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Insulation Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive insulation solutions for every need
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow"
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="flex items-start">
                <Check className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  {service.subtitle && (
                    <p className="text-sm text-gray-500 italic">{service.subtitle}</p>
                  )}
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}