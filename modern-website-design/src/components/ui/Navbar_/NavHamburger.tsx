import React from "react";
import { Hamburger } from "frnz-ui";
import { fxc } from "@/libs/utils/constants";
type NavHamburgerProps = {
  NavHamburgerFun: () => void;
};
const NavHamburger = ({ NavHamburgerFun }: NavHamburgerProps) => {
  return <Hamburger onClick={NavHamburgerFun} variant="Wavy" fxc={fxc} />;
};

export default NavHamburger;
