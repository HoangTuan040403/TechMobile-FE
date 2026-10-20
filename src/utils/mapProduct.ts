import type { Product, ProductVariant, ProductImage } from "@/types/product.types";
import type { ProductCardProps } from "@/components/common/ProductCard";

const mapToProductCard = (
  product: Product,
  variant: ProductVariant,
  images: ProductImage[]
): ProductCardProps => {
  const thumbnail =
    images.find((img) => img.is_thumbnail)?.url ?? images[0]?.url;

  return {
    id: product._id,
    name: product.name,
    thumbnail,
    price: variant.price,
    discount: variant.discount,
    priceAfterDiscount: variant.price_after_discount,
    attributes: variant.attributes,
  };
};

export default mapToProductCard;
