"use client";
import React, { useState, useEffect, useRef } from "react";

export default function CareerApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    position: "",
    equipment: "",
    contact: "",
    crossBorder: "",
    comments: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [debouncedForm, setDebouncedForm] = useState(form);
  const [showPopup, setShowPopup] = useState(false);

  // Debounce effect: update debouncedForm 500ms after user stops typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedForm(form);
    }, 500);
    return () => clearTimeout(handler);
  }, [form]);

  // Validate email and phone when debouncedForm changes
  useEffect(() => {
    const newErrors: { [key: string]: string } = { ...errors };
    if (debouncedForm.email && !validateEmail(debouncedForm.email)) {
      newErrors.email = "Invalid email address.";
    } else {
      newErrors.email = "";
    }
    if (debouncedForm.phone && !validatePhone(debouncedForm.phone)) {
      newErrors.phone = "Invalid phone number.";
    } else {
      newErrors.phone = "";
    }
    setErrors(newErrors);
    // eslint-disable-next-line
  }, [debouncedForm.email, debouncedForm.phone]);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone: string) {
    return /^\+?[\d\s\-()]{7,}$/.test(phone);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { id, name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id || name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [id || name]: "",
    }));
  }

  function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email) newErrors.email = "Email is required.";
    else if (!validateEmail(form.email)) newErrors.email = "Invalid email address.";
    if (!form.phone) newErrors.phone = "Phone is required.";
    else if (!validatePhone(form.phone)) newErrors.phone = "Invalid phone number.";
    if (!form.experience) newErrors.experience = "Experience is required.";
    if (!form.contact) newErrors.contact = "Select a contact method.";
    if (!form.crossBorder) newErrors.crossBorder = "Select cross-border status.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setShowPopup(true);
    }
  }

    function closePopup() {
    setShowPopup(false);
    // reset form here
    setForm({
      name: "",
      email: "",
      phone: "",
      experience: "",
      position: "",
      equipment: "",
      contact: "",
      crossBorder: "",
      comments: "",
    });
  }

  return (
    <div className="max-w-screen-lg mx-auto">
        
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Apply for a Position
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              className={`mt-1 block w-full border-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2`}
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className={`mt-1 block w-full border-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2`}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Phone and Years of Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              className={`mt-1 block w-full border-2 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2`}
              required
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Years of Experience <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="experience"
              min="0"
              value={form.experience}
              onChange={handleChange}
              className={`mt-1 block w-full border-2 ${
                errors.experience ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2`}
              required
            />
            {errors.experience && (
              <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
            )}
          </div>
        </div>

        {/* Position and Equipment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">
              Position Applying For
            </label>
            <select
              id="position"
              value={form.position}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2"
            >
              <option value="">Select...</option>
              <option>Lease Purchase Program</option>
              <option>Company Driver</option>
              <option>Owner Operator</option>
            </select>
          </div>
          <div>
            <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">
              Equipment You Drive
            </label>
            <select
              id="equipment"
              value={form.equipment}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2"
            >
              <option value="">Select...</option>
              <option>Flatbed / Rolltite</option>
              <option>Reefer / Dry Van</option>
            </select>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium text-gray-700">Best way to contact you?  <span className="text-red-500">*</span> </p>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contact"
                  value="phone"
                  checked={form.contact === "phone"}
                  onChange={handleRadioChange}
                  className="mr-2"
                  required
                />
                Phone
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contact"
                  value="email"
                  checked={form.contact === "email"}
                  onChange={handleRadioChange}
                  className="mr-2"
                />
                Email
              </label>
            </div>
            {errors.contact && (
              <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Are you a cross-border driver?  <span className="text-red-500">*</span> </p>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="crossBorder"
                  value="yes"
                  checked={form.crossBorder === "yes"}
                  onChange={handleRadioChange}
                  className="mr-2"
                  required
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="crossBorder"
                  value="no"
                  checked={form.crossBorder === "no"}
                  onChange={handleRadioChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
            {errors.crossBorder && (
              <p className="text-red-500 text-xs mt-1">{errors.crossBorder}</p>
            )}
          </div>
        </div>

        {/* Comments */}
        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
            Comments  (optional)
          </label>
          <textarea
            id="comments"
            rows={4}
            value={form.comments}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-700 text-white font-medium py-3 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
        {showPopup && (
        <div className="fixed inset-0 flex items-center  justify-center backdrop-blur-xl bg-gray-300/50 z-50">
          <div className="bg-white rounded-lg shadow-lg border-2 border-green-700 p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-green-700">Thank you!</h3>
            <p className="mb-6">Your application has been submitted successfully.</p>
            <button
              onClick={closePopup}
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}