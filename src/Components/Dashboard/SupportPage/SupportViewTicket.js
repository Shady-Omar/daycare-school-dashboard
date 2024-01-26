import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import uploadIcon from "../../../Assets/upload-icon.svg";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

function SupportViewTicket() {
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
      <div className="flex py-[30px] lg:py-10 px-5 flex-col justify-center lg:justify-normal items-start gap-[30px] self-stretch rounded-[10px] bg-white">
        {/* Info */}
        <div className="flex flex-col lg:flex-row p-[30px] lg:p-0 lg:py-5 lg:px-[60px] gap-5 lg:gap-0 lg:justify-between items-start lg:items-center self-stretch rounded-[10px] bg-[#F9F9F9]">
          <div className="flex flex-col items-start gap-[5px]">
            <p className="p-reg text-[#383838]">Ticket ID</p>
            <h5 className="h5-bold text-[#00CCB6]">2334434</h5>
          </div>
          <div className="flex flex-col items-start gap-[5px]">
            <p className="p-reg text-[#383838]">Ticket Date</p>
            <h5 className="h5-bold text-[#00CCB6]">24/05/2023</h5>
          </div>
          <div className="flex flex-col items-start gap-[5px]">
            <p className="p-reg text-[#383838]">Ticket Category</p>
            <h5 className="h5-bold text-[#00CCB6]">Discount</h5>
          </div>
          <div className="flex flex-col items-start gap-[5px]">
            <p className="p-reg text-[#383838]">Priority</p>
            <h5 className="h5-bold text-[#00CCB6]">High</h5>
          </div>
        </div>
        {/* Description */}
        <div className="flex flex-col items-start gap-2 self-stretch">
          {/* label */}
          <div className="flex items-start gap-1 self-stretch">
            <p className="label text-[#868686]">Description</p>
          </div>
          {/* text */}
          <div
            className="flex h-[134px] items-start self-stretch rounded-[10px] bg-[#F9F9F9]"
            style={{ border: "1px solid #DBDADE" }}
          >
            <div
              className="flex py-5 px-[30px] justify-end items-center gap-3 rounded-md overflow-hidden"
              style={{ flex: "1 0 0" }}
            >
              <p className="hidden lg:block p-reg !text-[15px] text-[#383838] text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="lg:hidden p-reg !text-[15px] text-[#383838] text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>
        </div>
        {/* Messages */}
        <div className="flex flex-col items-start gap-[30px] self-stretch text-left">
          <div className="flex flex-col items-start gap-2.5 self-stretch">
            <div className="flex py-[18px] px-[15px] items-start gap-2.5 rounded-xl bg-[#F9F9F9]">
              <p className="p-reg !text-[15px] text-[#383838]">
                Can you arrange schedule for next meeting?
              </p>
            </div>
            <p className="label-reg !text-[13px] text-[#878787]">12:45 PM</p>
          </div>
          <div className="flex flex-col items-start gap-2.5 self-stretch">
            <div className="flex py-[18px] px-[15px] items-start gap-2.5 rounded-xl bg-[#5ECFFF]">
              <p className="p-reg !text-[15px] text-white">
                Okay, I’ll arrange it soon. i noftify you when it’s done
              </p>
            </div>
            <p className="label-reg !text-[13px] text-[#878787]">12:45 PM</p>
          </div>
        </div>
        {/* Reply */}
        <div className="flex h-[134px] flex-col items-start gap-2 self-stretch">
          <label className="label text-[#868686]">Replay</label>
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
                  <p className="p-reg text-[#646464]">
                    Maximum file size is 50MB.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Buttons */}
        <div
          className="flex h-20 pt-[30px] justify-end items-center gap-2.5 self-stretch"
          style={{ borderTop: "1px solid #DCDCDC" }}
        >
          <button className="cyan-btn w-[400px]">Replay</button>
        </div>
      </div>
    </div>
  );
}

export default SupportViewTicket;
