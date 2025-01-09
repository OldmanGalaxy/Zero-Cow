import React from 'react';
import Navbar from '@/components/Navbar/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="relative h-[calc(100vh+100px)] mt-20">
        <div className="bg-gradient-to-b from-dgreen to-ygreen h-full w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-cream font-lilita pt-24 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl break-words leading-tight">
              Zero Cow <br /> Factory
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 w-[101vw]">
          <img
            src="/images/milk3.png"
            alt="Milk splash"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;