import Logo from "../ui/logo";
import MobileMenuWrapper from "./mobile-menu-wrapper";
import Nav from "./nav";

export default function Footer() {
  return (
    <footer className="mt-[4.375rem] relative">
      <div className="container mx-auto px-6 md:px-10 lg:px-14 very-large:px-[20rem] max-w-[1280px] relative py-10">
        <div className="flex items-center justify-between">
          <Logo className="lg:text-[2rem]" />
          <Nav />
          <MobileMenuWrapper />
        </div>
        <div className="flex justify-center mt-[3.125rem]">
          <p>Copyright © 2022 FASCO. All Rights Reserved.</p>
        </div>
      </div>
      <span className="absolute top-0 left-0 w-full h-[1px] bg-[#DEDFE1]"></span>
    </footer>
  );
}
