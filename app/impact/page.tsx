import React from "react";
import ImpactComponents from "@/components/Impact/ImpactComponents";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MilkFlow from "@/components/FAQ/MilkFlow";

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        <ImpactComponents />
      </main>

      {/* Footer section with responsive milk flow positioning */}
      <div className="relative">
        {/* Milk flow with responsive positioning */}
        <div
          className="absolute w-full"
          style={{
            top: "min(-6vw, -160px)",
            minHeight: "100px",
            zIndex: 10,
          }}>
          <MilkFlow />
        </div>

        {/* Footer with gradient background */}
        <div className="relative bg-gradient-to-b from-lgreen to-dgreen pt-16 sm:pt-20 md:pt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Page;
