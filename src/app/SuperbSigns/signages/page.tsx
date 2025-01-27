"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel/Carousel";
import Head from "next/head";

const SignagesPage: React.FC = () => {
  return (
    <>
    <div className="mt-20">
      {/* Carousel Section */}
      <Carousel />
      </div>
      <Head>
        <title>Superb Sign - [Al- Nourain]</title>
        <meta
          name="description"
          content="Discover our high-quality signage solutions tailored to your brand."
        />
        {/* Add more meta tags as needed */}
      </Head>

      <div className="mb-16"></div>

      {/* Details Section */}


      {/* Contact Sales Button with Custom URL Param */}
      {/* <div className="text-center">
          <Link
            href={{
              pathname: "/contact-sales",
              query: { from: "SuperbSigns" },
            }}
          >
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
              Contact Sales
            </button>
          </Link>
        </div> */}

    </>
  );
};

export default SignagesPage;
