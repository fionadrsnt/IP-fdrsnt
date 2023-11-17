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
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between ">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <img className="h-10 inline" src={LogoWW} />
            WhiskerWonders
          </span>
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
        <ul
          className={`md:flex md:items-center z-[100] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md: pl-0 pl-7 md:opacity-100 ${
            isOpen ? "opacity-100" : "opacity-0"
          } top-[-400px] transition-all ease-in duration-500`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link to="/" className="text-xl hover: text-gray-800 duration-500">
              Home
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="" className="text-xl hover: text-gray-800 duration-500">
              FAQ
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="" className="text-xl hover: text-gray-800 duration-500">
              Track Your Order
            </Link>
          </li>
          <button
            onClick={onClickLogout}
            className="bg-gray-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-gray=500 rounded"
          >
            Sign Out
          </button>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
