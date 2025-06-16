"use client";

import { useState } from "react";

export default function QuoteFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    Name: "",
    email: "",
    contactPhone: "",
    shipmentSize: [] as string[],
    equipment: [] as string[],
    numberOfPallets: "",
    productType: "",
    shippingFrom: "",
    shippingTo: "",
    pickupDate: "",
    deliveryDate: "",
    notes: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation functions
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateStep = (step: number) => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.companyName) newErrors.companyName = "Company Name is required.";
      if (!formData.Name) newErrors.Name = "Name is required.";
      if (!formData.email) newErrors.email = "Email is required.";
      else if (!validateEmail(formData.email)) newErrors.email = "Invalid email address.";
      if (!formData.contactPhone) newErrors.contactPhone = "Contact Phone is required.";
    }
    if (step === 2) {
      if (formData.shipmentSize.length === 0) newErrors.shipmentSize = "Select at least one shipment size.";
      if (formData.equipment.length === 0) newErrors.equipment = "Select at least one equipment type.";
      if (!formData.numberOfPallets) newErrors.numberOfPallets = "Number of Pallets is required.";
      if (!formData.productType) newErrors.productType = "Product Type is required.";
      if (!formData.shippingFrom) newErrors.shippingFrom = "Shipping From is required.";
      if (!formData.shippingTo) newErrors.shippingTo = "Shipping To is required.";
    }
    if (step === 3) {
      if (!formData.pickupDate) newErrors.pickupDate = "Pickup Date is required.";
      if (!formData.deliveryDate) newErrors.deliveryDate = "Delivery Date is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type, name, checked } = e.target as HTMLInputElement;
    if (type === "checkbox" && name === "shipmentSize") {
      setFormData((prev) => ({
        ...prev,
        shipmentSize: checked
          ? [...prev.shipmentSize, value]
          : prev.shipmentSize.filter((v) => v !== value),
      }));
    } else if (type === "checkbox" && name === "equipment") {
      setFormData((prev) => ({
        ...prev,
        equipment: checked
          ? [...prev.equipment, value]
          : prev.equipment.filter((v) => v !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  // Navigation handlers
  const nextStep = () => {
    if (validateStep(currentStep)) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(4);
      // Here you can also send formData to your backend
    }
  };

  return (
    <div className="z-5 w-[90vw] mx-auto md:py-25 px-3 relative items-center justify-center py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="bg-gray-200 p-6 shadow-xl md:max-w-[30vw]">
          <h2 className="text-2xl font-bold mb-4">Get a Quote</h2>
          <p className="text-gray-700 mb-4">
            Request a shipping quote for dry van or refrigerated (reefer) service. Quotes are processed within 24 hours on regular business days. Once your form is submitted, our team will review availability and reach out with a detailed response
          </p>
          <p className="text-gray-700 mb-4">
            For assistance, please contact us:
          </p>
          <p className="text-gray-900 font-bold text-lg">1-647-282-3167</p>
        </div>
        {/* Right Column */}
        <div className="bg-gray-200 p-6 shadow-xl md:min-w-[55vw] xl:-translate-x-[10vw] ">
          {/* Stepper */}
          {/* ...existing stepper code... */}

          {/* Form Content */}
          <div className="bg-white p-3 shadow-md rounded-md">
            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Company Info</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-2 shadow-sm py-2 px-3 ${
                        errors.companyName ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.companyName && <p className="text-red-500 text-xs">{errors.companyName}</p>}
                  </div>
                  {/* First Name */}
                  <div>
                    <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-2 shadow-sm py-2 px-3 ${
                        errors.Name ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.Name && <p className="text-red-500 text-xs">{errors.Name}</p>}
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-2 shadow-sm py-2 px-3 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>
                  {/* Contact Phone */}
                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
                      Contact Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-2 shadow-sm py-2 px-3 ${
                        errors.contactPhone ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.contactPhone && <p className="text-red-500 text-xs">{errors.contactPhone}</p>}
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
                            checked={formData.shipmentSize.includes("Truck Load (TL)")}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Truck Load (TL)
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="shipmentSize"
                            value="LTL"
                            checked={formData.shipmentSize.includes("LTL")}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          LTL
                        </label>
                      </div>
                      {errors.shipmentSize && <p className="text-red-500 text-xs">{errors.shipmentSize}</p>}
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
                            checked={formData.equipment.includes("Dry Van")}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Dry Van
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="equipment"
                            value="Reefer"
                            checked={formData.equipment.includes("Reefer")}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Reefer
                        </label>
                      </div>
                      {errors.equipment && <p className="text-red-500 text-xs">{errors.equipment}</p>}
                    </div>
                  </div>
                  {/* Number of Pallets and Product Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="numberOfPallets" className="block text-sm font-medium text-gray-700">
                        Number of Pallets <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="numberOfPallets"
                        value={formData.numberOfPallets}
                        onChange={handleChange}
                        className={`mt-1 block w-full border-2 shadow-sm py-2 px-3 ${
                          errors.numberOfPallets ? "border-red-500" : "border-gray-300"
                        }`}
                        required
                      />
                      {errors.numberOfPallets && <p className="text-red-500 text-xs">{errors.numberOfPallets}</p>}
                    </div>
                    <div>
                      <label htmlFor="productType" className="block text-sm font-medium text-gray-700">
                        Product Type <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className={`mt-1 block w-full border-2 shadow-sm py-2 px-3 ${
                          errors.productType ? "border-red-500" : "border-gray-300"
                        }`}
                        required
                      />
                      {errors.productType && <p className="text-red-500 text-xs">{errors.productType}</p>}
                    </div>
                  </div>
                  {/* Shipping From and Shipping To */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="shippingFrom" className="block text-sm font-medium text-gray-700">
                        Shipping From <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="shippingFrom"
                        value={formData.shippingFrom}
                        onChange={handleChange}
                        className={`mt-1 block w-full border-2 shadow-sm py-2 px-3 ${
                          errors.shippingFrom ? "border-red-500" : "border-gray-300"
                        }`}
                        required
                      />
                      {errors.shippingFrom && <p className="text-red-500 text-xs">{errors.shippingFrom}</p>}
                    </div>
                    <div>
                      <label htmlFor="shippingTo" className="block text-sm font-medium text-gray-700">
                        Shipping To <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="shippingTo"
                        value={formData.shippingTo}
                        onChange={handleChange}
                        className={`mt-1 block w-full border-2 shadow-sm py-2 px-3 ${
                          errors.shippingTo ? "border-red-500" : "border-gray-300"
                        }`}
                        required
                      />
                      {errors.shippingTo && <p className="text-red-500 text-xs">{errors.shippingTo}</p>}
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
                      <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">
                        Pickup Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        className={`mt-1 block w-full border-2 shadow-sm py-2 px-3 ${
                          errors.pickupDate ? "border-red-500" : "border-gray-300"
                        }`}
                        required
                      />
                      {errors.pickupDate && <p className="text-red-500 text-xs">{errors.pickupDate}</p>}
                    </div>
                    <div>
                      <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">
                        Delivery Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        className={`mt-1 block w-full border-2 shadow-sm py-2 px-3 ${
                          errors.deliveryDate ? "border-red-500" : "border-gray-300"
                        }`}
                        required
                      />
                      {errors.deliveryDate && <p className="text-red-500 text-xs">{errors.deliveryDate}</p>}
                    </div>
                  </div>
                  {/* Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                      Notes
                    </label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                    ></textarea>
                  </div>
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
                onClick={handleSubmit}
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