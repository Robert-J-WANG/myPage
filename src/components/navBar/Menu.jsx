import { navigationLinks } from "@/data/site";
import MyNavLink from "./MyNavLink";

function Menu({ mobile = false, onNavigate }) {
  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-1"
          : "flex items-center justify-center gap-8 lg:gap-12"
      }
    >
      {navigationLinks.map((item) => (
        <MyNavLink
          key={item.key}
          to={item.to}
          mobile={mobile}
          onNavigate={onNavigate}
        >
          {item.content}
        </MyNavLink>
      ))}
    </ul>
  );
}

export default Menu;
