import React from "react";

interface Partner {
  id: string;
  imageUrl: string;
  alt: string;
}

const partners: Partner[] = [
  { id: "33", imageUrl: "/images/Group-33.png", alt: "Partner 33" },
  { id: "34-1", imageUrl: "/images/Group-34-1.png", alt: "Partner 34-1" },
  { id: "35", imageUrl: "/images/Group-35.png", alt: "Partner 35" },
  { id: "38", imageUrl: "/images/Group-38.png", alt: "Partner 38" },
  { id: "39", imageUrl: "/images/Group-39.png", alt: "Partner 39" },
  { id: "39-1", imageUrl: "/images/Group-39-1.png", alt: "Partner 39-1" },
  { id: "39-2", imageUrl: "/images/Group-39-2.png", alt: "Partner 39-2" },
  { id: "40", imageUrl: "/images/Group-40.png", alt: "Partner 40" },
  { id: "63", imageUrl: "/images/Group-63.png", alt: "Partner 63" },
  { id: "64", imageUrl: "/images/Group-64.png", alt: "Partner 64" },
  { id: "34", imageUrl: "/images/Group-34.png", alt: "Partner 34" },
  { id: "84", imageUrl: "/images/Group-84.png", alt: "Partner 84" },
  { id: "85", imageUrl: "/images/Group-85.png", alt: "Partner 85" },
  { id: "87", imageUrl: "/images/Group-87.png", alt: "Partner 87" },
  { id: "88", imageUrl: "/images/Group-88.png", alt: "Partner 88" },
];

const PartnerLogo: React.FC<Partner> = ({ imageUrl, alt }) => (
  <div className="p-4">
    <img
      src={imageUrl}
      className="h-16 md:h-24 lg:h-32 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:rotate-3"
      alt={alt}
    />
  </div>
);

const Section2: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center py-8">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: scroll 40s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full bg-lgreen">
        <div className="group w-full overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            <div className="flex shrink-0 gap-4 md:gap-8 lg:gap-16">
              {partners.map((partner) => (
                <PartnerLogo key={partner.id} {...partner} />
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex shrink-0 gap-4 md:gap-8 lg:gap-16">
              {partners.map((partner) => (
                <PartnerLogo key={`dup-${partner.id}`} {...partner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
