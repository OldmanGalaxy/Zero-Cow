"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Info2 from "@/components/Info2/Info2";
import Info1 from "@/components/Info1/Info1";

const Home = () => {
  const infoSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
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
      <Navbar />
      <div className="relative h-[calc(100vh+100px)] mt-20">
        <div className="bg-gradient-to-b from-dgreen to-ygreen h-full w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-cream font-lilita pt-24 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl break-words leading-tight transition-all duration-300 hover:scale-105 hover:text-white">
              Zero Cow <br /> Factory
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 w-screen">
          <img
            src="/images/milk3.png"
            alt="Milk splash"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Information Sections */}
      <Info1 />
      <Info2 />
    </>
  );
};

export default Home;