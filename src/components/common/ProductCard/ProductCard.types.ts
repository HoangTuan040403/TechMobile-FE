export interface ProductAttribute {
  key: string;
  value: string;
}

export interface ProductCardProps {
  id: string;
  name: string;
  thumbnail?: string;
  price: number;
  discount?: number;
  priceAfterDiscount?: number;
  attributes?: ProductAttribute[];
  className?: string;
}
