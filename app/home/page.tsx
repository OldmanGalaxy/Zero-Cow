import React from 'react';
import Navbar from '@/components/Navbar/Navbar';

const MilkWave = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg 
      viewBox="0 0 1440 320" 
      className="absolute w-full h-full"
      preserveAspectRatio="none"
    >
      <path 
        fill="rgba(251, 246, 233, 0.5)"
        fillOpacity="1"
        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      >
        <animate
          attributeName="d"
          dur="5s"
          repeatCount="indefinite"
          values="
            M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,74.7C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
      </path>
    </svg>
  </div>
);

const Home = () => {
  return (
    <>
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

        {/* Information Section */}
        <div className="relative information-section grid grid-rows-2 grid-cols-2 gap-6 p-12 font-lilita text-cream bg-lgreen h-[calc(400px)] w-screen overflow-hidden">
          <MilkWave />
          <div className="information-item1 relative z-10">
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl line-clamp-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, rerum.
            </p>
          </div>
          <div className="information-item2 relative z-10"></div>
          <div className="information-item3 relative z-10"></div>
          <div className="information-item4 relative z-10">
            <p className="text-base text-lgreen sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl line-clamp-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, rerum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;