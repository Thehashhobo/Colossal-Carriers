import H1 from "../../public/images/H1.jpeg";
import ServiceCard from "./components/ServiceCard";
import WhyUse from "./components/WhyUse";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-start items-start pt-16">
      <section
        className="relative w-full h-[55vh] md:h-[85vh] bg-cover bg-center justify-start"
        style={{ backgroundImage: `url(${H1.src})` }}
      >
        <div className="relative z-3 flex flex-col items-center justify-center h-full text-white bg-black/52">
            <h1 className="text-4xl text-center font-bold md:text-5xl ml-0.5 mr-0.5 relative -translate-y-3">You Name it, We Ship it</h1>
            <p className="text-2xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3">
            Delivering excellence, one shipment at a time.
            </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-md mt-2">
          <a
            href="/services"
            className="bg-green-700 text-white font-bold py-3 px-6 rounded text-center hover:bg-green-800 transition"
          >
            Explore Our Services
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
      {/* Certifications Section */}
      <section className="flex items-center justify-center w-full h-[8vh] bg-black">
        <h2 className="text-3xl font-bold text-white">Certifications</h2>
      </section>

      {/* Transportation Services Section */}
      <section className="w-full bg-gray-200 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Transportation Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-lg mx-auto">
          <ServiceCard
            image="https://via.placeholder.com/400x200"
            title="Non-Stop Service"
            text="We provide uninterrupted transportation services to ensure your goods reach their destination on time."
            link="/services/reefers"
          />
          <ServiceCard
            image="https://via.placeholder.com/400x200"
            title="Fast & Reliable Delivery"
            text="Our team is dedicated to delivering your shipments quickly and reliably, every time."
            link="/services/dry-vans"
          />
          {/* <ServiceCard
            image="https://via.placeholder.com/400x200"
            title="Fast & Reliable Delivery"
            text="Our team is dedicated to delivering your shipments quickly and reliably, every time."
          />
          <ServiceCard
            image="https://via.placeholder.com/400x200"
            title="Fast & Reliable Delivery"
            text="Our team is dedicated to delivering your shipments quickly and reliably, every time."
          /> */}
        </div>
      </section>
      {/* Info Section */}
      <line className="w-full h-[1.5px] bg-[#59890c]"/> 
      <WhyUse/>
      <section className="flex items-center justify-center align-middle w-full h-[30vh] bg-gray-200 ">
        <button className="bg-[#59890c] text-white font-bold py-2 px-4 rounded">
          More About Us
        </button>
      </section>


    </main>
  );
}
