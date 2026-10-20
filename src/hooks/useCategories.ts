import { useEffect, useState } from "react";
import { getCategories } from "@/services/category.service";
import type { CategoryResponse } from "@/types/category.types";

export const useCategories = () => {
  const [allCategories, setAllCategories] = useState<CategoryResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setAllCategories(data);
      } catch (err) {
        setError("Không thể tải danh mục");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const categories = allCategories.filter((cat) => cat.parent_id === null);

  const getChildCategories = (parentId: string) =>
    allCategories.filter((cat) => cat.parent_id === parentId);

  return { categories, allCategories, getChildCategories, loading, error };
};
