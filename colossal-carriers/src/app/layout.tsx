import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.colossalcarriers.com"),

  title: {
    default: "Colossal Carriers – Canadian Cross-Border Logistics",
    template: "%s | Colossal Carriers",
  },

  description:
    "Efficient and reliable cross-border transportation solutions. Specializing in refrigerated and dry goods delivery across Canada and the U.S.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Colossal Carriers – Canadian Cross-Border Logistics",
    description:
      "Efficient and reliable cross-border transportation solutions. Specializing in refrigerated and dry goods delivery across Canada and the U.S.",
    url: "https://www.colossalcarriers.com/",
    siteName: "Colossal Carriers",
    type: "website",
    images: [
      {
        url: "https://www.colossalcarriers.com/preview.webp",
        width: 1200, // Standard OpenGraph size
        height: 630,
        alt: "Colossal Carriers Truck Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Colossal Carriers – Cross-Border Logistics",
    description:
      "Dependable freight logistics for North American businesses. Let Colossal Carriers handle your shipping needs with precision and speed.",
    images: ["https://www.colossalcarriers.com/preview.webp"],
  },

  appleWebApp: {
    capable: true,
    title: "Colossal Carriers",
    statusBarStyle: "black-translucent",
  },
  themeColor: "#088044",

  alternates: {
    canonical: "/",
  },

  category: "transportation",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Colossal Carriers" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <div className="pt-33 md:pt-22 xl:pt-20">
        {children}

        <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-VRVGHWCQZG" />
    
    </html>
  );
}
