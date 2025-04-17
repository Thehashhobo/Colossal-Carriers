import React from "react";

interface CardProps {
  image: string;
  title: string;
  text: string;
}

const ServiceCard: React.FC<CardProps> = ({ image, title, text }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
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
  );
};

export default ServiceCard;