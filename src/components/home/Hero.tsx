'use client';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
  className="relative flex items-center justify-center h-[70vh] md:h-[80vh] mt-[-70px] md:mt-0 mb-8 overflow-hidden bg-cover bg-center transition-all duration-500 hover:opacity-95"
  style={{
    backgroundImage: 'url(/images/main_1.webp)',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
  }}
>
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>
  <div className="container relative z-10 text-center text-white py-16 md:py-24 px-4 md:px-0 animate__animated animate__fadeInUp">
    <h1 className=" mb-4 text-3xl md:text-6xl font-bold drop-shadow-lg">
      Welcome to {" "}
      <span className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-200 via-pink-50 to-teal-700 bg-clip-text text-transparent">Nourain</span>
    </h1>
    <p className="mb-6 text-base md:text-2xl animate__animated animate__fadeIn animate__delay-1s">
      We provide innovative solutions for signage, HVAC, and more.
    </p>
    <a
      href="#services"
      className="inline-block px-6 md:px-8 py-3 text-base md:text-lg font-semibold text-white transition-transform transform rounded-full shadow-md bg-primary hover:bg-[#005eac] hover:scale-105 animate__animated animate__pulse animate__infinite animate__slow"
    >
      Explore Our Services
    </a>
  </div>
</section>
  );
};

export default Hero;