import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../configs/config";

const MainCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animals, setAnimal] = useState({});
  const navigate = useNavigate();
  const onClickDetail = (id) => {
    navigate(`/adoptme/${id}`);
  };
  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}/adoptme`, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        });
        setAnimal(data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnimalData();
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
      {/* {JSON.stringify(animals)} */}
      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD */}
          {/* ini nanti classnya diganti "card" */}
          {/* GRID */}
          {animals.data.animals.map((e) => {
            return (
              <div key={e.id} className="rounded-xl shadow-lg z-[-10]">
                <div className="p-5 flex flex-col">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={e.primary_photo_cropped?.medium}
                      alt={e.name}
                      className="card-image"
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium mt-3">
                    {e.name}
                  </h2>
                  <h5 className="text-2xl md:text-3xl font-medium mt-3">
                    {e.breeds.primary}
                  </h5>
                  <h5 className="text-2xl md:text-3xl font-medium mt-3">
                    {e.age}
                  </h5>

                  <p className="text-slate-500 text-lg mt-3">{e.description}</p>
                  <button
                    onClick={() => onClickDetail(e.id)}
                    className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MainCard;
