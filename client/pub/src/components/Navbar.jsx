import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LogoWW from "../assets/WhiskerWonderBigger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const onClickLogout = async (event) => {
    localStorage?.clear();
    navigate("/login");
    Swal.fire({
      text: "Logout Success",
    });
  };
  const onClickUser = async (event) => {
    navigate(`/user/${localStorage.id}`);
  };
  const onClickMenu = async (event) => {
    setIsOpen((current) => !current);
  };

  return (
    <>
      <div className="bg-[#EBE3D5] w-screen">
        <nav className=" relative md:py-4 md:max-w-3xl py-3 px-4 flex justify-between items-center w-[92%] xl:max-w-7xl z-1000">
          <div>
            <img
              className=" cursor-pointer w-33 max-h-20 "
              src={LogoWW}
              alt="..."
            />
          </div>
          <div
            className={`bg-[#EBE3D5] nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] md:w-auto  w-full flex items-center px-5 left-0 ${
              isOpen ? "max-md:w-screen" : "max-md:opacity-0"
            } max-md:bottom-0 max-md:height-0 max-sm:translate-y-[100%]`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8  ">
              <li className="max-md:bg-grey-200">
                <Link className="hover:text-gray-500" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="max-md:bg-grey-200">
                <Link className="hover:text-gray-500" to={"/faq"}>
                  FAQ
                </Link>
              </li>
              <li className="max-md:bg-grey-200">
                <Link className="hover:text-gray-500" to={"/tracking"}>
                  Status Payment
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onClickLogout}
              className=" cursor-pointer bg-[#776b5d] text-gray-200 px-5 py-2 rounded-full hover:bg-[#B0A695] hover:scale-110 transition-all active:scale-90"
            >
              Log Out
            </button>
            {/* <button className="w-10 h-10 material-symbols-outlined text-gray-500 hover:text-green-500 hover:scale-110 transition-all active:scale-90">
            home_pin
          </button> */}
            <button
              onClick={onClickMenu}
              className="sm:hidden w-10 h-10 material-symbols-outlined text-gray-500 hover:text-[#9A3B3B] hover:scale-110 transition-all active:scale-90"
            >
              menu
            </button>
            <button
              onClick={onClickUser}
              className="w-10 h-10 material-symbols-outlined text-gray-500 hover:text-[#9A3B3B] hover:scale-110 transition-all active:scale-90"
            >
              account_circle
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
