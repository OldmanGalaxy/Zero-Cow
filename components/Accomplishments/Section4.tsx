import React from "react";

function Section4() {
  return (
    <>
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="w-full h-auto py-12 md:py-16 lg:py-20 bg-lgreen flex flex-col items-center justify-center">
          {/* <h2 className='font-lilita text-3xl md:text-4xl mb-8 md:mb-10'>All Investors</h2> */}
          <div className="group overflow-hidden w-full">
            <div className="flex animate-loop-scroll group-hover:paused hover:cursor-pointer">
              {/* First row */}
              <div className="flex shrink-0 gap-4 md:gap-8 lg:gap-16">
                <img
                  src="/images/investor-1.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="Investor 1"
                />
                <img
                  src="/images/New-Project.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="New Project"
                />
                <img
                  src="/images/investor-3.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="Investor 3"
                />
                <img
                  src="/images/investor-4.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="Investor 4"
                />
                <img
                  src="/images/investor-5.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="Investor 5"
                />
                <img
                  src="/images/investor-6.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="Investor 6"
                />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex shrink-0 gap-4 md:gap-8 lg:gap-16">
                <img
                  src="/images/investor-1.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="Investor 1"
                />
                <img
                  src="/images/New-Project.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="New Project"
                />
                <img
                  src="/images/investor-3.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="Investor 3"
                />
                <img
                  src="/images/investor-4.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="Investor 4"
                />
                <img
                  src="/images/investor-5.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="Investor 5"
                />
                <img
                  src="/images/investor-6.png"
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain"
                  alt="Investor 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
