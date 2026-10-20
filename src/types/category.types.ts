import type { ApiResponse } from "./api.types";

export interface CategoryImage {
  url: string;
  public_id: string;
}

export interface CategoryResponse {
  _id: string;
  name: string;
  slug: string;
  parent_id: string | null;
  ancestors: string[];
  image: CategoryImage;
}

export type CategoryApiResponse = ApiResponse<CategoryResponse[]>;
