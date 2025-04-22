import C1 from "../../../public/C1.svg"
export default function Contacts() {
    return (
    <main className="flex flex-col min-h-screen justify-start items-center pt-28 md:pt-16">
        <section
        className="flex items-center justify-center w-full h-[12vh] px-10"
        style={{
            background: "linear-gradient(to left, #0ec76a, #088044 50%, #088044)",
        }}
        >
        <h2 className="text-4xl font-bold text-white">Contact Us</h2>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 p-8 sm:p-20 min-h-screen">
            {/* Contact Information */}
            <div className="col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-green-700">Contact Our Office</h2>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                <span className="text-green-700 text-2xl">
                <img
                    src={C1.src}
                    className="w-6 h-6 mt-0.5"
                />
                </span>
                <p className="text-lg font-medium">905-761-9999</p>
                </div>
                <p className="text-gray-600">Toll-free: 1-877-742-2999</p>
                <p className="text-gray-600">Fax: 905-669-9056</p>
                <p className="text-gray-600">
                155 Drumlin Circle, Vaughan, ON L4K 3E7 Canada
                </p>
            </div>
            <div className="space-y-2">
                <p className="text-gray-600">
                <strong>Type of Carrier:</strong> Truck Load/LTL
                </p>
                <p className="text-gray-600">
                <strong>Safety Rating:</strong> Excellent
                </p>
            </div>
            <div className="col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-green-700">Contact Our Team</h2>
            <div className="space-y-4">
                <div>
                <h3 className="text-lg font-bold text-green-700 mb-2">General Inquiry</h3>
                <p className="text-gray-600">
                    For any questions or concerns, please reach out to us at:
                </p>
                <p className="text-green-700">admin@transportationservices.ca</p>
                </div>
            </div>
            </div>
            </div>
    
            {/* Contact Our Team */}

    
            {/* Contact Form */}
            <div className="col-span-1">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Get in Touch</h2>
            <form className="space-y-4">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-2 px-1"
                    required
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-2 px-1"
                    required
                />
                </div>
                <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-2 px-1"
                />
                </div>
                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-2 px-1"
                ></textarea>
                </div>
                <button
                type="submit"
                className="w-full bg-green-700 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                SEND
                </button>
            </form>
            </div>
        </div>
      </main>
    );
  }