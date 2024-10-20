"use client";
import { formatNumbersWithCommas } from "@/helper/helper";
import { useCartStore } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCart from "./AddToCart";

export default function CardPopover({ className }: { className?: string }) {
  const { items, itemsCount, total } = useCartStore();
  return (
    <div
      className={`absolute w-[400px] [&>*]:block 
                        items-center text-center
                     bg-white top-full left-0 border-t-[3px] rounded-2xl transition-all
                      border-t-orange-300 text-zinc-700
                    ${className}`}
    >
      {items.length === 0 ? (
        <div className="py-12 px-20 space-y-6">
          <div className=" space-y-3 text-base font-semibold">
            <div className="space-y-4 *:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="text-zinc-700">
                هنوز محصولی به سبد خرید اضافه نشده
              </span>
            </div>
            <Link
              href="#"
              className="bg-[#0D9488] p-4 flex justify-center rounded-xl text-white "
            >
              مشاهده صفحه فروشگاه
            </Link>
          </div>
        </div>
      ) : (
        <div className="p-4 overflow-hidden">
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-300">{itemsCount} مورد</p>
            <Link href={"/cart"} className="flex items-center text-orange-300">
              <span>مشاهده سبد خرید</span>
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
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-4 divide-y-[1px] max-h-80 overflow-auto no-scrollbar">
            {items.map((product) => (
              <div className="flex py-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={120}
                  height={120}
                />
                <div className="text-right space-y-6">
                  <p className="font-medium text-base">{product.name}</p>
                  <div className="flex items-center gap-5">
                    <AddToCart product={product} />
                    <div className="space-y-1">
                      {product.discount_percent && (
                        <p className="text-sm text-emerald-600">
                          {formatNumbersWithCommas(
                            (
                              +product.sell_price - +product.off_price
                            ).toString()
                          )}{" "}
                          تومان تخفیف
                        </p>
                      )}

                      <p className="flex items-baseline gap-0.5 text-xl">
                        <span className="font-semibold">
                          {formatNumbersWithCommas(product.off_price)}
                        </span>
                        <span className="text-sm">تومان</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-300 pt-5 mt-2 flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-300 text-sm">
                مبلغ قابل پرداخت
              </p>
              <p className="flex items-baseline gap-0.5 text-xl">
                <span className="font-semibold">
                  {formatNumbersWithCommas(total.toString())}
                </span>
                <span className="text-sm">تومان</span>
              </p>
            </div>
            <Link
              href={"#"}
              className="py-3 px-7 bg-teal-600 hover:bg-teal-700 transition-all rounded-2xl text-white font-medium"
            >
              ثبت سفارش
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
