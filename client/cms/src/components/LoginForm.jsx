import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { url } from "../config/config";

const FormUntukLogin = () => {
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
    // console.log(email, password);

    try {
      // kirim ke backend
      //   post /login
      //   JSON {email, password}
      const response = await axios.post(`${url}/login`, {
        email,
        password,
      });
      // console.log(
      //   response.data.access_token,
      //   "<<<<<<<< response email password"
      // );

      // simpan di local storage
      localStorage.setItem("token", response.data.access_token);
      // pindahin ke halaman lain
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      {/* <!-- login --> */}
      <div className="bg-[#B0A695] flex items-center justify-center h-screen text-center">
        <form
          onSubmit={formOnSubmitHandler}
          action=""
          className="bg-gray-100 flex flex-col w-full max-w-lg p-12 rounded shadow-lg"
        >
          <h1 className="text-3xl font-semibold"> Sign In here</h1>
          <label htmlFor="email" className="self-start text-xs font-semibold">
            Email
          </label>
          <input
            onChange={inputEmailOnChangeHandler}
            id="email"
            type="text"
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri "
          />
          <label
            htmlFor="password"
            className="self-start mt-3 text-xs font-semibold"
          >
            Password
          </label>
          <input
            onChange={inputPasswordOnChangeHandler}
            id="password"
            type="password"
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri"
          />
          <div className="flex flex-col justify-center mt-6 space-x-2 text-xs">
            <a
              rel="noopener noreferrer"
              href="#"
              className="dark:text-gray-400 font-bold py-4 px-4 rounded-full"
            >
              Forgot Password?
            </a>
            <button
              type="submit"
              className="bg-[#B0A695] hover:bg-[#776B5D] text-white font-bold py-2 px-4 rounded-full py-2"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUntukLogin;
