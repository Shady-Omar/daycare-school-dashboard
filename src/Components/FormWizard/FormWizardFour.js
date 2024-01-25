import React from "react";

import { Link } from "react-router-dom";

import rowOneItemOne from "../../Assets/row-one-item-one.svg";
import rowTwoItemOne from "../../Assets/row-two-item-one.svg";
import rowTwoItemTwo from "../../Assets/row-three-item-one.svg";
import rowThreeItemOne from "../../Assets/row-three-item-one.svg";
import rowThreeItemTwo from "../../Assets/row-three-item-two.svg";
import rowThreeItemThree from "../../Assets/row-three-item-three.svg";
import rowThreeItemFour from "../../Assets/row-three-item-four.svg";
import rowFourItemOne from "../../Assets/row-four-item-one.svg";
import rowFourItemTwo from "../../Assets/row-four-item-two.svg";
import rowFourItemThree from "../../Assets/row-four-item-three.svg";
import rowFourItemFour from "../../Assets/row-four-item-four.svg";
import rowFiveItemOne from "../../Assets/row-five-item-one.svg";
import rowFiveItemTwo from "../../Assets/row-five-item-two.svg";
import rowFiveItemThree from "../../Assets/row-five-item-three.svg";
import rowSixItemOne from "../../Assets/row-six-item-one.svg";
import rowSixItemTwo from "../../Assets/row-six-item-two.svg";
import rowSixItemThree from "../../Assets/row-six-item-three.svg";
import rowSixItemFour from "../../Assets/row-six-item-four.svg";
import rowSixItemFive from "../../Assets/row-six-item-five.svg";
import rowSixItemSix from "../../Assets/row-six-item-six.svg";
import nextArrow from "../../Assets/next-arrow.svg";
import prevArrow from "../../Assets/prev-arrow.svg";

function FormWizardFour() {
  return (
    <>
      <div className="flex flex-col items-start lg:items-center lg:justify-center gap-5 self-stretch">
        <div
          className="flex py-[30px] px-[15px] lg:p-[30px] flex-col items-start gap-5 self-stretch border-[#DCDCDC] border-x border-t lg:border-x-0 lg:border-t-0 lg:border-b lg:border-b-[#DCDCDC]"
          style={{ borderRadius: "20px 20px 0px 0px" }}
        >
          <label htmlFor="capacity" className="label text-[#383838]">
            Capacity
          </label>
          <input
            id="capacity"
            type="text"
            placeholder="Enter Number"
            className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
          />
        </div>

        <div
          className="flex py-[30px] px-[15px] lg:p-[30px] flex-col items-start gap-5 self-stretch border-[#DCDCDC] border-x border-t lg:border-x-0 lg:border-t-0 lg:border-b lg:border-b-[#DCDCDC]"
          style={{ borderRadius: "20px 20px 0px 0px" }}
        >
          <p className="label text-[#383838]">Select Facilities and futures</p>
          <div className="flex flex-col items-start gap-5 lg:gap-4 self-stretch">
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-5 self-stretch">
              <p className="p-reg text-left h-[50px] flex items-center w-[210px] text-[#646464]">
                Parent Services
              </p>
              <div className="flex items-center gap-2.5">
                <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                  <p className="p-reg text-[#878787]">Daily Activity Updates</p>
                  <img src={rowOneItemOne} alt="" />
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-5 self-stretch">
              <p className="p-reg text-left h-[50px] flex items-center w-[210px] text-[#646464]">
                Educators & Staff
              </p>
              <div className="flex flex-col lg:flex-row justify-center items-start gap-2.5">
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787]">Bilingual Educators</p>
                    <img src={rowTwoItemOne} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#00CCB6] bg-[#00CCB6]">
                    <p className="p-reg text-[#FFF]">
                      Tertiary Qualified Staff
                    </p>
                    <img src={rowTwoItemTwo} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-5 self-stretch">
              <p className="p-reg text-left h-[50px] flex items-center w-[210px] text-[#646464]">
                Centre Facilities & Services
              </p>
              <div className="flex flex-col lg:flex-row justify-center items-start gap-2.5">
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#00CCB6] bg-[#00CCB6]">
                    <p className="p-reg text-[#FFF]">Nappies Provided</p>
                    <img src={rowThreeItemOne} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787]">Allergy Aware</p>
                    <img src={rowThreeItemTwo} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787]">SunSafe Aware</p>
                    <img src={rowThreeItemThree} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787]">Bed Linen Provided</p>
                    <img src={rowThreeItemFour} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-5 self-stretch">
              <p className="p-reg text-left h-[50px] flex items-center w-[210px] text-[#646464]">
                Activities & Equipment
              </p>
              <div className="flex flex-col lg:flex-row justify-center items-start gap-2.5">
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787]">Indoor Play Area</p>
                    <img src={rowFourItemOne} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787]">Sandpit</p>
                    <img src={rowFourItemTwo} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787]">Outdoor Play Area</p>
                    <img src={rowFourItemThree} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#00CCB6] bg-[#00CCB6]">
                    <p className="p-reg text-[#FFF]">Shaded Outdoor Area</p>
                    <img src={rowFourItemFour} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-5 self-stretch">
              <p className="p-reg text-left h-[50px] flex items-center w-[210px] text-[#646464]">
                Food & Nutrition
              </p>
              <div className="flex flex-col lg:flex-row justify-center items-start gap-2.5">
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787]">All Meals Provided</p>
                    <img src={rowFiveItemOne} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#00CCB6] bg-[#00CCB6]">
                    <p className="p-reg text-[#FFF]">Milk Provided</p>
                    <img src={rowFiveItemTwo} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787]">In-house Cook</p>
                    <img src={rowFiveItemThree} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 self-stretch flex-wrap">
              <p className="p-reg text-left h-[50px] flex items-center w-[210px] text-[#646464]">
                Learning Activities
              </p>
              <div className="flex flex-col lg:flex-row justify-center items-start gap-2.5">
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787] text-left">
                      Approved Preschool Program
                    </p>
                    <img src={rowSixItemOne} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787] text-left">Incursions</p>
                    <img src={rowSixItemTwo} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#00CCB6] bg-[#00CCB6]">
                    <p className="p-reg text-[#FFF] text-left">
                      Language Lessons
                    </p>
                    <img src={rowSixItemThree} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5 lg:hidden">
                  <button className="flex h-[99px] lg:h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#00CCB6] bg-[#00CCB6]">
                    <p className="p-reg text-[#FFF] text-left">
                      Education & Development Programs
                    </p>
                    <img src={rowSixItemFour} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5 lg:hidden">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787] text-left">
                      Music Lessons
                    </p>
                    <img src={rowSixItemFive} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-2.5 lg:hidden">
                  <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                    <p className="p-reg text-[#878787] text-left">Excursions</p>
                    <img src={rowSixItemSix} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 self-stretch flex-wrap">
              <p className="p-reg text-left w-[210px] text-[#646464] opacity-0"></p>
              <div className="lg:flex items-center gap-2.5 hidden">
                <button className="flex h-[99px] lg:h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#00CCB6] bg-[#00CCB6]">
                  <p className="p-reg text-[#FFF] text-left">
                    Education & Development Programs
                  </p>
                  <img src={rowSixItemFour} alt="" />
                </button>
              </div>
              <div className="lg:flex items-center gap-2.5 hidden">
                <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                  <p className="p-reg text-[#878787] text-left">
                    Music Lessons
                  </p>
                  <img src={rowSixItemFive} alt="" />
                </button>
              </div>
              <div className="lg:flex items-center gap-2.5 hidden">
                <button className="flex h-[50px] px-5 items-center gap-5 rounded-[10px] border border-[#DCDCDC] bg-[#FFF]">
                  <p className="p-reg text-[#878787] text-left">Excursions</p>
                  <img src={rowSixItemSix} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex py-[30px] px-[15px] lg:p-[30px] flex-col items-start gap-5 self-stretch border-[#DCDCDC] border-x border-t lg:border-x-0 lg:border-t-0 lg:border-b lg:border-b-[#DCDCDC]"
          style={{ borderRadius: "20px 20px 0px 0px" }}
        >
          <p className="label text-[#383838]">accepting criteria</p>

          <div className="flex flex-col items-start gap-[30px] lg:gap-5 self-stretch">
            <div className="flex items-center gap-5 self-stretch lg:self-auto">
              <p className="p-reg text-left w-[210px] text-[#646464]">
                Accept Autism
              </p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>

            <div className="relative w-[327px] h-7 max-h-[59px] mb-5 hidden lg:block">
              <input
                type="range"
                id="fader"
                step="50"
                min="0"
                max="100"
                className="w-full h-[5.175px] bg-[#FFCB37] rounded-lg appearance-none cursor-pointer "
              />
              <span className="text-sm text-[#A3A3A3] text-[11px] absolute start-0 -bottom-6">
                LEVEL 1
              </span>
              <span className="text-sm text-[#A3A3A3] text-[11px] absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                LEVEL 2
              </span>

              <span className="text-sm text-[#A3A3A3] text-[11px] absolute end-0 -bottom-6">
                LEVEL 3
              </span>
            </div>

            <div className="flex items-center gap-5 self-stretch lg:self-auto">
              <p className="p-reg text-left w-[210px] text-[#646464]">
                Accept Disability
              </p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>

        <div
          className="flex py-[30px] px-[15px] lg:p-[30px] flex-col items-start gap-5 self-stretch border-[#DCDCDC] border-x border-t lg:border-x-0 lg:border-t-0 lg:border-b lg:border-b-[#DCDCDC]"
          style={{ borderRadius: "20px 20px 0px 0px" }}
        >
          <p className="label text-[#383838]">accepting Age</p>

          <div className="flex lg:flex-row flex-col items-start gap-5 self-stretch">
            <div className="flex w-full flex-col items-start self-stretch gap-2.5">
              <label className="label text-[#868686]" htmlFor="date">
                From
              </label>
              <div className="flex w-full flex-row">
                <input
                  id=""
                  type="time"
                  className="flex w-full  h-[50px] items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                  style={{
                    flex: "1 0 0",
                    borderRadius: "10px 0px 0px 10px",
                    appearance: "none",
                  }}
                />

                <div
                  className="flex h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                  style={{ flex: "1 0 0", borderRadius: "0px 10px 10px 0px" }}
                >
                  <select
                    id="timing"
                    className="text-[#646464] cursor-pointer font-semibold w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                    defaultValue={"Months"}
                  >
                    <option value="Months">Months</option>
                    {/* <option value="PM">PM</option> */}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start self-stretch gap-2.5">
              <label className="label text-[#868686]" htmlFor="date">
                To
              </label>
              <div className="flex w-full flex-row">
                <input
                  id=""
                  type="time"
                  className="flex w-full h-[50px] items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[14px] gap-3"
                  style={{
                    flex: "1 0 0",
                    borderRadius: "10px 0px 0px 10px",
                    appearance: "none",
                  }}
                />

                <div
                  className="flex h-[50px] justify-center items-center border border-[#DBDADE] bg-[#FFF] py-[7px] px-[10px] gap-2.5"
                  style={{ flex: "1 0 0", borderRadius: "0px 10px 10px 0px" }}
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
        </div>

        <div
          className="flex py-[30px] px-[15px] lg:p-[30px] flex-col items-start gap-5 self-stretch border-[#DCDCDC] border-x border-t lg:border-x-0 lg:border-t-0 lg:border-b lg:border-b-[#DCDCDC]"
          style={{ borderRadius: "20px 20px 0px 0px" }}
        >
          <p className="label text-[#383838]">CENTER DESCRIPTION</p>
          <div className="flex flex-col items-start gap-5 self-stretch">
            <div className="flex min-h-[134px] lg:flex-row flex-col items-start gap-5 self-stretch">
              <p className="p-reg lg:w-[210px] text-left text-[#646464]">
                In Arabic
              </p>
              <textarea
                className="min-h-[134px] rounded-[10px] self-stretch border border-[#DBDADE] p-3 outline-none focus:outline-none"
                placeholder="Placeholder Text"
                style={{ flex: "1 0 0" }}
              ></textarea>
            </div>
            <div className="flex min-h-[134px] lg:flex-row flex-col items-start gap-5 self-stretch">
              <p className="p-reg lg:w-[210px] text-left text-[#646464]">
                In English
              </p>
              <textarea
                className="min-h-[134px] rounded-[10px] self-stretch border border-[#DBDADE] p-3 outline-none focus:outline-none"
                placeholder="Placeholder Text"
                style={{ flex: "1 0 0" }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-[30px] justify-center lg:justify-between items-end gap-5 lg:gap-0 lg:items-center self-stretch border-t border-[#DCDCDC]">
        <Link
          to="/form-wizard/step-three"
          className="flex lg:w-[400px] justify-center items-center unactive-btn gap-3 self-stretch lg:self-auto order-2 lg:order-none"
        >
          <img src={prevArrow} alt="" /> Previous Step
        </Link>
        <Link
          to="/form-wizard/step-five"
          className="flex lg:w-[400px] justify-center items-center cyan-btn gap-3 self-stretch lg:self-auto"
        >
          Next Step <img src={nextArrow} alt="" />
        </Link>
      </div>
    </>
  );
}

export default FormWizardFour;
