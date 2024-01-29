import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SchoolTitle from "../../SchoolTitle";

import ArticlesTabs from "./ArticlesTabs";
import plusIcon from "../../../Assets/circle-plus-icon.svg";

function ArticlesContent() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      {/* Title */}
      <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-0 justify-between items-center self-stretch">
        <SchoolTitle />
        {/* Conditionally render the button based on the current path */}
        {currentPath === "/articles/blog" || currentPath === "/articles" ? (
          <Link
            to="/articles/new"
            className="cyan-btn flex justify-center items-center gap-3 self-stretch"
          >
            <img src={plusIcon} alt="" />
            Add New Article
          </Link>
        ) : (
          ""
        )}
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-start gap-[30px] self-stretch">
        <div className="flex flex-col items-start self-stretch">
          {/* Tabs */}
          {currentPath === "/articles/blog" || currentPath === "/articles" ? (
            <ArticlesTabs />
          ) : (
            ""
          )}

          {/* Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ArticlesContent;
