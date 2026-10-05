import { Outlet } from "react-router";

import Layout from "@/Layout/Index";
import NavBar from "@/components/navBar/NavBar";

export default function RootLayout() {
  return <Layout header={<NavBar />} content={<Outlet />} />;
}
