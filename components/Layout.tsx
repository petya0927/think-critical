import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Menu isMenuOpen={isMenuOpen} isMainPage={false} />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="mb-32">{children}</main>
      <Footer />
    </div>
  );
}
