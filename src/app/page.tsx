import Image from "next/image";
import type { Metadata } from "next";

// Components
import Scheduler from "@/components/individual/scheduler/scheduler";
import Header from '@/sections/header/header';
import About from "@/sections/about/about";
import Marketing from "@/sections/marketing/marketing";
import WhyUs from "@/sections/whyUs/whyUs";
import Mission from "@/sections/mission/mission";
import Services from "@/sections/services/services";
import Cta from "@/sections/cta/cta";
import Ftf from "@/sections/ftf/ftf";
import Faq from "@/sections/faq/faq";
import Contact from "../sections/contact/contact";

// Styles
import './globals.css';
import './globals.scss';

export const metadata: Metadata = {
  title: "Best Estate Sales in Spencer Sparta | Five Star Estate Liquidations",
  description:
    "Looking for the best estate sales in Spencer Sparta? Five Star Estate Liquidations offers top-notch estate sales, auctions, and liquidation services in Spencer Sparta and surrounding areas. Trust us to handle your property with care and professionalism.",
  icons: "/logo.png",
  keywords: [
    "best estate sales Spencer Sparta",
    "estate liquidation Spencer Sparta",
    "estate auctions Spencer Sparta",
    "property sales Spencer Sparta",
    "Spencer Sparta estate sales",
    "Spencer Sparta liquidation services",
    "Spencer Sparta estate auctions",
    "estate sale companies Spencer Sparta",
    "estate sale services Spencer Sparta",
    "local estate sales Spencer Sparta",
    "furniture sales Spencer Sparta",
    "moving sales Spencer Sparta",
    "house sales Spencer Sparta",
    "estate liquidation Spencer Sparta",
    "Spencer Sparta property liquidation",
    "estate sales near Spencer Sparta",
    "Spencer Sparta TN estate sales",
    "Spencer Sparta TN liquidation",
    "Spencer Sparta estate sale experts",
    "best estate liquidation Spencer Sparta",
    "estate auctions near Spencer Sparta",
    "estate sale companies Spencer Sparta",
    "Spencer Sparta estate liquidators",
    "estate sale events Spencer Sparta",
    "Spencer Sparta property liquidation",
    "estate sales and auctions Spencer Sparta",
    "estate cleanouts Spencer Sparta",
    "Spencer Sparta estate buyouts",
    "local estate liquidation Spencer Sparta",
    "Spencer Sparta TN moving sales",
    "Spencer Sparta property auctions",
    "real estate sales Spencer Sparta TN",
    "estate sales services near Spencer Sparta",
    "antiques sales Spencer Sparta TN",
    "household estate sales Spencer Sparta",
    "garage sales Spencer Sparta TN",
    "yard sales Spencer Sparta TN",
  ].join(", "),
  openGraph: {
    title: "Best Estate Sales in Spencer Sparta | Five Star Estate Liquidations",
    description:
      "Discover the best estate sales in Spencer Sparta with Five Star Estate Liquidations. We offer comprehensive estate sale services in Spencer Sparta and surrounding areas, ensuring a smooth and profitable transition.",
    url: "https://pencer-spartaestatesales.com/",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Best Estate Sales in Spencer Sparta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Estate Sales in Spencer Sparta | Five Star Estate Liquidations",
    description:
      "Five Star Estate Liquidations is your go-to for the best estate sales in Spencer Sparta. We provide expert estate sale and liquidation services in Spencer Sparta and surrounding areas.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Spencer Sparta Estate Sales",
      },
    ],
  },
  alternates: {
    canonical: "https://pencer-spartaestatesales.com/",
  },
};


export default function Home() {
  return (
    <main>
      <Scheduler />
      <Header />
      <About />
      <Marketing />
      <WhyUs />
      <Mission />
      <Services />
      <Cta />
      <Ftf />
      <Faq />
      <Contact />
    </main>
  );
}
