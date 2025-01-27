// /c:/nourain/src/app/test/page.tsx
'use client';
import React from 'react';

const TestPage: React.FC = () => {
  // Simulate data fetching with a delay
  const [data, setData] = React.useState<string | null>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setData('Data loaded!');
    }, 3000); // 3-second delay

    return () => clearTimeout(timer);
  }, []);

  if (!data) {
    return null; // While loading, the loader should be visible
  }

  return (
    <div className="flex justify-center items-center h-screen text-black">
      <h1 className="text-2xl font-bold">Test Page Loaded Successfully!</h1>
    </div>
  );
};

export default TestPage;