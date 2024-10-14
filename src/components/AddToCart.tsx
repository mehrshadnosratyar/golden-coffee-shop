"use client";
import { useCartStore } from "@/hooks/useCart";
import { Product } from "./ProductCard";
import { useEffect } from "react";
import { sumProducts } from "@/helper/helper";

export default function AddToCart({ product }: { product: Product }) {
  const { items, addItem, increase, decrease, deleteItem, total, itemsCount } =
    useCartStore();
  const productInCart = items.find((item) => item.id === product.id);
  return !!productInCart ? (
    <div className="p-1 transition-all duration-1000 rounded-full border-2 border-gray-300 flex items-center gap-3 [&>div_svg]:text-orange-400">
      <div
        className="p-1 hover:bg-gray-300 rounded-full transition-all"
        onClick={() => increase(product)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
      <p className="font-semibold text-xl text-orange-400">
        {productInCart.cart_quantity}
      </p>
      {productInCart?.cart_quantity === 1 ? (
        <div
          className="p-1 hover:bg-gray-300 rounded-full transition-all"
          onClick={() => deleteItem(product)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      ) : (
        <div
          className="p-1 hover:bg-gray-300 rounded-full transition-all duration-1000"
          onClick={() => decrease(product)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </div>
      )}
    </div>
  ) : (
    <div
      onClick={() => addItem(product)}
      className="p-2.5 mv-1 cursor-pointer rounded-full bg-gray-300 hover:bg-emerald-600 transition-all hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </div>
  );
}
