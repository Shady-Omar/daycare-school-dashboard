import React, { useState } from "react";
import signUpImg from "../Assets/sign-up.svg";
import signUpLogo from "../Assets/signup-logo.svg";
import showEye from "../Assets/eye-icon.svg";
import HideEye from "../Assets/eye-icon-2.svg";
import greenCheck from "../Assets/green-check.svg";
import { Link, useNavigate } from "react-router-dom";
import LangMenu from "../Components/LanguageMenu";
import MobileNavbar from "../Components/MobileNavbar";

function SignUpStepFour() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    // Email validation
    if (email.trim() === "") {
      setError("Email is required");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return;
    }

    // Password validation
    if (password.trim() === "") {
      setError("Password is required");
      return;
    } else if (password.length < 8 || password.length > 20) {
      setError("Password must be between 8 and 20 characters");
      return;
    }

    // Confirm Password validation
    if (confirmPassword.trim() === "") {
      setError("Confirm Password is required");
      return;
    } else if (confirmPassword !== password) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      // Perform signup logic here
      // You can use the state values (email, password, confirmPassword) to send a request to your server
      // Example: api.signup({ email, password });
    }
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
                <h2 className="h2 text-[#383838]">Admin Info</h2>
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch gap-[30px]">
              <div
                id="email-input"
                className="flex flex-col items-start self-stretch gap-4"
              >
                <div className="flex lg:w-[400px] h-[76px] flex-col items-start gap-2 self-stretch">
                  <label className="label text-[#868686]" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                    className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
                  />
                </div>
              </div>
              <div
                id="password-input"
                className="flex flex-col items-start self-stretch gap-4 relative"
              >
                <div className="flex lg:w-[400px] h-[76px] flex-col items-start gap-2 self-stretch">
                  <label className="label text-[#868686]" htmlFor="password">
                    password
                  </label>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
                  />
                  <span
                    className="absolute "
                    style={{
                      cursor: "pointer",
                      right: "5%",
                      top: "44.625px",
                    }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <img
                        className="max-w-[15px] max-h-[15px]"
                        src={showEye}
                        alt="show password"
                      />
                    ) : (
                      <img
                        className="max-w-[15px] max-h-[15px]"
                        src={HideEye}
                        alt="hide password"
                      />
                    )}
                  </span>
                </div>
              </div>
              <div
                id="confirm-password-input"
                className="flex flex-col items-start self-stretch gap-4 relative"
              >
                <div className="flex lg:w-[400px] h-[76px] flex-col items-start gap-2 self-stretch">
                  <label
                    className="label text-[#868686]"
                    htmlFor="confirm-password"
                  >
                    confirm password
                  </label>
                  <input
                    id="confirm-password"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Your Password"
                    className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
                  />
                  <span
                    className="absolute "
                    style={{
                      cursor: "pointer",
                      right: "5%",
                      top: "44.625px",
                    }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <img
                        className="max-w-[15px] max-h-[15px]"
                        src={showEye}
                        alt="show password"
                      />
                    ) : (
                      <img
                        className="max-w-[15px] max-h-[15px]"
                        src={HideEye}
                        alt="hide password"
                      />
                    )}
                  </span>
                </div>
              </div>

              <div className="flex flex-col w-full gap-3">
                <p className="pass-req text-[#979DA3]">
                  YOUR PASSWORD MUST CONTAIN
                </p>
                <div className="flex flex-col w-full gap-3">
                  <p className="flex flex-row reqs">
                    <img src={greenCheck} alt="" />
                    Between 8 and 20 characters
                  </p>
                  <p className="flex flex-row reqs">
                    <img src={greenCheck} alt="" />1 upper case letter
                  </p>
                  <p className="flex flex-row reqs">
                    <img src={greenCheck} alt="" />1 or more numbers
                  </p>
                  <p className="flex flex-row reqs">
                    <img src={greenCheck} alt="" />1 or more special characters
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch gap-5 w-full h-[50px] text-center">
                <button
                  onClick={handleSubmit}
                  className="cyan-btn self-stretch"
                >
                  Sign Up
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <p className="p-reg text-[#878787] w-full">
                  Already have an account?{" "}
                  <Link to="/" className="text-[#00CCB6] cursor-pointer">
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

export default SignUpStepFour;
