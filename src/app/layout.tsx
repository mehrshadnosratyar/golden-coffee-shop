import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layout/Header";
import localFont from "next/font/local";

const dana = localFont({
  src: [
    {
      path: "../assets/fonts/Dana/woff2/DanaFaNum-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/Dana/woff2/DanaFaNum-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2",
      weight: "600",
    },
  ],
  variable: "--dana-font",
});
const morabba = localFont({
  src: [
    {
      path: "../assets/fonts/Morabba/woff2/Morabba-Light.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/Morabba/woff2/Morabba-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/Morabba/woff2/Morabba-Bold.woff2",
      weight: "800",
    },
  ],
  variable: "--morabba-font",
});
export const metadata: Metadata = {
  title: "Golden Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        dir="rtl"
        className={`${dana.variable} ${morabba.variable} font-Dana`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
