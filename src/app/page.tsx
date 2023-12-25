import TheHeroBanner from "@/components/home/TheHeroBanner";
import Image from "next/image";
import bg from "../assets/images/rent-a-car-bg.png"

export default function Home() {

  const bgImageStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg}) center/cover no-repeat`,
    height: "95vh",
  };

  return (
    <main className={`h-screen flex justify-center items-center`} style={bgImageStyle}>
      <Image src={bg} alt="bg" className="md:px-5 md:pt-5 md:rounded-[5rem] pb-64 z-[-1] brightness-[.50]" objectFit="cover" fill/>
      <div className="w-full md:hidden bg-white h-24 absolute bottom-48 rounded-3xl"></div>
      <div className="relative top-40 md:top-48">
      <TheHeroBanner />
      </div>
    </main>
  )
}
