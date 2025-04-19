import React from "react";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
  text: string;
  link: string; // Add a `link` prop for navigation
}

const ServiceCard: React.FC<CardProps> = ({ image, title, text, link }) => {
  return (
    <Link href={link}>
      <div className="bg-white shadow-xl  p-6 transition-all duration-700 hover:scale-105 hover:shadow-2xs cursor-pointer md:max-w-[30vw]">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        )}
        <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;