import React from "react";

export default function GoTop() {
  return (
    <button
      className="p-2 rounded-full bg-subBgColor"
      onClick={() => {
        scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="none" />
        <path
          d="M7 14.5L12 9.5L17 14.5"
          stroke="#9feaad"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
