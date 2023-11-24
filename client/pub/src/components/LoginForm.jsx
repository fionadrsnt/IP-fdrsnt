import axios from "axios";
import { useState } from "react";
import { url } from "../configs/config";
import LoginPicture from "../assets/login.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

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
      console.log(response, "ini response");
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("id", response.data.id);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  const googleSignIn = async (credentialResponse) => {
    // console.log(credentialResponse);
    try {
      const { data } = await axios({
        url: `${url}/google-sign`,
        method: "post",
        headers: {
          access_token: credentialResponse.credential,
        },
      });
      // console.log(data);
      localStorage.setItem("token", data.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
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
              <button
                className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border 
          hover:border-gray-300"
              >
                {" "}
                Sign In{" "}
              </button>
              <GoogleOAuthProvider clientId="896490483167-4ca9nvvjnf94ikgopmkglc4b1qp5iee7.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={googleSignIn}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
              <div className="text-center text-gray-400">
                or..
                <Link to={"/register"} className="font-bold text-black">
                  Sign up for free
                </Link>
              </div>
            </form>
          </div>
          <div className="relative">
            <img
              src={LoginPicture}
              alt="img"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
