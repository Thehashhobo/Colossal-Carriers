"use client";
import React, { useState } from "react";

export default function Reviews() {
  const reviews = [
    {
      reviewer: "Justin, Transportation Manager, Kodak",
      message:
        "It is with pleasure and ease that I submit this recommendation email for ET Transportation. ET has been servicing Eastman Kodak successfully for 3+ years and has done so with great success.",
    },
    {
      reviewer: "Sarah, Logistics Coordinator, ABC Corp",
      message:
        "ET Transport has been an invaluable partner for our logistics needs. Their team is professional, reliable, and always goes above and beyond to ensure our shipments arrive on time.",
    },
    {
      reviewer: "Michael, Operations Manager, XYZ Inc.",
      message:
        "Working with ET Transport has been a game-changer for our business. Their attention to detail and commitment to excellence is unmatched.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full bg-transparent py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-black mb-4">
        Client Reviews
      </h2>
      <p className="text-center text-gray-600 mb-8">
        ET Transport works with professional partners and suppliers to ensure
        successful project completions.
      </p>

      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Reviews Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col items-center justify-center bg-white rounded-lg p-6"
            >
              <p className="text-gray-700 mb-4 text-center">{review.message}</p>
              <p className="text-black font-bold text-right">- {review.reviewer}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (Desktop Only) */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute top-1/2 left-4 transform -translate-y-1/2 -translate-x-3 bg-white p-0.5 rounded-full  hover:bg-gray-200"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="hidden md:flex absolute top-1/2 right-4 transform -translate-y-1/2 translate-x-3 bg-white p-0.5 rounded-full hover:bg-gray-200"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Swipe Gesture (Mobile Only) */}
      <div
        className="md:hidden w-full h-full"
        onTouchStart={(e) => (e.target as HTMLElement).dataset.startX = e.touches[0].clientX.toString()}
        onTouchEnd={(e) => {
          const startX = parseFloat((e.target as HTMLElement).dataset.startX || "0");
          const endX = e.changedTouches[0].clientX;
          if (startX - endX > 50) handleNext(); // Swipe left
          if (endX - startX > 50) handlePrev(); // Swipe right
        }}
      ></div>
    </section>
  );
}