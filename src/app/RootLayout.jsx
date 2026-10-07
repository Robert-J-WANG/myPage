import { Outlet } from "react-router";

import AnimationBackground from "@/components/layout/AnimationBackground";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

const BACKGROUND_STAR_SIZES = [6, 9, 15, 30, 45];

export default function RootLayout() {
  return (
    <div className="relative w-full min-h-screen transition-colors isolate text-content">
      <header className="sticky top-0 z-40 w-full border-b border-border-strong bg-chrome backdrop-blur-xl">
        <NavBar />
      </header>

      <main className="container relative z-10 mx-auto flex max-w-[1280px] flex-col items-center justify-start">
        <Outlet />
      </main>

      <Footer />

      <div className="fixed inset-0 z-0 w-screen h-screen overflow-hidden transition-colors bg-page">
        <AnimationBackground
          starSizes={BACKGROUND_STAR_SIZES}
          starColor="rgb(107 114 128 / 15%)"
          starNumber={10}
        />
      </div>
    </div>
  );
}
