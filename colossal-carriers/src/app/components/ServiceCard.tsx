"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CardProps {
  name: string;
  description: string;
  image: string;
  link: string;
  width: number;
  height: number;
}

const ServiceCard: React.FC<CardProps> = ({
  name,
  description,
  image,
  link,
  width,
  height,
}) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver to detect when the card is in view
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 } // Trigger when 20% of the card is visible
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => window.location.href = link}
      className={`relative flex flex-col w-[90vw] md:w-[35vw] xl:w-[25vw] mb-12 overflow-hidden shadow-2xl cursor-pointer bg-white transition mx-auto mt-6 border-1 border-secondary flex-shrink-0 hover:scale-110 duration-700${
        inView ? " animate-fade-in-scale" : " opacity-0"
      }`}
    >
      {/* Card background image */}
      <Image
        priority
        width={width}
        height={height}
        src={image}
        alt={name}
        className="w-full h-[45%] object-cover border-b-3 border-green-700"
      />

      {/* Name and description */}
      <div className="flex flex-col items-center w-full z-10 bg-background p-2 pb-6">
        <h2 className="font-[family-name:var(--font-Roboto)] text-3xl font-bold text-primary text-center ">
          {name}
        </h2>
        <p className="text-lg text-textColor text-center font-semibold px-8">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;