import { NextResponse } from "next/server";
const products = [
  {
    id: 1,
    name: "قهوه ترک بن مانو مقدار 250 گرم خط اول اسم خاص",
    name_en: "Bonmano Turkish Coffee 250g Special Line",
    weight: "250",
    sell_price: "270000",
    off_price: "270000",
    quantity: 6,
    image: "/images/products/p1.png",
    rate: 5,
    discount_percent: 12,
  },
  {
    id: 2,
    name: "قهوه اسپرسو بن مانو مقدار 500 گرم مدل اکسترا",
    name_en: "Bonmano Espresso Coffee 500g Extra Model",
    weight: "500",
    sell_price: "350000",
    off_price: "340000",
    quantity: 0,
    image: "/images/products/p2.png",
    rate: 3,
    discount_percent: null,
  },
  {
    id: 3,
    name: "قهوه فرانسه بن مانو مقدار 200 گرم طعم کلاسیک",
    name_en: "Bonmano French Coffee 200g Classic Flavor",
    weight: "200",
    sell_price: "220000",
    off_price: "210000",
    quantity: 40,
    image: "/images/products/p3.png",
    rate: 4,
    discount_percent: 5,
  },
  {
    id: 4,
    name: "قهوه فوری بن مانو مقدار 100 گرم سری اسپید",
    name_en: "Bonmano Instant Coffee 100g Speed Series",
    weight: "100",
    sell_price: "180000",
    off_price: "175000",
    quantity: 60,
    image: "/images/products/p4.png",
    rate: 2,
    discount_percent: 10,
  },
  {
    id: 5,
    name: "قهوه عربیکا بن مانو مقدار 300 گرم مدل پریمیوم",
    name_en: "Bonmano Arabica Coffee 300g Premium Model",
    weight: "300",
    sell_price: "320000",
    off_price: "320000",
    quantity: 25,
    image: "/images/products/p5.png",
    rate: 5,
    discount_percent: null,
  },
  {
    id: 6,
    name: "قهوه دمی بن مانو مقدار 150 گرم نوع گلد",
    name_en: "Bonmano Brewed Coffee 150g Gold Type",
    weight: "150",
    sell_price: "200000",
    off_price: "195000",
    quantity: 35,
    image: "/images/products/p6.png",
    rate: 4,
    discount_percent: 5,
  },
  {
    id: 7,
    name: "قهوه کاپوچینو بن مانو مقدار 350 گرم طعم وانیل",
    name_en: "Bonmano Cappuccino Coffee 350g Vanilla Flavor",
    weight: "350",
    sell_price: "380000",
    off_price: "380000",
    quantity: 20,
    image: "/images/products/p7.png",
    rate: 1,
    discount_percent: null,
  },
  {
    id: 8,
    name: "قهوه لاته بن مانو مقدار 400 گرم سری ریچ",
    name_en: "Bonmano Latte Coffee 400g Rich Series",
    weight: "400",
    sell_price: "400000",
    off_price: "390000",
    quantity: 45,
    image: "/images/products/p8.png",
    rate: 5,
    discount_percent: 12,
  },
];

export async function GET(request: Request) {
  return NextResponse.json(products);
}