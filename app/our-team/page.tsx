import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Section1 from "@/components/OurTeam/Section1";
import Section2 from "@/components/OurTeam/Section2";
import Footer from "@/components/Footer/Footer";
import MilkFlow from "@/components/FAQ/MilkFlow";

const OurTeamPage: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-dgreen">
      <Navbar />
      <div
        className="min-h-screen pb-32 relative"
        style={{
          background: "transparent",
          backgroundImage:
            "linear-gradient(to bottom, #118B50, #E3F0AF, #5DB996)",
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

      <div className="relative">
        <div
          className="absolute w-full overflow-hidden"
          style={{ transform: "translateY(-99%)" }}>
          <MilkFlow />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OurTeamPage;
