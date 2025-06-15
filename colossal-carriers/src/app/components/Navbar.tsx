"use client";
import React, { useState } from "react";
import Link from "next/link";
import preview from "../../../public/preview.webp"; // Adjust the path as necessary

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/"); // State to track the active link
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleSetActive(link: string) {
    setActiveLink(link); // Update the active link state
  }

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
      <div className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 items-center gap-4 mx-auto px-4 py-3 md:p-5 lg:p-3 2xl:p-2">
        {/* Logo + Hamburger */}
        <div className="flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
            <img
              src={preview.src} // Use the imported preview image
              className="h-14 lg:h-16"
              alt="Colossal Carriers Logo"
            />
          </a>
          {/* Hamburger menu (mobile only) */}
          <button
            onClick={handleToggleMenu}
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row justify-center md:space-x-8 font-medium md:border-0 border-gray-100 rounded-lg bg-white md:bg-white md:p-0 p-4`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <Link
                href="/services"
                onClick={() => handleSetActive("/services")} // Set active link
                className={`font-[family-name:var(--font-poppins)] block py-2 px-3 text-xl xl:text-2xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 ${
                  activeLink === "/services" ? "underline underline-offset-16 text-green-600" : ""
                }`}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => handleSetActive("/about")} // Set active link
                className={`font-[family-name:var(--font-poppins)] block py-2 px-3 text-xl xl:text-2xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 ${
                  activeLink === "/about" ? "underline underline-offset-16 text-green-600" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                onClick={() => handleSetActive("/careers")} // Set active link
                className={`font-[family-name:var(--font-poppins)] block py-2 px-3 text-xl xl:text-2xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 ${
                  activeLink === "/careers" ? "underline underline-offset-16 text-green-600" : ""
                }`}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                onClick={() => handleSetActive("/contacts")} // Set active link
                className={`font-[family-name:var(--font-poppins)] block py-2 px-3 text-xl xl:text-2xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 ${
                  activeLink === "/contacts" ? "underline underline-offset-16 text-green-600" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Buttons (Call Us + Get a Quote) */}
        <div className="flex flex-row justify-between md:justify-end items-center">
          {/* Mobile-only call button */}
          <a
            href="tel:+1234567890"
            className="md:hidden block text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-3 text-center"
          >
            Call Us
          </a>

          {/* Visible on all sizes */}
          <Link href="/quote">
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm lg:text-lg px-4 py-3 text-center"
            >
              GET A QUOTE
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}