import React from "react";

const page = () => {
  return (
    <div className="mb-24">
      <div className="text-myred2 font-bold lg:mb-16 pl-32 lg:pl-[550px] pt-14 lg:text-5xl text-3xl">
        Contact
      </div>
      <section className="text-gray-600 body-font relative items-center">
        <div className="container px-4 flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-black">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
                placeholder="Enter your message here"
                required
              />
            </div>
            <button className="text-white bg-myred2 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Send yor Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
