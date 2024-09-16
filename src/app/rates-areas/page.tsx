import Header from "@/sections/rates-areas/header/header"
import OurRates from "@/sections/rates-areas/our-rates/ourRates"
import Areas from "@/sections/rates-areas/areas/areas"
import Contact from "@/sections/contact/contact"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Liquidation Rates & Areas in Spencer Sparta - Five Star Estate Liquidations",
  description:
    "Explore our comprehensive estate liquidation services in Spencer Sparta. We offer transparent, commission-based rates and cover a wide range of areas around Spencer Sparta.",
  keywords: [
    "Spencer Sparta estate liquidation", "estate sales Spencer Sparta", "estate planning Spencer Sparta", 
    "Spencer Sparta estate services", "estate liquidation rates Spencer Sparta", "commission-based estate sale Spencer Sparta",
    "estate sale contract Spencer Sparta", "estate sale process Spencer Sparta", "estate sale expenses Spencer Sparta",
    "no up-front fees Spencer Sparta", "professional signage Spencer Sparta", "estate advertising Spencer Sparta",
    "labor costs in estate sales Spencer Sparta", "estate sale management Spencer Sparta", "Spencer Sparta estate sale company",
    "estate sale experts Spencer Sparta", "estate liquidation Spencer Sparta", "Tennessee estate liquidation services Spencer Sparta",
    "estate sale consultation Spencer Sparta", "estate liquidation contract Spencer Sparta", "Five Star Estate Liquidations Spencer Sparta",
    "estate liquidation Bledsoe County", "Bledsoe County estate liquidation services", "Spencer Sparta estate sales company"
  ].join(", "),
  openGraph: {
    title: "Estate Liquidation Rates & Areas in Spencer Sparta - Five Star Estate Liquidations",
    description:
      "Serving Spencer Sparta and surrounding areas with comprehensive estate liquidation services. Discover our commission-based rates and the areas we cover.",
    url: "https://pencer-spartaestatesales.com/rates-areas",
    type: "website",
    locale: "en_US",
    siteName: "Five Star Estate Liquidations",
    images: [
      {
        url: "/images/estate-liquidation-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Estate Liquidation Services in Spencer Sparta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "Estate Liquidation Rates & Areas in Spencer Sparta - Five Star Estate Liquidations",
    description:
      "Discover our estate liquidation rates and the areas we cover in Spencer Sparta. Offering transparent, commission-based rates and comprehensive services.",
    images: [
      {
        url: "/images/estate-liquidation-banner.jpg",
        alt: "Estate Liquidation Services in Spencer Sparta",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://pencer-spartaestatesales.com/rates-areas",
  },
};



export default function RatesAreas() {
    return(
        <main>
            <Header />
            <OurRates />
            <Areas />
            <Contact />
        </main>
    )
}
