"use client";
import { usePathname } from "next/navigation";
import { FaTruck } from "react-icons/fa";
function StaticInfo() {
  const pathname = usePathname();

  if (pathname !== "/") return "";

  return (
    <div className="py-10 bg-white">
      <div className="flex flex-col gap-4 px-3 mx-auto max-w-7xl md:gap-0 md:flex-row">
        <div className="flex items-center justify-center flex-1 gap-4">
          <div className="p-4 flex justify-center items-center rounded-full bg-[#EEF2FF]">
            <FaTruck className="w-4 h-4 text-[#5D5FEF]" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Free Delivery</h1>
            <p className="text-sm font-normal">
              Free shipping for all orders over $100 Contrary to popular belie
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1 gap-4">
          <div className="p-4 flex justify-center items-center rounded-full bg-[#EEF2FF]">
            <FaTruck className="w-4 h-4 text-[#5D5FEF]" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">24/7 Customer Support</h1>
            <p className="text-sm font-normal">
              Friendly 24/7 customer support for all products
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1 gap-4">
          <div className="p-4 flex justify-center items-center rounded-full bg-[#EEF2FF]">
            <FaTruck className="w-4 h-4 text-[#5D5FEF]" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Secure Online Payment</h1>
            <p className="text-sm font-normal">
              We posess SSL / Secure Certificate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaticInfo;
