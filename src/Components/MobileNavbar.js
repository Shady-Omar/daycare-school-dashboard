import React from "react";

import logo from "../Assets/Logo.svg";

import MobileSidebarModal from "./MobileSidebarModal";

function MobileNavbar() {
  return (
    <>
      <div
        className="flex h-20 py-5 px-[30px] justify-between items-center shrink-0 bg-white lg:hidden w-full"
        style={{ boxShadow: "18px 4px 35px 0px rgba(0, 0, 0, 0.06)" }}
      >
        <img
          className="w-[146.277px] h-[40px] shrink-0"
          src={logo}
          alt="logo"
        />
        <MobileSidebarModal />
      </div>
    </>
  );
}

export default MobileNavbar;
