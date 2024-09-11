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
      className="flex flex-col items-center justify-center  w-full h-[calc(100vh-64px)] "
    >
      {/* Header Section */}
      <header className="flex items-center justify-center w-full basis-2/12">
        {headerContent && headerContent}
      </header>

      {/* Main Section */}
      <main className="flex items-center justify-center w-full mx-auto overflow-hidden lg:w-4/5 basis-8/12">
        {mainContent && mainContent}
      </main>

      {/* Footer Section */}
      <footer className="flex items-center justify-center w-4/5 basis-2/12">
        {footerContent && footerContent}
      </footer>
    </div>
  );
}
