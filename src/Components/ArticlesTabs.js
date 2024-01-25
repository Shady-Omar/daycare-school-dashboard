import React from "react";
import { Link, useLocation } from "react-router-dom";

function ArticlesTabs() {
  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  return (
    <div className="flex items-start gap-2.5 self-stretch">
      <Link
        to="/articles/blog"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/articles/blog" || currentPath === "/articles"
            ? "bg-[#FFF]"
            : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/articles/blog" || currentPath === "/articles"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Active Blog
        </h5>
      </Link>
      <Link
        to="/articles/pending"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/articles/pending" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/articles/pending"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Pending Blog
        </h5>
      </Link>
    </div>
  );
}

export default ArticlesTabs;
