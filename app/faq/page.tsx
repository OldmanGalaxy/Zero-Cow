"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MilkFlow from "@/components/faq/MilkFlow";
import { MilkBubble } from "@/components/faq/MilkBubble";
import { FAQItem } from "@/components/faq/FAQItem";
import { BackgroundImage } from "@/components/faq/BackgroundImage";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqData = [
    {
      question: "What is animal-free dairy protein?",
      answer:
        "We produce real dairy proteins made without animals. Confused? it's rather simple! We instruct microorganism (say bacteria, yeast or fungus) to produce the same dairy protein in laboratory environment using precision fermentation. You can enjoy the real taste, texture, and nutrition of dairy made sustainably but free of lactose, antibiotics, hormones, and antibiotics.",
    },
    {
      question: "Why do we need animal-free dairy protein?",
      answer:
        "Everyone loves dairy products and they are essential nutrients in our life but loathes the downsides of animal agriculture. Traditional dairy farming is hugely unsustainable. It's a leading contributor to greenhouse gas emissions and a majorly inefficient use of resources. Plant-based alternatives also are not good enough. They are inferior in terms of flavour and nutrition and have limited usability as food ingredients. We are developing delicious and ethical dairy-based milk proteins produced without cows.",
    },
    {
      question: "What makes animal-free dairy protein different from other 'alternative' sources of protein?",
      answer:
        "Animal-free dairy proteins produced by Zero Cow Factory are identical to those found in cow's milk as it is coming out from the same DNA of the Cow responsible for the protein production. It has the same chemical properties compare to the traditional dairy; hence no consumer behaviour change is required.",
    },
    {
      question: "What is precision fermentation?",
      answer:
        "Precision fermentation uses microorganisms to produce specific functional ingredients (in our case dairy proteins like Casein & Whey).",
    },
    {
      question: "Is animal-free dairy protein containing GMOs?",
      answer:
        "No, our process involves genetic engineering but the final product is a pure protein without any GMOs.",
    },
    {
      question: "Is animal-free dairy protein vegan?",
      answer:
        "Yes, as there are no animals involved.",
    },
    {
      question: "Why is that casein protein important?",
      answer:
        "Casein comprises around 80% of the total protein in cow's milk, while whey accounts for the remaining 20%. Casein protein is a complete protein source and it provides all the essential amino acids your body needs for growth and muscle recovery. No casein means – no cheese, no curd!",
    },
    {
      question: "What is special about A2 milk and Zero Cow Factory's A2 milk protein/A2 beta-casein?",
      answer:
        "The A2 variety does not contain the A1 beta-casein protein, which may be difficult for some people to digest. A nutrient dense A2 milk is indigenous to ancient India which comes from Gir cows (Bos primigenius indicus). We are making milk the hero again with all the goodness of A2. Human breastmilk contains only the A2 type form of beta-casein and has always been given to the babies since ages.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow relative mt-12 sm:mt-16 md:mt-20">
        {/* This container will ensure bubbles don't affect layout */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dgreen via-ygreen to-lgreen -z-10" />
          
          <BackgroundImage 
            src="/images/milk6.png"
            alt="Background milk splash"
          />

          {bubbleConfigs.map((bubble, index) => (
            <MilkBubble
              key={index}
              {...bubble}
            />
          ))}
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12 py-8 sm:py-12 md:py-20 lg:py-28">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 pb-4 mx-1 sm:mx-2 md:mx-4">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleQuestion(index)}
                index={index}
                totalItems={faqData.length}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-lgreen to-dgreen">
        <MilkFlow />
        <Footer />
      </div>
    </div>
  );
}