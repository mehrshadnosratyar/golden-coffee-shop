import { Product } from "@/components/ProductCard";

export const sumProducts = (products: Product[]) => {
  const itemsCount = products.reduce(
    (acc: number, item: Product) => acc + item.cart_quantity!,
    0
  );
  const total = products.reduce(
    (acc: number, item: Product) => acc + +item.off_price * item.cart_quantity!,
    0
  );
  return { itemsCount, total };
};
