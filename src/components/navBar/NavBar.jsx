import { useState } from "react";
import Menu from "./Menu";
import Swap from "./Swap";
import { BASE_PATH } from "../../config";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen); // 切换状态
  };
  return (
    <div className="container 2xl:max-w-[1280px] flex items-center justify-between h-full mx-auto ">
      {/*left logo */}
      <div className="hidden h-4/5 md:block">
        <a
          href={`${BASE_PATH}/home`}
          className="text-[2.25rem] font-[900] italic bg-clip-text text-transparent bg-gradient-to-r from-subColor to-mainColor "
        >
          Robert .
        </a>
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
