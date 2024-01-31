import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import reportResultPlaceholder from "../../../Assets/report-result-placeholder.png";

function ExportReportModal() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cyan-btn flex justify-center items-center gap-3 self-stretch lg:self-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.586 17.5H8V22.5H19C19.552 22.5 20 22.052 20 21.5C20 18.5 20 12.988 20 11.13C20 10.925 19.937 10.725 19.819 10.557C19.218 9.698 18.007 7.969 17.278 6.927C17.091 6.659 16.785 6.5 16.459 6.5C14.726 6.5 11.223 6.5 9 6.5C8.735 6.5 8.48 6.605 8.293 6.793C8.105 6.98 8 7.235 8 7.5V12.5C8 13.052 7.552 13.5 7 13.5C6.448 13.5 6 13.052 6 12.5C6 12.5 6 9.569 6 7.5C6 6.704 6.316 5.941 6.879 5.379C7.441 4.816 8.204 4.5 9 4.5C11.223 4.5 14.726 4.5 16.459 4.5C17.438 4.5 18.355 4.978 18.916 5.78C19.646 6.822 20.857 8.551 21.458 9.41C21.811 9.914 22 10.515 22 11.13C22 12.988 22 18.5 22 21.5C22 23.157 20.657 24.5 19 24.5C15.131 24.5 7 24.5 7 24.5C6.448 24.5 6 24.052 6 23.5C6 23.5 6 19.87 6 17.5C6 16.395 6.895 15.5 8 15.5H13.586L12.293 14.207C11.903 13.817 11.903 13.183 12.293 12.793C12.683 12.403 13.317 12.403 13.707 12.793L16.707 15.793C17.098 16.183 17.098 16.817 16.707 17.207L13.707 20.207C13.317 20.597 12.683 20.597 12.293 20.207C11.903 19.817 11.903 19.183 12.293 18.793L13.586 17.5Z"
            fill="white"
          />
        </svg>
        Export
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
              <Dialog.Panel className="flex w-[340px] lg:w-[820px] p-[30px] flex-col justify-center items-center gap-[30px] rounded-[10px] bg-[#FFF]">
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <h5 className="h5-bold text-[#202020]">Export Report</h5>
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

                <div className="flex flex-col justify-center items-center gap-[30px] self-stretch">
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <label className="label text-[#868686]">File</label>
                    <select
                      className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                      style={{ border: "1px solid #DBDADE" }}
                      defaultValue={"Select File Type"}
                    >
                      <option value="Select File Type">Select File Type</option>
                      {/* <option value="PM">PM</option> */}
                    </select>
                  </div>
                  {/* Form */}
                  <div className="flex flex-col lg:flex-row items-end gap-2.5 self-stretch">
                    <div
                      className="flex flex-col items-start gap-2 self-stretch"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">
                        Select Recipient
                      </label>
                      <input
                        type="text"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                        placeholder="Enter recipient name"
                      />
                    </div>
                    <button className="white-btn self-stretch lg:self-auto lg:w-[120px]">
                      Add
                    </button>
                  </div>
                  {/* Results */}
                  <div className="flex py-[15px] flex-col items-start gap-[15px] self-stretch rounded-[10px] bg-white">
                    <div
                      className="flex pb-[15px] justify-between items-center self-stretch"
                      style={{ borderBottom: "1px solid #EBEBEB" }}
                    >
                      {/* Profile */}
                      <div className="flex items-center gap-[15px]">
                        {/* Photo */}
                        <div className="flex w-[45px] h-[45px] justify-center items-start gap-2.5">
                          <img src={reportResultPlaceholder} alt="" />
                        </div>
                        {/* Name */}
                        <div className="flex flex-col justify-center items-start gap-[5px]">
                          <p className="p-bold text-[#383838]">
                            Mohammad Ishtiyaq Al Rasyid
                          </p>
                          <p className="label-reg text-[#878787]">
                            moh.ishtiyaq@email.com
                          </p>
                        </div>
                      </div>
                      {/* Delete Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_164_21242)">
                          <path
                            d="M6.99992 22.6667C6.99992 23.9558 8.04409 25 9.33325 25H18.6666C19.9558 25 20.9999 23.9558 20.9999 22.6667V8.66667H6.99992V22.6667ZM22.1666 5.16667H18.0833L16.9166 4H11.0833L9.91659 5.16667H5.83325V7.5H22.1666V5.16667Z"
                            fill="#A4A4A4"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_164_21242">
                            <rect
                              width="28"
                              height="28"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className="flex pb-[15px] justify-between items-center self-stretch"
                      style={{ borderBottom: "1px solid #EBEBEB" }}
                    >
                      {/* Profile */}
                      <div className="flex items-center gap-[15px]">
                        {/* Photo */}
                        <div className="flex w-[45px] h-[45px] justify-center items-start gap-2.5">
                          <img src={reportResultPlaceholder} alt="" />
                        </div>
                        {/* Name */}
                        <div className="flex flex-col justify-center items-start gap-[5px]">
                          <p className="p-bold text-[#383838]">
                            Mohammad Ishtiyaq Al Rasyid
                          </p>
                          <p className="label-reg text-[#878787]">
                            moh.ishtiyaq@email.com
                          </p>
                        </div>
                      </div>
                      {/* Delete Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_164_21242)">
                          <path
                            d="M6.99992 22.6667C6.99992 23.9558 8.04409 25 9.33325 25H18.6666C19.9558 25 20.9999 23.9558 20.9999 22.6667V8.66667H6.99992V22.6667ZM22.1666 5.16667H18.0833L16.9166 4H11.0833L9.91659 5.16667H5.83325V7.5H22.1666V5.16667Z"
                            fill="#A4A4A4"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_164_21242">
                            <rect
                              width="28"
                              height="28"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className="flex pb-[15px] justify-between items-center self-stretch"
                      style={{ borderBottom: "1px solid #EBEBEB" }}
                    >
                      {/* Profile */}
                      <div className="flex items-center gap-[15px]">
                        {/* Photo */}
                        <div className="flex w-[45px] h-[45px] justify-center items-start gap-2.5">
                          <img src={reportResultPlaceholder} alt="" />
                        </div>
                        {/* Name */}
                        <div className="flex flex-col justify-center items-start gap-[5px]">
                          <p className="p-bold text-[#383838]">
                            Mohammad Ishtiyaq Al Rasyid
                          </p>
                          <p className="label-reg text-[#878787]">
                            moh.ishtiyaq@email.com
                          </p>
                        </div>
                      </div>
                      {/* Delete Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_164_21242)">
                          <path
                            d="M6.99992 22.6667C6.99992 23.9558 8.04409 25 9.33325 25H18.6666C19.9558 25 20.9999 23.9558 20.9999 22.6667V8.66667H6.99992V22.6667ZM22.1666 5.16667H18.0833L16.9166 4H11.0833L9.91659 5.16667H5.83325V7.5H22.1666V5.16667Z"
                            fill="#A4A4A4"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_164_21242">
                            <rect
                              width="28"
                              height="28"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col items-center justify-center gap-5 self-stretch">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="cyan-btn w-full"
                    >
                      Email
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="white-btn w-full"
                    >
                      Download
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

export default ExportReportModal;
