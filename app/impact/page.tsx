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

      {/* Footer section with seamless milk flow transition */}
      <div className="relative">
        {/* Milk flow positioned to overlap perfectly */}
        <div className="absolute bottom-full w-full">
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

export default Page;
