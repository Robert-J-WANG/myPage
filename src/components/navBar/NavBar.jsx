import { useState } from "react";
import Menu from "./Menu";
import Icon from "@/assets/robert.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex items-center justify-between w-5/6 h-full mx-auto ">
      {/*left logo */}
      <div className="w-20 h-10 ">
        <img src={Icon} className="w-full h-full" alt="" />
      </div>

      {/* center menu */}
      <div
        className={`flex items-center justify-center w-full md:w-[calc(100%-9rem)] transition-all duration-500 ${
          menuOpen ? "-translate-y-14" : "translate-y-0"
        }`}
      >
        <Menu />
      </div>

      {/*right hamburger */}
      <div className="w-16 h-full ">
        <div
          className="flex flex-col justify-between w-10 h-8 mt-4 ml-4 cursor-pointer "
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span
            className={`w-full h-1 bg-textColor transition-all duration-500 origin-left ${
              menuOpen ? "rotate-0" : "rotate-45"
            }`}
          ></span>
          <span
            className={`w-full h-1 transition-all duration-500 ${
              menuOpen ? " bg-textColor" : "bg-bgColorHeader"
            }`}
          ></span>
          <span
            className={`w-full h-1 bg-textColor origin-left transition-all duration-500 ${
              menuOpen ? "rotate-0" : "-rotate-45"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
}
