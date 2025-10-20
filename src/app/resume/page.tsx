import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex w-full p-8 items-center justify-center md:mt-36">
      <Image src="/TeresitaResume_page-0001.jpg" alt="Resume" width={1000} height={1000} className="rounded-lg"/>
    </div>
  );
}