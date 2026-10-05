import { useState } from "react";
import { Link } from "react-router";
import Menu from "./Menu";
import Swap from "./Swap";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen); // 切换状态
  };
  return (
    <div className="container 2xl:max-w-[1280px] flex items-center justify-between h-full mx-auto ">
      {/*left logo */}
      <div className="hidden h-4/5 md:block">
        <Link
          to="/home"
          className="text-[2.25rem] font-[700] italic bg-clip-text text-transparent bg-gradient-to-r from-subColor to-mainColor "
        >
          Robert.
        </Link>
      </div>

      {/* center menu */}
      <div
        className={`flex items-center justify-center   transition-all duration-500 ${
          isMenuOpen ? "-translate-y-14" : "translate-y-0"
        }`}
      >
        <Menu />
      </div>

      {/*right hamburger */}
      <Swap isChecked={isMenuOpen} handleMenu={toggleMenu} />
    </div>
  );
}
