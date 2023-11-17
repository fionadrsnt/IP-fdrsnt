import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
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
      <div className="navbar bg-[#ECE3CE]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="#">Adopt Me!</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Logo */}
        <div className="navbar-center text-[#3A4D39]">
          <a className="btn btn-ghost normal-case text-xl">WhiskerWonder</a>
        </div>
        {/* search bar */}
        <div className="navbar-end flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto bg-[#F3EEEA]"
            />
          </div>
          <Link className="btn btn-ghost btn-circle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>
          {/* <Link to="/register">
            <span className="btn glass">Add New User</span>
          </Link> */}
          <Link onClick={onClickLogout} className="btn glass">
            Sign Out
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
