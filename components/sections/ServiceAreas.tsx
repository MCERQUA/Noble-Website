const serviceAreas = {
  "South Bay": [
    "San Jose", "Cupertino", "Los Gatos", "Campbell", "Saratoga",
    "Santa Clara", "Sunnyvale", "Mountain View", "Los Altos",
    "Los Altos Hills", "Palo Alto", "Milpitas", "Morgan Hill", "Gilroy"
  ],
  "Peninsula": [
    "Atherton", "Belmont", "Brisbane", "Burlingame", "Colma",
    "Daly City", "East Palo Alto", "Foster City", "Half Moon Bay",
    "Hillsborough", "Menlo Park", "Millbrae", "Pacifica", "Portola Valley",
    "Redwood City", "San Bruno", "San Carlos", "San Mateo",
    "South San Francisco", "Woodside"
  ],
  "East Bay": [
    "Alameda", "Albany", "Berkeley", "Castro Valley", "Dublin",
    "Emeryville", "Fremont", "Hayward", "Livermore", "Newark",
    "Oakland", "Piedmont", "Pleasanton", "San Leandro", "San Lorenzo",
    "Union City", "Alamo", "Blackhawk", "Clayton", "Concord",
    "Danville", "El Cerrito", "El Sobrante", "Hercules", "Lafayette",
    "Martinez", "Moraga", "Orinda", "Pinole", "Pleasant Hill",
    "Richmond", "San Pablo", "San Ramon", "Walnut Creek", "Antioch",
    "Bay Point", "Brentwood", "Discovery Bay", "Oakley", "Pittsburg"
  ],
  "North Bay / Northern California": [
    "American Canyon", "Benicia", "Calistoga", "Dixon", "Fairfield",
    "Napa", "Petaluma", "Rio Vista", "Rohnert Park", "St. Helena",
    "Suisun City", "Vacaville", "Vallejo", "Yountville", "Cloverdale",
    "Cotati", "Healdsburg", "Santa Rosa", "Sebastopol", "Sonoma",
    "Windsor", "Belvedere", "Corte Madera", "Fairfax", "Larkspur",
    "Mill Valley", "Novato", "Ross", "San Anselmo", "San Rafael",
    "Sausalito", "Tiburon", "Davis", "West Sacramento", "Winters",
    "Woodland", "Yuba City", "Marysville", "Lincoln", "Rocklin",
    "Roseville", "Citrus Heights", "Carmichael", "Fair Oaks",
    "Folsom", "Orangevale", "Rancho Cordova", "Sacramento", "Elk Grove",
    "Galt", "Isleton", "Lodi", "Angels Camp", "Arnold", "Copperopolis",
    "Murphys", "Brentwood", "Byron", "Knightsen", "Oakley"
  ],
  "Monterey Bay": [
    "Aptos", "Aromas", "Ben Lomond", "Bonny Doon", "Boulder Creek",
    "Brookdale", "Capitola", "Corralitos", "Davenport", "Felton",
    "Freedom", "La Selva Beach", "Los Altos", "Mount Hermon",
    "Rio Del Mar", "Santa Cruz", "Scotts Valley", "Soquel", "Watsonville",
    "Carmel", "Carmel Valley", "Chualar", "Del Rey Oaks", "Gonzales",
    "Greenfield", "King City", "Marina", "Monterey", "Moss Landing",
    "Pacific Grove", "Pebble Beach", "Prunedale", "Salinas",
    "Sand City", "Seaside", "Soledad", "Castroville", "Hollister",
    "San Juan Bautista", "Tres Pinos"
  ]
}

export function ServiceAreas() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Service Areas</h2>
          <p className="mt-4 text-lg text-gray-600">
            Proudly serving the San Francisco Bay Area and Northern California
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(serviceAreas).map(([region, cities]) => (
            <div key={region} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-500 mb-4">{region}</h3>
              <div className="grid grid-cols-2 gap-2">
                {cities.map((city) => (
                  <div key={city} className="text-sm text-gray-600">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}