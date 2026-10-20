import { Link } from "react-router-dom";
import type { ProductCardProps } from "./ProductCard.types";

const formatPrice = (price: number) => price.toLocaleString("vi-VN") + "₫";

const ProductCard = ({
  id,
  name,
  thumbnail,
  price,
  discount = 0,
  priceAfterDiscount,
  className = "",
}: ProductCardProps) => {
  const hasDiscount = discount > 0 && priceAfterDiscount !== undefined;

  return (
    <Link
      to={`/product/${id}`}
      className={`group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all duration-300 ${className}`}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">
            No image
          </div>
        )}
        {hasDiscount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">
            -{discount}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm text-gray-800 font-bold line-clamp-2 h-10 leading-5 group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
        <div className="mt-1.5 flex items-baseline gap-1.5 flex-wrap">
          <span className="text-red-600 font-bold text-base">
            {formatPrice(hasDiscount ? priceAfterDiscount! : price)}
          </span>
          {hasDiscount && (
            <span className="text-gray-400 text-xs line-through">
              {formatPrice(price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
