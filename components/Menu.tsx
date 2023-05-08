import Link from "next/link";

export default function Menu({
  isMenuOpen,
  isMainPage,
}: {
  isMenuOpen: boolean;
  isMainPage: boolean;
}) {
  return (
    <div
      className={`absolute top-0 right-0 w-full sm:w-[168px] lg:w-[240px] z-10 py-20 h-full bg-primary transition-all duration-300 flex flex-col gap-8 sm:gap-4 lg:gap-8 items-center ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } ${isMenuOpen && !isMainPage ? "flex xs:hidden" : ""}`}
    >
      <Link
        href="/help"
        className="mt-auto font-semibold text-3xl sm:text-2xl lg:text-3xl"
      >
        Help
      </Link>
      <Link
        href="/about"
        className="font-semibold text-3xl sm:text-2xl lg:text-3xl"
      >
        About
      </Link>
    </div>
  );
}
