import React from "react";

function Section1() {
  return (
    <>
      <div className="relative flex flex-col-reverse md:flex-row min-h-screen items-center p-4 md:p-0">
        {/* Rounded Rectangle */}
        <div
          className="w-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] 
   rounded-2xl md:rounded-r-[100px] md:rounded-l-none mr-8 max-md:mx-8
   bg-lgreen
   mt-8 md:mt-0
   p-6 sm:p-8 md:p-10
   flex items-center"
        >
          <div className="w-full max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl overflow-hidden sm:text-4xl md:text-5xl font-lilita text-gray-800 mb-3 sm:mb-4">
                Sohil Kapadia
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-4 sm:mb-6">
                Co-Founder & Chief Executive Officer
              </p>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-center font-sans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In unde
              et vel at quis deserunt voluptatem commodi officiis quos nesciunt,
              quam tempora perferendis rem dolores alias harum recusandae
              aliquam natus?
            </p>
          </div>
        </div>
        {/* Circle */}
        <div
          className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] 
          mx-4 md:mr-8 lg:mr-20 overflow-hidden relative 
          rounded-full bg-lgreen flex-shrink-0"
        >
          <img src="/images/sohil.png" className="absolute right-16" alt="" />
        </div>
      </div>
    </>
  );
}

export default Section1;
