import React from "react";

const MilkFlow: React.FC = () => {
  // Using larger amplitude values for mobile and smaller for desktop
  const mobileValues = `
    M0,80 C150,20 300,140 450,80 C600,20 750,140 900,80 C1050,20 1200,140 1350,80 V300 H0 Z;
    M0,80 C150,140 300,20 450,80 C600,140 750,20 900,80 C1050,140 1200,20 1350,80 V300 H0 Z;
    M0,80 C150,20 300,140 450,80 C600,20 750,140 900,80 C1050,20 1200,140 1350,80 V300 H0 Z
  `;

  const desktopValues = `
    M0,50 C150,20 300,80 450,50 C600,20 750,80 900,50 C1050,20 1200,80 1350,50 V200 H0 Z;
    M0,50 C150,80 300,20 450,50 C600,80 750,20 900,50 C1050,80 1200,20 1350,50 V200 H0 Z;
    M0,50 C150,20 300,80 450,50 C600,20 750,80 900,50 C1050,20 1200,80 1350,50 V200 H0 Z
  `;

  return (
    <div className="w-full overflow-hidden">
      {/* Mobile SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 300"
        className="w-full block md:hidden"
        preserveAspectRatio="xMidYMid meet">
        <defs>
          <path
            id="wavePathMobile"
            d="M0,80 C150,20 300,140 450,80 C600,20 750,140 900,80 C1050,20 1200,140 1350,80 V300 H0 Z">
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values={mobileValues}
            />
          </path>
        </defs>
        <use
          href="#wavePathMobile"
          fill="#FBF6E9"
          className="transition-all duration-300">
          <animate
            attributeName="opacity"
            dur="3s"
            values="0.8;1;0.8"
            repeatCount="indefinite"
          />
        </use>
      </svg>

      {/* Desktop SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 200"
        className="w-full hidden md:block"
        preserveAspectRatio="xMidYMid meet">
        <defs>
          <path
            id="wavePathDesktop"
            d="M0,50 C150,20 300,80 450,50 C600,20 750,80 900,50 C1050,20 1200,80 1350,50 V200 H0 Z">
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values={desktopValues}
            />
          </path>
        </defs>
        <use
          href="#wavePathDesktop"
          fill="#FBF6E9"
          className="transition-all duration-300">
          <animate
            attributeName="opacity"
            dur="3s"
            values="0.8;1;0.8"
            repeatCount="indefinite"
          />
        </use>
      </svg>
    </div>
  );
};

export default MilkFlow;
