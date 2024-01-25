import React from "react";
import { useLocation } from "react-router-dom";

import stepOneIcon from "../../Assets/step-one-icon.svg";
import stepTwoIconNotActive from "../../Assets/step-two-icon-not-active.svg";
import stepTwoIconActive from "../../Assets/step-two-icon-active.svg";
import stepThreeIconNotActive from "../../Assets/step-three-icon-not-active.svg";
import stepThreeIconActive from "../../Assets/step-three-icon-active.svg";
import stepFourIconNotActive from "../../Assets/step-four-icon-not-active.svg";
import stepFourIconActive from "../../Assets/step-four-icon-active.svg";
import stepFiveIconNotActive from "../../Assets/step-five-icon-not-active.svg";
import stepFiveIconActive from "../../Assets/step-five-icon-active.svg";
import stepSixIconNotActive from "../../Assets/step-six-icon-not-active.svg";
import stepSixIconActive from "../../Assets/step-six-icon-active.svg";
import stepSevenIconNotActive from "../../Assets/step-seven-icon-not-active.svg";
import stepSevenIconActive from "../../Assets/step-seven-icon-active.svg";
import ArrowRight from "../../Assets/arrow-right.svg";

function FormWizardSteps() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="hidden lg:flex pb-5 justify-center items-center gap-2 self-stretch border-b-[#DCDCDC] border-b">
      <div className="flex w-[140px] p-5 flex-col items-center gap-4 rounded-md">
        {currentPath === "/form-wizard/step-one" ? (
          <>
            <img src={stepOneIcon} alt="" />
            <h5 className="h5-bold text-[#383838]">Center Information</h5>
          </>
        ) : (
          <>
            <img src={stepOneIcon} alt="" />
            <h5 className="h5-med text-[#00CCB6]">Center Information</h5>
          </>
        )}
      </div>
      <img src={ArrowRight} alt="arrow-right" />
      <div className="flex w-[140px] p-5 flex-col items-center gap-4 rounded-md">
        {currentPath === "/form-wizard/step-two" ||
        currentPath === "/form-wizard/step-three" ||
        currentPath === "/form-wizard/step-four" ||
        currentPath === "/form-wizard/step-five" ||
        currentPath === "/form-wizard/step-six" ||
        currentPath === "/form-wizard/step-seven" ? (
          <img src={stepTwoIconActive} alt="" />
        ) : (
          <img src={stepTwoIconNotActive} alt="" />
        )}
        {currentPath === "/form-wizard/step-one" ? (
          <h5 className="h5-med text-[#878787]">Address Information</h5>
        ) : currentPath === "/form-wizard/step-two" ? (
          <h5 className="h5-bold text-[#383838]">Address Information</h5>
        ) : (
          <h5 className="h5-med text-[#00CCB6]">Address Information</h5>
        )}
      </div>
      <img src={ArrowRight} alt="arrow-right" />
      <div className="flex w-[140px] p-5 flex-col items-center gap-4 rounded-md">
        {currentPath === "/form-wizard/step-three" ||
        currentPath === "/form-wizard/step-four" ||
        currentPath === "/form-wizard/step-five" ||
        currentPath === "/form-wizard/step-six" ||
        currentPath === "/form-wizard/step-seven" ? (
          <img src={stepThreeIconActive} alt="" />
        ) : (
          <img src={stepThreeIconNotActive} alt="" />
        )}
        {currentPath === "/form-wizard/step-one" ||
        currentPath === "/form-wizard/step-two" ? (
          <h5 className="h5-med text-[#878787]">Timing Information</h5>
        ) : currentPath === "/form-wizard/step-three" ? (
          <h5 className="h5-bold text-[#383838]">Timing Information</h5>
        ) : (
          <h5 className="h5-med text-[#00CCB6]">Timing Information</h5>
        )}
      </div>
      <img src={ArrowRight} alt="arrow-right" />
      <div className="flex w-[140px] p-5 flex-col items-center gap-4 rounded-md">
        {currentPath === "/form-wizard/step-four" ||
        currentPath === "/form-wizard/step-five" ||
        currentPath === "/form-wizard/step-six" ||
        currentPath === "/form-wizard/step-seven" ? (
          <img src={stepFourIconActive} alt="" />
        ) : (
          <img src={stepFourIconNotActive} alt="" />
        )}
        {currentPath === "/form-wizard/step-one" ||
        currentPath === "/form-wizard/step-two" ||
        currentPath === "/form-wizard/step-three" ? (
          <h5 className="h5-med text-[#878787]">Description and Facilities</h5>
        ) : currentPath === "/form-wizard/step-four" ? (
          <h5 className="h5-bold text-[#383838]">Description and Facilities</h5>
        ) : (
          <h5 className="h5-med text-[#00CCB6]">Description and Facilities</h5>
        )}
      </div>
      <img src={ArrowRight} alt="arrow-right" />
      <div className="flex w-[140px] p-5 flex-col items-center gap-4 rounded-md">
        {currentPath === "/form-wizard/step-five" ||
        currentPath === "/form-wizard/step-six" ||
        currentPath === "/form-wizard/step-seven" ? (
          <img src={stepFiveIconActive} alt="" />
        ) : (
          <img src={stepFiveIconNotActive} alt="" />
        )}
        {currentPath === "/form-wizard/step-one" ||
        currentPath === "/form-wizard/step-two" ||
        currentPath === "/form-wizard/step-three" ||
        currentPath === "/form-wizard/step-four" ? (
          <h5 className="h5-med text-[#878787]">Photos Gallery</h5>
        ) : currentPath === "/form-wizard/step-five" ? (
          <h5 className="h5-bold text-[#383838]">Photos Gallery</h5>
        ) : (
          <h5 className="h5-med text-[#00CCB6]">Photos Gallery</h5>
        )}
      </div>
      <img src={ArrowRight} alt="arrow-right" />
      <div className="flex w-[140px] p-5 flex-col items-center gap-4 rounded-md">
        {currentPath === "/form-wizard/step-six" ||
        currentPath === "/form-wizard/step-seven" ? (
          <img src={stepSixIconActive} alt="" />
        ) : (
          <img src={stepSixIconNotActive} alt="" />
        )}
        {currentPath === "/form-wizard/step-one" ||
        currentPath === "/form-wizard/step-two" ||
        currentPath === "/form-wizard/step-three" ||
        currentPath === "/form-wizard/step-four" ||
        currentPath === "/form-wizard/step-five" ? (
          <h5 className="h5-med text-[#878787]">Plan Details</h5>
        ) : currentPath === "/form-wizard/step-six" ? (
          <h5 className="h5-bold text-[#383838]">Plan Details</h5>
        ) : (
          <h5 className="h5-med text-[#00CCB6]">Plan Details</h5>
        )}
      </div>
      <img src={ArrowRight} alt="arrow-right" />
      <div className="flex w-[140px] p-5 flex-col items-center gap-4 rounded-md">
        {currentPath === "/form-wizard/step-seven" ? (
          <img src={stepSevenIconActive} alt="" />
        ) : (
          <img src={stepSevenIconNotActive} alt="" />
        )}
        {currentPath === "/form-wizard/step-one" ||
        currentPath === "/form-wizard/step-two" ||
        currentPath === "/form-wizard/step-three" ||
        currentPath === "/form-wizard/step-four" ||
        currentPath === "/form-wizard/step-five" ||
        currentPath === "/form-wizard/step-six" ? (
          <h5 className="h5-med text-[#878787]">Documents Upload</h5>
        ) : currentPath === "/form-wizard/step-seven" ? (
          <h5 className="h5-bold text-[#383838]">Documents Upload</h5>
        ) : (
          <h5 className="h5-med text-[#00CCB6]">Documents Upload</h5>
        )}
      </div>
    </div>
  );
}

export default FormWizardSteps;
