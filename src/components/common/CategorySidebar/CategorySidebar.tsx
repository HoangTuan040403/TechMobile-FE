import { Link } from "react-router-dom";
import type { CategorySidebarProps } from "./CategorySidebar.types";

const CategorySidebar = ({ categories, className = "" }: CategorySidebarProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm ${className}`}>
      <ul className="py-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={`/category/${category.slug}`}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-400 font-medium transition-colors"
            >
              <span className="text-blue-400 shrink-0">{category.icon}</span>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
