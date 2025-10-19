import Image from "next/image";
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
          className="brightness-75"
        ></Image>
        <div className="absolute flex flex-col items-center justify-center gap-7">
          <h1 className="lg:text-7xl md:text-5xl text-2xl font-main bg-pink-300 rounded-lg p-2 text-yellow-100 font-limelight flex flex-col">
            Teresita Cienfuegos <span className="lg:text-5xl md:text-3xl text-1xl text-center">Film & Media Studies</span>
          </h1>
          <Link
            className="w-[5rem] h-[3rem] md:w-[10rem] border rounded-2xl p-7 bg-red-400 font-pt-serif flex items-center justify-center px-5 py-2.5 text-black duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90 hover:-translate-y-1 hover:scale-105"
            href="/portfolio/All"
          >
            Enter Portfolio
          </Link>
        </div>
      </section>
      
      <section
        id="aboutme"
        className="w-full flex flex-col gap-4 items-center justify-between mt-4"
      >
        <h2 className="lg:text-7xl md:text-5xl text-2xl mt-4 font-pt-serif">About Me</h2>
        <div className="flex 2xl:flex-row flex-col lg:w-[80%] w-full gap-4 p-4 items-center justify-center">
          <Image
            src="/LatinxFashionPhotos/page8.png"
            alt="Teresita"
            width={1000}
            height={1000}
            quality={80}
            className="rounded-lg"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="2xl:text-5xl text-2xl text-center font-pt-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link href="/resume" className="flex items-center justify-center w-full">
              <button className="rounded-2xl p-7 bg-gray-800 font-main flex items-center justify-center  overflow-hidden px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer">View my Resume</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-8 gap-4 w-full">
        <h2 className="md:text-5xl text-2xl font-pt-serif">Contact Me</h2>
        {/*Linkedin, Instagram , Email*/}
        <div className="w-1/2 flex gap-8 items-center justify-center">
          <a href="https://www.linkedin.com/in/teresitasc/" target="_blank" className="justify-self-center">
            <Image
              src="/Socials/LinkedIn_icon.svg.png"
              alt="LinkedIn"
              width={75}
              height={75}
              className="hover:scale-110 transition-transform hover:cursor-pointer"
            />
          </a>
          <a href="https://www.instagram.com/teresitacienfuegos/" target="_blank" className="justify-self-center">
            <Image
              src="/Socials/Instagram_logo_2022.svg.png"
              alt="Instagram"
              width={75}
              height={75}
              className="hover:scale-110 transition-transform hover:cursor-pointer"
            />
          </a>
          <a className="justify-self-center">
            <Image
              src="/Socials/Gmail_icon_(2020).svg.webp"
              alt="Email"
              width={75}
              height={75}
              className="hover:scale-110 transition-transform hover:cursor-pointer"
            />
          </a>
        </div>
      </section>
    </>
  );
}
