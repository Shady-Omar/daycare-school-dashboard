import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import circlePlusIcon from "../../../Assets/circle-plus-icon.svg";

function AddDiscountModal() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cyan-btn flex justify-center items-center py-2.5 px-5 gap-3 w-full self-stretch"
      >
        <img src={circlePlusIcon} alt="plus" />
        Add Discount
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
            className="fixed inset-0 flex w-screen items-start lg:items-center justify-center p-5 overflow-y-scroll"
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
              <Dialog.Panel className="flex w-[340px] lg:w-[874px] p-[30px] flex-col justify-center items-center gap-10 rounded-[10px] bg-[#FFF]">
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <h5 className="h5-bold text-[#202020]">Add Discount</h5>
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

                <div className="flex flex-col items-start gap-5 self-stretch">
                  <div className="flex lg:grid grid-cols-3 flex-col items-start content-start gap-5 self-stretch">
                    <div
                      className="flex self-stretch flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">
                        Discount Name
                      </label>
                      <input
                        type="text"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                        placeholder="Enter Discount Name"
                      />
                    </div>
                    <div
                      className="flex self-stretch flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">
                        Discount Quantity
                      </label>
                      <input
                        type="text"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                        placeholder="Enter Discount Quantity"
                      />
                    </div>
                    <div
                      className="flex self-stretch flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">
                        Discount Type
                      </label>
                      <select
                        className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                        style={{ border: "1px solid #DBDADE" }}
                        defaultValue={"% (Percentage)"}
                      >
                        <option value="% (Percentage)">% (Percentage)</option>
                        {/* <option value="PM">PM</option> */}
                      </select>
                    </div>
                  </div>
                  <div className="flex lg:grid grid-cols-2 flex-col items-start content-start gap-5 self-stretch">
                    <div
                      className="flex self-stretch flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">Start Date</label>
                      <input
                        type="date"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                        placeholder="Enter Discount Name"
                      />
                    </div>
                    <div
                      className="flex self-stretch flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">
                        Discount Expiry
                      </label>
                      <input
                        type="date"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                        placeholder="Enter Discount Name"
                      />
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="flex flex-col items-center justify-center gap-5 self-stretch">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="cyan-btn w-full"
                  >
                    Add Discount
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-semi text-[#878787]"
                  >
                    Cancel and back to profile
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default AddDiscountModal;