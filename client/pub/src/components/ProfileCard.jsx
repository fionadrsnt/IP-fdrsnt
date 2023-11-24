import { Link, useParams } from "react-router-dom";
import { url } from "../configs/config";
import { useEffect, useState } from "react";
import axios from "axios";

const ProfileCard = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const inputFullNameChangeHandler = (event) => {
    setFullName(event.target.value);
  };
  const inputEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const inputAddressChangeHandler = (event) => {
    setAddress(event.target.value);
  };
  const onClickDelete = async (event) => {};
  useEffect(() => {
    async function fetchUserData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}/user/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        });
        setUser(data);
        setFullName(data?.dataUser[0]?.fullName);
        setEmail(data?.dataUser[0]?.email);
        setAddress(data.dataUser[0]?.address);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserData();
  }, []);

  useEffect(() => {
    async function fetchUserDataDelete() {
      try {
        setIsLoading(true);
        const { data } = await axios.delete(`${url}/user/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        });
        setUser(data);
        setFullName(data?.dataUser[0]?.fullName);
        setEmail(data?.dataUser[0]?.email);
        setAddress(data.dataUser[0]?.address);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserDataDelete();
  }, []);
  if (isLoading) return <p className="h-screen bg-black">Loading...</p>;
  if (error)
    return (
      <p className="h-screen bg-black text-red-500">
        Error fetching, please try again later
      </p>
    );
  return (
    <>
      <>
        {/* {JSON.stringify(user)} */}
        <div
          className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto
        rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#FAF6F0]"
        >
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leadi lg:text-5xl">
                User Profile
              </h2>
              <div className="text-gray-800">
                Please update your account information.
              </div>
            </div>
            <img
              src="assets/svg/doodle.svg"
              alt=""
              className="p-6 h-52 md:h-64"
            />
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                defaultValue={fullName}
                onChange={inputFullNameChangeHandler}
                id="name"
                type="text"
                className="w-full p-3 rounded bg-[#F3EEEA]"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                defaultValue={email}
                onChange={inputEmailChangeHandler}
                id="email"
                type="email"
                className="w-full p-3 rounded bg-[#F3EEEA]"
              />
            </div>
            <div>
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                defaultValue={address}
                onChange={inputAddressChangeHandler}
                type="text"
                id="address"
                className="w-full p-3 rounded bg-[#F3EEEA]"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-[#EBE3D5] text-gray-900"
            >
              Update
            </button>
            <span>
              Remove your account? click{""}
              {/* <button onClick={} className="hover: text-[#9A3B3B] duration-500">
                here
              </button> */}
            </span>
          </form>
        </div>
      </>
    </>
  );
};

export default ProfileCard;
