import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Swal from "sweetalert2";
import LogoWW from "../assets/WhiskerWonder-cat-logo.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const onClickLogout = async (event) => {
    localStorage.clear();
    navigate("/login");
    Swal.fire({
      text: "Logout Success",
    });
  };
  return (
    <>
      <nav className="p-5 bg-white z-100 shadow md:flex md:items-center md:justify-between ">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <span className="text-2xl font-[Poppins] cursor-pointer">
              <img className="h-10 inline" src={LogoWW} />
              WhiskerWonders
            </span>
          </Link>
          <label
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            name="menu"
          >
            <input
              type="checkbox"
              className="hidden"
              onChange={(e) => {
                console.log(e.target.value);
                setIsOpen((prev) => !prev);
              }}
              value={isOpen}
            />
            <IoMdMenu />
          </label>
        </div>
        <div
          className={`md:flex md:items-center z-[100] md:z-auto md:static h-0 bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
            isOpen ? "opacity-100" : "opacity-0"
          } transition-all ease-in duration-300`}
        >
          <div className="md:mx-4 md:my-6 md:my-0 bg-white md:w-auto w-full md:p-0 p-3">
            <Link to="/" className="text-xl hover: text-gray-800 duration-500">
              Home
            </Link>
          </div>
          <div className="md:mx-4 md:my-6 md:my-0 bg-white md:w-auto w-full md:p-0 p-3 z-99">
            <Link
              to="/faq"
              className="text-xl hover: text-gray-800 duration-500"
            >
              FAQ
            </Link>
          </div>
          <div className="md:mx-4 md:my-6 md:my-0 bg-white md:w-auto w-full md:p-0 p-3 z-99">
            <Link
              to="/tracking"
              className="text-xl hover: text-gray-800 duration-500"
            >
              Track Your Order
            </Link>
          </div>
          <button
            onClick={onClickLogout}
            className="bg-gray-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-gray=500 rounded"
          >
            Sign Out
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
