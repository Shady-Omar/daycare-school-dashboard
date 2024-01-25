import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import usersIcon from "../../../Assets/users-icon.svg";
import uploadIcon from "../../../Assets/upload-icon.svg";
import pdfIcon from "../../../Assets/pdf-icon.svg";
import deleteIcon from "../../../Assets/delete-icon.svg";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

function AddStudentContent() {
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
    <div
      className="flex flex-col items-start gap-10 self-stretch rounded-[10px] bg-[#FFF]"
      style={{ padding: "20px 20px 30px 20px" }}
    >
      {/* Info */}
      <div
        className="flex py-[15px] px-5 items-center gap-5 self-stretch rounded-[10px]"
        style={{ background: "rgba(0, 204, 182, 0.10)" }}
      >
        <img src={usersIcon} alt="" />
        <div className="flex flex-col items-start gap-[5px]">
          <p className="p-reg text-[#646464]">
            Need to add Interested Child?{" "}
            <span className="text-[#383838] font-bold underline ">
              Create a new children in Admissions
            </span>
          </p>
        </div>
      </div>
      {/* form row one */}
      <div
        className="flex pb-10 flex-col items-start gap-[30px] self-stretch"
        style={{ borderBottom: "1px solid #DCDCDC" }}
      >
        <p className="label text-[#383838]">Fill the children info</p>
        <div className="flex items-start content-start gap-5 self-stretch flex-wrap">
          <div
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">First Name</label>
            <input
              type="text"
              className="flex h-[50px] px-5 items-center shrink-0 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
            />
          </div>
          <div
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Last Name</label>
            <input
              type="text"
              className="flex h-[50px] px-5 items-center shrink-0 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
            />
          </div>
          <div
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">ID Number</label>
            <input
              type="text"
              className="flex h-[50px] px-5 items-center shrink-0 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
            />
          </div>
          <div
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Gender</label>
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
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Date of Birth</label>
            <input
              type="date"
              className="flex h-[50px] px-5 items-center shrink-0 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
            />
          </div>
          <div
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Nationality</label>
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
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Subscription Plan</label>
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
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Room</label>
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
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Start Date</label>
            <input
              type="date"
              className="flex h-[50px] px-5 items-center shrink-0 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
            />
          </div>
          <div
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">End Date</label>
            <input
              type="date"
              className="flex h-[50px] px-5 items-center shrink-0 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
            />
          </div>
        </div>
      </div>
      {/* form row two */}
      <div className="flex pb-10 flex-col items-start gap-[30px] self-stretch">
        <p className="label text-[#383838]">
          Fill the Parent and pickup details
        </p>
        <div className="flex items-start content-start gap-5 self-stretch flex-wrap">
          <div
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Name</label>
            <input
              type="text"
              className="flex h-[50px] px-5 items-center shrink-0 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
            />
          </div>
          <div
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Gov Issued ID</label>
            <input
              type="text"
              className="flex h-[50px] px-5 items-center shrink-0 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
            />
          </div>
          <div
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">enter phone number</label>
            <input
              type="text"
              className="flex h-[50px] px-5 items-center shrink-0 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
            />
          </div>
          <div
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Relationship</label>
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
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Contract Paid</label>
            <input
              type="text"
              className="flex h-[50px] px-5 items-center shrink-0 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
            />
          </div>
          <div
            className="flex h-[76px] min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Payment Type</label>
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
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Attachments</label>
            <div
              {...getRootProps()}
              className="flex h-[278px] min-w-[530px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
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
                    <button className="flex w-[400px] p-bold h-[50px] justify-center items-center rounded-[10px] bg-[#00CCB6] text-[#FFF] py-[10px] px-5">
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
          <div
            className="flex min-w-[530px] flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Uploaded attachments</label>
            <div
              className="flex p-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DCDCDC" }}
            >
              <img src={pdfIcon} alt="pdf" />
              <div
                className="flex flex-col justify-center items-start gap-[5px]"
                style={{ flex: "1 0 0" }}
              >
                <p className="p-semi text-[#646464]">File attachment-01.pdf</p>
                <p className="p-reg text-[#646464]">358 KB</p>
              </div>
              <img src={deleteIcon} alt="pdf" />
            </div>
            <div
              className="flex p-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DCDCDC" }}
            >
              <img src={pdfIcon} alt="pdf" />
              <div
                className="flex flex-col justify-center items-start gap-[5px]"
                style={{ flex: "1 0 0" }}
              >
                <p className="p-semi text-[#646464]">File attachment-02.pdf</p>
                <p className="p-reg text-[#646464]">358 KB</p>
              </div>
              <img src={deleteIcon} alt="pdf" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex pt-[30px] justify-end items-center gap-2.5 self-stretch"
        style={{ borderTop: "1px solid #DCDCDC" }}
      >
        <button className="w-[300px] white-btn">
          Save & Add Another Children
        </button>
        <button className="w-[300px] cyan-btn">Add Children</button>
      </div>
    </div>
  );
}

export default AddStudentContent;
