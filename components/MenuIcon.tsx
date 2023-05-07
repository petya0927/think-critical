export default function MenuIcon({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) {
  return (
    <div className="flex items-center">
      <img
        src="/assets/icons/hamburger-menu-green-icon.svg"
        alt="menu"
        className={`cursor-pointer transition-all duration-300 absolute z-10 ${
          isMenuOpen ? "-rotate-90 opacity-0" : "opacity-1"
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <img
        src="/assets/icons/hamburger-menu-black-icon.svg"
        alt="menu"
        className={`cursor-pointer transition-all duration-300 z-10 ${
          isMenuOpen ? "-rotate-90 opacity-1" : "opacity-0"
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
}
