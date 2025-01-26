import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Section1 from "@/components/OurTeam/Section1";
import Section2 from "@/components/OurTeam/Section2";
import Footer from "@/components/Footer/Footer";

function page() {
  return (
    <div className="min-h-screen relative bg-dgreen">
      <Navbar />
      <div
        className="min-h-screen relative"
        style={{
          background: "transparent",
          backgroundImage:
            "linear-gradient(to bottom, #118B50, #E3F0AF, #118B50)",
          backgroundSize: "100% 100%",
          backgroundPosition: "0 0",
          backgroundRepeat: "no-repeat",
          marginTop: "5rem",
        }}>
        <div className="absolute inset-0">
          <img
            src="/images/milk1_full.png"
            className="h-full w-full object-contain"
            alt="Milk background"
          />
        </div>
        <Section1 />
        <Section2 />
      </div>
      <Footer />
    </div>
  );
}

export default page;