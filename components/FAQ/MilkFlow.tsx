import React from 'react';

const MilkFlow = () => (
  <div className="w-full overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200" className="w-full">
      <defs>
        <path id="wavePath" d="M0,50 
          C150,20 300,80 450,50
          C600,20 750,80 900,50
          C1050,20 1200,80 1350,50
          V200 H0 Z">
          <animate 
            attributeName="d" 
            dur="5s"
            repeatCount="indefinite"
            values="
              M0,50 C150,20 300,80 450,50 C600,20 750,80 900,50 C1050,20 1200,80 1350,50 V200 H0 Z;
              M0,50 C150,80 300,20 450,50 C600,80 750,20 900,50 C1050,80 1200,20 1350,50 V200 H0 Z;
              M0,50 C150,20 300,80 450,50 C600,20 750,80 900,50 C1050,20 1200,80 1350,50 V200 H0 Z"
          />
        </path>
      </defs>
      <use href="#wavePath" fill="#FFFDD0">
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

export default MilkFlow;