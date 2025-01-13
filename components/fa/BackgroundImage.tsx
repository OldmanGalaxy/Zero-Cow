interface BackgroundImageProps {
    src: string;
    alt: string;
  }
  
  export const BackgroundImage = ({ src, alt }: BackgroundImageProps) => (
    <div className="absolute inset-0 flex items-center justify-center h-full w-full overflow-hidden">
      <img 
        src={src}
        alt={alt}
        className="w-full h-full object-contain max-w-[1440px] mx-auto"
      />
    </div>
  );