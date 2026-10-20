import type { ProductCardProps } from "../ProductCard/ProductCard.types";

export type CategoryTab = "phone" | "tablet";

export interface CategoryShowcaseProps {
  phoneProducts: ProductCardProps[];
  tabletProducts: ProductCardProps[];
  loading?: boolean;
  error?: string | null;
}
