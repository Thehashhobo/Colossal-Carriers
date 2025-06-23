
import Image from "next/image";
import S1 from "../../../public/images/S1.webp";
import S2 from "../../../public/images/S2.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Freight Services | Colossal Carriers",
  description: "Explore reliable dry van, reefer, and cross-border freight solutions tailored for Canadian and U.S. businesses.",
  openGraph: {
    title: "Freight Services – Colossal Carriers",
    description: "Efficient logistics and freight transportation across Canada and the U.S.",
    url: "https://www.colossalcarriers.com/services",
    images: [
      {
        url: "https://www.colossalcarriers.com/preview.webp",
        width: 1880,
        height: 704,
        alt: "Logo",
      },
    ],
    type: "website",
  },
};


export default function Services() {
return (
<main className="flex flex-col min-h-screen justify-start items-start">
      <section
        className="relative w-full h-[60vh] md:h-[75vh] bg-cover bg-center justify-start"
        style={{ backgroundImage: `url(${S1.src})` }}
      >
          <div className="relative z-3 flex flex-col pt-18 md:pt-1 items-center justify-center h-full text-white bg-black/52">
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl text-center font-semibold md:text-5xl ml-0.5 mr-0.5 relative -translate-y-3">Endless Roads, Unshakable Service</h1>
            <p className="text-xl md:text-2xl font-semibold text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-2">
            Big Enough to Handle It. Small Enough to Care
            </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-md mt-2">
          <a
            href="/quote"
            className="bg-green-700 md:text-xl text-white font-bold py-3 px-6 rounded text-center hover:bg-green-800 transition"
          > 
            Get a Quote
          </a>
          <a
            href="/contacts"
            className="bg-green-700 md:text-xl text-white font-bold py-3 px-6 rounded text-center hover:bg-green-800 transition"
          >
            Contact Us
          </a>
        </div>
        </div>

      </section>

      {/* Responsive Info Section */}
      <section className="w-full bg-white py-12 px-6">
            <div className="flex flex-col md:flex-row items-center max-w-screen-lg mx-auto gap-2">
            {/* Text Content */}
            <div className="flex-1 md:pr-8 p-4 border-1 hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out scroll-mt-38 md:scroll-mt-26 xl:scroll-mt-24" id="dry">
                <h2 className="text-3xl font-bold text-black mb-4">
                Transpotation of Dry Goods
                </h2>
                {/* <h3 className="text-xl font-semibold text-[#59890c] mb-4">
                Larger Fleet. Broader Reach. More Possibilities.
                </h3> */}
                <p className="text-gray-700 mb-4">
                Dry vans are the most widely used type of freight trailer, 
                perfect for transporting general cargo that needs to be shielded from weather 
                and road conditions. 
                </p>
                <p className="text-gray-700 mb-4">
                Commonly shipped items include automotive components, furniture, building materials, 
                paper products, plastics, packaging materials, and a variety of dry, canned, and 
                non-perishable food items.

                </p>
                <p className="text-gray-700 mb-6">
                Designed for solid, non-refrigerated freight, dry vans offer a secure and efficient 
                solution, with goods easily accommodated in our 53-foot trailers.

                </p>
                <div className="flex space-x-4">
                <a className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800" 
                href = "/quote">
                    Request A Quote
                </a>
                </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 mt-8 md:mt-0 z-3 md:translate-x-3">
                <Image
                width={1536}
                height={1024}
                src={S1.src}
                alt="Trucks"
                className="w-full h-auto hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out"
                />
            </div>
            </div>
        </section>
      {/* Info Section */}
      <hr className="w-full h-[1.5px] bg-[#59890c]"/> 
      <section className="w-full bg-white py-12 px-6">
            <div className="flex flex-col md:flex-row items-center max-w-screen-lg mx-auto gap-2">
            {/* Image Content */}
            <div className="flex-1 mt-8 md:mt-0 z-3 md:-translate-x-3">
                <Image
                width={1024}
                height={1024}
                src={S2.src}
                alt="Trucks"
                className="w-full h-auto hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out"
                />
            </div>

            {/* Text Content */}
            <div className="flex-1 md:pr-8 p-4 border-1 hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out scroll-mt-38 md:scroll-mt-26 xl:scroll-mt-24" id="reefer">
                <h2 className="text-3xl font-bold text-black mb-4">
                Specialty Handling of Refrigerated / Frozen Products
                </h2>
                {/* <h3 className="text-xl font-semibold text-[#59890c] mb-4">
                Larger Fleet. Broader Reach. More Possibilities.
                </h3> */}
                <p className="text-gray-700 mb-4">
Transporting frozen goods—like meat, seafood, ice cream, and frozen baked products—demands more than just refrigeration. It takes experience. At Colossal Carriers, we&apos;ve spent years perfecting the art of frozen freight logistics. Our drivers and dispatch team understand the sensitivity of temperature-controlled loads and the importance of timely delivery to preserve product quality.


                </p>
                <p className="text-gray-700 mb-4">
Our state-of-the-art refrigerated trailers are equipped with advanced monitoring systems to maintain stable sub-zero temperatures from pickup to final drop-off. This precision ensures product integrity at every stage of the journey, giving our clients peace of mind that their cargo remains frozen, fresh, and secure—no matter the distance.
                </p>
                {/* <p className="text-gray-700 mb-6">
                ET Transport is an asset-based trucking company with over 100
                trucks and more than 200 trailers – fully equipped to move your
                product to its final destination safely and on time.
                </p> */}
                <div className="flex space-x-4">
                <a className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800" 
                href = "/quote">
                    Request A Quote
                </a>
                </div>
            </div>
            </div>
        </section>
        <hr className="w-full h-[1.5px] bg-[#59890c]"/> 
      <section className="flex items-center justify-center align-middle w-full h-[15vh] md:h-[20vh] bg-gray-200 ">
        <a className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800"
          href="/about">

          More About Us
        </a>
      </section>


    </main>
    );
}