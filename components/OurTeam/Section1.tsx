import React from "react";
import MilkSplatter from "./MilkSplatter";
import MilkWave from "./MilkWave";

function Section1() {
  return (
    <div className="relative text-cream flex flex-col-reverse md:flex-row min-h-screen items-center p-4 md:p-0">
      {/* Rounded Rectangle */}
      <div
        className="group relative w-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] 
          rounded-2xl md:rounded-r-[100px] md:rounded-l-none mr-8 max-md:mx-8
          bg-lgreen/80 backdrop-blur-sm
          mt-8 md:mt-0 p-6 sm:p-8 md:p-10
          transition-all duration-500 ease-out
          hover:backdrop-blur-md
          before:absolute before:inset-0 before:rounded-2xl before:md:rounded-r-[100px] before:md:rounded-l-none
          before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent
          before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000
          overflow-hidden
          flex flex-col justify-between">
        <MilkWave />
        <MilkSplatter />
        <div className="w-full max-w-3xl mx-auto relative z-10">
          <div className="text-center transform transition-transform duration-500 group-hover:scale-105">
            <h2
              className="text-ygreen text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lilita mb-3 sm:mb-4
                        transition-all duration-500 group-hover:text-dgreen group-hover:-translate-y-1">
              Chetan Kalsariya
            </h2>
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ygreen font-lilita mb-4 sm:mb-6
                        transition-all duration-500 group-hover:text-dgreen group-hover:translate-y-1">
              Co-Founder & Chief Executive Officer
            </p>
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto relative z-10">
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-lilita
                     opacity-90 transition-opacity duration-500 group-hover:opacity-100 mb-4">
            Chetan Kalsariya has been the greatest minds to ever live. Chetan
            handles all the business-related queries and the day-to-day
            operations of the company. Under his expertise, the company has
            grown to be a huge success. He is the person who has made the
            company what it is today.
          </p>
        </div>
      </div>
      {/* Circle */}
      <div
        className="group relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] 
          mx-4 md:mr-8 lg:mr-20 overflow-hidden
          rounded-full border-4 border-dgreen bg-lgreen/80 flex-shrink-0
          transition-all duration-500 ease-out
          hover:border-ygreen hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
          <img
            src="/images/chetan.jpg"
            className="absolute w-full h-full object-cover object-center"
            alt="Chetan Kalsariya"
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
