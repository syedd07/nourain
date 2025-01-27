"use client";
import React, { useState } from "react";

interface TabItem {
  id: "SuperbSigns" | "NexCool" | "Example3";
  label: string;
}

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<"SuperbSigns" | "NexCool" | "Example3">("SuperbSigns");

  const tabs: TabItem[] = [
    { id: "SuperbSigns", label: "Superb Signs" },
    { id: "NexCool", label: "NexCool HVAC" },
    { id: "Example3", label: "Example 3" },
  ];

  // Change vertical line color based on active tab
  const lineColor =
    activeTab === "SuperbSigns"
      ? "bg-blue-600"
      : activeTab === "NexCool"
      ? "bg-green-600"
      : "bg-purple-600";

  return (
    <>
      {/* Header & Illustration */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className="container py-20 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 mt-52 mb-20">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold text-[#3f3f3f] tracking-tighter sm:text-5xl">
              Our Solutions
            </h1>
            <p className="text-xl text-[#3f3f3f]">
              We provide a wide range of solutions to help you achieve your goals
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/sol/solutions.png"
              alt="3D illustration"
              width={4192}
              height={2914}
              className="w-full h-auto md:w-3/4"
            />
          </div>
          <div className="mb-40"></div>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#3f3f3f] tracking-tighter sm:text-5xl text-center">
          Our Products
        </h1>

        {/* MOBILE: Horizontal Tabs */}
        <div className="mt-8 mb-8 text-sm font-medium text-center text-gray-500 border-b border-gray-200 lg:hidden">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab) => (
              <li key={tab.id} className="mr-2">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-block p-4 rounded-t-lg border-b-2 ${
                    activeTab === tab.id
                      ? "text-blue-600 border-blue-600"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop layout: 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 mb-20 text-[#3f3f3f]">
          {/* LEFT COLUMN: Vertical Tabs */}
          <div className="relative hidden lg:flex flex-col space-y-4 pr-6">
            {/* Vertical line with dynamic color */}
            <div
              className={`absolute top-0 right-0 w-px h-full ${lineColor} transition-colors duration-300`}
            />
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-l-4 px-4 py-3 text-left transition ${
                  activeTab === tab.id
                    ? "font-semibold text-blue-600 border-blue-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* MIDDLE COLUMN: Different SVG per tab */}
          <div className="flex items-center justify-center">
            {activeTab === "SuperbSigns" && (
              <img
                src="/images/sol/superb-signs.svg"
                alt="Superb Signs SVG"
                // className="w-4/5 h-auto md:w-3/4"
                width={4192}
                height={2914}
              />
            )}
            {activeTab === "NexCool" && (
              <img
                src="/images/sol/nexcool.svg"
                alt="NexCool SVG"
                // className="w-4/5 h-auto md:w-3/4"
                width={4192}
                height={2914}
              />
            )}
            {activeTab === "Example3" && (
              <img
                src="/images/sol/example3.svg"
                alt="Example 3 SVG"
                className="w-4/5 h-auto md:w-3/4"
              />
            )}
          </div>

          {/* RIGHT COLUMN: Active Tab Content */}
          <div>
            {activeTab === "SuperbSigns" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-700">Superb Signs</h2>
                <p className="text-gray-600">Content for Superb Signs goes here.</p>
                <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                  Know More →
                </button>
              </div>
            )}
            {activeTab === "NexCool" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-700">NexCool HVAC</h2>
                <p className="text-gray-600">Content for NexCool HVAC goes here.</p>
                <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                  Know More →
                </button>
              </div>
            )}
            {activeTab === "Example3" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-700">Example 3</h2>
                <p className="text-gray-600">Content for Example 3 goes here.</p>
                <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                  Know More →
                </button>
              </div>
            )}
            
          </div>
          <div className="mt-20"></div>
        </div>

        {/* Detailed Content Section */}
        
        <section className="container mx-auto mb-20 ">
          {activeTab === "SuperbSigns" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Superb Signs Detailed Information</h2>
              <p className="text-gray-700">
                Here you can add more detailed information about Superb Signs. This section will dynamically display content based on the active tab.
              </p>
              {/* Add more detailed content as needed */}
            </div>
          )}
          {activeTab === "NexCool" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">NexCool HVAC Detailed Information</h2>
              <p className="text-gray-700">
                Here you can add more detailed information about NexCool HVAC. This section will dynamically display content based on the active tab.
              </p>
              {/* Add more detailed content as needed */}
            </div>
          )}
          {activeTab === "Example3" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Example 3 Detailed Information</h2>
              <p className="text-gray-700">
                Here you can add more detailed information about Example 3. This section will dynamically display content based on the active tab.
              </p>
              {/* Add more detailed content as needed */}
            </div>
          )}
          <div className="mb-20"></div>
        </section>
      </section>
    </>
  );
}