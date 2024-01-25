import React from "react";

import timingIcon from "../../../Assets/timing-icon.svg";

function TimingContent() {
  return (
    <div className="flex p-5 lg:p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-[#FFF] rounded-[10px] lg:rounded-[0px_10px_10px_10px]">
      {/* Title */}
      <div className="flex w-full py-[15px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]">
        <div className="w-9 h-9">
          <img src={timingIcon} alt="timing" />
        </div>
        <div className="flex flex-col items-start gap-[5px]">
          <h5 className="h5-bold !text-[18px] text-[#202020]">Timing</h5>
        </div>
      </div>
      {/* Form */}
      <form className=" flex flex-col items-center justify-center gap-[35px] self-stretch">
        <div className="flex lg:max-w-[670px] flex-col items-start gap-4 self-stretch lg:self-auto">
          <p className="label text-[#383838]">working day</p>
          <div className="grid grid-cols-3 lg:flex items-start content-start lg:content-normal gap-2 self-stretch lg:self-auto">
            <button className="white-btn self-stretch lg:self-auto lg:w-[89px]">
              SUN
            </button>
            <button className="white-btn self-stretch lg:self-auto lg:w-[89px]">
              MON
            </button>
            <button className="white-btn self-stretch lg:self-auto lg:w-[89px]">
              TUE
            </button>
            <button className="white-btn self-stretch lg:self-auto lg:w-[89px]">
              WED
            </button>
            <button className="white-btn self-stretch lg:self-auto lg:w-[89px]">
              THU
            </button>
            <button className="unactive-btn self-stretch lg:self-auto lg:w-[89px]">
              FRI
            </button>
            <button className="unactive-btn self-stretch lg:self-auto lg:w-[89px]">
              SAT
            </button>
          </div>
        </div>
        <div className="flex lg:max-w-[670px] lg:w-[670px] flex-col items-start gap-4 self-stretch lg:self-auto">
          <p className="label text-[#383838]">MORNING HOURS</p>
          <div className="flex flex-col lg:flex-row w-full items-start gap-5 self-stretch">
            <div
              className="flex w-full  flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  type="time"
                  className="flex w-full  h-[50px] items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                  style={{
                    flex: "1 0 0",
                    borderRadius: "10px 0px 0px 10px",
                    appearance: "none",
                  }}
                />

                <div
                  className="flex max-w-[85px] h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                  style={{ flex: "1 0 0", borderRadius: "0px 10px 10px 0px" }}
                >
                  <select
                    id="timing"
                    className="text-[#111517] cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                    defaultValue={"AM"}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div
              className="flex w-full  flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  id=""
                  type="time"
                  className="flex h-[50px] w-full  items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                  style={{
                    flex: "1 0 0",
                    borderRadius: "10px 0px 0px 10px",
                    appearance: "none",
                  }}
                />

                <div
                  className="flex max-w-[85px] h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                  style={{ flex: "1 0 0", borderRadius: "0px 10px 10px 0px" }}
                >
                  <select
                    id="timing"
                    className="text-[#111517] cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                    defaultValue={"AM"}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:max-w-[670px] lg:w-[670px] flex-col items-start gap-4 self-stretch lg:self-auto">
          <p className="label text-[#383838]">Evening HOURS</p>
          <div className="flex flex-col lg:flex-row w-full items-start gap-5 self-stretch">
            <div
              className="flex w-full  flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  id=""
                  type="time"
                  className="flex w-full  h-[50px] items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                  style={{
                    flex: "1 0 0",
                    borderRadius: "10px 0px 0px 10px",
                    appearance: "none",
                  }}
                />

                <div
                  className="flex max-w-[85px] h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                  style={{ flex: "1 0 0", borderRadius: "0px 10px 10px 0px" }}
                >
                  <select
                    id="timing"
                    className="text-[#111517] cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                    defaultValue={"AM"}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div
              className="flex w-full  flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  id=""
                  type="time"
                  className="flex h-[50px] w-full  items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                  style={{
                    flex: "1 0 0",
                    borderRadius: "10px 0px 0px 10px",
                    appearance: "none",
                  }}
                />

                <div
                  className="flex max-w-[85px] h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                  style={{ flex: "1 0 0", borderRadius: "0px 10px 10px 0px" }}
                >
                  <select
                    id="timing"
                    className="text-[#111517] cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                    defaultValue={"AM"}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:max-w-[670px] lg:w-[670px] flex-col items-start gap-4 self-stretch lg:self-auto">
          <p className="label text-[#383838]">All Day Hours</p>
          <div className="flex flex-col lg:flex-row w-full items-start gap-5 self-stretch">
            <div
              className="flex w-full  flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  id=""
                  type="time"
                  className="flex w-full  h-[50px] items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                  style={{
                    flex: "1 0 0",
                    borderRadius: "10px 0px 0px 10px",
                    appearance: "none",
                  }}
                />

                <div
                  className="flex max-w-[85px] h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                  style={{ flex: "1 0 0", borderRadius: "0px 10px 10px 0px" }}
                >
                  <select
                    id="timing"
                    className="text-[#111517] cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                    defaultValue={"AM"}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div
              className="flex w-full  flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  id=""
                  type="time"
                  className="flex h-[50px] w-full  items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                  style={{
                    flex: "1 0 0",
                    borderRadius: "10px 0px 0px 10px",
                    appearance: "none",
                  }}
                />

                <div
                  className="flex max-w-[85px] h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                  style={{ flex: "1 0 0", borderRadius: "0px 10px 10px 0px" }}
                >
                  <select
                    id="timing"
                    className="text-[#111517] cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                    defaultValue={"AM"}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:max-w-[670px] lg:w-[670px] flex-col items-start gap-4 self-stretch lg:self-auto">
          <p className="label text-[#383838]">HOLIDAY CALENDAR</p>
          <div className="flex flex-col lg:flex-row w-full justify-end lg:justify-normal items-start lg:items-end gap-5 self-stretch">
            <div
              id="birth-date"
              className="flex w-full flex-col items-start self-stretch gap-2.5"
            >
              <label className="label text-[#868686]" htmlFor="date">
                From
              </label>
              <input
                id="date"
                type="date"
                placeholder="Enter Your Name"
                className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
              />
            </div>
            <div
              id="birth-date"
              className="flex w-full flex-col items-start self-stretch gap-2.5"
            >
              <label className="label text-[#868686]" htmlFor="date">
                To
              </label>
              <input
                id="date"
                type="date"
                placeholder="Enter Your Name"
                className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
              />
            </div>
            <div
              id=""
              className="flex w-full flex-col items-start self-stretch gap-2.5"
            >
              <label className="label text-[#868686]" htmlFor="countries">
                Type of Holiday
              </label>
              <select
                className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                style={{ border: "1px solid #DBDADE" }}
                defaultValue={"Select"}
              >
                <option value="Select">Select</option>
                {/* <option value="PM">PM</option> */}
              </select>
            </div>
            <button className="flex w-full lg:w-[92px] h-[50px] justify-center items-center rounded-[10px] border border-[#00CCB6] bg-[#FFF] py-[10px] px-5 gap-3 p-bold text-[#00CCB6]">
              Add Date
            </button>
          </div>
        </div>
        <div className="flex lg:max-w-[670px] lg:w-[670px] flex-col items-start gap-4 self-stretch lg:self-auto">
          <p className="label text-[#383838]">Term Duration</p>
          <div className="flex items-center gap-5 self-stretch">
            <div
              className="flex w-full h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
              style={{ flex: "1 0 0", borderRadius: "10px" }}
            >
              <select
                id="timing"
                className="text-[#111517] cursor-pointer font-semibold w-full rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                defaultValue={"AM"}
              >
                <option value="AM"></option>
                <option value="PM"></option>
              </select>
            </div>
            <p className="p-semi !text-[15px] text-[#383838]">Week</p>
          </div>
        </div>
      </form>
      <div
        className="flex pt-[30px] flex-col justify-center items-end gap-2.5 self-stretch"
        style={{ borderTop: "1px solid #DCDCDC" }}
      >
        <button className="cyan-btn self-stretch lg:self-auto lg:w-[400px]">
          Save
        </button>
      </div>
    </div>
  );
}

export default TimingContent;
