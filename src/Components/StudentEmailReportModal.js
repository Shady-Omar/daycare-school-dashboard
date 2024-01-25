import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import reportResultPlaceholder from "../Assets/report-result-placeholder.png";
import SendStudentReportToModal from "./SendStudentReportToModal";

function StudentEmailReportModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="cyan-btn w-[340px]">
        Email Report
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
          <div className="fixed inset-0 flex w-screen items-center justify-center p-5">
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
              <Dialog.Panel className="flex min-w-[820px] p-[30px] flex-col justify-center items-center gap-[30px] rounded-[10px] bg-[#FFF]">
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <div className="flex flex-col items-start">
                    <h5 className="h5-bold text-[#383838]">Daily Report</h5>
                    <p className="p-reg text-[#383838]">September 25, 2023</p>
                  </div>
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
                  {/* Student Card */}
                  <div
                    className="flex justify-between p-[15px] items-center self-stretch rounded-[10px] bg-white"
                    style={{ border: "1px solid #DCDCDC" }}
                  >
                    {/* Profile */}
                    <div className="flex items-center gap-2.5">
                      {/* Photo */}
                      <div className="flex w-[45px] h-[45px] justify-center items-start gap-2.5">
                        <img src={reportResultPlaceholder} alt="" />
                      </div>
                      {/* Name */}
                      <div className="flex flex-col justify-center items-start">
                        <p className="p-bold text-[#383838]">
                          Mohammad Ishtiyaq
                        </p>
                        <p className="label-reg text-[#878787]">
                          Birth Date: 27/10/2023
                        </p>
                      </div>
                    </div>
                    <p className="label-reg text-[#878787]">Class: 1</p>
                  </div>
                  {/* Daily activity */}
                  <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
                    {/* label */}
                    <div className="flex items-start gap-1 self-stretch">
                      <p className="label text-[#868686]">Daily activity</p>
                    </div>
                    {/* row */}
                    <div
                      className="flex justify-between items-start self-stretch"
                      style={{ borderBottom: "1px solid #EBEBEB" }}
                    >
                      <div
                        className="flex py-5 items-center gap-[15px] self-stretch"
                        style={{ flex: "1 0 0" }}
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
                            d="M14 26.1654C20.4435 26.1654 25.6667 20.9422 25.6667 14.4987C25.6667 8.0552 20.4435 2.83203 14 2.83203C7.55654 2.83203 2.33337 8.0552 2.33337 14.4987C2.33337 20.9422 7.55654 26.1654 14 26.1654ZM18.1254 10.3734C18.3444 10.1546 18.6414 10.0318 18.951 10.032C19.2606 10.0323 19.5574 10.1555 19.7762 10.3745C19.995 10.5936 20.1177 10.8906 20.1175 11.2002C20.1173 11.5098 19.9941 11.8066 19.775 12.0254L13.1799 18.6205L13.1752 18.6252C13.0671 18.7339 12.9386 18.8202 12.797 18.8791C12.6555 18.9379 12.5037 18.9682 12.3504 18.9682C12.1971 18.9682 12.0453 18.9379 11.9037 18.8791C11.7622 18.8202 11.6336 18.7339 11.5255 18.6252L11.5209 18.6205L8.22504 15.3247C8.11361 15.2171 8.02473 15.0883 7.96359 14.946C7.90245 14.8037 7.87026 14.6506 7.86892 14.4957C7.86757 14.3408 7.89709 14.1871 7.95575 14.0438C8.01441 13.9004 8.10104 13.7701 8.21058 13.6606C8.32012 13.551 8.45038 13.4644 8.59376 13.4057C8.73714 13.3471 8.89077 13.3176 9.04568 13.3189C9.20059 13.3203 9.35367 13.3524 9.49601 13.4136C9.63835 13.4747 9.76709 13.5636 9.87471 13.675L12.3504 16.1495L18.1254 10.3745V10.3734Z"
                            fill="#00CCB6"
                          />
                        </svg>
                        <h5 className="h5-bold text-[#383838]">
                          Abdullah Checked In
                        </h5>
                      </div>
                      <div
                        className="flex p-5 items-start gap-2.5 self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <h5 className="h5-med text-[#646464]">
                          In Demo Room by Abdullah Bilal
                        </h5>
                      </div>
                    </div>
                    {/* row */}
                    <div
                      className="flex justify-between items-start self-stretch"
                      style={{ borderBottom: "1px solid #EBEBEB" }}
                    >
                      <div
                        className="flex py-5 items-center gap-[15px] self-stretch"
                        style={{ flex: "1 0 0" }}
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
                            d="M14 26.1654C20.4435 26.1654 25.6667 20.9422 25.6667 14.4987C25.6667 8.0552 20.4435 2.83203 14 2.83203C7.55654 2.83203 2.33337 8.0552 2.33337 14.4987C2.33337 20.9422 7.55654 26.1654 14 26.1654ZM18.1254 10.3734C18.3444 10.1546 18.6414 10.0318 18.951 10.032C19.2606 10.0323 19.5574 10.1555 19.7762 10.3745C19.995 10.5936 20.1177 10.8906 20.1175 11.2002C20.1173 11.5098 19.9941 11.8066 19.775 12.0254L13.1799 18.6205L13.1752 18.6252C13.0671 18.7339 12.9386 18.8202 12.797 18.8791C12.6555 18.9379 12.5037 18.9682 12.3504 18.9682C12.1971 18.9682 12.0453 18.9379 11.9037 18.8791C11.7622 18.8202 11.6336 18.7339 11.5255 18.6252L11.5209 18.6205L8.22504 15.3247C8.11361 15.2171 8.02473 15.0883 7.96359 14.946C7.90245 14.8037 7.87026 14.6506 7.86892 14.4957C7.86757 14.3408 7.89709 14.1871 7.95575 14.0438C8.01441 13.9004 8.10104 13.7701 8.21058 13.6606C8.32012 13.551 8.45038 13.4644 8.59376 13.4057C8.73714 13.3471 8.89077 13.3176 9.04568 13.3189C9.20059 13.3203 9.35367 13.3524 9.49601 13.4136C9.63835 13.4747 9.76709 13.5636 9.87471 13.675L12.3504 16.1495L18.1254 10.3745V10.3734Z"
                            fill="#00CCB6"
                          />
                        </svg>
                        <h5 className="h5-bold text-[#383838]">Diaper</h5>
                      </div>
                      <div
                        className="flex p-5 items-start gap-2.5 self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <h5 className="h5-med text-[#646464]">
                          by Abdullah Bilal
                        </h5>
                      </div>
                    </div>
                    {/* row */}
                    <div
                      className="flex justify-between items-start self-stretch"
                      style={{ borderBottom: "1px solid #EBEBEB" }}
                    >
                      <div
                        className="flex py-5 items-center gap-[15px] self-stretch"
                        style={{ flex: "1 0 0" }}
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
                            d="M14 26.1654C20.4435 26.1654 25.6667 20.9422 25.6667 14.4987C25.6667 8.0552 20.4435 2.83203 14 2.83203C7.55654 2.83203 2.33337 8.0552 2.33337 14.4987C2.33337 20.9422 7.55654 26.1654 14 26.1654ZM18.1254 10.3734C18.3444 10.1546 18.6414 10.0318 18.951 10.032C19.2606 10.0323 19.5574 10.1555 19.7762 10.3745C19.995 10.5936 20.1177 10.8906 20.1175 11.2002C20.1173 11.5098 19.9941 11.8066 19.775 12.0254L13.1799 18.6205L13.1752 18.6252C13.0671 18.7339 12.9386 18.8202 12.797 18.8791C12.6555 18.9379 12.5037 18.9682 12.3504 18.9682C12.1971 18.9682 12.0453 18.9379 11.9037 18.8791C11.7622 18.8202 11.6336 18.7339 11.5255 18.6252L11.5209 18.6205L8.22504 15.3247C8.11361 15.2171 8.02473 15.0883 7.96359 14.946C7.90245 14.8037 7.87026 14.6506 7.86892 14.4957C7.86757 14.3408 7.89709 14.1871 7.95575 14.0438C8.01441 13.9004 8.10104 13.7701 8.21058 13.6606C8.32012 13.551 8.45038 13.4644 8.59376 13.4057C8.73714 13.3471 8.89077 13.3176 9.04568 13.3189C9.20059 13.3203 9.35367 13.3524 9.49601 13.4136C9.63835 13.4747 9.76709 13.5636 9.87471 13.675L12.3504 16.1495L18.1254 10.3745V10.3734Z"
                            fill="#00CCB6"
                          />
                        </svg>
                        <h5 className="h5-bold text-[#383838]">Teething</h5>
                      </div>
                      <div
                        className="flex p-5 items-start gap-2.5 self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <h5 className="h5-med text-[#646464]">
                          by Abdullah Bilal
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-center gap-[30px] self-stretch">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="white-btn flex justify-center w-full items-center gap-3"
                    >
                      Print
                    </button>
                    <SendStudentReportToModal />
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

export default StudentEmailReportModal;
