import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function StudentRenewContractModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="cyan-btn self-stretch">
        Renew Contract
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
            className="fixed inset-0 flex w-screen items-start justify-center p-10 overflow-y-scroll"
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
              <Dialog.Panel className="flex w-[892px] p-[30px] flex-col justify-center items-center gap-[50px] rounded-[10px] bg-[#FFF]">
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <h5 className="h5-bold text-[#202020]">Renew Contract</h5>
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

                <div className="flex flex-col justify-center items-center gap-5 self-stretch">
                  {/* Student Name */}
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <label className="label text-[#868686]">
                      Name of Student
                    </label>
                    <input
                      type="text"
                      className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                      style={{ border: "1px solid #DBDADE" }}
                    />
                  </div>
                  {/* Plan Type */}
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <label className="label text-[#868686]">Plan Type</label>
                    <select
                      className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                      style={{ border: "1px solid #DBDADE" }}
                      defaultValue={"Daily"}
                    >
                      <option value="Daily">Daily</option>
                      {/* <option value="PM">PM</option> */}
                    </select>
                  </div>
                  {/* Plan Timing */}
                  <div className="flex items-end gap-2.5 self-stretch">
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">
                        Plan Timing
                      </label>
                      <select
                        className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                        style={{ border: "1px solid #DBDADE" }}
                        defaultValue={"Morning"}
                      >
                        <option value="Morning">Morning</option>
                        {/* <option value="PM">PM</option> */}
                      </select>
                    </div>
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <div className="flex items-start gap-[-1] self-stretch">
                        <input
                          id=""
                          type="text"
                          className="flex w-full  h-[50px] items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                          style={{
                            flex: "1 0 0",
                            borderRadius: "10px 0px 0px 10px",
                            appearance: "none",
                          }}
                        />

                        <div
                          className="flex max-w-[85px] h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                          style={{
                            flex: "1 0 0",
                            borderRadius: "0px 10px 10px 0px",
                          }}
                        >
                          <select
                            id="timing"
                            className="text-[#878787] p-reg cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                            defaultValue={"AM"}
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <div className="flex items-start gap-[-1] self-stretch">
                        <input
                          id=""
                          type="text"
                          className="flex w-full  h-[50px] items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                          style={{
                            flex: "1 0 0",
                            borderRadius: "10px 0px 0px 10px",
                            appearance: "none",
                          }}
                        />

                        <div
                          className="flex max-w-[85px] h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                          style={{
                            flex: "1 0 0",
                            borderRadius: "0px 10px 10px 0px",
                          }}
                        >
                          <select
                            id="timing"
                            className="text-[#878787] p-reg cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                            defaultValue={"AM"}
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Start & End Dates */}
                  <div className="flex justify-center items-center gap-5 self-stretch">
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">Start Date</label>
                      <input
                        type="date"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                      />
                    </div>
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">End Date</label>
                      <input
                        type="date"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#EDEDED]"
                        style={{ border: "1px solid #DBDADE" }}
                        disabled
                      />
                    </div>
                  </div>
                  {/* Amount & Payment */}
                  <div className="flex justify-center items-center gap-5 self-stretch">
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">Amount</label>
                      <input
                        type="text"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                      />
                    </div>
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">
                        Payment Status
                      </label>
                      <select
                        className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                        style={{ border: "1px solid #DBDADE" }}
                        defaultValue={"Paid"}
                      >
                        <option value="Paid">Paid</option>
                        {/* <option value="PM">PM</option> */}
                      </select>
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="flex flex-col items-center justify-center gap-5 self-stretch">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="cyan-btn flex justify-center w-full items-center gap-3"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-semi text-[#878787]"
                  >
                    Cancel and close
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

export default StudentRenewContractModal;
