import React from "react";

function Circle() {
  return (
    <>
      <section className="relative min-h-screen">
        {/* Background Image */}
        {/* <div 
        className="absolute bg-ygreen inset-0 bg-cover bg-center"  
        style={{
          backgroundImage: "url('/images/milk4.png')",
          zIndex: -1,
        }}
      ></div> */}

        <div className="flex flex-col md:flex-row min-h-screen items-center p-4 md:p-0 ">
          {/* Circle */}
          <div
            className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] 
          mx-4 md:ml-8 lg:ml-20 
          rounded-full bg-lgreen flex-shrink-0 
          mb-8 md:mb-0"
          ></div>

          {/* Rounded Rectangle */}
          <div
            className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px]
          ml-4 md:ml-8 lg:ml-20 flex items-center flex-col
          rounded-2xl md:rounded-l-[100px] md:rounded-r-none 
          bg-lgreen"
          >
            <div className="container mt-32 px-6 md:px-12">
              <div className="text-center">
                <h2 className="text-5xl font-lilita text-gray-800">
                  Unreal Innovation In Life Science
                </h2>
                <p className="my-4 text-xl font-medium text-gray-900">
                  Recognized globally for redefining sustainability and
                  innovation.
                </p>
              </div>
              <div className="text-center font-sans text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                unde et vel at quis deserunt voluptatem commodi officiis quos
                nesciunt, quam tempora perferendis rem dolores alias harum
                recusandae aliquam natus?
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Circle;
