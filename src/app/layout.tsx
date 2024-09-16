import { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

//components
import Topbar from "@/sections/topbar/topbar";
import Navbar from "@/sections/navbar/navbar";
import Footer from "@/sections/footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IsOpenProvider } from "@/libs/state/IsOpenContext";

//context api
import { ShowProvider } from "@/utils/navContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-Y4CCECT21G" />
      <body className={inter.className}>
        <ShowProvider>
          <IsOpenProvider>
            <ToastContainer />
            <Topbar />
            <Navbar />
            {children}
            <Footer />
          </IsOpenProvider>
        </ShowProvider>
      </body>
    </html>
  );
}
