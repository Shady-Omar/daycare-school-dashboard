import React, { useState } from "react";
import signUpImg from "../Assets/sign-up.svg";
import signUpLogo from "../Assets/signup-logo.svg";
import { useNavigate } from "react-router-dom";
import LangMenu from "../Components/LanguageMenu";
import MobileNavbar from "../Components/MobileNavbar";

function SignUpStepThree() {
  const [selectedCountry, setSelectedCountry] = useState(
    "Select your Daycare country"
  );
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    // Basic validation for username and password
    if (selectedCountry.trim() === "Select your Daycare country") {
      setError("Please Select your Daycare country");
      return;
    }

    setError("");

    console.log("Login successful!");
    navigate("/signup/step-four");
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
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
                <h2 className="h2 text-[#383838]">Country</h2>
                <p className="p-reg text-[#383838]">
                  Select the Country where your center is located
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch gap-[30px]">
              <div
                id="country"
                className="flex flex-col items-start self-stretch gap-4"
              >
                <div className="flex lg:w-[400px] h-[76px] flex-col items-start gap-2 self-stretch">
                  <label className="label text-[#868686]" htmlFor="countries">
                    center country
                  </label>
                  <select
                    id="countries"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                    style={{ border: "1px solid #DBDADE" }}
                  >
                    <option value="Select your Daycare country" disabled>
                      Select your Daycare country
                    </option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch gap-5 w-full h-[50px] text-center">
                <button
                  className="cyan-btn self-stretch"
                  onClick={handleSubmit}
                >
                  Next
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
            </div>
          </div>
          <LangMenu />
        </div>
      </div>
    </>
  );
}

export default SignUpStepThree;
