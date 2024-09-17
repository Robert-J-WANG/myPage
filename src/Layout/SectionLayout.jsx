// components/SectionLayout.jsx
import React from "react";

export default function SectionLayout({
  id,
  headerContent,
  mainContent,
  footerContent,
}) {
  return (
    <div id={id} className="w-full">
      {/* Header Section */}
      <header className="flex items-end justify-center w-full h-20 ">
        {headerContent && headerContent}
      </header>

      {/* Main Section */}
      <main className="flex items-center justify-center w-full min-h-[calc(100vh-192px)] mx-auto overflow-hidden">
        {mainContent && mainContent}
      </main>

      {/* /* Footer Section */}
      <footer className="flex items-start justify-center w-full h-12">
        {footerContent && footerContent}
      </footer>
    </div>
  );
}
