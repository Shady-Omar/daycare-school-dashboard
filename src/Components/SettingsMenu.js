import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SettingsIconActive from "../Assets/settings-icon-active.svg";
import SettingsIcon from "../Assets/settings-icon.svg";
import arrowRight from "../Assets/arrow-right.svg";

function SettingsMenu({ collapsed }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const arrowRef = useRef(null);
  const location = useLocation();

  const navigate = useNavigate();

  // Get the current path
  const currentPath = location.pathname;

  // Check if the path contains the word "settings"
  const shouldShowSettings = currentPath.includes("settings");

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);

    // Rotate the arrow icon
    if (arrowRef.current) {
      arrowRef.current.style.transform = isAccordionOpen
        ? "rotate(0deg)"
        : "rotate(90deg)";
    }
  };
  return (
    <div className="flex w-full flex-col gap-2.5">
      <div
        className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
        style={{
          borderRight: `${
            currentPath.includes("settings") ? "5px solid #00CCB6" : ""
          }`,
        }}
        onClick={() => {
          !collapsed && toggleAccordion();
        }}
      >
        {shouldShowSettings ? (
          <div className="flex items-center gap-[15px]">
            <div
              onClick={() => {
                collapsed && navigate("/settings/center");
              }}
              className="w-7 h-7 flex justify-center items-center"
            >
              <img src={SettingsIconActive} alt="settings" />
            </div>
            {!collapsed && (
              <h5 className="h5-bold !text-lg text-[#00CCB6]">Settings</h5>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-[15px]">
            <div
              onClick={() => {
                collapsed && navigate("/settings/center");
              }}
              className="w-7 h-7"
            >
              <img src={SettingsIcon} alt="settings" />
            </div>
            {!collapsed && (
              <h5 className="h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all">
                Settings
              </h5>
            )}
          </div>
        )}
        {!collapsed && (
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 transition-all">
              <img
                className="arrow-container"
                ref={arrowRef}
                id="arrow"
                src={arrowRight}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
      {!collapsed && (
        <>
          {isAccordionOpen && (
            <div className="flex flex-col items-start self-stretch">
              <Link
                to="/settings/center"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/settings/center" ||
                    currentPath === "/settings"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/settings/center" ||
                      currentPath === "/settings"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Center Info
                  </h5>
                </div>
              </Link>
              <Link
                to="/settings/address"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/settings/address"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/settings/address"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Address
                  </h5>
                </div>
              </Link>
              <Link
                to="/settings/timing"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/settings/timing"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/settings/timing"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Timing
                  </h5>
                </div>
              </Link>
              <Link
                to="/settings/facilities"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/settings/facilities"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/settings/facilities"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Facilities
                  </h5>
                </div>
              </Link>
              <Link
                to="/settings/financials"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/settings/financials"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/settings/financials"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Financials
                  </h5>
                </div>
              </Link>
              <Link
                to="/settings/photos"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/settings/photos"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/settings/photos"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Photos
                  </h5>
                </div>
              </Link>
              <Link
                to="/settings/documents"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/settings/documents"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/settings/documents"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Documents
                  </h5>
                </div>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default SettingsMenu;
