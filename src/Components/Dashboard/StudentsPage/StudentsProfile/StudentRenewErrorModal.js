import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function StudentRenewErrorModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cyan-btn flex justify-center w-full items-center gap-3"
      >
        Save
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
          <div className="fixed inset-0 flex w-screen items-center justify-center p-10">
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
              <Dialog.Panel className="flex w-[340px] lg:w-[477px] p-[30px] flex-col justify-center items-center gap-[30px] rounded-[10px] bg-[#FFF]">
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <div className="flex items-center gap-[15px] self-stretch">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_369_41507)">
                        <path
                          d="M14 0.5C11.2311 0.5 8.52431 1.32109 6.22202 2.85943C3.91974 4.39776 2.12532 6.58427 1.06569 9.14243C0.006066 11.7006 -0.271181 14.5155 0.269012 17.2313C0.809205 19.947 2.14258 22.4416 4.10051 24.3995C6.05845 26.3574 8.55301 27.6908 11.2687 28.231C13.9845 28.7712 16.7994 28.4939 19.3576 27.4343C21.9157 26.3747 24.1022 24.5803 25.6406 22.278C27.1789 19.9757 28 17.2689 28 14.5C28 10.787 26.525 7.22601 23.8995 4.6005C21.274 1.975 17.713 0.5 14 0.5ZM14 26.1667C11.6926 26.1667 9.43693 25.4824 7.51835 24.2005C5.59978 22.9185 4.10443 21.0964 3.22141 18.9646C2.33839 16.8328 2.10735 14.4871 2.55751 12.2239C3.00767 9.96083 4.11881 7.88203 5.75043 6.25042C7.38204 4.61881 9.46084 3.50767 11.724 3.0575C13.9871 2.60734 16.3328 2.83838 18.4646 3.72141C20.5965 4.60443 22.4185 6.09977 23.7005 8.01835C24.9824 9.93692 25.6667 12.1925 25.6667 14.5C25.6667 17.5942 24.4375 20.5617 22.2496 22.7496C20.0617 24.9375 17.0942 26.1667 14 26.1667Z"
                          fill="#FF4A55"
                        />
                        <path
                          d="M14 16.8333C14.3095 16.8333 14.6062 16.7104 14.825 16.4916C15.0438 16.2728 15.1667 15.9761 15.1667 15.6667V8.66667C15.1667 8.35725 15.0438 8.0605 14.825 7.84171C14.6062 7.62292 14.3095 7.5 14 7.5C13.6906 7.5 13.3939 7.62292 13.1751 7.84171C12.9563 8.0605 12.8334 8.35725 12.8334 8.66667V15.6667C12.8334 15.9761 12.9563 16.2728 13.1751 16.4916C13.3939 16.7104 13.6906 16.8333 14 16.8333ZM14 19.1667C13.6906 19.1667 13.3939 19.2896 13.1751 19.5084C12.9563 19.7272 12.8334 20.0239 12.8334 20.3333C12.8334 20.6428 12.9563 20.9395 13.1751 21.1583C13.3939 21.3771 13.6906 21.5 14 21.5C14.3095 21.5 14.6062 21.3771 14.825 21.1583C15.0438 20.9395 15.1667 20.6428 15.1667 20.3333C15.1667 20.0239 15.0438 19.7272 14.825 19.5084C14.6062 19.2896 14.3095 19.1667 14 19.1667Z"
                          fill="#FF4A55"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_369_41507">
                          <rect
                            width="28"
                            height="28"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <h5 className="h5-bold text-[#202020]">Error</h5>
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

                <div className="flex flex-col justify-center items-center gap-5 self-stretch">
                  <div
                    className="flex p-5 lg:p-[30px] justify-center items-center gap-2.5 self-stretch rounded-[10px]"
                    style={{ background: "rgba(255, 74, 85, 0.10)" }}
                  >
                    <p className="p-reg !text-[15px] text-[#383838] text-left w-full">
                      Please add Family details to proceed
                    </p>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="flex flex-col items-center justify-center gap-5 self-stretch">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="cyan-btn flex justify-center w-full items-center gap-3"
                  >
                    Ok
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

export default StudentRenewErrorModal;
