import React from "react";
import ImpactComponents from "@/components/Impact/ImpactComponents";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MilkFlow from "@/components/FAQ/MilkFlow";

const ImpactPage: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-dgreen">
      <Navbar />

      {/* Main content with gradient background */}
      <div
        className="min-h-screen pb-32 relative"
        style={{
          background: "transparent",
          backgroundImage: "linear-gradient(to bottom, #118B50, #E3F0AF, #5DB996)",
          backgroundSize: "100% 100%",
          backgroundPosition: "0 0",
          backgroundRepeat: "no-repeat",
          marginTop: "5rem",
        }}>
        <ImpactComponents />
      </div>

      {/* Footer section with milk animation */}
      <div className="relative">
        {/* Milk flow animation positioned right above the footer */}
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

export default ImpactPage;
