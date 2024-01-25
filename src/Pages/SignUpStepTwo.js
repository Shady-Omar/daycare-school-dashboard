import React, { useState } from "react";
import signUpImg from "../Assets/sign-up.svg";
import signUpLogo from "../Assets/signup-logo.svg";
import { useNavigate } from "react-router-dom";
import LangMenu from "../Components/LanguageMenu";
import MobileNavbar from "../Components/MobileNavbar";

function SignUpStepTwo() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (index < 3 && value !== "") {
      // Move to the next input field automatically
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  const handleKeyDown = (index, e) => {
    // Allow only numeric values (0-9) and backspace
    const isNumber = /^[0-9]$/g.test(e.key);
    const isBackspace = e.key === "Backspace";

    if (!isNumber && !isBackspace) {
      e.preventDefault();
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    // Convert the array of OTP digits into a string
    const enteredOtp = otp.join("");

    // Replace 'expectedOtp' with the actual OTP value you expect
    const expectedOtp = "1234"; // Replace with your actual OTP value

    if (enteredOtp === "") {
      setError("OTP Code is required");
      return;
    }

    if (enteredOtp === expectedOtp) {
      // Verification successful, navigate to the next step
      navigate("/signup/step-three");
      setError("");
    } else {
      // Verification failed, you can display an error message or take other actions
      console.log("Verification failed. Please check your OTP Code.");
      setError("Verification failed. Please check your OTP Code.");
      return;
    }

    setError("");
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
                <h2 className="h2 text-[#383838]">OTP Verification</h2>
                <p className="p-reg text-[#383838]">
                  Sent a verification code to verify your mobile number.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch gap-5">
              <div
                id="otp"
                className="flex flex-col items-start self-stretch gap-4"
              >
                <div className="flex lg:w-[400px] h-[76px] flex-col items-start gap-2 self-stretch">
                  <div className="flex space-x-2">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        className="w-full outline-none border-[1px] text-[#868686] border-[#DBDADE] rounded-[10px] h-[50px] p-5 text-center"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        maxLength="1"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch gap-5 w-full h-[50px] text-center">
                <button
                  className="cyan-btn self-stretch"
                  onClick={handleSubmit}
                >
                  Verify
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <p className="p-reg text-[#878787] w-full">
                  Didn’t get the code?{" "}
                  <span className="text-[#00CCB6] cursor-pointer">Resend</span>
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

export default SignUpStepTwo;
