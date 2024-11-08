import appLogo from "@/assets/images/app-logo.png";
import appLogoSvg from "@/assets/images/app-logo-type.svg";
import CardPopover from "@/components/CardPopover";
import Image from "next/image";
import { Fragment } from "react";
import { ReactSVG } from "react-svg";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
export default function Header() {
  return (
    <Fragment>
      <header className="hidden bg-black/70 w-[95%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 fixed right-0 left-0 mx-auto md:flex z-50 items-center rounded-3xl backdrop:blur mt-9">
        <div className="w-full flex justify-between items-center">
          <nav className="flex flex-shrink-0 items-center gap-3 lg:gap-9 h-14">
            <div>
              <Image src={appLogo} alt="Golden Coffe" />
            </div>
            <ul className="flex gap-3 lg:gap-9 text-gray-300 text-xl tracking-tightest h-full leading-[56px]">
              <li className="font-DanaMedium text-orange-200">
                <a href="#">صفحه اصلی</a>
              </li>
              <li className="relative group">
                <a
                  href="#"
                  className="group-hover:text-orange-300 transition-colors"
                >
                  فروشگاه
                </a>
                <div
                  className="absolute p-6 space-y-4 w-52 top-full bg-white  rounded-2xl text-zinc-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all tracking-normal text-base [&>*:hover]:text-orange-300 [&>*]:inline-block border-t-[3px] border-t-orange-300  shadow-normal"
                >
                  <a href="#">قهوه ویژه</a>

                  <a href="#">ویژه در سطح جهانی</a>

                  <a href="#">قهوه درجه یک</a>

                  <a href="#">ترکیبات تجاری</a>

                  <a href="#">کپسول قهوه</a>

                  <a href="#">قهوه زینو برزیلی</a>
                </div>
              </li>
              <li>
                <a href="#">دیکشنری</a>
              </li>
              <li>
                <a href="#">بلاگ</a>
              </li>
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </nav>
          <div className="flex text-orange-200">
            <div className="flex gap-5 h-14 items-center border-l-2 border-x-gray-600  pl-5 xl:pl-10">
              <div className="py-3 relative group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <CardPopover className="opacity-0 invisible group-hover:opacity-100 group-hover:visible" />
              </div>
            </div>
            <a
              href="#"
              className="flex gap-[5px] items-center pr-5 xl:pr-10 text-orange-200 tracking-tightest"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
              <span className="hidden xl:inline-block">ورود | ثبت نام</span>
            </a>
          </div>
        </div>
      </header>

      <header className="md:hidden">
        <div className="p-4 flex items-center justify-between">
          <Drawer direction="right">
            <DrawerTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </DrawerTrigger>
            <DrawerContent dir="ltr" className="w-max h-full rounded-r-none">
              <div className="p-5">
                <h1>pooooo</h1>
              </div>
            </DrawerContent>
          </Drawer>
          <div>
            <Image src={appLogoSvg} alt="logo" priority />
          </div>
          <div dir="ltr">
            <Drawer direction="left">
              <DrawerTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </DrawerTrigger>
              <DrawerContent className="w-max h-full rounded-r-none">
                <div className="p-5">
                  <h1>akldkjsdkjsd</h1>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
