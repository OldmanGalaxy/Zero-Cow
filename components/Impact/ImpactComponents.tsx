"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    image: "/images/burger.png",
    alt: "Burger",
    angle: -23.55,
    title: "Healthier Food",
    points: [
      "0% Lactose",
      "0% Cholesterol",
      "0% Saturated Fat",
      "0% Antibiotics",
      "0% Growth Hormones",
    ],
  },
  {
    image: "/images/leaf.png",
    alt: "Leaf",
    angle: -27.25,
    title: "Sustainability",
    points: ["Better for planet", "Better for human", "Better for animals"],
  },
  {
    image: "/images/flask.png",
    alt: "Flask",
    angle: 40.93,
    title: "Food Science",
    points: ["No animals", "No plants", "Only microbes"],
  },
  {
    image: "/images/tree.png",
    alt: "Tree",
    angle: -30,
    title: "Climate Friendly",
    points: [
      "99% less land consumption",
      "98% less water consumption",
      "84% less CO2e emissions",
      "65% less energy consumption",
    ],
  },
];

const ImpactComponent = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const isBackgroundInView = useInView(backgroundRef, {
    once: true,
    amount: 0.3,
  });

  const titleHoverVariants = {
    initial: {
      color: "#FBF6E9",
      scale: 1,
      y: 0,
    },
    hover: {
      color: "#E3F0AF",
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden font-lilita">
      <div className="absolute inset-0 z-[-2] bg-gradient-to-b from-dgreen via-ygreen to-lgreen" />

      <div
        ref={backgroundRef}
        className="absolute inset-0 z-[-1] h-full w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={
            isBackgroundInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
          }
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-1/2">
          <img
            src="/images/milk3.png"
            alt="Background Milk 3"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isBackgroundInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-1/2 left-0 w-full h-1/2">
          <img
            src="/images/milk4.png"
            alt="Background Milk 4"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-[1] flex flex-col items-center justify-center gap-6 py-16 px-4 md:px-8 mb-16 sm:mb-24 md:mb-32">
        {cards.map((card, index) => {
          const cardRef = useRef<HTMLDivElement>(null);
          const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

          return (
            <motion.div
              ref={cardRef}
              key={index}
              initial={{ opacity: 0, x: 0, y: 20 }}
              animate={
                isCardInView
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      x: 0,
                      y: 20,
                    }
              }
              transition={{ duration: 0.8 }}
              className={`relative flex items-center justify-center w-full
                ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
              <div
                className={`relative w-full md:w-[800px] h-auto md:h-[280px] 
                overflow-hidden bg-lgreen/90 backdrop-blur-sm rounded-[32px] shadow-lg 
                flex flex-col md:flex-row
                transform transition-all duration-300 hover:scale-105
                ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}>
                <div
                  className={`relative w-full md:w-[300px] h-[200px] md:h-full 
                  flex items-center justify-center
                  ${index % 2 === 1 ? "md:order-last" : ""}`}>
                  <motion.img
                    src={card.image}
                    alt={card.alt}
                    className="absolute w-[160px] md:w-[200px] h-[160px] md:h-[200px] object-contain"
                    style={{ transform: `rotate(${card.angle}deg)` }}
                    whileHover={{
                      scale: 1.1,
                      rotate: `${card.angle + 10}deg`,
                      transition: { duration: 0.3 },
                    }}
                  />
                </div>

                <div className="flex-1 flex flex-col justify-center p-4 md:p-6">
                  <motion.h2
                    className="text-cream text-xl md:text-3xl lg:text-4xl mb-3 md:mb-4 
                      cursor-default relative group text-center md:text-left"
                    initial="initial"
                    whileHover="hover"
                    variants={titleHoverVariants}>
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-cream 
                      group-hover:w-full transition-all duration-300 ease-out"
                    />
                    {card.title}
                  </motion.h2>
                  <ul className="space-y-1 md:space-y-2">
                    {card.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        className="text-cream text-sm md:text-lg flex items-center
                          justify-center md:justify-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isCardInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: 0.3 + idx * 0.1 }}>
                        <span className="mr-2">•</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ImpactComponent;
