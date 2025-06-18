import Link from "next/link";
import {InstagramFilled, LinkedinFilled } from '@ant-design/icons';

export default function Footer() {
    return (

      <footer className="flex flex-col">
          {/* Footer Links */}
          <section className="flex flex-col md:flex-row justify-between items-start p-8 bg-[#088044] text-white">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">Company</h3>
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
            <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">Services</h3>
            <ul className="list-disc space-y-2 ml-4.5">
              <li>
                <Link href="/services" className="text-white hover:underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/services/#reefer" className="text-white hover:underline">
                  Reefers
                </Link>
              </li>
              <li>
                <Link href="/services/#dry" className="text-white hover:underline">
                  Dry Vans
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Social */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">Contacts</h3>
            <div className="flex flex-col gap-3 space-x-4">
            <a
            href="/contacts"
            className="bg-green-800 text-white font-bold py-3 px-6 rounded text-center hover:bg-green-900 transition"
            >
            Contact Us
            </a>

            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dabeer606/" target="_blank" className="text-white text-2xl hover:text-[#f0e160]">
                <InstagramFilled />
              </a>
              <a href="https://www.linkedin.com/company/colossal-carriers/" target="_blank" className="text-white text-2xl hover:text-[#f0e160]">
                <LinkedinFilled />
              </a>
            </div>

            </div>
          </div>

          {/* Footer Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">General Inquiries</h3>
            <p className="mb-2">
              <strong>Location:</strong> 32 Discovery Trail, Maple ON Canada
            </p>
            <p className="mb-2">
              <strong>Hours:</strong> Mon - Fri: 10 AM - 6 PM
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +1-647-282-3167

            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@colossalcarriers.com" className="text-white hover:underline">
              Colossal Carriers Ltd
              </a>
            </p>
          </div>
          </section>
                   
          {/* Designer/Builder Credit */}
          <div className="mx-auto flex flex-col md:flex-row justify-center items-center px-2 text-white py-4">
          <p className="text-sm text-black pr-2 text-center">
            © {new Date().getFullYear()} Colossal Carriers - Transportation Services | All rights reserved 
          </p>
  
         
              <p className="text-sm mt-2 md:mt-0 text-black">
                Designed and built by <a href="https://thehashhobo.github.io/Personal-Website/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Jerry W</a>.
              </p>
        </div>

          
        </footer>

    );
  }