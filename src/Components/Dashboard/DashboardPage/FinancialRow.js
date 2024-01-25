import { useState } from "react";
import { Transition } from "@headlessui/react";

function FinancialRow() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full p-5 flex-col justify-center items-start gap-[30px] rounded-[10px] bg-[#FFF] self-stretch lg:self-auto">
      <div className="flex items-start gap-[30px] self-stretch">
        <div
          className="flex flex-col justify-center items-start gap-[30px] lg:gap-5"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex lg:pb-5 flex-col lg:flex-row lg:justify-between items-start gap-5 lg:gap-0 self-stretch lg:border-b lg:border-b-[#DCDCDC]">
            <div className="flex flex-col items-start gap-2.5 lg:gap-0 self-stretch lg:self-auto">
              <h5 className="h5-bold text-[#202020]">Overview</h5>
              <p className="p-reg text-[#878787] text-left">
                Lorem Ipsum has been the industry's standard dummy text ever.
              </p>
            </div>
            {/* Dropdown */}
            <div className="relative lg:hidden inline-block text-left self-stretch">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="flex justify-between items-start self-stretch w-full focus:outline-none"
              >
                <div
                  className="flex justify-between items-center border border-[#DCDCDC] rounded-lg bg-white py-2.5 px-5 h-[60px]"
                  style={{ flex: "1 0 0" }}
                >
                  {/* text */}
                  <h5 className="h5-semi text-[#383838]">This Month</h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M2.97137 5.01254C2.78154 5.01704 2.59711 5.06945 2.43971 5.16373C2.28231 5.258 2.15848 5.3902 2.08277 5.54475C2.00705 5.69931 1.98259 5.86985 2.01225 6.03631C2.04192 6.20277 2.12448 6.35828 2.25024 6.48455L8.23174 12.6893C8.32543 12.7867 8.44182 12.8649 8.57288 12.9186C8.70393 12.9722 8.84655 13 8.99088 13C9.1352 13 9.27782 12.9722 9.40888 12.9186C9.53993 12.8649 9.65632 12.7867 9.75001 12.6893L15.7374 6.48455C15.828 6.39691 15.8978 6.29397 15.9426 6.18187C15.9874 6.06978 16.0063 5.95083 15.9982 5.83211C15.9901 5.71339 15.9551 5.59728 15.8953 5.49082C15.8356 5.38435 15.7523 5.28973 15.6504 5.21245C15.5486 5.13517 15.4302 5.07684 15.3024 5.04104C15.1746 5.00524 15.04 4.99269 14.9066 5.00406C14.7732 5.01543 14.6437 5.0505 14.526 5.10724C14.4082 5.16397 14.3045 5.24114 14.221 5.33422L8.9899 10.7536L3.76072 5.33422C3.66496 5.23127 3.54423 5.14895 3.40754 5.09324C3.27085 5.03754 3.12175 5.0099 2.97137 5.01254Z"
                      fill="#00CCB6"
                    />
                  </svg>
                </div>
              </button>

              <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {(ref) => (
                  <div
                    ref={ref}
                    className="absolute self-stretch w-full right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg"
                  >
                    {/* Dropdown content goes here */}
                    <div className="py-1 self-stretch w-full">
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        This Month
                      </span>
                    </div>
                  </div>
                )}
              </Transition>
            </div>
            <div
              className="hidden lg:flex max-w-[132px] justify-center items-center border border-[#DCDCDC] bg-[#FFF] py-[10px] px-[20px] gap-[11px]"
              style={{ flex: "1 0 0", borderRadius: "10px" }}
            >
              <select
                id=""
                className="text-[#383838] cursor-pointer label-reg w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                defaultValue={"This Month"}
              >
                <option value="This Month">This Month</option>
                {/* <option value="PM">PM</option> */}
              </select>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-[5px] lg:gap-[30px] self-stretch">
            {/* cards */}
            <div
              className="flex py-[15px] px-[5px] items-center gap-5 bg-[#FFF] self-stretch lg:self-auto"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex flex-col items-start gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <div className="flex flex-col items-start">
                  <h2 className="h2-bold text-[#383838]">SAR 3,520</h2>
                  <p className="p-reg text-[#646464]">Total Invoices (12)</p>
                </div>
                <div className="flex items-center gap-[5px] self-stretch">
                  <p className="label-bold !text-[13px] text-[#00CCB6]">
                    +0,5%
                  </p>
                  <p className="label-reg text-[#A4A4A4]">than last month</p>
                </div>
              </div>
              <div
                className="flex w-[55px] h-[55px] justify-center items-center gap-2.5 rounded-[5px]"
                style={{ background: "rgba(0, 204, 182, 0.20)" }}
              >
                <div
                  className="flex w-[36px] h-[36px] justify-center items-center shrink-0"
                  style={{
                    padding: " 5.143px 3.857px 4.596px 3.857px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="27"
                    viewBox="0 0 29 27"
                    fill="none"
                  >
                    <path
                      d="M26.6225 11.2553H2.37759C1.8419 11.2548 1.32832 11.0417 0.949532 10.663C0.570748 10.2842 0.357713 9.77059 0.357178 9.2349V2.16347C0.357713 1.62779 0.570748 1.11421 0.949532 0.735421C1.32832 0.356637 1.8419 0.143601 2.37759 0.143066H26.6225C27.1582 0.143601 27.6718 0.356637 28.0505 0.735421C28.4293 1.11421 28.6424 1.62779 28.6429 2.16347V9.2349C28.6424 9.77059 28.4293 10.2842 28.0505 10.663C27.6718 11.0417 27.1582 11.2548 26.6225 11.2553ZM2.37759 2.16347V9.2349H26.624L26.6225 2.16347H2.37759Z"
                      fill="#00CCB6"
                    />
                    <path
                      d="M22.522 0.147461L6.47761 0.148946C5.89476 0.183494 5.34917 0.446939 4.95966 0.881903C4.57015 1.31687 4.36828 1.88812 4.39802 2.47123V23.5035C4.38594 23.947 4.50036 24.3847 4.72791 24.7656C4.95547 25.1464 5.28674 25.4546 5.683 25.6541C6.01637 25.811 6.38847 25.8664 6.75308 25.8136C7.1177 25.7608 7.45878 25.6021 7.73399 25.3572C7.82382 25.2614 7.93301 25.1859 8.05429 25.1357C8.17557 25.0854 8.30617 25.0615 8.43739 25.0657C8.81227 25.0657 8.95038 25.1875 9.28333 25.4815C9.56714 25.7734 9.9066 26.0054 10.2816 26.1638C10.6567 26.3223 11.0596 26.4039 11.4668 26.4039C11.8739 26.4039 12.2769 26.3223 12.6519 26.1638C13.0269 26.0054 13.3664 25.7734 13.6502 25.4815C13.9831 25.1875 14.1208 25.0657 14.4952 25.0657C14.871 25.0657 15.0091 25.1875 15.3421 25.482C15.6262 25.7737 15.9658 26.0056 16.341 26.164C16.7162 26.3223 17.1193 26.4039 17.5265 26.4039C17.9337 26.4039 18.3368 26.3223 18.712 26.164C19.0872 26.0056 19.4268 25.7737 19.7109 25.482C20.0449 25.1875 20.1825 25.0657 20.5588 25.0657C20.691 25.0617 20.8226 25.0859 20.9447 25.1367C21.0668 25.1874 21.1768 25.2636 21.2672 25.3601C21.5423 25.605 21.8832 25.7635 22.2477 25.8162C22.6122 25.8688 22.9841 25.8131 23.3172 25.6561C23.7135 25.4567 24.0447 25.1485 24.2723 24.7676C24.4998 24.3867 24.6142 23.949 24.6021 23.5055V2.46975C24.6317 1.88658 24.4298 1.31531 24.0402 0.880359C23.6506 0.445404 23.1049 0.181985 22.522 0.147461ZM9.94033 18.5281C9.7007 18.5282 9.46644 18.4571 9.26718 18.324C9.06793 18.1909 8.91262 18.0017 8.8209 17.7803C8.72917 17.5589 8.70516 17.3153 8.75189 17.0803C8.79862 16.8452 8.914 16.6293 9.08343 16.4599C9.25286 16.2904 9.46874 16.175 9.70377 16.1283C9.93879 16.0815 10.1824 16.1055 10.4038 16.1972C10.6252 16.2889 10.8144 16.4441 10.9476 16.6434C11.0807 16.8426 11.1518 17.0769 11.1518 17.3165C11.1518 17.4756 11.1205 17.6331 11.0596 17.7801C10.9987 17.9271 10.9095 18.0607 10.797 18.1732C10.6845 18.2857 10.5509 18.3749 10.404 18.4358C10.257 18.4967 10.0994 18.5281 9.94033 18.5281ZM9.94033 13.4779C9.70071 13.4779 9.46646 13.4069 9.26721 13.2738C9.06796 13.1407 8.91266 12.9514 8.82094 12.7301C8.72923 12.5087 8.70522 12.2651 8.75196 12.0301C8.79869 11.795 8.91407 11.5792 9.0835 11.4097C9.25293 11.2403 9.46881 11.1249 9.70383 11.0781C9.93884 11.0313 10.1824 11.0553 10.4038 11.147C10.6252 11.2387 10.8144 11.394 10.9476 11.5932C11.0807 11.7925 11.1518 12.0267 11.1518 12.2663C11.1518 12.4254 11.1205 12.583 11.0596 12.73C10.9987 12.8769 10.9095 13.0105 10.797 13.123C10.6845 13.2355 10.5509 13.3247 10.404 13.3856C10.257 13.4465 10.0994 13.4779 9.94033 13.4779ZM9.94033 8.42688C9.70071 8.4269 9.46646 8.35586 9.26721 8.22275C9.06796 8.08963 8.91266 7.90042 8.82094 7.67904C8.72923 7.45767 8.70522 7.21406 8.75196 6.97904C8.79869 6.74402 8.91407 6.52813 9.0835 6.35868C9.25293 6.18924 9.46881 6.07383 9.70383 6.02708C9.93884 5.98032 10.1824 6.0043 10.4038 6.09599C10.6252 6.18768 10.8144 6.34297 10.9476 6.5422C11.0807 6.74144 11.1518 6.97568 11.1518 7.2153C11.1518 7.3744 11.1205 7.53194 11.0596 7.67893C10.9987 7.82592 10.9095 7.95948 10.797 8.07198C10.6845 8.18448 10.5509 8.27372 10.404 8.33461C10.257 8.39549 10.0994 8.42688 9.94033 8.42688ZM19.261 18.3257H13.1998C12.9319 18.3257 12.6749 18.2193 12.4855 18.0298C12.296 17.8404 12.1896 17.5834 12.1896 17.3155C12.1896 17.0476 12.296 16.7906 12.4855 16.6012C12.6749 16.4117 12.9319 16.3053 13.1998 16.3053H19.261C19.529 16.3053 19.7859 16.4117 19.9754 16.6012C20.1648 16.7906 20.2712 17.0476 20.2712 17.3155C20.2712 17.5834 20.1648 17.8404 19.9754 18.0298C19.7859 18.2193 19.529 18.3257 19.261 18.3257ZM19.261 13.2757H13.1998C12.9319 13.2757 12.6749 13.1692 12.4855 12.9798C12.296 12.7903 12.1896 12.5334 12.1896 12.2655C12.1896 11.9976 12.296 11.7406 12.4855 11.5512C12.6749 11.3617 12.9319 11.2553 13.1998 11.2553H19.261C19.529 11.2553 19.7859 11.3617 19.9754 11.5512C20.1648 11.7406 20.2712 11.9976 20.2712 12.2655C20.2712 12.5334 20.1648 12.7903 19.9754 12.9798C19.7859 13.1692 19.529 13.2757 19.261 13.2757ZM19.261 8.22466H13.1998C12.9319 8.22466 12.6749 8.11823 12.4855 7.92878C12.296 7.73933 12.1896 7.48238 12.1896 7.21446C12.1896 6.94653 12.296 6.68958 12.4855 6.50013C12.6749 6.31068 12.9319 6.20425 13.1998 6.20425H19.261C19.529 6.20425 19.7859 6.31068 19.9754 6.50013C20.1648 6.68958 20.2712 6.94653 20.2712 7.21446C20.2712 7.48238 20.1648 7.73933 19.9754 7.92878C19.7859 8.11823 19.529 8.22466 19.261 8.22466Z"
                      fill="#00CCB6"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <span className="lg:w-[1px] w-[289px] lg:h-[112px] h-[1px] bg-[#DCDCDC]"></span>
            <div
              className="flex py-[15px] px-[5px] items-center gap-5 bg-[#FFF] self-stretch lg:self-auto"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex flex-col items-start gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <div className="flex flex-col items-start">
                  <h2 className="h2-bold text-[#383838]">SAR 2,020</h2>
                  <p className="p-reg text-[#646464]">Paid Invoices (8)</p>
                </div>
                <div className="flex items-center gap-[5px] self-stretch">
                  <p className="label-bold !text-[13px] text-[#FF4A55]">
                    -0,3%
                  </p>
                  <p className="label-reg text-[#A4A4A4]">than last month</p>
                </div>
              </div>
              <div
                className="flex w-[55px] h-[55px] justify-center items-center gap-2.5 rounded-[5px]"
                style={{ background: "rgba(151, 71, 255, 0.20)" }}
              >
                <div
                  className="flex w-[36px] h-[36px] justify-center items-center shrink-0"
                  style={{
                    padding: " 5.143px 3.857px 4.596px 3.857px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                  >
                    <path
                      d="M21.3796 1.62468C21.0276 1.44094 20.6314 1.35875 20.2353 1.3873C19.8393 1.41584 19.459 1.554 19.1369 1.78631C18.8705 1.99708 18.5369 2.10468 18.1975 2.08937C17.7957 2.09389 17.408 1.9417 17.1165 1.66509C16.4705 1.14222 15.6646 0.856943 14.8335 0.856943C14.0024 0.856943 13.1964 1.14222 12.5504 1.66509C12.2545 1.93789 11.8668 2.08935 11.4644 2.08935C11.0619 2.08935 10.6742 1.93789 10.3783 1.66509C9.73427 1.14228 8.92998 0.856934 8.10044 0.856934C7.2709 0.856934 6.46661 1.14228 5.82255 1.66509C5.52816 1.9435 5.13659 2.09577 4.73145 2.08937C4.3981 2.10508 4.07068 1.99716 3.812 1.78631C3.48811 1.55323 3.10542 1.41551 2.70727 1.38872C2.30913 1.36194 1.91144 1.44718 1.55925 1.63478C1.19571 1.82177 0.890993 2.10571 0.678839 2.45517C0.466685 2.80462 0.355365 3.20597 0.3572 3.61478V24.8998C0.356071 25.486 0.587079 26.0489 0.999731 26.4654C1.41238 26.8818 1.97312 27.118 2.55937 27.1222H16.0356C15.0334 25.8154 14.4934 24.213 14.5 22.5662C14.5008 20.557 15.2992 18.6303 16.7199 17.2096C18.1407 15.7888 20.0674 14.9904 22.0766 14.9897C22.2454 14.9897 22.4141 14.9998 22.5817 15.02V3.60468C22.5822 3.19613 22.4703 2.79532 22.2583 2.44609C22.0463 2.09687 21.7423 1.8127 21.3796 1.62468ZM6.01444 20.4448C5.77468 20.4448 5.5403 20.3737 5.34095 20.2405C5.1416 20.1073 4.98622 19.9179 4.89447 19.6964C4.80272 19.4749 4.77871 19.2312 4.82549 18.996C4.87226 18.7609 4.98772 18.5449 5.15725 18.3753C5.32679 18.2058 5.54279 18.0903 5.77794 18.0436C6.01309 17.9968 6.25684 18.0208 6.47834 18.1126C6.69985 18.2043 6.88918 18.3597 7.02238 18.559C7.15558 18.7584 7.22668 18.9928 7.22668 19.2325C7.22706 19.3918 7.19595 19.5496 7.13517 19.6969C7.07438 19.8441 6.9851 19.9779 6.87246 20.0905C6.75981 20.2032 6.62603 20.2925 6.47878 20.3533C6.33154 20.414 6.17374 20.4451 6.01444 20.4448ZM6.01444 15.3938C5.77468 15.3938 5.5403 15.3227 5.34095 15.1895C5.1416 15.0562 4.98622 14.8669 4.89447 14.6454C4.80272 14.4239 4.77871 14.1802 4.82549 13.945C4.87226 13.7099 4.98772 13.4939 5.15725 13.3243C5.32679 13.1548 5.54279 13.0393 5.77794 12.9926C6.01309 12.9458 6.25684 12.9698 6.47834 13.0615C6.69985 13.1533 6.88918 13.3087 7.02238 13.508C7.15558 13.7074 7.22668 13.9417 7.22668 14.1815C7.22706 14.3408 7.19595 14.4986 7.13517 14.6459C7.07438 14.7931 6.9851 14.9269 6.87246 15.0395C6.75981 15.1522 6.62603 15.2414 6.47878 15.3022C6.33154 15.363 6.17374 15.3941 6.01444 15.3938ZM6.01444 10.1407C5.77568 10.1397 5.54258 10.0679 5.34462 9.93444C5.14666 9.80096 4.99272 9.61177 4.90227 9.39081C4.81183 9.16984 4.78894 8.92702 4.8365 8.69305C4.88406 8.45907 4.99993 8.24445 5.16947 8.07633C5.339 7.90821 5.55458 7.79414 5.78894 7.74854C6.02331 7.70294 6.26593 7.72786 6.48613 7.82015C6.70633 7.91244 6.89422 8.06796 7.02604 8.26703C7.15785 8.4661 7.22768 8.69979 7.22668 8.93855C7.22532 9.25871 7.09684 9.56522 6.86951 9.79066C6.64217 10.0161 6.3346 10.142 6.01444 10.1407ZM12.4796 20.2427H9.65107C9.38315 20.2427 9.1262 20.1363 8.93675 19.9468C8.7473 19.7574 8.64087 19.5004 8.64087 19.2325C8.64087 18.9646 8.7473 18.7077 8.93675 18.5182C9.1262 18.3288 9.38315 18.2223 9.65107 18.2223H12.4796C12.7476 18.2223 13.0045 18.3288 13.194 18.5182C13.3834 18.7077 13.4898 18.9646 13.4898 19.2325C13.4898 19.5004 13.3834 19.7574 13.194 19.9468C13.0045 20.1363 12.7476 20.2427 12.4796 20.2427ZM17.1267 15.1917H9.65107C9.38315 15.1917 9.1262 15.0853 8.93675 14.8958C8.7473 14.7064 8.64087 14.4494 8.64087 14.1815C8.64087 13.9136 8.7473 13.6566 8.93675 13.4672C9.1262 13.2777 9.38315 13.1713 9.65107 13.1713H17.1267C17.3946 13.1713 17.6515 13.2777 17.841 13.4672C18.0304 13.6566 18.1369 13.9136 18.1369 14.1815C18.1369 14.4494 18.0304 14.7064 17.841 14.8958C17.6515 15.0853 17.3946 15.1917 17.1267 15.1917ZM17.1267 9.94876H9.65107C9.38315 9.94876 9.1262 9.84232 8.93675 9.65287C8.7473 9.46342 8.64087 9.20647 8.64087 8.93855C8.64087 8.67063 8.7473 8.41368 8.93675 8.22423C9.1262 8.03478 9.38315 7.92835 9.65107 7.92835H17.1267C17.3946 7.92835 17.6515 8.03478 17.841 8.22423C18.0304 8.41368 18.1369 8.67063 18.1369 8.93855C18.1369 9.20647 18.0304 9.46342 17.841 9.65287C17.6515 9.84232 17.3946 9.94876 17.1267 9.94876Z"
                      fill="#6418C3"
                    />
                    <path
                      d="M22.0766 16C20.7779 16 19.5084 16.3851 18.4285 17.1066C17.3487 17.8281 16.5071 18.8537 16.0101 20.0535C15.5131 21.2533 15.3831 22.5736 15.6364 23.8473C15.8898 25.1211 16.5152 26.2911 17.4335 27.2094C18.3518 28.1277 19.5218 28.7531 20.7956 29.0065C22.0693 29.2598 23.3896 29.1298 24.5894 28.6328C25.7892 28.1358 26.8148 27.2942 27.5363 26.2144C28.2578 25.1345 28.6429 23.865 28.6429 22.5663C28.6409 20.8254 27.9484 19.1564 26.7174 17.9255C25.4865 16.6945 23.8175 16.002 22.0766 16ZM24.8112 21.9335L22.1175 24.6277C22.0237 24.7215 21.9124 24.7959 21.7898 24.8467C21.6673 24.8975 21.5359 24.9236 21.4032 24.9236C21.2706 24.9236 21.1392 24.8975 21.0167 24.8467C20.8941 24.7959 20.7828 24.7215 20.689 24.6277L19.342 23.2805C19.1554 23.0905 19.0514 22.8345 19.0526 22.5682C19.0538 22.3019 19.1601 22.0469 19.3484 21.8585C19.5367 21.6702 19.7918 21.5639 20.0581 21.5627C20.3244 21.5615 20.5804 21.6655 20.7704 21.8521L21.4032 22.485L23.3827 20.505C23.5721 20.3155 23.8291 20.2091 24.097 20.2091C24.3649 20.2091 24.6218 20.3155 24.8112 20.505C25.0006 20.6944 25.1071 20.9513 25.1071 21.2192C25.1071 21.4871 25.0006 21.744 24.8112 21.9335Z"
                      fill="#6418C3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <span className="lg:w-[1px] w-[289px] lg:h-[112px] h-[1px] bg-[#DCDCDC]"></span>
            <div
              className="flex py-[15px] px-[5px] items-center gap-5 bg-[#FFF] self-stretch lg:self-auto"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex flex-col items-start gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <div className="flex flex-col items-start">
                  <h2 className="h2-bold text-[#383838]">SAR 1,500</h2>
                  <p className="p-reg text-[#646464]">Unpaid Invoices (4)</p>
                </div>
                <div className="flex items-center gap-[5px] self-stretch">
                  <p className="label-bold !text-[13px] text-[#00CCB6]">+2%</p>
                  <p className="label-reg text-[#A4A4A4]">than last month</p>
                </div>
              </div>
              <div
                className="flex w-[55px] h-[55px] justify-center items-center gap-2.5 rounded-[5px]"
                style={{ background: "rgba(255, 171, 45, 0.20)" }}
              >
                <div
                  className="flex w-[36px] h-[36px] justify-center items-center shrink-0"
                  style={{
                    padding: " 5.143px 3.857px 4.596px 3.857px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                  >
                    <path
                      d="M21.3796 1.62468C21.0276 1.44094 20.6314 1.35875 20.2353 1.3873C19.8393 1.41584 19.459 1.554 19.1369 1.78631C18.8705 1.99708 18.5369 2.10468 18.1975 2.08937C17.7957 2.09389 17.408 1.9417 17.1165 1.66509C16.4705 1.14222 15.6646 0.856943 14.8335 0.856943C14.0024 0.856943 13.1964 1.14222 12.5504 1.66509C12.2545 1.93789 11.8668 2.08935 11.4644 2.08935C11.0619 2.08935 10.6742 1.93789 10.3783 1.66509C9.73427 1.14228 8.92998 0.856934 8.10044 0.856934C7.2709 0.856934 6.46661 1.14228 5.82255 1.66509C5.52816 1.9435 5.13659 2.09577 4.73145 2.08937C4.3981 2.10508 4.07068 1.99716 3.812 1.78631C3.48811 1.55323 3.10542 1.41551 2.70727 1.38872C2.30913 1.36194 1.91144 1.44718 1.55925 1.63478C1.19571 1.82177 0.890993 2.10571 0.678839 2.45517C0.466685 2.80462 0.355365 3.20597 0.3572 3.61478V24.8998C0.356071 25.486 0.587079 26.0489 0.999731 26.4654C1.41238 26.8818 1.97312 27.118 2.55937 27.1222H16.0356C15.0334 25.8154 14.4934 24.213 14.5 22.5662C14.5008 20.557 15.2992 18.6303 16.7199 17.2096C18.1407 15.7888 20.0674 14.9904 22.0766 14.9897C22.2454 14.9897 22.4141 14.9998 22.5817 15.02V3.60468C22.5822 3.19613 22.4703 2.79532 22.2583 2.44609C22.0463 2.09687 21.7423 1.8127 21.3796 1.62468ZM6.01444 20.4448C5.77468 20.4448 5.5403 20.3737 5.34095 20.2405C5.1416 20.1073 4.98622 19.9179 4.89447 19.6964C4.80272 19.4749 4.77871 19.2312 4.82549 18.996C4.87226 18.7609 4.98772 18.5449 5.15725 18.3753C5.32679 18.2058 5.54279 18.0903 5.77794 18.0436C6.01309 17.9968 6.25684 18.0208 6.47834 18.1126C6.69985 18.2043 6.88918 18.3597 7.02238 18.559C7.15558 18.7584 7.22668 18.9928 7.22668 19.2325C7.22706 19.3918 7.19595 19.5496 7.13517 19.6969C7.07438 19.8441 6.9851 19.9779 6.87246 20.0905C6.75981 20.2032 6.62603 20.2925 6.47878 20.3533C6.33154 20.414 6.17374 20.4451 6.01444 20.4448ZM6.01444 15.3938C5.77468 15.3938 5.5403 15.3227 5.34095 15.1895C5.1416 15.0562 4.98622 14.8669 4.89447 14.6454C4.80272 14.4239 4.77871 14.1802 4.82549 13.945C4.87226 13.7099 4.98772 13.4939 5.15725 13.3243C5.32679 13.1548 5.54279 13.0393 5.77794 12.9926C6.01309 12.9458 6.25684 12.9698 6.47834 13.0615C6.69985 13.1533 6.88918 13.3087 7.02238 13.508C7.15558 13.7074 7.22668 13.9417 7.22668 14.1815C7.22706 14.3408 7.19595 14.4986 7.13517 14.6459C7.07438 14.7931 6.9851 14.9269 6.87246 15.0395C6.75981 15.1522 6.62603 15.2414 6.47878 15.3022C6.33154 15.363 6.17374 15.3941 6.01444 15.3938ZM6.01444 10.1407C5.77568 10.1397 5.54258 10.0679 5.34462 9.93444C5.14666 9.80096 4.99272 9.61177 4.90227 9.39081C4.81183 9.16984 4.78894 8.92702 4.8365 8.69305C4.88406 8.45907 4.99993 8.24445 5.16947 8.07633C5.339 7.90821 5.55458 7.79414 5.78894 7.74854C6.02331 7.70294 6.26593 7.72786 6.48613 7.82015C6.70633 7.91244 6.89422 8.06796 7.02604 8.26703C7.15785 8.4661 7.22768 8.69979 7.22668 8.93855C7.22532 9.25871 7.09684 9.56522 6.86951 9.79066C6.64217 10.0161 6.3346 10.142 6.01444 10.1407ZM12.4796 20.2427H9.65107C9.38315 20.2427 9.1262 20.1363 8.93675 19.9468C8.7473 19.7574 8.64087 19.5004 8.64087 19.2325C8.64087 18.9646 8.7473 18.7077 8.93675 18.5182C9.1262 18.3288 9.38315 18.2223 9.65107 18.2223H12.4796C12.7476 18.2223 13.0045 18.3288 13.194 18.5182C13.3834 18.7077 13.4898 18.9646 13.4898 19.2325C13.4898 19.5004 13.3834 19.7574 13.194 19.9468C13.0045 20.1363 12.7476 20.2427 12.4796 20.2427ZM17.1267 15.1917H9.65107C9.38315 15.1917 9.1262 15.0853 8.93675 14.8958C8.7473 14.7064 8.64087 14.4494 8.64087 14.1815C8.64087 13.9136 8.7473 13.6566 8.93675 13.4672C9.1262 13.2777 9.38315 13.1713 9.65107 13.1713H17.1267C17.3946 13.1713 17.6515 13.2777 17.841 13.4672C18.0304 13.6566 18.1369 13.9136 18.1369 14.1815C18.1369 14.4494 18.0304 14.7064 17.841 14.8958C17.6515 15.0853 17.3946 15.1917 17.1267 15.1917ZM17.1267 9.94876H9.65107C9.38315 9.94876 9.1262 9.84232 8.93675 9.65287C8.7473 9.46342 8.64087 9.20647 8.64087 8.93855C8.64087 8.67063 8.7473 8.41368 8.93675 8.22423C9.1262 8.03478 9.38315 7.92835 9.65107 7.92835H17.1267C17.3946 7.92835 17.6515 8.03478 17.841 8.22423C18.0304 8.41368 18.1369 8.67063 18.1369 8.93855C18.1369 9.20647 18.0304 9.46342 17.841 9.65287C17.6515 9.84232 17.3946 9.94876 17.1267 9.94876Z"
                      fill="#FFAB2D"
                    />
                    <path
                      d="M22.0766 16C20.7779 16 19.5084 16.3851 18.4285 17.1066C17.3487 17.8281 16.5071 18.8537 16.0101 20.0535C15.5131 21.2533 15.3831 22.5736 15.6364 23.8473C15.8898 25.1211 16.5152 26.2911 17.4335 27.2094C18.3518 28.1277 19.5218 28.7531 20.7956 29.0065C22.0693 29.2598 23.3896 29.1298 24.5894 28.6328C25.7892 28.1358 26.8148 27.2942 27.5363 26.2144C28.2578 25.1345 28.6429 23.865 28.6429 22.5663C28.6409 20.8254 27.9484 19.1564 26.7174 17.9255C25.4865 16.6945 23.8175 16.002 22.0766 16ZM24.097 23.5765H20.0562C19.7882 23.5765 19.5313 23.4701 19.3418 23.2806C19.1524 23.0912 19.046 22.8342 19.046 22.5663C19.046 22.2984 19.1524 22.0414 19.3418 21.852C19.5313 21.6625 19.7882 21.5561 20.0562 21.5561H24.097C24.3649 21.5561 24.6219 21.6625 24.8113 21.852C25.0008 22.0414 25.1072 22.2984 25.1072 22.5663C25.1072 22.8342 25.0008 23.0912 24.8113 23.2806C24.6219 23.4701 24.3649 23.5765 24.097 23.5765Z"
                      fill="#FFAB2D"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <span className="lg:w-[1px] w-[289px] lg:h-[112px] h-[1px] bg-[#DCDCDC]"></span>
            <div
              className="flex py-[15px] px-[5px] items-center gap-5 bg-[#FFF] self-stretch lg:self-auto"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex flex-col items-start gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <div className="flex flex-col items-start">
                  <h2 className="h2-bold text-[#383838]">SAR 1,000</h2>
                  <p className="p-reg text-[#646464]">Total Refund (6)</p>
                </div>
                <div className="flex items-center gap-[5px] self-stretch">
                  <p className="label-bold !text-[13px] text-[#FF4A55]">-2%</p>
                  <p className="label-reg text-[#A4A4A4]">than last month</p>
                </div>
              </div>
              <div
                className="flex w-[55px] h-[55px] justify-center items-center gap-2.5 rounded-[5px]"
                style={{ background: "rgba(255, 74, 85, 0.20)" }}
              >
                <div
                  className="flex w-[36px] h-[36px] justify-center items-center shrink-0"
                  style={{
                    padding: " 5.143px 3.857px 4.596px 3.857px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                  >
                    <path
                      d="M21.3796 1.62468C21.0276 1.44094 20.6314 1.35875 20.2353 1.3873C19.8393 1.41584 19.459 1.554 19.1369 1.78631C18.8705 1.99708 18.5369 2.10468 18.1975 2.08937C17.7957 2.09389 17.408 1.9417 17.1165 1.66509C16.4705 1.14222 15.6646 0.856943 14.8335 0.856943C14.0024 0.856943 13.1964 1.14222 12.5504 1.66509C12.2545 1.93789 11.8668 2.08935 11.4644 2.08935C11.0619 2.08935 10.6742 1.93789 10.3783 1.66509C9.73426 1.14228 8.92997 0.856934 8.10043 0.856934C7.2709 0.856934 6.4666 1.14228 5.82255 1.66509C5.52816 1.9435 5.13658 2.09577 4.73145 2.08937C4.3981 2.10508 4.07068 1.99716 3.812 1.78631C3.48811 1.55323 3.10542 1.41551 2.70727 1.38872C2.30913 1.36194 1.91144 1.44718 1.55925 1.63478C1.19571 1.82177 0.890993 2.10571 0.678839 2.45517C0.466685 2.80462 0.355365 3.20597 0.3572 3.61478V24.8997C0.356071 25.486 0.587079 26.0489 0.999731 26.4653C1.41238 26.8818 1.97312 27.118 2.55937 27.1222H16.0355C15.0334 25.8154 14.4934 24.213 14.5 22.5662C14.5007 20.557 15.2992 18.6303 16.7199 17.2096C18.1406 15.7888 20.0674 14.9904 22.0766 14.9897C22.2454 14.9897 22.414 14.9998 22.5817 15.02V3.60468C22.5822 3.19613 22.4703 2.79532 22.2583 2.44609C22.0463 2.09687 21.7423 1.8127 21.3796 1.62468ZM6.01444 20.4448C5.77468 20.4448 5.5403 20.3737 5.34095 20.2405C5.1416 20.1073 4.98622 19.9179 4.89447 19.6964C4.80272 19.4749 4.77871 19.2312 4.82549 18.996C4.87226 18.7609 4.98771 18.5449 5.15725 18.3753C5.32679 18.2058 5.54279 18.0903 5.77794 18.0436C6.01309 17.9968 6.25683 18.0208 6.47834 18.1125C6.69985 18.2043 6.88918 18.3597 7.02238 18.559C7.15558 18.7584 7.22668 18.9928 7.22668 19.2325C7.22705 19.3918 7.19595 19.5496 7.13516 19.6969C7.07437 19.8441 6.98509 19.9779 6.87245 20.0905C6.75981 20.2032 6.62603 20.2924 6.47878 20.3532C6.33154 20.414 6.17373 20.4451 6.01444 20.4448ZM6.01444 15.3937C5.77468 15.3937 5.5403 15.3226 5.34095 15.1894C5.1416 15.0562 4.98622 14.8669 4.89447 14.6454C4.80272 14.4239 4.77871 14.1802 4.82549 13.945C4.87226 13.7098 4.98771 13.4938 5.15725 13.3243C5.32679 13.1548 5.54279 13.0393 5.77794 12.9925C6.01309 12.9458 6.25683 12.9698 6.47834 13.0615C6.69985 13.1533 6.88918 13.3087 7.02238 13.508C7.15558 13.7074 7.22668 13.9417 7.22668 14.1815C7.22705 14.3408 7.19595 14.4986 7.13516 14.6458C7.07437 14.7931 6.98509 14.9269 6.87245 15.0395C6.75981 15.1522 6.62603 15.2414 6.47878 15.3022C6.33154 15.363 6.17373 15.3941 6.01444 15.3937ZM6.01444 10.1407C5.77568 10.1397 5.54258 10.0679 5.34462 9.93443C5.14665 9.80095 4.99272 9.61177 4.90227 9.3908C4.81183 9.16984 4.78894 8.92702 4.8365 8.69304C4.88406 8.45907 4.99993 8.24445 5.16946 8.07633C5.339 7.90821 5.55457 7.79414 5.78894 7.74854C6.0233 7.70294 6.26593 7.72786 6.48613 7.82015C6.70633 7.91244 6.89422 8.06795 7.02603 8.26703C7.15785 8.4661 7.22768 8.69979 7.22668 8.93855C7.22532 9.25871 7.09684 9.56522 6.86951 9.79066C6.64217 10.0161 6.3346 10.142 6.01444 10.1407ZM12.4796 20.2427H9.65106C9.38314 20.2427 9.12619 20.1363 8.93674 19.9468C8.74729 19.7574 8.64086 19.5004 8.64086 19.2325C8.64086 18.9646 8.74729 18.7076 8.93674 18.5182C9.12619 18.3287 9.38314 18.2223 9.65106 18.2223H12.4796C12.7476 18.2223 13.0045 18.3287 13.194 18.5182C13.3834 18.7076 13.4898 18.9646 13.4898 19.2325C13.4898 19.5004 13.3834 19.7574 13.194 19.9468C13.0045 20.1363 12.7476 20.2427 12.4796 20.2427ZM17.1267 15.1917H9.65106C9.38314 15.1917 9.12619 15.0853 8.93674 14.8958C8.74729 14.7064 8.64086 14.4494 8.64086 14.1815C8.64086 13.9136 8.74729 13.6566 8.93674 13.4672C9.12619 13.2777 9.38314 13.1713 9.65106 13.1713H17.1267C17.3946 13.1713 17.6515 13.2777 17.841 13.4672C18.0304 13.6566 18.1369 13.9136 18.1369 14.1815C18.1369 14.4494 18.0304 14.7064 17.841 14.8958C17.6515 15.0853 17.3946 15.1917 17.1267 15.1917ZM17.1267 9.94875H9.65106C9.38314 9.94875 9.12619 9.84232 8.93674 9.65287C8.74729 9.46342 8.64086 9.20647 8.64086 8.93855C8.64086 8.67062 8.74729 8.41368 8.93674 8.22423C9.12619 8.03478 9.38314 7.92834 9.65106 7.92834H17.1267C17.3946 7.92834 17.6515 8.03478 17.841 8.22423C18.0304 8.41368 18.1369 8.67062 18.1369 8.93855C18.1369 9.20647 18.0304 9.46342 17.841 9.65287C17.6515 9.84232 17.3946 9.94875 17.1267 9.94875Z"
                      fill="#FF4A55"
                    />
                    <path
                      d="M22.0766 16C20.7779 16 19.5084 16.3851 18.4285 17.1066C17.3487 17.8281 16.5071 18.8537 16.0101 20.0535C15.5131 21.2533 15.3831 22.5736 15.6364 23.8473C15.8898 25.1211 16.5152 26.2911 17.4335 27.2094C18.3518 28.1277 19.5218 28.7531 20.7955 29.0065C22.0693 29.2598 23.3896 29.1298 24.5894 28.6328C25.7892 28.1358 26.8148 27.2942 27.5363 26.2144C28.2578 25.1345 28.6429 23.865 28.6429 22.5663C28.6409 20.8254 27.9484 19.1564 26.7174 17.9255C25.4865 16.6945 23.8175 16.002 22.0766 16ZM24.3061 23.3674C24.4013 23.4609 24.477 23.5723 24.5289 23.6952C24.5808 23.8181 24.6078 23.9501 24.6084 24.0835C24.609 24.2169 24.5832 24.3491 24.5324 24.4725C24.4816 24.5959 24.4069 24.708 24.3126 24.8023C24.2183 24.8967 24.1062 24.9714 23.9828 25.0222C23.8594 25.0729 23.7272 25.0988 23.5938 25.0982C23.4604 25.0976 23.3284 25.0705 23.2055 25.0186C23.0826 24.9668 22.9711 24.891 22.8777 24.7958L22.0766 23.9947L21.2755 24.7958C21.0855 24.9824 20.8295 25.0864 20.5632 25.0852C20.2969 25.084 20.0418 24.9777 19.8535 24.7894C19.6652 24.6011 19.5589 24.346 19.5577 24.0797C19.5565 23.8134 19.6605 23.5574 19.8471 23.3674L20.6481 22.5663L19.8471 21.7652C19.6605 21.5752 19.5565 21.3192 19.5577 21.0529C19.5589 20.7866 19.6652 20.5315 19.8535 20.3432C20.0418 20.1549 20.2969 20.0486 20.5632 20.0474C20.8295 20.0462 21.0855 20.1502 21.2755 20.3368L22.0766 21.1379L22.8777 20.3368C23.0677 20.1502 23.3237 20.0462 23.59 20.0474C23.8563 20.0486 24.1113 20.1549 24.2997 20.3432C24.488 20.5315 24.5943 20.7866 24.5955 21.0529C24.5967 21.3192 24.4927 21.5752 24.3061 21.7652L23.505 22.5663L24.3061 23.3674Z"
                      fill="#FF4A55"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialRow;
