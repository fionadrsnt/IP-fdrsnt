import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../configs/config";
const PaymentSummary = ({ animal }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/tracking");

    useEffect(() => {
      async function fetchOrder() {
        try {
          // console.log("masuk sini");
          setIsLoading(true);
          const { data } = await axios.post(
            `${url}/adoptme/order/${id}`,
            null,
            {
              headers: { Authorization: `Bearer ${localStorage.token}` },
            }
          );
          console.log(data);
          setOrder(data);
        } catch (error) {
          console.log(error);
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
      fetchOrder();
    }, []);
    if (isLoading) return <p className="h-screen bg-black">Loading...</p>;
    if (error)
      return (
        <p className="h-screen bg-black text-red-500">
          Error fetching, please try again later
        </p>
      );
  };
  return (
    <>
      {JSON.stringify(order)}
      <div className="container mx-auto p-8">
        <div className="flex">
          {/* Left side with picture and details */}
          <div className="flex-1 mr-8">
            <div className="bg-white p-6 rounded-lg mb-4 shadow-md">
              <img
                src={animal.primary_photo_cropped?.medium}
                alt={animal.name}
                className="w-full h-auto rounded-lg mb-4 object-cover"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-2">{animal.name}</h2>
                <p className="text-gray-600">
                  Type: <span className="font-semibold">{animal.type}</span>
                </p>
                <p className="text-gray-600">
                  Breeds:{" "}
                  <span className="font-semibold">{animal.breeds.primary}</span>
                </p>
                <p className="text-gray-600">
                  Age: <span className="font-semibold">{animal.age}</span>
                </p>
                <p className="text-gray-600">{animal.description}</p>
              </div>
            </div>
          </div>
          {/* Right side with order summary and shipping information */}
          <div className="flex-1">
            {/* Order Summary Card */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <p className="text-gray-600">Subtotal:</p>
                <p className="font-semibold">$100.00</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-600">Shipping:</p>
                <p className="font-semibold">$10.00</p>
              </div>
              <div className="border-t border-gray-300 my-2" />
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Total:</p>
                <p className="text-lg font-semibold">$110.00</p>
              </div>
            </div>
            {/* Shipping Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Shipping Information
              </h3>
              <p className="text-gray-600">
                Shipping Address: John Doe, 123 Main St, Cityville, State, 12345
              </p>
              <p className="text-gray-600">Delivery Method: Express Shipping</p>
              <p className="text-gray-600">Tracking ID: 123456789</p>
            </div>
            <div className="mt-4">
              <button
                onClick={onClickHandler}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Pay Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentSummary;
