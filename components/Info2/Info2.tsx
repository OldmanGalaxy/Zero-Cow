import MilkWave from "../Wave/Wave";

export default function Info2() {
  return (
    <>
      <div className="relative bg-lgreen h-[400px] w-screen overflow-hidden">
        <MilkWave />
        <div className="absolute w-screen top-12 left-12 z-10 overflow-visible">
          <p className="animate-fadeInUp text-cream font-lilita text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block transition-transform duration-500 hover:translate-x-4 hover:text-ygreen">
              Everything we do
            </span>
            <span className="block transition-transform duration-500 hover:translate-x-4 hover:text-ygreen">
              is              
            </span>
            <span className="block transition-transform duration-500 hover:translate-x-4 hover:text-ygreen">
              Animal-free!
            </span>
          </p>
        </div>

        <div className="absolute bottom-12 w-screen right-12 z-10 overflow-visible">
          <p className="animate-fadeInDown font-lilita text-end text-lgreen text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block transition-transform duration-500 hover:-translate-x-4 hover:text-ygreen w-fit ml-auto">
              100% Real Dairy.
            </span>
            <span className="block transition-transform duration-500 hover:-translate-x-4 hover:text-ygreen w-fit ml-auto">
              0% Cow.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
