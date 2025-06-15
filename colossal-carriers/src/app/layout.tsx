import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { FacebookFilled, TwitterCircleFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons';
import "./globals.css";
import Link from "next/link";
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
  title: "Colossal Carriers – Canadian Cross-Border Logistics",
  description:
    "Efficient and reliable cross-border transportation solutions. Specializing in refrigerated and dry goods delivery across Canada and the U.S.",
  openGraph: {
    title: "Colossal Carriers – Canadian Cross-Border Logistics",
    description:
      "Efficient and reliable cross-border transportation solutions. Specializing in refrigerated and dry goods delivery across Canada and the U.S.",
    url: "https://colossalcarriers.com/",
    siteName: "Colossal Carriers",
    images: [
      {
        url: "https://colossalcarriers.com/preview.jpg", // Replace with your actual preview image URL
        width: 1200,
        height: 630,
        alt: "Colossal Carriers Truck on the Highway",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colossal Carriers – Cross-Border Logistics",
    description:
      "Dependable freight logistics for North American businesses. Let Colossal Carriers handle your shipping needs with precision and speed.",
    images: ["https://colossalcarriers.com/preview.jpg"], // Same image as Open Graph
  },
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
        <div className="flex flex-col md:flex-row justify-between items-start p-8 bg-[#088044] text-white">
          {/* Footer Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold uppercase mb-4">Company</h3>
            <ul className="list-disc space-y-2 ml-4.5">
              <li>
                <Link href="/" className="text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:underline">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold uppercase mb-4">Services</h3>
            <ul className="list-disc space-y-2 ml-4.5">
              <li>
                <Link href="/services" className="text-white hover:underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/services/reefers" className="text-white hover:underline">
                  Reefers
                </Link>
              </li>
              <li>
                <Link href="/services/dry" className="text-white hover:underline">
                  Dry Vans
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Social */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold uppercase mb-4">Contacts</h3>
            <div className="flex flex-col gap-3 space-x-4">
            <a
            href="/contacts"
            className="bg-green-800 text-white font-bold py-3 px-6 rounded text-center hover:bg-green-900 transition"
            >
            Contact Us
            </a>

            <div className="flex space-x-4">
              <a href="#" target="_blank" className="text-white text-2xl hover:text-[#f0e160]">
                <FacebookFilled />
              </a>
              <a href="#" target="_blank" className="text-white text-2xl hover:text-[#f0e160]">
                <TwitterCircleFilled />
              </a>
              <a href="#" target="_blank" className="text-white text-2xl hover:text-[#f0e160]">
                <InstagramFilled />
              </a>
              <a href="#" target="_blank" className="text-white text-2xl hover:text-[#f0e160]">
                <YoutubeFilled />
              </a>
            </div>

            </div>
          </div>

          {/* Footer Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold uppercase mb-4">General Inquiries</h3>
            <p className="mb-2">
              <strong>Location:</strong> Vaughan, Ontario, Canada
            </p>
            <p className="mb-2">
              <strong>Hours:</strong> Mon - Fri: 9 AM - 6 PM
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +1 778-989-8588
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:oceanwave.vip@gmail.com" className="text-white hover:underline">
              Colossal Carriers Ltd
              </a>
            </p>
          </div>
        </div>
        <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-VRVGHWCQZG" />
    
    </html>
  );
}
