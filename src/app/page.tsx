import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Image src="/Intro-Graphic.jpg" alt="Intro Graphic" width={5000} height={5000} quality={80}/>    
    </>
  );
}
