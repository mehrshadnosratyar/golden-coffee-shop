import Image from "next/image";
import { Fragment } from "react";
import ProductRate from "./ProductRate";
import AddToCart from "./AddToCart";
import { formatNumbersWithCommas } from "@/helper/helper";
import { Product } from "@/types/GeneralTypes";

export default function ProductCard({
  product,
  key,
}: {
  product: Product;
  key?: number | string;
}) {
  return (
    <div
      key={key}
      className="bg-white grid place-content-center w-48 *:text-xs md:*:text-base md:w-60 rounded-xl shadow-lg p-3 md:p-5 space-y-4 relative"
    >
      <div className="grid place-content-center">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={400}
          priority
        />
      </div>
      <p className="line-clamp-2 text-base font-medium">{product.name}</p>
      {product.quantity ? (
        product.discount_percent ? (
          <Fragment>
            <div className="flex items-center gap-2 ">
              <p className="flex items-baseline gap-0.5 text-emerald-600">
                <span className="font-semibold">
                  {formatNumbersWithCommas(product.off_price)}
                </span>
                <span className="text-sm">تومان</span>
              </p>
              <p className="flex items-baseline gap-0.5 text-gray-300 relative">
                <span>{formatNumbersWithCommas(product.sell_price)}</span>
                <span className="text-sm">تومان</span>
                <span className="h-3 border-t-2 border-red-400 w-full absolute top-1/2 bottom-1/2"></span>
              </p>
            </div>
            <span className="absolute text-center flex items-end pt-0.5 px-1.5 rounded-xl bg-orange-300 text-base font-semibold right-4 top-4">
              {product.discount_percent}%
            </span>
          </Fragment>
        ) : (
          <p className="flex items-baseline gap-0.5 text-emerald-600">
            <span className="font-semibold">{product.off_price}</span>
            <span className="text-sm">تومان</span>
          </p>
        )
      ) : (
        <p className="text-red-400">فعلا موجود نیست</p>
      )}
      <div className="flex items-end justify-between w-full">
        <AddToCart product={product} />
        <ProductRate rate={product.rate} />
      </div>
    </div>
  );
}
