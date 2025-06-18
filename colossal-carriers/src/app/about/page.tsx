import A1 from "../../../public/images/A1.webp";
import A2 from "../../../public/images/A2.webp";
import WhyUse from "../components/WhyUse";
import Reviews from "../components/Reviews";
import Image from "next/image";

export default function About() {

    return (
        <main className="flex flex-col min-h-screen justify-start items-start">
            <section
              className="relative w-full h-[55vh] md:h-[75vh] bg-cover justify-start"
              style={{
                backgroundImage: `url(${A1.src})`,
                backgroundPosition: "center 20%", // Adjust the vertical position
              }}
            >
            <div className="relative z-3 flex flex-col items-center justify-center h-full text-white bg-black/40">
                <h1 className="font-[family-name:var(--font-poppins)] text-4xl text-center font-bold md:text-5xl ml-0.5 mr-0.5 relative -translate-y-3">About Us</h1>
                <p className="font-[family-name:var(--font-poppins)] text-lg xl-text-xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3 max-w-[70vw]">
                Colossal Carriers is a Canadian asset-based company providing transportation and logistics of refrigerated and dry goods in Canada and the United States.
                </p>
            </div>
          </section>
        {/* Responsive Info Section */}
        <section className="w-full bg-white py-12 px-6">
            <div className="flex flex-col md:flex-row items-center max-w-screen-lg mx-auto gap-2">
            {/* Text Content */}
            <div className="flex-1 md:pr-3 md:pl-3 p-4 border-1 hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out">
                <h2 className="text-3xl font-bold text-black mb-4">
                Driven by Experience. Defined by Reliability.
                </h2>
                <h3 className="text-xl font-semibold text-[#59890c] mb-4">
                Modern Fleet. Cross-Border Reach. Built to Deliver.
                </h3>
                <p className="text-gray-700 mb-4">
                Founded in 2019 and proudly based in Vaughan, Ontario, Colossal Carriers is a family-run long haul 
                trucking company built on over 20 years of hands-on industry experience. We specialize in the dependable 
                transportation of dry van and refrigerated (reefer) freight across Canada and the United States.
                </p>
                <p className="text-gray-700 mb-4">
                At Colossal Carriers, we understand the demands of the road and the trust our customers place in us. 
                Whether it’s time-sensitive frozen goods or general freight, we’re committed to delivering with precision,
                 professionalism, and care. Our modern fleet, real-time tracking capabilities, and unwavering commitment 
                 to service ensure your cargo arrives safely and on time—every time.
                </p>
                <div className="flex place-content-between space-x-4">
                <a className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800" 
                href = "/quote">
                    Request A Quote
                </a>

                <a className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800" 
                href = "/careers">
                    Fuel Your Career with Us
                </a>
                </div>
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