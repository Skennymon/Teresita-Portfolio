import Link from "next/link";

interface WorkNavbarProps {
  current : string;
}

export default function WorkNavbar({ current } : WorkNavbarProps) {
  return (
    <>
      <nav className="flex md:flex-row flex-col gap-4 items-center justify-center z-10 md:mt-40 mt-20 mb-20">
        <Link
          href="/portfolio/all"
          className={current === "all" ? "text-3xl underline font-pt-serif text-red-500" : "text-3xl font-pt-serif hover:text-red-400"}
        >
          All
        </Link>
        <Link
          href="/portfolio/SetDesign"
          className={current === "setdesign" ? "text-3xl underline font-pt-serif text-red-500" : "text-3xl font-pt-serif hover:text-red-400"}
        >
          Set Design
        </Link>
        <Link
          href="/portfolio/Marketing-Internships"
          className={current === "marketing" ? "text-3xl underline font-pt-serif text-red-500" : "text-3xl font-pt-serif hover:text-red-400"}
        >
          Marketing Internships
        </Link>
        <Link
          href="/portfolio/Makeup-Artist"
          className={current === "makeup" ? "text-3xl underline font-pt-serif text-red-500" : "text-3xl font-pt-serif hover:text-red-400"}
        >
          Makeup
        </Link>
      </nav>
    </>
  );
}
