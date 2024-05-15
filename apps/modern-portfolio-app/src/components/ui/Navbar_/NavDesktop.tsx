import Link from "next/link";
import React from "react";
import NavHamburger from "./NavHamburger";
import UI_Button from "../Buttons_/UI_Button";

type NavDesktopProps = {
  navHandlerFun: () => void;
};
const NavDesktop = ({ navHandlerFun }: NavDesktopProps) => {
  return (
    <div className="h-nav bg-bgc shadow-md">
      <div className=" w-[85%] flex items-center justify-between mx-auto h-nav  ">
        <Link href="/">
          <h1 className="text-16 md:text-25 font-bold text-white ">
            <span className="text-27 md:text-40 text-primary">MO</span>
            DERN
          </h1>
        </Link>

        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-17 font-semibold cursor-pointer text-white hover:text-primary transition-all duration-200  ">
            <Link href="/">Home</Link>
          </li>
          <li className="text-17 font-semibold cursor-pointer text-white hover:text-primary transition-all duration-200  ">
            <Link href="/">About</Link>
          </li>
          <li className="text-17 font-semibold cursor-pointer text-white hover:text-primary transition-all duration-200  ">
            <Link href="/">Products</Link>
          </li>
          <li className="text-17 font-semibold cursor-pointer text-white hover:text-primary transition-all duration-200  ">
            <Link href="/">Blogs</Link>
          </li>
          <li className="text-17 font-semibold cursor-pointer text-white hover:text-primary transition-all duration-200  ">
            <Link href="/">Contacts</Link>
          </li>
          <li className="text-17 font-semibold cursor-pointer text-white hover:text-primary transition-all duration-200  ">
            <Link href="/">Careers</Link>
          </li>
        </ul>

        <UI_Button label="Login" />

        <div className="lg:hidden">
          <NavHamburger NavHamburgerFun={navHandlerFun} />
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
