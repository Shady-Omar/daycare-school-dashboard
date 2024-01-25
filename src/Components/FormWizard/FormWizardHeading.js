import React from "react";
import Logo from "../../Assets/Logo.svg";
import LangMenu from "../LanguageMenu";

function FormWizardHeading() {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 self-stretch relative px-[30px] lg:px-0">
      <img className="lg:block hidden" src={Logo} alt="Logo" />
      <h3 className="h4-semi lg:h3 text-[#383838]">
        Sign Up Your Center - Fill all form field to go next step
      </h3>
      <LangMenu />
    </div>
  );
}

export default FormWizardHeading;
