"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Section1 from "@/components/Accomplishments/Section1";
import Section2 from "@/components/Accomplishments/Section2";
import Section4 from "@/components/Accomplishments/Section4";
import Section3 from "@/components/Accomplishments/Section3";
import MilkFlow from "@/components/FAQ/MilkFlow";

function Accomplishments() {
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
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <div className="relative mt-20">
            <div
              className="fixed inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/milk2_full.png')",
                zIndex: -1,
              }}
            />
            <div className="relative bg-gradient-to-b from-dgreen via-ygreen to-lgreen">
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
            </div>
          </div>
        </main>
      </div>

      {/* Footer section with milk flow transition */}
      <div className="relative">
        {/* Milk flow positioned to overlap */}
        <div
          className="absolute bottom-full left-0 right-0 overflow-hidden z-10"
          style={{ transform: "translateY(1px)" }} // Ensures seamless connection
        >
          <MilkFlow />
        </div>

        {/* Footer with gradient background */}
        <div className="relative bg-gradient-to-b from-lgreen to-dgreen">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Accomplishments;
