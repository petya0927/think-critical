export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center py-8 sm:py-16 px-12 sm:px-24">
      <img
        src="/assets/images/logo.png"
        alt="logo"
        className="w-1/2 sm:w-auto"
      />
      <img
        src="/assets/icons/hamburger-menu-green-icon.svg"
        alt="menu"
        className=""
      />
    </div>
  );
}
