import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Link } from "react-router-dom";

import infoIcon from "../../Assets/info-icon.svg";
import uploadIcon from "../../Assets/upload-icon.svg";

import nextArrow from "../../Assets/next-arrow.svg";
import prevArrow from "../../Assets/prev-arrow.svg";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

function FormWizardSeven() {
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
    <>
      <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-[30px] self-stretch lg:flex-wrap">
        <div
          className="flex flex-col items-start gap-5 self-stretch lg:self-auto"
          style={{ borderRadius: "20px 20px 0px 0px" }}
        >
          <div className="flex items-center gap-2.5">
            <p className="label text-[#383838]">License Certification</p>
            <img className="cursor-pointer" src={infoIcon} alt="" />
          </div>
          <div
            {...getRootProps()}
            className="flex lg:w-[380px] h-[357px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
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
                  <p className="p-reg text-[#646464] self-stretch">
                    Maximum file size is 50MB.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className="flex flex-col items-start gap-5 self-stretch lg:self-auto"
          style={{ borderRadius: "20px 20px 0px 0px" }}
        >
          <div className="flex items-center gap-2.5">
            <p className="label text-[#383838]">IBAN Certification</p>
            <img className="cursor-pointer" src={infoIcon} alt="" />
          </div>
          <div
            {...getRootProps()}
            className="flex lg:w-[380px] h-[357px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
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
                  <p className="p-reg text-[#646464] self-stretch">
                    Maximum file size is 50MB.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className="flex flex-col items-start gap-5 self-stretch lg:self-auto"
          style={{ borderRadius: "20px 20px 0px 0px" }}
        >
          <div className="flex items-center gap-2.5">
            <p className="label text-[#383838]">National Certification</p>
            <img className="cursor-pointer" src={infoIcon} alt="" />
          </div>
          <div
            {...getRootProps()}
            className="flex lg:w-[380px] h-[357px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
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
                  <p className="p-reg text-[#646464] self-stretch">
                    Maximum file size is 50MB.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-[30px] justify-center lg:justify-between items-end gap-5 lg:gap-0 lg:items-center self-stretch border-t border-[#DCDCDC]">
        <Link
          to="/form-wizard/step-six"
          className="flex lg:w-[400px] justify-center items-center unactive-btn gap-3 self-stretch lg:self-auto order-2 lg:order-none"
        >
          <img src={prevArrow} alt="" /> Previous Step
        </Link>
        <Link
          to="/dashboard"
          className="flex lg:w-[400px] justify-center items-center cyan-btn gap-3 self-stretch lg:self-auto"
        >
          Next Step <img src={nextArrow} alt="" />
        </Link>
      </div>
    </>
  );
}

export default FormWizardSeven;
