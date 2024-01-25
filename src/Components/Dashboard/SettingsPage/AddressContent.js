import React from "react";

import locationIcon from "../../../Assets/location-icon.svg";
import MapContainer from "../../GoogleMap";
import AddressDetailsModal from "./AddressDetailsModal";

function AddressContent() {
  return (
    <div className="flex p-5 lg:p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-[#FFF] rounded-[10px] lg:rounded-[0px_10px_10px_10px]">
      {/* Title */}
      <div className="flex w-full py-[15px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]">
        <div className="w-9 h-9">
          <img src={locationIcon} alt="location" />
        </div>
        <div className="flex flex-col items-start gap-[5px]">
          <h5 className="h5-bold !text-[18px] text-[#202020]">
            Center Location
          </h5>
        </div>
      </div>
      {/* Form */}
      <div className="flex lg:grid grid-cols-2 items-start content-start gap-[30px] self-stretch flex-wrap">
        <div className="flex h-[246px] lg:h-[361px] col-span-2 w-full self-stretch items-end gap-2 rounded-[10px]">
          <MapContainer />
        </div>
        <div className="flex flex-col w-full lg:flex-row self-stretch justify-end lg:justify-normal items-start lg:items-end gap-2.5 lg:gap-4">
          <div
            className="flex flex-col items-start gap-2 self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="short-address">
              SHORT ADDRESS
            </label>
            <input
              id="short-address"
              type="text"
              className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#EDEDED] rounded-[10px]"
              placeholder="Lorem ipsum dolor..."
            />
          </div>
          <AddressDetailsModal />
        </div>
        <div className="flex self-stretch w-full items-end gap-4">
          <div
            className="flex flex-col items-start gap-2 self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="district">
              District
            </label>
            <input
              id="district"
              type="text"
              className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
              placeholder="Lorem ipsum dolor..."
            />
          </div>
        </div>
        <div className="flex self-stretch w-full items-end gap-4">
          <div
            className="flex flex-col items-start gap-2 self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="city">
              City
            </label>
            <input
              id="city"
              type="text"
              className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
              placeholder="Lorem ipsum dolor..."
            />
          </div>
        </div>
        <div className="flex self-stretch w-full items-end gap-4">
          <div
            className="flex flex-col items-start gap-2 self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="province">
              Province
            </label>
            <input
              id="province"
              type="text"
              className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
              placeholder="Lorem ipsum dolor..."
            />
          </div>
        </div>
        <div className="flex self-stretch w-full items-end gap-4">
          <div
            className="flex flex-col items-start gap-2 self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]" htmlFor="province">
              Country
            </label>
            <input
              id="province"
              type="text"
              className="flex h-[50px] px-[20px] items-center self-stretch border-[#DBDADE] border bg-[#FFF] rounded-[10px]"
              placeholder="Lorem ipsum dolor..."
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

export default AddressContent;
