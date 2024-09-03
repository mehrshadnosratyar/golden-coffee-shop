export default function Header() {
  return (
    <header className="hidden bg-black/50 w-[95%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 fixed right-0 left-0 mx-auto md:flex  items-center rounded-3xl backdrop:blur mt-9">
      <div className="w-full flex justify-between items-center">
        <nav className="flex flex-shrink-0 items-center gap-3 lg:gap-9 h-14">
          <div>
            <img src="images/app-logo.png" alt="Golden Coffe" />
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
                className="absolute p-6 space-y-4 w-52 top-full bg-white dark:text-white rounded-2xl text-zinc-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all tracking-normal text-base [&>*:hover]:text-orange-300 [&>*]:inline-block border-t-[3px] border-t-orange-300  dark:bg-zinc-700 shadow-normal"
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
              {/* <svg className="w-8 h-8">
                        <use xlink:href="#shopping-cart"></use>
                    </svg> */}
              <div
                className="absolute w-[400px] [&>*]:block py-12 px-20 gap-10 flex flex-col justify-center
                        items-center text-center
                     bg-white top-full left-0 border-t-[3px] rounded-2xl transition-all
                      border-t-orange-300 text-zinc-700
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      dark:bg-zinc-700 dark:text-white"
              >
                <div className=" space-y-3 text-base [&>*]:block">
                  <svg className="w-14 h-14 flex justify-center mx-auto">
                    <use href="#shopping-bag"></use>
                  </svg>
                  <span>هنوز محصولی به سبد خرید اضافه نشده</span>
                </div>
                <a
                  href="#"
                  className="w-64 h-14 bg-[#0D9488] py-4 flex justify-center rounded-xl text-white text-xl "
                >
                  مشاهده صفحه فروشگاه
                </a>
              </div>
            </div>
            <div id="theme-toggle" className="py-3 cursor-pointer">
              {/* <svg className="w-8 h-8 transition-all dark:hidden">
                        <use xlink:href="#moon"></use>
                    </svg> */}
              {/* <svg className="w-8 h-8 transition-all hidden dark:inline-block">
                        <use xlink:href="#sun"></use>
                    </svg> */}
            </div>
          </div>
          <a
            href="#"
            className="flex gap-[10px] items-center pr-5 xl:pr-10 text-orange-200 tracking-tightest"
          >
            {/* <svg className="w-8 h-8 rotate-180">
                <use xlink:href="#arrow-left-on-rec"></use>
               </svg> */}
            <span className="hidden xl:inline-block">ورود | ثبت نام</span>
          </a>
        </div>
      </div>
    </header>
  );
}
