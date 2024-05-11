import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleClicked = () => {
    navigate("/login");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full m-auto h-screen bg-gradient-to-b from-purple-100 to-white">
      <h1 className="text-5xl mb-5 font-bold">Sign up</h1>
      <form className="flex flex-col w-96 h-3/5">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="mb-5 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="mb-5 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          id="password"
          className="mb-5 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
        />
        <button type="submit" className="border-2 border-gray-200 bg-gray-300 h-12 w-full font-bold rounded-lg">
          Sign Up
        </button>
        <p className="mt-2 text-xs ">
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
