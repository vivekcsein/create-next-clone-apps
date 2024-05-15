import Link from "next/link";
import React from "react";

type NavMobileProps = {
  isOpen: boolean;
};
const NavMobile = ({ isOpen }: NavMobileProps) => {
  const navStyle = isOpen ? "translate-x-0" : "-translate-x-full";
  return (
    <div
      className={` ${navStyle} transform transition-all duration-500 fixed top-0 left-0  h-screen right-0 bottom-0 bg-secondary  `}
    >
      <ul className="relative space-y-10 flex flex-col items-center justify-start py-[16vh] h-full">
        <li className="text-25 cursor-pointer text-white hover:text-primary transition-all duration-200 ">
          <Link href="/">Home</Link>
        </li>
        <li className="text-25 cursor-pointer text-white hover:text-primary transition-all duration-200 ">
          <Link href="/">About</Link>
        </li>
        <li className="text-25 cursor-pointer text-white hover:text-primary transition-all duration-200 ">
          <Link href="/">Products</Link>
        </li>
        <li className="text-25 cursor-pointer text-white hover:text-primary transition-all duration-200 ">
          <Link href="/">Blogs</Link>
        </li>
        <li className="text-25 cursor-pointer text-white hover:text-primary transition-all duration-200 ">
          <Link href="/">Contacts</Link>
        </li>
        <li className="text-25 cursor-pointer text-white hover:text-primary transition-all duration-200 ">
          <Link href="/">Careers</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
