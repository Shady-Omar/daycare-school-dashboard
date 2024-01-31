import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import uploadIcon from "../../../Assets/upload-icon.svg";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

function BillingRequestContent() {
  const handleImageUpload = (files) => {
    // Handle the uploaded files
    console.log("Uploaded files:", files);
  };

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      const fileSizeExceeds = rejectedFiles.some(
        (file) => file.size > MAX_FILE_SIZE_BYTES
      );

      if (fileSizeExceeds) {
        console.log("File size exceeds the maximum allowed size.");
      }
    }

    // Do something with the accepted files
    handleImageUpload(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: MAX_FILE_SIZE_BYTES,
  });

  return (
    <div className="grid grid-cols-2 p-[30px] items-start content-start gap-[30px] self-stretch rounded-[10px] bg-white">
      <div
        className="flex flex-col items-start gap-2"
        style={{ flex: "1 0 0" }}
      >
        <label className="label text-[#868686]">Title</label>
        <input
          type="text"
          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
          style={{ border: "1px solid #DBDADE" }}
          placeholder="Search here"
        />
      </div>
      <div
        className="flex flex-col items-start gap-2"
        style={{ flex: "1 0 0" }}
      >
        <label className="label text-[#868686]">Category</label>
        <select
          className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
          style={{ border: "1px solid #DBDADE" }}
          defaultValue={"Select"}
        >
          <option value="Select">Select</option>
          {/* <option value="PM">PM</option> */}
        </select>
      </div>
      <div
        className="flex flex-col items-start gap-2"
        style={{ flex: "1 0 0" }}
      >
        <label className="label text-[#868686]">Plan Type</label>
        <select
          className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
          style={{ border: "1px solid #DBDADE" }}
          defaultValue={"Select"}
        >
          <option value="Select">Select</option>
          {/* <option value="PM">PM</option> */}
        </select>
      </div>
      <div
        className="flex flex-col items-start gap-2"
        style={{ flex: "1 0 0" }}
      >
        <label className="label text-[#868686]">Plan time</label>
        <select
          className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
          style={{ border: "1px solid #DBDADE" }}
          defaultValue={"Select"}
        >
          <option value="Select">Select</option>
          {/* <option value="PM">PM</option> */}
        </select>
      </div>
      <div
        className="flex flex-col items-start gap-2"
        style={{ flex: "1 0 0" }}
      >
        <label className="label text-[#868686]">Start Date</label>
        <input
          type="date"
          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
          style={{ border: "1px solid #DBDADE" }}
          placeholder="Search here"
        />
      </div>
      <div
        className="flex flex-col items-start gap-2"
        style={{ flex: "1 0 0" }}
      >
        <label className="label text-[#868686]">End Date</label>
        <input
          type="date"
          className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
          style={{ border: "1px solid #DBDADE" }}
          placeholder="Search here"
        />
      </div>
      <div
        className="flex flex-col h-[273px] items-start gap-2"
        style={{ flex: "1 0 0" }}
      >
        <label className="label text-[#868686]">Description</label>
        <textarea
          className="h-[273px] rounded-[10px] p-reg flex border px-5 items-center self-stretch  border-[#DBDADE] p-3 outline-none focus:outline-none bg-[#FFF]"
          rows="4"
          cols="50"
          placeholder="Placeholder Text"
          style={{ flex: "1 0 0" }}
        ></textarea>
      </div>
      <div
        className="flex flex-col h-[273px] items-start gap-2"
        style={{ flex: "1 0 0" }}
      >
        <label className="label text-[#868686]">Attachment</label>
        <div
          {...getRootProps()}
          className="flex h-[273px] p-5 flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
          style={{ border: "1px dashed #A4A4A4" }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="label text-[#383838] self-stretch">
              Drop the image here
            </p>
          ) : (
            <>
              <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
                <img src={uploadIcon} alt="upload" />
                <p className="label text-[#383838] self-stretch">
                  Drag and drop files here
                </p>
              </div>
              <p className="p-reg text-[#646464]">Or</p>
              <div className="flex flex-col items-center justify-center self-stretch gap-2.5">
                <button className="flex w-[200px] p-bold h-[50px] justify-center items-center rounded-[10px] bg-[#00CCB6] text-[#FFF] py-[10px] px-5">
                  Choose File
                </button>
                <p className="p-reg text-[#646464]">
                  Maximum file size is 50MB.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Payment Details */}
      <div
        className="flex col-span-2 pt-[30px] flex-col items-start gap-5"
        style={{ flex: "1 0 0", borderTop: "1px solid #DCDCDC" }}
      >
        <div className="flex flex-col items-start gap-2.5">
          <label className="label text-[#383838]">PAYMENT DETAILS</label>
        </div>
        <div className="flex items-center gap-5 self-stretch">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex self-stretch items-center gap-5">
              <p className="p-reg text-left w-[210px] text-[#646464]">
                Amount (SAR)*
              </p>

              <div
                className="flex items-center gap-5 w-full self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <div
                  className="flex flex-col items-end w-full gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <input
                    type="text"
                    className="text-[#A4A4A4] w-full p-reg flex h-[50px] px-5 items-center text-right self-stretch rounded-[10px] bg-[#FFF]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
            <div className="flex self-stretch items-center gap-5">
              <p className="p-reg text-left w-[210px] text-[#646464]">
                Discount
              </p>

              <div
                className="flex items-center gap-5 w-full self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <div
                  className="flex flex-col items-end w-full gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <select
                    className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                    style={{ border: "1px solid #DBDADE" }}
                    defaultValue={"Select Category"}
                  >
                    <option value="Select Category">Select Category</option>
                    {/* <option value="PM">PM</option> */}
                  </select>
                </div>
                <div
                  className="flex flex-col items-end w-full gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <input
                    type="text"
                    className="text-[#A4A4A4] w-full p-reg flex h-[50px] px-5 items-center text-left self-stretch rounded-[10px] bg-[#FFF]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder="Discount"
                  />
                </div>
                <div
                  className="flex flex-col items-end w-full gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <select
                    className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                    style={{ border: "1px solid #DBDADE" }}
                    defaultValue={"Percentage (%)"}
                  >
                    <option value="Percentage (%)">Percentage (%)</option>
                    {/* <option value="PM">PM</option> */}
                  </select>
                </div>
                <div
                  className="flex flex-col items-end w-full gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <input
                    type="text"
                    className="text-[#A4A4A4] w-full p-reg flex h-[50px] px-5 items-center text-right self-stretch rounded-[10px] bg-[#EDEDED]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder="0.00"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="flex self-stretch justify-between items-center">
              <p className="p-reg text-left w-[210px] text-[#646464]">
                Gross (SAR)
              </p>

              <div className="flex items-center gap-5 self-stretch">
                <div className="flex flex-col justify-center items-end gap-2">
                  <input
                    type="text"
                    className="text-[#A4A4A4] p-reg flex w-[187.5px] h-[50px] px-5 items-center text-right self-stretch rounded-[10px] bg-[#EDEDED]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder="0.00"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="flex self-stretch justify-between items-center">
              <p className="p-reg text-left w-[210px] text-[#646464]">Tax</p>

              <div className="flex items-center gap-5 self-stretch">
                <div className="flex flex-col justify-center items-end gap-2">
                  <input
                    type="text"
                    className="text-[#A4A4A4] p-reg flex w-[187.5px] h-[50px] px-5 items-center text-right self-stretch rounded-[10px] bg-[#FFF]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder="%"
                  />
                </div>
                <div className="flex flex-col justify-center items-end gap-2">
                  <input
                    type="text"
                    className="text-[#A4A4A4] p-reg flex w-[187.5px] h-[50px] px-5 items-center text-right self-stretch rounded-[10px] bg-[#EDEDED]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder="0.00"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="flex self-stretch justify-between items-center">
              <p className="p-reg text-left w-[210px] text-[#646464]">
                Net Amount (SAR)
              </p>

              <div className="flex items-center gap-5 self-stretch">
                <div className="flex flex-col justify-center items-end gap-2">
                  <input
                    type="text"
                    className="text-[#A4A4A4] p-reg flex w-[187.5px] h-[50px] px-5 items-center text-right self-stretch rounded-[10px] bg-[#EDEDED]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder="0.00"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recipients */}
      <div
        className="flex pt-[30px] col-span-2 flex-col items-start gap-5"
        style={{ flex: "1 0 0", borderTop: "1px solid #DCDCDC" }}
      >
        <div className="flex flex-col items-start gap-2.5">
          <label className="label text-[#383838]">Add Recipients</label>
        </div>
        <div className="flex items-center gap-5 self-stretch">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex items-center gap-5 self-stretch">
              <p className="p-reg text-left w-[210px] text-[#646464]">
                Select Recipient
              </p>
              <div className="flex items-center gap-[30px] self-stretchs">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                  <p className="p-reg text-[#646464]">Student</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                    checked
                  />
                  <p className="p-reg text-[#646464]">Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div
        className="flex pt-[30px] col-span-2 items-center justify-between "
        style={{ flex: "1 0 0", borderTop: "1px solid #DCDCDC" }}
      >
        <button className="unactive-btn w-[400px]">Cancel</button>
        <button className="cyan-btn w-[400px]">Add Request Payment</button>
      </div>
    </div>
  );
}

export default BillingRequestContent;
