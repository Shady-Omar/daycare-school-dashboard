import React from "react";
import StudentPersonalInfoEditModal from "../../../StudentPersonalInfoEditModal";
import StudentAddressInfoEditModal from "../../../StudentAddressInfoEditModal";
import StudentContractEditModal from "../../../StudentContractEditModal";
import StudentFamilyEditModal from "../../../StudentFamilyEditModal";
import StudentRenewContractModal from "../../../StudentRenewContractModal";

function StudentsProfileTab() {
  return (
    <div className="flex p-[30px] items-start gap-[30px] self-stretch rounded-[10px] bg-white">
      {/* Left Side */}
      <div
        className="flex flex-col items-start gap-[30px]"
        style={{ flex: "1 0 0" }}
      >
        {/* Personal Info */}
        <div
          className="flex flex-col justify-center items-center gap-[30px] self-stretch rounded-lg"
          style={{ border: "1px solid #EBEBEB" }}
        >
          <div className="flex px-5 flex-col justify-center items-center self-stretch">
            {/* Head */}
            <div
              className="flex justify-between items-start self-stretch"
              style={{ borderBottom: "1px solid #EBEBEB" }}
            >
              <div
                className="flex py-5 items-start gap-[15px] self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <h5 className="h5-bold text-[#00CCB6]">Personal Information</h5>
              </div>
              <div
                className="flex justify-end items-start gap-2.5 self-stretch"
                style={{ padding: "20px 0px 20px 20px" }}
              >
                <StudentPersonalInfoEditModal />
              </div>
            </div>
            {/* Info */}
            <div className="flex flex-col justify-center items-center self-stretch">
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">Name</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Abdullah Zubair</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">
                    Student ID
                  </h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">0123456789</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">Birthday</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">February 2, 2017</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">Age</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">6 years old</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">Gender</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Male</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">
                    Nationality
                  </h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Saudi Arabia</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">
                    Vaccination
                  </h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Yes</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">Autism</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Yes, LEVEL 2</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">
                    Disability
                  </h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">No</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">
                    Allergies
                  </h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">No</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">Disease</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">No</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838] text-left">
                    Allow to use Student Photo
                  </h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">No</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div
          className="flex pb-5 flex-col justify-center items-center gap-2.5 self-stretch rounded-lg"
          style={{ border: "1px solid #EBEBEB" }}
        >
          <div className="flex px-5 flex-col justify-center items-center gap-[30px] self-stretch">
            <div className="flex flex-col items-center justify-center self-stretch">
              {/* Head */}
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#00CCB6]">Contract Details</h5>
                </div>
                <div
                  className="flex justify-end items-start gap-2.5 self-stretch cursor-pointer"
                  style={{ padding: "20px 0px 20px 20px" }}
                >
                  <StudentContractEditModal />
                </div>
              </div>
              {/* Info */}
              <div className="flex flex-col items-center justify-center self-stretch">
                <div
                  className="flex justify-between items-start self-stretch"
                  style={{ borderBottom: "1px solid #EBEBEB" }}
                >
                  <div
                    className="flex py-5 items-start gap-[15px] self-stretch"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-bold text-[#383838]">Plan Type</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">Monthly</h5>
                  </div>
                </div>
                <div
                  className="flex justify-between items-start self-stretch"
                  style={{ borderBottom: "1px solid #EBEBEB" }}
                >
                  <div
                    className="flex py-5 items-start gap-[15px] self-stretch"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-bold text-[#383838]">Service Timing</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">Evening</h5>
                  </div>
                </div>
                <div
                  className="flex justify-between items-start self-stretch"
                  style={{ borderBottom: "1px solid #EBEBEB" }}
                >
                  <div
                    className="flex py-5 items-start gap-[15px] self-stretch"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-bold text-[#383838]">Service Days</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">5 days a week</h5>
                  </div>
                </div>
                <div
                  className="flex justify-between items-start self-stretch"
                  style={{ borderBottom: "1px solid #EBEBEB" }}
                >
                  <div
                    className="flex py-5 items-start gap-[15px] self-stretch"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-bold text-[#383838]">Service Hours</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">1:30 PM - 5:30 PM</h5>
                  </div>
                </div>
                <div
                  className="flex justify-between items-start self-stretch"
                  style={{ borderBottom: "1px solid #EBEBEB" }}
                >
                  <div
                    className="flex py-5 items-start gap-[15px] self-stretch"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-bold text-[#383838]">Start Date</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">01/12/2023</h5>
                  </div>
                </div>
                <div
                  className="flex justify-between items-start self-stretch"
                  style={{ borderBottom: "1px solid #EBEBEB" }}
                >
                  <div
                    className="flex py-5 items-start gap-[15px] self-stretch"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-bold text-[#383838]">End Date</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">03/12/2023</h5>
                  </div>
                </div>
                <div
                  className="flex justify-between items-start self-stretch"
                  style={{ borderBottom: "1px solid #EBEBEB" }}
                >
                  <div
                    className="flex py-5 items-start gap-[15px] self-stretch"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-bold text-[#383838]">Status</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">Active</h5>
                  </div>
                </div>
                <div
                  className="flex justify-between items-start self-stretch"
                  style={{ borderBottom: "1px solid #EBEBEB" }}
                >
                  <div
                    className="flex py-5 items-start gap-[15px] self-stretch"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-bold text-[#383838]">Amount</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">150.00 SAR</h5>
                  </div>
                </div>
                <div
                  className="flex justify-between items-start self-stretch"
                  style={{ borderBottom: "1px solid #EBEBEB" }}
                >
                  <div
                    className="flex py-5 items-start gap-[15px] self-stretch"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-bold text-[#383838]">Invoices </h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">Paid</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-2.5 self-stretch">
              <StudentRenewContractModal />
              <button className="unactive-btn !bg-white !border-[#A4A4A4] self-stretch">
                View Contract
              </button>
              <button className="red-btn self-stretch">
                Terminate Contract
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div
        className="flex flex-col items-start gap-[30px]"
        style={{ flex: "1 0 0" }}
      >
        {/* Address Info */}
        <div
          className="flex flex-col justify-center items-center gap-2.5 self-stretch rounded-lg"
          style={{ border: "1px solid #EBEBEB" }}
        >
          <div className="flex px-5 flex-col justify-center items-center self-stretch">
            {/* Head */}
            <div
              className="flex justify-between items-start self-stretch"
              style={{ borderBottom: "1px solid #EBEBEB" }}
            >
              <div
                className="flex py-5 items-start gap-[15px] self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <h5 className="h5-bold text-[#00CCB6]">Address Information</h5>
              </div>
              <div
                className="flex justify-end items-start gap-2.5 self-stretch cursor-pointer"
                style={{ padding: "20px 0px 20px 20px" }}
              >
                <StudentAddressInfoEditModal />
              </div>
            </div>
            {/* Info */}
            <div className="flex flex-col items-center justify-center self-stretch">
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Address</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">
                    An Namuthajiyah, King Fahad Road, Riyadh, Saudi Arabia
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Family Details */}
        <div
          className="flex flex-col justify-center items-center gap-2.5 self-stretch rounded-lg"
          style={{ border: "1px solid #EBEBEB" }}
        >
          <div className="flex px-5 flex-col justify-center items-center self-stretch">
            {/* Head */}
            <div
              className="flex justify-between items-start self-stretch"
              style={{ borderBottom: "1px solid #EBEBEB" }}
            >
              <div
                className="flex py-5 items-start gap-[15px] self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <h5 className="h5-bold text-[#00CCB6]">Family Details</h5>
              </div>
              <div
                className="flex justify-end items-start gap-2.5 self-stretch cursor-pointer"
                style={{ padding: "20px 0px 20px 20px" }}
              >
                <StudentFamilyEditModal />
              </div>
            </div>
            {/* Info */}
            <div className="flex flex-col items-center justify-center self-stretch">
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Name</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Irshad Ahmad</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Relation</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Father</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Mobile Number</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">+966 1234567890</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Email Address</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">
                    irshadahmad@gmail.com
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pickup Details */}
        <div
          className="flex flex-col justify-center items-center gap-2.5 self-stretch rounded-lg"
          style={{ border: "1px solid #EBEBEB" }}
        >
          <div className="flex px-5 flex-col justify-center items-center self-stretch">
            {/* Head */}
            <div
              className="flex justify-between items-start self-stretch"
              style={{ borderBottom: "1px solid #EBEBEB" }}
            >
              <div
                className="flex py-5 items-start gap-[15px] self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <h5 className="h5-bold text-[#00CCB6]">Pickup Details</h5>
              </div>
              <div
                className="flex justify-end items-start gap-2.5 self-stretch cursor-pointer"
                style={{ padding: "20px 0px 20px 20px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M2.10833 14.759C1.92499 14.8507 1.83333 15.1257 1.83333 15.4007V19.2507C1.83333 19.8007 2.19999 20.1673 2.74999 20.1673H6.59999C6.87499 20.1673 7.05833 20.0757 7.24166 19.8923L15.95 11.184L10.725 5.95898L2.10833 14.759ZM19.8917 5.95898L16.0417 2.10898C15.675 1.74232 15.125 1.74232 14.7583 2.10898L12.1917 4.67565L17.4167 9.90065L19.9833 7.33398C20.2583 6.96732 20.2583 6.32565 19.8917 5.95898Z"
                    fill="#00CCB6"
                  />
                </svg>
              </div>
            </div>
            {/* Info */}
            <div className="flex flex-col items-center justify-center self-stretch">
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Name</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Ahmad Zaky</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Relationship</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Parent</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Gov Issued ID</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">1234567890</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Phone Number</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">+62 123 456 789</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Gender</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Male</h5>
                </div>
              </div>
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Nationality</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Saudi Arabia</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsProfileTab;
