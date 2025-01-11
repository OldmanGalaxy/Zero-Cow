'use client';
import React from 'react';

const Info1 = () => {
  const circleData = [
    { number: "1", text: "The genetic blueprint is extracted and modified.", animationClass: "animate-float-1" },
    { number: "2", text: "Microorganisms are engineered to carry the DNA.", animationClass: "animate-float-2" },
    { number: "3", text: "The microorganisms produce proteins through fermentation.", animationClass: "animate-float-3" },
    { number: "4", text: "The extracted proteins are turned into products, replacing the need for cows.", animationClass: "animate-float-4" },
  ];

  return (
    <div className="w-screen flex justify-start flex-col min-h-screen bg-gradient-to-b from-ygreen to-lgreen pb-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-lgreen font-lilita text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-10">
          Future of India <br /> Starting with India's <br /> First animal-free dairy
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 lg:gap-6 px-4 md:px-8 lg:px-12 mt-10 max-w-[1440px] mx-auto">
        {circleData.map((circle, index) => (
          <div
            key={index}
            className="relative group flex justify-center"
          >
            <div 
              className={`rounded-full w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[260px] md:h-[260px] lg:w-[240px] lg:h-[240px] xl:w-[280px] xl:h-[280px] p-8 bg-dgreen flex items-center justify-center transition-all duration-500 transform hover:bg-opacity-90 cursor-pointer hover:z-10 ${circle.animationClass}`}
            >
              <span className="text-ygreen font-lilita text-7xl sm:text-8xl md:text-7xl lg:text-7xl xl:text-8xl group-hover:opacity-0 transition-opacity duration-1000">
                {circle.number}
              </span>
              <span className="absolute text-ygreen font-lilita text-lg sm:text-xl lg:text-lg xl:text-xl px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[90%]">
                {circle.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info1;