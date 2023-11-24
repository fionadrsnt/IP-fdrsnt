import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../configs/config";

const DetailCard = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailAnimal, setDetailAnimal] = useState({});
  const navigate = useNavigate();
  const formOnSubmitHandler = async (evt) => {
    evt.preventDefault();
    try {
      // await axios.put(`${url}/adoptme/:id`, detailAnimal, {
      //   headers: { Authorization: `Bearer ${localStorage.token}` },
      // });
      navigate(`/adoptme/order/${id}`, { state: detailAnimal });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    async function fetchAnimal() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}/adoptme/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        });
        // console.log(data, "<<<< data dari axios detail");
        setDetailAnimal(data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAnimal();
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
      {/* {JSON.stringify(detailAnimal.data.animal)} */}

      <form
        onSubmit={formOnSubmitHandler}
        className="container mx-auto p-8 rounded-xl shadow-lg"
      >
        <div className="flex">
          {/* Left side with image */}
          <div className="relative">
            <img
              src={detailAnimal.data.animal.primary_photo_cropped?.medium}
              alt="Pet Image"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
          {/* Right side with details */}
          <div className="ml-8">
            <h1 className="text-3xl font-bold mb-4">
              {detailAnimal.data.animal.name}
            </h1>
            {/* Details Section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  Type:{" "}
                  <span className="font-semibold">
                    {detailAnimal.data.animal.type}
                  </span>
                </p>
                <p className="text-gray-600">
                  Breeds:{" "}
                  <span className="font-semibold">
                    {detailAnimal.data.animal.breeds.primary}
                  </span>
                </p>
                <p className="text-gray-600">
                  Age:{" "}
                  <span className="font-semibold">
                    {detailAnimal.data.animal.age}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  Gender:{" "}
                  <span className="font-semibold">
                    {detailAnimal.data.animal.gender}
                  </span>
                </p>
                <p className="text-gray-600">
                  Size:{" "}
                  <span className="font-semibold">
                    {detailAnimal.data.animal.size}
                  </span>
                </p>
                <p className="text-gray-600">
                  Coat:{" "}
                  <span className="font-semibold">
                    {detailAnimal.data.animal.coat}
                  </span>
                </p>
              </div>
            </div>
            {/* Status and Description Section */}
            <div className="mt-4">
              <p className="text-gray-600">
                Status:{" "}
                <span className="font-semibold">
                  {detailAnimal.data.animal.status}
                </span>
              </p>
              <p className="text-gray-600">
                {detailAnimal.data.animal.description}
              </p>
            </div>
            {/* Adopt Me Button */}
            <div className="mt-4">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                Adopt Me!
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default DetailCard;
