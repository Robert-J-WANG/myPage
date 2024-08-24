import React, { useState, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SectionLayout from "@/Layout/SectionLayout";
import SectionHeader from "../widgets/SectionHeader";
import WorksContent from "./WorksContent";
import MyNavLink from "../widgets/MyNavLink";
import SectionPagination from "../widgets/SectionPagination";
import {
  basicWebData,
  reactMiniProjectData,
  reactFrontEndData,
} from "../../data";

export default function Works() {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  // 当 hash 为 #works 时，导航到 /basicWeb
  useEffect(() => {
    if (location.hash === "#works") {
      navigate("/basicWeb");
    }
  }, [location.hash, navigate]);

  // 根据当前路径来选择渲染的数据集
  let data;
  if (location.pathname === "/basicWeb") {
    data = basicWebData;
  } else if (location.pathname === "/reactMiniProject") {
    data = reactMiniProjectData;
  } else if (location.pathname === "/reactFrontEndWeb") {
    data = reactFrontEndData;
  } else {
    data = basicWebData; // 默认数据集
  }

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const headerContent = <SectionHeader title="my works" />;

  const mainContent = (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* 导航链接部分 (h-1/6) */}
      <div className="flex items-center justify-center w-full gap-5 h-1/6">
        <MyNavLink to="/basicWeb">html & css</MyNavLink>
        <MyNavLink to="/reactMiniProject">React Mini Project</MyNavLink>
        <MyNavLink to="/reactFrontEndWeb">React FrontEnd Web</MyNavLink>
      </div>

      {/* 显示内容部分 (h-5/6) */}
      <div className="w-full h-5/6">
        <Routes>
          <Route
            path="/basicWeb"
            element={<WorksContent data={basicWebData} page={page} />}
          />
          <Route
            path="/reactMiniProject"
            element={<WorksContent data={reactMiniProjectData} page={page} />}
          />
          <Route
            path="/reactFrontEndWeb"
            element={<WorksContent data={reactFrontEndData} page={page} />}
          />
          {/* <Route path="*" element={<Navigate to="/basicWeb" />} /> */}
        </Routes>
      </div>
    </div>
  );

  const footerContent = (
    <SectionPagination count={data.length} handlePage={handlePageChange} />
  );

  return (
    <SectionLayout
      id="works"
      headerContent={headerContent}
      mainContent={mainContent}
      footerContent={footerContent}
    />
  );
}
