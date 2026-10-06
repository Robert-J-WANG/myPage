import { Outlet } from "react-router";

import Layout from "@/Layout/Index";
import Footer from "@/components/Footer";
import NavBar from "@/components/navBar/NavBar";
import AnimationBackground from "@/components/widgets/AnimationBackground";

const BACKGROUND_STAR_SIZES = [6, 9, 15, 30, 45];

export default function RootLayout() {
  return (
    <Layout
      header={<NavBar />}
      content={<Outlet />}
      footer={<Footer />}
      animationBackground={
        <AnimationBackground
          starSizes={BACKGROUND_STAR_SIZES}
          starColor="rgb(107 114 128 / 20%)"
          starNumber={12}
        />
      }
    />
  );
}
