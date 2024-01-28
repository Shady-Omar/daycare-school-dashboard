import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import AddNotes from "./AddNotes";

import activityPhoto from "../../../Assets/activity-photo.svg";
import babyBottle from "../../../Assets/baby-bottle.svg";
import moodIcon from "../../../Assets/mood-icon.svg";
import diaperIcon from "../../../Assets/diapers.svg";
import showerIcon from "../../../Assets/shower.svg";
import exerciseIcon from "../../../Assets/exercise.svg";
import foodIcon from "../../../Assets/food.svg";
import allergyIcon from "../../../Assets/allergy.svg";
import temperatureIcon from "../../../Assets/temperature.svg";
import medicationIcon from "../../../Assets/medication.svg";
import teethingIcon from "../../../Assets/teething.svg";

function SelectActivityType() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex self-stretch flex-col items-start gap-2">
      <label className="label text-[#868686]">Activity Type</label>
      <select
        onClick={() => setIsOpen(true)}
        className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
        style={{ border: "1px solid #DBDADE" }}
        defaultValue={"Select"}
      >
        <option value="Select">Select</option>
        {/* <option value="PM">PM</option> */}
      </select>
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
            className="fixed inset-0 flex w-screen items-start lg:items-center justify-center p-10 lg:overflow-y-visible overflow-y-scroll"
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
              <Dialog.Panel className="flex p-[30px] w-[340px] lg:min-w-[820px] flex-col justify-center items-center gap-[30px] rounded-[10px] bg-[#FFF]">
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <h5 className="h5-bold text-[#202020]">
                    Select Children Activity Type
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

                <div className=" grid lg:grid-cols-6 grid-cols-2 lg:grid-rows-2 grid-rows-6 gap-5 self-stretch">
                  {/* Activity Icons */}

                  <div className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5">
                    <div className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px] bg-[#00CCB6]">
                      <img src={activityPhoto} alt="photo_activity" />
                    </div>
                    <h5 className="h5-med text-[#646464]">Photo</h5>
                  </div>
                  <div className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5">
                    <div className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px] bg-[#6418C3]">
                      <img src={babyBottle} alt="bottle" />
                    </div>
                    <h5 className="h5-med text-[#646464]">Bottle</h5>
                  </div>
                  <div className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5">
                    <div className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px] bg-[#5ECFFF]">
                      <img src={moodIcon} alt="mood" />
                    </div>
                    <h5 className="h5-med text-[#646464]">Mood</h5>
                  </div>
                  <div className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5">
                    <div className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px] bg-[#E328AF]">
                      <img src={diaperIcon} alt="diaper" />
                    </div>
                    <h5 className="h5-med text-[#646464]">Diaper</h5>
                  </div>
                  <div className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5">
                    <div className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px] bg-[#FF4A55]">
                      <img src={showerIcon} alt="shower" />
                    </div>
                    <h5 className="h5-med text-[#646464]">Shower</h5>
                  </div>
                  <div className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5">
                    <div className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px] bg-[#FFAB2D]">
                      <img src={exerciseIcon} alt="exercise" />
                    </div>
                    <h5 className="h5-med text-[#646464]">Exercise</h5>
                  </div>
                  <div className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5">
                    <div
                      className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px]"
                      style={{ background: "rgba(255, 171, 45, 0.70)" }}
                    >
                      <img src={foodIcon} alt="food" />
                    </div>
                    <h5 className="h5-med text-[#646464]">Food</h5>
                  </div>
                  <div className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5">
                    <div
                      className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px]"
                      style={{ background: "rgba(255, 74, 85, 0.70)" }}
                    >
                      <img src={allergyIcon} alt="allergies" />
                    </div>
                    <h5 className="h5-med text-[#646464]">Allergies</h5>
                  </div>
                  <div className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5">
                    <div
                      className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px]"
                      style={{ background: "rgba(227, 40, 175, 0.70)" }}
                    >
                      <img src={temperatureIcon} alt="temperature" />
                    </div>
                    <h5 className="h5-med text-[#646464]">Temperature</h5>
                  </div>
                  <div className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5">
                    <div
                      className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px]"
                      style={{ background: "rgba(94, 207, 255, 0.70)" }}
                    >
                      <img src={medicationIcon} alt="medication" />
                    </div>
                    <h5 className="h5-med text-[#646464]">Medication</h5>
                  </div>
                  <div className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5">
                    <div
                      className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px]"
                      style={{ background: "rgba(100, 24, 195, 0.70)" }}
                    >
                      <img src={teethingIcon} alt="teething" />
                    </div>
                    <h5 className="h5-med text-[#646464]">Teething</h5>
                  </div>
                  <AddNotes />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default SelectActivityType;
