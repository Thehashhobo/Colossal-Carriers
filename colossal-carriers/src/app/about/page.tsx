import A1 from "../../../public/images/A1.png";
import A2 from "../../../public/images/A2.png";
import WhyUse from "../components/WhyUse";
import Reviews from "../components/Reviews";

export default function About() {

    return (
        <main className="flex flex-col min-h-screen justify-start items-start pt-16">
            <section
              className="relative w-full h-[55vh] md:h-[75vh] bg-cover justify-start"
              style={{
                backgroundImage: `url(${A1.src})`,
                backgroundPosition: "center 20%", // Adjust the vertical position
              }}
            >
            <div className="relative z-3 flex flex-col items-center justify-center h-full text-white bg-black/40">
                <h1 className="text-4xl text-center font-bold md:text-5xl ml-0.5 mr-0.5 relative -translate-y-3">About Colossal Carriers</h1>
                <p className="text-xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3">
                Colossal Carriers is a Canadian asset-based company providing transportation and logistics of refrigerated and dry goods in Canada and the United States.


                </p>
            </div>
          </section>
        {/* Responsive Info Section */}
        <section className="w-full bg-white py-12 px-6">
            <div className="flex flex-col md:flex-row items-center max-w-screen-lg mx-auto gap-2">
            {/* Text Content */}
            <div className="flex-1 md:pr-8 p-4 border-1 hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out">
                <h2 className="text-3xl font-bold text-black mb-4">
                There’s Always a Solution
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
                <button className="bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600">
                    Request A Quote
                </button>
                </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 mt-8 md:mt-0 z-3 md:translate-x-3">
                <img
                src={A2.src}
                alt="Trucks"
                className="w-full h-auto hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out"
                />
            </div>
            </div>
        </section>

          {/* Certifications Section
          <section className="flex items-center justify-center w-full h-[8vh] bg-black">
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </section> */}
    
          
          {/* Info Section */}
          <section className="w-full bg-white py-12">
          <hr className="w-full h-[1.5px] bg-[#59890c]"/> 
          <WhyUse/>
          <hr className="w-full h-[1.5px] bg-[#59890c]"/> 
          <Reviews/>
          </section>
    
        </main>
      );
    }