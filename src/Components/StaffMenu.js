import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import staffIcon from "../Assets/staff-icon.svg";
import staffIconActive from "../Assets/staff-icon-active.svg";
import arrowRight from "../Assets/arrow-right.svg";

function StaffMenu({ collapsed }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const arrowRef = useRef(null);
  const location = useLocation();

  const navigate = useNavigate();

  // Get the current path
  const currentPath = location.pathname;

  // Check if the path contains the word "settings"
  const shouldShowSettings = currentPath.includes("staff");

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
            currentPath.includes("staff") ? "5px solid #00CCB6" : ""
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
                collapsed && navigate("/staff/list");
              }}
              className="w-7 h-7 flex justify-center items-center"
            >
              <img src={staffIconActive} alt="staff" />
            </div>
            {!collapsed && (
              <h5 className="h5-bold !text-lg text-[#00CCB6]">Staff</h5>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-[15px]">
            <div
              onClick={() => {
                collapsed && navigate("/staff/list");
              }}
              className="w-7 h-7"
            >
              <img src={staffIcon} alt="staff" />
            </div>
            {!collapsed && (
              <h5 className="h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all">
                Staff
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
                to="/staff/list"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/staff/list"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/staff/list"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Staff List
                  </h5>
                </div>
              </Link>
              <Link
                to="/staff/add"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/staff/add"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/staff/add"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Add Staff
                  </h5>
                </div>
              </Link>
              <Link
                to="/staff/profile"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath.includes("/staff/profile")
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath.includes("/staff/profile")
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Profile
                  </h5>
                </div>
              </Link>
              <Link
                to="/staff/attendance"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/staff/attendance" ||
                    currentPath === "/staff/shifts"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/staff/attendance" ||
                      currentPath === "/staff/shifts"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Attendance
                  </h5>
                </div>
              </Link>
              <Link
                to="/staff/leave"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/staff/leave"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/staff/leave"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Leave Management
                  </h5>
                </div>
              </Link>
              <Link
                to="/staff/salaries"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath.includes("/staff/salaries")
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath.includes("/staff/salaries")
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Salaries
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

export default StaffMenu;
