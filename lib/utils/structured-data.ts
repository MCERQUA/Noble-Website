import { siteConfig } from '@/config/site.config'

export interface StructuredDataConfig {
  businessName: string
  description: string
  url: string
  logo?: string
  image?: string
  phone: string
  email: string
  address: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  priceRange?: string
  openingHours?: Array<{
    dayOfWeek: string | string[]
    opens: string
    closes: string
  }>
}

export function getBusinessStructuredData(): StructuredDataConfig {
  const { name, description, url, phone, email, address, businessHours } = siteConfig
  
  // Convert business hours to structured data format
  const openingHours = Object.entries(businessHours)
    .filter(([_, hours]) => hours !== 'Closed')
    .map(([day, hours]) => {
      const [opens, closes] = hours.split(' - ')
      return {
        dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
        opens: opens.trim(),
        closes: closes.trim()
      }
    })
  
  return {
    businessName: name,
    description,
    url,
    phone,
    email,
    address: {
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: 'US'
    },
    logo: `${url}/images/noble-insulation-logo.svg`,
    image: `${url}/images/hero-background.png`,
    priceRange: '$$',
    openingHours,
    // Richmond, CA coordinates
    geo: {
      latitude: 37.9358,
      longitude: -122.3477
    }
  }
}

export function generateBreadcrumbList(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`
    }))
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  provider: string
  url: string
  priceRange?: string
  areaServed?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: service.provider,
      url: siteConfig.url
    },
    url: service.url.startsWith('http') ? service.url : `${siteConfig.url}${service.url}`,
    priceRange: service.priceRange,
    areaServed: service.areaServed || [siteConfig.address.city, siteConfig.address.state]
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  url: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/noble-insulation-logo.svg`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url.startsWith('http') ? article.url : `${siteConfig.url}${article.url}`
    },
    image: article.image || `${siteConfig.url}/images/hero-background.png`
  }
}
