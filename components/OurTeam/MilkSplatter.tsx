import React from 'react';

const MilkSplatter = () => {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 100 100">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
        </filter>
      </defs>
      
      <g filter="url(#goo)" className="milk-drops">
        {[...Array(8)].map((_, i) => (
          <circle key={i} className="origin-center animate-splatter fill-cream">
            <animate
              attributeName="r"
              values="0;8;3"
              dur="1.5s"
              repeatCount="indefinite"
              begin={`${i * 0.2}s`}
            />
            <animateMotion
              dur="1.5s"
              repeatCount="indefinite"
              begin={`${i * 0.2}s`}
              path={`M ${50 + Math.cos(i * Math.PI/4) * 20} ${50 + Math.sin(i * Math.PI/4) * 20} Q ${50 + Math.cos(i * Math.PI/4) * 40} ${50 + Math.sin(i * Math.PI/4) * 40} ${50 + Math.cos(i * Math.PI/4) * 60} ${50 + Math.sin(i * Math.PI/4) * 60}`}
            />
          </circle>
        ))}
      </g>
    </svg>
  );
};

export default MilkSplatter;