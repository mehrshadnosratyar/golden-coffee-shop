import Link from "next/link";
import React from "react";
import ProductCard from "../ProductCard";
import Image from "next/image";
import { Product } from "@/types/GeneralTypes";
export default async function ProductsSection() {
  const products: Product[] = await (
    await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    })
  ).json();
  return (
    <section className="pattern-bg text-zinc-700">
      <div className="container pt-10 md:pt-32">
        <h2 className="font-medium text-4xl md:text-5xl w-max font-Morabba mb-5">
          جدیدترین محصولات
        </h2>
        <div className="flex justify-between items-end text-lg">
          <div className="font-Morabba space-y-3">
            <p className="font-light md:text-2xl">فرآوری شده ازدانه قهوه</p>
          </div>
          <Link
            href={"/products"}
            className="flex items-center text-orange-300 text-lg"
          >
            <span>نمایش همه محصولات</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-y-5 mt-5 place-items-center">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
