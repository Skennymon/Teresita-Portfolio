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
            className="w-[5rem] h-[3rem] md:w-[10rem] border rounded-2xl p-7 bg-green-500 font-main flex items-center justify-center  overflow-hidden px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90 hover:-translate-y-1 hover:scale-105"
            href="/portfolio"
          >
            Enter Portfolio
          </Link>
        </div>
      </section>
      <Marquee className="mt-4">
        <Image
          src="/Graviti/Graviti1.jpg"
          alt="Graviti1"
          width={300}
          height={100}
          className="mx-4"
        />
        <Image
          src="/Graviti/Graviti2.jpg"
          alt="Graviti2"
          width={300}
          height={100}
          className="mx-4"
        />
        <Image
          src="/Graviti/Graviti3.jpg"
          alt="Graviti3"
          width={300}
          height={100}
          className="mx-4"
        />
        <Image
          src="/Graviti/Graviti4.jpg"
          alt="Graviti4"
          width={300}
          height={100}
          className="mx-4"
        />
        <Image
          src="/Zotfest/3.png"
          alt="Zotfest1"
          width={300}
          height={100}
          className="mx-4"
        />
        <Image
          src="/Zotfest/4.png"
          alt="Zotfest1"
          width={300}
          height={100}
          className="mx-4"
        />
        <Image
          src="/cover/LatinxFashionCover.png"
          alt="Latinx Fashion Cover"
          width={300}
          height={100}
          className="mx-4"
        />
        <Image
          src="/cover/DreamBoyCover.png"
          alt="Dream Boy Cover"
          width={300}
          height={100}
          className="mx-4"
        />
      </Marquee>

      <section id="aboutme" className="w-full flex flex-col gap-4 items-center justify-center mt-4">
        <h2 className="lg:text-7xl md:text-5xl text-2xl mt-4">About Me</h2>
        <div className="flex md:flex-row flex-col w-full gap-4 p-7">
          <Image
            src="/LatinxFashionPhotos/page8.png"
            alt="Teresita"
            width={900}
            height={900}
            quality={80}
            className="rounded-lg"
          />
          <p className="md:text-5xl text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </>
  );
}
