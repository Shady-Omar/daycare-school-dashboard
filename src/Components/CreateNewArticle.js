import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import uploadIcon from "../Assets/upload-icon.svg";
import boldBtn from "../Assets/bold-btn.svg";
import italicBtn from "../Assets/italic-btn.svg";
import attachBtn from "../Assets/attach-btn.svg";
import cameraBtn from "../Assets/CameraPlus-btn.svg";
import clearBtn from "../Assets/clear-btn.svg";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

function CreateNewArticle() {
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
    <div className="flex flex-col items-start self-stretch">
      {/* Form */}
      <div className="flex py-[50px] px-[30px] flex-col justify-center items-center gap-[30px] self-stretch rounded-[10px] bg-white">
        <div className="flex w-[615px] flex-col items-start gap-2">
          <label className="label text-[#868686]">Title</label>
          <input
            type="text"
            className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
            style={{ border: "1px solid #DBDADE" }}
            placeholder="Enter blog title here"
          />
        </div>
        <div className="flex w-[615px] flex-col items-start gap-2">
          <label className="label text-[#868686]">Specialty</label>
          <select
            className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
            style={{ border: "1px solid #DBDADE" }}
            defaultValue={"Choose Specialty"}
          >
            <option value="Choose Specialty">Choose Specialty</option>
            {/* <option value="PM">PM</option> */}
          </select>
        </div>
        <div className="flex w-[615px] flex-col items-start gap-2">
          <label className="label text-[#868686]">Target Age</label>
          <select
            className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
            style={{ border: "1px solid #DBDADE" }}
            defaultValue={"Choose a Target Age"}
          >
            <option value="Choose a Target Age">Choose a Target Age</option>
            {/* <option value="PM">PM</option> */}
          </select>
        </div>
        <div className="flex w-[615px] flex-col justify-center items-center gap-2.5">
          <label className="label text-[#868686] flex items-start self-stretch gap-1">
            Upload blog Cover image
          </label>
          <div
            {...getRootProps()}
            className="flex h-[357px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
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
                  <button className="p-bold !text-[15px] cyan-btn">
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
        <div className="flex w-[615px] flex-col justify-center items-center gap-2.5">
          <label className="label text-[#868686] flex items-start self-stretch gap-1">
            ARTICLE
          </label>
          <div
            className="flex w-[615px] h-[375px] flex-col items-start rounded-[10px] bg-white"
            style={{ border: "1px solid #DCDCDC" }}
          >
            <textarea
              className="h-[375px] rounded-[10px] p-reg flex px-5 items-center self-stretch  p-3 outline-none focus:outline-none bg-[#FFF]"
              rows="4"
              cols="50"
              placeholder="Type article here..."
            ></textarea>
            {/* Controls */}
            <div
              className="flex py-5 px-[30px] justify-between items-center self-stretch bg-white"
              style={{
                borderRadius: "0px 0px 10px 10px",
                borderTop: "1px solid #EBEBEB",
              }}
            >
              {/* Items */}
              <div className="flex items-start gap-5">
                <button className="h-6 w-6">
                  <img src={boldBtn} alt="bold" />
                </button>
                <button className="h-6 w-6">
                  <img src={italicBtn} alt="italic" />
                </button>
                <button className="h-6 w-6">
                  <img src={attachBtn} alt="attachment" />
                </button>
                <button className="h-6 w-6">
                  <img src={cameraBtn} alt="camera" />
                </button>
                <button className="h-6 w-6">
                  <img src={clearBtn} alt="clear" />
                </button>
              </div>
              {/* Buttons */}
              <div
                className="flex justify-end items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <button className="white-btn !h-auto">Save Draft</button>
                <button className="cyan-btn !h-auto">Publish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewArticle;
