import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  totalItems: number;
}

export const FAQItem = ({ question, answer, isOpen, onToggle, index }: FAQItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut",
    }}
    className="relative bg-lgreen rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden group transition-all duration-500"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute -top-8 left-1/2 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 -translate-x-1/2 bg-white/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500" />
      <div className="absolute top-1/2 -left-8 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 -translate-y-1/2 bg-white/20 rounded-full blur-lg transform scale-0 group-hover:scale-100 transition-transform duration-700 delay-100" />
      <div className="absolute top-1/2 -right-8 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 -translate-y-1/2 bg-white/20 rounded-full blur-lg transform scale-0 group-hover:scale-100 transition-transform duration-700 delay-200" />
      <div className="absolute -bottom-8 left-1/2 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 -translate-x-1/2 bg-white/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-300" />
    </div>

    <button
      onClick={onToggle}
      className="relative w-full px-3 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-8 lg:py-12 flex items-center justify-between text-center group-hover:bg-white/5 transition-colors duration-500"
    >
      <span className="font-lilita text-lg sm:text-xl md:text-2xl lg:text-4xl text-cream w-full">
        {question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-cream flex-shrink-0 ml-2" />
      </motion.div>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: "auto",
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
          }}
          exit={{
            height: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
          }}
          className="overflow-hidden relative"
        >
          <div className="px-3 sm:px-6 md:px-8 lg:px-10 pb-4 sm:pb-5 md:pb-6 lg:pb-8">
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
              className="font-lilita text-base sm:text-lg md:text-xl text-cream leading-relaxed text-center"
            >
              {answer}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);