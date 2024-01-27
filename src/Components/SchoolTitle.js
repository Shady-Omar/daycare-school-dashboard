import React from "react";
import schoolLogo from "../Assets/school-logo.svg";
import { useLocation } from "react-router-dom";

function SchoolTitle() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-[30px] self-stretch lg:self-auto"
      style={{ flex: "1 0 0" }}
    >
      {/* School Logo */}
      {[
        "/settings/payments",
        "/settings/profile",
        "/settings/edit-profile",
        "/my-center/room",
        "/my-center/room/details",
        "/my-center/calendar",
      ].includes(currentPath) ? (
        ""
      ) : currentPath.includes("/my-center/room") ? (
        ""
      ) : currentPath.includes("/students") ? (
        ""
      ) : currentPath.includes("/chat") ? (
        ""
      ) : currentPath.includes("/articles") ? (
        ""
      ) : currentPath.includes("/staff") ? (
        ""
      ) : currentPath.includes("/review") ? (
        ""
      ) : currentPath.includes("/report") ? (
        ""
      ) : currentPath.includes("/billing") ? (
        ""
      ) : currentPath.includes("/support") ? (
        ""
      ) : (
        <div className="flex w-16 py-[15px] px-2.5 flex-col justify-center items-center gap-2.5 rounded-[10px] bg-[#FFF]">
          <img src={schoolLogo} alt="" />
        </div>
      )}

      {/* Text */}
      <div className="flex flex-col items-start gap-[5px] self-stretch lg:self-auto">
        {currentPath.includes("services") ? (
          <p className="label-reg !text-[13px] text-[#383838]">
            Services
            {currentPath === "/services/plans" ? (
              <span className="text-[#878787]"> / Plans</span>
            ) : currentPath === "/services/coupons" ? (
              <span className="text-[#878787]"> / Coupon</span>
            ) : (
              ""
            )}
          </p>
        ) : currentPath.includes("my-center") ? (
          <p className="label-reg !text-[13px] text-[#383838]">
            My Center
            {currentPath.includes("/my-center/room") ? (
              <span className="text-[#878787]"> / Room</span>
            ) : currentPath === "/my-center/calendar" ? (
              <span className="text-[#878787]"> / Calendar</span>
            ) : (
              ""
            )}
          </p>
        ) : currentPath.includes("settings") ? (
          <p className="label-reg !text-[13px] text-[#383838]">
            Settings
            {currentPath === "/settings/center" ? (
              <span className="text-[#878787]"> / Center Info</span>
            ) : currentPath === "/settings/address" ? (
              <span className="text-[#878787]"> / Address</span>
            ) : currentPath === "/settings/timing" ? (
              <span className="text-[#878787]"> / Timing</span>
            ) : currentPath === "/settings/facilities" ? (
              <span className="text-[#878787]"> / Facilities</span>
            ) : currentPath === "/settings/financials" ? (
              <span className="text-[#878787]"> / Financials</span>
            ) : currentPath === "/settings/photos" ? (
              <span className="text-[#878787]"> / Photos</span>
            ) : currentPath === "/settings/documents" ? (
              <span className="text-[#878787]"> / Documents</span>
            ) : currentPath === "/settings/payments" ? (
              <span className="text-[#878787]"> / Payments</span>
            ) : currentPath === "/settings/profile" ? (
              <span className="text-[#878787]"> / Profile</span>
            ) : currentPath === "/settings/edit-profile" ? (
              <span className="text-[#878787]"> / Profile</span>
            ) : (
              ""
            )}
          </p>
        ) : currentPath.includes("students") ? (
          <p className="label-reg !text-[13px] text-[#383838]">
            Students
            {currentPath === "/students/attendance" ? (
              <span className="text-[#878787]"> / Attendance</span>
            ) : currentPath === "/students/list" ? (
              <span className="text-[#878787]"> / Student List</span>
            ) : currentPath === "/students/add" ? (
              <span className="text-[#878787]"> / Add</span>
            ) : currentPath === "/students/admission" ? (
              <span className="text-[#878787]"> / Admission</span>
            ) : currentPath === "/students/admission/applied" ? (
              <span className="text-[#878787]"> / Admission</span>
            ) : currentPath.includes("/students/profile") ? (
              <span className="text-[#878787]"> / Profile</span>
            ) : (
              ""
            )}
          </p>
        ) : currentPath.includes("staff") ? (
          <p className="label-reg !text-[13px] text-[#383838]">
            Staff
            {currentPath === "/staff/list" ? (
              <span className="text-[#878787]"> / Staff List</span>
            ) : currentPath === "/staff/details" ? (
              <span className="text-[#878787]"> / Staff Details</span>
            ) : currentPath === "/staff/attendance" ? (
              <span className="text-[#878787]"> / Attendance</span>
            ) : currentPath === "/staff/shifts" ? (
              <span className="text-[#878787]"> / Attendance</span>
            ) : currentPath === "/staff/leave" ? (
              <span className="text-[#878787]"> / Leaves</span>
            ) : currentPath === "/staff/salaries" ||
              currentPath === "/staff/salaries-history" ? (
              <span className="text-[#878787]"> / Salaries</span>
            ) : currentPath.includes("/staff/profile") ? (
              <span className="text-[#878787]"> / Profile</span>
            ) : (
              ""
            )}
          </p>
        ) : currentPath.includes("chat") ? (
          <p className="label-reg !text-[13px] text-[#383838]">Messaging</p>
        ) : currentPath.includes("billing") ? (
          <p className="label-reg !text-[13px] text-[#383838]">
            Billing
            {currentPath === "/billing/request" ? (
              <span className="text-[#878787]"> / Request Payment</span>
            ) : (
              ""
            )}
          </p>
        ) : currentPath.includes("articles") ? (
          <p className="label-reg !text-[13px] text-[#383838]">Article</p>
        ) : currentPath.includes("review") ? (
          <p className="label-reg !text-[13px] text-[#383838]">Reviews</p>
        ) : currentPath.includes("report") ? (
          <p className="label-reg !text-[13px] text-[#383838]">Reporting</p>
        ) : currentPath.includes("support") ? (
          <p className="label-reg !text-[13px] text-[#383838]">Support</p>
        ) : (
          ""
        )}

        {currentPath === ("/settings/profile" && "/settings/edit-profile") ? (
          <h2 className="h2-bold text-[#202020]">My Profile</h2>
        ) : currentPath === "/students/attendance" ? (
          <h2 className="h2-bold text-[#202020]">Attendance</h2>
        ) : currentPath.includes("/students/profile") ? (
          <h2 className="h2-bold text-[#202020]">Student Profile</h2>
        ) : currentPath === "/students/list" ? (
          <h2 className="h2-bold text-[#202020]">Student List</h2>
        ) : currentPath === "/students/add" ? (
          <h2 className="h2-bold text-[#202020]">Add Student</h2>
        ) : currentPath === "/students/admission" ? (
          <h2 className="h2-bold text-[#202020]">Admission</h2>
        ) : currentPath === "/students/admission/applied" ? (
          <h2 className="h2-bold text-[#202020]">Admission</h2>
        ) : currentPath === "/my-center/room" ? (
          <h2 className="h2-bold text-[#202020]">Room List</h2>
        ) : currentPath.includes("/my-center/room/details") ? (
          <div className="flex items-end lg:items-center gap-[5px] lg:gap-5 self-stretch lg:self-auto">
            <h2
              className="h2-bold text-[#202020] text-left"
              style={{ flex: "1 0 0" }}
            >
              Room 1
            </h2>
            <div className="flex py-2.5 px-5 justify-center items-center gap-2.5 rounded-[10px] bg-[#FFF]">
              <h5 className="h5-bold !text-[18px] text-[#202020]">5/50</h5>
              <p className="p-reg !text-[15px] text-[#646464]">Children</p>
            </div>
          </div>
        ) : currentPath === "/my-center/calendar" ? (
          <h2 className="h2-bold text-[#202020]">Calendar</h2>
        ) : currentPath.includes("/chat") ? (
          <h2 className="h2-bold text-[#202020]">Messaging</h2>
        ) : currentPath === "/billing" || currentPath === "/billing/refund" ? (
          <h2 className="h2-bold text-[#202020]">Invoices</h2>
        ) : currentPath === "/billing/request" ? (
          <h2 className="h2-bold text-[#202020]">Request Payment</h2>
        ) : currentPath.includes("/articles/blog") ||
          currentPath === "/articles" ? (
          <h2 className="h2-bold text-[#202020]">Article Blog</h2>
        ) : currentPath.includes("/articles/new") ? (
          <h2 className="h2-bold text-[#202020]">Create New Article</h2>
        ) : currentPath.includes("/report") ? (
          <h2 className="h2-bold text-[#202020]">Reporting</h2>
        ) : currentPath.includes("/support") ? (
          currentPath === "/support/ticket" ? (
            <h2 className="h2-bold text-[#202020]">Support</h2>
          ) : currentPath === "/support/ticket/create" ? (
            <h2 className="h2-bold text-[#202020]">Create New Ticket</h2>
          ) : currentPath === "/support/ticket/view" ? (
            <h2 className="h2-bold text-[#202020]">Ticket Information</h2>
          ) : (
            <h2 className="h2-bold text-[#202020]">Ticketing Support</h2>
          )
        ) : currentPath.includes("/review") ? (
          <h2 className="h2-bold text-[#202020]">Review & Rating</h2>
        ) : currentPath === "/settings/payments" ? (
          <h2 className="h2-bold text-[#202020]">Payments</h2>
        ) : currentPath === "/settings/profile" ? (
          <h2 className="h2-bold text-[#202020]">Profile</h2>
        ) : currentPath.includes("/staff") ? (
          currentPath === "/staff/details" ? (
            <h2 className="h2-bold text-[#202020]">Staff Details</h2>
          ) : currentPath === "/staff/attendance" ? (
            <h2 className="h2-bold text-[#202020]">Staff Attendance</h2>
          ) : currentPath === "/staff/shifts" ? (
            <h2 className="h2-bold text-[#202020]">Shifts</h2>
          ) : currentPath === "/staff/leave" ? (
            <h2 className="h2-bold text-[#202020]">Leaves</h2>
          ) : currentPath === "/staff/salaries" ? (
            <h2 className="h2-bold text-[#202020]">Salaries</h2>
          ) : currentPath === "/staff/salaries-history" ? (
            <h2 className="h2-bold text-[#202020]">Salaries History</h2>
          ) : currentPath.includes("/staff/profile") ? (
            <h2 className="h2-bold text-[#202020]">Staff Profile</h2>
          ) : (
            <h2 className="h2-bold text-[#202020]">
              Saud International School Staff
            </h2>
          )
        ) : (
          <h2 className="h2-bold text-[#202020]">Saud International School</h2>
        )}
      </div>
    </div>
  );
}

export default SchoolTitle;
