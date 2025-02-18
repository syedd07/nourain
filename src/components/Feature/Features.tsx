import React from "react";

const Features: React.FC = () => {
  return (
    <section className="rounded-md shadow-[0px_0px_10px_0px_rgba(255,_255,_255,_1)] bg-FDFCFA py-12 px-4 sm:px-10 bg-white mx-4 md:mx-8 mt-8">
      <h2 className=" mx-2 text-4xl font-bold leading-none tracking-tight text-[#0c0207] md:text-5xl lg:text-6xl">
        What makes us{" "}
        <span className="relative inline-block group">
          Different?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 20"
            className="absolute bottom-0 left-0 w-full h-[0.20em] fill-current text-indigo-500 group-hover:text-red-500 transition-colors duration-300"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M2,18 C30,10 90,10 118,18 L118,20 L2,20 Z" />
          </svg>
        </span>
      </h2>
      <p className="text-lg text-gray-600 ml-4">
        Discover how our unique solutions set us apart in the industry, ensuring
        quality and excellence in every project we undertake.
      </p>

      {/* Features Grid Section */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto px-0 md:px-6 p-6">
          <div className="flex flex-wrap my-6 md:my-12">
            {/* Feature Item 1 */}
            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-4 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <img
                  src="/images/features-icon/expert.svg"
                  alt="Expert Craftsmanship"
                  className="h-6 w-6 text-indigo-500 text-bold"
                ></img>
                <div className="ml-4 text-lg md:text-xl text-[#0c0207]">
                  Expert Craftsmanship
                </div>
              </div>
              <p className="leading-normal md:leading-loose text-gray-500 p-2 md:p-6 text-base transition-transform hover:scale-105">
                Rely on our years of expertise in designing and manufacturing
                premium signages and digital displays. We ensure top-notch
                quality and precision in every project, addressing the unique
                requirements of various businesses and industries.
              </p>
            </div>
            {/* Feature Item 2 */}
            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-4 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <img
                  alt="Innovative Solutions"
                  src="/images/features-icon/innovative.svg"
                  className="h-6 w-6 text-indigo-500"
                ></img>
                <div className="ml-4 text-xl text-[#0c0207]">
                  Innovative Solutions
                </div>
              </div>
              <p className="leading-loose text-gray-500 p-6 transition-transform hover:scale-105">
                We incorporate the latest technology and creative design
                approaches to develop visually striking and functional signage
                solutions. Our forward-thinking strategies ensure your brand
                stands out in the marketplace and communicates effectively with
                your audience
              </p>
            </div>
            {/* Feature Item 3 */}
            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-4 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <img
                  alt="Tailored Services"
                  src="/images/features-icon/services.svg"
                  className="h-6 w-6 text-indigo-500"
                ></img>
                <div className="ml-4 text-xl text-[#0c0207]">
                  Tailored Services
                </div>
              </div>
              <p className="leading-loose text-gray-500 p-6 transition-transform hover:scale-105">
                Benefit from our custom-made signage solutions designed to
                reflect your brand and meet your specific business needs.
                Whether for indoor or outdoor use, our products are carefully
                crafted to combine aesthetics with functionality, ensuring
                lasting impact.
              </p>
            </div>
            {/* Feature Item 4 */}
            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-4 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <img
                  alt="Collaborative Partnership"
                  src="/images/features-icon/collaborative.svg"
                  className="h-6 w-6 text-indigo-500 "
                ></img>
                <div className="ml-4 text-xl text-[#0c0207]">
                  Collaborative Partnership
                </div>
              </div>
              <p className="leading-loose text-gray-500 p-6 transition-transform hover:scale-105">
                We believe in building long-term relationships with our clients.
                Our team works closely with you, offering support throughout the
                process and beyond. With a customer-first approach, we ensure
                that our signage solutions elevate your business and contribute
                to your success.
              </p>
            </div>
            {/* Feature Item 5 */}
            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-4 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <img
                  alt="Process Transparency"
                  src="/images/features-icon/process.svg"
                  className="h-6 w-6 text-indigo-500"
                ></img>
                <div className="ml-4 text-xl text-[#0c0207]">
                  Process Transparency
                </div>
              </div>
              <p className="leading-loose text-gray-500 p-6 transition-transform hover:scale-105">
                We keep you informed at every stage, from the initial design
                concept to final installation. Our transparent approach ensures
                you’re always up to date, fostering trust and guaranteeing a
                signage solution that meets your expectations.
              </p>
            </div>
          </div>
          {/* Learn More Button */}
          <div className="flex justify-center mt-4 md:mt-8">
            <a
              href="/process"
              className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-500 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
