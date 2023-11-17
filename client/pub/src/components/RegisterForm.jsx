import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";
import Swal from "sweetalert2";
import { url } from "../configs/config";
import RegistPicture from "../assets/Register.jpeg";
import GoogleLogo from "../assets/google.svg";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [inputRegister, setInputRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const formOnSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${url}/register`, inputRegister, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      navigate("/");
      Swal.fire({
        text: "User added successfully",
      });
    } catch (err) {
      console.log(err);
      Toastify({
        text: err.response.data.message,
        className: "info",
        style: {
          background: "linear-gradient(to right, #F3EEEA, #B0A695)",
        },
      }).showToast();
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={formOnSubmitHandler}>
          <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="mb-3 text-4xl font-bold">Welcome!</span>
              <span className="font-light text-gray-400 mb-8">
                Please fill out your information details
              </span>
              <div className="py-4">
                <span className="mb-2 text-md">Full Name</span>
                <input
                  value={inputRegister.fullName}
                  onChange={(event) => {
                    setInputRegister({
                      ...inputRegister,
                      fullName: event.target.value,
                    });
                  }}
                  autoComplete="off"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="fullName"
                  id="fullName"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                  value={inputRegister.email}
                  onChange={(event) => {
                    setInputRegister({
                      ...inputRegister,
                      email: event.target.value,
                    });
                  }}
                  autoComplete="off"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="email"
                  id="email"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text md">Password</span>
                <input
                  value={inputRegister.password}
                  onChange={(event) => {
                    setInputRegister({
                      ...inputRegister,
                      password: event.target.value,
                    });
                  }}
                  autoComplete="off"
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded-mb placeholder: font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Address</span>
                <input
                  value={inputRegister.address}
                  onChange={(event) => {
                    setInputRegister({
                      ...inputRegister,
                      address: event.target.value,
                    });
                  }}
                  autoComplete="off"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="address"
                  id="address"
                />
              </div>
              <div className="flex justify-between w-full py-4">
                {/* <div class="mr-24">
                  <input type="checkbox" name="ch" id="ch" class="mr-2"/>
                  <span class="text-md"> Remember for 30 days</span>
              </div>
              <span class="font-bold text-md">Forgot Password</span> */}
              </div>
              <button
                className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border 
              hover:border-gray-300"
              >
                Sign Up
              </button>
              <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
                <img
                  src={GoogleLogo}
                  alt="img"
                  className="w-6 h-6 inline mr-2"
                />{" "}
                Sign in with Google
              </button>
              {/* <div class="text-center text-gray-400">
                  Don't have an account?
                  <span class="font-bold text-black">Sign up for free</span>
              </div> */}
            </div>
            <div className="relative">
              <img
                src={RegistPicture}
                alt="img"
                className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
              />
              {/* text on image
          <div class="absolite hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:black">
              <span class="text-white text-xl">Let's adopt new pets here!</span>
          </div> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default RegisterForm;
