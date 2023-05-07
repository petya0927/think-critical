export default function Header({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) {
  return (
    <div className="flex flex-row justify-between items-center gap-4 py-6 lg:py-16 px-16 lg:px-24 z-20 relative">
      <img
        src="/assets/images/logo.png"
        alt="logo"
        className="w-1/3 xs:w-auto z-10"
      />
      <img
        src="/assets/icons/hamburger-menu-green-icon.svg"
        alt="menu"
        className={`cursor-pointer transition-all duration-300 absolute right-16 lg:right-24 ${
          isMenuOpen ? "-rotate-90 opacity-0" : "opacity-1"
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <img
        src="/assets/icons/hamburger-menu-black-icon.svg"
        alt="menu"
        className={`cursor-pointer transition-all duration-300 absolute right-16 lg:right-24 ${
          isMenuOpen ? "-rotate-90 opacity-1" : "opacity-0"
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
}
