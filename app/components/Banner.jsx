"use client";
import { Button } from "keep-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Banner() {
  const pathname = usePathname();

  if (pathname !== "/") return "";

  return (
    <div className="bg-gradient-to-r from-[#e3e3ec] to-[#cbcbe2]">
      <Carousel
        className="px-3 mx-auto max-w-7xl"
        responsive={responsive}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
        ssr={true}
      >
        <div className="flex">
          <div className="flex flex-col items-start justify-center flex-1 gap-6">
            <div className="px-4 py-2 bg-[#CBCCFF] rounded-full">
              <p>Big offer 20% off</p>
            </div>
            <h1 className="text-xl font-bold md:text-5xl">
              Shop Now! Exclusive offer Awaiting
            </h1>
            <p>
              Get this ultimate shopping solution where you are going to get the
              ultimate offer
            </p>
            <Button className="bg-[#5D5FEF]" size="md" type="primary">
              Shop Now
            </Button>
          </div>
          <Image
            className="flex-1 object-contain md:h-[500px]"
            src="/images/banner/banner1.png"
            alt="slider-1"
            height={400}
            width={910}
          />
        </div>
        <div className="flex">
          <div className="flex flex-col items-center justify-center flex-1 gap-4 px-20">
            <h1 className="text-5xl font-bold">
              Shop Now! Exclusive offer Awaiting 2
            </h1>
            <p>
              Get this ultimate shopping solution where you are going to get the
              ultimate offer
            </p>
          </div>
          <Image
            className="flex-1 object-contain h-[500px]"
            src="/images/banner/banner1.png"
            alt="slider-1"
            height={400}
            width={910}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
