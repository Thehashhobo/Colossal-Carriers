import React from "react";
import C1 from "../../../public/C1.svg";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Colossal Carriers",
  description: "Get in touch with our team for freight inquiries, partnerships, or support. We're ready to move your business forward.",
  openGraph: {
    title: "Contact Us – Colossal Carriers",
    description: "Have questions or need a freight quote? Reach out to Colossal Carriers for responsive logistics support.",
    url: "https://www.colossalcarriers.com/contact",
    siteName: "Colossal Carriers",
    images: [
      {
        url: "https://www.colossalcarriers.com/preview.webp",
        width: 1880,
        height: 704,
        alt: "Customer service representative on headset",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Colossal Carriers",
    description: "Connect with our logistics specialists for cross-border freight support and service quotes.",
    images: ["https://www.colossalcarriers.com/preview.webp"],
  },
};

export default function Contacts() {
  return (
    <main className="flex flex-col min-h-screen justify-start items-center">
      <section
        className="flex items-center justify-center w-full h-[12vh] px-10"
        style={{
          background: "linear-gradient(to left, #0ec76a, #088044 50%, #088044)",
        }}
      >
        <h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-white">Contact Us</h2>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 p-8 sm:p-20 min-h-screen">
        {/* Contact Information */}
        <div className="col-span-1 space-y-6">
          <h2 className="text-2xl font-bold text-green-700">Contact Our Office</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-green-700 text-2xl">
                <Image width={120} height={120} src={C1.src} className="w-6 h-6 mt-0.5" alt="Phone" />
              </span>
              <p className="text-lg font-medium">1-647-282-3167</p>
            </div>
            <p className="text-gray-600">
              32 Discovery Trail, Maple ON, L6A 2X8 Canada
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600">
              <strong>Type of Carrier:</strong> Truckload/ LTL, Reefer
            </p>
          </div>
          <div className="col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-green-700">Contact Our Team</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-green-700 mb-2">General Inquiry</h3>
                <p className="text-gray-600">
                  For any questions or concerns, please reach out to us at:
                </p>
                <p className="text-green-700">info@colossalcarriers.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </main>
  );
}