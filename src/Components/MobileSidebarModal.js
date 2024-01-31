import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ServicesMenu from "./ServicesMenu";
import StudentsMenu from "./StudentsMenu";
import MyCenterMenu from "./MyCenterMenu";
import StaffMenu from "./StaffMenu";
import SettingsMenu from "./SettingsMenu";

import logo from "../Assets/Logo.svg";
import prevArrow from "../Assets/prev-arrow.svg";
import dashboardIcon from "../Assets/dashboard-icon.svg";
import dashboardIconActive from "../Assets/dashboard-icon-active.svg";
import messagingIcon from "../Assets/messaging-icon.svg";
import messagingIconActive from "../Assets/messaging-icon-active.svg";
import billingIcon from "../Assets/billing-icon.svg";
import billingIconActive from "../Assets/billing-icon-active.svg";
import articlesIcon from "../Assets/articles-icon.svg";
import articlesIconActive from "../Assets/articles-icon-active.svg";
import reportIcon from "../Assets/report-icon.svg";
import reportIconActive from "../Assets/report-icon-active.svg";
import reviewIcon from "../Assets/review-icon.svg";
import reviewIconActive from "../Assets/review-icon-active.svg";
import supportIcon from "../Assets/support-icon.svg";
import supportIconActive from "../Assets/support-icon-active.svg";

function MobileSidebarModal() {
  let [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  return (
    <>
      <button onClick={() => setIsOpen(true)} className=" focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16ZM5 9H27C27.2652 9 27.5196 8.89464 27.7071 8.70711C27.8946 8.51957 28 8.26522 28 8C28 7.73478 27.8946 7.48043 27.7071 7.29289C27.5196 7.10536 27.2652 7 27 7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8C4 8.26522 4.10536 8.51957 4.29289 8.70711C4.48043 8.89464 4.73478 9 5 9ZM27 23H5C4.73478 23 4.48043 23.1054 4.29289 23.2929C4.10536 23.4804 4 23.7348 4 24C4 24.2652 4.10536 24.5196 4.29289 24.7071C4.48043 24.8946 4.73478 25 5 25H27C27.2652 25 27.5196 24.8946 27.7071 24.7071C27.8946 24.5196 28 24.2652 28 24C28 23.7348 27.8946 23.4804 27.7071 23.2929C27.5196 23.1054 27.2652 23 27 23Z"
            fill="#383838"
          />
        </svg>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div
              className="fixed inset-0"
              style={{ background: "rgba(56, 56, 56, 0.90)" }}
              aria-hidden="true"
            />
          </Transition.Child>

          {/* Full-screen container to center the panel */}
          <div
            id="custom-scroll"
            className="fixed inset-0 flex w-screen items-start justify-start pt-[30px] overflow-y-scroll"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* The actual dialog panel  */}
              <Dialog.Panel
                className="flex max-w-[316px] p-[30px] flex-col items-start gap-[30px] rounded-[0px_10px_0px_0px] bg-white"
                style={{ flex: "1 0 0" }}
              >
                <Dialog.Title className="flex w-full self-stretch justify-between items-center">
                  <div className="w-[146.277px] h-10">
                    <img src={logo} alt="logo" />
                  </div>
                  <img
                    onClick={() => setIsOpen(false)}
                    src={prevArrow}
                    alt="prev-arrow"
                  />
                </Dialog.Title>

                {/* sidebar menus */}
                <div className="flex flex-col items-start gap-[30px] self-stretch">
                  {/* Main Menu */}
                  <div className="flex flex-col items-start gap-[15px] self-stretch">
                    <h6 className="h6-bold text-[#C7C7C7]">MAIN MENU</h6>
                    {/* Menu Items */}
                    <div className="flex flex-col items-start gap-2.5 self-stretch">
                      <Link
                        to="/dashboard"
                        className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                        style={{
                          borderRight: `${
                            currentPath.includes("dashboard") ||
                            currentPath === "/"
                              ? "5px solid #00CCB6"
                              : ""
                          }`,
                        }}
                      >
                        <div className="flex items-center gap-[15px] self-stretch">
                          <div className="w-7 h-7">
                            {currentPath.includes("dashboard") ||
                            currentPath === "/" ? (
                              <img src={dashboardIconActive} alt="dashboard" />
                            ) : (
                              <img src={dashboardIcon} alt="dashboard" />
                            )}
                          </div>
                          <h5
                            className={` ${
                              currentPath.includes("dashboard") ||
                              currentPath === "/"
                                ? "h5-bold !text-lg text-[#00CCB6]"
                                : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                            } `}
                          >
                            Dashboard
                          </h5>
                        </div>
                      </Link>
                      <ServicesMenu />
                      <MyCenterMenu />
                      <StudentsMenu />
                      <Link
                        to="/chat"
                        className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                        style={{
                          borderRight: `${
                            currentPath.includes("chat")
                              ? "5px solid #00CCB6"
                              : ""
                          }`,
                        }}
                      >
                        <div className="flex items-center gap-[15px] self-stretch">
                          <div className="w-7 h-7">
                            {currentPath.includes("chat") ? (
                              <img src={messagingIconActive} alt="messaging" />
                            ) : (
                              <img src={messagingIcon} alt="messaging" />
                            )}
                          </div>
                          <h5
                            className={` ${
                              currentPath.includes("chat")
                                ? "h5-bold !text-lg text-[#00CCB6]"
                                : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                            } `}
                          >
                            Messaging
                          </h5>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="flex justify-center items-center w-[29px] h-[29.264px] rounded-full text-[#FFFFFF] bg-[#5ECFFF]">
                            1
                          </div>
                        </div>
                      </Link>
                      <Link
                        to="/billing"
                        className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                        style={{
                          borderRight: `${
                            currentPath.includes("billing")
                              ? "5px solid #00CCB6"
                              : ""
                          }`,
                        }}
                      >
                        <div className="flex items-center gap-[15px]">
                          <div className="w-7 h-7">
                            {currentPath.includes("billing") ? (
                              <img src={billingIconActive} alt="billing" />
                            ) : (
                              <img src={billingIcon} alt="billing" />
                            )}
                          </div>
                          <h5
                            className={` ${
                              currentPath.includes("billing")
                                ? "h5-bold !text-lg text-[#00CCB6]"
                                : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                            } `}
                          >
                            Billing
                          </h5>
                        </div>
                      </Link>
                      <StaffMenu />
                      <Link
                        to="/articles"
                        className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                        style={{
                          borderRight: `${
                            currentPath.includes("articles")
                              ? "5px solid #00CCB6"
                              : ""
                          }`,
                        }}
                      >
                        <div className="flex items-center gap-[15px]">
                          <div className="w-7 h-7">
                            {currentPath.includes("articles") ? (
                              <img src={articlesIconActive} alt="articles" />
                            ) : (
                              <img src={articlesIcon} alt="articles" />
                            )}
                          </div>
                          <h5
                            className={` ${
                              currentPath.includes("articles")
                                ? "h5-bold !text-lg text-[#00CCB6]"
                                : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                            } `}
                          >
                            Articles
                          </h5>
                        </div>
                      </Link>
                      <Link
                        to="/report"
                        className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                        style={{
                          borderRight: `${
                            currentPath.includes("/report")
                              ? "5px solid #00CCB6"
                              : ""
                          }`,
                        }}
                      >
                        <div className="flex items-center gap-[15px]">
                          <div className="w-7 h-7">
                            {currentPath.includes("/report") ? (
                              <img src={reportIconActive} alt="reporting" />
                            ) : (
                              <img src={reportIcon} alt="reporting" />
                            )}
                          </div>
                          <h5
                            className={` ${
                              currentPath.includes("/report")
                                ? "h5-bold !text-lg text-[#00CCB6]"
                                : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                            } `}
                          >
                            Reporting
                          </h5>
                        </div>
                      </Link>
                      <Link
                        to="/review"
                        className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                        style={{
                          borderRight: `${
                            currentPath.includes("review")
                              ? "5px solid #00CCB6"
                              : ""
                          }`,
                        }}
                      >
                        <div className="flex items-center gap-[15px]">
                          <div className="w-7 h-7">
                            {currentPath.includes("review") ? (
                              <img src={reviewIconActive} alt="review" />
                            ) : (
                              <img src={reviewIcon} alt="review" />
                            )}
                          </div>
                          <h5
                            className={` ${
                              currentPath.includes("review")
                                ? "h5-bold !text-lg text-[#00CCB6]"
                                : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                            } `}
                          >
                            Reviews
                          </h5>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="flex justify-center items-center w-[29px] h-[29.264px] rounded-full text-[#FFFFFF] bg-[#5ECFFF]">
                            1
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Support Menu */}
                  <div className="flex flex-col items-start gap-[15px] self-stretch">
                    <h6 className="h6-bold text-[#C7C7C7]">SUPPORT MENU</h6>

                    <div className="flex flex-col items-start gap-2.5 self-stretch">
                      <SettingsMenu />
                      <Link
                        to="/support"
                        className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                        style={{
                          borderRight: `${
                            currentPath.includes("support")
                              ? "5px solid #00CCB6"
                              : ""
                          }`,
                        }}
                      >
                        <div className="flex items-center gap-[15px]">
                          <div className="w-7 h-7">
                            {currentPath.includes("support") ? (
                              <img src={supportIconActive} alt="support" />
                            ) : (
                              <img src={supportIcon} alt="support" />
                            )}
                          </div>
                          <h5
                            className={` ${
                              currentPath.includes("support")
                                ? "h5-bold !text-lg text-[#00CCB6]"
                                : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                            } `}
                          >
                            Support
                          </h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MobileSidebarModal;
