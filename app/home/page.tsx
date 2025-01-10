'use client';
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Info2 from "@/components/Info2/Info2";

const Home = () => {
  const infoSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (infoSectionRef.current) {
      observer.observe(infoSectionRef.current);
    }

    return () => {
      if (infoSectionRef.current) {
        observer.unobserve(infoSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="min-h-screen overflow-x-hidden select-none">
        <Navbar />
        <div className="relative h-[calc(100vh+100px)] mt-20">
          <div className="bg-gradient-to-b from-dgreen to-ygreen h-full w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-cream font-lilita pt-24 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl break-words leading-tight transition-all duration-300 hover:scale-105 hover:text-white">
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

        {/* Information Section - 1 */}
        <div className="w-screen flex justify-start flex-col h-[calc(100vh+100px)] bg-gradient-to-b from-ygreen to-lgreen">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-lgreen font-lilita text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Future of India <br /> Starting with India's <br /> First animal-free dairy
              </h2>
          </div>

          <div className="flex justify-around items-center p-4 gap-10">
            <div className="rounded-full h-80 w-80 bg-dgreen"></div>
            <div className="rounded-full h-80 w-80 bg-dgreen"></div>
            <div className="rounded-full h-80 w-80 bg-dgreen"></div>
            <div className="rounded-full h-80 w-80 bg-dgreen"></div>
          </div>
        </div>

        {/* Information Section - 2 */}
        <Info2 />
      </div>
    </>
  );
};

export default Home;