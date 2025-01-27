"use client";
import React, { useState } from "react";
import Link from "next/link";

interface CardItem {
  id: number;
  title: string;
  body: string;
  image: string;
  link: string;
}

// Card component with image & hover effect
const Card: React.FC<CardItem> = ({ title, body, image, link }) => {
  return (
    <Link
      href={link}
      className="
          group
          relative
          block
          w-58 h-80
          p-[1.5px]
          overflow-hidden
          rounded-2xl
          border border-gray-300
          transition duration-500
          ease-out
          hover:shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
        "
    >
      {/* Conic gradient spinning layer (hidden until hover) */}
      <div className="absolute inset-0 z-10 rounded-2xl bg-[conic-gradient(#0672CB_20deg,transparent_120deg)] animate-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Card content */}
      <div className="relative z-20 w-full h-full bg-gray-100 rounded-[inherit] p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover rounded-md mb-2"
        />
        <div className="card-details text-black h-auto grid place-content-center gap-1">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-gray-600">{body}</p>
        </div>

        {/* Small phrase at bottom-right */}
        <span className="absolute bottom-2 right-2 text-sm text-blue-600 flex items-center space-x-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Know more 
            <svg
                className="w-5 h-5 text-blue-600 py-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
        </span>
      </div>
    </Link>
  );
};

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "SuperbSigns" | "NexCool" | "Wayfindings"
  >("SuperbSigns");

  // Updated data for each tab with image URLs
  const cardsData: Record<
    "SuperbSigns" | "NexCool" | "Wayfindings",
    CardItem[]
  > = {
    SuperbSigns: [
      {
        id: 1,
        title: "Signages",
        body: "High-quality signages tailored to your brand.",
        image: "/images/signage.webp",
        link: "/SuperbSigns/signages",
      },
      {
        id: 2,
        title: "Wayfinding Signs",
        body: "Help people navigate large facilities with ease",
        image: "/images/wayfindings.jpg",
        link: "/SuperbSigns/wayfindins",
      },
      {
        id: 3,
        title: "Channel Letters",
        body: "3D letters to enhance visibility and style.",
        image: "/images/3d-signage.webp",
        link: "/channel-letters",
      },
      {
        id: 4,
        title: "Digital Signages",
        body: "Eye-catching digital signage solutions.",
        image: "/images/digital-signage.jpg",
        link: "/SuperbSigns/signages/digital-signages",
      },
    ],
    NexCool: [
      {
        id: 1,
        title: "HVAC Installation",
        body: "Professional HVAC system setup and support.",
        image: "/images/hvac.jpg",
        link: "/hvac-installation",
      },
    ],
    Wayfindings: [
      {
        id: 1,
        title: "Directional Signage",
        body: "Help people navigate large facilities with ease.",
        image: "/images/wayfinding-sign.jpg",
        link: "/directional-signage",
      },
    ],
  };

  return (
    <>
      {/* Services Section */}
      <section className="py-12 px-4 sm:px-10 mx-8 bg-gray-100 rounded-lg shadow-[0px_1px_100px_0px_rgba(246,_242,_244,_1)]">
        <h1
          className="mb-8 mt-32 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
          style={{ cursor: "url('/images/thinking.png') 32 32, auto" }}
        >
          What We Offer
        </h1>
        <p className="mb-12 text-lg text-gray-500 lg:text-xl lg:leading-relaxed">
          Here's a quick overview of all the services we provide. We strive to
          offer solutions that meet your needs and exceed your expectations.
        </p>

        {/* Tabs */}
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <button
                onClick={() => setActiveTab("SuperbSigns")}
                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                  activeTab === "SuperbSigns"
                    ? "text-blue-600 border-blue-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                }`}
              >
                SuperbSigns
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => setActiveTab("NexCool")}
                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                  activeTab === "NexCool"
                    ? "text-blue-600 border-blue-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                }`}
              >
                NexCool
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => setActiveTab("Wayfindings")}
                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                  activeTab === "Wayfindings"
                    ? "text-blue-600 border-blue-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                }`}
              >
                Example 3
              </button>
            </li>
          </ul>
        </div>

        {/* Cards */}
        {/* Reduced gap to 'gap-4' for tighter spacing */}
        <div className="mt-6 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cardsData[activeTab].map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              body={card.body}
              image={card.image}
              link={card.link} // Pass the link prop to the Card component
            />
          ))}
        </div>
        <div className="mb-16"></div>
      </section>
    </>
  );
};

export default Services;
