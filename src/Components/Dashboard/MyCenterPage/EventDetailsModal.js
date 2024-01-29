import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function EventDetailsModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex min-w-[250px] py-[5px] items-start gap-2.5"
        style={{ flex: "1 0 0" }}
      >
        <div
          className="flex pl-5 flex-col items-start gap-3"
          style={{ flex: "1 0 0", borderLeft: "3px solid #FFAB2D" }}
        >
          <div className="flex items-start gap-2.5">
            <div
              className="flex w-[35px] h-[35px] items-center justify-center gap-2.5 rounded-md"
              style={{ background: "rgba(255, 171, 45, 0.10)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M14.7502 4.73437H14.0002V3.23437C14.0002 3.03546 13.9211 2.8447 13.7805 2.70404C13.6398 2.56339 13.4491 2.48438 13.2502 2.48438C13.0512 2.48438 12.8605 2.56339 12.7198 2.70404C12.5792 2.8447 12.5002 3.03546 12.5002 3.23437V4.73437H6.50015V3.23437C6.50015 3.03546 6.42113 2.8447 6.28048 2.70404C6.13983 2.56339 5.94906 2.48438 5.75015 2.48438C5.55124 2.48438 5.36047 2.56339 5.21982 2.70404C5.07917 2.8447 5.00015 3.03546 5.00015 3.23437V4.73437H4.25015C3.65342 4.73437 3.08112 4.97143 2.65916 5.39338C2.23721 5.81534 2.00015 6.38764 2.00015 6.98437V7.73437H17.0002V6.98437C17.0002 6.38764 16.7631 5.81534 16.3411 5.39338C15.9192 4.97143 15.3469 4.73437 14.7502 4.73437Z"
                  fill="#FFAB2D"
                />
                <path
                  d="M2.00015 15.2344C2.00015 15.8311 2.23721 16.4034 2.65916 16.8254C3.08112 17.2473 3.65342 17.4844 4.25015 17.4844H14.7502C15.3469 17.4844 15.9192 17.2473 16.3411 16.8254C16.7631 16.4034 17.0002 15.8311 17.0002 15.2344V9.23438H2.00015V15.2344Z"
                  fill="#FFAB2D"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-[3px]">
              <p className="label-bold text-[#202020]">Event 1</p>
              <p className="label-reg text-[#878787]">2 November 2023</p>
            </div>
          </div>
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
            className="fixed inset-0 flex w-screen  items-center justify-center p-10 overflow-y-scroll lg:overflow-y-visible"
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
              <Dialog.Panel className="flex w-[340px] lg:w-auto p-[30px] flex-col justify-center items-center gap-[30px] rounded-[10px] bg-[#FFF]">
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <h5 className="h5-bold text-[#202020]">
                    School Event Details
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

                <div className="flex flex-col justify-center items-center gap-[30px] lg:gap-5 self-stretch">
                  {/* Details */}
                  <div className="flex flex-col justify-center items-center gap-5 lg:gap-2.5">
                    <div
                      className="flex flex-col lg:flex-row lg:justify-between gap-2.5 lg:gap-0 items-start self-stretch"
                      style={{ borderBottom: "1px solid #EBEBEB" }}
                    >
                      <div className="flex lg:w-[193px] lg:py-5 items-start gap-[15px] self-stretch">
                        <h5 className="h5-bold text-[#383838]">Event Title</h5>
                      </div>
                      <div className="flex lg:w-[483px] lg:p-5 items-start gap-2.5 self-stretch">
                        <h5 className="h5-med text-[#646464]">
                          School Event Lorem Ipsum Dolor
                        </h5>
                      </div>
                    </div>
                    <div
                      className="flex flex-col lg:flex-row lg:justify-between gap-2.5 lg:gap-0 items-start self-stretch"
                      style={{ borderBottom: "1px solid #EBEBEB" }}
                    >
                      <div className="flex lg:w-[193px] lg:py-5 items-start gap-[15px] self-stretch">
                        <h5 className="h5-bold text-[#383838]">Event Date</h5>
                      </div>
                      <div className="flex lg:w-[483px] lg:p-5 items-start gap-2.5 self-stretch">
                        <h5 className="h5-med text-[#646464]">
                          Monday, November 30th, 2023
                        </h5>
                      </div>
                    </div>
                    <div
                      className="flex flex-col lg:flex-row lg:justify-between gap-2.5 lg:gap-0 items-start self-stretch"
                      style={{ borderBottom: "1px solid #EBEBEB" }}
                    >
                      <div className="flex lg:w-[193px] lg:py-5 items-start gap-[15px] self-stretch">
                        <h5 className="h5-bold text-[#383838]">Event Time</h5>
                      </div>
                      <div className="flex lg:w-[483px] lg:p-5 items-start gap-2.5 self-stretch">
                        <h5 className="h5-med text-[#646464]">
                          10:00 AM - 11:00 AM (GMT +5:30)
                        </h5>
                      </div>
                    </div>
                    <div
                      className="flex flex-col lg:flex-row lg:justify-between gap-2.5 lg:gap-0 items-start self-stretch"
                      style={{ borderBottom: "1px solid #EBEBEB" }}
                    >
                      <div className="flex lg:w-[193px] lg:py-5 items-start gap-[15px] self-stretch">
                        <h5 className="h5-bold text-[#383838]">Description</h5>
                      </div>
                      <div className="flex lg:w-[483px] lg:p-5 items-start gap-2.5 self-stretch">
                        <h5 className="h5-med text-[#646464]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className="flex flex-col items-center justify-center gap-5 self-stretch">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="cyan-btn w-full"
                    >
                      Edit Event
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

export default EventDetailsModal;
