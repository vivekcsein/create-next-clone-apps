"use client";
import React, { useState } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const NavResponsive = () => {
  const [showNav, setShowNav] = useState(false);
  const NavHandler = () => setShowNav(!showNav);

  return (
    <>
      <div className="">
        <NavMobile isOpen={showNav} />
      </div>
      <div className="">
        <NavDesktop navHandlerFun={NavHandler} />
      </div>
    </>
  );
};

export default NavResponsive;
