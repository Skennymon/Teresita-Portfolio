"use client";
import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [dropDown, setDropdown] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => {
    setDropdown(false);
  });


  return (
    <div className="flex items-center justify-between p-4 w-full rounded-md absolute top-[0%] z-1">
      <Link className="text-5xl z-1 font-pt-serif hover:text-red-500 duration-75" href="/">Teresita Portfolio <br/> <span className="text-2xl">Creative Director & Storyteller</span></Link>
      <div className="md:flex md:gap-4 hidden">
        <Link className="text-4xl hover:cursor-pointer z-1 font-pt-serif hover:text-red-500 duration-75" href="/#aboutme">About Me</Link>
        <Link className="text-4xl hvoer:cursor-pointer z-1 font-pt-serif hover:text-red-500 duration-75" href="/portfolio">My Works</Link>
      </div>

      <div
        className="p-1 rounded-md relative w-10 h-10 lg:w-32 lg:hidden md:hidden md:h-16 justify-self-end"
        ref={ref}
      >
        <button
          className="cursor-pointer"
          onClick={() => setDropdown(!dropDown)}
        >
          <Image src="/hamburger.svg" alt="Hamburger Menu" width={500} height={500} />
        </button>
        <ul
          className={`flex flex-col border gap-4 w-56 absolute top-10 right-2 rounded-2xl items-center justify-center p-5 bg-gray-950 border-gray-600 shadow-gray-600 shadow transition-all duration-75 ease-in-out z-1 ${
            dropDown
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <Link
            href="/pages/about"
            onClick={() => {
              setDropdown(false);
            }}
          >
            About me
          </Link>
          <Link href="/pages/contactme" onClick={() => setDropdown(false)}>
            My Works
          </Link>
        </ul>
      </div>
    </div>
  );
}
