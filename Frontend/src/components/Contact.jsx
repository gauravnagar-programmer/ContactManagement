import axios from "axios";
import { useEffect, useState } from "react";
import { ErrorMessage, SuccessMessage } from "../utils/InfoMessage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/contact/data");
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/contact/delete/${id}`);

      setData((prev) => prev.filter((item) => item._id !== id));
      SuccessMessage("Contact deleted Successfully");
    } catch (error) {
      ErrorMessage("Can't delete Contact , Try again");
    }
  };

  const handleSorting = async () => {
    try {
      const next = !sorting;

      setSorting(next);

      const url = next
        ? "http://localhost:4000/contact/data/sort?sort=az"
        : "http://localhost:4000/contact/data";

      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      ErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col text-white mt-5 py-5 border-t border-white">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col space-y-2">
          <h1 className="md:text-3xl text-xl font-bold">All Your Contacts</h1>
          <p>Total Contacts : {data.length}</p>
        </div>

        <div className="flex items-center space-x-3">
          <p className="text-[13px]">Sorting : </p>
          <p
            onClick={handleSorting}
            className={`px-3 py-1 rounded-full font-bold cursor-pointer bg-blue-500 `}
          >
            {sorting ? "Original" : "A-Z"}
          </p>
        </div>
      </div>
      <div className=" grid md:grid-cols-3 gap-5 grid-cols-1 mt-7">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-200"
          >
            {/* Contact Info */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h2>

              <p className="text-sm text-gray-700">
                <span className="font-medium text-gray-900">Email:</span>{" "}
                {item.email}
              </p>

              <p className="text-sm text-gray-700">
                <span className="font-medium text-gray-900">Phone:</span>{" "}
                {item.phone}
              </p>
            </div>
            {item.message && item.message.trim() !== "" && (
              <p className=" text-sm text-gray-700 line-clamp-2">
                <span className="font-medium text-gray-900">Message:</span>{" "}
                {item.message}
              </p>
            )}

            <p className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">Created on:</span> {new Date(item.createdAt).toLocaleDateString()}
            </p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => handleDelete(item._id)}
                className="px-4 py-2 text-sm cursor-pointer font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
