import H1 from "../../public/images/H1.webp";
import H2 from "../../public/images/H2.webp";
import H3 from "../../public/images/H3.webp";
import ServiceCard from "./components/ServiceCard";
import WhyUse from "./components/WhyUse";
import Reviews from "./components/Reviews";
import Certifications from "./components/Certifications";


export default function Home() {
  return (
    <main className="flex flex-col justify-start items-start">
      <section
        className="relative w-full h-[100vh] bg-cover bg-center justify-start"
        style={{ backgroundImage: `url(${H1.src})` }}
      >
        <div className="relative z-3 flex flex-col pt-18 md:pt-1 items-center justify-center h-full text-white bg-black/52">
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl text-center font-semibold md:text-5xl ml-0.5 mr-0.5 relative -translate-y-10">Endless Roads, Unshakable Service</h1>
            <p className="text-xl md:text-2xl font-semibold text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-7">
            Big Enough to Handle It. Small Enough to Care
            </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-md">
          <a
            href="/services"
            className="font-[family-name:var(--font-poppins)] bg-green-700 text-xl md:text-2xl text-white font-bold py-3 px-6 rounded text-center hover:bg-green-800 transition"
          >
            Explore Our Services
          </a>
          <a
            href="/contacts"
            className="font-[family-name:var(--font-poppins)] bg-green-700 text-xl md:text-2xl font-bold py-3 px-6 rounded text-center hover:bg-green-800 transition"
          >
            Contact Us
          </a>
        </div>
        </div>

      </section>
      {/* Certifications Section */}
      {/* <section className="flex items-center justify-center w-full h-[10vh] bg-white border-t-2 border-b-2 border-[#59890c]">
        <h2 className="text-3xl font-bold text-white">Certifications</h2>
      </section> */}
      <Certifications/>

      {/* Transportation Services Section */}
      <section className="w-full bg-white px-6">
        <div className="text-center">
            <p className="font-[family-name:var(--font-poppins)] text-3xl text-green-800 font-extrabold opacity-45 py-8">Colossal Carriers</p>
            <p className="mb-4.5 font-[family-name:var(--font-poppins)] mx-5 text-xl md:mx-25 md:text-3xl font-bold ">Canadian-based company with a fleet of trucks available to transport your goods within Canada and the USA
            </p>
        </div>
        {/* <h2 className="text-3xl font-bold text-center text-black mb-8">
          Transportation Services
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-lg mx-auto items-center justify-center">
          <ServiceCard
            image={H2.src}
            name="Transportation Services"
            description="We provide reliable transportation services for both dry and temperature-controlled goods, 
            with an excellent track record of safe, cost effective and on-time delivery."
            width={3000}
            height={2000}
            link="/services"
          />
          <ServiceCard
            image={H3.src}
            name="Colossal Carriers Careers"
            description="We are looking for dependable, professional drivers to join our team. Whether you're seeking steady company work or
            the freedom of lease-to-own, we have a place for you."
            width={5456}
            height={3632}
            link="/careers"
          />
        </div>
      </section>
      {/* Info Section */}
      <hr className="w-full h-[1.5px] bg-[#59890c]"/> 
      <WhyUse/>
      <section className="flex items-center justify-center w-full h-[10vh] md:h-[15vh] bg-gray-200 ">
        <a
          href="/about"
          className="bg-green-700 text-white font-bold py-2 px-4 items-center rounded text-center hover:bg-green-800 transition"
        >
          More About Us
        </a>
        
      </section>
      <hr className="w-full h-[1.5px] bg-[#59890c]"/> 
      <Reviews/>
    </main>
  );
}
