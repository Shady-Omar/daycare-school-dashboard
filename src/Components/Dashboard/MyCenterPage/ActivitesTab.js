import React from "react";

import babyIcon from "../../../Assets/baby-bottle-icon.svg";
import diaperIcon from "../../../Assets/diaper-icon.svg";
import teethIcon from "../../../Assets/teeth-icon.svg";
import peoplePlaceholder from "../../../Assets/people-placeholder.png";
import editIcon from "../../../Assets/action-edit.svg";
import imageIcon from "../../../Assets/image-icon.svg";
import photosPlaceholder from "../../../Assets/photos-placeholder.png";

function ActivitesTab() {
  return (
    <div className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch rounded-[10px] lg:rounded-[0px_10px_10px_10px] bg-[#FFF]">
      <div className="flex flex-col justify-center items-start gap-2.5 self-stretch rounded-[10px]">
        <h3 className="h3-med text-[#383838]">Today</h3>
        {/* activity cards */}
        <div
          className="flex flex-col lg:flex-row lg:h-[75px] p-5 lg:p-0 lg:px-5 justify-center lg:justify-between items-start lg:items-center self-stretch gap-5 lg:gap-0 rounded-[10px]"
          style={{ border: "1px solid #DCDCDC" }}
        >
          {/* Name */}
          <div className="flex flex-col lg:flex-row self-stretch items-start lg:items-center justify-center lg:justify-normal gap-5 lg:gap-[50px]">
            {/* Text */}
            <div className="flex self-stretch lg:self-auto lg:w-[190px] items-center gap-[15px] lg:shrink-0">
              <div
                className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 shrink-0 rounded-[5px]"
                style={{ background: "rgba(0, 204, 182, 0.10)" }}
              >
                <img src={babyIcon} alt="bottle" />
              </div>
              <div className="flex flex-col justify-center items-start gap-0.5">
                <p className="p-bold text-[#383838]">Bottle</p>
                <p className="label-reg text-[#A4A4A4]">250 ml</p>
              </div>
            </div>
            {/* People */}
            <div className="flex items-center ">
              <img src={peoplePlaceholder} alt="people" />
              <img
                className=" ml-[-12px]"
                src={peoplePlaceholder}
                alt="people"
              />
              <img
                className=" ml-[-12px]"
                src={peoplePlaceholder}
                alt="people"
              />
              <img
                className=" ml-[-12px]"
                src={peoplePlaceholder}
                alt="people"
              />
              <img
                className=" ml-[-12px]"
                src={peoplePlaceholder}
                alt="people"
              />
            </div>
          </div>
          {/* Action */}
          <div className="flex self-stretch justify-between lg:justify-end items-center lg:gap-[30px]">
            <p className="label-reg !text-[13px] text-[#878787]">4:32 PM</p>
            <button
              className="flex justify-center items-start gap-2.5 py-2.5 px-[15px] rounded-md label-reg text-[#383838]"
              style={{ border: "1px solid #A4A4A4" }}
            >
              <img src={editIcon} alt="" />
              Edit
            </button>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row lg:h-[75px] p-5 lg:p-0 lg:px-5 justify-center lg:justify-between items-start lg:items-center self-stretch gap-5 lg:gap-0 rounded-[10px]"
          style={{ border: "1px solid #DCDCDC" }}
        >
          {/* Name */}
          <div className="flex flex-col lg:flex-row self-stretch items-start lg:items-center justify-center lg:justify-normal gap-5 lg:gap-[50px]">
            {/* Text */}
            <div className="flex self-stretch lg:self-auto lg:w-[190px] items-center gap-[15px] lg:shrink-0">
              <div
                className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 shrink-0 rounded-[5px]"
                style={{ background: "rgba(100, 24, 195, 0.10)" }}
              >
                <img src={diaperIcon} alt="diaper" />
              </div>
              <div className="flex flex-col justify-center items-start gap-0.5">
                <p className="p-bold text-[#383838]">Diaper</p>
                <p className="label-reg text-[#A4A4A4]">Diaper | Dry</p>
              </div>
            </div>
            {/* People */}
            <div className="flex items-center ">
              <img src={peoplePlaceholder} alt="people" />
              <img
                className=" ml-[-12px]"
                src={peoplePlaceholder}
                alt="people"
              />
              <img
                className=" ml-[-12px]"
                src={peoplePlaceholder}
                alt="people"
              />
            </div>
          </div>
          {/* Action */}
          <div className="flex self-stretch justify-between lg:justify-end items-center lg:gap-[30px]">
            <p className="label-reg !text-[13px] text-[#878787]">4:32 PM</p>
            <button
              className="flex justify-center items-start gap-2.5 py-2.5 px-[15px] rounded-md label-reg text-[#383838]"
              style={{ border: "1px solid #A4A4A4" }}
            >
              <img src={editIcon} alt="" />
              Edit
            </button>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row lg:h-[75px] p-5 lg:p-0 lg:px-5 justify-center lg:justify-between items-start lg:items-center self-stretch gap-5 lg:gap-0 rounded-[10px]"
          style={{ border: "1px solid #DCDCDC" }}
        >
          {/* Name */}
          <div className="flex flex-col lg:flex-row self-stretch items-start lg:items-center justify-center lg:justify-normal gap-5 lg:gap-[50px]">
            {/* Text */}
            <div className="flex self-stretch lg:self-auto lg:w-[190px] items-center gap-[15px] lg:shrink-0">
              <div
                className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 shrink-0 rounded-[5px]"
                style={{ background: "rgba(94, 207, 255, 0.10)" }}
              >
                <img src={teethIcon} alt="teeth" />
              </div>
              <div className="flex flex-col justify-center items-start gap-0.5">
                <p className="p-bold text-[#383838]">Teething</p>
                <p className="label-reg text-[#A4A4A4]">Lorem ipsum dolor</p>
              </div>
            </div>
            {/* People */}
            <div className="flex items-center ">
              <img src={peoplePlaceholder} alt="people" />
              <img
                className=" ml-[-12px]"
                src={peoplePlaceholder}
                alt="people"
              />
              <img
                className=" ml-[-12px]"
                src={peoplePlaceholder}
                alt="people"
              />
            </div>
          </div>
          {/* Action */}
          <div className="flex self-stretch justify-between lg:justify-end items-center lg:gap-[30px]">
            <p className="label-reg !text-[13px] text-[#878787]">4:32 PM</p>
            <button
              className="flex justify-center items-start gap-2.5 py-2.5 px-[15px] rounded-md label-reg text-[#383838]"
              style={{ border: "1px solid #A4A4A4" }}
            >
              <img src={editIcon} alt="" />
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-2.5 self-stretch rounded-[10px]">
        <h3 className="h3-med text-[#383838]">09/10/2023</h3>
        {/* activity cards */}
        <div
          className="flex flex-col p-5 items-start lg:items-center gap-5 self-stretch rounded-[10px]"
          style={{ border: "1px solid #DCDCDC" }}
        >
          {/* Top */}
          <div
            className="flex pb-5 flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-5 lg:gap-0 self-stretch"
            style={{ borderBottom: "1px solid #DCDCDC" }}
          >
            {/* Name */}
            <div className="flex flex-col lg:flex-row self-stretch items-start lg:items-center justify-center lg:justify-normal gap-5 lg:gap-[50px]">
              {/* Text */}
              <div className="flex self-stretch lg:self-auto lg:w-[190px] items-center gap-[15px] lg:shrink-0">
                <div
                  className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 shrink-0 rounded-[5px]"
                  style={{ background: "rgba(227, 40, 175, 0.10)" }}
                >
                  <img src={imageIcon} alt="photos" />
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <p className="p-bold text-[#383838]">Photo</p>
                  <p className="label-reg text-[#A4A4A4]">Lorem ipsum dolor</p>
                </div>
              </div>
              {/* People */}
              <div className="flex items-center ">
                <img src={peoplePlaceholder} alt="people" />
                <img
                  className=" ml-[-12px]"
                  src={peoplePlaceholder}
                  alt="people"
                />
                <img
                  className=" ml-[-12px]"
                  src={peoplePlaceholder}
                  alt="people"
                />
              </div>
            </div>
            {/* Action */}
            <div className="flex self-stretch justify-between lg:justify-end items-center lg:gap-[30px]">
              <p className="label-reg !text-[13px] text-[#878787]">4:32 PM</p>
              <button
                className="flex justify-center items-start gap-2.5 py-2.5 px-[15px] rounded-md label-reg text-[#383838]"
                style={{ border: "1px solid #A4A4A4" }}
              >
                <img src={editIcon} alt="" />
                Edit
              </button>
            </div>
          </div>
          {/* Images */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
            <img src={photosPlaceholder} alt="" />
            <img src={photosPlaceholder} alt="" />
            <img src={photosPlaceholder} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivitesTab;
