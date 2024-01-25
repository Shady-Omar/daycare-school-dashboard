import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import documentsIcon from "../../../Assets/documents-icon.svg";
import infoIcon from "../../../Assets/info-icon.svg";
import uploadIcon from "../../../Assets/upload-icon.svg";
import pdfIcon from "../../../Assets/pdf-icon.svg";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

function DocumentsContent() {
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
    <div className="flex p-5 lg:p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-[#FFF] rounded-[10px] lg:rounded-[0px_10px_10px_10px]">
      {/* Title */}
      <div className="flex w-full py-[15px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]">
        <div className="w-9 h-9">
          <img src={documentsIcon} alt="documents" />
        </div>
        <div className="flex flex-col items-start gap-[5px]">
          <h5 className="h5-bold !text-[18px] text-[#202020]">Documents</h5>
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col lg:flex-row items-start gap-[30px] self-stretch ">
        <div
          className="flex flex-col items-start gap-5 lg:gap-[30px] self-stretch lg:self-auto"
          style={{ flex: "1 0 0", borderRadius: "20px 20px 0px 0px" }}
        >
          <div className="flex flex-col items-start gap-5 self-stretch">
            <div className="flex items-center gap-2.5 self-stretch">
              <p className="label text-[#383838]">License Certification</p>
              <img className="cursor-pointer" src={infoIcon} alt="" />
            </div>
            <div
              {...getRootProps()}
              className="flex  h-[357px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
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
                    <button className="cyan-btn self-stretch">
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
          <div className="hidden lg:flex flex-col items-start gap-2.5 self-stretch">
            <p className="label text-[#383838]">Uploaded files</p>
            <div
              className="flex p-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DCDCDC" }}
            >
              <img src={pdfIcon} alt="pdf" />
              <div
                className="flex flex-col justify-center items-start gap-[5px]"
                style={{ flex: "1 0 0" }}
              >
                <p className="p-semi text-[#646464]">
                  License Certification.pdf
                </p>
                <p className="p-reg text-[#646464]">358 KB</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-start gap-5 lg:gap-[30px] self-stretch lg:self-auto"
          style={{ flex: "1 0 0", borderRadius: "20px 20px 0px 0px" }}
        >
          <div className="flex flex-col items-start gap-5 self-stretch">
            <div className="flex items-center gap-2.5 self-stretch">
              <p className="label text-[#383838]">IBAN Certification</p>
              <img className="cursor-pointer" src={infoIcon} alt="" />
            </div>
            <div
              {...getRootProps()}
              className="flex  h-[357px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
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
                    <button className="cyan-btn self-stretch">
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
          <div className="hidden lg:flex flex-col items-start gap-2.5 self-stretch">
            <p className="label text-[#383838]">Uploaded files</p>
            <div
              className="flex p-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DCDCDC" }}
            >
              <img src={pdfIcon} alt="pdf" />
              <div
                className="flex flex-col justify-center items-start gap-[5px]"
                style={{ flex: "1 0 0" }}
              >
                <p className="p-semi text-[#646464]">IBAN Certification.pdf</p>
                <p className="p-reg text-[#646464]">128 KB</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-start gap-5 lg:gap-[30px] self-stretch lg:self-auto"
          style={{ flex: "1 0 0", borderRadius: "20px 20px 0px 0px" }}
        >
          <div className="flex flex-col items-start gap-5 self-stretch">
            <div className="flex items-center gap-2.5 self-stretch">
              <p className="label text-[#383838]">National Certification</p>
              <img className="cursor-pointer" src={infoIcon} alt="" />
            </div>
            <div
              {...getRootProps()}
              className="flex  h-[357px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
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
                    <button className="cyan-btn self-stretch">
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
          <div className="hidden lg:flex flex-col items-start gap-2.5 self-stretch">
            <p className="label text-[#383838]">Uploaded files</p>
            <div
              className="flex p-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DCDCDC" }}
            >
              <img src={pdfIcon} alt="pdf" />
              <div
                className="flex flex-col justify-center items-start gap-[5px]"
                style={{ flex: "1 0 0" }}
              >
                <p className="p-semi text-[#646464]">
                  National Certification.pdf
                </p>
                <p className="p-reg text-[#646464]">89 KB</p>
              </div>
            </div>
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

export default DocumentsContent;
