import React, { useState } from "react";
import signUpImg from "../Assets/sign-up.svg";
import signUpLogo from "../Assets/signup-logo.svg";
import showEye from "../Assets/eye-icon.svg";
import HideEye from "../Assets/eye-icon-2.svg";
import { Link, useNavigate } from "react-router-dom";
import LangMenu from "../Components/LanguageMenu";
import MobileNavbar from "../Components/MobileNavbar";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Show password Visibility:
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Remember Me Checkbox:
  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  // Login Form Submit Handler:
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    // Basic validation for username and password
    if (username.trim() === "") {
      setError("Username is required");
      return;
    }

    if (password.trim() === "") {
      setError("Password is required");
      return;
    }

    // Additional validation logic can be added here if needed

    // If both username and password are valid, you can proceed with your login logic
    // For example, you can make an API call or perform authentication checks

    // Reset error state
    setError("");

    // Your login logic goes here
    console.log("Login successful!");
    navigate("/signup/step-one");
  };

  return (
    <>
      <MobileNavbar />
      <div className=" w-full flex flex-row items-center h-screen gap-[15px] mb-5 lg:mb-0 lg:p-5">
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
                <p className="p-reg text-[#383838]">
                  Please sign in to your account
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
                    className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] px-5 self-stretch"
                  />
                </div>
              </div>
              <div
                id="password-input"
                className="flex flex-col items-start self-stretch gap-4 relative"
              >
                <div className="flex lg:w-[400px] h-[76px] flex-col items-start gap-2 self-stretch">
                  <div className="flex flex-row justify-between items-center self-stretch">
                    <label className="label text-[#868686]" htmlFor="password">
                      password
                    </label>
                    <Link
                      to={"/signup/forgot-password"}
                      className="label text-[#00CCB6]"
                    >
                      Forgot Password
                    </Link>
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    className="w-full outline-none border-[1px] border-[#DBDADE] rounded-[10px] h-[50px] p-5"
                  />
                </div>

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
                <div className="flex flex-row items-center gap-2.5 justify-center">
                  <input
                    className="w-[18px] h-[18px] text-[#646464] rounded"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                  />
                  <label className="text-[#646464]">Remember Me</label>
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch gap-5 text-center">
                <button
                  className="cyan-btn self-stretch"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <p className="p-reg text-[#878787] w-full">
                  New on our platform?{" "}
                  <Link
                    to={"/signup/step-one"}
                    className="text-[#00CCB6] cursor-pointer"
                  >
                    Create an account
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

export default SignIn;
