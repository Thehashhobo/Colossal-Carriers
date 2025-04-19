import React from "react";
import T1 from "../../../public/T1.svg"
import T2 from "../../../public/T2.svg"
import T3 from "../../../public/T3.svg"

const WhyUse: React.FC = () => {
  const items = [
    {
      image: T1,
      title: "Non-Stop Service",
      text: "We provide uninterrupted transportation services to ensure your goods reach their destination on time.",
    },
    {
      image: T2,
      title: "Fast & Reliable Delivery",
      text: "Our team is dedicated to delivering your shipments quickly and reliably, every time.",
    },
    {
      image: T3,
      title: "Fully Certified",
      text: "Certified with CBSA, FAST, and HAZMAT to ensure your goods are delivered without delays or hidden fees.",
    },
    // {
    //   image: "https://via.placeholder.com/80",
    //   title: "Over 100 Trucks",
    //   text: "We own a fleet of modern trucks to transport your goods in Canada and across the border.",
    // },
    // {
    //   image: "https://via.placeholder.com/80",
    //   title: "Over 200 Trailers",
    //   text: "We own over 200 trailers to transport your perishable and non-perishable goods.",
    // },
    // {
    //   image: "https://via.placeholder.com/80",
    //   title: "98% On-Time Delivery",
    //   text: "We’re proud of our industry-leading 98% on-time delivery track record.",
    // },
  ];

  return (
    <section className="w-full bg-gray-200 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Why Ship With Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={item.image.src}
              alt={item.title}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUse;