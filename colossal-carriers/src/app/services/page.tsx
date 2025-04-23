
import S1 from "../../../public/images/S1.webp";
import S2 from "../../../public/images/S2.webp";
export default function Services() {
return (
<main className="flex flex-col min-h-screen justify-start items-start pt-16">
      <section
        className="relative w-full h-[60vh] md:h-[75vh] bg-cover bg-center justify-start"
        style={{ backgroundImage: `url(${S1.src})` }}
      >
        <div className="relative z-3 flex flex-col pt-18 md:pt-1 items-center justify-center h-full text-white bg-black/52">
            <h1 className="text-4xl text-center font-bold md:text-5xl ml-0.5 mr-0.5 relative -translate-y-3">You Name it, We Ship it</h1>
            <p className="text-2xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3">
            Delivering excellence, one shipment at a time.
            </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-md mt-2">
          <a
            href="/quote"
            className="bg-green-700 text-white font-bold py-3 px-6 rounded text-center hover:bg-green-800 transition"
          >
            Get a Quote
          </a>
          <a
            href="/contacts"
            className="bg-green-700 text-white font-bold py-3 px-6 rounded text-center hover:bg-green-800 transition"
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
            <div className="flex-1 md:pr-8 p-4 border-1 hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out">
                <h2 className="text-3xl font-bold text-black mb-4">
                Road Transpotation 
                </h2>
                <h3 className="text-xl font-semibold text-[#59890c] mb-4">
                Larger Fleet. Broader Reach. More Possibilities.
                </h3>
                <p className="text-gray-700 mb-4">
                Established in 2005, ET Transport operates from 2 locations in
                Canada – Ontario and New Brunswick. This ensures that your cargo
                is transported promptly and efficiently.
                </p>
                <p className="text-gray-700 mb-4">
                With over 25,000 shipments transported each year, ET Transport has
                processes to ensure that your products arrive at the destination
                safely and on time.
                </p>
                <p className="text-gray-700 mb-6">
                ET Transport is an asset-based trucking company with over 100
                trucks and more than 200 trailers – fully equipped to move your
                product to its final destination safely and on time.
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
                <img
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
                <img
                src={S2.src}
                alt="Trucks"
                className="w-full h-auto hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out"
                />
            </div>

            {/* Text Content */}
            <div className="flex-1 md:pr-8 p-4 border-1 hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out">
                <h2 className="text-3xl font-bold text-black mb-4">
                Reefer / Heated Transport
                </h2>
                <h3 className="text-xl font-semibold text-[#59890c] mb-4">
                Larger Fleet. Broader Reach. More Possibilities.
                </h3>
                <p className="text-gray-700 mb-4">
                Established in 2005, ET Transport operates from 2 locations in
                Canada – Ontario and New Brunswick. This ensures that your cargo
                is transported promptly and efficiently.
                </p>
                <p className="text-gray-700 mb-4">
                With over 25,000 shipments transported each year, ET Transport has
                processes to ensure that your products arrive at the destination
                safely and on time.
                </p>
                <p className="text-gray-700 mb-6">
                ET Transport is an asset-based trucking company with over 100
                trucks and more than 200 trailers – fully equipped to move your
                product to its final destination safely and on time.
                </p>
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