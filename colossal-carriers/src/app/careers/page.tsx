import A2 from "../../../public/images/A2.webp";
import CareerApplicationForm from "../components/CareerApplicationForm";
import Image from "next/image";
export default function Careers() {
  return (
    <main className="w-full bg-white py-14 md:py-10 px-6">
      <div className="flex flex-col md:flex-row items-center max-w-screen-lg mx-auto gap-8">
        {/* Text Content */}
        <div className="flex-1 md:pr-8 p-4 border-2 border-green-800 mb-4">
          <h2 className="text-3xl font-bold text-black mb-4">
            Why Drivers Choose Colossal Carriers
          </h2>
          <p className="text-gray-700 mb-4">
          At Colossal Carriers, we treat our drivers like family, not just a number. With steady long-haul routes, 
          competitive pay, and on-time settlements, we make sure your time on the road is both rewarding and respected. 
          Our modern, well maintained equipment ensures a comfortable and safe driving experience, while our supportive 
          dispatch team keeps things running smoothly. We offer flexible home time, opportunities for growth, and a 
          driver first culture rooted in over 20 years of industry experience. When you drive with Colossal, 
          you drive with a company that’s committed to your success.

          </p>
          <ul className="list-disc list-inside mb-4">
            <li className="text-gray-700">Competitive pay and benefits</li>
            <li className="text-gray-700">Flexible schedules</li>
            <li className="text-gray-700">Supportive work environment</li>
            <li className="text-gray-700">Great equipment</li>
          </ul>
        </div>

    {/* Image Content */}
      <div className="flex-1 mt-8 md:mt-0 z-3 md:translate-x-3">
          <Image
          width={1024}
          height={1024}
          src={A2.src}
          alt="Trucks"
          className="w-full h-auto hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out"
          />
      </div>
      </div>
      <hr className="w-full my-5 h-[1.5px] bg-[#59890c]"/> 
      <CareerApplicationForm />

    </main>
  );
}