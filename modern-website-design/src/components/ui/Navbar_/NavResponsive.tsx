"use client";
import React, { useState } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const NavResponsive = () => {
  const [showNav, setShowNav] = useState(false);
  const NavHandler = () => setShowNav(!showNav);

  return (
    <>
      <div className="z-0">
        <NavMobile isOpen={showNav} />
      </div>
      <div className="z-10">
        <NavDesktop navHandlerFun={NavHandler} />
      </div>
    </>
  );
};

export default NavResponsive;
