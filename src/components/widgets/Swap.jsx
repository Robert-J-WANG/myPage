import React from "react";

export default function Swap({ isChecked, handleMenu }) {
  return (
    <label className="border-subBdColor hover:bg-textColor hover:text-bgColor bg-subBgColor text-textColor btn btn-square swap swap-rotate">
      {/* 复选框，点击时切换状态 */}
      <input type="checkbox" checked={isChecked} onChange={handleMenu} />

      {/* 根据复选框状态显示不同的图标 */}
      {isChecked ? (
        // close icon
        <svg
          className="fill-current swap-on"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      ) : (
        // hamburger icon
        <svg
          className="fill-current swap-off"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      )}
    </label>
  );
}
