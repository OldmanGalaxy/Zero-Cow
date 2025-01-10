import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Section1 from "@/components/OurTeam/Section1";
import Section2 from "@/components/OurTeam/Section2";

function page() {
  return (
    <>
      <div className="relative z-10">
        <div
          className="absolute bg-ygreen inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/milk1.png')",
            zIndex: -1,
          }}
        ></div>
        <Navbar />
        <Section1 />
        <Section2 />
      </div>
    </>
  );
}
export default page;
