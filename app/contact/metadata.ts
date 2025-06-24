import { Metadata } from "next"
import { siteConfig } from "@/config/site.config"

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: "Get in touch with Noble Insulation for a free consultation and insulation estimate. Call " + siteConfig.phone + " or visit our Richmond, CA warehouse.",
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: "Get in touch with Noble Insulation for a free consultation and insulation estimate. Call " + siteConfig.phone + " or visit our Richmond, CA warehouse.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
}