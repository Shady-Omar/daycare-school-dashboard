import React from "react";

import planDaily from "../../../Assets/plan-daily.svg";
import planMonthlyUnchecked from "../../../Assets/plan-monthly-unchecked.svg";
import planTermsUnchecked from "../../../Assets/plan-terms-unchecked.svg";
import planArrow from "../../../Assets/plan-arrow.svg";

import AddDiscountModal from "./AddDiscountModal";

function PlansContent() {
  return (
    <div className="flex flex-col items-start gap-5 self-stretch">
      <p className="label text-[#383838]">Select plan</p>
      <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-[30px] self-stretch">
        <div
          className="flex h-[100px] py-5 px-[30px] justify-between items-center rounded-md cursor-pointer self-stretch"
          style={{ flex: "1 0 0", border: "2px solid #00CCB6" }}
        >
          <div className="flex justify-center items-center gap-[15px]">
            <img style={{ padding: "1px 2px" }} src={planDaily} alt="" />
            <div className="flex flex-col items-start">
              <h3 className="h3-bold text-[#383838]">Daily</h3>
              <p className="p-reg text-[#878787]">6am - 6pm</p>
            </div>
          </div>
          <input type="checkbox" className="w-[18px] h-[18px] rounded" />
        </div>
        <div
          className="flex h-[100px] py-5 px-[30px] justify-between items-center rounded-md cursor-pointer self-stretch"
          style={{ flex: "1 0 0", border: "2px solid #DCDCDC" }}
        >
          <div className="flex justify-center items-center gap-[15px]">
            <img
              style={{ padding: "1px 2px" }}
              src={planMonthlyUnchecked}
              alt=""
            />
            <div className="flex flex-col items-start">
              <h3 className="h3-bold text-[#A4A4A4]">Monthly</h3>
              <p className="p-reg text-[#A4A4A4]">30 days</p>
            </div>
          </div>
          <input type="checkbox" className="w-[18px] h-[18px] rounded" />
        </div>
        <div
          className="flex h-[100px] py-5 px-[30px] justify-between items-center rounded-md cursor-pointer self-stretch"
          style={{ flex: "1 0 0", border: "2px solid #DCDCDC" }}
        >
          <div className="flex justify-center items-center gap-[15px]">
            <img
              style={{ padding: "1px 2px" }}
              src={planTermsUnchecked}
              alt=""
            />
            <div className="flex flex-col items-start">
              <h3 className="h3-bold text-[#A4A4A4]">Terms</h3>
              <p className="p-reg text-[#A4A4A4]">Lorem ipsum</p>
            </div>
          </div>
          <input type="checkbox" className="w-[18px] h-[18px] rounded" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <div
          className="flex p-[30px] items-start gap-[40px] self-stretch rounded-md bg-[#FFF]"
          style={{ border: "1px solid #DCDCDC" }}
        >
          <div
            className="flex flex-col items-start gap-5"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] rounded"
                  checked
                />
                <p className="p-bold text-[#646464]">Morning</p>
              </div>
              <img src={planArrow} alt="" />
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-5 self-stretch">
              <div
                className="flex flex-col items-start gap-2.5 self-stretch lg:self-auto"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">Price</label>
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <div className="flex items-start gap-[-1px] self-stretch">
                    <input
                      type="text"
                      className="w-full h-[50px] px-5 bg-[#FFF] focus:outline-none"
                      placeholder="Enter Price"
                      style={{
                        borderRadius: "10px 0px 0px 10px",
                        border: "1px solid #DBDADE",
                      }}
                    />
                    <div
                      className="flex w-[94px] h-[50px] justify-center items-center"
                      style={{
                        borderRadius: "0px 10px 10px 0px",
                        border: "1px solid #DBDADE",
                      }}
                    >
                      <p className="p-reg text-[#646464]">SAR</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-start gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">Quantity</label>
                <div className="flex  items-start gap-2 self-stretch">
                  <div
                    className="flex w-full items-start gap-[-1px] self-stretch rounded-[10px]"
                    style={{ border: "1px solid #DBDADE" }}
                  >
                    <input
                      type="text"
                      className="w-full h-[50px] px-5 bg-[#FFF] rounded-[10px] focus:outline-none"
                    />
                    <div className="hidden lg:flex w-full h-[50px] justify-center items-center">
                      <p className="p-reg text-[#878787]">Available Seats</p>
                    </div>
                  </div>
                  <div className="flex lg:hidden w-full h-[50px] justify-center items-center">
                    <p className="p-reg text-[#878787]">Available Seats</p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-start gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">
                  Reminder if quantity reach
                </label>
                <div className="flex items-center gap-5 self-stretch">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      className="w-[18px] h-[18px] rounded"
                      checked
                    />
                    <p className="p-reg text-[#646464]">Yes</p>
                  </div>
                  <div
                    className="flex w-full items-start gap-[-1px] self-stretch rounded-[10px]"
                    style={{ border: "1px solid #DBDADE" }}
                  >
                    <input
                      type="text"
                      className="w-full h-[50px] px-5 bg-[#FFF] rounded-[10px] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <AddDiscountModal />
          </div>
        </div>
        <div
          className="flex p-[30px] items-start gap-[40px] self-stretch rounded-md bg-[#F9F9F9]"
          style={{ border: "1px solid #DCDCDC" }}
        >
          <div
            className="flex flex-col items-start gap-5"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-2.5">
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-bold text-[#646464]">Evening</p>
              </div>
              <img className=" rotate-180" src={planArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="flex p-[30px] items-start gap-[40px] self-stretch rounded-md bg-[#F9F9F9]"
          style={{ border: "1px solid #DCDCDC" }}
        >
          <div
            className="flex flex-col items-start gap-5"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-2.5">
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-bold text-[#646464]">Full Day</p>
              </div>
              <img className=" rotate-180" src={planArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <input
            type="checkbox"
            className="w-[18px] h-[18px] rounded"
            checked
          />
          <p className="p-bold !text-[15px] text-[#646464] text-left">
            Enable Automatic Acceptance for this Plan Admission Requests
          </p>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-center lg:justify-end items-end lg:items-center gap-5 self-stretch"
        style={{
          padding: "10px 0px 30px 0px",
          borderBottom: "1px solid #DCDCDC",
        }}
      >
        <button className="white-btn self-stretch lg:self-auto lg:w-[180px]">
          Edit
        </button>
        <button className="cyan-btn self-stretch lg:self-auto lg:w-[180px]">
          Save
        </button>
      </div>
    </div>
  );
}

export default PlansContent;
