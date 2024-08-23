// components/SectionLayout.jsx
import React from "react";

export default function SectionLayout({
  id,
  headerContent,
  mainContent,
  footerContent,
}) {
  return (
    <div id={id} className="flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="flex items-center justify-center w-full basis-1/6">
        {headerContent && headerContent}
      </header>

      {/* Main Section */}
      <main className="flex items-center justify-center w-5/6 mx-auto overflow-hidden basis-5/6">
        {mainContent && mainContent}
      </main>

      {/* Footer Section */}
      <footer className="flex items-center justify-center w-4/5 basis-1/12">
        {footerContent && footerContent}
      </footer>
    </div>
  );
}
