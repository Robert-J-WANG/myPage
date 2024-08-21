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
      className="flex flex-col items-center justify-center section-layout"
    >
      {/* Header Section */}
      <header className="w-full basis-1/12 sm:basis-0.2 flex items-center justify-center">
        {headerContent && headerContent}
      </header>

      {/* Main Section */}
      <main className="w-full basis-10/12 sm:basis-0.65 flex items-center justify-center overflow-hidden">
        {mainContent && mainContent}
      </main>

      {/* Footer Section */}
      <footer className="w-full basis-1/12 sm:basis-0.15 flex items-center justify-center">
        {footerContent && footerContent}
      </footer>
    </div>
  );
}
