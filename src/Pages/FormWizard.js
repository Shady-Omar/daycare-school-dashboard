import React from "react";
import { Outlet } from "react-router-dom";

import FormWizardHeading from "../Components/FormWizard/FormWizardHeading";
import FormWizardSteps from "../Components/FormWizard/FormWizardSteps";
import MobileNavbar from "../Components/MobileNavbar";
import FormWizardProgressMobile from "../Components/FormWizard/FormWizardProgressMobile";

function FormWizard() {
  return (
    <>
      <div className="lg:py-[80px] pb-5 lg:pb-0 lg:px-[60px] flex flex-col justify-center lg:justify-normal items-start lg:items-center gap-[60px] lg:gap-[50px]">
        <MobileNavbar />
        <div className="flex flex-col items-center pb-5 px-[30px] gap-[30px] lg:gap-[60px] lg:px-0 self-stretch">
          <FormWizardHeading />
          <div className="card-shadow flex p-[30px] lg:py-[30px] lg:px-[60px] flex-col items-start gap-[60px] self-stretch rounded-[10px] bg-[#FFF]">
            <FormWizardSteps />
            <FormWizardProgressMobile />

            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormWizard;
