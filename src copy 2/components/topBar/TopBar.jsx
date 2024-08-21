import { useState } from "react";
import Menu from "./Menu";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex items-center justify-between w-5/6 h-full mx-auto ">
      {/*left logo */}
      <div className="hidden h-full md:block w-36">
        <a
          href="#home"
          className="text-[2.25rem] font-[900] italic bg-clip-text text-transparent bg-gradient-to-r from-subColor to-mainColor "
        >
          Robert .
        </a>
      </div>

      {/* center menu */}
      <div
        className={`flex items-center justify-center w-full md:w-[calc(100%-13rem)] transition-all duration-500 ${
          menuOpen ? "-translate-y-14" : "translate-y-0"
        }`}
      >
        <Menu />
      </div>

      {/*right hamburger */}
      <div className="hidden w-16 h-full md:block ">
        <div
          className="flex flex-col justify-between w-4/5 mt-4 ml-4 cursor-pointer h-2/3 sm:w-10 sm:h-8 "
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
