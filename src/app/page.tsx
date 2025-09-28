import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center relative">
        <Image
          src="/Intro-Graphic.jpg"
          alt="Intro Graphic"
          width={5000}
          height={5000}
          quality={80}
        ></Image>
        <div className="absolute flex flex-col items-center justify-center gap-7">
          <h1 className="lg:text-7xl md:text-5xl text-2xl font-main bg-pink-300 rounded-lg p-2 text-black">
            Creative Director
          </h1>
          <Link
            className="w-[5rem] h-[3rem] md:w-[10rem] border rounded-2xl p-7 bg-emerald-300 font-main flex items-center justify-center"
            href="/pages/choosecategory"
          >
            Enter Portfolio
          </Link>
        </div>
      </div>
    </>
  );
}
