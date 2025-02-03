"use client";
import { useEffect, useState } from "react";
import { FaPencilRuler, FaRocket } from "react-icons/fa";
import { MdOutlineConstruction } from "react-icons/md";
import "aos/dist/aos.css";
import Image from "next/image";
import dynamic from "next/dynamic";

const FaLightbulb = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaLightbulb)
);
const MdEngineering = dynamic(
  () => import("react-icons/md").then((mod) => mod.MdEngineering)
);

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const initializeAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 800,
        once: true,
        easing: "ease-in-out",
        mirror: true,
      });
    };

    initializeAOS();

    // Add scroll event listener with smooth behavior
    const handleScroll = () => {
      const processElements = document.querySelectorAll(".process-step");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      processElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > elementTop) {
          const step = element.getAttribute("data-step");
          if (step !== null) {
            setActiveStep(parseInt(step));
          }
        }
      });
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Updated throttle utility with explicit types for args
  const throttle = (
    func: (...args: unknown[]) => void,
    limit: number
  ): ((...args: unknown[]) => void) => {
    let lastFunc: number | undefined;
    let lastRan: number | undefined;
    return function (this: unknown, ...args: unknown[]) {
      if (lastRan === undefined) {
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        if (lastFunc !== undefined) {
          clearTimeout(lastFunc);
        }
        lastFunc = window.setTimeout(() => {
          if (Date.now() - (lastRan as number) >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - (lastRan as number)));
      }
    };
  };

  const processes = [
    {
      id: 1,
      title: "Consultation",
      description:
        "We begin by understanding your business needs, goals, and target audience through in-depth consultations. Our team conducts thorough market research and competitor analysis to ensure we create a solution that stands out.",
      icon: <FaLightbulb className="text-4xl text-blue-500" />,
      image: "/images/process/consultation.svg",
    },
    {
      id: 2,
      title: "Site Visit",
      description:
        "Our team develops a comprehensive strategy and roadmap tailored to your specific requirements. We create detailed project timelines, resource allocation plans, and define clear milestones for success.",
      icon: <MdOutlineConstruction className="text-4xl text-blue-500" />,
      image: "/images/process/site-visit.svg",
    },
    {
      id: 3,
      title: "Design & Development",
      description:
        "We create stunning designs and develop robust solutions using cutting-edge technologies. Our experienced team ensures that every aspect of your project is crafted with precision and attention to detail.",
      icon: <FaPencilRuler className="text-4xl text-blue-500" />,
      image: "/images/process/design.gif",
    },
    {
      id: 4,
      title: "Making It Work",
      description:
        "Rigorous testing and quality assurance ensure your solution meets the highest standards. We perform comprehensive testing across multiple platforms and scenarios to guarantee reliability.",
      icon: <MdEngineering className="text-4xl text-blue-500" />,
      image: "/images/process/manufacturing.gif",
    },
    {
      id: 5,
      title: "Installation",
      description:
        "We deploy your solution and provide ongoing support to ensure continued success and growth. Our team remains committed to your project's success with continuous monitoring and optimization.",
      icon: <FaRocket className="text-4xl text-blue-500" />,
      image: "/images/process/installation.svg",
    },
    {
      id: 6,
      title: "Maintenance",
      description:
        "We provide regular maintenance and updates to keep your solution running smoothly. Our team ensures that your project remains up-to-date with the latest technologies and trends.",
      icon: <FaRocket className="text-4xl text-blue-500" />,
      image: "/images/process/maintenance.svg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-extrabold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            How we Work!
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We follow a systematic approach to deliver exceptional results for
            your business
          </p>
        </div>

        <div className="relative">
          {/* Modified progress indicator for both mobile and desktop */}
          <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-blue-200">
            <div
              className="absolute w-4 h-4 bg-blue-500 rounded-full transition-all duration-700 ease-in-out"
              style={{
                top: `${((activeStep - 1) / (processes.length - 1)) * 100}%`,
                transform: "translateX(-50%)",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            />
          </div>

          {processes.map((process, index) => (
            <div
              key={process.id}
              className="relative mb-16 lg:mb-32 process-step pl-8 lg:pl-0"
              data-step={process.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1200"
            >
              <div
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16`}
              >
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-xl transform hover:-translate-y-1">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {process.id}
                    </div>
                    <div className="mt-4">
                      <div className="mb-4">{process.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="block lg:w-1/2">
                  <Image
                    src={process.image}
                    alt={process.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;