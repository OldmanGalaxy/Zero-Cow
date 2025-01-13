"use client";
import MilkFlow from "@/components/faq/MilkFlow";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const MilkBubble = ({
  delay,
  duration,
  size,
  left,
  top,
}: {
  delay: number;
  duration: number;
  size: number;
  left: number;
  top: number;
}) => (
  <motion.div
    className="absolute rounded-full bg-cream backdrop-blur-sm"
    style={{
      width: size,
      height: size,
      left: `${left}%`,
      top: `${top}%`,
    }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      scale: [1, 1.1, 1],
    }}
    transition={{
      repeat: Infinity,
      duration,
      delay,
      ease: "easeInOut",
    }}
  />
);

// Predefined bubble positions
const bubbleConfigs = [
  { size: 70, left: 10, top: 15, duration: 5, delay: 0 },
  { size: 40, left: 20, top: 45, duration: 6, delay: 0.5 },
  { size: 50, left: 35, top: 25, duration: 4, delay: 1 },
  { size: 100, left: 45, top: 65, duration: 5, delay: 0.2 },
  { size: 58, left: 60, top: 35, duration: 6, delay: 0.8 },
  { size: 66, left: 75, top: 55, duration: 4, delay: 1.5 },
  { size: 45, left: 85, top: 20, duration: 5, delay: 0.3 },
  { size: 84, left: 15, top: 75, duration: 6, delay: 1.2 },
  { size: 72, left: 30, top: 85, duration: 4, delay: 0.7 },
  { size: 105, left: 50, top: 80, duration: 5, delay: 1.8 },
  { size: 98, left: 70, top: 70, duration: 6, delay: 0.4 },
  { size: 36, left: 80, top: 40, duration: 4, delay: 1.6 },
  { size: 88, left: 90, top: 60, duration: 5, delay: 0.9 },
  { size: 56, left: 25, top: 60, duration: 6, delay: 1.3 },
  { size: 48, left: 65, top: 15, duration: 4, delay: 0.6 },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "How do I place an order?",
      answer:
        "Simply browse our products, add items to your cart, and proceed to checkout. We accept various payment methods for your convenience.",
    },
    {
      question: "What are your delivery areas?",
      answer:
        "We currently deliver to all major cities and surrounding areas. Enter your zip code at checkout to confirm delivery availability.",
    },
    {
      question: "How fresh is your milk?",
      answer:
        "Our milk is sourced daily from local farms and typically reaches you within 24-48 hours of production.",
    },
    {
      question: "Do you offer subscriptions?",
      answer:
        "Yes! You can subscribe to regular milk deliveries and save 10% on each order. Choose from weekly or monthly deliveries.",
    },
    {
      question: "What's your return policy?",
      answer:
        "If you're not satisfied with your product, please contact us within 24 hours of delivery and we'll arrange a replacement or refund.",
    },
    {
      question: "Are your products organic?",
      answer:
        "We offer both organic and conventional milk options. All our organic products are certified and clearly labeled.",
    },
    {
      question: "How do you ensure product quality?",
      answer:
        "We maintain strict cold chain logistics and perform regular quality tests at every stage from farm to delivery.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, digital wallets, and bank transfers for your convenience.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <Navbar />
      {/* Gradient Background with Milk Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-dgreen via-ygreen to-lgreen -z-10" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/images/milk6.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Fixed Position Milk Bubbles */}
      {bubbleConfigs.map((bubble, index) => (
        <MilkBubble
          key={index}
          size={bubble.size}
          left={bubble.left}
          top={bubble.top}
          duration={bubble.duration}
          delay={bubble.delay}
        />
      ))}

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-12 py-28">
        {/* FAQ Items */}
        <div className="space-y-8 pb-4 mx-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative bg-lgreen rounded-2xl overflow-hidden group transition-all duration-500">
              {/* Milk Splatter Effect Container */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Top Splatter */}
                <div className="absolute -top-8 left-1/2 w-48 h-48 -translate-x-1/2 bg-white/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                {/* Left Splatter */}
                <div className="absolute top-1/2 -left-8 w-32 h-32 -translate-y-1/2 bg-white/20 rounded-full blur-lg transform scale-0 group-hover:scale-100 transition-transform duration-700 delay-100" />
                {/* Right Splatter */}
                <div className="absolute top-1/2 -right-8 w-32 h-32 -translate-y-1/2 bg-white/20 rounded-full blur-lg transform scale-0 group-hover:scale-100 transition-transform duration-700 delay-200" />
                {/* Bottom Splatter */}
                <div className="absolute -bottom-8 left-1/2 w-48 h-48 -translate-x-1/2 bg-white/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-300" />
              </div>

              <button
                onClick={() => toggleQuestion(index)}
                className="relative w-full px-10 py-12 flex items-center justify-between text-center group-hover:bg-white/5 transition-colors duration-500">
                <span className="font-lilita text-4xl text-cream w-full">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
                  <ChevronDown className="w-8 h-8 text-cream" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: "auto",
                      transition: {
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                    exit={{
                      height: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                    className="overflow-hidden relative">
                    <div className="px-10 pb-8">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.5, delay: 0.3 },
                        }}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.3 },
                        }}
                        className="font-lilita text-xl text-cream leading-relaxed text-center">
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <MilkFlow />
      </div>
      <Footer />
    </div>
  );
}
