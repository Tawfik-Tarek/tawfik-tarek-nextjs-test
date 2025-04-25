import DropDown from "../ui/dropdown";
import NavItem from "./nav-item";

export default function Nav() {
  return (
    <div className="hidden lg:flex items-center gap-[4.375rem]">
      <NavItem
        href="/"
        label="Home"
      />
      <NavItem
        href="/shop"
        label="Shop"
      />
      <NavItem
        href="/products"
        label="Products"
      />
      <DropDown
        lable="Pages "
      >
        <div className="flex flex-col p-2">
          <NavItem
            href="/about"
            label="About Us"
          />
          <NavItem
            href="/contact"
            label="Contact"
          />
          <NavItem
            href="/faq"
            label="FAQ"
          />
        </div>
      </DropDown>
    </div>
  );
}
