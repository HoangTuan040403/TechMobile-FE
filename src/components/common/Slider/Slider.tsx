import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { SliderProps } from "./Slider.types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({
  slides,
  autoPlay = true,
  delay = 5000,
  className = "",
}: SliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoPlay ? [Autoplay({ delay })] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (slides.length === 0) return null;

  return (
    <div className={`relative w-full overflow-hidden rounded-xl group ${className}`}>
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => {
            const content = (
              <div className="relative flex-[0_0_100%]">
                <img
                  src={slide.image}
                  alt={slide.title || "banner"}
                  className="w-full h-50 md:h-87.5 object-cover"
                />
                {(slide.title || slide.description) && (
                  <div className="absolute inset-0 flex flex-col justify-center px-8 bg-black/30 text-white">
                    {slide.title && (
                      <h2 className="text-xl md:text-3xl font-bold">
                        {slide.title}
                      </h2>
                    )}
                    {slide.description && (
                      <p className="mt-2 text-sm md:text-base">
                        {slide.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );

            return (
              <div key={slide.id} className="flex-[0_0_100%]">
                {slide.link ? <Link to={slide.link}>{content}</Link> : content}
              </div>
            );
          })}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center bg-black/65 hover:bg-white text-white hover:text-black rounded-r-4xl h-16 w-8 shadow transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >

        <IoIosArrowBack size={25} />

      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center bg-black/65 hover:bg-white text-white hover:text-black rounded-l-4xl h-16 w-8 shadow transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <IoIosArrowForward size={25} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-6 bg-white" : "w-2.5 bg-white/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
