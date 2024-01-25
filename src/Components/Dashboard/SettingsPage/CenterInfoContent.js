import React from "react";

import schoolIcon from "../../../Assets/school-icon.svg";
import ChangeIBANModal from "./ChangeIBANModal";

function CenterInfoContent() {
  return (
    <div className="flex p-5 lg:p-[30px] flex-col justify-center items-start gap-[30px] lg:gap-[50px] self-stretch bg-[#FFF] rounded-[10px] lg:rounded-[0px_10px_10px_10px]">
      {/* Title */}
      <div
        className="flex w-full py-[15px] px-5 items-center gap-5 self-stretch rounded-[10px]"
        style={{ background: "rgba(0, 204, 182, 0.10)" }}
      >
        <div
          className="flex w-9 h-9 justify-center items-center"
          style={{ padding: "2.88px 3px 3px 3px" }}
        >
          <img src={schoolIcon} alt="school" />
        </div>
        <div className="flex flex-col items-start gap-[5px]">
          <h5 className="h5-bold text-[#202020]">1254367890</h5>
          <p className="p-reg text-[#646464]">Daycare Special Number</p>
        </div>
      </div>
      {/* Form */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 items-start lg:content-start gap-[30px] self-stretch">
        <div className="flex self-stretch items-end gap-4">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="cr-num">
              CR Number
            </label>
            <input
              id="cr-num"
              type="text"
              className="flex p-reg text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex self-stretch items-end gap-4">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="name-cr">
              Name in cr
            </label>
            <input
              disabled
              id="name-cr"
              type="text"
              className="flex p-reg text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#EDEDED] rounded-[10px]"
              placeholder="Lorem Ipsum Dolor Sit Amet"
            />
          </div>
        </div>
        <div className="flex self-stretch items-end gap-4">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="name-ar">
              Center Name Arabic
            </label>
            <input
              id="name-ar"
              type="text"
              className="flex p-reg text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex self-stretch items-end gap-4">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="name-en">
              Center Name English
            </label>
            <input
              id="name-en"
              type="text"
              className="flex p-reg text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex self-stretch items-end gap-4">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="center-email">
              Center Email Address
            </label>
            <input
              id="center-email"
              type="email"
              className="flex p-reg text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex self-stretch items-end gap-4">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="center-phone">
              CENTER PHONE NUMBER
            </label>
            <input
              id="center-phone"
              type="tel"
              className="flex p-reg text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex self-stretch items-end gap-4">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="center-phone">
              Certification Number
            </label>
            <input
              type="text"
              placeholder=""
              className="flex p-reg text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex self-stretch items-end gap-4">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="center-phone">
              Certificate Expiry Date
            </label>
            <input
              type="date"
              placeholder=""
              className="flex p-reg text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>

        <div className="flex self-stretch items-end gap-4">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="center-type">
              CENTER TYPE
            </label>
            <input
              id="center-type"
              type="text"
              className="flex p-reg text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#EDEDED] rounded-[10px]"
              placeholder="Home Daycare"
            />
          </div>
        </div>
        <div className="hidden lg:flex self-stretch items-end gap-4 opacity-0">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="center-type">
              CENTER TYPE
            </label>
            <input
              disabled
              id="center-type"
              type="text"
              className="flex p-reg text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex self-stretch items-end gap-2.5 lg:gap-4">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="iban">
              IBAN Number
            </label>
            <input
              id="iban"
              type="text"
              className="flex p-reg w-full text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#EDEDED] rounded-[10px]"
              placeholder="1234567890"
            />
          </div>
          <ChangeIBANModal />
        </div>
        <div className="flex self-stretch items-end gap-4 flex-1">
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="bank-name">
              Bank Name
            </label>
            <input
              id="bank-name"
              type="text"
              className="flex p-reg text-[#A4A4A4] h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#EDEDED] rounded-[10px]"
              placeholder="Saudi Bank"
            />
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

export default CenterInfoContent;
