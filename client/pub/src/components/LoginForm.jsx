import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { url } from "../configs/config";
import LoginPicture from "../assets/login.jpeg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const inputEmailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const inputPasswordOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const formOnSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.access_token);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Welcome Back</span>
            <span className="font-light text-gray-400 mb-8">
              Welcome Back! Plase enter your details
            </span>
            <form onSubmit={formOnSubmitHandler}>
              <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                  onChange={inputEmailOnChangeHandler}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="email"
                  id="email"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text md">Password</span>
                <input
                  onChange={inputPasswordOnChangeHandler}
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded-mb placeholder: font-light placeholder:text-gray-500"
                />
              </div>
              {/* <div className="flex justify-between w-full py-4">
                <div className="mr-24">
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className="text-md"> Remember for 30 days</span>
                </div>
                <span className="font-bold text-md">Forgot Password</span>
              </div> */}
              <button
                className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border 
          hover:border-gray-300"
              >
                {" "}
                Sign In{" "}
              </button>

              <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
                <img
                  src="google.svg"
                  alt="img"
                  className="w-6 h-6 inline mr-2"
                />{" "}
                Sign in with Google
              </button>

              <div className="text-center text-gray-400">
                Don't have an account?
                <span className="font-bold text-black">Sign up for free</span>
              </div>
            </form>
          </div>
          <div className="relative">
            <img
              src={LoginPicture}
              alt="img"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
            {/* text on image
          <div class="absolite hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:black">
              <span class="text-white text-xl">Let's adopt new pets here!</span>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
