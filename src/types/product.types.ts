import type { ApiResponse } from "./api.types";

export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export interface Product {
  _id: string;
  name: string;
  description?: string; 
  category_id: string | Category;
  specs: Record<string, unknown>;
  createdAt: string;
}

export interface ProductAttribute {
  key: string;
  value: string;
}

export interface ProductVariant {
  _id: string;
  attributes: ProductAttribute[];
  price: number;
  discount: number;
  price_after_discount: number;
  stock: number;
  sku: string;
  createdAt: string;
}

export interface ProductImage {
  _id: string;
  variant_id: string;
  url: string;
  public_id: string;
  is_thumbnail: boolean;
  order: number;
  updatedAt: string;
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ProductListData {
  products: Product[];
  pagination: Pagination;
}

export type ProductApiResponse = ApiResponse<Product>;
export type ProductVariantApiResponse = ApiResponse<ProductVariant>;
export type ProductImageApiResponse = ApiResponse<ProductImage[]>;
export type ProductListApiResponse = ApiResponse<ProductListData>;
