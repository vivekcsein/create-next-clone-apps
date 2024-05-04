"use client";
import React, { useState } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const NavResponsive = () => {
  const [showNav, setShowNav] = useState(false);
  const NavHandler = () => setShowNav(!showNav);

  return (
    <>
      <NavMobile isOpen={showNav} />
      <NavDesktop navHandlerFun={NavHandler} />
    </>
  );
};

export default NavResponsive;
