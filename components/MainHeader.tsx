import MenuIcon from "./MenuIcon";

export default function MainHeader({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) {
  return (
    <div className="flex flex-row justify-between items-center gap-4 px-7 md:px-24 py-6 relative">
      <img
        src="/assets/images/logo.png"
        alt="logo"
        className="w-1/2 xs:w-auto z-0"
      />
      <MenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}
