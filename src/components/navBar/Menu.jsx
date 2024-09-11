import { navLinkData } from "@/data";
import MyNavLink from "./MyNavLink";
function Menu() {
  return (
    <ul className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-16">
      {navLinkData.map((item) => (
        <MyNavLink key={item.key} to={item.to}>
          {item.content}
        </MyNavLink>
      ))}
    </ul>
  );
}

export default Menu;
