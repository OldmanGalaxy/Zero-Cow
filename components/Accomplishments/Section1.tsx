import React from "react";
import { motion } from "framer-motion";
import MilkWave from "./MilkWave";
import MilkSplatter from "./MilkSplatter";

function Circle() {
  return (
    <>
      <section className="relative min-h-screen top-8">
        <div className="flex  flex-col md:flex-row min-h-screen overflow-hidden items-center p-4 md:p-0 ">
          {/* Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] 
    mx-4 md:ml-8 lg:ml-20 
    rounded-full bg-lgreen flex-shrink-0 
    mb-8 md:mb-0"
          >
            <motion.img
              src="/images/rd_12.png"
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-full object-cover w-full h-full 
      transition-all duration-300 ease-in-out transform 
      hover:scale-90 hover:shadow-2xl hover:-rotate-3"
            />
          </motion.div>

          {/* Rounded Rectangle */}
          <div
            className="group relative w-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]
            flex flex-col justify-between ml-8 max-md:mx-8
            rounded-2xl md:rounded-l-[100px] md:rounded-r-none 
            bg-lgreen/80 backdrop-blur-sm
            p-6 sm:p-8 md:p-10 lg:p-12
            transition-all duration-500 ease-out
            hover:backdrop-blur-md
            before:absolute before:inset-0 before:rounded-2xl before:md:rounded-l-[100px] before:md:rounded-r-none
            before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent
            before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000
            overflow-hidden"
          >
            <MilkSplatter />
            <MilkWave />
            <div className="w-full max-w-3xl mx-auto relative z-10">
              <div className="text-center transform transition-transform duration-500 group-hover:scale-105">
                <h2
                  className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-ygreen font-lilita mb-3 sm:mb-4
                          transition-all duration-500 group-hover:text-dgreen group-hover:-translate-y-1"
                >
                  Unreal Innovation In Life Science
                </h2>
                <p
                  className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-ygreen font-lilita mb-4 sm:mb-6
                          transition-all duration-500 group-hover:text-dgreen group-hover:translate-y-1"
                >
                  Recognized globally for redefining sustainability.
                </p>
              </div>
            </div>
            <div className="w-full max-w-3xl mx-auto relative z-10">
              <p
                className="text-lg sm:text-lg text-white md:text-2xl lg:text-3xl text-center font-lilita
                       opacity-90 transition-opacity duration-500 group-hover:opacity-100 mb-4"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                unde et vel at quis deserunt voluptatem commodi officiis quos
                nesciunt, quam tempora perferendis rem dolores alias harum
                recusandae aliquam natus?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Circle;
