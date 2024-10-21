import Image from "next/image";

const Contactme = () => {
  return (
    <div>
      <div className="py-10 px-5 flex justify-center items-center bg-gradient-to-br from-[#200a30] via-[#2a0037] to-[#35005b]">
        <div className="flex flex-col lg:flex-row bg-[#1f1b2e] rounded-lg shadow-lg overflow-hidden max-w-6xl">
          {/* Left Div with Image */}
          <div className="lg:w-1/2 flex justify-center items-center p-5">
            <Image
              width={600}
              height={600}
              src="https://i.ibb.co.com/YBfQmLV/4289985-removebg-preview.png"
              alt="image"
            />
          </div>

          {/* Right Div with Form */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center bg-[#2a2438]">
            <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">
              Get In Touch
            </h2>

            <form className="flex flex-col gap-4">
              {/* Name Input */}
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md border border-gray-600 bg-[#333048] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Email Input */}
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md border border-gray-600 bg-[#333048] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Message Input */}
              <textarea
                rows="4"
                placeholder="Your Message"
                className="p-3 rounded-md border border-gray-600 bg-[#333048] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              ></textarea>

              {/* Submit Button */}
              <button className="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
