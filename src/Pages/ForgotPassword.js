import React, { useState } from "react";
import signUpImg from "../Assets/sign-up.svg";
import signUpLogo from "../Assets/signup-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import LangMenu from "../Components/LanguageMenu";
import MobileNavbar from "../Components/MobileNavbar";

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    // Basic validation for username and password
    if (username.trim() === "") {
      setError("Username is required");
      return;
    }
    // Reset error state
    setError("");

    navigate("/");
  };

  return (
    <>
      <MobileNavbar />

      <div className="w-full flex flex-row items-center h-screen gap-[15px] mb-5 lg:mb-0 lg:p-5">
        <img
          className="w-[700px] p-[10px] hidden lg:flex flex-col gap-2.5 self-stretch shrink-0"
          src={signUpImg}
          alt="signup"
        />
        <div className="w-[390px] lg:w-[700px] flex flex-col justify-center items-center self-stretch text-left gap-2.5 relative">
          <div className="flex px-[30px] lg:p-0 flex-col lg:w-[400px] items-start gap-[30px] self-stretch lg:self-auto">
            <div
              id="heading"
              className="flex flex-col items-start gap-5 self-stretch"
            >
              <div className="hidden lg:block">
                <img src={signUpLogo} alt="signup" />
              </div>
              <div>
                <h2 className="h2 text-[#383838]">Forgot Password</h2>
                <p className="p-reg text-[#383838]">
                  Enter the email address or phone number you use to sign in.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch gap-[30px]">
              <div
                id="username-input"
                className="flex flex-col items-start self-stretch gap-4"
              >
                <div className="flex lg:w-[400px] h-[76px] flex-col items-start gap-2 self-stretch">
                  <label className="label text-[#868686]" htmlFor="username">
                    Username (Email or Phone Number)
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Your Username"
                    className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch gap-5 w-full h-[50px] text-center">
                <button
                  onClick={handleSubmit}
                  className="cyan-btn self-stretch"
                >
                  Request Reset
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Link
                  to={"/"}
                  className="p-reg text-[#00CCB6] cursor-pointer w-full"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>
          </div>
          <LangMenu />
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
