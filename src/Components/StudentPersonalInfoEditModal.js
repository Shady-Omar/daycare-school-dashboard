import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function StudentPersonalInfoEditModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M2.10833 14.759C1.92499 14.8507 1.83333 15.1257 1.83333 15.4007V19.2507C1.83333 19.8007 2.19999 20.1673 2.74999 20.1673H6.59999C6.87499 20.1673 7.05833 20.0757 7.24166 19.8923L15.95 11.184L10.725 5.95898L2.10833 14.759ZM19.8917 5.95898L16.0417 2.10898C15.675 1.74232 15.125 1.74232 14.7583 2.10898L12.1917 4.67565L17.4167 9.90065L19.9833 7.33398C20.2583 6.96732 20.2583 6.32565 19.8917 5.95898Z"
            fill="#00CCB6"
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
                  <h5 className="h5-bold text-[#202020]">
                    Personal Information
                  </h5>
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
                  {/* Names */}
                  <div className="flex justify-center items-center gap-5 self-stretch">
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">First Name</label>
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
                      <label className="label text-[#868686]">Last Name</label>
                      <input
                        type="text"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                      />
                    </div>
                  </div>
                  {/* Student ID */}
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <label className="label text-[#868686]">Student ID</label>
                    <input
                      type="text"
                      className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                      style={{ border: "1px solid #DBDADE" }}
                    />
                  </div>
                  {/* Birthday & Age */}
                  <div className="flex justify-center items-center gap-5 self-stretch">
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">Birthday</label>
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
                      <label className="label text-[#868686]">Age</label>
                      <input
                        type="text"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                      />
                    </div>
                  </div>
                  {/* Gender & Nationality */}
                  <div className="flex justify-center items-center gap-5 self-stretch">
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">Gender</label>
                      <select
                        className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                        style={{ border: "1px solid #DBDADE" }}
                        defaultValue={"Select"}
                      >
                        <option value="Select">Select</option>
                        {/* <option value="PM">PM</option> */}
                      </select>
                    </div>
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">
                        Nationality
                      </label>
                      <select
                        className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                        style={{ border: "1px solid #DBDADE" }}
                        defaultValue={"Select"}
                      >
                        <option value="Select">Select</option>
                        {/* <option value="PM">PM</option> */}
                      </select>
                    </div>
                  </div>

                  {/* Swtich */}
                  <div className="flex flex-col justify-center items-center self-stretch">
                    {/* Vaccination */}
                    <div
                      className="flex justify-between items-start self-stretch"
                      style={{ borderBottom: "1px solid #DCDCDC" }}
                    >
                      <div
                        className="flex py-5 items-center gap-[15px] self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <p className="p-reg text-[#383838]">Vaccination</p>
                      </div>
                      <div
                        className="flex justify-end items-center gap-5 self-stretch"
                        style={{ flex: "1 0 0", padding: "20px 0px 20px 20px" }}
                      >
                        <p className="p-semi !text-[15px] text-[#00CCB6]">
                          + Add Vaccination
                        </p>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                    </div>
                    {/* Autism */}
                    <div
                      className="flex justify-between items-start self-stretch pt-3"
                      style={{ borderBottom: "1px solid #DCDCDC" }}
                    >
                      <div
                        className="flex py-5 items-center gap-[15px] self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <p className="p-reg text-[#383838]">Autism</p>
                      </div>
                      <div className="relative w-[564px] h-7 max-h-[79px]">
                        <input
                          type="range"
                          id="fader"
                          step="50"
                          min="0"
                          max="100"
                          className="w-full h-[5.175px] bg-[#FFCB37] rounded-lg appearance-none cursor-pointer "
                        />
                        <span className="text-sm text-[#A3A3A3] text-[11px] absolute start-0 -bottom-6">
                          LEVEL 1
                        </span>
                        <span className="text-sm text-[#A3A3A3] text-[11px] absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                          LEVEL 2
                        </span>

                        <span className="text-sm text-[#A3A3A3] text-[11px] absolute end-0 -bottom-6">
                          LEVEL 3
                        </span>
                      </div>
                      <div
                        className="flex justify-end items-center gap-5 self-stretch"
                        style={{ flex: "1 0 0", padding: "20px 0px 20px 20px" }}
                      >
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                    </div>
                    {/* Disability */}
                    <div
                      className="flex pb-5 flex-col items-start self-stretch"
                      style={{ borderBottom: "1px solid #DCDCDC" }}
                    >
                      {/* Top */}
                      <div className="flex h-[72px] justify-between items-start self-stretch">
                        <div
                          className="flex py-5 items-center gap-[15px] self-stretch"
                          style={{ flex: "1 0 0" }}
                        >
                          <p className="p-reg text-[#383838]">Disability</p>
                        </div>
                        <div
                          className="flex justify-end items-center gap-5 self-stretch"
                          style={{
                            flex: "1 0 0",
                            padding: "20px 0px 20px 20px",
                          }}
                        >
                          <p className="p-semi !text-[15px] text-[#00CCB6]">
                            + Add Disability
                          </p>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                          </label>
                        </div>
                      </div>
                      {/* Items */}
                      <div className="flex items-start gap-5">
                        <div className="flex flex-col items-start gap-2">
                          <div
                            className="flex h-[50px] px-[15px] items-center gap-2.5 rounded-[10px] bg-[#00CCB6]"
                            style={{ border: "1px solid #00CCB6" }}
                          >
                            <p className="label-semi text-white">
                              Congenital Heart Defects
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M12 2.5C6.5 2.5 2 7 2 12.5C2 18 6.5 22.5 12 22.5C17.5 22.5 22 18 22 12.5C22 7 17.5 2.5 12 2.5ZM15.7 14.8C16.1 15.2 16.1 15.8 15.7 16.2C15.3 16.6 14.7 16.6 14.3 16.2L12 13.9L9.7 16.2C9.3 16.6 8.7 16.6 8.3 16.2C7.9 15.8 7.9 15.2 8.3 14.8L10.6 12.5L8.3 10.2C7.9 9.8 7.9 9.2 8.3 8.8C8.7 8.4 9.3 8.4 9.7 8.8L12 11.1L14.3 8.8C14.7 8.4 15.3 8.4 15.7 8.8C16.1 9.2 16.1 9.8 15.7 10.2L13.4 12.5L15.7 14.8Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <div
                            className="flex h-[50px] px-[15px] items-center gap-2.5 rounded-[10px] bg-[#00CCB6]"
                            style={{ border: "1px solid #00CCB6" }}
                          >
                            <p className="label-semi text-white">Asthma</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M12 2.5C6.5 2.5 2 7 2 12.5C2 18 6.5 22.5 12 22.5C17.5 22.5 22 18 22 12.5C22 7 17.5 2.5 12 2.5ZM15.7 14.8C16.1 15.2 16.1 15.8 15.7 16.2C15.3 16.6 14.7 16.6 14.3 16.2L12 13.9L9.7 16.2C9.3 16.6 8.7 16.6 8.3 16.2C7.9 15.8 7.9 15.2 8.3 14.8L10.6 12.5L8.3 10.2C7.9 9.8 7.9 9.2 8.3 8.8C8.7 8.4 9.3 8.4 9.7 8.8L12 11.1L14.3 8.8C14.7 8.4 15.3 8.4 15.7 8.8C16.1 9.2 16.1 9.8 15.7 10.2L13.4 12.5L15.7 14.8Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <div
                            className="flex h-[50px] px-[15px] items-center gap-2.5 rounded-[10px] bg-[#00CCB6]"
                            style={{ border: "1px solid #00CCB6" }}
                          >
                            <p className="label-semi text-white">
                              Cystic Fibrosis
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M12 2.5C6.5 2.5 2 7 2 12.5C2 18 6.5 22.5 12 22.5C17.5 22.5 22 18 22 12.5C22 7 17.5 2.5 12 2.5ZM15.7 14.8C16.1 15.2 16.1 15.8 15.7 16.2C15.3 16.6 14.7 16.6 14.3 16.2L12 13.9L9.7 16.2C9.3 16.6 8.7 16.6 8.3 16.2C7.9 15.8 7.9 15.2 8.3 14.8L10.6 12.5L8.3 10.2C7.9 9.8 7.9 9.2 8.3 8.8C8.7 8.4 9.3 8.4 9.7 8.8L12 11.1L14.3 8.8C14.7 8.4 15.3 8.4 15.7 8.8C16.1 9.2 16.1 9.8 15.7 10.2L13.4 12.5L15.7 14.8Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Allergies */}
                    <div
                      className="flex justify-between items-start self-stretch"
                      style={{ borderBottom: "1px solid #DCDCDC" }}
                    >
                      <div
                        className="flex py-5 items-center gap-[15px] self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <p className="p-reg text-[#383838]">Allergies</p>
                      </div>
                      <div
                        className="flex justify-end items-center gap-5 self-stretch"
                        style={{ flex: "1 0 0", padding: "20px 0px 20px 20px" }}
                      >
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                    </div>
                    {/* Diseases */}
                    <div
                      className="flex justify-between items-start self-stretch"
                      style={{ borderBottom: "1px solid #DCDCDC" }}
                    >
                      <div
                        className="flex py-5 items-center gap-[15px] self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <p className="p-reg text-[#383838]">Diseases</p>
                      </div>
                      <div
                        className="flex justify-end items-center gap-5 self-stretch"
                        style={{ flex: "1 0 0", padding: "20px 0px 20px 20px" }}
                      >
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
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

export default StudentPersonalInfoEditModal;
