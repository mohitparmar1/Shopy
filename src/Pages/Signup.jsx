import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [isEmailValid, setIsEmailValid] = useState(false);
   const [isPasswordValid, setIsPasswordValid] = useState(false);
   const [isEmailFocused, setIsEmailFocused] = useState(false);
   const [isPasswordFocused, setIsPasswordFocused] = useState(false);
   const [isConfirmPasswordValid,setIsConfirmPasswordValid] = useState(false)
   const [isConfirmPasswordFocused,setIsConfirmPasswordFocused]=useState(false)
   const handleSignUp = async (e) => {
     e.preventDefault();
     console.log(email, " ", password," ",confirmPassword);
   };
  const handleClicked = () => {
    navigate("/login");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full m-auto h-screen bg-gradient-to-b from-purple-100 to-white">
      <h1 className="text-5xl mb-5 font-bold">Sign up</h1>
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
            setIsConfirmPasswordFocused(false);
          }}
        />
        <label htmlFor="password">Password</label>
        {isPasswordFocused && !isPasswordValid && (
          <div style={{ color: "red", fontSize: "0.8rem" }}>
            * Password is not valid
          </div>
        )}
        <input
          type="password"
          name="password"
          id="password"
          className="mb-5 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
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
            setIsConfirmPasswordFocused(false);
          }}
        />
        <label htmlFor="password">Confirm Password</label>
        {isConfirmPasswordFocused && !isConfirmPasswordValid && (
          <div style={{ color: "red", fontSize: "0.8rem" }}>
            * Password doesn't match
          </div>
        )}
        <input
          type="password"
          name="confirmpassword"
          id="password"
          className="mb-5 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setIsConfirmPasswordValid(e.target.value === password);
          }}
          onFocus={() => {
            setIsEmailFocused(false);
            setIsPasswordFocused(false);
            setIsConfirmPasswordFocused(true);
          }}
        />
        <button
          type="submit"
          className="border-2 border-gray-200 bg-gray-300 h-12 w-full font-bold rounded-lg"
          disabled={
            !isEmailValid || !isPasswordValid || !isConfirmPasswordValid
          }
          style={
            !isEmailValid || !isPasswordValid || !isConfirmPasswordValid
              ? { cursor: "not-allowed" }
              : { cursor: "pointer", backgroundColor: "#f5c242" }
          }
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <p className="mt-2 text-xs " style={{ fontSize: "0.8rem" }}>
          {"Already have an account?"}
          <span
            className="text-blue-500 cursor-pointer ml-2"
            onClick={handleClicked}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
