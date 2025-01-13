// MilkBubble.tsx
import { motion } from "framer-motion";

interface MilkBubbleProps {
  delay: number;
  duration: number;
  size: number;
  left: number;
  top: number;
}

export const MilkBubble = ({ delay, duration, size, left, top }: MilkBubbleProps) => {
  // Calculate responsive size based on viewport width
  const responsiveSize = `min(${size}px, ${size * 0.7}vw)`;
  
  return (
    <motion.div
      className="absolute rounded-full bg-cream/60 backdrop-blur-sm pointer-events-none"
      style={{
        width: responsiveSize,
        height: responsiveSize,
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
};