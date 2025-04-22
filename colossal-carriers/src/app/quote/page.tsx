"use client";

import { useState } from "react";

export default function QuoteFormPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="z-5 w-[90vw] h-screen mx-15 py-30 md:py-25 px-6 relative items-center justify-center">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="bg-gray-100 p-6 shadow-xl md:max-w-[30vw]">
          <h2 className="text-2xl font-bold mb-4">Get a Quote</h2>
          <p className="text-gray-700 mb-4">
            Get Shipping Quotes for Dry Van and Reefer. Your
            request will be processed within 2 hours, during regular business
            days. Once you submit your form, a shipping specialist will review
            availability and contact you with full details.
          </p>
          <p className="text-gray-700 mb-4">
            For assistance, please contact us:
          </p>
          <p className="text-gray-900 font-bold text-lg">1-877-742-2999</p>
        </div>
        {/* Right Column */}
    <div className="bg-white p-6 shadow-xl md:min-w-[55vw] -translate-x-[10vw]">
        {/* Stepper */}
      <ol className="z-10 flex items-center w-full text-sm font-medium text-center text-gray-700 sm:text-base mb-8 bg-gray-200 p-4 rounded-md">
        {/* Step 1 */}
        <li
          className={`flex md:w-full items-center ${
            currentStep >= 1 ? "text-green-700" : "text-gray-700"
          } sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-300 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-300">
            {currentStep > 1 && (
              <svg
                className="mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            )}
            Company <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>

        {/* Step 2 */}
        <li
          className={`flex md:w-full items-center ${
            currentStep >= 2 ? "text-green-700" : "text-gray-700"
          } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-300 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-300">
            {currentStep > 2 && (
              <svg
                className="mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            )}
            Shipment <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>

        {/* Step 3 */}
        <li
          className={`flex md:w-60 items-center text-nowrap ${
            currentStep >= 3 ? "text-green-700" : "text-gray-700"
          }`}
        >
          <span className="flex items-center">
            {currentStep > 3 && (
              <svg
                className="mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            )}
            Dates
          </span>
        </li>
      </ol>

      {/* Form Content */}
      <div className="bg-white p-6 shadow-md rounded-md">
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Company Info</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                  required
                />
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                  required
                />
              </div>

              {/* Contact Phone */}
              <div>
                <label
                  htmlFor="contactPhone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                />
              </div>

              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                  required
                />
              </div>
            </form>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Shipment Details</h2>
            <form className="space-y-6">
              {/* Shipment Size and Equipment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Shipment Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Shipment Size <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="shipmentSize"
                        value="Truck Load (TL)"
                        className="mr-2"
                      />
                      Truck Load (TL)
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="shipmentSize"
                        value="LTL"
                        className="mr-2"
                      />
                      LTL
                    </label>
                  </div>
                </div>

                {/* Equipment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Equipment <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="equipment"
                        value="Dry Van"
                        className="mr-2"
                      />
                      Dry Van
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="equipment"
                        value="Reefer"
                        className="mr-2"
                      />
                      Reefer
                    </label>
                  </div>
                </div>
              </div>

              {/* Number of Pallets and Product Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="numberOfPallets"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Pallets <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="numberOfPallets"
                    className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="productType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="productType"
                    className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                    required
                  />
                </div>
              </div>

              {/* Shipping From and Shipping To */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="shippingFrom"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Shipping From <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="shippingFrom"
                    className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="shippingTo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Shipping To <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="shippingTo"
                    className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        )}

        {currentStep === 3 && (
        <div>
            <h2 className="text-xl font-bold mb-4">Additional Details</h2>
            <form className="space-y-6">
            {/* Pickup Date and Delivery Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                <label
                    htmlFor="pickupDate"
                    className="block text-sm font-medium text-gray-700"
                >
                    Pickup Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <input
                    type="date"
                    id="pickupDate"
                    className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                    required
                    />
                </div>
                </div>
                <div>
                <label
                    htmlFor="deliveryDate"
                    className="block text-sm font-medium text-gray-700"
                >
                    Delivery Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <input
                    type="date"
                    id="deliveryDate"
                    className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                    required
                    />
                </div>
                </div>
            </div>

            {/* Notes */}
            <div>
                <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700"
                >
                Notes
                </label>
                <textarea
                id="notes"
                rows={4}
                className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                ></textarea>
            </div>

            {/* Subscribe to Mailing List
            <div className="flex items-center">
                <input
                type="checkbox"
                id="subscribe"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                htmlFor="subscribe"
                className="ml-2 block text-sm text-gray-700"
                >
                Subscribe to our mailing list
                </label>
            </div> */}
            </form>
        </div>
        )}

        {currentStep === 4 && (
        <div>
            <h2 className="text-xl font-bold mb-4">Confirmation</h2>
            <p className="text-gray-700">
            Thank you for submitting your quote request! We will review your details
            and get back to you shortly.
            </p>
        </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="relative bottom-4 left-0 right-0 px-1 flex justify-between mt-10">
        {/* Previous Button */}
        <button
          type="button"
          onClick={prevStep}
          className={`${
            (currentStep === 1 || currentStep === 4) ? "hidden" : "inline-block"
          } bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md hover:bg-gray-400`}
        >
          Previous
        </button>

        {/* Next/Submit Button */}
        {currentStep === 3 ? (
          <button
            type="button"
            onClick={() => setCurrentStep(4)} // Move to Step 4 on submit
            className="bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        ) : currentStep === 4 ? null : (
          <button
            type="button"
            onClick={nextStep}
            className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Next
          </button>
        )}
      </div>
      </div>
    </div>
    </div>
  );
}