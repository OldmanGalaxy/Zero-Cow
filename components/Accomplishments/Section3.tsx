import React from "react";
import { motion } from "framer-motion";
import MilkSplatter from "./MilkSplatter";
import MilkWave from "./MilkWave";

function Circle() {
  return (
    <>
      <div className="relative flex flex-col-reverse md:flex-row overflow-hidden min-h-screen items-center p-4 md:p-0">
        {/* Rounded Rectangle */}
        <div
          className="group relative w-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] 
          rounded-2xl md:rounded-r-[100px] md:rounded-l-none mr-8 max-md:mx-8
          bg-lgreen/80 backdrop-blur-sm
          mt-8 md:mt-0 p-6 sm:p-8 md:p-10
          transition-all duration-500 ease-out
          hover:backdrop-blur-md
          before:absolute before:inset-0 before:rounded-2xl before:md:rounded-r-[100px] before:md:rounded-l-none
          before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent
          before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000
          overflow-hidden
          flex flex-col justify-between"
        >
          <MilkWave />
          <MilkSplatter />
          <div className="w-full max-w-3xl mx-auto relative z-10">
            <div className="text-center transform transition-transform duration-500 group-hover:scale-105">
              <h2
                className="text-ygreen text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-lilita mb-3 sm:mb-4
                        transition-all duration-500 group-hover:text-dgreen group-hover:-translate-y-1"
              >
                Our Trusted Investors
              </h2>
              <p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ygreen font-lilita mb-4 sm:mb-6
                        transition-all duration-500 group-hover:text-dgreen group-hover:translate-y-1"
              >
                Backed by global investors committed to sustainable innovation
                and ethical growth.
              </p>
            </div>
          </div>
          <div className="w-full max-w-3xl mx-auto relative z-10">
            <p
              className="text-lg sm:text-xl text-white md:text-2xl lg:text-3xl text-center font-lilita
                     opacity-90 transition-opacity duration-500 group-hover:opacity-100 mb-4"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In unde
              et vel at quis deserunt voluptatem commodi officiis quos nesciunt,
              quam tempora perferendis rem dolores alias harum recusandae
              aliquam natus?
            </p>
          </div>
        </div>

        {/* Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] 
          mx-4 md:mr-8 lg:mr-20 
          rounded-full bg-lgreen flex-shrink-0"
        >
          <motion.img
            src="/images/rb_7438.png"
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full object-cover w-full h-full 
            transition-all duration-300 ease-in-out transform 
            hover:scale-90 hover:shadow-2xl hover:-rotate-3"
          />
        </motion.div>
      </div>
    </>
  );
}

export default Circle;
