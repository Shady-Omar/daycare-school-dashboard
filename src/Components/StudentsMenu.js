import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import StudentIconActive from "../Assets/student-icon-active.svg";
import StudentIcon from "../Assets/student-icon.svg";
import arrowRight from "../Assets/arrow-right.svg";

function StudentsMenu({ collapsed }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const arrowRef = useRef(null);
  const location = useLocation();

  const navigate = useNavigate();

  // Get the current path
  const currentPath = location.pathname;

  // Check if the path contains the word "settings"
  const shouldShowSettings = currentPath.includes("students");

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
            currentPath.includes("students") ? "5px solid #00CCB6" : ""
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
                collapsed && navigate("/students/attendance");
              }}
              className="w-7 h-7 flex justify-center items-center"
            >
              <img src={StudentIconActive} alt="students" />
            </div>
            {!collapsed && (
              <h5 className="h5-bold !text-lg text-[#00CCB6]">Students</h5>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-[15px]">
            <div
              onClick={() => {
                collapsed && navigate("/students/attendance");
              }}
              className="w-7 h-7"
            >
              <img src={StudentIcon} alt="students" />
            </div>
            {!collapsed && (
              <h5 className="h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all">
                Students
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
                to="/students/attendance"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/students/attendance"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/students/attendance"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Attendance
                  </h5>
                </div>
              </Link>
              <Link
                to="/students/list"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/students/list"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/students/list"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Student List
                  </h5>
                </div>
              </Link>
              <Link
                to="/students/add"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/students/add"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/students/add"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Add Student
                  </h5>
                </div>
              </Link>
              <Link
                to="/students/admission"
                className="flex h-10 pl-3 items-center gap-7 self-stretch bg-[#FFF]"
              >
                <span
                  className={`w-[3px] h-10 ${
                    currentPath === "/students/admission"
                      ? "bg-[#00CCB6]"
                      : "bg-[#DCDCDC]"
                  }`}
                ></span>
                <div className="flex items-center gap-[15px]">
                  <h5
                    className={` ${
                      currentPath === "/students/admission"
                        ? "h5-bold !text-lg text-[#00CCB6]"
                        : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                    } `}
                  >
                    Admission
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

export default StudentsMenu;
