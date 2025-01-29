"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Section1 from "@/components/Accomplishments/Section1";
import Section2 from "@/components/Accomplishments/Section2";
import Section4 from "@/components/Accomplishments/Section4";
import Section3 from "@/components/Accomplishments/Section3";

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
      <Navbar />
      <main className="relative mt-20">
        <div className="relative z-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/milk2_full.png')",
              zIndex: 0,
            }}></div>
          <div className="bg-gradient-to-b from-dgreen via-ygreen to-lgreen">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Accomplishments;
