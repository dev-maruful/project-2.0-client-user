"use client";
import CategoryCard from "@/components/CategoryCard";
import { SliderButtonGroup } from "@/components/customSliderBtn";
import { responsive } from "@/components/data";
import Carousel from "react-multi-carousel";

const CategoriesSection = () => {
  const categoriesData = [
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
      <h1 className="mb-3 text-2xl font-semibold">Explore Categories</h1>
      <div className="relative w-full">
        <Carousel
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<SliderButtonGroup pos="top-[-25%]" />}
          className="pb-2"
          itemClass="pr-2"
        >
          {categoriesData.map((p, key) => (
            <CategoryCard key={key} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CategoriesSection;
