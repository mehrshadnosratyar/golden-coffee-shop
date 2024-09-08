import Link from "next/link";
import React from "react";

export default function CardPopover({ className }: { className?: string }) {
  return (
    <div
      className={`absolute w-[400px] [&>*]:block py-12 px-20 gap-10 flex flex-col justify-center
                        items-center text-center
                     bg-white top-full left-0 border-t-[3px] rounded-2xl transition-all
                      border-t-orange-300 text-zinc-700
                    ${className}`}
    >
      <div className=" space-y-3 text-base [&>*]:block font-semibold">
        <div className="space-y-2">
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
      </div>
      <Link
        href="#"
        className="bg-[#0D9488] p-4 flex justify-center rounded-xl text-white "
      >
        مشاهده صفحه فروشگاه
      </Link>
    </div>
  );
}
