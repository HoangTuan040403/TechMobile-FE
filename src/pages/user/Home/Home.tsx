import Container from "@/components/common/Container/Container";
import Slider from "@/components/common/Slider";
import CategorySidebar from "@/components/common/CategorySidebar";
import { categoryIconMap } from "@/components/common/CategorySidebar/CategoryIconMap";
import { useCategories } from "@/hooks/useCategories";
import ProductSuggestions from "@/components/common/ProductSuggestions";
import ProductTabsSection from "@/components/common/ProductTabsSection";
import { HOME_TABS_CONFIG } from "@/constants/homeTabs.constans";
import banner1 from "@/assets/banners/banner1.png";
import banner2 from "@/assets/banners/banner2.png";
import banner3 from "@/assets/banners/banner3.png";
import banner4 from "@/assets/banners/banner4.png";

const bannerSlides = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
  { id: 4, image: banner4 },
];

const Home = () => {
  const { categories, allCategories, loading, error } = useCategories();

  const mappedCategories = categories.map((cat) => {
    const Icon = categoryIconMap[cat.slug];
    return {
      id: cat._id,
      name: cat.name,
      slug: cat.slug,
      icon: Icon ? <Icon className="w-5 h-5" /> : null,
    };
  });

  const productTabs = HOME_TABS_CONFIG.map((tab) => {
    const category = categories.find((cat) => cat.slug === tab.slug);
    return category ? { key: tab.key, label: tab.label, categoryId: category._id } : null;
  }).filter((tab): tab is NonNullable<typeof tab> => tab !== null);

  return (
    <Container>
      <div className="flex gap-4 mt-2">
        {loading ? (
          <div className="w-64 shrink-0 hidden lg:block rounded-xl shadow-sm h-96 animate-pulse" />
        ) : error ? (
          <div className="w-64 shrink-0 hidden lg:block text-sm text-red-500">{error}</div>
        ) : (
          <CategorySidebar
            categories={mappedCategories}
            className="w-64 shrink-0 hidden lg:block"
          />
        )}

        <div className="flex-1 min-w-0">
          <Slider slides={bannerSlides} />
        </div>
      </div>

      <ProductSuggestions />

      {!loading && productTabs.length > 0 && (
        <ProductTabsSection className="mt-6" tabs={productTabs} allCategories={allCategories} />
      )}
    </Container>
  );
};

export default Home;
