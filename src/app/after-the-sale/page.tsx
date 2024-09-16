import { Metadata } from "next";

// Components
import Header from "@/sections/after-the-sale/header/header.tsx";
import AfterTheLequidations from "@/sections/after-the-sale/after-the-lequidations/afterTheLequidations";
import Settlement from "@/sections/after-the-sale/settlement/settlement";
import RealtorService from "@/sections/after-the-sale/realtor-service/realtorService";
import Contact from "@/sections/contact/contact";

export const metadata: Metadata = {
  title: "After the Sale in Spencer Sparta - Five Star Estate Liquidations",
  description:
    "Learn about our post-estate sale services in Spencer Sparta at Five Star Estate Liquidations, including leftover item removal, settlement, and Realtor services to maximize your property's value.",
  keywords: [
    "Spencer Sparta post-estate sale services", "estate sale leftovers Spencer Sparta", "estate liquidation cleanup Spencer Sparta",
    "charitable donation Spencer Sparta", "Spencer Sparta estate sale settlement", "detailed accounting Spencer Sparta estate sale",
    "estate sale proceeds Spencer Sparta", "auction consignment settlement Spencer Sparta", "Spencer Sparta Realtor services",
    "real estate agent Spencer Sparta", "property staging services Spencer Sparta", "home staging Spencer Sparta",
    "maximize listing price Spencer Sparta", "minor repairs estate sale Spencer Sparta", "preferred contractors Spencer Sparta estate sale",
    "Tennessee estate sale services Spencer Sparta", "Spencer Sparta estate liquidation settlement", "estate sale cleanup Spencer Sparta",
    "estate sale donations Spencer Sparta", "tax-deductible donation receipt Spencer Sparta", "estate sale bidding Spencer Sparta",
    "estate sale dealers Spencer Sparta", "Spencer Sparta estate sale settlement process", "Spencer Sparta estate sale finalization",
    "house cleaning Spencer Sparta estate sale", "broom clean estate sale Spencer Sparta", "Spencer Sparta estate sale contractor network",
    "Spencer Sparta post-sale real estate services", "Realtor Spencer Sparta estate sale", "home staging Spencer Sparta Tennessee",
    "property value maximization Spencer Sparta", "real estate services after estate sale Spencer Sparta", "Spencer Sparta estate sale auction services",
    "Tennessee real estate staging", "estate sale final accounting Spencer Sparta", "Spencer Sparta estate sale check",
    "post-sale property staging Spencer Sparta", "home staging for higher offers Spencer Sparta", "Spencer Sparta estate sale repairs",
    "estate sale realtor network Spencer Sparta", "property cleanup after estate sale Spencer Sparta", "estate sale final steps Spencer Sparta",
    "Spencer Sparta estate liquidation process", "Spencer Sparta estate sale remaining items", "real estate services Spencer Sparta estate sale",
    "home staging benefits Spencer Sparta", "property staging for sale Spencer Sparta", "estate sale property enhancement Spencer Sparta",
    "Spencer Sparta Tennessee estate sale experts", "estate liquidation professionals Spencer Sparta", "post-sale settlement services Spencer Sparta",
    "estate sale charity donations Spencer Sparta", "donate estate sale leftovers Spencer Sparta", "post-estate sale procedures Spencer Sparta",
    "estate sale contractor services Spencer Sparta", "real estate listing enhancements Spencer Sparta", "property value improvements Spencer Sparta",
    "Spencer Sparta estate liquidation settlement process", "Tennessee property staging Spencer Sparta", "estate sale finalization steps Spencer Sparta",
    "Realtor services Spencer Sparta Tennessee", "home improvement Spencer Sparta estate sale", "Spencer Sparta estate sale final proceeds",
    "real estate agent post-estate sale Spencer Sparta", "estate sale contractor partnerships Spencer Sparta", "home staging experts Spencer Sparta",
    "Tennessee estate liquidators Spencer Sparta", "Spencer Sparta estate sale process final steps", "maximize home sale price Spencer Sparta",
    "Spencer Sparta estate sale cleanup services", "property staging post-estate sale Spencer Sparta", "Spencer Sparta estate liquidation completion",
    "post-sale real estate enhancement Spencer Sparta", "estate sale completion services Spencer Sparta", "real estate post-sale services Spencer Sparta",
    "estate liquidation Realtor services Spencer Sparta", "property staging and repair Spencer Sparta", "post-sale estate services Spencer Sparta",
    "Tennessee estate liquidation company Spencer Sparta", "estate sale property staging Spencer Sparta", "home repair for estate sale Spencer Sparta",
    "Realtor Spencer Sparta estate liquidation", "estate sale final checklist Spencer Sparta", "Spencer Sparta estate sale and property staging"
  ].join(", "),
  openGraph: {
    title: "After the Sale in Spencer Sparta - Five Star Estate Liquidations",
    description:
      "Explore our comprehensive post-sale services in Spencer Sparta at Five Star Estate Liquidations, including leftover item removal, settlement, and real estate services to enhance your property's value.",
    url: "https://pencer-spartaestatesales.com/after-the-sale",
    type: "website",
    locale: "en_US",
    siteName: "Five Star Estate Liquidations",
    images: [
      {
        url: "/after-the-lequidations.png",
        width: 1200,
        height: 630,
        alt: "Post Estate Sale Services in Spencer Sparta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "After the Sale in Spencer Sparta - Five Star Estate Liquidations",
    description:
      "Learn about our expert post-sale services in Spencer Sparta, including item removal, settlement, and Realtor services to ensure a successful transition.",
    images: [
      {
        url: "/after-the-lequidations.png",
        alt: "Post Estate Sale Services in Spencer Sparta",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://pencer-spartaestatesales.com/after-the-sale",
  },
};

export default function AfterTheSale() {
  return (
    <main>
      <Header />
      <AfterTheLequidations />
      <Settlement />
      <RealtorService />
      <Contact />
    </main>
  );
}
