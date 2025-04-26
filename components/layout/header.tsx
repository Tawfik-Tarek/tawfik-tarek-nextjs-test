import Image from "next/image";
import Logo from "../ui/logo";
import Nav from "./nav";
import MobileMenuWrapper from "./mobile-menu-wrapper";
import CartIcon from "../cart/cart-icon";

export default function Header() {
  return (
    <header className="flex items-center justify-between container mt-[4.375rem] mx-auto px-6 md:px-10 lg:px-14 very-large:px-[20rem] max-w-[1280px] relative">
      <Logo />
      <Nav />
      <div className="hidden lg:flex items-center">
        <div className="px-[0.813rem] py-[1.188rem]">
          <Image
            src="/icons/search.svg"
            alt="search"
            width={10}
            height={10}
            className="cursor-pointer"
          />
        </div>
        <div className="px-[0.813rem] py-[1.188rem]">
          <Image
            src="/icons/user.svg"
            alt="user"
            width={10}
            height={10}
            className="cursor-pointer"
          />
        </div>
        <div className="px-[0.813rem] py-[1.188rem]">
          <Image
            src="/icons/star.svg"
            alt="star"
            width={10}
            height={10}
            className="cursor-pointer"
          />
        </div>
        <CartIcon />
      </div>
      <MobileMenuWrapper />
    </header>
  );
}
