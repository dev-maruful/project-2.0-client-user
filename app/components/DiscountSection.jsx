"use client";
import { Button } from "keep-react";
import Image from "next/image";
import React from "react";

const DiscountSection = () => {
  return (
    <section className="gap-3 md:flex">
      <div className="flex justify-between w-full px-4 pt-2 rounded-md bg-violet-200">
        <div className="mx-auto my-auto">
          <h1 className="mb-3 text-lg font-medium">
            All Smart Watches Discount 25% off
          </h1>
          <Button size="md" type="default">
            Discover Now
          </Button>
        </div>
        <div className="w-1/3">
          <Image
            src={`/watch.png`}
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-full h-full aspect-square"
          />
        </div>
      </div>
      <div className="flex justify-between w-full px-4 pt-2 rounded-md bg-[#FFF0E3]">
        <div className="mx-auto my-auto">
          <h1 className="mb-3 text-lg font-medium">
            All Smart Watches Discount 25% off
          </h1>
          <Button size="md" type="default">
            Discover Now
          </Button>
        </div>
        <div className="w-1/3">
          <Image
            src={`/watch.png`}
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-full h-full aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
