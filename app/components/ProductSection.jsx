"use client";
import { ProductCard } from "@/components/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/components/data";
import { SliderButtonGroup } from "@/components/customSliderBtn";

const ProductSection = () => {
  const productsData = [
    {
      name: "sad",
    },
    {
      name: "sad",
    },
    {
      name: "sad",
    },
    {
      name: "sad",
    },
    {
      name: "sad",
    },
    {
      name: "sad",
    },
  ];

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Popular Products</h1>
      <div className="relative w-full">
        <Carousel
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<SliderButtonGroup pos="top-[-11%]" />}
          className="gap-2 pb-2"
          itemClass="pr-2"
        >
          {productsData.map((p, key) => (
            <ProductCard key={key} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductSection;
