import React from "react";

function Circle() {
  return (
    <>
      <div className="relative flex flex-col-reverse md:flex-row min-h-screen items-center p-4 md:p-0">
        {/* Rounded Rectangle */}
        <div
          className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px]
          mr-4 md:mr-8 lg:mr-20
          rounded-2xl md:rounded-r-[100px] md:rounded-l-none 
          bg-lgreen
          mt-8 md:mt-0"
        >
          <div className="container mt-28 px-6 md:px-12">
            <div className="text-center">
              <h2 className="text-5xl font-lilita text-gray-800">
                Our Trusted Investors
              </h2>
              <p className="my-4 text-xl font-medium text-gray-900">
                Backed by global investors committed to sustainable innovation
                and ethical growth.
              </p>
            </div>
            <div className="text-center font-sans text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In unde
              et vel at quis deserunt voluptatem commodi officiis quos nesciunt,
              quam tempora perferendis rem dolores alias harum recusandae
              aliquam natus?
            </div>
          </div>
        </div>

        {/* Circle */}
        <div
          className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] 
          mx-4 md:mr-8 lg:mr-20 
          rounded-full bg-lgreen flex-shrink-0"
        ></div>
      </div>
    </>
  );
}

export default Circle;
