import type { CategoryResponse } from "@/types/category.types";

export interface ProductTab {
  key: string;
  label: string;
  categoryId: string;
}

export interface ProductTabsSectionProps {
  tabs: ProductTab[];
  allCategories: CategoryResponse[];
  className?: string;
}
