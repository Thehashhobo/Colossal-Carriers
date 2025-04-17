"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function toggleServicesDropdown() {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  }

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 items-center gap-4 mx-auto p-3 md:p-4">
        {/* Logo + Hamburger */}
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-black text-2xl font-semibold whitespace-nowrap">
              Colossal Carriers
            </span>
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
          } md:flex justify-center w-full`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium border md:border-0 border-gray-100 rounded-lg bg-gray-50 md:bg-white md:p-0 p-4">
            {/* Services Dropdown */}
            <li className="relative">
              <button
                type="button"
                onClick={toggleServicesDropdown}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Services -
              </button>

              {/* Desktop Dropdown */}
              {isServicesDropdownOpen && (
                <div className="hidden md:block absolute bg-white border border-gray-200 mt-2 rounded-md shadow-lg">
                  <ul className="py-2">
                    <li>
                      <a
                        href="/services/option1"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Option 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/option2"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Option 2
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              {/* Mobile Dropdown */}
              {isMenuOpen && isServicesDropdownOpen && (
                <ul className="md:hidden pl-4">
                  <li>
                    <a
                      href="/services/option1"
                      className="block py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/option2"
                      className="block py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Option 2
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Other Links */}
            <li>
              <a
                href="/about"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/contacts"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Buttons (Call Us + Get a Quote) */}
        <div className="flex flex-row justify-between md:justify-end items-center">
          {/* Mobile-only call button */}
          <a
            href="tel:+1234567890"
            className="md:hidden block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Call Us
          </a>

          {/* Visible on all sizes */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            GET A QUOTE
          </button>
        </div>
      </div>
    </nav>
  );
}
