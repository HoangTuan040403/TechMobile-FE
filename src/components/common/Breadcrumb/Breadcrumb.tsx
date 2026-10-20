import { Link } from "react-router-dom";
import { HiOutlineHome, HiChevronRight } from "react-icons/hi";
import type { BreadcrumbProps } from "./Breadcrumb.types";

const Breadcrumb = ({
  items,
  showHomeIcon = true,
  className = "",
}: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-gray-500 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            {showHomeIcon && <HiOutlineHome size={16} className="mr-1" />}
            Trang chủ
          </Link>
          {items.length > 0 && (
            <HiChevronRight size={14} className="mx-1 text-gray-400" />
          )}
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {isLast || !item.href ? (
                <span className="text-gray-700 font-medium">{item.label}</span>
              ) : (
                <>
                  <Link
                    to={item.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                  <HiChevronRight size={14} className="mx-1 text-gray-400" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
