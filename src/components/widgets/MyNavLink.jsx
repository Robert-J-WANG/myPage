import React from "react";
import { NavLink } from "react-router-dom";

export default function MyNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 text-center uppercase rounded ${
          isActive
            ? "text-mainColor bg-mainColor20"
            : "bg-subBgColor text-subColor"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
