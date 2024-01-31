import React from "react";

function StaffProfileContent() {
  return (
    <div className="flex p-5 lg:p-[30px] flex-col lg:flex-row items-start gap-[30px] self-stretch rounded-[10px] bg-white">
      {/* Personal Info */}
      <div className="flex flex-col items-start gap-[30px] self-stretch w-full">
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
            <div className="flex flex-col justify-center items-center self-stretch">
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
                  <h5 className="h5-med text-[#646464]">Muhammad Ashraf</h5>
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
                  <h5 className="h5-bold text-[#383838]">ID\IQAMA</h5>
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
                  <h5 className="h5-bold text-[#383838]">Birthday</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">February 2, 1990</h5>
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
                  <h5 className="h5-bold text-[#383838]">Age</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">33 years old</h5>
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
              <div
                className="flex justify-between items-start self-stretch"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                <div
                  className="flex py-5 items-start gap-[15px] self-stretch"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#383838]">Vaccination</h5>
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
                  <h5 className="h5-bold text-[#383838]">Role Title</h5>
                </div>
                <div
                  className="flex p-5 items-start gap-2.5 self-stretch text-left"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-med text-[#646464]">Manager</h5>
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
                  <h5 className="h5-bold text-[#383838]">Disability</h5>
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
                  <h5 className="h5-bold text-[#383838]">Allergies</h5>
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
                  <h5 className="h5-bold text-[#383838]">Disease</h5>
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
      </div>
      {/* Address Info */}
      <div className="flex flex-col items-start gap-[30px] self-stretch w-full">
        {/* Address */}
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
                    <h5 className="h5-bold text-[#383838]">Contract Type</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">Yearly</h5>
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
                    <h5 className="h5-bold text-[#383838]">
                      Number of Work Shift
                    </h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">15</h5>
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
                    <h5 className="h5-bold text-[#383838]">
                      Leaves Days Per Year
                    </h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">12</h5>
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
                    <h5 className="h5-bold text-[#383838]">Basic Salary</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">7,500 SAR</h5>
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
                    <h5 className="h5-bold text-[#383838]">Housing</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">3,000 SAR</h5>
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
                    <h5 className="h5-bold text-[#383838]">Other Salary</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">500 SAR</h5>
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
                    <h5 className="h5-bold text-[#383838]">Contract Terms</h5>
                  </div>
                  <div
                    className="flex p-5 items-start gap-2.5 self-stretch text-left"
                    style={{ flex: "1 0 0" }}
                  >
                    <h5 className="h5-med text-[#646464]">Active</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-2.5 self-stretch">
              <button className="cyan-btn self-stretch">Renew Contract</button>
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
    </div>
  );
}

export default StaffProfileContent;
