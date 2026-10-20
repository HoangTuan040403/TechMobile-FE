export interface CategoryItem {
  id: string | number;
  name: string;
  slug: string;
  icon?: React.ReactNode;
}

export interface CategorySidebarProps {
  categories: CategoryItem[];
  className?: string;
}
