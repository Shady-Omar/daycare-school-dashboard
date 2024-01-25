import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import photosIcon from "../../../Assets/photos-icon.svg";
import uploadIcon from "../../../Assets/upload-icon.svg";
import uploadPlaceholder from "../../../Assets/upload-placeholder.png";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

function PhotosContent() {
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
          <img src={photosIcon} alt="photos" />
        </div>
        <div className="flex flex-col items-start gap-[5px]">
          <h5 className="h5-bold !text-[18px] text-[#202020]">Photos</h5>
        </div>
      </div>
      {/* Form */}
      <div className="flex flex-col lg:flex-row items-start gap-[50px] lg:gap-[30px] self-stretch">
        <div
          className="flex flex-col items-start gap-5 self-stretch lg:self-auto lg:rounded-[20px_20px_0px_0px]"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex lg:w-[487px] flex-col items-start gap-2 lg:gap-2.5 self-stretch lg:self-auto">
            <p className="label text-[#383838]">Upload Photos</p>
            <p className="p-reg text-[#646464] text-left">
              Upload photos you want to share with your room.
            </p>
          </div>

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
                  <button className="self-stretch cyan-btn">Choose File</button>
                  <p className="p-reg text-[#646464]">
                    Maximum file size is 50MB.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className="flex w-full flex-col items-start gap-[22px] self-stretch lg:self-auto"
          style={{ flex: "1 0 0", borderRadius: "20px 20px 0px 0px" }}
        >
          <div className="flex w-full flex-col items-start gap-1">
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

export default PhotosContent;
