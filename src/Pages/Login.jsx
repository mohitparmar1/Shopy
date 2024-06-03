import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from '../assets/google.png'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const backend_url = import.meta.env.VITE_BACKEND_URL;
const Login = () => {
  const [active, setActive] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const handleGoogleLogin = (credentialResponse) => {
    const credential = jwtDecode(credentialResponse.credential);
    const googleEmail = credential.email;
    const googlePassword = googleEmail.split("@")[0];

    // Set email and password states from Google login
    setEmail(googleEmail);
    setPassword(googlePassword);

    // Call handleLogin with email and password
    handleLogin(googleEmail, googlePassword,true);
  };
  const handleLogin = async (email,password,isGoogleAuth) => {
    try {
      const response = await axios.post(
        `${backend_url}/login`,
        {
          email: email,
          password: password,
          authType:isGoogleAuth
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.message === "Login Successfully") {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        throw new Error(response.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full m-auto h-screen bg-gradient-to-b from-purple-100 to-white">
        <h1 className="text-5xl mb-5 font-bold">Login</h1>
        <form className="flex flex-col w-96 h-3/5">
          <label htmlFor="username">Email</label>
          {isEmailFocused && !isEmailValid && (
            <div style={{ color: "red", fontSize: "0.8rem" }}>
              * Email is not valid
            </div>
          )}
          <input
            type="text"
            name="username"
            id="username"
            className="mb-5 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEmailValid(
                e.target.value.trim().length > 0 &&
                  e.target.value.trim().includes("@") &&
                  e.target.value.trim().includes(".")
              );
            }}
            onFocus={() => {
              setIsEmailFocused(true);
              setIsPasswordFocused(false);
            }}
          />
          <label htmlFor="password">Password</label>
          {isPasswordFocused && !isPasswordValid && (
            <div style={{ color: "red", fontSize: "0.8rem" }}>
              * Password is not valid
            </div>
          )}
          <div
            className="rela2"
            type={isPasswordVisible ? "text" : "password"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              height: "max-content",
              position: "relative",
            }}
          >
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              id="password"
              className="mb-2 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg "
              onChange={(e) => {
                setPassword(e.target.value);
                setIsPasswordValid(
                  e.target.value.trim().length > 0 &&
                    e.target.value.trim().length >= 8
                );
              }}
              onFocus={() => {
                setIsEmailFocused(false);
                setIsPasswordFocused(true);
              }}
            />
            <div
              className="p-2"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {!isPasswordVisible ? (
                <IoEyeOffOutline color="black" size={20} />
              ) : (
                <IoEyeOutline color="black" size={20} />
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={!isEmailValid || !isPasswordValid}
            style={
              !isEmailValid || !isPasswordValid
                ? { cursor: "not-allowed" }
                : { cursor: "pointer", backgroundColor: "#f5c242" }
            }
            className="border-2 border-gray-200 bg-gray-300 h-12 w-full font-bold rounded-lg"
            onClick={(e)=>{
              e.preventDefault();
              handleLogin(email,password,false)
            }}
          >
            Login
          </button>
          <p className="mt-2 text-xs " style={{ fontSize: "0.8rem" }}>
            {"Don't have an account?"}
            <span
              className="text-blue-500 cursor-pointer ml-2"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <GoogleLogin
              type="submit"
              onSuccess={handleGoogleLogin}
              onError={() => {
                toast.error("Google Login Failed");
              }}
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
