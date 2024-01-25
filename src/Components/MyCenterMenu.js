import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import centerIcon from "../Assets/center-icon.svg";
import centerIconActive from "../Assets/center-icon-active.svg";
import arrowRight from "../Assets/arrow-right.svg";

function MyCenterMenu({ collapsed }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const arrowRef = useRef(null);
  const location = useLocation();

  const navigate = useNavigate();

  // Get the current path
  const currentPath = location.pathname;

  // Check if the path contains the word "settings"
  const shouldShowSettings = currentPath.includes("my-center");

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
            currentPath.includes("my-center") ? "5px solid #00CCB6" : ""
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
                collapsed && navigate("/my-center/room");
              }}
              className="w-7 h-7 flex justify-center items-center"
            >
              <img src={centerIconActive} alt="my-center" />
            </div>
            {!collapsed && (
              <h5 className="h5-bold !text-lg text-[#00CCB6]">My Center</h5>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-[15px]">
            <div
              onClick={() => {
                collapsed && navigate("/my-center/room");
              }}
              className="w-7 h-7"
            >
              <img src={centerIcon} alt="my-center" />
            </div>
            {!collapsed && (
              <h5 className="h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all">
                My Center
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
                to="/my-center/room"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/my-center/room"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/my-center/room"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Room
                  </h5>
                </div>
              </Link>
              <Link
                to="/my-center/calendar"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/my-center/calendar"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/my-center/calendar"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Calendar
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

export default MyCenterMenu;
