"use client";

import Image from "next/image";
import React from "react";
import HoverAnimatedSVG from "./hamburger";

const Header: React.FC = () => {
  return (
    <div className="absolute -top-16 left-0 right-0 z-50 mx-auto flex max-w-screen-lg items-center justify-between px-4 sm:top-0">
      <Image
        src="/logo_full_dark.svg"
        alt="Solar Reach logo"
        width={250}
        height={250}
      />
      <div className="mb-2 cursor-pointer">
        <HoverAnimatedSVG />
        <Image
          src="/hamburger_to_chevron.svg"
          alt="Menu"
          width={45}
          height={45}
        />
      </div>
    </div>
  );
};

export default Header;
