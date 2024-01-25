import { Fragment, useState, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDropzone } from "react-dropzone";

import uploadIcon from "../../../Assets/upload-icon.svg";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

function ResubmitModal() {
  let [isOpen, setIsOpen] = useState(false);

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
      <button
        onClick={() => setIsOpen(true)}
        className="cyan-btn w-full h-[50px] p-bold"
      >
        Daycare Certification
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50 "
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div
              className="fixed inset-0"
              style={{ background: "rgba(56, 56, 56, 0.90)" }}
              aria-hidden="true"
            />
          </Transition.Child>

          {/* Full-screen container to center the panel */}
          <div
            id="custom-scroll"
            className="fixed inset-0 flex w-screen items-start justify-center p-5 overflow-y-scroll"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* The actual dialog panel  */}
              <Dialog.Panel className="flex w-[340px] lg:w-[700px] p-[30px] flex-col justify-center items-center gap-[30px] rounded-[10px] bg-[#FFF]">
                <Dialog.Title
                  className="flex pb-2.5 justify-between items-center self-stretch"
                  style={{ borderBottom: "1px solid #DCDCDC" }}
                >
                  <h5 className="h5-bold text-[#202020]">
                    Certification Details
                  </h5>
                  <button onClick={() => setIsOpen(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <path
                        d="M14.0002 2.8335C7.5835 2.8335 2.3335 8.0835 2.3335 14.5002C2.3335 20.9168 7.5835 26.1668 14.0002 26.1668C20.4168 26.1668 25.6668 20.9168 25.6668 14.5002C25.6668 8.0835 20.4168 2.8335 14.0002 2.8335ZM18.3168 17.1835C18.7835 17.6502 18.7835 18.3502 18.3168 18.8168C17.8502 19.2835 17.1502 19.2835 16.6835 18.8168L14.0002 16.1335L11.3168 18.8168C10.8502 19.2835 10.1502 19.2835 9.6835 18.8168C9.21683 18.3502 9.21683 17.6502 9.6835 17.1835L12.3668 14.5002L9.6835 11.8168C9.21683 11.3502 9.21683 10.6502 9.6835 10.1835C10.1502 9.71683 10.8502 9.71683 11.3168 10.1835L14.0002 12.8668L16.6835 10.1835C17.1502 9.71683 17.8502 9.71683 18.3168 10.1835C18.7835 10.6502 18.7835 11.3502 18.3168 11.8168L15.6335 14.5002L18.3168 17.1835Z"
                        fill="#A4A4A4"
                      />
                    </svg>
                  </button>
                </Dialog.Title>

                <div className="flex flex-col justify-center items-center gap-[30px] self-stretch">
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-5 self-stretch">
                    <div
                      className="flex flex-col items-start self-stretch gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]">
                        Certification Number
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] px-5 bg-[#FFF]"
                      />
                    </div>
                    <div
                      className="flex flex-col items-start self-stretch gap-2"
                      style={{ flex: "1 0 0" }}
                    >
                      <label className="label text-[#868686]" htmlFor="date">
                        Certificate Expiry Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        placeholder="Enter Your Name"
                        className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] px-5 bg-[#FFF]"
                      />
                    </div>
                  </div>
                  <div
                    {...getRootProps()}
                    className="flex lg:h-[278px] p-[30px] flex-col justify-center items-center gap-2.5 self-stretch rounded-[10px] bg-[#F9F9F9]"
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
                          <p className="label text-[#383838] self-stretch text-center">
                            Drag and drop files here
                          </p>
                        </div>
                        <p className="p-reg text-[#646464]">Or</p>
                        <div className="flex flex-col items-center justify-center self-stretch gap-2.5">
                          <button className="flex self-stretch lg:self-auto lg:w-[400px] p-bold h-[50px] justify-center items-center rounded-[10px] bg-[#00CCB6] text-[#FFF] py-[10px] px-5">
                            Choose File
                          </button>
                          <p className="p-reg text-[#646464]">
                            Maximum file size is 50MB.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  {/* Submit Button */}
                  <div className="flex flex-col items-center justify-center gap-5 self-stretch">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="cyan-btn w-full"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-semi text-[#878787]"
                    >
                      Cancel and back to profile
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ResubmitModal;
