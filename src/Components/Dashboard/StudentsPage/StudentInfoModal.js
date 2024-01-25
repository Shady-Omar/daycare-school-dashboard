import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import actionArrow from "../../../Assets/action-arrow.svg";

function StudentInfoModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex flex-col justify-center items-start gap-2"
      >
        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
          Actions
          <img src={actionArrow} alt="action" />
        </div>
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
            className="fixed inset-0 flex w-screen items-start justify-center p-5 overflow-y-scroll"
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
              <Dialog.Panel className="flex w-[340px] lg:w-[1143px] p-[30px] flex-col justify-center items-center gap-[30px] rounded-[10px] bg-[#FFF]">
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <h5 className="h5-bold text-[#202020]">Students Info</h5>
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
                  {/* Student info */}
                  <div className="flex flex-col items-center justify-center gap-5 self-stretch">
                    <div className="flex lg:grid grid-cols-4 flex-col justify-center items-center content-center gap-5 self-stretch">
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          ID Number
                        </label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
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
                        className="flex col-span-2 self-stretch flex-col items-start gap-2"
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
                      <div
                        className="flex col-span-2 self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Family Info */}
                  <div className="flex flex-col items-start justify-center gap-5 self-stretch">
                    <p className="label text-[#383838]">FAMILY info</p>
                    <div className="flex lg:grid grid-cols-3 flex-col justify-center items-center content-center gap-5 self-stretch">
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div
                        className="flex flex-col items-start gap-2 self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">Relation</label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                          placeholder="Enter Relation"
                        />
                      </div>
                      <div className="flex flex-col-reverse lg:flex-row col-span-3 gap-[20px] self-stretch">
                        <div
                          className="flex flex-col items-start gap-2 self-stretch"
                          style={{ flex: "1 0 0" }}
                        >
                          <label className="label text-[#868686]">
                            phone number
                          </label>
                          <input
                            type="text"
                            className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                            style={{ border: "1px solid #DBDADE" }}
                            placeholder="Enter phone number"
                          />
                        </div>
                        <div
                          className="flex flex-col items-start gap-2 self-stretch"
                          style={{ flex: "1 0 0" }}
                        >
                          <label className="label text-[#868686]">
                            Email Address
                          </label>
                          <input
                            type="text"
                            className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                            style={{ border: "1px solid #DBDADE" }}
                            placeholder="Enter First Name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Health */}
                  <div className="flex flex-col items-start justify-center gap-5 self-stretch">
                    <p className="label text-[#383838]">Health</p>
                    <div className="flex lg:grid grid-cols-4 flex-col justify-center items-center content-center gap-5 self-stretch">
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          Vaccination
                        </label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                        />
                      </div>
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">Autism</label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                        />
                      </div>
                      <div
                        className="flex flex-col items-start gap-2 self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          Disability
                        </label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                        />
                      </div>
                      <div
                        className="flex flex-col items-start gap-2 self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          Allergies
                        </label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                        />
                      </div>
                      <div
                        className="flex flex-col items-start gap-2 self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">Disease</label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Attachments */}
                  <div className="flex flex-col items-start justify-center gap-5 self-stretch">
                    <p className="label text-[#383838]">Attachments</p>
                    <div className="flex lg:grid grid-cols-4 flex-col justify-center items-center content-center gap-5 self-stretch">
                      <div
                        className="flex h-[45px] self-stretch rounded-[5px] shrink-0 justify-center items-center relative"
                        style={{ background: "rgba(0, 204, 182, 0.23)" }}
                      >
                        <svg
                          className="absolute left-[10%]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="30"
                          viewBox="0 0 25 30"
                          fill="none"
                        >
                          <path
                            d="M17.0046 0.231855C16.8599 0.0869531 16.6615 0 16.4559 0H4.1464C1.87487 0 0 1.77539 0 3.93469V26.0651C0 28.2246 1.87493 30 4.14634 30H20.8536C23.1251 30 25 28.2246 25 26.0651V8.49258C25 8.30426 24.9085 8.1232 24.779 7.98539L17.0046 0.231855ZM17.2256 2.55803L22.4315 7.75359H19.0473C18.0412 7.75359 17.2256 6.98543 17.2256 6.029V2.55803ZM20.8536 28.5507H4.14634C2.72113 28.5507 1.52438 27.4276 1.52438 26.0651V3.93469C1.52438 2.57971 2.71342 1.44926 4.14634 1.44926H15.7012V6.02894C15.7012 7.78975 17.1953 9.20285 19.0473 9.20285H23.4756V26.0651C23.4756 27.4276 22.2865 28.5507 20.8536 28.5507Z"
                            fill="#00CCB6"
                          />
                          <path
                            d="M18.7738 23.551H6.22801C5.80892 23.551 5.46582 23.8769 5.46582 24.2756C5.46582 24.6741 5.80886 25.0003 6.22801 25.0003H18.7815C19.2006 25.0003 19.5437 24.6741 19.5437 24.2756C19.5437 23.8769 19.2006 23.551 18.7738 23.551ZM11.9445 20.9495C12.0895 21.0944 12.2876 21.1813 12.5009 21.1813C12.7144 21.1813 12.9126 21.0944 13.0573 20.9495L17.5238 16.3915C17.8134 16.1015 17.7905 15.6379 17.4857 15.3698C17.1807 15.0945 16.693 15.116 16.4111 15.406L13.263 18.6161V10.7031C13.263 10.3044 12.92 9.97852 12.5009 9.97852C12.0818 9.97852 11.7387 10.3044 11.7387 10.7031V18.6161L8.59839 15.406C8.30873 15.1162 7.8285 15.0945 7.52367 15.3698C7.21891 15.6452 7.19604 16.1018 7.48565 16.3915L11.9445 20.9495Z"
                            fill="#00CCB6"
                          />
                        </svg>
                        <p className="text-[#00CCB6] p-bold !text-[15px]">
                          ID CARD
                        </p>
                      </div>
                      <div
                        className="flex h-[45px] self-stretch rounded-[5px] shrink-0 justify-center items-center relative"
                        style={{ background: "rgba(0, 204, 182, 0.23)" }}
                      >
                        <svg
                          className="absolute left-[10%]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="30"
                          viewBox="0 0 25 30"
                          fill="none"
                        >
                          <path
                            d="M17.0046 0.231855C16.8599 0.0869531 16.6615 0 16.4559 0H4.1464C1.87487 0 0 1.77539 0 3.93469V26.0651C0 28.2246 1.87493 30 4.14634 30H20.8536C23.1251 30 25 28.2246 25 26.0651V8.49258C25 8.30426 24.9085 8.1232 24.779 7.98539L17.0046 0.231855ZM17.2256 2.55803L22.4315 7.75359H19.0473C18.0412 7.75359 17.2256 6.98543 17.2256 6.029V2.55803ZM20.8536 28.5507H4.14634C2.72113 28.5507 1.52438 27.4276 1.52438 26.0651V3.93469C1.52438 2.57971 2.71342 1.44926 4.14634 1.44926H15.7012V6.02894C15.7012 7.78975 17.1953 9.20285 19.0473 9.20285H23.4756V26.0651C23.4756 27.4276 22.2865 28.5507 20.8536 28.5507Z"
                            fill="#00CCB6"
                          />
                          <path
                            d="M18.7738 23.551H6.22801C5.80892 23.551 5.46582 23.8769 5.46582 24.2756C5.46582 24.6741 5.80886 25.0003 6.22801 25.0003H18.7815C19.2006 25.0003 19.5437 24.6741 19.5437 24.2756C19.5437 23.8769 19.2006 23.551 18.7738 23.551ZM11.9445 20.9495C12.0895 21.0944 12.2876 21.1813 12.5009 21.1813C12.7144 21.1813 12.9126 21.0944 13.0573 20.9495L17.5238 16.3915C17.8134 16.1015 17.7905 15.6379 17.4857 15.3698C17.1807 15.0945 16.693 15.116 16.4111 15.406L13.263 18.6161V10.7031C13.263 10.3044 12.92 9.97852 12.5009 9.97852C12.0818 9.97852 11.7387 10.3044 11.7387 10.7031V18.6161L8.59839 15.406C8.30873 15.1162 7.8285 15.0945 7.52367 15.3698C7.21891 15.6452 7.19604 16.1018 7.48565 16.3915L11.9445 20.9495Z"
                            fill="#00CCB6"
                          />
                        </svg>
                        <p className="text-[#00CCB6] p-bold !text-[15px]">
                          VACCINES
                        </p>
                      </div>
                      <div
                        className="flex h-[45px] self-stretch rounded-[5px] shrink-0 justify-center items-center relative"
                        style={{ background: "rgba(0, 204, 182, 0.23)" }}
                      >
                        <svg
                          className="absolute left-[10%]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="30"
                          viewBox="0 0 25 30"
                          fill="none"
                        >
                          <path
                            d="M17.0046 0.231855C16.8599 0.0869531 16.6615 0 16.4559 0H4.1464C1.87487 0 0 1.77539 0 3.93469V26.0651C0 28.2246 1.87493 30 4.14634 30H20.8536C23.1251 30 25 28.2246 25 26.0651V8.49258C25 8.30426 24.9085 8.1232 24.779 7.98539L17.0046 0.231855ZM17.2256 2.55803L22.4315 7.75359H19.0473C18.0412 7.75359 17.2256 6.98543 17.2256 6.029V2.55803ZM20.8536 28.5507H4.14634C2.72113 28.5507 1.52438 27.4276 1.52438 26.0651V3.93469C1.52438 2.57971 2.71342 1.44926 4.14634 1.44926H15.7012V6.02894C15.7012 7.78975 17.1953 9.20285 19.0473 9.20285H23.4756V26.0651C23.4756 27.4276 22.2865 28.5507 20.8536 28.5507Z"
                            fill="#00CCB6"
                          />
                          <path
                            d="M18.7738 23.551H6.22801C5.80892 23.551 5.46582 23.8769 5.46582 24.2756C5.46582 24.6741 5.80886 25.0003 6.22801 25.0003H18.7815C19.2006 25.0003 19.5437 24.6741 19.5437 24.2756C19.5437 23.8769 19.2006 23.551 18.7738 23.551ZM11.9445 20.9495C12.0895 21.0944 12.2876 21.1813 12.5009 21.1813C12.7144 21.1813 12.9126 21.0944 13.0573 20.9495L17.5238 16.3915C17.8134 16.1015 17.7905 15.6379 17.4857 15.3698C17.1807 15.0945 16.693 15.116 16.4111 15.406L13.263 18.6161V10.7031C13.263 10.3044 12.92 9.97852 12.5009 9.97852C12.0818 9.97852 11.7387 10.3044 11.7387 10.7031V18.6161L8.59839 15.406C8.30873 15.1162 7.8285 15.0945 7.52367 15.3698C7.21891 15.6452 7.19604 16.1018 7.48565 16.3915L11.9445 20.9495Z"
                            fill="#00CCB6"
                          />
                        </svg>
                        <p className="text-[#00CCB6] p-bold !text-[15px]">
                          BIRTH CERTIFICATE
                        </p>
                      </div>
                      <div
                        className="flex h-[45px] self-stretch rounded-[5px] shrink-0 justify-center items-center relative"
                        style={{ background: "rgba(0, 204, 182, 0.23)" }}
                      >
                        <svg
                          className="absolute left-[10%]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="30"
                          viewBox="0 0 25 30"
                          fill="none"
                        >
                          <path
                            d="M17.0046 0.231855C16.8599 0.0869531 16.6615 0 16.4559 0H4.1464C1.87487 0 0 1.77539 0 3.93469V26.0651C0 28.2246 1.87493 30 4.14634 30H20.8536C23.1251 30 25 28.2246 25 26.0651V8.49258C25 8.30426 24.9085 8.1232 24.779 7.98539L17.0046 0.231855ZM17.2256 2.55803L22.4315 7.75359H19.0473C18.0412 7.75359 17.2256 6.98543 17.2256 6.029V2.55803ZM20.8536 28.5507H4.14634C2.72113 28.5507 1.52438 27.4276 1.52438 26.0651V3.93469C1.52438 2.57971 2.71342 1.44926 4.14634 1.44926H15.7012V6.02894C15.7012 7.78975 17.1953 9.20285 19.0473 9.20285H23.4756V26.0651C23.4756 27.4276 22.2865 28.5507 20.8536 28.5507Z"
                            fill="#00CCB6"
                          />
                          <path
                            d="M18.7738 23.551H6.22801C5.80892 23.551 5.46582 23.8769 5.46582 24.2756C5.46582 24.6741 5.80886 25.0003 6.22801 25.0003H18.7815C19.2006 25.0003 19.5437 24.6741 19.5437 24.2756C19.5437 23.8769 19.2006 23.551 18.7738 23.551ZM11.9445 20.9495C12.0895 21.0944 12.2876 21.1813 12.5009 21.1813C12.7144 21.1813 12.9126 21.0944 13.0573 20.9495L17.5238 16.3915C17.8134 16.1015 17.7905 15.6379 17.4857 15.3698C17.1807 15.0945 16.693 15.116 16.4111 15.406L13.263 18.6161V10.7031C13.263 10.3044 12.92 9.97852 12.5009 9.97852C12.0818 9.97852 11.7387 10.3044 11.7387 10.7031V18.6161L8.59839 15.406C8.30873 15.1162 7.8285 15.0945 7.52367 15.3698C7.21891 15.6452 7.19604 16.1018 7.48565 16.3915L11.9445 20.9495Z"
                            fill="#00CCB6"
                          />
                        </svg>
                        <p className="text-[#00CCB6] p-bold !text-[15px]">
                          MEDICAL CHECKUP
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Payment Info */}
                  <div className="flex flex-col items-start justify-center gap-5 self-stretch">
                    <p className="label text-[#383838]">Payment info</p>
                    <div className="flex lg:grid grid-cols-4 flex-col justify-center items-center content-center gap-5 self-stretch">
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          Start Date
                        </label>
                        <input
                          type="date"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                        />
                      </div>
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">End Date</label>
                        <input
                          type="date"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                        />
                      </div>
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          Subscription Plan
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
                      <div
                        className="flex self-stretch flex-col items-start gap-2"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          Plan Time
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
                      <div
                        className="flex col-span-2 flex-col items-start gap-2 self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">
                          Student Status
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
                      <div
                        className="flex col-span-2 flex-col items-start gap-2 self-stretch"
                        style={{ flex: "1 0 0" }}
                      >
                        <label className="label text-[#868686]">Amount</label>
                        <input
                          type="text"
                          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                          style={{ border: "1px solid #DBDADE" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-5 self-stretch">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="red-btn w-full"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="cyan-btn w-full"
                    >
                      Admit
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

export default StudentInfoModal;
