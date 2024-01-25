import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import uploadIcon from "../../Assets/upload-icon.svg";
import uploadPlaceholder from "../../Assets/upload-placeholder.png";

import nextArrow from "../../Assets/next-arrow.svg";
import prevArrow from "../../Assets/prev-arrow.svg";
import { Link } from "react-router-dom";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

function FormWizardFive() {
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
      <div className="flex flex-col lg:flex-row items-start gap-[50px] self-stretch">
        <div
          className="flex flex-col items-start gap-[50px] self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div
            className="flex lg:max-w-[585px] flex-col items-start gap-5 lg:gap-2 self-stretch"
            style={{ borderRadius: "20px 20px 0px 0px" }}
          >
            <div className="flex text-left lg:w-[487px] flex-col items-start gap-2 self-stretch lg:self-auto">
              <p className="label text-[#383838]">Upload Logo</p>
              <p className="p-reg text-[#646464]">
                Upload logo you want to use with your room.
              </p>
            </div>

            <div
              {...getRootProps()}
              className="flex h-[278px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
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
                    <button className="lg:w-[400px] cyan-btn self-stretch lg:self-auto">
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
            className="flex lg:max-w-[585px] flex-col items-start gap-5 lg:gap-2 self-stretch"
            style={{ borderRadius: "20px 20px 0px 0px" }}
          >
            <div className="flex text-left lg:w-[487px] flex-col items-start gap-2 self-stretch lg:self-auto">
              <p className="label text-[#383838]">Upload Photos</p>
              <p className="p-reg text-[#646464]">
                Upload Photos you want to use with your room.
              </p>
            </div>

            <div
              {...getRootProps()}
              className="flex h-[278px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
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
                    <button className="lg:w-[400px] cyan-btn self-stretch lg:self-auto">
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
        </div>
        <div className="flex w-full flex-col items-start gap-[22px] self-stretch lg:self-auto">
          <div className="flex flex-col items-start gap-1">
            <p className="label text-[#383838]">Uploaded Photos</p>
          </div>
          <div className="flex items-center self-stretch gap-5">
            <img src={uploadPlaceholder} alt="" />
            <div
              className="flex flex-col items-start gap-[15px]"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex flex-col lg:flex-row gap-[5px] lg:justify-between items-start self-stretch">
                <p className="p-reg text-[#646464]">Image-01.png</p>
                <p className="p-semi text-[#00CCB6]">Completed</p>
              </div>
              <div className="h-[10px] bg-[#EBEBEB] rounded-[4px] shrink-0 self-stretch">
                <div className="bg-[#00CCB6] w-[45%] h-[10px] rounded-[4px]  "></div>
              </div>
            </div>
          </div>
          <div className="flex items-center self-stretch gap-5">
            <img src={uploadPlaceholder} alt="" />
            <div
              className="flex flex-col items-start gap-[15px]"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex flex-col lg:flex-row gap-[5px] lg:justify-between items-start self-stretch">
                <p className="p-reg text-[#646464]">Image-01.png</p>
                <p className="p-semi text-[#00CCB6]">Completed</p>
              </div>
              <div className="h-[10px] bg-[#EBEBEB] rounded-[4px] shrink-0 self-stretch">
                <div className="bg-[#00CCB6] w-[45%] h-[10px] rounded-[4px]  "></div>
              </div>
            </div>
          </div>
          <div className="flex items-center self-stretch gap-5">
            <img src={uploadPlaceholder} alt="" />
            <div
              className="flex flex-col items-start gap-[15px]"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex flex-col lg:flex-row gap-[5px] lg:justify-between items-start self-stretch">
                <p className="p-reg text-[#646464]">Image-01.png</p>
                <p className="p-semi text-[#00CCB6]">Completed</p>
              </div>
              <div className="h-[10px] bg-[#EBEBEB] rounded-[4px] shrink-0 self-stretch">
                <div className="bg-[#00CCB6] w-[45%] h-[10px] rounded-[4px]  "></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-[30px] justify-center lg:justify-between items-end gap-5 lg:gap-0 lg:items-center self-stretch border-t border-[#DCDCDC]">
        <Link
          to="/form-wizard/step-four"
          className="flex lg:w-[400px] justify-center items-center unactive-btn gap-3 self-stretch lg:self-auto order-2 lg:order-none"
        >
          <img src={prevArrow} alt="" /> Previous Step
        </Link>
        <Link
          to="/form-wizard/step-six"
          className="flex lg:w-[400px] justify-center items-center cyan-btn gap-3 self-stretch lg:self-auto"
        >
          Next Step <img src={nextArrow} alt="" />
        </Link>
      </div>
    </>
  );
}

export default FormWizardFive;
