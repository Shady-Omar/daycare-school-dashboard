import React, { useState } from "react";
import signUpImg from "../Assets/sign-up.svg";
import signUpLogo from "../Assets/signup-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import LangMenu from "../Components/LanguageMenu";
import MobileNavbar from "../Components/MobileNavbar";

function SignUpStepOne() {
  const [phone, setPhone] = useState("");
  const [idNum, setIdNum] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Login Form Submit Handler:
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    // Basic validation for username and password
    if (phone.trim() === "") {
      setError("Phone Number is required");
      return;
    }

    if (idNum.trim() === "") {
      setError("ID Number is required");
      return;
    }

    if (date.trim() === "") {
      setError("Date of Birth is required");
      return;
    }

    // Additional validation logic can be added here if needed

    // If both username and password are valid, you can proceed with your login logic
    // For example, you can make an API call or perform authentication checks

    // Reset error state
    setError("");

    // Your login logic goes here
    console.log("Login successful!");
    navigate("/signup/step-two");
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
              <div className="flex flex-col items-start gap-[5px] self-stretch">
                <h2 className="h2-med text-[#383838]">Welcome to Daycare</h2>
                <p className="p-reg lg:hidden text-[#383838]">
                  Please sign in to your account
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch gap-[30px]">
              <div
                id="phone-input"
                className="flex flex-col items-start self-stretch gap-4"
              >
                <div className="flex lg:w-[400px] h-[76px] flex-col items-start gap-2 self-stretch">
                  <label className="label text-[#868686]" htmlFor="phone">
                    enter phone number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Phone Number"
                    className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
                  />
                </div>
              </div>
              <div
                id="id-input"
                className="flex flex-col items-start self-stretch gap-4"
              >
                <div className="flex lg:w-[400px] h-[76px] flex-col items-start gap-2 self-stretch">
                  <label className="label text-[#868686]" htmlFor="id-number">
                    ID Number
                  </label>
                  <input
                    id="id-number"
                    type="text"
                    value={idNum}
                    onChange={(e) => setIdNum(e.target.value)}
                    placeholder="Enter Your ID Number"
                    className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
                  />
                </div>
              </div>
              <div
                id="birth-date"
                className="flex flex-col items-start self-stretch gap-4"
              >
                <div className="flex lg:w-[400px] h-[76px] flex-col items-start gap-2 self-stretch">
                  <label className="label text-[#868686]" htmlFor="date">
                    Date of Birth
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Enter Your Name"
                    className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch gap-5 w-full h-[50px] text-center">
                <button
                  className="cyan-btn self-stretch"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <p className="p-reg text-[#878787] w-full">
                  Already have an account?{" "}
                  <Link to={"/"} className="text-[#00CCB6] cursor-pointer">
                    Log in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <LangMenu />
        </div>
      </div>
    </>
  );
}

export default SignUpStepOne;
