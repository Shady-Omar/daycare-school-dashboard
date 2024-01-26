import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import uploadIcon from "../../../Assets/upload-icon.svg";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

function SupportCreateNewTicket() {
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
    <div className="flex flex-col justify-center items-center gap-[30px] self-stretch">
      <div className="flex py-[30px] lg:py-10 px-5 flex-col justify-center items-start gap-[30px] self-stretch rounded-[10px] bg-white">
        {/* Subject */}
        <div className="flex flex-col items-start gap-2 self-stretch">
          <label className="label text-[#868686]">Subject</label>
          <input
            type="text"
            className="flex h-[50px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
            style={{ border: "1px solid #DBDADE" }}
            placeholder="Placeholder Text"
          />
        </div>
        {/* Category & Priority */}
        <div className="flex flex-col lg:flex-row items-center gap-[30px] self-stretch">
          <div
            className="flex flex-col items-start gap-2 self-stretch"
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
            className="flex flex-col items-start gap-2 self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Priority</label>
            <select
              className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
              style={{ border: "1px solid #DBDADE" }}
              defaultValue={"Select"}
            >
              <option value="Select">Select</option>
              {/* <option value="PM">PM</option> */}
            </select>
          </div>
        </div>
        {/* Description */}
        <div className="flex h-[134px] flex-col items-start gap-2 self-stretch">
          <label className="label text-[#868686]">Description</label>
          <textarea
            className="h-[134px] rounded-[10px] p-reg flex border px-5 items-center self-stretch  border-[#DBDADE] p-3 outline-none focus:outline-none bg-[#FFF]"
            rows="4"
            cols="50"
            placeholder="Placeholder Text"
            style={{ flex: "1 0 0" }}
          ></textarea>
        </div>
        {/* Attachments */}
        <div className="flex flex-col items-center justify-center gap-2 self-stretch">
          <div className="flex items-start gap-1 self-stretch">
            <label className="label text-[#868686]">Attachments</label>
          </div>
          <div
            {...getRootProps()}
            className="flex h-[320px] lg:h-[357px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
            style={{ border: "1px dashed #A4A4A4" }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="label text-[#383838] self-stretch ">
                Drop the image here
              </p>
            ) : (
              <>
                <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
                  <img src={uploadIcon} alt="upload" />
                  <p className="label text-[#383838] self-stretch text-center">
                    Drag and drop files here
                  </p>
                </div>
                <p className="p-reg text-[#646464]">Or</p>
                <div className="flex flex-col items-center justify-center self-stretch gap-2.5">
                  <button className="flex w-[200px] p-bold h-[50px] justify-center items-center rounded-[10px] bg-[#00CCB6] text-[#FFF] py-[10px] px-5">
                    Choose File
                  </button>
                  <p className="p-reg text-[#646464] text-center">
                    Maximum file size is 50MB.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Buttons */}
        <div
          className="flex flex-col lg:flex-row lg:h-20 pt-[30px] gap-2.5 lg:gap-0 justify-between items-center self-stretch"
          style={{ borderTop: "1px solid #DCDCDC" }}
        >
          <button className="unactive-btn self-stretch lg:self-auto lg:w-[400px]">
            Cancel
          </button>
          <button className="cyan-btn self-stretch lg:self-auto lg:w-[400px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default SupportCreateNewTicket;
