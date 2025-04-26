"use client";
import Image from "next/image";
import DropDown from "../ui/dropdown";
import NavItem from "./nav-item";
import CartIcon from "../cart/cart-icon";

export default function MobileNav() {
  return (
    <div className="flex flex-col text-lg lg:hidden absolute right-6 top-8 z-10 bg-white rounded-lg shadow-lg p-4 items-center gap-2 justify-center w-[100vw] max-w-[200px]">
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
        <DropDown lable="Pages ">
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
        <CartIcon />
    </div>
  );
}
