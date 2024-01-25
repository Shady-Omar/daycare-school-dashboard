import React from "react";

import planFeature from "../../../Assets/plan-feature.svg";
import selectedPlan from "../../../Assets/selected-plan.svg";
import mastercard from "../../../Assets/mastercard.svg";
import visa from "../../../Assets/visa.svg";
import sortArrow from "../../../Assets/sort-dropdown-arrow.svg";
import actionArrow from "../../../Assets/action-arrow.svg";

function PaymentsContent() {
  return (
    <>
      <div className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-[#FFF] rounded-[10px]">
        {/* Title */}
        <div className="flex py-[15px] px-5 flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px]">
          <h1 className="h1-med text-[#383838]">Select Package to Upgrade</h1>
          <p className="p-reg text-[#878787]">
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
        </div>
        {/* Form */}
        <div className="flex flex-col items-start gap-[50px] lg:gap-[30px] self-stretch">
          {/* Cards */}
          <div
            className="flex flex-col lg:flex-row items-start gap-[30px] self-stretch"
            style={{ borderRadius: "20px 20px 0px 0px" }}
          >
            <div
              className="flex p-[30px] flex-col items-start gap-[30px] self-stretch lg:self-auto rounded-[10px] bg-[#FFF] w-full"
              style={{ border: "1px solid #DCDCDC" }}
            >
              <div className="flex flex-col justify-center items-start gap-[5px] self-stretch">
                <h5 className="h5-bold !text-[18px] text-left text-[#00CCB6]">
                  Monthly Plan
                </h5>
                <p className="p-reg text-[#383838] text-left">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div
                className="flex pb-[30px] flex-col justify-end items-start gap-[5px] self-stretch"
                style={{ borderBottom: "1px solid #DCDCDC" }}
              >
                <div className="flex items-end gap-[5px]">
                  <h1 className="h1-bold text-[#383838]">SAR 199.00</h1>
                  <h5 className="h5-semi text-[#A4A4A4]">/mo</h5>
                </div>
                <p className="p-reg text-[#878787]">
                  Per month, per staff member
                </p>
              </div>
              <div className="flex text-left flex-col items-start gap-[15px] self-stretch">
                <div className="flex items-start gap-[15px] self-stretch">
                  <img src={planFeature} alt="feature" />
                  <p className="p-reg text-[#383838]">
                    Ipsum dolor sit amet dummy
                  </p>
                </div>
                <div className="flex items-start gap-[15px] self-stretch">
                  <img src={planFeature} alt="feature" />
                  <p className="p-reg text-[#383838]">Ipsum dolor sit amet</p>
                </div>
                <div className="flex items-start gap-[15px] self-stretch">
                  <img src={planFeature} alt="feature" />
                  <p className="p-reg text-[#383838]">Ipsum dolor sit dummy</p>
                </div>
              </div>
              <button className="white-btn self-stretch">
                Select This Plan
              </button>
            </div>
            <div className="flex p-[30px] flex-col items-start gap-[30px] self-stretch lg:self-auto  rounded-[10px] bg-[#FFF] w-full border-[#00CCB6] border lg:border-[3px]">
              <div className="flex items-center gap-[5px] self-stretch">
                <div
                  className="flex flex-col justify-center items-start gap-[5px]"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold !text-[18px] text-left text-[#00CCB6]">
                    Bi-Annual Plan
                  </h5>
                  <p className="p-reg text-[#383838] text-left">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <img src={selectedPlan} alt="selected" />
              </div>
              <div
                className="flex pb-[30px] flex-col justify-end items-start gap-[5px] self-stretch"
                style={{ borderBottom: "1px solid #DCDCDC" }}
              >
                <div className="flex items-end gap-[5px]">
                  <h1 className="h1-bold text-[#383838]">SAR 179.00</h1>
                  <h5 className="h5-semi text-[#A4A4A4]">/mo</h5>
                </div>
                <p className="p-reg text-[#878787]">
                  Per month, per staff member
                </p>
              </div>
              <div className="flex text-left flex-col items-start gap-[15px] self-stretch">
                <div className="flex items-start gap-[15px] self-stretch">
                  <img src={planFeature} alt="feature" />
                  <p className="p-reg text-[#383838]">
                    Ipsum dolor sit amet dummy
                  </p>
                </div>
                <div className="flex items-start gap-[15px] self-stretch">
                  <img src={planFeature} alt="feature" />
                  <p className="p-reg text-[#383838]">Ipsum dolor sit amet</p>
                </div>
                <div className="flex items-start gap-[15px] self-stretch">
                  <img src={planFeature} alt="feature" />
                  <p className="p-reg text-[#383838]">Ipsum dolor sit dummy</p>
                </div>
              </div>
              <button className="cyan-btn self-stretch">
                Select This Plan
              </button>
            </div>
            <div
              className="flex p-[30px] flex-col items-start gap-[30px] self-stretch lg:self-auto  rounded-[10px] bg-[#FFF] w-full"
              style={{ border: "1px solid #DCDCDC" }}
            >
              <div className="flex flex-col justify-center items-start gap-[5px] self-stretch">
                <h5 className="h5-bold !text-[18px] text-left text-[#00CCB6]">
                  Yearly Plan
                </h5>
                <p className="p-reg text-[#383838] text-left">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div
                className="flex pb-[30px] flex-col justify-end items-start gap-[5px] self-stretch"
                style={{ borderBottom: "1px solid #DCDCDC" }}
              >
                <div className="flex items-end gap-[5px]">
                  <h1 className="h1-bold text-[#383838]">SAR 159.00</h1>
                  <h5 className="h5-semi text-[#A4A4A4]">/mo</h5>
                </div>
                <p className="p-reg text-[#878787]">
                  Per month, per staff member
                </p>
              </div>
              <div className="flex text-left flex-col items-start gap-[15px] self-stretch">
                <div className="flex items-start gap-[15px] self-stretch">
                  <img src={planFeature} alt="feature" />
                  <p className="p-reg text-[#383838]">
                    Ipsum dolor sit amet dummy
                  </p>
                </div>
                <div className="flex items-start gap-[15px] self-stretch">
                  <img src={planFeature} alt="feature" />
                  <p className="p-reg text-[#383838]">Ipsum dolor sit amet</p>
                </div>
                <div className="flex items-start gap-[15px] self-stretch">
                  <img src={planFeature} alt="feature" />
                  <p className="p-reg text-[#383838]">Ipsum dolor sit dummy</p>
                </div>
              </div>
              <button className="white-btn self-stretch">
                Select This Plan
              </button>
            </div>
          </div>
          {/* Payment Method */}
          <div className="flex lg:p-[30px] flex-col lg:flex-row items-start gap-[50px] lg:gap-[30px] self-stretch rounded-[20px] lg:bg-[#F9F9F9]">
            <div
              className="flex lg:p-[30px] flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-[#FFF]"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex pb-5 flex-col justify-center items-start gap-[5px] self-stretch"
                style={{ borderBottom: "1px solid #DCDCDC" }}
              >
                <h5 className="h5-bold !text-[18px] text-[#383838]">
                  Payment Method
                </h5>
                <p className="p-reg text-[#383838]">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              {/* Payment Cards */}
              <div className="flex flex-col items-start gap-5 self-stretch">
                <div
                  className="flex p-[15px] items-center w-full rounded-[10px] bg-[#FFF]"
                  style={{ border: "1px solid #EBEBEB" }}
                >
                  <div className="flex items-center gap-[15px]">
                    <div
                      className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 rounded-md"
                      style={{ border: "1px solid #EBEBEB" }}
                    >
                      <img src={mastercard} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <p className="p-bold text-[#383838]">
                        8739 **** **** 2738
                      </p>
                      <p className="label-reg text-[#878787]">
                        08/2026 | Abdullah Bilal
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex p-[15px] items-center w-full justify-between rounded-[10px] bg-[#FFF]"
                  style={{ border: "2px solid #00CCB6" }}
                >
                  <div className="flex items-center gap-[15px]">
                    <div
                      className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 rounded-md"
                      style={{ border: "1px solid #EBEBEB" }}
                    >
                      <img src={visa} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <p className="p-bold text-[#383838]">
                        2738 **** **** 1424
                      </p>
                      <p className="label-reg text-[#878787]">
                        12/2028 | Abdullah Bilal
                      </p>
                    </div>
                  </div>
                  <img src={selectedPlan} alt="selected" />
                </div>
              </div>
              <button className="white-btn self-stretch">
                Add a Credit or Debit Card
              </button>
            </div>
            <div
              className="flex lg:p-[30px] flex-col items-start gap-[30px] rounded-[10px] bg-[#FFF]"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex pb-5 flex-col justify-center items-start gap-[5px] self-stretch"
                style={{ borderBottom: "1px solid #DCDCDC" }}
              >
                <h5 className="h5-bold !text-[18px] text-[#383838]">
                  Billing Address
                </h5>
                <p className="p-reg text-[#383838]">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="flex items-start content-start lg:content-normal lg:justify-start gap-[15px] self-stretch flex-wrap">
                <div
                  className="flex min-w-[205px] flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">First Name</label>
                  <input
                    type="text"
                    className="h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder=""
                  />
                </div>
                <div
                  className="flex min-w-[205px] flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">Last Name</label>
                  <input
                    type="text"
                    className="h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder=""
                  />
                </div>
                <div
                  className="flex min-w-[205px] flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">City</label>
                  <input
                    type="text"
                    className="h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder=""
                  />
                </div>
                <div
                  className="flex min-w-[205px] flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">State/Province</label>
                  <select
                    className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                    style={{ border: "1px solid #DBDADE" }}
                    defaultValue={"Select"}
                  >
                    <option value="Select">Select</option>
                    {/* <option value="PM">PM</option> */}
                  </select>
                </div>
                <div
                  className="flex min-w-[205px] flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">ZIP Code</label>
                  <input
                    type="text"
                    className="h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder=""
                  />
                </div>
                <div
                  className="flex min-w-[205px] flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">Country</label>
                  <select
                    className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                    style={{ border: "1px solid #DBDADE" }}
                    defaultValue={"Select"}
                  >
                    <option value="Select">Select</option>
                    {/* <option value="PM">PM</option> */}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-[60px] self-stretch"
          style={{
            borderTop: "1px solid #DCDCDC",
            borderBottom: "1px solid #DCDCDC",
          }}
        >
          <div
            className="flex py-5 flex-col justify-end items-start gap-[5px] self-stretch lg:self-auto"
            style={{ flex: "1 0 0" }}
          >
            <p className="p-reg text-[#878787]">Due to be paid</p>
            <div className="flex items-end gap-[5px]">
              <h1 className="h1-bold text-[#383838]">SAR 179.00</h1>
              <h5 className="h5-semi text-[#A4A4A4]">/mo</h5>
            </div>
            <p className="label-reg text-[#646464] text-left">
              By signing up, I agree to the terms of service for DayCare and its
              payment processor.
            </p>
          </div>
          <button className="cyan-btn self-stretch lg:self-auto lg:w-[400px]">
            Enroll & Pay
          </button>
        </div>
      </div>
      <div className="flex p-5 flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-[#FFF]">
        <div
          className="flex flex-col items-start gap-[5px] self-stretch"
          style={{
            padding: "0px 30px 20px 0px",
            borderBottom: "2px solid #F9F9F9",
          }}
        >
          <h2 className="h2-bold text-[#383838]">Billing History</h2>
          <p className="p-reg text-[#878787] text-left">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch">
          {/* Sort */}
          <div className="flex items-start gap-[5px]">
            <p className="label-reg text-[#646464]">Sort by:</p>
            <div className="flex items-center gap-[11px] rounded-lg">
              <p className="label-semi text-[#383838]">Date</p>
              <img src={sortArrow} alt="" />
            </div>
          </div>
          {/* Table */}
          <div
            id="custom-scroll"
            className="relative overflow-x-scroll shadow-md sm:rounded-lg w-full"
          >
            <table className="w-full text-left rtl:text-right bg-[#FFF] ">
              <thead
                className=" bg-[#EBEBEB] text-[#383838]"
                style={{
                  borderRadius: "10px 10px 0px 0px",
                  border: "0.5px solid #EBEBEB",
                }}
              >
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 p-semi flex items-center gap-[15px]"
                  >
                    <input type="checkbox" />
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Total Children Last Month
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 label-bold text-[#000] !text-[13px]"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                    <input type="checkbox" />
                    259,373.00 SAR
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    652 Children
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">23/11/2023</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(227, 40, 175, 0.10)" }}
                      >
                        <p className="label-semi text-[#E328AF]">Pending</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                    <input type="checkbox" />
                    199,134.00 SAR
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    468 Children
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">23/10/2023</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Success</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                    <input type="checkbox" />
                    240,373.00 SAR
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    621 Children
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">20/09/2023</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Success</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                    <input type="checkbox" />
                    259,373.00 SAR
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    478 Children
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">21/08/2023</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Success</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                    <input type="checkbox" />
                    159,373.00 SAR
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    365 Children
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">23/07/2023</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Success</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                    <input type="checkbox" />
                    312,373.00 SAR
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    726 Children
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">28/06/2023</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Success</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Footer */}
          <div className="flex justify-between items-center self-stretch">
            <p className="label-reg text-[#6D6D6D]">
              Showing 10 results from 289 data
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentsContent;
