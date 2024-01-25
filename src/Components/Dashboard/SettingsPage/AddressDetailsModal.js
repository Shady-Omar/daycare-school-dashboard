import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import MapContainer from "../../GoogleMap";

function AddressDetailsModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="white-btn self-stretch lg:self-auto"
      >
        Change
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
              <Dialog.Panel
                className="flex w-[340px] lg:w-[1078px] p-[30px] flex-col justify-center items-center gap-10 rounded-[10px] bg-[#FFF]"
                style={{ padding: "30px 30px 60px 30px" }}
              >
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <h5 className="h5-bold text-[#202020]">Address Details</h5>
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

                {/* Form */}
                <div className="flex lg:grid grid-cols-2 items-start content-start gap-[30px] self-stretch flex-wrap">
                  <div className="flex h-[246px] lg:h-[361px] col-span-2 w-full self-stretch items-end gap-2 rounded-[10px]">
                    <MapContainer />
                  </div>
                  <div className="flex flex-col w-full lg:flex-row self-stretch justify-end lg:justify-normal items-start lg:items-end gap-2.5 lg:gap-4">
                    <div
                      className="flex flex-col items-start gap-2 self-stretch"
                      style={{ flex: "1 0 0" }}
                    >
                      <label
                        className="label text-[#868686]"
                        htmlFor="short-address"
                      >
                        SHORT ADDRESS
                      </label>
                      <input
                        id="short-address"
                        type="text"
                        className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#EDEDED] rounded-[10px]"
                        placeholder="Lorem ipsum dolor..."
                      />
                    </div>
                    <button className="white-btn self-stretch lg:self-auto">
                      Change
                    </button>
                  </div>
                  <div className="flex self-stretch w-full items-end gap-4">
                    <div
                      className="flex flex-col items-start gap-2 self-stretch"
                      style={{ flex: "1 0 0" }}
                    >
                      <label
                        className="label text-[#868686]"
                        htmlFor="district"
                      >
                        District
                      </label>
                      <input
                        id="district"
                        type="text"
                        className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
                        placeholder="Lorem ipsum dolor..."
                      />
                    </div>
                  </div>
                  <div className="flex self-stretch w-full items-end gap-4">
                    <div
                      className="flex flex-col items-start gap-2 self-stretch"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]" htmlFor="city">
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
                        placeholder="Lorem ipsum dolor..."
                      />
                    </div>
                  </div>
                  <div className="flex self-stretch w-full items-end gap-4">
                    <div
                      className="flex flex-col items-start gap-2 self-stretch"
                      style={{ flex: "1 0 0" }}
                    >
                      <label
                        className="label text-[#868686]"
                        htmlFor="province"
                      >
                        Province
                      </label>
                      <input
                        id="province"
                        type="text"
                        className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
                        placeholder="Lorem ipsum dolor..."
                      />
                    </div>
                  </div>
                  <div className="flex self-stretch w-full items-end gap-4">
                    <div
                      className="flex flex-col items-start gap-2 self-stretch"
                      style={{ flex: "1 0 0" }}
                    >
                      <label
                        className="label text-[#868686]"
                        htmlFor="province"
                      >
                        Country
                      </label>
                      <input
                        id="province"
                        type="text"
                        className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
                        placeholder="Lorem ipsum dolor..."
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
                    Save Changes
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

export default AddressDetailsModal;
