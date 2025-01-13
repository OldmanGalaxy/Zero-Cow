import React from "react";
import MilkSplatter from "./MilkSplatter";
import MilkWave from "./MilkWave";

function Section2() {
  return (
    <section className="relative text-cream font-lilita min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen items-center p-4 md:p-0">
        {/* Circle */}
        <div className="group relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] 
            mx-4 md:ml-8 lg:ml-20 overflow-hidden
            rounded-full border-4 border-dgreen bg-lgreen/80 flex-shrink-0 
            mb-8 md:mb-0
            transition-all duration-500 ease-out
            hover:border-ygreen hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
            <img src="/images/parini.png" className="absolute" alt="Parini Kapadia" />
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="group relative w-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]
            flex flex-col justify-between ml-8 max-md:mx-8
            rounded-2xl md:rounded-l-[100px] md:rounded-r-none 
            bg-lgreen/80 backdrop-blur-sm
            p-6 sm:p-8 md:p-10 lg:p-12
            transition-all duration-500 ease-out
            hover:backdrop-blur-md
            before:absolute before:inset-0 before:rounded-2xl before:md:rounded-l-[100px] before:md:rounded-r-none
            before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent
            before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000
            overflow-hidden"
        >
          <MilkWave />
          <MilkSplatter />
          <div className="w-full max-w-3xl mx-auto relative z-10">
            <div className="text-center transform transition-transform duration-500 group-hover:scale-105">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ygreen font-lilita mb-3 sm:mb-4
                          transition-all duration-500 group-hover:text-dgreen group-hover:-translate-y-1">
                Parini Kapadia
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ygreen font-lilita mb-4 sm:mb-6
                          transition-all duration-500 group-hover:text-dgreen group-hover:translate-y-1">
                Co-Founder & Chief Executive Officer
              </p>
            </div>
          </div>
          <div className="w-full max-w-3xl mx-auto relative z-10">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-lilita
                       opacity-90 transition-opacity duration-500 group-hover:opacity-100 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              unde et vel at quis deserunt voluptatem commodi officiis quos
              nesciunt, quam tempora perferendis rem dolores alias harum
              recusandae aliquam natus?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;