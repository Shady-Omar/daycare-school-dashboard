import React from "react";

import NewMessageModal from "./NewMessageModal";

import chatPlaceholder from "../Assets/chat-placeholder.png";
import boldBtn from "../Assets/bold-btn.svg";
import italicBtn from "../Assets/italic-btn.svg";
import attachBtn from "../Assets/attach-btn.svg";
import cameraBtn from "../Assets/CameraPlus-btn.svg";
import clearBtn from "../Assets/clear-btn.svg";

function MessagesContent() {
  return (
    <div
      className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-white"
      style={{ borderRadius: "0px 10px 10px 10px" }}
    >
      <div className="flex items-start gap-[30px] self-stretch rounded-[10px]">
        {/* Chat Menu */}
        <div className="flex w-[290px] min-h-[1000px] flex-col items-start gap-2.5 self-stretch rounded-[10px] bg-white">
          <NewMessageModal />
          <div className="flex pt-5 flex-col items-start gap-5 self-stretch">
            <div className="flex items-start gap-1 self-stretch">
              <p className="label text-[#868686]">RECENT MESSAGES</p>
            </div>
            {/* Chats */}
            <div className="flex flex-col items-start self-stretch">
              <div
                className="flex py-5 px-2.5 justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #ECECEB" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-start gap-2.5">
                    <img src={chatPlaceholder} alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-[5px]">
                    <h5 className="h5-bold text-[#383838]">Daniel Gallego</h5>
                    <p className="p-reg text-[#A4A4A4]">Lorem ipsum dolor...</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 self-stretch">
                  <p className="label-reg text-[#A4A4A4]">12:45 PM</p>
                  <div className="w-6 h-6">
                    <div className="flex justify-center items-center w-6 h-6 shrink-0 rounded-[29.13px] bg-[#00ccb633] label-semi text-[#383838]">
                      3
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex py-5 px-2.5 justify-between items-start self-stretch rounded-md bg-[#5ECFFF]"
                style={{ borderBottom: "1px solid #ECECEB" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-start gap-2.5">
                    <img src={chatPlaceholder} alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-[5px]">
                    <h5 className="h5-bold text-white">Syifa Al Husna</h5>
                    <p className="p-reg text-[#FFFFFFCC]">
                      Lorem ipsum dolor...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 self-stretch">
                  <p className="label-reg text-white">12:45 PM</p>
                </div>
              </div>
              <div
                className="flex py-5 px-2.5 justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #ECECEB" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-start gap-2.5">
                    <img src={chatPlaceholder} alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-[5px]">
                    <h5 className="h5-bold text-[#383838]">Daniel Gallego</h5>
                    <p className="p-reg text-[#A4A4A4]">Lorem ipsum dolor...</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 self-stretch">
                  <p className="label-reg text-[#A4A4A4]">12:45 PM</p>
                  <div className="w-6 h-6">
                    <div className="flex justify-center items-center w-6 h-6 shrink-0 rounded-[29.13px] bg-[#00ccb633] label-semi text-[#383838]">
                      3
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex py-5 px-2.5 justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #ECECEB" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-start gap-2.5">
                    <img src={chatPlaceholder} alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-[5px]">
                    <h5 className="h5-bold text-[#383838]">Daniel Gallego</h5>
                    <p className="p-reg text-[#A4A4A4]">Lorem ipsum dolor...</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 self-stretch">
                  <p className="label-reg text-[#A4A4A4]">12:45 PM</p>
                  <div className="w-6 h-6">
                    <div className="flex justify-center items-center w-6 h-6 shrink-0 rounded-[29.13px] bg-[#00ccb633] label-semi text-[#383838]">
                      3
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex py-5 px-2.5 justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #ECECEB" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-start gap-2.5">
                    <img src={chatPlaceholder} alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-[5px]">
                    <h5 className="h5-bold text-[#383838]">Daniel Gallego</h5>
                    <p className="p-reg text-[#A4A4A4]">Lorem ipsum dolor...</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 self-stretch">
                  <p className="label-reg text-[#A4A4A4]">12:45 PM</p>
                  <div className="w-6 h-6">
                    <div className="flex justify-center items-center w-6 h-6 shrink-0 rounded-[29.13px] bg-[#00ccb633] label-semi text-[#383838]">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Chat details */}
        <div
          className="flex flex-col h-[700px] justify-between items-start self-stretch bg-[#F9F9F9]"
          style={{ flex: "1 0 0", borderRadius: "0px 10px 10px 0px" }}
        >
          {/* Title */}
          <div
            className="flex h-[100px] p-[30px] justify-between items-center self-stretch bg-white"
            style={{
              borderRadius: "0px 10px 0px 0px",
              border: "1px solid #ECECEB",
            }}
          >
            <div
              className="flex items-center gap-2.5"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex w-[50px] h-[50px] items-start gap-2.5">
                <img className="rounded-full" src={chatPlaceholder} alt="" />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <h5 className="h5-bold text-[#202020]">Syifa Al Husna</h5>
              </div>
            </div>
          </div>
          {/* Chat Box */}
          <div
            className="flex flex-col justify-end items-start gap-10 self-stretch"
            style={{ padding: "0px 30px 30px 30px" }}
          >
            {/* Messages */}
            <div className="flex px-[30px] flex-col items-start gap-[50px] self-stretch">
              <div className="flex flex-col items-start gap-5 self-stretch">
                <div className="flex flex-col items-start gap-2.5 self-stretch">
                  <div
                    className="flex py-[18px] px-[13px] items-start gap-2.5 bg-white"
                    style={{ borderRadius: "0px 12px 12px 12px" }}
                  >
                    <p className="p-reg text-[#383838]">Hello Patricia!</p>
                  </div>
                  <div className="flex py-[18px] px-[13px] items-start gap-2.5 bg-white rounded-xl">
                    <p className="p-reg text-[#383838]">
                      Can you arrange schedule for next meeting?
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2.5 self-stretch">
                  <div
                    className="flex py-[17px] px-[21px] items-start gap-2.5 bg-[#5ECFFF]"
                    style={{ borderRadius: "12px 0px 12px 12px" }}
                  >
                    <p className="p-reg text-white">Hello Sur!</p>
                  </div>
                  <div className="flex py-[17px] px-[21px] items-start gap-2.5 bg-[#5ECFFF] rounded-xl">
                    <p className="p-reg text-white">
                      Okay, I’ll arrange it soon. i noftify you when it’s done
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Inputs */}
            <div className="flex flex-col items-start self-stretch rounded-[10px] bg-white">
              <input
                type="text"
                className="flex h-[120px] p-[30px] items-start self-stretch rounded-[10px] p-reg"
                placeholder="Type message here..."
              />
              {/* Controls */}
              <div
                className="flex py-5 px-[30px] justify-between items-center self-stretch bg-white"
                style={{
                  borderRadius: "0px 0px 10px 10px",
                  borderTop: "1px solid #EBEBEB",
                }}
              >
                <div className="flex items-start gap-5">
                  <button className="h-6 w-6">
                    <img src={boldBtn} alt="bold" />
                  </button>
                  <button className="h-6 w-6">
                    <img src={italicBtn} alt="italic" />
                  </button>
                  <button className="h-6 w-6">
                    <img src={attachBtn} alt="attachment" />
                  </button>
                  <button className="h-6 w-6">
                    <img src={cameraBtn} alt="camera" />
                  </button>
                  <button className="h-6 w-6">
                    <img src={clearBtn} alt="clear" />
                  </button>
                </div>
                <button className="cyan-btn">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesContent;
