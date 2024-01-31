import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Transition } from "@headlessui/react";
function SalariesTabs() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  return (
    <>
      <div className="hidden lg:flex items-start gap-2.5 self-stretch">
        <Link
          to="/staff/salaries"
          className={`flex p-5 items-center gap-2.5 ${
            currentPath === "/staff/salaries" ? "bg-[#FFF]" : ""
          }`}
          style={{ borderRadius: "8px 8px 0px 0px" }}
        >
          <h5
            className={`${
              currentPath === "/staff/salaries"
                ? "h5-semi text-[#383838]"
                : "h5-med  text-[#878787]"
            } `}
          >
            Salaries
          </h5>
        </Link>
        <Link
          to="/staff/salaries-history"
          className={`flex p-5 items-center gap-2.5 ${
            currentPath === "/staff/salaries-history" ? "bg-[#FFF]" : ""
          }`}
          style={{ borderRadius: "8px 8px 0px 0px" }}
        >
          <h5
            className={`${
              currentPath === "/staff/salaries-history"
                ? "h5-semi text-[#383838]"
                : "h5-med  text-[#878787]"
            } `}
          >
            Salaries History
          </h5>
        </Link>
      </div>
      <div className="relative lg:hidden inline-block text-left self-stretch z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="flex justify-between items-start self-stretch w-full focus:outline-none"
        >
          <div
            className="flex justify-between items-center border border-[#DCDCDC] rounded-lg bg-white py-2.5 px-5 h-[60px]"
            style={{ flex: "1 0 0" }}
          >
            {/* text */}
            <div className="flex items-center gap-[11px]">
              {currentPath === "/staff/salaries" ? (
                <h5 className="h5-semi text-[#383838]">Salaries</h5>
              ) : currentPath === "/staff/salaries-history" ? (
                <h5 className="h5-semi text-[#383838]">Salaries History</h5>
              ) : (
                ""
              )}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2.97137 5.01254C2.78154 5.01704 2.59711 5.06945 2.43971 5.16373C2.28231 5.258 2.15848 5.3902 2.08277 5.54475C2.00705 5.69931 1.98259 5.86985 2.01225 6.03631C2.04192 6.20277 2.12448 6.35828 2.25024 6.48455L8.23174 12.6893C8.32543 12.7867 8.44182 12.8649 8.57288 12.9186C8.70393 12.9722 8.84655 13 8.99088 13C9.1352 13 9.27782 12.9722 9.40888 12.9186C9.53993 12.8649 9.65632 12.7867 9.75001 12.6893L15.7374 6.48455C15.828 6.39691 15.8978 6.29397 15.9426 6.18187C15.9874 6.06978 16.0063 5.95083 15.9982 5.83211C15.9901 5.71339 15.9551 5.59728 15.8953 5.49082C15.8356 5.38435 15.7523 5.28973 15.6504 5.21245C15.5486 5.13517 15.4302 5.07684 15.3024 5.04104C15.1746 5.00524 15.04 4.99269 14.9066 5.00406C14.7732 5.01543 14.6437 5.0505 14.526 5.10724C14.4082 5.16397 14.3045 5.24114 14.221 5.33422L8.9899 10.7536L3.76072 5.33422C3.66496 5.23127 3.54423 5.14895 3.40754 5.09324C3.27085 5.03754 3.12175 5.0099 2.97137 5.01254Z"
                fill="#00CCB6"
              />
            </svg>
          </div>
        </button>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              ref={ref}
              className="absolute self-stretch w-full right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg"
            >
              {/* Dropdown content goes here */}
              <div className="py-1 self-stretch w-full">
                <Link
                  to="/staff/salaries"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Salaries
                </Link>
                <Link
                  to="/staff/salaries-history"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Salaries History
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </>
  );
}

export default SalariesTabs;
