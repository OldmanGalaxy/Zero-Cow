"use client";
import Wave from "../Wave/Wave";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const backgroundRef = useRef(null);
  const isBackgroundInView = useInView(backgroundRef, {
    once: true,
    amount: 0.3,
  });

  // Smooth hover animation variants
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
      {/* Background gradient layer */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-b from-[#118B50] via-[#E3F0AF] to-[#5DB996]" />

      {/* Background Images Container - now uses absolute positioning with full height */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-[-1] h-full w-full">
        {/* First background image */}
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

        {/* Second background image */}
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

      {/* Impact Items Container */}
      <div className="relative z-[1] rounded-xl flex flex-col items-center justify-center min-h-screen gap-12 py-[80px] px-4 md:px-8">
        {cards.map((card, index) => {
          const cardRef = useRef(null);
          const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

          return (
            <motion.div
              ref={cardRef}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isCardInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex items-center justify-center w-full">
              <div
                className={`relative w-full md:w-[800px] h-auto md:h-[350px] overflow-hidden bg-[#5DB996]/90 backdrop-blur-sm rounded-[40px] shadow-lg flex flex-col md:flex-row
                ${
                  card.alt === "Leaf" || card.alt === "Tree"
                    ? "ml-auto right-[10px] md:-right-[10px] md:flex-row-reverse"
                    : "mr-auto left-[10px] md:-left-[10px]"
                }`}>
                {/* Image */}
                <div className="relative w-full md:w-[400px] h-[250px] md:h-full flex items-center justify-center">
                  <motion.img
                    src={card.image}
                    alt={card.alt}
                    className="absolute w-[200px] md:w-[280px] h-[200px] md:h-[280px] object-contain"
                    style={{
                      transform: `rotate(${card.angle}deg)`,
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center p-6 md:p-8">
                  <Wave />
                  <motion.h2
                    className="text-cream text-2xl md:text-5xl mb-4 md:mb-6 cursor-default relative group"
                    initial="initial"
                    animate={isCardInView ? { opacity: 1 } : { opacity: 0 }}
                    whileHover="hover"
                    variants={titleHoverVariants}>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FBF6E9] group-hover:w-full transition-all duration-300 ease-out" />
                    {card.title}
                  </motion.h2>
                  <ul className="space-y-2 md:space-y-3">
                    {card.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        className="text-cream text-base md:text-2xl flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isCardInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: 0.5 + idx * 0.1 }}>
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
