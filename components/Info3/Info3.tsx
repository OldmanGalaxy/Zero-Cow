export default function Info3() {
    return (
      <div className="relative bg-gradient-to-b from-ygreen to-lgreen flex flex-col justify-center items-center gap-16">
        <div className="absolute inset-0 h-full w-full z-10">
          <img
            src="/images/milk2_full.png"
            className="w-full h-full object-contain"
            alt="Milk splash background"
          />
        </div>
  
        {/* Revolutionary Technology Section */}
        <div className="relative w-11/12 md:w-2/3 min-h-[24rem] text-dgreen bg-gradient-to-b flex flex-col md:flex-row justify-between from-dgreen text-center to-cream rounded-xl items-center p-6 md:p-10">
          <div className="font-lilita z-10 w-full md:w-1/3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-300 text-cream md:text-ygreen">
            Revolutionary Technology
          </div>
          <div className="font-lilita z-10 w-full md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 md:mt-0 text-dgreen md:text-ygreen">
            Our precision fermentation technology uses specially engineered bacteria to produce real milk proteins, creating dairy that's molecularly identical to traditional milk - without the cow.
          </div>
        </div>
  
        {/* Sustainable Future Section */}
        <div className="relative w-11/12 md:w-2/3 z-10 min-h-[24rem] text-dgreen flex flex-col justify-center bg-cream rounded-xl items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6 md:p-10 text-center">
          <div className="font-lilita z-10 w-full md:w-2/3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-300 hover:text-lgreen">
            Sustainable Future
          </div>
          <div className="font-lilita w-full md:w-2/3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 md:mt-4">
            By eliminating the need for industrial dairy farming, we reduce water usage by 97%, land use by 99%, and greenhouse gas emissions by 95% compared to traditional dairy production.
          </div>
        </div>
  
        {/* Better For Everyone Section */}
        <div className="relative w-11/12 md:w-2/3 min-h-[24rem] bg-gradient-to-b flex flex-col md:flex-row-reverse justify-between text-center from-cream to-dgreen rounded-xl items-center p-6 md:p-10">
          <div className="font-lilita z-10 w-full md:w-1/3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-300 text-dgreen md:text-ygreen">
            Better For Everyone
          </div>
          <div className="font-lilita w-full md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 md:mt-0 text-cream md:text-ygreen">
            Enjoy delicious, nutritious dairy products that are lactose-free, hormone-free, and antibiotic-free. Perfect for everyone, from vegans to dairy lovers seeking a more ethical choice.
          </div>
        </div>
      </div>
    );
}