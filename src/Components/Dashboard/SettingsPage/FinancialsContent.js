import React from "react";

import financialsIcon from "../../../Assets/financials-icon.svg";

function FinancialsContent() {
  return (
    <div className="flex p-5 lg:p-[30px] flex-col justify-center items-start gap-[50px] self-stretch bg-[#FFF] rounded-[10px] lg:rounded-[0px_10px_10px_10px]">
      {/* Title */}
      <div className="flex w-full py-[15px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]">
        <div className="w-9 h-9">
          <img src={financialsIcon} alt="financials" />
        </div>
        <div className="flex flex-col items-start gap-[5px]">
          <h5 className="h5-bold !text-[18px] text-[#202020]">Financials</h5>
        </div>
      </div>
      {/* Form */}
      {/* Installment */}
      <div className="flex flex-col items-start gap-5 self-stretch">
        <p className="label text-[#383838]">INSTALLMENT</p>
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
      {/* Cancelation */}
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
      {/* Refund */}
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
        <div className="flex pb-10 items-center gap-5 self-stretch">
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
              <p className="p-reg text-[#646464] text-left w-[210px]">Price</p>
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
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default FinancialsContent;
