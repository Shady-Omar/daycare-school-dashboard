import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import moodIcon from "../Assets/mood-icon.svg";
import infoIcon from "../Assets/info-icon.svg";
import plusIcon from "../Assets/circle-plus-icon.svg";

function StudentActivityMoodModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [buttonCrying, setButtonCrying] = useState({
    borderColor: "#FFF",
    fillColor: "#A4A4A4",
    textColor: "#646464",
  });
  const [buttonSad, setButtonSad] = useState({
    borderColor: "#FFF",
    fillColor: "#A4A4A4",
    textColor: "#646464",
  });
  const [buttonNormal, setButtonNormal] = useState({
    borderColor: "#FFF",
    fillColor: "#A4A4A4",
    textColor: "#646464",
  });
  const [buttonSmiley, setButtonSmiley] = useState({
    borderColor: "#FFF",
    fillColor: "#A4A4A4",
    textColor: "#646464",
  });
  const [buttonHappy, setButtonHappy] = useState({
    borderColor: "#FFF",
    fillColor: "#A4A4A4",
    textColor: "#646464",
  });

  const [selectedButton, setSelectedButton] = useState(null);

  const handleClickCrying = () => {
    setButtonCrying({
      borderColor: "#00CCB6",
      fillColor: "#00CCB6",
      textColor: "#00CCB6",
    });
    setButtonSad({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonNormal({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonSmiley({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonHappy({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });

    setSelectedButton("Crying");
  };

  const handleClickSad = () => {
    setButtonSad({
      borderColor: "#00CCB6",
      fillColor: "#00CCB6",
      textColor: "#00CCB6",
    });
    setButtonCrying({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonNormal({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonSmiley({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonHappy({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });

    setSelectedButton("Sad");
  };

  const handleClickNormal = () => {
    setButtonNormal({
      borderColor: "#00CCB6",
      fillColor: "#00CCB6",
      textColor: "#00CCB6",
    });
    setButtonCrying({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonSad({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonSmiley({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonHappy({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });

    setSelectedButton("Normal");
  };

  const handleClickSmiley = () => {
    setButtonSmiley({
      borderColor: "#00CCB6",
      fillColor: "#00CCB6",
      textColor: "#00CCB6",
    });
    setButtonCrying({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonSad({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonNormal({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonHappy({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });

    setSelectedButton("Smiley");
  };

  const handleClickHappy = () => {
    setButtonHappy({
      borderColor: "#00CCB6",
      fillColor: "#00CCB6",
      textColor: "#00CCB6",
    });
    setButtonCrying({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonSad({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonNormal({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });
    setButtonSmiley({
      borderColor: "#FFF",
      fillColor: "#A4A4A4",
      textColor: "#646464",
    });

    setSelectedButton("Happy");
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex min-w-[110px] cursor-pointer flex-col justify-center items-center gap-2.5"
      >
        <div className="flex w-[110px] h-[110px] justify-center items-center gap-2.5 rounded-[10px] bg-[#5ECFFF]">
          <img src={moodIcon} alt="mood" />
        </div>
        <h5 className="h5-med text-[#646464]">Mood</h5>
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
              <Dialog.Panel className="flex min-w-[820px] p-[30px] flex-col justify-center items-center gap-[30px] rounded-[10px] bg-[#FFF]">
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <h5 className="h5-bold text-[#202020]">Add Mood</h5>
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
                  {/* Student Name */}
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <label className="label text-[#868686]">Student Name</label>
                    <input
                      type="text"
                      className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#EDEDED]"
                      style={{ border: "1px solid #DBDADE" }}
                      value="Abdullah Zubair"
                      disabled
                    />
                  </div>
                  {/* Date and Time */}
                  <div className="flex justify-center items-center gap-5 self-stretch">
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">Date</label>
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
                      <label className="label text-[#868686]">Time</label>
                      <input
                        type="time"
                        className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                        style={{ border: "1px solid #DBDADE" }}
                      />
                    </div>
                  </div>
                  {/* Select Mood */}
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    {/* label */}
                    <div className="flex items-start gap-1 self-stretch">
                      <label className="label text-[#868686]">
                        Select MOOD
                      </label>
                    </div>
                    {/* form */}
                    <div
                      className="flex h-[185px] px-5 justify-between items-center self-stretch rounded-[10px] bg-white"
                      style={{ border: "1px solid #DBDADE" }}
                    >
                      <button
                        style={{
                          borderColor: buttonCrying.borderColor,
                          color: buttonCrying.textColor,
                        }}
                        className="flex flex-col justify-center items-center gap-2.5 border-2 rounded-lg p-[15px] transition-all"
                        onClick={handleClickCrying}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="88"
                          height="88"
                          viewBox="0 0 88 88"
                          fill="none"
                        >
                          <path
                            d="M44.0002 6.96484C23.8335 6.96484 7.3335 23.4648 7.3335 43.6315C7.3335 63.7982 23.8335 80.2982 44.0002 80.2982C64.1668 80.2982 80.6668 63.7982 80.6668 43.6315C80.6668 23.4648 64.1668 6.96484 44.0002 6.96484ZM26.0335 31.1648C27.1335 29.3315 29.3335 28.5982 30.8002 29.3315L38.1335 32.9982C39.9668 33.7315 40.7002 35.9315 39.6002 37.7648C38.8668 39.5982 36.6668 40.3315 34.8335 39.2315L27.5002 35.5648C26.0335 35.1982 25.3002 32.9982 26.0335 31.1648ZM57.9335 61.2315C56.4668 62.6982 54.2668 63.0648 52.8002 61.5982C47.6668 57.5648 40.7002 57.5648 35.5668 61.5982C34.1002 63.0648 31.5335 62.6982 30.4335 61.2315C29.3335 59.7649 29.3335 57.1982 30.8002 56.0982C38.5002 49.8648 49.8668 49.8648 57.5668 56.0982C59.0335 57.1982 59.0335 59.7649 57.9335 61.2315ZM60.1335 35.9315L52.8002 39.5982C50.9668 40.3315 48.7668 39.5982 48.0335 37.7648C47.3002 35.9315 48.0335 33.7315 49.5002 32.9982L56.8335 29.3315C58.6668 28.5982 60.8668 29.3315 61.6002 31.1648C62.7002 32.9982 61.9668 35.1982 60.1335 35.9315Z"
                            fill={buttonCrying.fillColor}
                          />
                        </svg>
                        <h5
                          className={
                            selectedButton === "Crying" ? `h5-semi` : `h5-med`
                          }
                          style={{ color: buttonCrying.textColor }}
                        >
                          Crying
                        </h5>
                      </button>
                      <button
                        style={{
                          borderColor: buttonSad.borderColor,
                          color: buttonSad.textColor,
                        }}
                        className="flex flex-col justify-center items-center gap-2.5 border-2 rounded-lg p-[15px] transition-all"
                        onClick={handleClickSad}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="89"
                          height="88"
                          viewBox="0 0 89 88"
                          fill="none"
                        >
                          <path
                            d="M44.5002 7.33203C24.3335 7.33203 7.8335 23.832 7.8335 43.9987C7.8335 64.1654 24.3335 80.6654 44.5002 80.6654C64.6668 80.6654 81.1668 64.1654 81.1668 43.9987C81.1668 23.832 64.6668 7.33203 44.5002 7.33203ZM23.9668 38.4987C22.5002 37.032 22.5002 34.832 23.9668 33.3654C28.3668 29.332 34.9668 29.332 39.3668 33.3654C40.8335 34.832 40.8335 37.032 39.3668 38.4987C37.9002 39.9654 35.7002 39.9654 34.2335 38.4987C32.7668 37.032 30.5668 37.032 29.1002 38.4987C27.6335 39.9654 25.4335 39.9654 23.9668 38.4987ZM58.4335 61.232C56.9668 62.6987 54.7668 63.0654 53.3002 61.5987C48.1668 57.5654 41.2002 57.5654 36.0668 61.5987C34.6002 63.0654 32.0335 62.6987 30.9335 61.232C29.4668 59.7654 29.8335 57.1987 31.3002 56.0987C39.0002 49.8654 50.3668 49.8654 58.0668 56.0987C59.5335 57.5654 59.5335 59.7654 58.4335 61.232ZM65.0335 38.4987C63.5668 39.9654 61.3668 39.9654 59.9002 38.4987C58.4335 37.032 56.2335 37.032 54.7668 38.4987C53.3002 39.9654 51.1002 39.9654 49.6335 38.4987C48.1668 37.032 48.1668 34.832 49.6335 33.3654C54.0335 29.332 61.0002 29.332 65.0335 33.3654C66.5002 34.832 66.5002 37.3987 65.0335 38.4987Z"
                            fill={buttonSad.fillColor}
                          />
                        </svg>
                        <h5
                          className={
                            selectedButton === "Sad" ? `h5-semi` : `h5-med`
                          }
                          style={{ color: buttonSad.textColor }}
                        >
                          Sad
                        </h5>
                      </button>
                      <button
                        style={{
                          borderColor: buttonNormal.borderColor,
                          color: buttonNormal.textColor,
                        }}
                        className="flex flex-col justify-center items-center gap-2.5 border-2 rounded-lg p-[15px] transition-all"
                        onClick={handleClickNormal}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="88"
                          height="88"
                          viewBox="0 0 88 88"
                          fill="none"
                        >
                          <path
                            d="M44.0002 7.33203C23.8335 7.33203 7.3335 23.832 7.3335 43.9987C7.3335 64.1654 23.8335 80.6654 44.0002 80.6654C64.1668 80.6654 80.6668 64.1654 80.6668 43.9987C80.6668 23.832 64.1668 7.33203 44.0002 7.33203ZM33.0002 32.9987C35.2002 32.9987 36.6668 34.4654 36.6668 36.6654C36.6668 38.8654 35.2002 40.332 33.0002 40.332C30.8002 40.332 29.3335 38.8654 29.3335 36.6654C29.3335 34.4654 30.8002 32.9987 33.0002 32.9987ZM55.0002 58.6654H33.0002C30.8002 58.6654 29.3335 57.1987 29.3335 54.9987C29.3335 52.7987 30.8002 51.332 33.0002 51.332H55.0002C57.2002 51.332 58.6668 52.7987 58.6668 54.9987C58.6668 57.1987 57.2002 58.6654 55.0002 58.6654ZM55.0002 40.332C52.8002 40.332 51.3335 38.8654 51.3335 36.6654C51.3335 34.4654 52.8002 32.9987 55.0002 32.9987C57.2002 32.9987 58.6668 34.4654 58.6668 36.6654C58.6668 38.8654 57.2002 40.332 55.0002 40.332Z"
                            fill={buttonNormal.fillColor}
                          />
                        </svg>
                        <h5
                          className={
                            selectedButton === "Normal" ? `h5-semi` : `h5-med`
                          }
                          style={{ color: buttonNormal.textColor }}
                        >
                          Normal
                        </h5>
                      </button>
                      <button
                        style={{
                          borderColor: buttonSmiley.borderColor,
                          color: buttonSmiley.textColor,
                        }}
                        className="flex flex-col justify-center items-center gap-2.5 border-2 rounded-lg p-[15px] transition-all"
                        onClick={handleClickSmiley}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="89"
                          height="88"
                          viewBox="0 0 89 88"
                          fill="none"
                        >
                          <path
                            d="M44.5002 7.33203C24.3335 7.33203 7.8335 23.832 7.8335 43.9987C7.8335 64.1654 24.3335 80.6654 44.5002 80.6654C64.6668 80.6654 81.1668 64.1654 81.1668 43.9987C81.1668 23.832 64.6668 7.33203 44.5002 7.33203ZM33.5002 32.9987C35.7002 32.9987 37.1668 34.4654 37.1668 36.6654C37.1668 38.8654 35.7002 40.332 33.5002 40.332C31.3002 40.332 29.8335 38.8654 29.8335 36.6654C29.8335 34.4654 31.3002 32.9987 33.5002 32.9987ZM57.7002 57.932C50.0002 64.532 38.6335 64.532 30.9335 57.932C29.4668 56.4654 29.1002 54.2654 30.5668 52.7987C32.0335 51.332 34.2335 50.9654 35.7002 52.432C40.8335 56.4654 47.8002 56.4654 52.9335 52.432C54.4002 50.9654 56.9668 51.332 58.0668 52.7987C59.5335 54.2654 59.5335 56.4654 57.7002 57.932ZM55.5002 40.332C53.3002 40.332 51.8335 38.8654 51.8335 36.6654C51.8335 34.4654 53.3002 32.9987 55.5002 32.9987C57.7002 32.9987 59.1668 34.4654 59.1668 36.6654C59.1668 38.8654 57.7002 40.332 55.5002 40.332Z"
                            fill={buttonSmiley.fillColor}
                          />
                        </svg>
                        <h5
                          className={
                            selectedButton === "Smiley" ? `h5-semi` : `h5-med`
                          }
                          style={{ color: buttonSmiley.textColor }}
                        >
                          Smiley
                        </h5>
                      </button>
                      <button
                        style={{
                          borderColor: buttonHappy.borderColor,
                          color: buttonHappy.textColor,
                        }}
                        className="flex flex-col justify-center items-center gap-2.5 border-2 rounded-lg p-[15px] transition-all"
                        onClick={handleClickHappy}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="88"
                          height="88"
                          viewBox="0 0 88 88"
                          fill="none"
                        >
                          <path
                            d="M44.0002 7.33203C23.8335 7.33203 7.3335 23.832 7.3335 43.9987C7.3335 64.1654 23.8335 80.6654 44.0002 80.6654C64.1668 80.6654 80.6668 64.1654 80.6668 43.9987C80.6668 23.832 64.1668 7.33203 44.0002 7.33203ZM33.0002 32.9987C35.2002 32.9987 36.6668 34.4654 36.6668 36.6654C36.6668 38.8654 35.2002 40.332 33.0002 40.332C30.8002 40.332 29.3335 38.8654 29.3335 36.6654C29.3335 34.4654 30.8002 32.9987 33.0002 32.9987ZM58.6668 51.332C58.6668 59.3987 52.0668 65.9987 44.0002 65.9987C35.9335 65.9987 29.3335 59.3987 29.3335 51.332C29.3335 49.132 30.8002 47.6654 33.0002 47.6654H55.0002C57.2002 47.6654 58.6668 49.132 58.6668 51.332ZM55.0002 40.332C52.8002 40.332 51.3335 38.8654 51.3335 36.6654C51.3335 34.4654 52.8002 32.9987 55.0002 32.9987C57.2002 32.9987 58.6668 34.4654 58.6668 36.6654C58.6668 38.8654 57.2002 40.332 55.0002 40.332Z"
                            fill={buttonHappy.fillColor}
                          />
                        </svg>
                        <h5
                          className={
                            selectedButton === "Happy" ? `h5-semi` : `h5-med`
                          }
                          style={{ color: buttonHappy.textColor }}
                        >
                          Happy
                        </h5>
                      </button>
                    </div>
                  </div>
                  {/* Check Visibility */}
                  <div className="flex items-center gap-2.5 self-stretch">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        className="w-[18px] h-[18px] rounded"
                      />
                      <p className="p-reg text-[#646464]">
                        Visible to staff only
                      </p>
                    </div>
                    <img className="cursor-pointer" src={infoIcon} alt="info" />
                  </div>
                  {/* Submit Button */}
                  <div className="flex flex-col items-center justify-center gap-5 self-stretch">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="cyan-btn flex justify-center w-full items-center gap-3"
                    >
                      <img src={plusIcon} alt="" />
                      Add Mood
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

export default StudentActivityMoodModal;
