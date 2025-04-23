import A2 from "../../../public/images/A2.webp";
export default function Careers() {
  return (
    <main className="w-full bg-white py-32 md:py-20 px-6">
      <div className="flex flex-col md:flex-row items-center max-w-screen-lg mx-auto gap-8">
        {/* Text Content */}
        <div className="flex-1 md:pr-8 p-4 border-2 border-green-800">
          <h2 className="text-3xl font-bold text-black mb-4">
            Why Drivers Choose Colossal Carriers
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li className="text-gray-700">Competitive pay and benefits</li>
            <li className="text-gray-700">Flexible schedules</li>
            <li className="text-gray-700">Supportive work environment</li>
            <li className="text-gray-700">Opportunities for advancement</li>
          </ul>
        </div>

        {/* Contact Form
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Enter your name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-3 px-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-3 px-2"
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
                className="mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-3 px-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full border-2 border-green-800 shadow-sm focus:border-black focus:ring-black sm:text-sm py-3 px-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-medium py-2 px-4 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              SEND
            </button>
          </form>
        </div> */}
          {/* Image Content */}
            <div className="flex-1 mt-8 md:mt-0 z-3 md:translate-x-3">
                <img
                src={A2.src}
                alt="Trucks"
                className="w-full h-auto hover:scale-105 shadow-lg transition-transform duration-300 ease-in-out"
                />
            </div>
      </div>
      <hr className="w-full my-5 h-[1.5px] bg-[#59890c]"/> 
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Apply for a Position
        </h2>
        <form className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2"
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
                className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2"
                required
              />
            </div>
          </div>

          {/* Phone and Years of Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2"
                required
              />
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Years of Experience <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="experience"
                min="0"
                className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2"
                required
              />
            </div>
          </div>

          {/* Position and Equipment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                Position Applying For
              </label>
              <select
                id="position"
                className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2"
              >
                <option>Lease Purchase Program</option>
                <option>Company Driver</option>
                <option>Owner Operator</option>
              </select>
            </div>
            <div>
              <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">
                Equipment You Drive
              </label>
              <select
                id="equipment"
                className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2"
              >
                <option>Flatbed / Rolltite</option>
                <option>Reefer / Dry Van</option>
              </select>
            </div>
          </div>

          {/* Radio Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-700">Best way to contact you?</p>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact"
                    value="phone"
                    className="mr-2"
                    required
                  />
                  Phone
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact"
                    value="email"
                    className="mr-2"
                  />
                  Email
                </label>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Are you a cross-border driver?</p>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="cross-border"
                    value="yes"
                    className="mr-2"
                    required
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="cross-border"
                    value="no"
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
              Comments  (optional)
            </label>
            <textarea
              id="comments"
              rows={4}
              className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm py-3 px-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-medium py-3 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>

    </main>
  );
}