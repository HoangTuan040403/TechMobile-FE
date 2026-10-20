import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import ProductCard from "@/components/common/ProductCard";
import { getProductsByCategory } from "@/services/product.service";
import type { ProductCardProps } from "@/components/common/ProductCard";
import type { ProductTabsSectionProps } from "./ProductTabsSection.types";

const ITEMS_PER_PAGE = 10; // 4 cột x 2 hàng

const ProductTabsSection = ({ tabs, allCategories, className = "" }: ProductTabsSectionProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key);
  const [activeCategoryId, setActiveCategoryId] = useState(tabs[0]?.categoryId);
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(0);

  const currentTab = tabs.find((tab) => tab.key === activeTab);

  const childCategories = currentTab
    ? allCategories.filter((cat) => cat.parent_id === currentTab.categoryId)
    : [];

  const handleSelectTab = (key: string, categoryId: string) => {
    setActiveTab(key);
    setActiveCategoryId(categoryId);
    setPage(0);
  };

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setPage(0);
  };

  useEffect(() => {
    if (!activeCategoryId) return;

    let ignore = false;
    setIsFetching(true);

    getProductsByCategory(activeCategoryId, 20)
      .then((data) => {
        if (!ignore) setProducts(data);
      })
      .finally(() => {
        if (!ignore) setIsFetching(false);
      });

    return () => {
      ignore = true;
    };
  }, [activeCategoryId]);

  const totalPages = Math.max(1, Math.ceil(products.length / ITEMS_PER_PAGE));
  const pagedProducts = products.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  const goToPage = (direction: "prev" | "next") => {
    setPage((prev) => {
      if (direction === "prev") return Math.max(0, prev - 1);
      return Math.min(totalPages - 1, prev + 1);
    });
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm p-4 ${className}`}>
      <div className="flex items-stretch mb-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleSelectTab(tab.key, tab.categoryId)}
            className={`flex-1 pt-2 pb-2.5 text-sm font-bold uppercase tracking-wide text-center border-b-2 transition-colors ${activeTab === tab.key
                ? "border-blue-400 text-blue-400 bg-linear-to-t from-blue-100 to-white"
                : "border-gray-100 text-gray-400 hover:text-gray-600"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {childCategories.length > 0 && (
        <div className="flex items-center gap-2 mb-4 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => currentTab && handleSelectCategory(currentTab.categoryId)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${activeCategoryId === currentTab?.categoryId
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            Tất cả
          </button>
          {childCategories.map((child) => (
            <button
              key={child._id}
              onClick={() => handleSelectCategory(child._id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${activeCategoryId === child._id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {child.name}
            </button>
          ))}
        </div>
      )}

      {/* Product grid */}
      <div className="relative">
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 transition-opacity duration-200 ${isFetching ? "opacity-50" : "opacity-100"
            }`}
        >
          {pagedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {totalPages > 1 && (
          <>
            <button
              type="button"
              onClick={() => goToPage("prev")}
              disabled={page === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-100 disabled:opacity-0 hover:bg-gray-50"
            >
              <HiChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              type="button"
              onClick={() => goToPage("next")}
              disabled={page === totalPages - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-100 disabled:opacity-0 hover:bg-gray-50"
            >
              <HiChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductTabsSection;
