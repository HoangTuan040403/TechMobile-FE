import { useEffect, useState } from "react";
import { getProducts } from "@/services/product.service";
import type { ProductCardProps } from "@/components/common/ProductCard";

export const useProducts = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};
