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
      <div className="bg-white shadow-xl  transition-all duration-700 hover:scale-105 hover:shadow-2xs cursor-pointer md:max-w-[30vw] border-green-800 border-2">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-55 object-cover  mb-4"
          />
        )}
        <h3 className="text-2xl font-bold text-black m-2">{title}</h3>
        <p className="text-gray-700 text-md m-2">{text}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;