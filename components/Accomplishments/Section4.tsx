import React from "react";

function Section4() {
  return (
    <>
      <div className="relative flex items-center justify-center py-8 mb-32">
        <div className="w-full bg-lgreen">
          <div className="group overflow-visible w-full">
            <div className="flex animate-loop-scroll group-hover:paused hover:cursor-pointer">
              {/* First row */}
              <div className="flex shrink-0 gap-4 md:gap-8 lg:gap-16">
                <div className="overflow-visible p-4">
                  <img
                    src="/images/investor-1.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="Investor 1"
                  />
                </div>
                <div className="overflow-visible p-4">
                  <img
                    src="/images/New-Project.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="New Project"
                  />
                </div>
                <div className="overflow-visible p-4">
                  <img
                    src="/images/investor-3.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="Investor 3"
                  />
                </div>
                <div className="overflow-visible p-4">
                  <img
                    src="/images/investor-4.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="Investor 4"
                  />
                </div>
                <div className="overflow-visible p-4">
                  <img
                    src="/images/investor-5.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="Investor 5"
                  />
                </div>
                <div className="overflow-visible p-4">
                  <img
                    src="/images/investor-6.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="Investor 6"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex shrink-0 gap-4 md:gap-8 lg:gap-16">
                <div className="overflow-visible p-4">
                  <img
                    src="/images/investor-1.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="Investor 1"
                  />
                </div>
                <div className="overflow-visible p-4">
                  <img
                    src="/images/New-Project.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="New Project"
                  />
                </div>
                <div className="overflow-visible p-4">
                  <img
                    src="/images/investor-3.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="Investor 3"
                  />
                </div>
                <div className="overflow-visible p-4">
                  <img
                    src="/images/investor-4.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="Investor 4"
                  />
                </div>
                <div className="overflow-visible p-4">
                  <img
                    src="/images/investor-5.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="Investor 5"
                  />
                </div>
                <div className="overflow-visible p-4">
                  <img
                    src="/images/investor-6.png"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    alt="Investor 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
