import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import stepOneIcon from "../../Assets/step-one-icon.svg";
import stepTwoIconActive from "../../Assets/step-two-icon-active.svg";
import stepThreeIconActive from "../../Assets/step-three-icon-active.svg";
import stepFourIconActive from "../../Assets/step-four-icon-active.svg";
import stepFiveIconActive from "../../Assets/step-five-icon-active.svg";
import stepSixIconActive from "../../Assets/step-six-icon-active.svg";
import stepSevenIconActive from "../../Assets/step-seven-icon-active.svg";
import ArrowRight from "../../Assets/arrow-right.svg";

function FormWizardProgressMobile() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;

  const [progressWidth, setProgressWidth] = useState(0);

  // Define the certain path where you want to increase the width
  const FormOnePath = "/form-wizard/step-one";
  const FormTwoPath = "/form-wizard/step-two";
  const FormThreePath = "/form-wizard/step-three";
  const FormFourPath = "/form-wizard/step-four";
  const FormFivePath = "/form-wizard/step-five";
  const FormSixPath = "/form-wizard/step-six";
  const FormSevenPath = "/form-wizard/step-seven";

  const ProgressUnit = 14.28571428571429;

  useEffect(() => {
    if (currentPath === FormOnePath) {
      setProgressWidth(ProgressUnit);
    } else if (currentPath === FormTwoPath) {
      setProgressWidth(ProgressUnit * 2);
    } else if (currentPath === FormThreePath) {
      setProgressWidth(ProgressUnit * 3);
    } else if (currentPath === FormFourPath) {
      setProgressWidth(ProgressUnit * 4);
    } else if (currentPath === FormFivePath) {
      setProgressWidth(ProgressUnit * 5);
    } else if (currentPath === FormSixPath) {
      setProgressWidth(ProgressUnit * 6);
    } else if (currentPath === FormSevenPath) {
      setProgressWidth(ProgressUnit * 7);
    } else {
      setProgressWidth(0);
    }
  }, [currentPath]);

  return (
    <div className="lg:hidden flex flex-col justify-center items-start gap-[30px] self-stretch">
      {/* Title */}
      <div className="flex items-center gap-[15px] self-stretch rounded-md">
        {/* icon */}
        {currentPath === "/form-wizard/step-one" ? (
          <img src={stepOneIcon} alt="" />
        ) : currentPath === "/form-wizard/step-two" ? (
          <img src={stepTwoIconActive} alt="" />
        ) : currentPath === "/form-wizard/step-three" ? (
          <img src={stepThreeIconActive} alt="" />
        ) : currentPath === "/form-wizard/step-four" ? (
          <img src={stepFourIconActive} alt="" />
        ) : currentPath === "/form-wizard/step-five" ? (
          <img src={stepFiveIconActive} alt="" />
        ) : currentPath === "/form-wizard/step-six" ? (
          <img src={stepSixIconActive} alt="" />
        ) : currentPath === "/form-wizard/step-seven" ? (
          <img src={stepSevenIconActive} alt="" />
        ) : (
          ""
        )}

        {/* text */}
        <div
          className="flex flex-col items-start gap-1"
          style={{ flex: "1 0 0" }}
        >
          {currentPath === "/form-wizard/step-one" ? (
            <h5 className="h5-bold text-[#383838]">Center Information</h5>
          ) : currentPath === "/form-wizard/step-two" ? (
            <h5 className="h5-bold text-[#383838]">Address Information</h5>
          ) : currentPath === "/form-wizard/step-three" ? (
            <h5 className="h5-bold text-[#383838]">Timing Information</h5>
          ) : currentPath === "/form-wizard/step-four" ? (
            <h5 className="h5-bold text-[#383838]">
              Description and Facilities
            </h5>
          ) : currentPath === "/form-wizard/step-five" ? (
            <h5 className="h5-bold text-[#383838]">Photos Gallery</h5>
          ) : currentPath === "/form-wizard/step-six" ? (
            <h5 className="h5-bold text-[#383838]">Plan Details</h5>
          ) : currentPath === "/form-wizard/step-seven" ? (
            <h5 className="h5-bold text-[#383838]">Documents Upload</h5>
          ) : (
            ""
          )}
        </div>
        {/* arrow */}
        <img src={ArrowRight} alt="arrow-right" className="lg:hidden" />
      </div>
      {/* Progress Bar */}
      <div className="progress-line m-0">
        <div
          className="progress-num"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
}

export default FormWizardProgressMobile;
