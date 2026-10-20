import axiosClient from "@/services/axiosClient";
import type {
  ProductVariant,
  ProductImage,
  ProductListApiResponse,
} from "@/types/product.types";
import type { ApiResponse } from "@/types/api.types";
import type { ProductCardProps } from "@/components/common/ProductCard";
import mapToProductCard from "@/utils/mapProduct";

export const getProducts = async (): Promise<ProductCardProps[]> => {
  const res = await axiosClient.get<ProductListApiResponse>("/products");
  const products = res.data.data.products; 

  const cards = await Promise.all(
    products.map(async (product) => {
      const [variantsRes, imagesRes] = await Promise.all([
        axiosClient.get<ApiResponse<ProductVariant[]>>(
          `/products/${product._id}/variants`
        ),
        axiosClient.get<ApiResponse<ProductImage[]>>(
          `/products/${product._id}/images`
        ),
      ]);

      const defaultVariant = variantsRes.data.data[0];
      if (!defaultVariant) return null;

      return mapToProductCard(product, defaultVariant, imagesRes.data.data);
    })
  );

  return cards.filter((c): c is ProductCardProps => c !== null);
};

export const getProductsByCategory = async (
  categoryId: string,
  limit = 16
): Promise<ProductCardProps[]> => {
  const res = await axiosClient.get<ProductListApiResponse>("/products", {
    params: { category_id: categoryId, limit },
  });
  const products = res.data.data.products;

  const cards = await Promise.all(
    products.map(async (product) => {
      const [variantsRes, imagesRes] = await Promise.all([
        axiosClient.get<ApiResponse<ProductVariant[]>>(
          `/products/${product._id}/variants`
        ),
        axiosClient.get<ApiResponse<ProductImage[]>>(
          `/products/${product._id}/images`
        ),
      ]);

      const defaultVariant = variantsRes.data.data[0];
      if (!defaultVariant) return null;

      return mapToProductCard(product, defaultVariant, imagesRes.data.data);
    })
  );

  return cards.filter((c): c is ProductCardProps => c !== null);
};
