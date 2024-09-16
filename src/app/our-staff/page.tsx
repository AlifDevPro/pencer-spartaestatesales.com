import { Metadata } from "next"

//components
import Header from "@/sections/staff/header/ourStaff"
import OurStaff from "@/sections/staff/our-staff/ourStaff"
import StaffDay from "@/sections/staff/staffDay/staffDay"
import Contact from "@/sections/contact/contact"

export const metadata: Metadata = {
  title: "Our Staff - Spencer Sparta Estate Sales",
  description:
    "Meet the professional team at Spencer Sparta Estate Sales. Our experienced staff ensures a smooth and successful estate sale process in Spencer Sparta and surrounding areas.",
  keywords: [
    "estate liquidation staff Spencer Sparta", "estate sale professionals Spencer Sparta", "Spencer Sparta estate liquidation",
    "professional estate team Spencer Sparta", "Spencer Sparta estate sales staff", "auction staff Spencer Sparta",
    "estate consulting team Spencer Sparta", "estate appraisers Spencer Sparta", "property accessors Spencer Sparta",
    "estate sale management Spencer Sparta", "Tennessee estate sale team", "professional estate consultants Spencer Sparta",
    "Spencer Sparta estate appraisers", "estate sale security Spencer Sparta", "estate sale parking attendants Spencer Sparta",
    "estate sale crowd control Spencer Sparta", "estate sale accounting Spencer Sparta", "estate liquidation services Spencer Sparta",
    "estate sale experts Spencer Sparta", "estate sale planning Spencer Sparta", "Spencer Sparta estate sale company",
    "estate liquidation management Spencer Sparta", "estate sale preparation Spencer Sparta", "professional estate sale staff Spencer Sparta",
    "Tennessee auction staff", "estate sale consultation Spencer Sparta", "estate sale day staff Spencer Sparta",
    "estate sale security team Spencer Sparta", "Spencer Sparta estate liquidation experts", "estate liquidation appraisers Spencer Sparta",
    "estate sales management Spencer Sparta", "estate sale support staff Spencer Sparta", "estate auction professionals Spencer Sparta",
    "estate sale assistance Spencer Sparta", "professional estate sale service Spencer Sparta", "Tennessee estate liquidation professionals",
    "estate sale organization Spencer Sparta", "estate sale logistics Spencer Sparta", "estate sale appraisers Tennessee",
    "Spencer Sparta property accessors", "estate sale services Tennessee", "estate liquidation team Spencer Sparta",
    "estate sale staffing Spencer Sparta", "estate liquidation staffing Spencer Sparta", "Spencer Sparta estate sale consultants",
    "estate sale appraisal experts Spencer Sparta", "estate sale security services Spencer Sparta", "estate sale crowd control team Spencer Sparta",
    "professional estate sale management Spencer Sparta", "Tennessee estate sale professionals", "estate liquidation consulting Spencer Sparta",
    "estate sale process Spencer Sparta", "estate sale uniformed staff Spencer Sparta", "Tennessee estate liquidation services Spencer Sparta",
    "estate sale consultation Spencer Sparta", "estate liquidation company Spencer Sparta", "estate sale business Spencer Sparta",
    "estate liquidation firm Spencer Sparta", "professional estate liquidators Spencer Sparta", "estate sale day preparation Spencer Sparta",
    "Spencer Sparta estate sale experts", "estate sale uniformed team Spencer Sparta", "estate liquidation specialists Spencer Sparta",
    "estate sale logistics team Spencer Sparta", "estate sale business Spencer Sparta", "Tennessee estate sale management Spencer Sparta",
    "estate liquidation support Spencer Sparta", "estate sale services Spencer Sparta", "estate sale security Spencer Sparta",
    "Tennessee estate crowd control Spencer Sparta", "estate sale parking services Spencer Sparta", "estate sale financial management Spencer Sparta",
    "estate sale pricing control Spencer Sparta", "estate sale account management Spencer Sparta", "estate liquidation expertise Spencer Sparta",
    "Spencer Sparta estate sale professionals", "estate liquidation consulting Spencer Sparta", "Spencer Sparta estate liquidation team"
  ].join(", "),
  openGraph: {
    title: "Our Staff - Spencer Sparta Estate Sales",
    description:
      "Meet the dedicated professionals at Spencer Sparta Estate Sales. Our team is committed to ensuring a seamless estate sale experience for you in Spencer Sparta and surrounding areas.",
    url: "https://pencer-spartaestatesales.com/our-staff",
    type: "website",
    locale: "en_US",
    siteName: "Spencer Sparta Estate Sales",
    images: [
      {
        url: "/estate-staff-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Our Staff at Spencer Sparta Estate Sales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "Our Staff - Spencer Sparta Estate Sales",
    description:
      "Meet the professional team at Spencer Sparta Estate Sales. We handle every aspect of estate sales with expertise and dedication.",
    images: [
      {
        url: "/estate-staff-banner.jpg",
        alt: "Our Staff at Spencer Sparta Estate Sales",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://pencer-spartaestatesales.com/our-staff",
  },
};


export default function Staff() {
    return(
        <main>
            <Header />
            <OurStaff />
            <StaffDay />
            <Contact />
        </main>
    )
}
