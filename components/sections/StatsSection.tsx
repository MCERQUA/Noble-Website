export function StatsSection() {
  const stats = [
    {
      value: "700+",
      label: "projects insulated"
    },
    {
      value: "10+",
      label: "insulation options"
    },
    {
      value: "$0",
      label: "cost to plan your budget"
    }
  ]

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary-600 sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}