import Header from "@/layout/Header";
import "../globals.css";
import HeroTitle from "./components/HeroTitle";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
