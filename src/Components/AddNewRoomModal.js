import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import plusIcon from "../Assets/circle-plus-icon.svg";

function AddNewRoomModal() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cyan-btn flex flex-row items-center "
      >
        <img src={plusIcon} alt="" />
        Add New Room
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
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
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
              <Dialog.Panel className="flex p-[30px] flex-col justify-center items-center gap-[30px] rounded-[10px] bg-[#FFF]">
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <h5 className="h5-bold text-[#202020]">Add New Room</h5>
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

                <div className="flex flex-col justify-center items-center gap-[20px] self-stretch">
                  {/* form */}
                  <div className="flex flex-col items-start justify-center gap-5 self-stretch">
                    <div className="flex w-[400px] flex-col items-start gap-2">
                      <label className="label text-[#868686]">Room Name</label>
                      <input
                        type="text"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                        placeholder="Enter Room Name"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-5 self-stretch">
                      <div
                        className="flex max-w-[200px] flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <div className="flex items-start gap-[-1] self-stretch">
                          <input
                            id=""
                            type="text"
                            className="flex max-w-[50px] h-[50px] items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                            style={{
                              flex: "1 0 0",
                              borderRadius: "10px 0px 0px 10px",
                              appearance: "none",
                            }}
                          />

                          <div
                            className="flex h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                            style={{
                              flex: "1 0 0",
                              borderRadius: "0px 10px 10px 0px",
                            }}
                          >
                            <select
                              className="text-[#111517] cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                              defaultValue={"Months"}
                            >
                              <option value="Months">Months</option>
                              {/* <option value="PM">PM</option> */}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex max-w-[200px] flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <div className="flex items-start gap-[-1] self-stretch">
                          <input
                            id=""
                            type="text"
                            className="flex max-w-[50px] h-[50px] items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                            style={{
                              flex: "1 0 0",
                              borderRadius: "10px 0px 0px 10px",
                              appearance: "none",
                            }}
                          />

                          <div
                            className="flex h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                            style={{
                              flex: "1 0 0",
                              borderRadius: "0px 10px 10px 0px",
                            }}
                          >
                            <select
                              className="text-[#111517] cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                              defaultValue={"Years"}
                            >
                              <option value="Years">Years</option>
                              {/* <option value="PM">PM</option> */}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[400px] flex-col items-start gap-2">
                      <label className="label text-[#868686]">
                        Room Capacity
                      </label>
                      <input
                        type="text"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                        placeholder="Enter Room Capacity"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col items-center justify-center gap-5 self-stretch">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="cyan-btn w-full"
                    >
                      Create New Room
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-semi text-[#878787]"
                    >
                      Cancel and close
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

export default AddNewRoomModal;
