import React from "react";

function StaffPermissionsContent() {
  return (
    <div className="flex p-[30px] flex-col justify-center items-end gap-[30px] self-stretch rounded-[10px] bg-white">
      {/* Form */}
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[30px] self-stretch w-full">
        {/* Left Side */}
        <div
          className="flex flex-col items-start gap-[15px] self-stretch"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex items-start gap-1 self-stretch">
            <p className="label text-[#868686]">Managing Room</p>
          </div>
          <div className="flex items-center gap-2.5">
            <input type="checkbox" className="w-[18px] h-[18px] rounded" />
            <p className="p-reg text-[#646464]">All Room</p>
          </div>
          <div
            className="flex p-5 flex-col items-start content-center gap-[15px] self-stretch rounded-[10px] bg-white"
            style={{ border: "1px solid #DBDADE" }}
          >
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input
                type="checkbox"
                checked
                className="w-[18px] h-[18px] rounded"
              />
              <p className="p-reg text-[#646464]">Room 1</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              <p className="p-reg text-[#646464]">Room 2</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              <p className="p-reg text-[#646464]">Room 3</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input
                type="checkbox"
                checked
                className="w-[18px] h-[18px] rounded"
              />
              <p className="p-reg text-[#646464]">Room 4</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              <p className="p-reg text-[#646464]">Room 5</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input
                type="checkbox"
                checked
                className="w-[18px] h-[18px] rounded"
              />
              <p className="p-reg text-[#646464]">Room 6</p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div
          className="flex flex-col items-start gap-[15px] self-stretch"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex items-start gap-1 self-stretch">
            <p className="label text-[#868686]">Permissions</p>
          </div>
          <div className="flex items-center gap-2.5">
            <input type="checkbox" className="w-[18px] h-[18px] rounded" />
            <p className="p-reg text-[#646464]">Give Full Permissions</p>
          </div>
          <div
            className="flex p-5 flex-col items-start content-center gap-[15px] self-stretch rounded-[10px] bg-white"
            style={{ border: "1px solid #DBDADE" }}
          >
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input
                type="checkbox"
                checked
                className="w-[18px] h-[18px] rounded"
              />
              <p className="p-reg text-[#646464]">My Center</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              <p className="p-reg text-[#646464]">Admission</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              <p className="p-reg text-[#646464]">Billing</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input
                type="checkbox"
                checked
                className="w-[18px] h-[18px] rounded"
              />
              <p className="p-reg text-[#646464]">Review</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              <p className="p-reg text-[#646464]">Staff</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input
                type="checkbox"
                checked
                className="w-[18px] h-[18px] rounded"
              />
              <p className="p-reg text-[#646464]">Notifications</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input
                type="checkbox"
                checked
                className="w-[18px] h-[18px] rounded"
              />
              <p className="p-reg text-[#646464]">Articles</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              <p className="p-reg text-[#646464]">Settings</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              <p className="p-reg text-[#646464]">Reporting</p>
            </div>
            <div
              className="flex items-center gap-2.5 min-w-[280px]"
              style={{ flex: "1 0 0" }}
            >
              <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              <p className="p-reg text-[#646464]">Support</p>
            </div>
          </div>
        </div>
      </div>
      {/* Button */}
      <div
        className="flex pt-[30px] flex-col justify-center items-end gap-2.5 self-stretch"
        style={{ borderTop: "1px solid #DCDCDC" }}
      >
        <button className="cyan-btn self-stretch lg:self-auto lg:w-[515px]">
          Save Edit
        </button>
      </div>
    </div>
  );
}

export default StaffPermissionsContent;
