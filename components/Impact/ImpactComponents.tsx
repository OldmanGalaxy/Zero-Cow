'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  {
    image: '/images/burger.png',
    alt: 'Burger',
    angle: -23.55,
    bgColor: '#5DB996',
    title: 'Healthier Food',
    points: [
      '0% Lactose',
      '0% Cholesterol',
      '0% Saturated Fat',
      '0% Antibiotics',
      '0% Growth Hormones'
    ]
  },
  {
    image: '/images/leaf.png',
    alt: 'Leaf',
    angle: -27.25,
    bgColor: '#5DB996',
    title: 'Sustainability',
    points: [
      'Better for planet',
      'Better for human',
      'Better for animals'
    ]
  },
  {
    image: '/images/flask.png',
    alt: 'Flask',
    angle: 40.93,
    bgColor: '#5DB996',
    title: 'Food Science',
    points: [
      'No animals',
      'No plants',
      'Only microbes'
    ]
  },
  {
    image: '/images/tree.png',
    alt: 'Tree',
    angle: -30,
    bgColor: '#5DB996',
    title: 'Climate Friendly',
    points: [
      '99% less land consumption',
      '98% less water consumption',
      '84% less CO2e emissions',
      '65% less energy consumption'
    ]
  }
]

const ImpactComponent = () => {
  const backgroundRef = useRef(null)
  const isBackgroundInView = useInView(backgroundRef, { once: true, amount: 0.3 })

  // Smooth hover animation variants
  const titleHoverVariants = {
    initial: {
      color: '#FFFFFF',
      scale: 1,
      y: 0
    },
    hover: {
      color: '#FBF6E9',
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient layer */}
      <div
        className="absolute inset-0 z-[-2]"
        style={{
          background: 'linear-gradient(180deg, #118B50 0%, #E3F0AF 100%)',
          backgroundSize: '100% 100%'
        }}
      >
        {/* Animated wave effect using Tailwind */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-white/20 to-transparent animate-wave" />
      </div>

      {/* Background Images Container */}
      <div ref={backgroundRef} className="absolute inset-0 z-[-1] -mt-[5px]">
        {/* First background image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isBackgroundInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-[50%]"
        >
          <img
            src="/images/milk4.png"
            alt="Background Milk 4"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Second background image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isBackgroundInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-[50%] left-0 w-full h-[50%]"
        >
          <img
            src="/images/milk3.png"
            alt="Background Milk 3"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Impact Items Container */}
      <div className="relative z-[1] flex flex-col items-center justify-center min-h-screen gap-12 py-[80px] px-4 md:px-8">
        {cards.map((card, index) => {
          const cardRef = useRef(null)
          const isCardInView = useInView(cardRef, { once: true, amount: 0.3 })

          return (
            <motion.div
              ref={cardRef}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex items-center justify-center w-full overflow-hidden"
            >
              <div
                className={`relative w-full md:w-[800px] h-auto md:h-[350px] rounded-[20px] shadow-lg flex flex-col md:flex-row
                ${card.alt === 'Leaf' || card.alt === 'Tree' ?
                    'ml-auto right-[10px] md:-right-[10px] md:flex-row-reverse' :
                    'mr-auto left-[10px] md:-left-[10px]'}`}
                style={{
                  backgroundColor: card.bgColor,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Image */}
                <div className="relative w-full md:w-[300px] h-[200px] md:h-auto flex items-center justify-center">
                  <motion.img
                    src={card.image}
                    alt={card.alt}
                    className="absolute w-[150px] md:w-[225px] h-[150px] md:h-[225px]"
                    style={{
                      transform: `rotate(${card.angle}deg)`,
                      [card.alt === 'Leaf' || card.alt === 'Tree' ? 'right' : 'left']: '-60px',
                      top: '65px',
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </div>

                {/* Content */}
                <div className={`flex-1 flex flex-col justify-center p-6 md:p-8 
                  ${card.alt === 'Leaf' || card.alt === 'Tree' ?
                    'md:pr-16 md:pl-8' :
                    'md:pl-16 md:pr-8'}`}>
                  <motion.h2
                    className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-6 cursor-pointer relative group"
                    initial="initial"
                    animate={isCardInView ? { opacity: 1 } : { opacity: 0 }}
                    whileHover="hover"
                    variants={titleHoverVariants}
                  >
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FBF6E9] group-hover:w-full transition-all duration-300 ease-out" />
                    {card.title}
                  </motion.h2>
                  <ul className="space-y-2 md:space-y-3">
                    {card.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        className="text-white text-base md:text-lg flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + (idx * 0.1) }}
                      >
                        <span className="mr-2">•</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default ImpactComponent