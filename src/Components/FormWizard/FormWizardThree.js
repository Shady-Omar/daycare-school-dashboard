import React from "react";

import nextArrow from "../../Assets/next-arrow.svg";
import prevArrow from "../../Assets/prev-arrow.svg";
import { Link } from "react-router-dom";

function FormWizardThree() {
  return (
    <>
      <form className=" flex flex-col items-center justify-center gap-[35px] self-stretch">
        <div className="flex lg:max-w-[670px] flex-col items-start gap-4 self-stretch lg:self-auto">
          <p className="label text-[#383838]">working day</p>
          <div className="grid grid-cols-2 lg:flex items-start gap-2 self-stretch">
            <button className="self-stretch lg:self-auto lg:w-[89px] h-[50px] white-btn">
              SUN
            </button>
            <button className="self-stretch lg:self-auto lg:w-[89px] h-[50px] white-btn">
              MON
            </button>
            <button className="self-stretch lg:self-auto lg:w-[89px] h-[50px] white-btn">
              TUE
            </button>
            <button className="self-stretch lg:self-auto lg:w-[89px] h-[50px] white-btn">
              WED
            </button>
            <button className="self-stretch lg:self-auto lg:w-[89px] h-[50px] white-btn">
              THU
            </button>
            <button className="flex self-stretch lg:self-auto lg:w-[89px] h-[50px] justify-center items-center rounded-[10px] border border-[#A4A4A4] bg-[#FFF] py-[10px] px-5 gap-3 p-bold text-[#A4A4A4]">
              FRI
            </button>
            <button className="flex self-stretch lg:self-auto lg:w-[89px] h-[50px] justify-center items-center rounded-[10px] border border-[#A4A4A4] bg-[#FFF] py-[10px] px-5 gap-3 p-bold text-[#A4A4A4]">
              SAT
            </button>
          </div>
        </div>
        <div className="flex lg:max-w-[670px] lg:w-[670px] flex-col items-start gap-4 self-stretch lg:self-auto">
          <p className="label text-[#383838]">MORNING HOURS</p>
          <div className="flex flex-col lg:flex-row items-start gap-5 self-stretch">
            <div
              className="flex flex-col items-start gap-2 self-stretch lg:self-auto"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  id=""
                  type="time"
                  className="flex h-[50px] items-center text-[#878787] border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
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
                    className="text-[#878787] p-reg cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                    defaultValue={"AM"}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col items-start gap-2 self-stretch lg:self-auto"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  id=""
                  type="time"
                  className="flex h-[50px] items-center text-[#878787] border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
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
                    className="text-[#878787] p-reg cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
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
          <div className="flex flex-col lg:flex-row items-start gap-5 self-stretch">
            <div
              className="flex flex-col items-start gap-2 self-stretch lg:self-auto"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  id=""
                  type="time"
                  className="flex h-[50px] items-center text-[#878787] border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
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
                    className="text-[#878787] p-reg cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                    defaultValue={"AM"}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col items-start gap-2 self-stretch lg:self-auto"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  id=""
                  type="time"
                  className="flex h-[50px] items-center text-[#878787] border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
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
                    className="text-[#878787] p-reg cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
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
          <div className="flex flex-col lg:flex-row items-start gap-5 self-stretch">
            <div
              className="flex flex-col items-start gap-2 self-stretch lg:self-auto"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  id=""
                  type="time"
                  className="flex h-[50px] items-center text-[#878787] border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
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
                    className="text-[#878787] p-reg cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                    defaultValue={"AM"}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col items-start gap-2 self-stretch lg:self-auto"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-start gap-[-1] self-stretch">
                <input
                  id=""
                  type="time"
                  className="flex h-[50px] items-center text-[#878787] border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
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
                    className="text-[#878787] p-reg cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
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
          <div className="flex flex-col justify-end lg:justify-normal lg:flex-row items-start lg:items-end gap-5 self-stretch">
            <div
              id="birth-date"
              className="flex w-full flex-col items-start self-stretch gap-2"
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
              className="flex w-full flex-col items-start self-stretch gap-2"
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
            <div className="flex w-full flex-col items-start self-stretch gap-2">
              <label className="label text-[#868686]">Type of Holiday</label>
              <select
                className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                style={{ border: "1px solid #DBDADE" }}
                defaultValue={"AM"}
              >
                <option value="AM">Select</option>
                <option value="PM">PM</option>
              </select>
            </div>
            <button className="white-btn">Add</button>
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
            <p className="p-semi text-[#383838]">Week</p>
          </div>
        </div>
      </form>

      <div className="flex flex-col lg:flex-row pt-[30px] justify-center lg:justify-between items-end gap-5 lg:gap-0 lg:items-center self-stretch border-t border-[#DCDCDC]">
        <Link
          to="/form-wizard/step-two"
          className="flex lg:w-[400px] justify-center items-center unactive-btn gap-3 self-stretch lg:self-auto order-2 lg:order-none"
        >
          <img src={prevArrow} alt="" /> Previous Step
        </Link>
        <Link
          to="/form-wizard/step-four"
          className="flex lg:w-[400px] justify-center items-center cyan-btn gap-3 self-stretch lg:self-auto"
        >
          Next Step <img src={nextArrow} alt="" />
        </Link>
      </div>
    </>
  );
}

export default FormWizardThree;
