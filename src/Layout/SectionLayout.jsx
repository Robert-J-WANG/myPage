// components/SectionLayout.jsx
import React from "react";

export default function SectionLayout({
  id,
  headerContent,
  mainContent,
  footerContent,
}) {
  return (
    <div
      id={id}
      className="flex flex-col items-center justify-between w-full xl:max-w-[1280px]"
    >
      {/* Header Section */}
      <header className="flex items-center justify-center w-full h-20">
        {headerContent && headerContent}
      </header>

      {/* Main Section */}
      <main className="flex items-center justify-center w-full mx-auto overflow-hidden lg:w-4/5 min-h-[calc(100vh-14rem)]">
        {mainContent && mainContent}
      </main>

      {/* Footer Section */}
      <footer className="flex items-center justify-center w-4/5 h-20">
        {footerContent && footerContent}
      </footer>
    </div>
  );
}
