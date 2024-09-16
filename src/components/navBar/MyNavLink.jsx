import { NavLink } from "react-router-dom";

export default function MyNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-2xl   ${isActive ? "text-mainColor " : " text-textColor"}`
      }
    >
      {children}
    </NavLink>
  );
}
