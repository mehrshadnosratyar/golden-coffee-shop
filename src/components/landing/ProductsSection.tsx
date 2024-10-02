import Link from "next/link";
import React from "react";
import ProductCard, { Product } from "../ProductCard";
import Image from "next/image";
export default async function ProductsSection() {
  const products: Product[] = await (
    await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    })
  ).json();
  return (
    <section className="pattern-bg text-zinc-700">
      <div className="container pt-48">
        <div className="flex justify-between items-end">
          <div className="font-Morabba space-y-3">
            <span className="font-medium text-5xl">جدیدترین محصولات</span>
            <p className="font-light text-2xl">فرآوری شده ازدانه قهوه</p>
          </div>
          <Link
            href={"/products"}
            className="flex items-center text-orange-300"
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
        <div className="grid grid-cols-4 gap-x-4 gap-y-7 mt-5 place-content-between">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
