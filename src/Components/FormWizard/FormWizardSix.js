import React from "react";

import { Link } from "react-router-dom";

import planDaily from "../../Assets/plan-daily.svg";
import planMonthlyUnchecked from "../../Assets/plan-monthly-unchecked.svg";
import planTermsUnchecked from "../../Assets/plan-terms-unchecked.svg";
import planArrow from "../../Assets/plan-arrow.svg";

import nextArrow from "../../Assets/next-arrow.svg";
import prevArrow from "../../Assets/prev-arrow.svg";

function FormWizardSix() {
  return (
    <>
      <div className="flex flex-col items-start gap-[60px] self-stretch">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex flex-col items-start gap-2.5">
            <p className="label text-[#383838]">Select plan</p>
          </div>
          <div className="flex lg:flex-row flex-col items-start gap-5 lg:gap-[30px] self-stretch">
            <div
              className="flex h-[100px] py-5 px-[30px] justify-between items-center rounded-md self-stretch lg:self-auto"
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
              className="flex h-[100px] py-5 px-[30px] justify-between items-center rounded-md self-stretch lg:self-auto"
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
              className="flex h-[100px] py-5 px-[30px] justify-between items-center rounded-md self-stretch lg:self-auto"
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
                    className="flex flex-col items-start gap-2.5"
                    style={{ flex: "1 0 0" }}
                  >
                    <label className="p-reg text-[#646464]">Price</label>
                    <div className="flex flex-col items-start gap-2 self-stretch">
                      <div className="flex items-start gap-[-1px] self-stretch">
                        <input
                          type="text"
                          className="w-full h-[50px] px-5 bg-[#FFF]"
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
                    <label className="p-reg text-[#646464]">Quantity</label>
                    <div className="flex flex-col items-start gap-2 self-stretch">
                      <div className="flex items-center gap-5 self-stretch">
                        <input
                          type="text"
                          className="w-full h-[50px] px-5 bg-[#FFF]"
                          placeholder="Enter Quantity"
                          style={{
                            borderRadius: "10px ",
                            border: "1px solid #DBDADE",
                          }}
                        />
                        <p className="p-reg text-[#646464]">Available Seats</p>
                      </div>
                    </div>
                  </div>
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
                    <input
                      type="checkbox"
                      className="w-[18px] h-[18px] rounded"
                    />
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
                    <input
                      type="checkbox"
                      className="w-[18px] h-[18px] rounded"
                    />
                    <p className="p-bold text-[#646464]">Full Day</p>
                  </div>
                  <img className=" rotate-180" src={planArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div
            className="flex flex-col lg:flex-row justify-center lg:justify-end items-end lg:items-center gap-5 self-stretch"
            style={{
              padding: "10px 0px 30px 0px",
              borderBottom: "1px solid #DCDCDC",
            }}
          >
            <button className="white-btn self-stretch lg:w-[180px]">
              Edit
            </button>
            <button className="cyan-btn self-stretch lg:w-[180px]">Save</button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex flex-col items-start gap-2.5">
            <p className="label text-[#383838]">INSTALLMENT</p>
          </div>
          <div
            className="flex pb-10 items-center gap-5 self-stretch"
            style={{ borderBottom: "1px solid #DCDCDC" }}
          >
            <div
              className="flex self-stretch w-full flex-col items-start gap-[30px] lg:gap-5"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
                <p className="p-reg text-[#646464] text-left w-[210px]">
                  Accept Installment
                </p>
                <div className="flex items-center gap-5 self-stretch">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                  <p className="label text-[#878787] text-left w-[210px]">
                    ONLY FOR TERM PLAN
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
                <p className="p-reg text-[#646464] text-left w-[210px]">
                  Split to
                </p>
                <div className="flex items-center gap-5 self-stretch">
                  <select
                    className="text-[#A4A4A4] w-full lg:max-w-[90px] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                    style={{ border: "1px solid #DBDADE" }}
                    defaultValue={"3"}
                  >
                    <option value="3">3</option>
                    {/* <option value="PM">PM</option> */}
                  </select>
                  <p className="p-reg text-[#878787] text-left ">Invoices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex flex-col items-start gap-2.5">
            <p className="label text-[#383838]">Cancelation</p>
          </div>
          <div
            className="flex pb-10 items-center gap-5 self-stretch"
            style={{ borderBottom: "1px solid #DCDCDC" }}
          >
            <div
              className="flex flex-col items-start gap-[30px] lg:gap-5"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-center gap-5 self-stretch lg:self-auto">
                <p className="p-reg text-[#646464] text-left w-[210px]">
                  Accept Cancelation
                </p>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
                <p className="p-reg text-[#646464] text-left  w-[210px]">
                  Before Contract Starts
                </p>

                <div className="flex items-center gap-5 self-stretch">
                  <select
                    className="text-[#A4A4A4] lg:max-w-[90px] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                    style={{ border: "1px solid #DBDADE" }}
                    defaultValue={"3"}
                  >
                    <option value="3">3</option>
                    {/* <option value="PM">PM</option> */}
                  </select>
                  <p className="p-reg text-[#878787] text-left">Days</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
                <p className="p-reg text-[#646464] text-left w-[210px]">
                  Refund Percentage
                </p>
                <div className="flex items-center gap-5 self-stretch">
                  <input
                    type="text"
                    className="flex lg:max-w-[70px] h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                    style={{ flex: "1 0 0", borderRadius: "10px" }}
                  />

                  <p className="p-reg text-[#878787] text-left w-[210px]">%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex flex-col items-start gap-2.5">
            <p className="label text-[#383838]">Refund</p>
          </div>
          <div
            className="flex pb-10 items-center gap-5 self-stretch"
            style={{ borderBottom: "1px solid #DCDCDC" }}
          >
            <div
              className="flex flex-col items-start gap-[30px] lg:gap-5"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
                <p className="p-reg text-[#646464] text-left w-[210px]">
                  Accept Refund
                </p>
                <div className="flex items-center gap-5 self-stretch">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                  <p className="label text-[#878787] text-left w-[210px]">
                    ONLY FOR TERM PLAN
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
                <p className="p-reg text-[#646464] text-left w-[210px]">
                  Cancel Before the End of
                </p>
                <div className="flex items-center gap-5 self-stretch">
                  <select
                    className="text-[#A4A4A4] lg:max-w-[90px] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                    style={{ border: "1px solid #DBDADE" }}
                    defaultValue={"7"}
                  >
                    <option value="7">7</option>
                    {/* <option value="PM">PM</option> */}
                  </select>
                  <p className="p-reg text-[#878787] text-left">Week</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
                <p className="p-reg text-[#646464] text-left w-[210px]">
                  Refund Percentage
                </p>
                <div className="flex items-center gap-5 self-stretch">
                  <input
                    type="text"
                    className="flex lg:max-w-[70px] h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                    style={{ flex: "1 0 0", borderRadius: "10px" }}
                  />

                  <p className="p-reg text-[#878787] text-left w-[210px]">%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex flex-col items-start gap-2.5">
            <p className="label text-[#383838]">Registration Fees</p>
          </div>
          <div
            className="flex pb-10 items-center gap-5 self-stretch"
            style={{ borderBottom: "1px solid #DCDCDC" }}
          >
            <div
              className="flex flex-col items-start gap-[30px] lg:gap-5"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
                <div className="flex flex-col justify-center items-start gap-[5px]">
                  <p className="p-reg text-[#646464] text-left w-[210px]">
                    Registration Fees
                  </p>
                  <p className="label-reg text-[#878787] text-left w-[210px]">
                    (non-refundable amount)
                  </p>
                </div>
                <div className="flex items-center gap-5 self-stretch">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                  <p className="label text-[#878787] text-left w-[210px]">
                    ONLY FOR TERM PLAN
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
                <p className="p-reg text-[#646464] text-left w-[210px]">
                  Price
                </p>
                <div className="flex w-full lg:w-[200px] items-start gap-[-1px] self-stretch">
                  <input
                    type="text"
                    className="w-full h-[50px] px-5 bg-[#FFF]"
                    placeholder="Enter Price"
                    style={{
                      borderRadius: "10px 0px 0px 10px",
                      border: "1px solid #DBDADE",
                    }}
                  />
                  <div
                    className="flex w-full h-[50px] justify-center items-center"
                    style={{
                      borderRadius: "0px 10px 10px 0px",
                      border: "1px solid #DBDADE",
                    }}
                  >
                    <p className="p-reg text-[#646464]">SAR</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
                <p className="p-reg text-[#646464] text-left w-[210px]">
                  Including
                </p>
                <div className="flex items-center gap-[30px] self-stretch">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      className="w-[18px] h-[18px] rounded"
                    />
                    <p className="p-reg text-[#646464]">Uniform</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      className="w-[18px] h-[18px] rounded"
                      checked
                    />
                    <p className="p-reg text-[#646464]">Books</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
                <p className="p-reg text-[#646464] text-left w-[210px]">
                  From Age
                </p>
                <div className="flex w-full lg:w-[200px] flex-col items-start self-stretch gap-2.5">
                  <div className="flex w-full flex-row">
                    <input
                      id=""
                      type="text"
                      className="flex w-full  h-[50px] items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                      style={{
                        flex: "1 0 0",
                        borderRadius: "10px 0px 0px 10px",
                        appearance: "none",
                      }}
                    />

                    <div
                      className="flex h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                      style={{
                        flex: "1 0 0",
                        borderRadius: "0px 10px 10px 0px",
                      }}
                    >
                      <select
                        id="timing"
                        className="text-[#646464] cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                        defaultValue={"Years"}
                      >
                        <option value="Years">Years</option>
                        {/* <option value="PM">PM</option> */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 self-stretch">
                <p className="p-reg text-[#646464] text-left w-[210px]">
                  Deducted from Plan fees
                </p>
                <div className="flex items-center gap-[30px] self-stretch">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-[30px] justify-center lg:justify-between items-end gap-5 lg:gap-0 lg:items-center self-stretch border-t border-[#DCDCDC]">
        <Link
          to="/form-wizard/step-five"
          className="flex lg:w-[400px] justify-center items-center unactive-btn gap-3 self-stretch lg:self-auto order-2 lg:order-none"
        >
          <img src={prevArrow} alt="" /> Previous Step
        </Link>
        <Link
          to="/form-wizard/step-seven"
          className="flex lg:w-[400px] justify-center items-center cyan-btn gap-3 self-stretch lg:self-auto"
        >
          Next Step <img src={nextArrow} alt="" />
        </Link>
      </div>
    </>
  );
}

export default FormWizardSix;
