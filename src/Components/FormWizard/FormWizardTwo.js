import React from "react";
import nextArrow from "../../Assets/next-arrow.svg";
import prevArrow from "../../Assets/prev-arrow.svg";
import { Link } from "react-router-dom";
import MapContainer from "../GoogleMap";

function FormWizardTwo() {
  return (
    <>
      <form className="flex flex-col lg:flex-row items-start lg:content-start gap-[30px] self-stretch lg:grid lg:grid-cols-2">
        <div
          className="flex h-[361px] self-stretch  items-end gap-2 rounded-[10px] lg:col-span-2"
          style={{ flex: "1 0 0" }}
        >
          <MapContainer />
        </div>
        <div
          className="flex flex-col lg:flex-row justify-end lg:justify-normal items-start lg:items-end gap-[15px] lg:gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div
            className="flex flex-col items-start gap-2 w-full lg:w-auto"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="short-address">
              SHORT ADDRESS
            </label>
            <input
              id="short-address"
              type="text"
              className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
          <button className="lg:w-[90px] white-btn self-stretch  lg:self-auto">
            GET
          </button>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="district">
              District
            </label>
            <input
              id="district"
              type="text"
              className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="city">
              City
            </label>
            <input
              id="city"
              type="text"
              className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="province">
              Province
            </label>
            <input
              id="province"
              type="text"
              className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div
          className="flex items-end gap-4 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="province">
              Country
            </label>
            <input
              id="province"
              type="text"
              className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
        <div className="lg:flex min-w-[585px] items-end gap-4 flex-1 opacity-0 hidden">
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="label text-[#868686]" htmlFor="province"></label>
            <input
              disabled
              id="province"
              type="text"
              className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
            />
          </div>
        </div>
      </form>

      <div className="flex flex-col lg:flex-row pt-[30px] justify-center lg:justify-between items-end gap-5 lg:gap-0 lg:items-center self-stretch border-t border-[#DCDCDC]">
        <Link
          to="/form-wizard/step-one"
          className="flex lg:w-[400px] justify-center items-center unactive-btn gap-3 self-stretch lg:self-auto order-2 lg:order-none"
        >
          <img src={prevArrow} alt="" /> Previous Step
        </Link>
        <Link
          to="/form-wizard/step-three"
          className="flex lg:w-[400px] justify-center items-center cyan-btn gap-3 self-stretch lg:self-auto"
        >
          Next Step <img src={nextArrow} alt="" />
        </Link>
      </div>
    </>
  );
}

export default FormWizardTwo;
