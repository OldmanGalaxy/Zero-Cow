import React from "react";

interface Investor {
  id: number | string;
  imgUrl: string;
  alt: string;
}

const investors: Investor[] = [
  { id: 1, imgUrl: "/images/investor-1.png", alt: "Investor 1" },
  { id: "new", imgUrl: "/images/New-Project.png", alt: "New Project" },
  { id: 3, imgUrl: "/images/investor-3.png", alt: "Investor 3" },
  { id: 4, imgUrl: "/images/investor-4.png", alt: "Investor 4" },
  { id: 5, imgUrl: "/images/investor-5.png", alt: "Investor 5" },
  { id: 6, imgUrl: "/images/investor-6.png", alt: "Investor 6" },
];

const LogoItem = ({ imgUrl, alt }: { imgUrl: string; alt: string }) => (
  <div className="shrink-0 p-4 overflow-hidden">
    <div className="relative w-full h-full">
      <img
        src={imgUrl}
        alt={alt}
        className="h-12 md:h-16 lg:h-20 w-auto object-contain transform transition-transform duration-300 hover:scale-110 hover:-rotate-3"
      />
    </div>
  </div>
);

function Section4() {
  return (
    <div className="relative py-8 mb-32 w-full">
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 20s;
          }
        }

        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full bg-lgreen overflow-hidden">
        <div className="group relative w-full">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex shrink-0 gap-4 md:gap-8 lg:gap-16">
              {investors.map((investor) => (
                <LogoItem
                  key={investor.id}
                  imgUrl={investor.imgUrl}
                  alt={investor.alt}
                />
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex shrink-0 gap-4 md:gap-8 lg:gap-16">
              {investors.map((investor) => (
                <LogoItem
                  key={`dup-${investor.id}`}
                  imgUrl={investor.imgUrl}
                  alt={investor.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
