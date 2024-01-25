import React from "react";
import { Link } from "react-router-dom";

import nextArrow from "../../Assets/next-arrow.svg";

function FormWizardOne() {
  return (
    <>
      <form className="flex flex-col lg:flex-row items-start lg:content-start gap-[30px] self-stretch lg:grid lg:grid-cols-2">
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div
            className="flex flex-col items-start gap-2 min-w-[165px] lg:w-auto"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="cr-num">
              CR Number
            </label>
            <input
              id="cr-num"
              type="text"
              className="flex h-[50px] px-[20px] text-[#878787] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
          <button className="w-[90px] white-btn">GET</button>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div
            className="flex flex-col items-start gap-2 flex-1"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="name-cr">
              Name in cr
            </label>
            <input
              disabled
              id="name-cr"
              type="text"
              className="flex h-[50px] px-[20px] text-[#878787] items-center self-stretch border-[#DBDADE] border bg-[#EDEDED] rounded-[10px]"
              placeholder="Lorem Ipsum Dolor Sit Amet"
            />
          </div>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="name-ar">
              Center Name Arabic
            </label>
            <input
              id="name-ar"
              type="text"
              className="flex h-[50px] px-[20px] text-[#878787] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="name-en">
              Center Name English
            </label>
            <input
              id="name-en"
              type="text"
              className="flex h-[50px] px-[20px] text-[#878787] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="center-email">
              Center Email Address
            </label>
            <input
              id="center-email"
              type="email"
              className="flex h-[50px] px-[20px] text-[#878787] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="center-phone">
              CENTER PHONE NUMBER
            </label>
            <input
              id="center-phone"
              type="tel"
              className="flex h-[50px] px-[20px] text-[#878787] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="center-type">
              CENTER TYPE
            </label>
            <input
              id="center-type"
              type="text"
              className="flex h-[50px] px-[20px] text-[#878787] items-center self-stretch border-[#DBDADE] border bg-[#EDEDED] rounded-[10px]"
              placeholder="Home Daycare"
              disabled
            />
          </div>
        </div>
        <div className="flex min-w-[585px] items-end gap-4 flex-1 opacity-0">
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="center-type">
              CENTER TYPE
            </label>
            <input
              disabled
              id="center-type"
              type="text"
              className="flex h-[50px] px-[20px] text-[#878787] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div
            className="flex flex-col items-start gap-2 min-w-[165px] lg:w-auto"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="iban">
              IBAN Number
            </label>
            <input
              id="iban"
              type="text"
              className="flex h-[50px] px-[20px] text-[#878787] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
          <button className="white-btn w-[90px]">GET</button>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="bank-name">
              Bank Name
            </label>
            <input
              id="bank-name"
              type="text"
              className="flex h-[50px] px-[20px] text-[#878787] items-center self-stretch border-[#DBDADE] border bg-[#EDEDED] rounded-[10px]"
              placeholder="Select Bank"
              disabled
            />
          </div>
        </div>
      </form>
      <div className="flex pt-[30px] flex-col justify-center items-end gap-2.5 self-stretch border-t border-[#DCDCDC]">
        <Link
          to="/form-wizard/step-two"
          className="flex lg:w-[400px] justify-center items-center cyan-btn gap-3 self-stretch lg:self-auto"
        >
          Next Step <img src={nextArrow} alt="" />
        </Link>
      </div>
    </>
  );
}

export default FormWizardOne;
