export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center gap-4 py-6 lg:py-16 px-6 lg:px-24">
      <img
        src="/assets/images/logo.png"
        alt="logo"
        className="w-1/2 xs:w-auto z-10"
      />
      <img
        src="/assets/icons/hamburger-menu-green-icon.svg"
        alt="menu"
        className=""
      />
    </div>
  );
}
