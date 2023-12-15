import CategoriesSection from "./components/CategoriesSection";
import DiscountSection from "./components/DiscountSection";
import ProductSection from "./components/ProductSection";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-10">
        <CategoriesSection />
        <ProductSection />
        <DiscountSection />
      </div>
    </main>
  );
}
