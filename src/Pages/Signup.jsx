import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleClicked = () => {
    navigate("/login");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full m-auto h-screen bg-gradient-to-b from-purple-100 to-white">
      <h1 className="text-2xl ml-0">Sign up</h1>
      <form className="flex flex-col w-4/3 h-1/2 p-10">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="mb-5 py-1 outline-none border-3"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="mb-5 py-1 outline-none "
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          id="password"
          className="mb-5 py-1 outline-none "
        />
        <button type="submit" className="border-2 mt-4 w-full font-bold py-2">
          Login
        </button>
        <p className="mt-5">
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
