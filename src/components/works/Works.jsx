import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SectionHeader from "../widgets/SectionHeader";
import BasicWeb from "./BasicWeb";

import MyNavLink from "../widgets/MyNavLink";
import ReactFrontEndWeb from "./ReactFrontEndWeb";
import ReactMiniProject from "./ReactMiniProject";

export default function Works() {
  return (
    <div id="works" className="flex flex-col items-center justify-center">
      <header className="w-full basis-1/12 sm:basis-1/5 ">
        <SectionHeader title={"my works"} />
      </header>

      <main className="flex flex-col items-center justify-center w-full overflow-hidden basis-11/12 sm:basis-4/5">
        {/* 连接路由 */}
        <div className="flex items-center justify-center w-full gap-5 basis-1/6">
          <MyNavLink to="/basicWeb">html & css</MyNavLink>
          <MyNavLink to="/reactMiniProject">React Mini Project</MyNavLink>
          <MyNavLink to="/reactFrontEndWeb">React FrontEnd Web</MyNavLink>
        </div>

        {/* 注册路由 */}
        <div className="w-full h-full basis-5/6 ">
          <Routes>
            <Route path="/basicWeb" element={<BasicWeb />} />
            <Route path="/reactMiniProject" element={<ReactMiniProject />} />
            <Route path="/reactFrontEndWeb" element={<ReactFrontEndWeb />} />
            <Route path="/" element={<Navigate to="/basicWeb" />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
