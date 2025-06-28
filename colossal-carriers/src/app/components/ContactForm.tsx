"use client";
import React, { useRef, useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", comments: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone: string) {
    return /^\+?[\d\s\-()]{7,}$/.test(phone);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));

    // Debounced real-time validation
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (id === "email") {
          if (!value) newErrors.email = "Email is required.";
          else if (!validateEmail(value)) newErrors.email = "Invalid email address.";
          else newErrors.email = "";
        }
        if (id === "phone") {
          if (value && !validatePhone(value)) newErrors.phone = "Invalid phone number.";
          else newErrors.phone = "";
        }
        if (id === "name") {
          if (!value) newErrors.name = "Name is required.";
          else newErrors.name = "";
        }
        return newErrors;
      });
    }, 400);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; phone?: string } = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email) newErrors.email = "Email is required.";
    else if (!validateEmail(form.email)) newErrors.email = "Invalid email address.";
    if (form.phone && !validatePhone(form.phone)) newErrors.phone = "Invalid phone number.";
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      try {
        const url = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
        if (!url) {
          alert("Submission failed. Server URL is not configured.");
          return;
        }
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify({
            endpoint: "contacts",
            name: form.name,
            email: form.email,
            phone: form.phone,
            comments: form.comments
          })
        });

        if (res.ok) {
          console.log("Form submitted successfully");
          setShowPopup(true);
          setForm({ name: "", email: "", phone: "", comments: "" });
        } else {
          alert("Submission failed. Please try again.");
        }
      } catch (err) {
        alert("Submission failed. Please try again. error: " + err);
      }
    }
  }

  function closePopup() {
    setShowPopup(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      comments: "",
    });
  }

  return (
    <div className="col-span-1">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Get in Touch</h2>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
            className={`mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-2 px-1 ${
              errors.name ? "border-red-500" : ""
            }`}
            required
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
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
            className={`mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-2 px-1 ${
              errors.email ? "border-red-500" : ""
            }`}
            required
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            className={`mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-2 px-1 ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="comments"
            value={form.comments}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-2 px-1"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          SEND
        </button>
      </form>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl bg-gray-300/50 z-50">
          <div className="bg-white rounded-lg shadow-lg border-2 border-green-700 p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-green-700">Thank you!</h3>
            <p className="mb-6">Thank you for reaching out. We have received your message and will respond as soon as possible.</p>
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