import React from 'react';

const Features: React.FC = () => {
    return (
        <section className="rounded-md shadow-[0px_0px_10px_0px_rgba(255,_255,_255,_1)]  py-12 px-4 sm:px-10 bg-white mx-8 mt-8">
            <h2
                className=" mx-2 text-4xl font-bold leading-none tracking-tight text-[#0c0207] md:text-5xl lg:text-6xl"
            >
                Standing Out from the {' '}
                <span className="relative inline-block group">
                    Rest
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 120 20"
                        className="absolute bottom-0 left-0 w-full h-[0.20em] fill-current text-blue-500 group-hover:text-red-500 transition-colors duration-300"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path d="M2,18 C30,10 90,10 118,18 L118,20 L2,20 Z" />
                    </svg>
                </span>
            </h2>
            <p className="text-lg text-gray-600 ml-4">
                Discover how our unique solutions set us apart in the industry, ensuring quality and excellence in every project we undertake.
            </p>

            {/* Features Grid Section */}
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="container mx-auto px-6 p-6">
                    <div className="flex flex-wrap my-12">
                        {/* Feature Item 1 */}
                        <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                            <div className="flex items-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="h-6 w-6 text-indigo-500"
                                >
                                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                                </svg>
                                <div className="ml-4 text-xl text-[#0c0207]">Expert Craftsmanship</div>
                            </div>
                            <p className="leading-loose text-gray-500 p-6 transition-transform hover:scale-105">
                                Rely on our years of expertise in designing and manufacturing premium signages and digital displays. We ensure top-notch quality and precision in every project, addressing the unique requirements of various businesses and industries.
                            </p>
                        </div>
                        {/* Feature Item 2 */}
                        <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                            <div className="flex items-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="h-6 w-6 text-indigo-500"
                                >
                                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                                </svg>
                                <div className="ml-4 text-xl text-[#0c0207]">Innovative Solutions</div>
                            </div>
                            <p className="leading-loose text-gray-500 p-6 transition-transform hover:scale-105">
                                We incorporate the latest technology and creative design approaches to develop visually striking and functional signage solutions. Our forward-thinking strategies ensure your brand stands out in the marketplace and communicates effectively with your audience
                            </p>
                        </div>
                        {/* Feature Item 3 */}
                        <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r-0 p-8">
                            <div className="flex items-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="h-6 w-6 text-indigo-500"
                                >
                                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                                </svg>
                                <div className="ml-4 text-xl text-[#0c0207]">Tailored Services</div>
                            </div>
                            <p className="leading-loose text-gray-500 p-6 transition-transform hover:scale-105">
                                Benefit from our custom-made signage solutions designed to reflect your brand and meet your specific business needs. Whether for indoor or outdoor use, our products are carefully crafted to combine aesthetics with functionality, ensuring lasting impact.
                            </p>
                        </div>
                        {/* Feature Item 4 */}
                        <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                            <div className="flex items-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="h-6 w-6 text-indigo-500 "
                                >
                                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                                </svg>
                                <div className="ml-4 text-xl text-[#0c0207]">Collaborative Partnership</div>
                            </div>
                            <p className="leading-loose text-gray-500 p-6 transition-transform hover:scale-105">
                                We believe in building long-term relationships with our clients. Our team works closely with you, offering support throughout the process and beyond. With a customer-first approach, we ensure that our signage solutions elevate your business and contribute to your success.
                            </p>
                        </div>
                        {/* Feature Item 5 */}
                        <div className="w-full border-b md:w-1/2 lg:w-1/3 p-8">
                            <div className="flex items-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="h-6 w-6 text-indigo-500"
                                >
                                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                                </svg>
                                <div className="ml-4 text-xl text-[#0c0207]">Process Transparency</div>
                            </div>
                            <p className="leading-loose text-gray-500 p-6 transition-transform hover:scale-105">
                                We keep you informed at every stage, from the initial design concept to final installation. Our transparent approach ensures you’re always up to date, fostering trust and guaranteeing a signage solution that meets your expectations.
                            </p>
                        </div>
                    </div>
                    {/* Learn More Button */}
                    <div className="flex justify-center mt-8">
                        <a href="/process" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-500 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
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