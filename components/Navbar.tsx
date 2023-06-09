import Link from "next/link";
import MenuIcon from "./MenuIcon";

export default function Navbar({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) {
  return (
    <div className="bg-darkGray">
      <div className="w-full md:max-w-[calc(1100px+10rem)] lg:max-w-[calc(1100px+20rem)] m-auto px-7 md:px-20 lg:px-40 py-5 flex justify-between items-center">
        <Link href="/">
          <img src="/assets/images/logo-white.png" />
        </Link>
        <div className="gap-12 hidden xs:flex">
          <Link href="/help" className="text-white font-semibold">
            Help
          </Link>
          <Link href="/about" className="text-white font-semibold">
            About
          </Link>
        </div>
        <div className="xs:hidden block">
          <MenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </div>
  );
}
