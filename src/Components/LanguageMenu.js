import React from "react";
import usFlagIcon from "../Assets/usflag-Icon.svg";
import downArrow from "../Assets/down-arrow.svg";

function LangMenu() {
  return (
    <div className="absolute hidden p-[10px] cursor-pointer lg:flex flex-row items-center gap-[14px] right-0 top-0 rounded-[46px] border-[#F0F0F0] border-[1px]">
      <img src={usFlagIcon} alt="flag icon" />
      <p className="label-bold">EN</p>
      <img src={downArrow} alt="down arrow" />
    </div>
  );
}

export default LangMenu;
