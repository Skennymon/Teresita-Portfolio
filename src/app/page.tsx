import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center relative">
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
            href="/portfolio"
          >
            Enter Portfolio
          </Link>
        </div>
      </section>

      <section className="w-full flex flex-col gap-4 items-center justify-center mt-4">
        <Marquee>
          <Image src="/Graviti/Graviti1.jpg" alt="Graviti1" width={300} height={100} className="mx-4"/>
          <Image src="/Graviti/Graviti2.jpg" alt="Graviti2" width={300} height={100} className="mx-4"/>
          <Image src="/Graviti/Graviti3.jpg" alt="Graviti3" width={300} height={100} className="mx-4"/>
          <Image src="/Graviti/Graviti4.jpg" alt="Graviti4" width={300} height={100} className="mx-4"/>
          <Image src="/Zotfest/3.png" alt="Zotfest1" width={300} height={100} className="mx-4"/>
          <Image src="/Zotfest/4.png" alt="Zotfest1" width={300} height={100} className="mx-4"/>
          <Image src="/cover/LatinxFashionCover.png" alt="Latinx Fashion Cover" width={300} height={100} className="mx-4"/>
          <Image src="/cover/DreamBoyCover.png" alt="Dream Boy Cover" width={300} height={100} className="mx-4"/>
        </Marquee>
        <h2 className="lg:text-7xl md:text-5xl text-2xl">About Me</h2>

      </section>
    </>
  );
}
