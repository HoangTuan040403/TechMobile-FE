import axiosClient from "@/services/axiosClient";
import type { CategoryApiResponse, CategoryResponse } from "@/types/category.types";

export const getCategories = async (): Promise<CategoryResponse[]> => {
  const res = await axiosClient.get<CategoryApiResponse>("/categories");
  return res.data.data;
};
