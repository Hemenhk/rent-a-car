import TheHeroBanner from "@/components/home/hero-banner/TheHeroBanner";
import Image from "next/image";
import bg from "../assets/images/rent-a-car-bg.jpg";
import TheBrandCarousel from "@/components/home/car-brands/TheBrandCarousel";
import TheBrands from "@/components/home/car-brands/TheBrands";

export default function Home() {
  const bgImageStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg}) center/cover no-repeat`,
    height: "95vh",
  };

  return (
    <main
      className={`h-screen flex justify-center items-center`}
      style={bgImageStyle}
    >
      <Image
        src={bg}
        alt="bg"
        className="md:px-5 md:pt-5 md:rounded-[3rem] pb-80 z-[-1] brightness-[.45]"
        objectFit="cover"
        fill
      />
      <div className="w-full md:hidden bg-white h-24 absolute bottom-48 rounded-3xl"></div>
      <div className="relative top-40 md:top-48">
        <div className="relative flex justify-center top-20 pl-10 md:pl-0 md:left-0 md:top-6 overflow-hidden">
        <TheHeroBanner />
        </div>
        <div className="relative top-10 right-2 px-5 flex md:hidden w-[60%] mx-auto pl-10">
          <TheBrandCarousel />
        </div>
        <div className="hidden md:flex justify-center relative top-12">
          <TheBrands />
        </div>
      </div>
    </main>
  );
}
