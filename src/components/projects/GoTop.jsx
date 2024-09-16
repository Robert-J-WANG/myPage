import React from "react";

export default function GoTop() {
  return (
    <button
      className="btn btn-active btn-neutral bg-subBgColor text-mainColor "
      onClick={() => {
        scrollTo(0, 0);
      }}
    >
      Go Top
    </button>
  );
}
