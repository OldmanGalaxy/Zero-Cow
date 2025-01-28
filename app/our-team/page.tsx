import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Section1 from "@/components/OurTeam/Section1";
import Section2 from "@/components/OurTeam/Section2";
import Footer from "@/components/Footer/footer";
import MilkFlow from "@/components/FAQ/MilkFlow";

function OurTeamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow relative mt-20">
        {/* Background gradient and image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, #118B50, #E3F0AF, #5DB996)",
          }}>
          <img
            src="/images/milk1_full.png"
            className="h-full w-full object-contain"
            alt="Milk background"
          />
        </div>

        {/* Content sections with added padding */}
        <div className="relative z-10 pb-32">
          {" "}
          {/* Added bottom padding */}
          <Section1 />
          {/* Added spacing between sections */}
          <div className="h-24" /> {/* Spacer div */}
          <Section2 />
          {/* Extra space at the bottom to prevent collision with milk wave */}
          <div className="h-32" /> {/* Bottom spacer */}
        </div>
      </main>

      {/* Footer section with milk wave */}
      <div className="relative">
        {/* Milk wave container with increased height */}
        <div className="absolute inset-x-0 top-0 h-48 transform -translate-y-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lgreen opacity-50" />
          <MilkFlow />
        </div>

        {/* Footer with gradient background */}
        <div className="relative bg-gradient-to-b from-lgreen to-dgreen">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default OurTeamPage;
