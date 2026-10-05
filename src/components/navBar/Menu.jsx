import { navigationLinks } from "@/data/site";
import MyNavLink from "./MyNavLink";
function Menu() {
  return (
    <ul className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-16">
      {navigationLinks.map((item) => (
        <MyNavLink key={item.key} to={item.to}>
          {item.content}
        </MyNavLink>
      ))}
    </ul>
  );
}

export default Menu;
