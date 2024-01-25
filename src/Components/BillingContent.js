import React from "react";
import BillingTabs from "./BillingTabs";
import actionArrow from "../Assets/action-arrow.svg";

function BillingContent() {
  return (
    <div className="flex w-full flex-col gap-[30px] self-stretch">
      {/* Overview Row */}
      <div className="flex p-5 flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
        {/* Cards */}
        <div className="flex w-full items-center gap-5 self-stretch">
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-white"
            style={{ flex: "1 0 0", border: "1px solid #DCDCDC" }}
          >
            {/* Icon */}
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#00CCB6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
              >
                <path
                  d="M19.7063 0.738924C19.3836 0.570499 19.0204 0.495157 18.6574 0.521323C18.2943 0.547489 17.9457 0.674131 17.6505 0.887087C17.4062 1.08029 17.1005 1.17892 16.7894 1.16489C16.4211 1.16904 16.0656 1.02953 15.7985 0.775965C15.2063 0.296669 14.4675 0.0351649 13.7057 0.0351649C12.9438 0.0351649 12.2051 0.296669 11.6129 0.775965C11.3416 1.02603 10.9862 1.16487 10.6173 1.16487C10.2484 1.16487 9.89301 1.02603 9.62178 0.775965C9.0314 0.296726 8.29413 0.0351562 7.53372 0.0351562C6.77331 0.0351562 6.03604 0.296726 5.44565 0.775965C5.1758 1.03117 4.81685 1.17075 4.44548 1.16489C4.13991 1.17929 3.83978 1.08036 3.60265 0.887087C3.30575 0.673432 2.95495 0.547181 2.58999 0.522631C2.22502 0.498082 1.86047 0.576216 1.53763 0.748184C1.20438 0.919592 0.925061 1.17987 0.730586 1.5002C0.536112 1.82054 0.434068 2.18844 0.43575 2.56318V22.0744C0.434716 22.6118 0.646473 23.1278 1.02474 23.5095C1.403 23.8913 1.91701 24.1078 2.45441 24.1117H14.8076C13.889 22.9138 13.3939 21.4449 13.4 19.9353C13.4007 18.0935 14.1326 16.3274 15.4349 15.0251C16.7373 13.7227 18.5034 12.9908 20.3452 12.9902C20.4999 12.9902 20.6545 12.9995 20.8082 13.0179V2.55392C20.8087 2.17942 20.7061 1.81201 20.5118 1.49189C20.3174 1.17176 20.0388 0.911274 19.7063 0.738924ZM5.62155 17.9907C5.40177 17.9907 5.18693 17.9255 5.00419 17.8034C4.82145 17.6813 4.67902 17.5077 4.59492 17.3047C4.51081 17.1016 4.4888 16.8782 4.53168 16.6627C4.57456 16.4471 4.68039 16.2491 4.8358 16.0937C4.99121 15.9383 5.18921 15.8325 5.40476 15.7896C5.62032 15.7467 5.84375 15.7687 6.0468 15.8528C6.24985 15.9369 6.4234 16.0793 6.5455 16.2621C6.6676 16.4448 6.73278 16.6597 6.73278 16.8794C6.73312 17.0255 6.70461 17.1701 6.64889 17.3051C6.59316 17.4401 6.51132 17.5627 6.40807 17.666C6.30481 17.7692 6.18218 17.8511 6.0472 17.9068C5.91223 17.9625 5.76758 17.991 5.62155 17.9907ZM5.62155 13.3606C5.40177 13.3606 5.18693 13.2954 5.00419 13.1733C4.82145 13.0512 4.67902 12.8776 4.59492 12.6746C4.51081 12.4715 4.4888 12.2481 4.53168 12.0326C4.57456 11.817 4.68039 11.619 4.8358 11.4636C4.99121 11.3082 5.18921 11.2024 5.40476 11.1595C5.62032 11.1166 5.84375 11.1386 6.0468 11.2227C6.24985 11.3068 6.4234 11.4492 6.5455 11.632C6.6676 11.8147 6.73278 12.0296 6.73278 12.2493C6.73312 12.3954 6.70461 12.54 6.64889 12.675C6.59316 12.81 6.51132 12.9326 6.40807 13.0359C6.30481 13.1391 6.18218 13.221 6.0472 13.2767C5.91223 13.3324 5.76758 13.3609 5.62155 13.3606ZM5.62155 8.54527C5.40269 8.54435 5.18902 8.47856 5.00755 8.3562C4.82609 8.23385 4.68498 8.06043 4.60207 7.85788C4.51916 7.65532 4.49818 7.43274 4.54177 7.21826C4.58537 7.00378 4.69159 6.80705 4.84699 6.65294C5.0024 6.49883 5.20001 6.39426 5.41485 6.35246C5.62968 6.31066 5.85209 6.33351 6.05394 6.41811C6.25579 6.50271 6.42802 6.64526 6.54885 6.82774C6.66968 7.01023 6.73369 7.22445 6.73278 7.44331C6.73153 7.73679 6.61376 8.01775 6.40537 8.22441C6.19698 8.43106 5.91503 8.54648 5.62155 8.54527ZM11.548 17.8055H8.95513C8.70953 17.8055 8.474 17.7079 8.30034 17.5342C8.12667 17.3606 8.02911 17.125 8.02911 16.8794C8.02911 16.6339 8.12667 16.3983 8.30034 16.2247C8.474 16.051 8.70953 15.9534 8.95513 15.9534H11.548C11.7936 15.9534 12.0291 16.051 12.2028 16.2247C12.3764 16.3983 12.474 16.6339 12.474 16.8794C12.474 17.125 12.3764 17.3606 12.2028 17.5342C12.0291 17.7079 11.7936 17.8055 11.548 17.8055ZM15.8078 13.1754H8.95513C8.70953 13.1754 8.474 13.0778 8.30034 12.9041C8.12667 12.7305 8.02911 12.4949 8.02911 12.2493C8.02911 12.0038 8.12667 11.7682 8.30034 11.5946C8.474 11.4209 8.70953 11.3233 8.95513 11.3233H15.8078C16.0534 11.3233 16.2889 11.4209 16.4626 11.5946C16.6362 11.7682 16.7338 12.0038 16.7338 12.2493C16.7338 12.4949 16.6362 12.7305 16.4626 12.9041C16.2889 13.0778 16.0534 13.1754 15.8078 13.1754ZM15.8078 8.36933H8.95513C8.70953 8.36933 8.474 8.27176 8.30034 8.0981C8.12667 7.92444 8.02911 7.6889 8.02911 7.44331C8.02911 7.19771 8.12667 6.96217 8.30034 6.78851C8.474 6.61485 8.70953 6.51729 8.95513 6.51729H15.8078C16.0534 6.51729 16.2889 6.61485 16.4626 6.78851C16.6362 6.96217 16.7338 7.19771 16.7338 7.44331C16.7338 7.6889 16.6362 7.92444 16.4626 8.0981C16.2889 8.27176 16.0534 8.36933 15.8078 8.36933Z"
                  fill="white"
                />
                <path
                  d="M20.3452 13.916C19.1547 13.916 17.991 14.269 17.0011 14.9304C16.0113 15.5918 15.2398 16.5319 14.7842 17.6317C14.3287 18.7316 14.2095 19.9418 14.4417 21.1094C14.674 22.277 15.2472 23.3495 16.089 24.1913C16.9308 25.0331 18.0033 25.6064 19.1709 25.8386C20.3385 26.0709 21.5487 25.9517 22.6486 25.4961C23.7485 25.0405 24.6885 24.269 25.3499 23.2792C26.0113 22.2894 26.3643 21.1256 26.3643 19.9351C26.3625 18.3393 25.7277 16.8094 24.5993 15.681C23.4709 14.5526 21.941 13.9179 20.3452 13.916ZM22.8519 19.355L20.3827 21.8247C20.2967 21.9107 20.1947 21.979 20.0823 22.0255C19.97 22.0721 19.8496 22.096 19.728 22.096C19.6064 22.096 19.4859 22.0721 19.3736 22.0255C19.2613 21.979 19.1592 21.9107 19.0732 21.8247L17.8384 20.5898C17.6674 20.4157 17.5721 20.181 17.5732 19.9369C17.5743 19.6928 17.6717 19.459 17.8443 19.2864C18.017 19.1137 18.2508 19.0163 18.4949 19.0152C18.739 19.0141 18.9737 19.1094 19.1478 19.2804L19.728 19.8606L21.5425 18.0456C21.7161 17.8719 21.9516 17.7744 22.1972 17.7744C22.4428 17.7744 22.6783 17.8719 22.8519 18.0456C23.0256 18.2192 23.1231 18.4547 23.1231 18.7003C23.1231 18.9459 23.0256 19.1814 22.8519 19.355Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">
                368,273 <span className="p-reg text-[#878787]">SAR</span>
              </h2>
              <p className="p-reg text-left text-[#878787]">
                Total Paid Invoices
              </p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-white"
            style={{ flex: "1 0 0", border: "1px solid #DCDCDC" }}
          >
            {/* Icon */}
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#FFAB2D]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M25.4364 4.11719H8.18638C7.89113 4.12059 7.60692 4.22989 7.38549 4.4252C8.26418 4.73432 9.03727 5.28611 9.61516 6.0166C10.1931 6.74709 10.5521 7.62639 10.6507 8.55257C10.6695 8.71631 10.6695 8.88166 10.6507 9.04539V29.9903C10.6501 30.2259 10.7171 30.4568 10.8438 30.6555C10.9704 30.8542 11.1514 31.0125 11.3653 31.1114C11.5797 31.2101 11.8179 31.2452 12.0516 31.2124C12.2853 31.1796 12.5047 31.0804 12.6837 30.9266L16.1953 27.9204L19.7069 30.9266C19.9301 31.1175 20.2141 31.2224 20.5078 31.2224C20.8015 31.2224 21.0855 31.1175 21.3087 30.9266L24.8203 27.9204L28.3319 30.9266C28.5551 31.1175 28.8391 31.2223 29.1328 31.2223C29.3111 31.2211 29.4872 31.1833 29.6503 31.1114C29.8642 31.0125 30.0452 30.8542 30.1719 30.6555C30.2985 30.4568 30.3655 30.2259 30.3649 29.9903V9.04539C30.3649 7.73835 29.8457 6.48484 28.9214 5.56063C27.9971 4.63641 26.7435 4.11719 25.4364 4.11719ZM24.2042 21.3659H16.8114C16.4846 21.3659 16.1712 21.2361 15.9401 21.005C15.7091 20.774 15.5792 20.4606 15.5792 20.1339C15.5792 19.8071 15.7091 19.4937 15.9401 19.2627C16.1712 19.0316 16.4846 18.9018 16.8114 18.9018H24.2042C24.531 18.9018 24.8444 19.0316 25.0755 19.2627C25.3066 19.4937 25.4364 19.8071 25.4364 20.1339C25.4364 20.4606 25.3066 20.774 25.0755 21.005C24.8444 21.2361 24.531 21.3659 24.2042 21.3659ZM24.2042 16.4377H16.8114C16.4846 16.4377 16.1712 16.3079 15.9401 16.0768C15.7091 15.8458 15.5792 15.5324 15.5792 15.2057C15.5792 14.8789 15.7091 14.5655 15.9401 14.3345C16.1712 14.1034 16.4846 13.9736 16.8114 13.9736H24.2042C24.531 13.9736 24.8444 14.1034 25.0755 14.3345C25.3066 14.5655 25.4364 14.8789 25.4364 15.2057C25.4364 15.5324 25.3066 15.8458 25.0755 16.0768C24.8444 16.3079 24.531 16.4377 24.2042 16.4377ZM24.2042 11.5095H16.8114C16.4846 11.5095 16.1712 11.3797 15.9401 11.1486C15.7091 10.9176 15.5792 10.6042 15.5792 10.2774C15.5792 9.95068 15.7091 9.63731 15.9401 9.40625C16.1712 9.1752 16.4846 9.04539 16.8114 9.04539H24.2042C24.531 9.04539 24.8444 9.1752 25.0755 9.40625C25.3066 9.63731 25.4364 9.95068 25.4364 10.2774C25.4364 10.6042 25.3066 10.9176 25.0755 11.1486C24.8444 11.3797 24.531 11.5095 24.2042 11.5095ZM8.18638 9.04539V18.9018H4.48996C4.16317 18.9018 3.84977 18.772 3.6187 18.5409C3.38763 18.3099 3.25781 17.9965 3.25781 17.6698V9.04539C3.25781 8.87291 3.25781 8.71274 3.25781 8.55257C3.32317 7.89905 3.64548 7.29826 4.15384 6.88236C4.66219 6.46646 5.31496 6.26953 5.96853 6.33488C6.6221 6.40023 7.22293 6.72252 7.63886 7.23084C8.05479 7.73916 8.25174 8.39187 8.18638 9.04539Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">
                15,626 <span className="p-reg text-[#878787]">SAR</span>
              </h2>
              <p className="p-reg text-left text-[#878787]">
                Total Unpaid Invoices
              </p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-white"
            style={{ flex: "1 0 0", border: "1px solid #DCDCDC" }}
          >
            {/* Icon */}
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#6418C3]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
              >
                <path
                  d="M24.5122 10.4011H2.28776C1.79671 10.4006 1.32593 10.2053 0.978706 9.85808C0.631488 9.51086 0.436205 9.04007 0.435715 8.54903V2.06688C0.436205 1.57584 0.631488 1.10505 0.978706 0.757835C1.32593 0.410617 1.79671 0.215334 2.28776 0.214844H24.5122C25.0033 0.215334 25.4741 0.410617 25.8213 0.757835C26.1685 1.10505 26.3638 1.57584 26.3643 2.06688V8.54903C26.3638 9.04007 26.1685 9.51086 25.8213 9.85808C25.4741 10.2053 25.0033 10.4006 24.5122 10.4011ZM2.28776 2.06688V8.54903H24.5136L24.5122 2.06688H2.28776Z"
                  fill="white"
                />
                <path
                  d="M20.7535 0.21875L6.04615 0.220111C5.51187 0.25178 5.01174 0.493271 4.65469 0.891989C4.29764 1.29071 4.11259 1.81435 4.13985 2.34887V21.6285C4.12878 22.035 4.23367 22.4363 4.44226 22.7854C4.65084 23.1345 4.95451 23.417 5.31775 23.5999C5.62334 23.7436 5.96443 23.7945 6.29866 23.7461C6.63289 23.6977 6.94555 23.5522 7.19783 23.3277C7.28017 23.2399 7.38026 23.1707 7.49143 23.1246C7.60261 23.0785 7.72232 23.0567 7.84261 23.0604C8.18625 23.0604 8.31285 23.1721 8.61806 23.4416C8.87822 23.7092 9.18938 23.9219 9.53316 24.0671C9.87693 24.2123 10.2463 24.2871 10.6195 24.2871C10.9927 24.2871 11.3621 24.2123 11.7059 24.0671C12.0497 23.9219 12.3609 23.7092 12.621 23.4416C12.9262 23.1721 13.0524 23.0604 13.3956 23.0604C13.7401 23.0604 13.8667 23.1721 14.1719 23.4421C14.4323 23.7095 14.7437 23.9221 15.0876 24.0672C15.4315 24.2124 15.801 24.2871 16.1743 24.2871C16.5476 24.2871 16.9171 24.2124 17.261 24.0672C17.6049 23.9221 17.9163 23.7095 18.1767 23.4421C18.4828 23.1721 18.6089 23.0604 18.9539 23.0604C19.0751 23.0568 19.1957 23.079 19.3076 23.1255C19.4196 23.1721 19.5204 23.2419 19.6032 23.3304C19.8554 23.5548 20.168 23.7002 20.5021 23.7484C20.8362 23.7966 21.1771 23.7456 21.4824 23.6017C21.8457 23.4188 22.1494 23.1363 22.3579 22.7872C22.5665 22.4381 22.6714 22.0368 22.6603 21.6303V2.34751C22.6874 1.81294 22.5023 1.28928 22.1451 0.890574C21.788 0.491865 21.2878 0.250397 20.7535 0.21875ZM9.2203 17.0677C9.00064 17.0677 8.78591 17.0026 8.60325 16.8806C8.4206 16.7586 8.27823 16.5851 8.19416 16.3822C8.11008 16.1792 8.08807 15.9559 8.1309 15.7405C8.17374 15.5251 8.2795 15.3271 8.43481 15.1718C8.59013 15.0165 8.78802 14.9107 9.00345 14.8678C9.21889 14.825 9.4422 14.8469 9.64515 14.931C9.84809 15.015 10.0216 15.1574 10.1436 15.34C10.2656 15.5226 10.3308 15.7374 10.3308 15.957C10.3308 16.1029 10.3021 16.2473 10.2463 16.382C10.1905 16.5168 10.1087 16.6392 10.0056 16.7423C9.90245 16.8455 9.78003 16.9273 9.64529 16.9831C9.51056 17.0389 9.36615 17.0677 9.2203 17.0677ZM9.2203 12.4383C9.00065 12.4383 8.78592 12.3732 8.60328 12.2512C8.42063 12.1292 8.27827 11.9557 8.1942 11.7528C8.11013 11.5499 8.08812 11.3266 8.13096 11.1111C8.1738 10.8957 8.27957 10.6978 8.43488 10.5425C8.59019 10.3871 8.78808 10.2814 9.00351 10.2385C9.21894 10.1956 9.44225 10.2176 9.64518 10.3017C9.84812 10.3857 10.0216 10.5281 10.1436 10.7107C10.2657 10.8933 10.3308 11.1081 10.3308 11.3277C10.3308 11.4735 10.3021 11.618 10.2463 11.7527C10.1905 11.8874 10.1087 12.0099 10.0056 12.113C9.90245 12.2161 9.78003 12.2979 9.64529 12.3537C9.51055 12.4095 9.36614 12.4383 9.2203 12.4383ZM9.2203 7.80822C9.00065 7.80824 8.78592 7.74312 8.60328 7.62109C8.42063 7.49907 8.27827 7.32563 8.1942 7.1227C8.11013 6.91977 8.08812 6.69647 8.13096 6.48103C8.1738 6.26559 8.27957 6.0677 8.43488 5.91237C8.59019 5.75704 8.78808 5.65126 9.00351 5.6084C9.21894 5.56554 9.44225 5.58752 9.64518 5.67157C9.84812 5.75562 10.0216 5.89796 10.1436 6.0806C10.2657 6.26323 10.3308 6.47795 10.3308 6.69761C10.3308 6.84344 10.3021 6.98786 10.2463 7.1226C10.1905 7.25734 10.1087 7.37977 10.0056 7.48289C9.90245 7.58602 9.78003 7.66782 9.64529 7.72363C9.51055 7.77945 9.36614 7.80822 9.2203 7.80822ZM17.7643 16.8821H12.2082C11.9626 16.8821 11.727 16.7846 11.5534 16.6109C11.3797 16.4372 11.2821 16.2017 11.2821 15.9561C11.2821 15.7105 11.3797 15.475 11.5534 15.3013C11.727 15.1276 11.9626 15.0301 12.2082 15.0301H17.7643C18.0099 15.0301 18.2454 15.1276 18.4191 15.3013C18.5927 15.475 18.6903 15.7105 18.6903 15.9561C18.6903 16.2017 18.5927 16.4372 18.4191 16.6109C18.2454 16.7846 18.0099 16.8821 17.7643 16.8821ZM17.7643 12.253H12.2082C11.9626 12.253 11.727 12.1554 11.5534 11.9817C11.3797 11.8081 11.2821 11.5725 11.2821 11.3269C11.2821 11.0813 11.3797 10.8458 11.5534 10.6721C11.727 10.4985 11.9626 10.4009 12.2082 10.4009H17.7643C18.0099 10.4009 18.2454 10.4985 18.4191 10.6721C18.5927 10.8458 18.6903 11.0813 18.6903 11.3269C18.6903 11.5725 18.5927 11.8081 18.4191 11.9817C18.2454 12.1554 18.0099 12.253 17.7643 12.253ZM17.7643 7.62285H12.2082C11.9626 7.62285 11.727 7.52529 11.5534 7.35162C11.3797 7.17796 11.2821 6.94242 11.2821 6.69683C11.2821 6.45123 11.3797 6.2157 11.5534 6.04203C11.727 5.86837 11.9626 5.77081 12.2082 5.77081H17.7643C18.0099 5.77081 18.2454 5.86837 18.4191 6.04203C18.5927 6.2157 18.6903 6.45123 18.6903 6.69683C18.6903 6.94242 18.5927 7.17796 18.4191 7.35162C18.2454 7.52529 18.0099 7.62285 17.7643 7.62285Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">
                18,273 <span className="p-reg text-[#878787]">SAR</span>
              </h2>
              <p className="p-reg text-left text-[#878787]">
                Total Pending Invoices
              </p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-white"
            style={{ flex: "1 0 0", border: "1px solid #DCDCDC" }}
          >
            {/* Icon */}
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#E328AF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
              >
                <path
                  d="M19.7062 0.738924C19.3836 0.570499 19.0204 0.495157 18.6573 0.521323C18.2943 0.547489 17.9457 0.674131 17.6505 0.887087C17.4062 1.08029 17.1005 1.17892 16.7893 1.16489C16.421 1.16904 16.0656 1.02953 15.7984 0.775965C15.2062 0.296669 14.4675 0.0351649 13.7056 0.0351649C12.9438 0.0351649 12.205 0.296669 11.6128 0.775965C11.3416 1.02603 10.9862 1.16487 10.6173 1.16487C10.2484 1.16487 9.89297 1.02603 9.62175 0.775965C9.03137 0.296726 8.2941 0.0351562 7.53369 0.0351562C6.77328 0.0351562 6.03601 0.296726 5.44562 0.775965C5.17577 1.03117 4.81682 1.17075 4.44545 1.16489C4.13988 1.17929 3.83975 1.08036 3.60262 0.887087C3.30572 0.673432 2.95492 0.547181 2.58996 0.522631C2.22499 0.498082 1.86044 0.576216 1.5376 0.748184C1.20435 0.919592 0.925031 1.17987 0.730556 1.5002C0.536081 1.82054 0.434038 2.18844 0.43572 2.56318V22.0744C0.434685 22.6118 0.646442 23.1278 1.02471 23.5095C1.40297 23.8913 1.91698 24.1078 2.45438 24.1117H14.8075C13.8889 22.9138 13.3939 21.4449 13.4 19.9353C13.4006 18.0935 14.1326 16.3274 15.4349 15.0251C16.7372 13.7227 18.5034 12.9908 20.3451 12.9902C20.4999 12.9902 20.6545 12.9995 20.8082 13.0179V2.55392C20.8086 2.17942 20.7061 1.81201 20.5117 1.49189C20.3174 1.17176 20.0387 0.911274 19.7062 0.738924ZM5.62152 17.9907C5.40174 17.9907 5.1869 17.9255 5.00416 17.8034C4.82142 17.6813 4.67899 17.5077 4.59489 17.3047C4.51078 17.1016 4.48877 16.8782 4.53165 16.6627C4.57453 16.4471 4.68036 16.2491 4.83577 16.0937C4.99118 15.9383 5.18918 15.8325 5.40473 15.7896C5.62029 15.7467 5.84372 15.7687 6.04677 15.8528C6.24982 15.9369 6.42337 16.0793 6.54547 16.2621C6.66757 16.4448 6.73275 16.6597 6.73275 16.8794C6.73309 17.0255 6.70458 17.1701 6.64886 17.3051C6.59313 17.4401 6.51129 17.5627 6.40804 17.666C6.30478 17.7692 6.18215 17.8511 6.04717 17.9068C5.9122 17.9625 5.76755 17.991 5.62152 17.9907ZM5.62152 13.3606C5.40174 13.3606 5.1869 13.2954 5.00416 13.1733C4.82142 13.0512 4.67899 12.8776 4.59489 12.6746C4.51078 12.4715 4.48877 12.2481 4.53165 12.0326C4.57453 11.817 4.68036 11.619 4.83577 11.4636C4.99118 11.3082 5.18918 11.2024 5.40473 11.1595C5.62029 11.1166 5.84372 11.1386 6.04677 11.2227C6.24982 11.3068 6.42337 11.4492 6.54547 11.632C6.66757 11.8147 6.73275 12.0296 6.73275 12.2493C6.73309 12.3954 6.70458 12.54 6.64886 12.675C6.59313 12.81 6.51129 12.9326 6.40804 13.0359C6.30478 13.1391 6.18215 13.221 6.04717 13.2767C5.9122 13.3324 5.76755 13.3609 5.62152 13.3606ZM5.62152 8.54527C5.40266 8.54435 5.18899 8.47856 5.00752 8.3562C4.82605 8.23385 4.68495 8.06043 4.60204 7.85788C4.51913 7.65532 4.49815 7.43274 4.54174 7.21826C4.58534 7.00378 4.69156 6.80705 4.84696 6.65294C5.00237 6.49883 5.19998 6.39426 5.41482 6.35246C5.62965 6.31066 5.85206 6.33351 6.05391 6.41811C6.25576 6.50271 6.42799 6.64526 6.54882 6.82774C6.66965 7.01023 6.73366 7.22445 6.73275 7.44331C6.7315 7.73679 6.61373 8.01775 6.40534 8.22441C6.19695 8.43106 5.915 8.54648 5.62152 8.54527ZM11.548 17.8055H8.9551C8.7095 17.8055 8.47397 17.7079 8.3003 17.5342C8.12664 17.3606 8.02908 17.125 8.02908 16.8794C8.02908 16.6339 8.12664 16.3983 8.3003 16.2247C8.47397 16.051 8.7095 15.9534 8.9551 15.9534H11.548C11.7936 15.9534 12.0291 16.051 12.2027 16.2247C12.3764 16.3983 12.474 16.6339 12.474 16.8794C12.474 17.125 12.3764 17.3606 12.2027 17.5342C12.0291 17.7079 11.7936 17.8055 11.548 17.8055ZM15.8077 13.1754H8.9551C8.7095 13.1754 8.47397 13.0778 8.3003 12.9041C8.12664 12.7305 8.02908 12.4949 8.02908 12.2493C8.02908 12.0038 8.12664 11.7682 8.3003 11.5946C8.47397 11.4209 8.7095 11.3233 8.9551 11.3233H15.8077C16.0533 11.3233 16.2889 11.4209 16.4625 11.5946C16.6362 11.7682 16.7338 12.0038 16.7338 12.2493C16.7338 12.4949 16.6362 12.7305 16.4625 12.9041C16.2889 13.0778 16.0533 13.1754 15.8077 13.1754ZM15.8077 8.36933H8.9551C8.7095 8.36933 8.47397 8.27176 8.3003 8.0981C8.12664 7.92444 8.02908 7.6889 8.02908 7.44331C8.02908 7.19771 8.12664 6.96217 8.3003 6.78851C8.47397 6.61485 8.7095 6.51729 8.9551 6.51729H15.8077C16.0533 6.51729 16.2889 6.61485 16.4625 6.78851C16.6362 6.96217 16.7338 7.19771 16.7338 7.44331C16.7338 7.6889 16.6362 7.92444 16.4625 8.0981C16.2889 8.27176 16.0533 8.36933 15.8077 8.36933Z"
                  fill="white"
                />
                <path
                  d="M20.3451 13.916C19.1546 13.916 17.9909 14.269 17.0011 14.9304C16.0112 15.5918 15.2397 16.5319 14.7842 17.6317C14.3286 18.7316 14.2094 19.9418 14.4416 21.1094C14.6739 22.277 15.2472 23.3495 16.089 24.1913C16.9307 25.0331 18.0032 25.6064 19.1708 25.8386C20.3384 26.0709 21.5487 25.9517 22.6485 25.4961C23.7484 25.0405 24.6885 24.269 25.3498 23.2792C26.0112 22.2894 26.3642 21.1256 26.3642 19.9351C26.3624 18.3393 25.7277 16.8094 24.5992 15.681C23.4708 14.5526 21.9409 13.9179 20.3451 13.916ZM22.1972 20.8612H18.4931C18.2475 20.8612 18.0119 20.7636 17.8383 20.5899C17.6646 20.4163 17.5671 20.1807 17.5671 19.9351C17.5671 19.6895 17.6646 19.454 17.8383 19.2803C18.0119 19.1067 18.2475 19.0091 18.4931 19.0091H22.1972C22.4428 19.0091 22.6783 19.1067 22.852 19.2803C23.0256 19.454 23.1232 19.6895 23.1232 19.9351C23.1232 20.1807 23.0256 20.4163 22.852 20.5899C22.6783 20.7636 22.4428 20.8612 22.1972 20.8612Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">
                13,536 <span className="p-reg text-[#878787]">SAR</span>
              </h2>
              <p className="p-reg text-left text-[#878787]">Total Refunded</p>
            </div>
          </div>
        </div>
      </div>
      {/* Main Row */}
      <div className="flex flex-col items-start gap-[30px] self-stretch">
        <div className="flex flex-col items-start self-stretch">
          {/* Tabs */}
          <BillingTabs />
          <div
            className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-white"
            style={{ borderRadius: "0px 10px 10px 10px" }}
          >
            {/* Filter */}
            <div className="flex items-end gap-5 self-stretch">
              <div
                className="flex flex-col items-start gap-2"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">Search Students</label>
                <input
                  type="text"
                  className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                  style={{ border: "1px solid #DBDADE" }}
                  placeholder="Search here"
                />
              </div>
              <div
                className="flex flex-col items-start gap-2"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">Status</label>
                <select
                  className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
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
                <label className="label text-[#868686]">Date From</label>
                <input
                  type="date"
                  className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                  style={{ border: "1px solid #DBDADE" }}
                />
              </div>
              <div
                className="flex flex-col items-start gap-2"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">Date To</label>
                <input
                  type="date"
                  className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                  style={{ border: "1px solid #DBDADE" }}
                />
              </div>
            </div>
            {/* Data */}
            <div className="flex flex-col items-start gap-5 self-stretch">
              {/* Table */}
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-left rtl:text-right bg-[#FFF] ">
                  <thead
                    className=" bg-[#EBEBEB] text-[#383838]"
                    style={{
                      borderRadius: "10px 10px 0px 0px",
                      border: "0.5px solid #EBEBEB",
                    }}
                  >
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi text-[#383838]"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi text-[#383838]"
                      >
                        Student’s Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi text-[#383838]"
                      >
                        Student ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi text-[#383838]"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi text-[#383838]"
                      >
                        Invoice Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi text-[#383838]"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi text-[#383838]"
                      >
                        Discount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi text-[#383838]"
                      >
                        Tax
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi text-[#383838] text-center"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi text-[#383838] text-center"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                      <td className="px-6 py-4 text-[#383838] p-semi">
                        25/9/2023
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        Abdullah Bilal
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        1055555555
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        Term Plan
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        5483716944
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        100.00 SAR
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        20.00 SAR
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">15%</td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        <div className="flex flex-col items-center gap-2">
                          <div
                            className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                            style={{ background: "rgba(0, 204, 182, 0.10)" }}
                          >
                            <p className="label-semi text-[#00CCB6]">Paid</p>
                          </div>
                        </div>
                      </td>
                      <td className="flex py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
                        <div className="flex flex-col justify-center items-start gap-2">
                          <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                            Actions
                            <img src={actionArrow} alt="action" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                      <td className="px-6 py-4 text-[#383838] p-semi">
                        25/9/2023
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        Abdullah Bilal
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        1055555555
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        Term Plan
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        5483716944
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        100.00 SAR
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        20.00 SAR
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">15%</td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        <div className="flex flex-col items-center gap-2">
                          <div
                            className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                            style={{ background: "rgba(100, 24, 195, 0.10)" }}
                          >
                            <p className="label-semi text-[#6418C3]">Pending</p>
                          </div>
                        </div>
                      </td>
                      <td className="flex py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
                        <div className="flex flex-col justify-center items-start gap-2">
                          <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                            Actions
                            <img src={actionArrow} alt="action" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                      <td className="px-6 py-4 text-[#383838] p-semi">
                        25/9/2023
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        Abdullah Bilal
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        1055555555
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        Term Plan
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        5483716944
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        100.00 SAR
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        20.00 SAR
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">15%</td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        <div className="flex flex-col items-center gap-2">
                          <div
                            className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                            style={{ background: "rgba(255, 74, 85, 0.10)" }}
                          >
                            <p className="label-semi text-[#FF4A55]">
                              Passed..
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="flex py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
                        <div className="flex flex-col justify-center items-start gap-2">
                          <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                            Actions
                            <img src={actionArrow} alt="action" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Footer */}
              <div className="flex justify-between items-center self-stretch">
                <p className="label-reg text-[#6D6D6D]">
                  Showing 4 results from 29 data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingContent;
