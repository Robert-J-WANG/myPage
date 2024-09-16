import React from "react";

export default function GoTop() {
  return (
    <button
      className="btn btn-active btn-neutral bg-subBgColor text-mainColor "
      onClick={() => {
        scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Go Top
    </button>
  );
}
