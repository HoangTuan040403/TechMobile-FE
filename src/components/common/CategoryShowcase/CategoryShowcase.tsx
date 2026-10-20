import { useState } from "react";
import { HiDevicePhoneMobile, HiDeviceTablet } from "react-icons/hi2";
import ProductCard from "../ProductCard";
import type { CategoryShowcaseProps, CategoryTab } from "./CategoryShowcase.types";

const CategoryShowcase = ({
  phoneProducts,
  tabletProducts,
  loading = false,
  error = null,
}: CategoryShowcaseProps) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>("phone");

  const activeProducts = activeTab === "phone" ? phoneProducts : tabletProducts;

  return (
    <div className="mt-10 rounded-3xl bg-linear-to-br from-rose-100 via-white to-blue-200 p-6 shadow-sm overflow-hidden">
      <div className="-mx-6 -mt-6 mb-6 flex bg-gray-100">
        <button
          type="button"
          onClick={() => setActiveTab("phone")}
          className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm sm:text-base font-bold tracking-wide transition-colors ${
            activeTab === "phone"
              ? "bg-linear-to-r from-blue-600 via-blue-500 to-cyan-400 text-white rounded-br-3xl shadow-md shadow-blue-300/40"
              : "text-gray-500 hover:bg-gray-200"
          }`}
        >
          <HiDevicePhoneMobile className="text-lg" />
          Điện thoại
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("tablet")}
          className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm sm:text-base font-bold tracking-wide transition-colors ${
            activeTab === "tablet"
              ? "bg-linear-to-r from-blue-600 via-blue-500 to-cyan-400 text-white rounded-bl-3xl shadow-md shadow-blue-300/40"
              : "text-gray-500 hover:bg-gray-200"
          }`}
        >
          <HiDeviceTablet className="text-lg" />
          Tablet
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="aspect-3/4 rounded-2xl bg-white/70 animate-pulse" />
          ))}
        </div>
      ) : error ? (
        <p className="text-sm text-red-500 text-center">{error}</p>
      ) : activeProducts.length === 0 ? (
        <p className="text-sm text-gray-500 text-center">Chưa có sản phẩm nào.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {activeProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryShowcase;
