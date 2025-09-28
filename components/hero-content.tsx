import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

const HeroContent = () => {
  return (
    <div>
      <Carousel controls indicators pause={false} interval={3000} fade>
        {/* First Slide */}
        <Carousel.Item>
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[750px] 2xl:h-[800px]">
            <Image
              src="/images/main-content-image.webp"
              alt="PUMA Hail 1"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            <div className="absolute top-1/2 left-5 sm:left-10 md:left-[10%] -translate-y-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-left">
              <span
                className="inline-block text-black text-xs sm:text-sm font-bold uppercase px-3 sm:px-4 py-1.5 shadow-xl"
                style={{
                  background:
                    "linear-gradient(-60deg, #b0e0e6, #fffacd, #f08080, #dda0dd, #add8e6)",
                }}
              >
                EXCLUSIVE
              </span>

              <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xs sm:max-w-sm md:max-w-md leading-relaxed">
                Elevate your performance and style with our latest sneaker
                innovation.
              </p>
            </div>
          </div>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[750px] 2xl:h-[800px]">
            <Image
              src="/images/main-content-image-2.webp"
              alt="PUMA Hail 2"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            <div className="absolute top-1/2 left-5 sm:left-10 md:left-[10%] -translate-y-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-left">
              <span
                className="inline-block text-black text-xs sm:text-sm font-bold uppercase px-3 sm:px-4 py-1.5 shadow-xl"
                style={{
                  background:
                    "linear-gradient(-60deg, #b0e0e6, #fffacd, #f08080, #dda0dd, #add8e6)",
                }}
              >
                EXCLUSIVE
              </span>

              <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xs sm:max-w-sm md:max-w-md leading-relaxed">
                Sleek design meets ultimate comfort for your everyday moves.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroContent;
