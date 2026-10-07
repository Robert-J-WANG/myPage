import { navigationLinks } from "@/data/site";
import NavLink from "./NavLink";

function NavMenu({ mobile = false, onNavigate }) {
  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-1"
          : "flex items-center justify-center gap-8 lg:gap-12"
      }
    >
      {navigationLinks.map((item) => (
        <NavLink
          key={item.key}
          to={item.to}
          mobile={mobile}
          onNavigate={onNavigate}
        >
          {item.content}
        </NavLink>
      ))}
    </ul>
  );
}

export default NavMenu;
