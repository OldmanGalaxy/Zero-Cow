import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Section1 from "@/components/OurTeam/Section1";
import Section2 from "@/components/OurTeam/Section2";

function page() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div 
        className="min-h-[calc(100vh-4rem)] relative"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #118B50, #E3F0AF, #5DB996)',
          backgroundSize: '100% calc(100% + 4rem)',
          backgroundPosition: '0 -4rem',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

export default page;