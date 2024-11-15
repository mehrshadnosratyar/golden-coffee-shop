"use client";
import { useCartStore } from "@/hooks/useCart";
import { useEffect } from "react";
import { sumProducts } from "@/helper/helper";
import { Product } from "@/types/GeneralTypes";
import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function AddToCart({ product }: { product: Product }) {
  const { items, addItem, increase, decrease, deleteItem, total, itemsCount } =
    useCartStore();
  const productInCart = items.find((item) => item.id === product.id);
  return !!productInCart ? (
    <div className="p-0.5 md:p-1 transition-all *:text-sm md:text-lg duration-500 rounded-full border-2 border-gray-300 flex items-center gap-1.5 min-w-max  md:gap-3 [&>div_svg]:text-orange-400">
      <div
        className="p-1 hover:bg-gray-300 rounded-full transition-all"
        onClick={() => increase(product)}
      >
        <PlusIcon className="size-4" />
      </div>
      <p className="font-semibold md:!text-lg text-orange-400">
        {productInCart.cart_quantity}
      </p>
      {productInCart?.cart_quantity === 1 ? (
        <div
          className="p-1 hover:bg-gray-300 rounded-full transition-all"
          onClick={() => deleteItem(product)}
        >
          <TrashIcon className="size-4" />
        </div>
      ) : (
        <div
          className="p-1 hover:bg-gray-300 rounded-full"
          onClick={() => decrease(product)}
        >
          <MinusIcon className="size-4" />
        </div>
      )}
    </div>
  ) : (
    <div
      onClick={() => addItem(product)}
      className="p-1.5 md:p-2.5 cursor-pointer rounded-full bg-gray-300 hover:bg-emerald-600 transition-all hover:text-white"
    >
      <ShoppingCartIcon className="size-4" />
    </div>
  );
}
