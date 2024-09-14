import { useState } from "react";
import Menu from "./Menu";
import Icon from "@/assets/myLogo.png";
import Swap from "../widgets/Swap";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen); // 切换状态
  };
  return (
    <div className="container 2xl:max-w-[1280px] flex items-center justify-between h-full mx-auto ">
      {/*left logo */}
      <div className="w-16 h-8 ">
        <img src={Icon} className="w-full h-full" alt="" />
      </div>

      {/* center menu */}
      <div
        className={`flex items-center justify-center w-full  transition-all duration-500 ${
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
