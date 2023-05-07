import MenuIcon from "./MenuIcon";

export default function MainHeader({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) {
  return (
    <div className="flex flex-row justify-between items-center gap-4 py-6 lg:py-16 px-16 lg:px-24 relative">
      <img
        src="/assets/images/logo.png"
        alt="logo"
        className="w-1/3 xs:w-auto z-0"
      />
      <MenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}
