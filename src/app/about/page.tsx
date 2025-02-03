'use client';
import React from "react";
import Services from "@/components/Services/Services";


const AboutPage: React.FC = () => {
  const [data, setData] = React.useState<string | null>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setData('About Page Loaded!');
    }, 3000); // 3-second delay

    return () => clearTimeout(timer);
  }, []);

  if (!data) {
    return null; // Loader should be visible during this time
  }

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold text-black">About Page Loaded Successfully!</h1>
    </div>
    <Services />
    </>
  );
};

export default AboutPage;