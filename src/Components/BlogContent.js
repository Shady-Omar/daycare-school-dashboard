import React from "react";

import articlePlaceholder from "../Assets/article-placeholder.png";
import authorPlaceholder from "../Assets/author-placeholder.png";
import articleEye from "../Assets/article-eye.svg";

function BlogContent() {
  return (
    <>
      <div
        className="grid grid-cols-3 p-[30px] items-center content-center self-stretch bg-white"
        style={{ gap: "30px 20px", borderRadius: "0px 10px 10px 10px" }}
      >
        {/* Article Card */}
        <div
          className="flex min-w-[340px] p-[15px] flex-col items-start gap-5 rounded-[10px] bg-white"
          style={{ flex: "1 0 0", border: "1px solid #EBEBEB" }}
        >
          {/* Image */}
          <img
            className="flex h-[170px] justify-center items-start gap-2.5 self-stretch rounded-lg"
            src={articlePlaceholder}
            alt=""
          />
          {/* Title */}
          <div className="flex flex-col items-start gap-2.5 self-stretch text-left">
            <p className="label-reg text-[#878787]">17 November 2023</p>
            <h5 className="h5-bold text-[#383838] !text-[18px]">
              Article Title Lorem Ipsum Dolor Sit Amet Dolore Ipsum
            </h5>
            <p className="p-reg text-[#878787]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          {/* Author */}
          <div
            className="flex pt-[15px] items-center gap-2.5 self-stretch"
            style={{ borderTop: "1px solid #DCDCDC" }}
          >
            {/* Profile */}
            <div className="flex items-center gap-2.5">
              <img
                className="h-[47px] w-[47px]"
                src={authorPlaceholder}
                alt=""
              />
              <div className="flex flex-col justify-center items-start">
                <p className="p-bold text-[#383838]">Abdullah Bilal</p>
                <p className="label-reg text-[#878787]">Author</p>
              </div>
            </div>
            {/* Action */}
            <button
              className="flex justify-end items-center gap-2.5"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex w-7 h-7 justify-center items-center"
                style={{ padding: "6px 2px 5px 2px" }}
              >
                <img src={articleEye} alt="" />
              </div>
            </button>
          </div>
        </div>
        {/* Article Card */}
        <div
          className="flex min-w-[340px] p-[15px] flex-col items-start gap-5 rounded-[10px] bg-white"
          style={{ flex: "1 0 0", border: "1px solid #EBEBEB" }}
        >
          {/* Image */}
          <img
            className="flex h-[170px] justify-center items-start gap-2.5 self-stretch rounded-lg"
            src={articlePlaceholder}
            alt=""
          />
          {/* Title */}
          <div className="flex flex-col items-start gap-2.5 self-stretch text-left">
            <p className="label-reg text-[#878787]">17 November 2023</p>
            <h5 className="h5-bold text-[#383838] !text-[18px]">
              Article Title Lorem Ipsum Dolor Sit Amet Dolore Ipsum
            </h5>
            <p className="p-reg text-[#878787]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          {/* Author */}
          <div
            className="flex pt-[15px] items-center gap-2.5 self-stretch"
            style={{ borderTop: "1px solid #DCDCDC" }}
          >
            {/* Profile */}
            <div className="flex items-center gap-2.5">
              <img
                className="h-[47px] w-[47px]"
                src={authorPlaceholder}
                alt=""
              />
              <div className="flex flex-col justify-center items-start">
                <p className="p-bold text-[#383838]">Abdullah Bilal</p>
                <p className="label-reg text-[#878787]">Author</p>
              </div>
            </div>
            {/* Action */}
            <button
              className="flex justify-end items-center gap-2.5"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex w-7 h-7 justify-center items-center"
                style={{ padding: "6px 2px 5px 2px" }}
              >
                <img src={articleEye} alt="" />
              </div>
            </button>
          </div>
        </div>
        {/* Article Card */}
        <div
          className="flex min-w-[340px] p-[15px] flex-col items-start gap-5 rounded-[10px] bg-white"
          style={{ flex: "1 0 0", border: "1px solid #EBEBEB" }}
        >
          {/* Image */}
          <img
            className="flex h-[170px] justify-center items-start gap-2.5 self-stretch rounded-lg"
            src={articlePlaceholder}
            alt=""
          />
          {/* Title */}
          <div className="flex flex-col items-start gap-2.5 self-stretch text-left">
            <p className="label-reg text-[#878787]">17 November 2023</p>
            <h5 className="h5-bold text-[#383838] !text-[18px]">
              Article Title Lorem Ipsum Dolor Sit Amet Dolore Ipsum
            </h5>
            <p className="p-reg text-[#878787]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          {/* Author */}
          <div
            className="flex pt-[15px] items-center gap-2.5 self-stretch"
            style={{ borderTop: "1px solid #DCDCDC" }}
          >
            {/* Profile */}
            <div className="flex items-center gap-2.5">
              <img
                className="h-[47px] w-[47px]"
                src={authorPlaceholder}
                alt=""
              />
              <div className="flex flex-col justify-center items-start">
                <p className="p-bold text-[#383838]">Abdullah Bilal</p>
                <p className="label-reg text-[#878787]">Author</p>
              </div>
            </div>
            {/* Action */}
            <button
              className="flex justify-end items-center gap-2.5"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex w-7 h-7 justify-center items-center"
                style={{ padding: "6px 2px 5px 2px" }}
              >
                <img src={articleEye} alt="" />
              </div>
            </button>
          </div>
        </div>
        {/* Article Card */}
        <div
          className="flex min-w-[340px] p-[15px] flex-col items-start gap-5 rounded-[10px] bg-white"
          style={{ flex: "1 0 0", border: "1px solid #EBEBEB" }}
        >
          {/* Image */}
          <img
            className="flex h-[170px] justify-center items-start gap-2.5 self-stretch rounded-lg"
            src={articlePlaceholder}
            alt=""
          />
          {/* Title */}
          <div className="flex flex-col items-start gap-2.5 self-stretch text-left">
            <p className="label-reg text-[#878787]">17 November 2023</p>
            <h5 className="h5-bold text-[#383838] !text-[18px]">
              Article Title Lorem Ipsum Dolor Sit Amet Dolore Ipsum
            </h5>
            <p className="p-reg text-[#878787]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          {/* Author */}
          <div
            className="flex pt-[15px] items-center gap-2.5 self-stretch"
            style={{ borderTop: "1px solid #DCDCDC" }}
          >
            {/* Profile */}
            <div className="flex items-center gap-2.5">
              <img
                className="h-[47px] w-[47px]"
                src={authorPlaceholder}
                alt=""
              />
              <div className="flex flex-col justify-center items-start">
                <p className="p-bold text-[#383838]">Abdullah Bilal</p>
                <p className="label-reg text-[#878787]">Author</p>
              </div>
            </div>
            {/* Action */}
            <button
              className="flex justify-end items-center gap-2.5"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex w-7 h-7 justify-center items-center"
                style={{ padding: "6px 2px 5px 2px" }}
              >
                <img src={articleEye} alt="" />
              </div>
            </button>
          </div>
        </div>
        {/* Article Card */}
        <div
          className="flex min-w-[340px] p-[15px] flex-col items-start gap-5 rounded-[10px] bg-white"
          style={{ flex: "1 0 0", border: "1px solid #EBEBEB" }}
        >
          {/* Image */}
          <img
            className="flex h-[170px] justify-center items-start gap-2.5 self-stretch rounded-lg"
            src={articlePlaceholder}
            alt=""
          />
          {/* Title */}
          <div className="flex flex-col items-start gap-2.5 self-stretch text-left">
            <p className="label-reg text-[#878787]">17 November 2023</p>
            <h5 className="h5-bold text-[#383838] !text-[18px]">
              Article Title Lorem Ipsum Dolor Sit Amet Dolore Ipsum
            </h5>
            <p className="p-reg text-[#878787]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          {/* Author */}
          <div
            className="flex pt-[15px] items-center gap-2.5 self-stretch"
            style={{ borderTop: "1px solid #DCDCDC" }}
          >
            {/* Profile */}
            <div className="flex items-center gap-2.5">
              <img
                className="h-[47px] w-[47px]"
                src={authorPlaceholder}
                alt=""
              />
              <div className="flex flex-col justify-center items-start">
                <p className="p-bold text-[#383838]">Abdullah Bilal</p>
                <p className="label-reg text-[#878787]">Author</p>
              </div>
            </div>
            {/* Action */}
            <button
              className="flex justify-end items-center gap-2.5"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex w-7 h-7 justify-center items-center"
                style={{ padding: "6px 2px 5px 2px" }}
              >
                <img src={articleEye} alt="" />
              </div>
            </button>
          </div>
        </div>
        {/* Article Card */}
        <div
          className="flex min-w-[340px] p-[15px] flex-col items-start gap-5 rounded-[10px] bg-white"
          style={{ flex: "1 0 0", border: "1px solid #EBEBEB" }}
        >
          {/* Image */}
          <img
            className="flex h-[170px] justify-center items-start gap-2.5 self-stretch rounded-lg"
            src={articlePlaceholder}
            alt=""
          />
          {/* Title */}
          <div className="flex flex-col items-start gap-2.5 self-stretch text-left">
            <p className="label-reg text-[#878787]">17 November 2023</p>
            <h5 className="h5-bold text-[#383838] !text-[18px]">
              Article Title Lorem Ipsum Dolor Sit Amet Dolore Ipsum
            </h5>
            <p className="p-reg text-[#878787]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          {/* Author */}
          <div
            className="flex pt-[15px] items-center gap-2.5 self-stretch"
            style={{ borderTop: "1px solid #DCDCDC" }}
          >
            {/* Profile */}
            <div className="flex items-center gap-2.5">
              <img
                className="h-[47px] w-[47px]"
                src={authorPlaceholder}
                alt=""
              />
              <div className="flex flex-col justify-center items-start">
                <p className="p-bold text-[#383838]">Abdullah Bilal</p>
                <p className="label-reg text-[#878787]">Author</p>
              </div>
            </div>
            {/* Action */}
            <button
              className="flex justify-end items-center gap-2.5"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex w-7 h-7 justify-center items-center"
                style={{ padding: "6px 2px 5px 2px" }}
              >
                <img src={articleEye} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="flex p-[30px] justify-between items-center self-stretch">
        <p className="label-reg text-[#6D6D6D]">
          Showing 6 results from 29 data
        </p>
      </div>
    </>
  );
}

export default BlogContent;
