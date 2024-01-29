import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventDetailsModal from "./EventDetailsModal";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Meeting 1",
    start: new Date(2024, 0, 1, 10, 0),
    end: new Date(2024, 0, 1, 12, 0),
  },
  // Add more events as needed
];

function CalendarContent() {
  const handleNavigate = (newDate, view, action) => {
    // Disable the default behavior for navigating to today's date
    if (action === "TODAY") {
      return;
    }

    // Perform your custom navigation logic here
    // ...

    // Call the default onNavigate function
    // You can choose to omit this if you want to completely override the default behavior
    localizer.navigate(newDate, view, action);
  };
  return (
    <>
      <div className=" h-screen w-full">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%", width: "100%" }}
          toolbar={false} // Disable navigation buttons
          formats={{
            weekdayFormat: (date, culture, localizer) =>
              localizer.format(date, "dddd", culture), // Display full day names
          }}
          onNavigate={handleNavigate}
        />
      </div>
      <div className="flex py-[18px] justify-center flex-col items-center gap-5 self-stretch rounded-[10px] bg-[#FFF]">
        {/* Title */}
        <div
          className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-5 lg:gap-0 self-stretch"
          style={{
            padding: "0px 30px 20px 30px",
            borderBottom: "1px solid #EBEBEB",
          }}
        >
          <div className="flex flex-col items-start gap-[5px]">
            <h5 className="h5-bold text-[#202020]">Scheduled Events</h5>
            <p className="label-reg text-[#595959]">November 2023</p>
          </div>
          <button className="white-btn">View All Events</button>
        </div>
        {/* Events */}
        <div className="flex flex-col items-start px-[30px] gap-5 lg:grid grid-cols-4 grid-rows-2 self-stretch">
          <EventDetailsModal />
          <div
            className="flex min-w-[250px] py-[5px] items-start gap-2.5"
            style={{ flex: "1 0 0" }}
          >
            <div
              className="flex pl-5 flex-col items-start gap-3"
              style={{ flex: "1 0 0", borderLeft: "3px solid #E328AF" }}
            >
              <div className="flex items-start gap-2.5">
                <div
                  className="flex w-[35px] h-[35px] items-center justify-center gap-2.5 rounded-md"
                  style={{ background: "rgba(227, 40, 175, 0.10)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M14.7502 4.73437H14.0002V3.23437C14.0002 3.03546 13.9211 2.8447 13.7805 2.70404C13.6398 2.56339 13.4491 2.48438 13.2502 2.48438C13.0512 2.48438 12.8605 2.56339 12.7198 2.70404C12.5792 2.8447 12.5002 3.03546 12.5002 3.23437V4.73437H6.50015V3.23437C6.50015 3.03546 6.42113 2.8447 6.28048 2.70404C6.13983 2.56339 5.94906 2.48438 5.75015 2.48438C5.55124 2.48438 5.36047 2.56339 5.21982 2.70404C5.07917 2.8447 5.00015 3.03546 5.00015 3.23437V4.73437H4.25015C3.65342 4.73437 3.08112 4.97143 2.65916 5.39338C2.23721 5.81534 2.00015 6.38764 2.00015 6.98437V7.73437H17.0002V6.98437C17.0002 6.38764 16.7631 5.81534 16.3411 5.39338C15.9192 4.97143 15.3469 4.73437 14.7502 4.73437Z"
                      fill="#E328AF"
                    />
                    <path
                      d="M2.00015 15.2344C2.00015 15.8311 2.23721 16.4034 2.65916 16.8254C3.08112 17.2473 3.65342 17.4844 4.25015 17.4844H14.7502C15.3469 17.4844 15.9192 17.2473 16.3411 16.8254C16.7631 16.4034 17.0002 15.8311 17.0002 15.2344V9.23438H2.00015V15.2344Z"
                      fill="#E328AF"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-[3px]">
                  <p className="label-bold text-[#202020]">Event 2</p>
                  <p className="label-reg text-[#878787]">2 November 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex min-w-[250px] py-[5px] items-start gap-2.5"
            style={{ flex: "1 0 0" }}
          >
            <div
              className="flex pl-5 flex-col items-start gap-3"
              style={{ flex: "1 0 0", borderLeft: "3px solid #00CCB6" }}
            >
              <div className="flex items-start gap-2.5">
                <div
                  className="flex w-[35px] h-[35px] items-center justify-center gap-2.5 rounded-md"
                  style={{ background: "rgba(0, 204, 182, 0.10)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M14.7502 4.73437H14.0002V3.23437C14.0002 3.03546 13.9211 2.8447 13.7805 2.70404C13.6398 2.56339 13.4491 2.48438 13.2502 2.48438C13.0512 2.48438 12.8605 2.56339 12.7198 2.70404C12.5792 2.8447 12.5002 3.03546 12.5002 3.23437V4.73437H6.50015V3.23437C6.50015 3.03546 6.42113 2.8447 6.28048 2.70404C6.13983 2.56339 5.94906 2.48438 5.75015 2.48438C5.55124 2.48438 5.36047 2.56339 5.21982 2.70404C5.07917 2.8447 5.00015 3.03546 5.00015 3.23437V4.73437H4.25015C3.65342 4.73437 3.08112 4.97143 2.65916 5.39338C2.23721 5.81534 2.00015 6.38764 2.00015 6.98437V7.73437H17.0002V6.98437C17.0002 6.38764 16.7631 5.81534 16.3411 5.39338C15.9192 4.97143 15.3469 4.73437 14.7502 4.73437Z"
                      fill="#00CCB6"
                    />
                    <path
                      d="M2.00015 15.2344C2.00015 15.8311 2.23721 16.4034 2.65916 16.8254C3.08112 17.2473 3.65342 17.4844 4.25015 17.4844H14.7502C15.3469 17.4844 15.9192 17.2473 16.3411 16.8254C16.7631 16.4034 17.0002 15.8311 17.0002 15.2344V9.23438H2.00015V15.2344Z"
                      fill="#00CCB6"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-[3px]">
                  <p className="label-bold text-[#202020]">Event 3</p>
                  <p className="label-reg text-[#878787]">2 November 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex min-w-[250px] py-[5px] items-start gap-2.5"
            style={{ flex: "1 0 0" }}
          >
            <div
              className="flex pl-5 flex-col items-start gap-3"
              style={{ flex: "1 0 0", borderLeft: "3px solid #5ECFFF" }}
            >
              <div className="flex items-start gap-2.5">
                <div
                  className="flex w-[35px] h-[35px] items-center justify-center gap-2.5 rounded-md"
                  style={{ background: "rgba(94, 207, 255, 0.10)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M14.7502 4.73437H14.0002V3.23437C14.0002 3.03546 13.9211 2.8447 13.7805 2.70404C13.6398 2.56339 13.4491 2.48438 13.2502 2.48438C13.0512 2.48438 12.8605 2.56339 12.7198 2.70404C12.5792 2.8447 12.5002 3.03546 12.5002 3.23437V4.73437H6.50015V3.23437C6.50015 3.03546 6.42113 2.8447 6.28048 2.70404C6.13983 2.56339 5.94906 2.48438 5.75015 2.48438C5.55124 2.48438 5.36047 2.56339 5.21982 2.70404C5.07917 2.8447 5.00015 3.03546 5.00015 3.23437V4.73437H4.25015C3.65342 4.73437 3.08112 4.97143 2.65916 5.39338C2.23721 5.81534 2.00015 6.38764 2.00015 6.98437V7.73437H17.0002V6.98437C17.0002 6.38764 16.7631 5.81534 16.3411 5.39338C15.9192 4.97143 15.3469 4.73437 14.7502 4.73437Z"
                      fill="#5ECFFF"
                    />
                    <path
                      d="M2.00015 15.2344C2.00015 15.8311 2.23721 16.4034 2.65916 16.8254C3.08112 17.2473 3.65342 17.4844 4.25015 17.4844H14.7502C15.3469 17.4844 15.9192 17.2473 16.3411 16.8254C16.7631 16.4034 17.0002 15.8311 17.0002 15.2344V9.23438H2.00015V15.2344Z"
                      fill="#5ECFFF"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-[3px]">
                  <p className="label-bold text-[#202020]">Event 4</p>
                  <p className="label-reg text-[#878787]">2 November 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex min-w-[250px] py-[5px] items-start gap-2.5"
            style={{ flex: "1 0 0" }}
          >
            <div
              className="flex pl-5 flex-col items-start gap-3"
              style={{ flex: "1 0 0", borderLeft: "3px solid #FF4A55" }}
            >
              <div className="flex items-start gap-2.5">
                <div
                  className="flex w-[35px] h-[35px] items-center justify-center gap-2.5 rounded-md"
                  style={{ background: "rgba(255, 74, 85, 0.10)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M14.7502 4.73437H14.0002V3.23437C14.0002 3.03546 13.9211 2.8447 13.7805 2.70404C13.6398 2.56339 13.4491 2.48438 13.2502 2.48438C13.0512 2.48438 12.8605 2.56339 12.7198 2.70404C12.5792 2.8447 12.5002 3.03546 12.5002 3.23437V4.73437H6.50015V3.23437C6.50015 3.03546 6.42113 2.8447 6.28048 2.70404C6.13983 2.56339 5.94906 2.48438 5.75015 2.48438C5.55124 2.48438 5.36047 2.56339 5.21982 2.70404C5.07917 2.8447 5.00015 3.03546 5.00015 3.23437V4.73437H4.25015C3.65342 4.73437 3.08112 4.97143 2.65916 5.39338C2.23721 5.81534 2.00015 6.38764 2.00015 6.98437V7.73437H17.0002V6.98437C17.0002 6.38764 16.7631 5.81534 16.3411 5.39338C15.9192 4.97143 15.3469 4.73437 14.7502 4.73437Z"
                      fill="#FF4A55"
                    />
                    <path
                      d="M2.00015 15.2344C2.00015 15.8311 2.23721 16.4034 2.65916 16.8254C3.08112 17.2473 3.65342 17.4844 4.25015 17.4844H14.7502C15.3469 17.4844 15.9192 17.2473 16.3411 16.8254C16.7631 16.4034 17.0002 15.8311 17.0002 15.2344V9.23438H2.00015V15.2344Z"
                      fill="#FF4A55"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-[3px]">
                  <p className="label-bold text-[#202020]">Event 5</p>
                  <p className="label-reg text-[#878787]">2 November 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex min-w-[250px] py-[5px] items-start gap-2.5"
            style={{ flex: "1 0 0" }}
          >
            <div
              className="flex pl-5 flex-col items-start gap-3"
              style={{ flex: "1 0 0", borderLeft: "3px solid #FFAB2D" }}
            >
              <div className="flex items-start gap-2.5">
                <div
                  className="flex w-[35px] h-[35px] items-center justify-center gap-2.5 rounded-md"
                  style={{ background: "rgba(255, 171, 45, 0.10)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M14.7502 4.73437H14.0002V3.23437C14.0002 3.03546 13.9211 2.8447 13.7805 2.70404C13.6398 2.56339 13.4491 2.48438 13.2502 2.48438C13.0512 2.48438 12.8605 2.56339 12.7198 2.70404C12.5792 2.8447 12.5002 3.03546 12.5002 3.23437V4.73437H6.50015V3.23437C6.50015 3.03546 6.42113 2.8447 6.28048 2.70404C6.13983 2.56339 5.94906 2.48438 5.75015 2.48438C5.55124 2.48438 5.36047 2.56339 5.21982 2.70404C5.07917 2.8447 5.00015 3.03546 5.00015 3.23437V4.73437H4.25015C3.65342 4.73437 3.08112 4.97143 2.65916 5.39338C2.23721 5.81534 2.00015 6.38764 2.00015 6.98437V7.73437H17.0002V6.98437C17.0002 6.38764 16.7631 5.81534 16.3411 5.39338C15.9192 4.97143 15.3469 4.73437 14.7502 4.73437Z"
                      fill="#FFAB2D"
                    />
                    <path
                      d="M2.00015 15.2344C2.00015 15.8311 2.23721 16.4034 2.65916 16.8254C3.08112 17.2473 3.65342 17.4844 4.25015 17.4844H14.7502C15.3469 17.4844 15.9192 17.2473 16.3411 16.8254C16.7631 16.4034 17.0002 15.8311 17.0002 15.2344V9.23438H2.00015V15.2344Z"
                      fill="#FFAB2D"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-[3px]">
                  <p className="label-bold text-[#202020]">Event 6</p>
                  <p className="label-reg text-[#878787]">2 November 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex min-w-[250px] py-[5px] items-start gap-2.5"
            style={{ flex: "1 0 0" }}
          >
            <div
              className="flex pl-5 flex-col items-start gap-3"
              style={{ flex: "1 0 0", borderLeft: "3px solid #FFAB2D" }}
            >
              <div className="flex items-start gap-2.5">
                <div
                  className="flex w-[35px] h-[35px] items-center justify-center gap-2.5 rounded-md"
                  style={{ background: "rgba(255, 171, 45, 0.10)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M14.7502 4.73437H14.0002V3.23437C14.0002 3.03546 13.9211 2.8447 13.7805 2.70404C13.6398 2.56339 13.4491 2.48438 13.2502 2.48438C13.0512 2.48438 12.8605 2.56339 12.7198 2.70404C12.5792 2.8447 12.5002 3.03546 12.5002 3.23437V4.73437H6.50015V3.23437C6.50015 3.03546 6.42113 2.8447 6.28048 2.70404C6.13983 2.56339 5.94906 2.48438 5.75015 2.48438C5.55124 2.48438 5.36047 2.56339 5.21982 2.70404C5.07917 2.8447 5.00015 3.03546 5.00015 3.23437V4.73437H4.25015C3.65342 4.73437 3.08112 4.97143 2.65916 5.39338C2.23721 5.81534 2.00015 6.38764 2.00015 6.98437V7.73437H17.0002V6.98437C17.0002 6.38764 16.7631 5.81534 16.3411 5.39338C15.9192 4.97143 15.3469 4.73437 14.7502 4.73437Z"
                      fill="#FFAB2D"
                    />
                    <path
                      d="M2.00015 15.2344C2.00015 15.8311 2.23721 16.4034 2.65916 16.8254C3.08112 17.2473 3.65342 17.4844 4.25015 17.4844H14.7502C15.3469 17.4844 15.9192 17.2473 16.3411 16.8254C16.7631 16.4034 17.0002 15.8311 17.0002 15.2344V9.23438H2.00015V15.2344Z"
                      fill="#FFAB2D"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-[3px]">
                  <p className="label-bold text-[#202020]">Event 7</p>
                  <p className="label-reg text-[#878787]">2 November 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex min-w-[250px] py-[5px] items-start gap-2.5"
            style={{ flex: "1 0 0" }}
          >
            <div
              className="flex pl-5 flex-col items-start gap-3"
              style={{ flex: "1 0 0", borderLeft: "3px solid #FFAB2D" }}
            >
              <div className="flex items-start gap-2.5">
                <div
                  className="flex w-[35px] h-[35px] items-center justify-center gap-2.5 rounded-md"
                  style={{ background: "rgba(255, 171, 45, 0.10)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M14.7502 4.73437H14.0002V3.23437C14.0002 3.03546 13.9211 2.8447 13.7805 2.70404C13.6398 2.56339 13.4491 2.48438 13.2502 2.48438C13.0512 2.48438 12.8605 2.56339 12.7198 2.70404C12.5792 2.8447 12.5002 3.03546 12.5002 3.23437V4.73437H6.50015V3.23437C6.50015 3.03546 6.42113 2.8447 6.28048 2.70404C6.13983 2.56339 5.94906 2.48438 5.75015 2.48438C5.55124 2.48438 5.36047 2.56339 5.21982 2.70404C5.07917 2.8447 5.00015 3.03546 5.00015 3.23437V4.73437H4.25015C3.65342 4.73437 3.08112 4.97143 2.65916 5.39338C2.23721 5.81534 2.00015 6.38764 2.00015 6.98437V7.73437H17.0002V6.98437C17.0002 6.38764 16.7631 5.81534 16.3411 5.39338C15.9192 4.97143 15.3469 4.73437 14.7502 4.73437Z"
                      fill="#FFAB2D"
                    />
                    <path
                      d="M2.00015 15.2344C2.00015 15.8311 2.23721 16.4034 2.65916 16.8254C3.08112 17.2473 3.65342 17.4844 4.25015 17.4844H14.7502C15.3469 17.4844 15.9192 17.2473 16.3411 16.8254C16.7631 16.4034 17.0002 15.8311 17.0002 15.2344V9.23438H2.00015V15.2344Z"
                      fill="#FFAB2D"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-[3px]">
                  <p className="label-bold text-[#202020]">Event 8</p>
                  <p className="label-reg text-[#878787]">2 November 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalendarContent;
