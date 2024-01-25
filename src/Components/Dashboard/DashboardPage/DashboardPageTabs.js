import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Transition } from "@headlessui/react";

function DashboardPageTabs() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  return (
    <>
      <div
        className="hidden lg:flex items-start gap-[30px] self-stretch"
        style={{ borderBottom: "1px solid #DCDCDC" }}
      >
        <Link
          to="/dashboard/overview"
          className={`flex items-center gap-2.5 cursor-pointer ${
            currentPath === "/dashboard/overview" ||
            currentPath === "/dashboard"
              ? "border-b-[3px] border-b-[#00CCB6]"
              : ""
          }`}
          style={{
            padding: "0px 10px 15px 10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M21.9865 22.4059V7.03037C21.9865 7.00332 21.9865 6.97873 21.984 6.95414C21.9469 6.37876 21.6107 5.82796 21.0716 5.58699C20.7798 5.45421 20.4856 5.4247 20.174 5.4247H18.1959C18.1959 5.17881 18.1959 4.90096 18.191 4.64032V4.59851C18.1836 4.43131 18.1242 4.2764 18.0055 4.15591C17.9239 4.07477 17.8349 4.02559 17.7385 4.001C17.7236 3.99608 17.7088 3.99363 17.694 3.99117C17.6643 3.98625 17.6322 3.97641 17.6025 3.97641C17.6 3.97641 17.5975 3.97641 17.5975 3.97395C17.5975 3.9715 17.5951 3.96904 17.5951 3.96658C17.5852 3.95674 17.5728 3.97641 17.5629 3.95182H15.4735C15.4686 3.82888 15.4562 3.67643 15.429 3.53381C15.3128 2.95351 14.885 2.42731 14.346 2.18388C13.7748 1.92815 13.1393 1.93799 12.5805 2.22076C12.1083 2.45927 11.7472 2.90433 11.6014 3.40595C11.5494 3.58545 11.5296 3.7797 11.5247 3.95182H10.2018C9.9521 3.95182 9.69741 3.95428 9.44768 3.96166C9.08172 3.97395 8.80726 4.24935 8.79737 4.61081C8.7949 4.69195 8.78995 4.78047 8.78995 4.86408V5.43208C8.07288 5.43208 7.35087 5.42962 6.62885 5.43208C5.73375 5.437 5.01421 6.14516 5.00185 7.03774C4.99937 7.15577 5.00679 7.27134 5.00679 7.38936V22.5559C5.00679 23.0919 4.9425 23.6845 5.20955 24.1714C5.50874 24.7148 6.08734 25 6.69314 25H19.8229C19.9985 25 20.1765 24.9926 20.3521 24.9926C21.1137 24.9902 21.8307 24.464 21.9642 23.6968C22.0285 23.2788 21.9865 22.8263 21.9865 22.4059ZM12.7932 3.89773C12.7932 3.88543 12.7956 3.8756 12.7956 3.8633C12.7981 3.84117 12.8006 3.81904 12.8055 3.79691L12.813 3.76741C12.813 3.76495 12.8154 3.76249 12.8154 3.76003C12.8179 3.75511 12.813 3.75019 12.813 3.74282C12.8154 3.73544 12.813 3.72806 12.813 3.72069H12.8204C12.8204 3.71823 12.8253 3.71577 12.8253 3.71331C12.8253 3.71085 12.8278 3.71085 12.8278 3.70839C12.8303 3.70347 12.8303 3.69856 12.8327 3.6961C12.8352 3.68872 12.8377 3.6838 12.8402 3.67643C12.8402 3.67397 12.8402 3.67397 12.8426 3.67397C12.8426 3.67151 12.8377 3.67151 12.8377 3.66905C12.8402 3.66413 12.8352 3.66167 12.8352 3.65921C12.8352 3.65676 12.8426 3.65676 12.8426 3.65676C12.8451 3.6543 12.8476 3.65184 12.85 3.64692C12.85 3.64446 12.8525 3.64446 12.855 3.642C12.855 3.642 12.855 3.63954 12.8575 3.63954C12.8575 3.63708 12.8599 3.63708 12.8599 3.63708C12.8624 3.63463 12.8624 3.62971 12.8649 3.62725C12.8649 3.62725 12.8649 3.62479 12.8674 3.62479C12.8698 3.62233 12.8698 3.61741 12.8723 3.61495C12.8748 3.6125 12.8748 3.61004 12.8772 3.60758C12.8797 3.60266 12.8847 3.59528 12.8871 3.59037L12.8946 3.57561L12.9094 3.55348C12.9143 3.54365 12.9218 3.53381 12.9292 3.52643C12.9366 3.51906 12.9415 3.50922 12.949 3.50185L12.9514 3.49939C12.9588 3.49201 12.9638 3.48217 12.9712 3.4748C12.9786 3.46496 12.9885 3.45759 12.9959 3.44775C13.0751 3.36906 13.1665 3.31743 13.2679 3.283C13.2729 3.28054 13.2753 3.28054 13.2803 3.27809C13.2852 3.27809 13.2877 3.27563 13.2927 3.27563H13.2951C13.3124 3.27071 13.3322 3.26825 13.3495 3.26333C13.3545 3.26333 13.3569 3.26825 13.3619 3.26579C13.4014 3.25596 13.4435 3.26087 13.4855 3.26087C13.5226 3.26087 13.5597 3.25841 13.5918 3.26579C13.6017 3.26825 13.6116 3.26087 13.619 3.26087C13.6215 3.26087 13.6265 3.26579 13.6289 3.26825C13.6339 3.27071 13.6388 3.26087 13.6438 3.28546C13.6883 3.28546 13.7303 3.30267 13.7723 3.31989C13.7773 3.32235 13.7822 3.32235 13.7872 3.32235C13.8589 3.35431 13.9257 3.39611 13.9801 3.45267L13.9974 3.46988C14.0072 3.47972 14.0147 3.48955 14.0246 3.49939C14.0938 3.58299 14.1383 3.67889 14.163 3.78462C14.168 3.79937 14.1729 3.81413 14.1754 3.83134C14.1779 3.84363 14.1803 3.85593 14.1828 3.87068C14.1828 3.87314 14.1902 3.8756 14.1902 3.87806C14.1902 3.88297 14.1976 3.88543 14.1976 3.89035V3.93707C14.1976 3.94445 14.1927 3.95182 14.1927 3.9592C14.1927 3.96658 14.1902 3.97149 14.1902 3.97887C14.1902 3.98625 14.1878 3.99117 14.1878 3.99854C14.1878 4.001 14.1853 4.00346 14.1853 4.00346V4.00838C14.1853 4.0133 14.1828 4.01821 14.1828 4.02313C14.1803 4.03543 14.1779 4.04526 14.1754 4.05756C14.1729 4.06247 14.1729 4.06739 14.1704 4.07231C14.168 4.0846 14.163 4.09444 14.1606 4.10428C14.1581 4.11411 14.1556 4.12149 14.1531 4.13132C14.1507 4.13624 14.1507 4.14362 14.1482 4.14854C14.1482 4.15099 14.1482 4.15345 14.1457 4.15591C14.1457 4.15837 14.1482 4.16083 14.1457 4.16329V4.17312C14.1457 4.1805 14.1358 4.18788 14.1334 4.1928C14.1334 4.19525 14.1309 4.19771 14.1284 4.19771L14.121 4.21247C14.116 4.2223 14.1111 4.2346 14.1062 4.24443C14.1012 4.25427 14.0963 4.2641 14.0888 4.27394C14.0864 4.27886 14.0839 4.28132 14.0814 4.28623C14.074 4.30099 14.0641 4.31328 14.0542 4.32804C14.0518 4.33295 14.0468 4.33787 14.0419 4.34279C14.0295 4.36 14.0122 4.37475 13.9974 4.38951C13.9875 4.4018 13.9875 4.4141 13.9627 4.42639H13.9677C13.9677 4.43623 13.9504 4.4436 13.9405 4.45344C13.9306 4.46082 13.9232 4.46819 13.9133 4.47557L13.9108 4.47803C13.9009 4.4854 13.891 4.49278 13.8787 4.50016C13.8762 4.50262 13.8713 4.50508 13.8688 4.50753C13.8638 4.51245 13.8564 4.51491 13.8515 4.51983C13.8317 4.53212 13.8094 4.54442 13.7872 4.55425C13.7822 4.55671 13.7773 4.55917 13.7699 4.56163C13.7649 4.56409 13.76 4.56655 13.7526 4.56901H13.7476C13.7451 4.56901 13.7427 4.57147 13.7402 4.57147C13.7377 4.57147 13.7353 4.57393 13.7328 4.57393C13.7278 4.57638 13.7204 4.57884 13.7155 4.5813C13.7105 4.58376 13.7031 4.58622 13.6957 4.58868C13.6908 4.59114 13.6858 4.59114 13.6809 4.5936C13.6166 4.61573 13.5449 4.62556 13.4732 4.6231H13.4311C13.4262 4.6231 13.4212 4.6231 13.4163 4.62064H13.4064C13.4039 4.62064 13.399 4.62064 13.3965 4.61819C13.3916 4.61819 13.3891 4.61819 13.3841 4.61573C13.3767 4.61573 13.3718 4.61327 13.3644 4.61327C13.3594 4.61327 13.3545 4.61081 13.352 4.61081C13.3273 4.60589 13.3025 4.60097 13.2803 4.5936C13.2729 4.59114 13.2679 4.58376 13.2605 4.5813C13.2506 4.57884 13.2432 4.56655 13.2333 4.56655L13.2308 4.57147C13.2284 4.57147 13.2259 4.57393 13.2234 4.57393V4.57638H13.2209C13.2185 4.57393 13.216 4.57393 13.2111 4.57393C13.2086 4.57393 13.2086 4.57147 13.2061 4.57147C13.2036 4.57147 13.2036 4.56901 13.2012 4.56901C13.1987 4.56901 13.1962 4.56655 13.1937 4.56655C13.1888 4.56409 13.1863 4.56409 13.1814 4.56163C13.1764 4.55917 13.1715 4.55671 13.169 4.55425C13.1665 4.5518 13.1641 4.5518 13.1591 4.54934C13.1567 4.54688 13.1542 4.54688 13.1492 4.54442C13.1443 4.54196 13.1418 4.5395 13.1369 4.53704C13.1344 4.53458 13.1319 4.53458 13.1295 4.53212C13.1245 4.52966 13.1196 4.52721 13.1171 4.52475C13.1146 4.52229 13.1121 4.52229 13.1097 4.51983C13.1072 4.51983 13.1047 4.51737 13.1047 4.51737C13.1023 4.51737 13.1023 4.51491 13.0998 4.51491L13.0973 4.51245C13.0973 4.51245 13.0948 4.51245 13.0948 4.50999C13.0899 4.50754 13.0874 4.50508 13.0825 4.50262C13.08 4.50016 13.0775 4.50016 13.0751 4.4977C13.0602 4.48786 13.0429 4.47557 13.0281 4.46327C13.0182 4.4559 13.0108 4.44852 13.0034 4.44114L12.9935 4.43131C12.991 4.42885 12.986 4.42639 12.9836 4.42147L12.9786 4.41656L12.9737 4.41164L12.9613 4.39934L12.9588 4.39688L12.9564 4.39443L12.9539 4.39197L12.9514 4.38951L12.944 4.38213C12.9415 4.37721 12.9366 4.37475 12.9341 4.36984C12.9267 4.36246 12.9193 4.35262 12.9143 4.34279C12.9094 4.33541 12.902 4.32804 12.897 4.32066C12.8822 4.30099 12.8698 4.28132 12.8599 4.25919C12.855 4.25181 12.85 4.24197 12.8476 4.2346C12.8451 4.23214 12.8426 4.22722 12.8426 4.2223C12.8402 4.21493 12.8352 4.21001 12.8327 4.20263C12.8278 4.1928 12.8253 4.18296 12.8204 4.17312C12.8179 4.17067 12.8179 4.16575 12.8154 4.16329C12.813 4.15345 12.808 4.14608 12.8055 4.13624C12.8031 4.13132 12.8006 4.12395 12.8006 4.11903C12.8006 4.11657 12.7981 4.11411 12.7981 4.10919C12.7956 4.10428 12.7956 4.09936 12.7956 4.09444C12.7932 4.08952 12.7932 4.0846 12.7932 4.07969C12.7907 4.07477 12.7907 4.06739 12.7882 4.06247C12.7858 4.0551 12.7858 4.04772 12.7833 4.04034C12.7808 4.02805 12.7808 4.01821 12.7783 4.00592V4.001C12.7783 3.99854 12.7759 3.99608 12.7759 3.99363C12.7759 3.98379 12.7709 3.97641 12.7709 3.96658C12.7709 3.95428 12.7734 3.94445 12.7734 3.93215C12.7907 3.91986 12.7932 3.90756 12.7932 3.89773ZM10.4911 20.3748H8.24349C7.81573 20.3748 7.49675 20.0355 7.47944 19.6248C7.45966 19.2142 7.8454 18.8749 8.24349 18.8749H10.4911C10.9189 18.8749 11.2379 19.2142 11.2552 19.6248C11.275 20.0355 10.8917 20.3748 10.4911 20.3748ZM19.0317 18.9314L18.641 19.3199C18.0847 19.8757 17.5258 20.4289 16.9695 20.9846L15.9161 22.0321C15.6244 22.3223 15.1274 22.3223 14.8356 22.0321C14.3584 21.5575 13.8811 21.083 13.4014 20.6084C13.0998 20.3084 13.122 19.8388 13.4014 19.5339C13.6809 19.2314 14.2001 19.256 14.482 19.5363L15.3746 20.424C15.8815 19.9175 16.3909 19.4085 16.8978 18.9044L17.9511 17.8569C18.2528 17.5569 18.7275 17.579 19.0317 17.8569C19.3358 18.1323 19.316 18.6487 19.0317 18.9314ZM18.7424 15.7668C18.7374 15.7668 18.73 15.7718 18.7251 15.7718C18.2998 15.7816 17.872 15.7791 17.4442 15.7791H8.24349C7.81573 15.7791 7.49675 15.425 7.47944 15.0144C7.45966 14.6038 7.8454 14.2497 8.24349 14.2497C8.24844 14.2497 8.25586 14.2522 8.2608 14.2522C8.6861 14.2423 9.11387 14.2546 9.54164 14.2546H18.7449C19.1726 14.2546 19.4916 14.5989 19.5089 15.012C19.5262 15.4201 19.143 15.7668 18.7424 15.7668ZM18.7424 11.1343C18.7374 11.1343 18.73 11.1318 18.7251 11.1318C18.2998 11.1392 17.872 11.1293 17.4442 11.1293H8.24349C7.81573 11.1293 7.49675 10.7826 7.47944 10.372C7.45966 9.96137 7.8454 9.61221 8.24349 9.61221C8.24844 9.61221 8.25586 9.60975 8.2608 9.60975C8.6861 9.59992 9.11387 9.60483 9.54164 9.60483H18.7449C19.1726 9.60483 19.4916 9.95646 19.5089 10.3696C19.5262 10.7802 19.143 11.1343 18.7424 11.1343Z"
              fill={`${
                currentPath === "/dashboard/overview" ||
                currentPath === "/dashboard"
                  ? "#00CCB6"
                  : "#A4A4A4"
              }`}
            />
          </svg>
          <h5
            className={`${
              currentPath === "/dashboard/overview" ||
              currentPath === "/dashboard"
                ? "h5-semi text-[#383838]"
                : "h5-med text-[#878787]"
            }`}
          >
            Overview
          </h5>
        </Link>
        <Link
          to="/dashboard/center"
          className={`flex items-center gap-2.5 cursor-pointer ${
            currentPath === "/dashboard/center"
              ? "border-b-[3px] border-b-[#00CCB6]"
              : ""
          }`}
          style={{
            padding: "0px 10px 15px 10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.8333 19H13.1667V23.6667H10.8333V19Z"
              fill={`${
                currentPath === "/dashboard/center" ? "#00CCB6" : "#A4A4A4"
              }`}
            />
            <path
              d="M19 3.04023L12 0.240234L5 3.04023V7.33357H0.333328V23.6669H8.5V16.6669H15.5V23.6669H23.6667V7.33357H19V3.04023ZM6.16666 19.0002H3.83333V16.6669H6.16666V19.0002ZM6.16666 14.3336H3.83333V12.0002H6.16666V14.3336ZM10.8333 14.3336H8.5V12.0002H10.8333V14.3336ZM10.8333 5.00023H13.1667V9.6669H10.8333V5.00023ZM15.5 14.3336H13.1667V12.0002H15.5V14.3336ZM20.1667 19.0002H17.8333V16.6669H20.1667V19.0002ZM20.1667 12.0002V14.3336H17.8333V12.0002H20.1667Z"
              fill={`${
                currentPath === "/dashboard/center" ? "#00CCB6" : "#A4A4A4"
              }`}
            />
          </svg>
          <h5
            className={`${
              currentPath === "/dashboard/center"
                ? "h5-semi text-[#383838]"
                : "h5-med text-[#878787]"
            }`}
          >
            Center
          </h5>
        </Link>
        <Link
          to="/dashboard/financial"
          className={`flex items-center gap-2.5 cursor-pointer ${
            currentPath === "/dashboard/financial"
              ? "border-b-[3px] border-b-[#00CCB6]"
              : ""
          }`}
          style={{
            padding: "0px 10px 15px 10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M20.8182 3H6.18182C5.9313 3.00288 5.69015 3.09563 5.50227 3.26134C6.24783 3.52363 6.90378 3.99181 7.39412 4.61162C7.88445 5.23144 8.18909 5.9775 8.27273 6.76336C8.28871 6.90228 8.28871 7.04258 8.27273 7.18151V24.9529C8.27223 25.1529 8.32909 25.3488 8.43657 25.5174C8.54404 25.686 8.69762 25.8202 8.87909 25.9042C9.06099 25.9879 9.2631 26.0177 9.46141 25.9899C9.65972 25.9621 9.84587 25.8779 9.99773 25.7474L12.9773 23.1967L15.9568 25.7474C16.1462 25.9094 16.3872 25.9984 16.6364 25.9984C16.8855 25.9984 17.1265 25.9094 17.3159 25.7474L20.2955 23.1967L23.275 25.7474C23.4644 25.9093 23.7054 25.9983 23.9545 25.9983C24.1058 25.9972 24.2552 25.9652 24.3936 25.9042C24.5751 25.8202 24.7287 25.686 24.8362 25.5174C24.9436 25.3488 25.0005 25.1529 25 24.9529V7.18151C25 6.0725 24.5594 5.00892 23.7752 4.22474C22.9909 3.44055 21.9273 3 20.8182 3ZM19.7727 17.6353H13.5C13.2227 17.6353 12.9568 17.5251 12.7608 17.3291C12.5647 17.133 12.4545 16.8672 12.4545 16.5899C12.4545 16.3126 12.5647 16.0468 12.7608 15.8507C12.9568 15.6547 13.2227 15.5445 13.5 15.5445H19.7727C20.05 15.5445 20.3159 15.6547 20.512 15.8507C20.708 16.0468 20.8182 16.3126 20.8182 16.5899C20.8182 16.8672 20.708 17.133 20.512 17.3291C20.3159 17.5251 20.05 17.6353 19.7727 17.6353ZM19.7727 13.4538H13.5C13.2227 13.4538 12.9568 13.3436 12.7608 13.1476C12.5647 12.9515 12.4545 12.6856 12.4545 12.4084C12.4545 12.1311 12.5647 11.8652 12.7608 11.6692C12.9568 11.4732 13.2227 11.363 13.5 11.363H19.7727C20.05 11.363 20.3159 11.4732 20.512 11.6692C20.708 11.8652 20.8182 12.1311 20.8182 12.4084C20.8182 12.6856 20.708 12.9515 20.512 13.1476C20.3159 13.3436 20.05 13.4538 19.7727 13.4538ZM19.7727 9.27226H13.5C13.2227 9.27226 12.9568 9.16212 12.7608 8.96608C12.5647 8.77003 12.4545 8.50414 12.4545 8.22688C12.4545 7.94963 12.5647 7.68374 12.7608 7.48769C12.9568 7.29165 13.2227 7.18151 13.5 7.18151H19.7727C20.05 7.18151 20.3159 7.29165 20.512 7.48769C20.708 7.68374 20.8182 7.94963 20.8182 8.22688C20.8182 8.50414 20.708 8.77003 20.512 8.96608C20.3159 9.16212 20.05 9.27226 19.7727 9.27226ZM6.18182 7.18151V15.5445H3.04545C2.76818 15.5445 2.50227 15.4344 2.30621 15.2383C2.11015 15.0423 2 14.7764 2 14.4991V7.18151C2 7.03516 2 6.89926 2 6.76336C2.05545 6.20885 2.32893 5.69909 2.76026 5.34621C3.1916 4.99332 3.74546 4.82623 4.3 4.88168C4.85454 4.93713 5.36434 5.21058 5.71725 5.64189C6.07016 6.07319 6.23727 6.62701 6.18182 7.18151Z"
              fill={`${
                currentPath === "/dashboard/financial" ? "#00CCB6" : "#A4A4A4"
              }`}
            />
          </svg>
          <h5
            className={`${
              currentPath === "/dashboard/financial"
                ? "h5-semi text-[#383838]"
                : "h5-med text-[#878787]"
            }`}
          >
            Financial
          </h5>
        </Link>
      </div>
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
            <div className="flex items-center gap-[11px]">
              {currentPath === "/dashboard/overview" ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M21.9865 22.4059V7.03037C21.9865 7.00332 21.9865 6.97873 21.984 6.95414C21.9469 6.37876 21.6107 5.82796 21.0716 5.58699C20.7798 5.45421 20.4856 5.4247 20.174 5.4247H18.1959C18.1959 5.17881 18.1959 4.90096 18.191 4.64032V4.59851C18.1836 4.43131 18.1242 4.2764 18.0055 4.15591C17.9239 4.07477 17.8349 4.02559 17.7385 4.001C17.7236 3.99608 17.7088 3.99363 17.694 3.99117C17.6643 3.98625 17.6322 3.97641 17.6025 3.97641C17.6 3.97641 17.5975 3.97641 17.5975 3.97395C17.5975 3.9715 17.5951 3.96904 17.5951 3.96658C17.5852 3.95674 17.5728 3.97641 17.5629 3.95182H15.4735C15.4686 3.82888 15.4562 3.67643 15.429 3.53381C15.3128 2.95351 14.885 2.42731 14.346 2.18388C13.7748 1.92815 13.1393 1.93799 12.5805 2.22076C12.1083 2.45927 11.7472 2.90433 11.6014 3.40595C11.5494 3.58545 11.5296 3.7797 11.5247 3.95182H10.2018C9.9521 3.95182 9.69741 3.95428 9.44768 3.96166C9.08172 3.97395 8.80726 4.24935 8.79737 4.61081C8.7949 4.69195 8.78995 4.78047 8.78995 4.86408V5.43208C8.07288 5.43208 7.35087 5.42962 6.62885 5.43208C5.73375 5.437 5.01421 6.14516 5.00185 7.03774C4.99937 7.15577 5.00679 7.27134 5.00679 7.38936V22.5559C5.00679 23.0919 4.9425 23.6845 5.20955 24.1714C5.50874 24.7148 6.08734 25 6.69314 25H19.8229C19.9985 25 20.1765 24.9926 20.3521 24.9926C21.1137 24.9902 21.8307 24.464 21.9642 23.6968C22.0285 23.2788 21.9865 22.8263 21.9865 22.4059ZM12.7932 3.89773C12.7932 3.88543 12.7956 3.8756 12.7956 3.8633C12.7981 3.84117 12.8006 3.81904 12.8055 3.79691L12.813 3.76741C12.813 3.76495 12.8154 3.76249 12.8154 3.76003C12.8179 3.75511 12.813 3.75019 12.813 3.74282C12.8154 3.73544 12.813 3.72806 12.813 3.72069H12.8204C12.8204 3.71823 12.8253 3.71577 12.8253 3.71331C12.8253 3.71085 12.8278 3.71085 12.8278 3.70839C12.8303 3.70347 12.8303 3.69856 12.8327 3.6961C12.8352 3.68872 12.8377 3.6838 12.8402 3.67643C12.8402 3.67397 12.8402 3.67397 12.8426 3.67397C12.8426 3.67151 12.8377 3.67151 12.8377 3.66905C12.8402 3.66413 12.8352 3.66167 12.8352 3.65921C12.8352 3.65676 12.8426 3.65676 12.8426 3.65676C12.8451 3.6543 12.8476 3.65184 12.85 3.64692C12.85 3.64446 12.8525 3.64446 12.855 3.642C12.855 3.642 12.855 3.63954 12.8575 3.63954C12.8575 3.63708 12.8599 3.63708 12.8599 3.63708C12.8624 3.63463 12.8624 3.62971 12.8649 3.62725C12.8649 3.62725 12.8649 3.62479 12.8674 3.62479C12.8698 3.62233 12.8698 3.61741 12.8723 3.61495C12.8748 3.6125 12.8748 3.61004 12.8772 3.60758C12.8797 3.60266 12.8847 3.59528 12.8871 3.59037L12.8946 3.57561L12.9094 3.55348C12.9143 3.54365 12.9218 3.53381 12.9292 3.52643C12.9366 3.51906 12.9415 3.50922 12.949 3.50185L12.9514 3.49939C12.9588 3.49201 12.9638 3.48217 12.9712 3.4748C12.9786 3.46496 12.9885 3.45759 12.9959 3.44775C13.0751 3.36906 13.1665 3.31743 13.2679 3.283C13.2729 3.28054 13.2753 3.28054 13.2803 3.27809C13.2852 3.27809 13.2877 3.27563 13.2927 3.27563H13.2951C13.3124 3.27071 13.3322 3.26825 13.3495 3.26333C13.3545 3.26333 13.3569 3.26825 13.3619 3.26579C13.4014 3.25596 13.4435 3.26087 13.4855 3.26087C13.5226 3.26087 13.5597 3.25841 13.5918 3.26579C13.6017 3.26825 13.6116 3.26087 13.619 3.26087C13.6215 3.26087 13.6265 3.26579 13.6289 3.26825C13.6339 3.27071 13.6388 3.26087 13.6438 3.28546C13.6883 3.28546 13.7303 3.30267 13.7723 3.31989C13.7773 3.32235 13.7822 3.32235 13.7872 3.32235C13.8589 3.35431 13.9257 3.39611 13.9801 3.45267L13.9974 3.46988C14.0072 3.47972 14.0147 3.48955 14.0246 3.49939C14.0938 3.58299 14.1383 3.67889 14.163 3.78462C14.168 3.79937 14.1729 3.81413 14.1754 3.83134C14.1779 3.84363 14.1803 3.85593 14.1828 3.87068C14.1828 3.87314 14.1902 3.8756 14.1902 3.87806C14.1902 3.88297 14.1976 3.88543 14.1976 3.89035V3.93707C14.1976 3.94445 14.1927 3.95182 14.1927 3.9592C14.1927 3.96658 14.1902 3.97149 14.1902 3.97887C14.1902 3.98625 14.1878 3.99117 14.1878 3.99854C14.1878 4.001 14.1853 4.00346 14.1853 4.00346V4.00838C14.1853 4.0133 14.1828 4.01821 14.1828 4.02313C14.1803 4.03543 14.1779 4.04526 14.1754 4.05756C14.1729 4.06247 14.1729 4.06739 14.1704 4.07231C14.168 4.0846 14.163 4.09444 14.1606 4.10428C14.1581 4.11411 14.1556 4.12149 14.1531 4.13132C14.1507 4.13624 14.1507 4.14362 14.1482 4.14854C14.1482 4.15099 14.1482 4.15345 14.1457 4.15591C14.1457 4.15837 14.1482 4.16083 14.1457 4.16329V4.17312C14.1457 4.1805 14.1358 4.18788 14.1334 4.1928C14.1334 4.19525 14.1309 4.19771 14.1284 4.19771L14.121 4.21247C14.116 4.2223 14.1111 4.2346 14.1062 4.24443C14.1012 4.25427 14.0963 4.2641 14.0888 4.27394C14.0864 4.27886 14.0839 4.28132 14.0814 4.28623C14.074 4.30099 14.0641 4.31328 14.0542 4.32804C14.0518 4.33295 14.0468 4.33787 14.0419 4.34279C14.0295 4.36 14.0122 4.37475 13.9974 4.38951C13.9875 4.4018 13.9875 4.4141 13.9627 4.42639H13.9677C13.9677 4.43623 13.9504 4.4436 13.9405 4.45344C13.9306 4.46082 13.9232 4.46819 13.9133 4.47557L13.9108 4.47803C13.9009 4.4854 13.891 4.49278 13.8787 4.50016C13.8762 4.50262 13.8713 4.50508 13.8688 4.50753C13.8638 4.51245 13.8564 4.51491 13.8515 4.51983C13.8317 4.53212 13.8094 4.54442 13.7872 4.55425C13.7822 4.55671 13.7773 4.55917 13.7699 4.56163C13.7649 4.56409 13.76 4.56655 13.7526 4.56901H13.7476C13.7451 4.56901 13.7427 4.57147 13.7402 4.57147C13.7377 4.57147 13.7353 4.57393 13.7328 4.57393C13.7278 4.57638 13.7204 4.57884 13.7155 4.5813C13.7105 4.58376 13.7031 4.58622 13.6957 4.58868C13.6908 4.59114 13.6858 4.59114 13.6809 4.5936C13.6166 4.61573 13.5449 4.62556 13.4732 4.6231H13.4311C13.4262 4.6231 13.4212 4.6231 13.4163 4.62064H13.4064C13.4039 4.62064 13.399 4.62064 13.3965 4.61819C13.3916 4.61819 13.3891 4.61819 13.3841 4.61573C13.3767 4.61573 13.3718 4.61327 13.3644 4.61327C13.3594 4.61327 13.3545 4.61081 13.352 4.61081C13.3273 4.60589 13.3025 4.60097 13.2803 4.5936C13.2729 4.59114 13.2679 4.58376 13.2605 4.5813C13.2506 4.57884 13.2432 4.56655 13.2333 4.56655L13.2308 4.57147C13.2284 4.57147 13.2259 4.57393 13.2234 4.57393V4.57638H13.2209C13.2185 4.57393 13.216 4.57393 13.2111 4.57393C13.2086 4.57393 13.2086 4.57147 13.2061 4.57147C13.2036 4.57147 13.2036 4.56901 13.2012 4.56901C13.1987 4.56901 13.1962 4.56655 13.1937 4.56655C13.1888 4.56409 13.1863 4.56409 13.1814 4.56163C13.1764 4.55917 13.1715 4.55671 13.169 4.55425C13.1665 4.5518 13.1641 4.5518 13.1591 4.54934C13.1567 4.54688 13.1542 4.54688 13.1492 4.54442C13.1443 4.54196 13.1418 4.5395 13.1369 4.53704C13.1344 4.53458 13.1319 4.53458 13.1295 4.53212C13.1245 4.52966 13.1196 4.52721 13.1171 4.52475C13.1146 4.52229 13.1121 4.52229 13.1097 4.51983C13.1072 4.51983 13.1047 4.51737 13.1047 4.51737C13.1023 4.51737 13.1023 4.51491 13.0998 4.51491L13.0973 4.51245C13.0973 4.51245 13.0948 4.51245 13.0948 4.50999C13.0899 4.50754 13.0874 4.50508 13.0825 4.50262C13.08 4.50016 13.0775 4.50016 13.0751 4.4977C13.0602 4.48786 13.0429 4.47557 13.0281 4.46327C13.0182 4.4559 13.0108 4.44852 13.0034 4.44114L12.9935 4.43131C12.991 4.42885 12.986 4.42639 12.9836 4.42147L12.9786 4.41656L12.9737 4.41164L12.9613 4.39934L12.9588 4.39688L12.9564 4.39443L12.9539 4.39197L12.9514 4.38951L12.944 4.38213C12.9415 4.37721 12.9366 4.37475 12.9341 4.36984C12.9267 4.36246 12.9193 4.35262 12.9143 4.34279C12.9094 4.33541 12.902 4.32804 12.897 4.32066C12.8822 4.30099 12.8698 4.28132 12.8599 4.25919C12.855 4.25181 12.85 4.24197 12.8476 4.2346C12.8451 4.23214 12.8426 4.22722 12.8426 4.2223C12.8402 4.21493 12.8352 4.21001 12.8327 4.20263C12.8278 4.1928 12.8253 4.18296 12.8204 4.17312C12.8179 4.17067 12.8179 4.16575 12.8154 4.16329C12.813 4.15345 12.808 4.14608 12.8055 4.13624C12.8031 4.13132 12.8006 4.12395 12.8006 4.11903C12.8006 4.11657 12.7981 4.11411 12.7981 4.10919C12.7956 4.10428 12.7956 4.09936 12.7956 4.09444C12.7932 4.08952 12.7932 4.0846 12.7932 4.07969C12.7907 4.07477 12.7907 4.06739 12.7882 4.06247C12.7858 4.0551 12.7858 4.04772 12.7833 4.04034C12.7808 4.02805 12.7808 4.01821 12.7783 4.00592V4.001C12.7783 3.99854 12.7759 3.99608 12.7759 3.99363C12.7759 3.98379 12.7709 3.97641 12.7709 3.96658C12.7709 3.95428 12.7734 3.94445 12.7734 3.93215C12.7907 3.91986 12.7932 3.90756 12.7932 3.89773ZM10.4911 20.3748H8.24349C7.81573 20.3748 7.49675 20.0355 7.47944 19.6248C7.45966 19.2142 7.8454 18.8749 8.24349 18.8749H10.4911C10.9189 18.8749 11.2379 19.2142 11.2552 19.6248C11.275 20.0355 10.8917 20.3748 10.4911 20.3748ZM19.0317 18.9314L18.641 19.3199C18.0847 19.8757 17.5258 20.4289 16.9695 20.9846L15.9161 22.0321C15.6244 22.3223 15.1274 22.3223 14.8356 22.0321C14.3584 21.5575 13.8811 21.083 13.4014 20.6084C13.0998 20.3084 13.122 19.8388 13.4014 19.5339C13.6809 19.2314 14.2001 19.256 14.482 19.5363L15.3746 20.424C15.8815 19.9175 16.3909 19.4085 16.8978 18.9044L17.9511 17.8569C18.2528 17.5569 18.7275 17.579 19.0317 17.8569C19.3358 18.1323 19.316 18.6487 19.0317 18.9314ZM18.7424 15.7668C18.7374 15.7668 18.73 15.7718 18.7251 15.7718C18.2998 15.7816 17.872 15.7791 17.4442 15.7791H8.24349C7.81573 15.7791 7.49675 15.425 7.47944 15.0144C7.45966 14.6038 7.8454 14.2497 8.24349 14.2497C8.24844 14.2497 8.25586 14.2522 8.2608 14.2522C8.6861 14.2423 9.11387 14.2546 9.54164 14.2546H18.7449C19.1726 14.2546 19.4916 14.5989 19.5089 15.012C19.5262 15.4201 19.143 15.7668 18.7424 15.7668ZM18.7424 11.1343C18.7374 11.1343 18.73 11.1318 18.7251 11.1318C18.2998 11.1392 17.872 11.1293 17.4442 11.1293H8.24349C7.81573 11.1293 7.49675 10.7826 7.47944 10.372C7.45966 9.96137 7.8454 9.61221 8.24349 9.61221C8.24844 9.61221 8.25586 9.60975 8.2608 9.60975C8.6861 9.59992 9.11387 9.60483 9.54164 9.60483H18.7449C19.1726 9.60483 19.4916 9.95646 19.5089 10.3696C19.5262 10.7802 19.143 11.1343 18.7424 11.1343Z"
                      fill="#00CCB6"
                    />
                  </svg>
                  <h5 className="h5-semi text-[#383838]">Overview</h5>
                </>
              ) : currentPath === "/dashboard/center" ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10.8333 19H13.1667V23.6667H10.8333V19Z"
                      fill="#00CCB6"
                    />
                    <path
                      d="M19 3.04023L12 0.240234L5 3.04023V7.33357H0.333328V23.6669H8.5V16.6669H15.5V23.6669H23.6667V7.33357H19V3.04023ZM6.16666 19.0002H3.83333V16.6669H6.16666V19.0002ZM6.16666 14.3336H3.83333V12.0002H6.16666V14.3336ZM10.8333 14.3336H8.5V12.0002H10.8333V14.3336ZM10.8333 5.00023H13.1667V9.6669H10.8333V5.00023ZM15.5 14.3336H13.1667V12.0002H15.5V14.3336ZM20.1667 19.0002H17.8333V16.6669H20.1667V19.0002ZM20.1667 12.0002V14.3336H17.8333V12.0002H20.1667Z"
                      fill="#00CCB6"
                    />
                  </svg>
                  <h5 className="h5-semi text-[#383838]">Center</h5>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M20.8182 3H6.18182C5.9313 3.00288 5.69015 3.09563 5.50227 3.26134C6.24783 3.52363 6.90378 3.99181 7.39412 4.61162C7.88445 5.23144 8.18909 5.9775 8.27273 6.76336C8.28871 6.90228 8.28871 7.04258 8.27273 7.18151V24.9529C8.27223 25.1529 8.32909 25.3488 8.43657 25.5174C8.54404 25.686 8.69762 25.8202 8.87909 25.9042C9.06099 25.9879 9.2631 26.0177 9.46141 25.9899C9.65972 25.9621 9.84587 25.8779 9.99773 25.7474L12.9773 23.1967L15.9568 25.7474C16.1462 25.9094 16.3872 25.9984 16.6364 25.9984C16.8855 25.9984 17.1265 25.9094 17.3159 25.7474L20.2955 23.1967L23.275 25.7474C23.4644 25.9093 23.7054 25.9983 23.9545 25.9983C24.1058 25.9972 24.2552 25.9652 24.3936 25.9042C24.5751 25.8202 24.7287 25.686 24.8362 25.5174C24.9436 25.3488 25.0005 25.1529 25 24.9529V7.18151C25 6.0725 24.5594 5.00892 23.7752 4.22474C22.9909 3.44055 21.9273 3 20.8182 3ZM19.7727 17.6353H13.5C13.2227 17.6353 12.9568 17.5251 12.7608 17.3291C12.5647 17.133 12.4545 16.8672 12.4545 16.5899C12.4545 16.3126 12.5647 16.0468 12.7608 15.8507C12.9568 15.6547 13.2227 15.5445 13.5 15.5445H19.7727C20.05 15.5445 20.3159 15.6547 20.512 15.8507C20.708 16.0468 20.8182 16.3126 20.8182 16.5899C20.8182 16.8672 20.708 17.133 20.512 17.3291C20.3159 17.5251 20.05 17.6353 19.7727 17.6353ZM19.7727 13.4538H13.5C13.2227 13.4538 12.9568 13.3436 12.7608 13.1476C12.5647 12.9515 12.4545 12.6856 12.4545 12.4084C12.4545 12.1311 12.5647 11.8652 12.7608 11.6692C12.9568 11.4732 13.2227 11.363 13.5 11.363H19.7727C20.05 11.363 20.3159 11.4732 20.512 11.6692C20.708 11.8652 20.8182 12.1311 20.8182 12.4084C20.8182 12.6856 20.708 12.9515 20.512 13.1476C20.3159 13.3436 20.05 13.4538 19.7727 13.4538ZM19.7727 9.27226H13.5C13.2227 9.27226 12.9568 9.16212 12.7608 8.96608C12.5647 8.77003 12.4545 8.50414 12.4545 8.22688C12.4545 7.94963 12.5647 7.68374 12.7608 7.48769C12.9568 7.29165 13.2227 7.18151 13.5 7.18151H19.7727C20.05 7.18151 20.3159 7.29165 20.512 7.48769C20.708 7.68374 20.8182 7.94963 20.8182 8.22688C20.8182 8.50414 20.708 8.77003 20.512 8.96608C20.3159 9.16212 20.05 9.27226 19.7727 9.27226ZM6.18182 7.18151V15.5445H3.04545C2.76818 15.5445 2.50227 15.4344 2.30621 15.2383C2.11015 15.0423 2 14.7764 2 14.4991V7.18151C2 7.03516 2 6.89926 2 6.76336C2.05545 6.20885 2.32893 5.69909 2.76026 5.34621C3.1916 4.99332 3.74546 4.82623 4.3 4.88168C4.85454 4.93713 5.36434 5.21058 5.71725 5.64189C6.07016 6.07319 6.23727 6.62701 6.18182 7.18151Z"
                      fill="#00CCB6"
                    />
                  </svg>
                  <h5 className="h5-semi text-[#383838]">Financial</h5>
                </>
              )}
            </div>
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
                <Link
                  to="/dashboard/overview"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Overview
                </Link>
                <Link
                  to="/dashboard/center"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Center
                </Link>
                <Link
                  to="/dashboard/financial"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Financial
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </>
  );
}

export default DashboardPageTabs;