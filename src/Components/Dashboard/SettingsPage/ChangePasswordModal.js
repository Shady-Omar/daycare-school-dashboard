import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import showEye from "../../../Assets/eye-icon.svg";
import HideEye from "../../../Assets/eye-icon-2.svg";
import greenCheck from "../../../Assets/green-check.svg";

function ChangePasswordModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Show password Visibility:
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="white-btn self-stretch lg:self-auto"
      >
        Change Password
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
            className="fixed inset-0 flex w-screen items-start overflow-y-scroll justify-center p-5"
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
                className="flex w-[340px] lg:w-auto flex-col justify-center items-center gap-10 rounded-[10px] bg-[#FFF]"
                style={{ padding: "30px 30px 60px 30px" }}
              >
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <h5 className="h5-bold text-[#202020]">Change Password</h5>
                  <button onClick={() => setIsOpen(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <path
                        d="M14.0002 2.8335C7.5835 2.8335 2.3335 8.0835 2.3335 14.5002C2.3335 20.9168 7.5835 26.1668 14.0002 26.1668C20.4168 26.1668 25.6668 20.9168 25.6668 14.5002C25.6668 8.0835 20.4168 2.8335 14.0002 2.8335ZM18.3168 17.1835C18.7835 17.6502 18.7835 18.3502 18.3168 18.8168C17.8502 19.2835 17.1502 19.2835 16.6835 18.8168L14.0002 16.1335L11.3168 18.8168C10.8502 19.2835 10.1502 19.2835 9.6835 18.8168C9.21683 18.3502 9.21683 17.6502 9.6835 17.1835L12.3668 14.5002L9.6835 11.8168C9.21683 11.3502 9.21683 10.6502 9.6835 10.1835C10.1502 9.71683 10.8502 9.71683 11.3168 10.1835L14.0002 12.8668L16.6835 10.1835C17.1502 9.71683 17.8502 9.71683 18.3168 10.1835C18.7835 10.6502 18.7835 11.3502 18.3168 11.8168L15.6335 14.5002L18.3168 17.1835Z"
                        fill="#A4A4A4"
                      />
                    </svg>
                  </button>
                </Dialog.Title>

                <div className="flex flex-col justify-center items-start gap-5 self-stretch">
                  <div className="flex self-stretch lg:w-[310px] flex-col items-start gap-2">
                    <label className="label text-[#868686]">
                      Current Password
                    </label>
                    <input
                      type="text"
                      className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                      style={{ border: "1px solid #DBDADE" }}
                      placeholder=""
                    />
                  </div>
                  <div className="flex self-stretch lg:w-[310px] flex-col items-start gap-2 relative">
                    <label className="label text-[#868686]">New Password</label>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Your Password"
                      className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
                    />
                    <span
                      className="absolute "
                      style={{
                        cursor: "pointer",
                        right: "5%",
                        top: "44.625px",
                      }}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <img
                          className="max-w-[15px] max-h-[15px]"
                          src={showEye}
                          alt="show password"
                        />
                      ) : (
                        <img
                          className="max-w-[15px] max-h-[15px]"
                          src={HideEye}
                          alt="hide password"
                        />
                      )}
                    </span>
                  </div>
                  <div className="flex self-stretch lg:w-[310px] flex-col items-start gap-2 relative">
                    <label className="label text-[#868686]">
                      Confirm Password
                    </label>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Your Password"
                      className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
                    />
                    <span
                      className="absolute "
                      style={{
                        cursor: "pointer",
                        right: "5%",
                        top: "44.625px",
                      }}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <img
                          className="max-w-[15px] max-h-[15px]"
                          src={showEye}
                          alt="show password"
                        />
                      ) : (
                        <img
                          className="max-w-[15px] max-h-[15px]"
                          src={HideEye}
                          alt="hide password"
                        />
                      )}
                    </span>
                  </div>

                  <div className="flex flex-col w-full gap-3">
                    <p className="pass-req text-[#979DA3]">
                      YOUR PASSWORD MUST CONTAIN
                    </p>
                    <div className="flex flex-col w-full gap-3">
                      <p className="flex flex-row reqs gap-3">
                        <img src={greenCheck} alt="" />
                        Between 8 and 20 characters
                      </p>
                      <p className="flex flex-row reqs gap-3">
                        <img src={greenCheck} alt="" />1 upper case letter
                      </p>
                      <p className="flex flex-row reqs gap-3">
                        <img src={greenCheck} alt="" />1 or more numbers
                      </p>
                      <p className="flex flex-row reqs gap-3">
                        <img src={greenCheck} alt="" />1 or more special
                        characters
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col items-center justify-center gap-5 self-stretch">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="cyan-btn self-stretch"
                    >
                      Change Password
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-semi text-[#878787]"
                    >
                      Cancel and back to profile
                    </button>
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

export default ChangePasswordModal;
