"use client";
import React from "react";

export default function Hero() {
  const texts = React.useMemo(() => ["Signages", "HVAC", "and more!"], []);

  const [index, setIndex] = React.useState(0);
  const [fadeClass, setFadeClass] = React.useState("animate-fadeIn");

  React.useEffect(() => {
    // Every 3 seconds, fade out, switch text, then fade in
    const intervalId = setInterval(() => {
      setFadeClass("animate-fadeOut");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFadeClass("animate-fadeIn");
      }, 400); // Matches the fade duration
    }, 3000);

    return () => clearInterval(intervalId);
  }, [texts]);

  return (
    <section
      role="region"
      aria-label="Hero Section"
      className="relative flex items-center justify-center h-[70vh] md:h-[90vh]
                 mt-[60px] md:mt-20 mb-8 overflow-hidden bg-cover bg-center
                 transition-all duration-500 hover:opacity-95"
      style={{
        backgroundImage: "url(/images/main_1.webp)",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>
      <div className="container relative z-10 text-center text-white py-16 md:py-24 px-4 md:px-0">
        <h1 className="mb-4 text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to {" "}
          <br className="block md:hidden" />
          <span
            className="whitespace-nowrap md:whitespace-normal bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
                         from-purple-200 via-pink-50 to-teal-700 bg-clip-text text-transparent"
          >
            Al- Nourain
          </span>
        </h1>
        <p className="mb-6 text-base md:text-2xl">
          We provide innovative solutions
          {index < 2 ? " for " : " "}
          <span
            className={`inline-block transition-opacity duration-500 bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent ${fadeClass}`}
          >
            {texts[index]}
          </span>
        </p>
        <a
          href="#services"
          className="inline-block px-6 md:px-8 py-3 text-base md:text-lg font-semibold
                     text-white transition-transform transform rounded-full shadow-md
               bg-primary hover:bg-transparent hover:border-2 hover:border-blue-500
               hover:text-blue-500 hover:scale-105 fill-none"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
}
