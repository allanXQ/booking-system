import React, { useEffect, useState } from "react";
import { API_URL, No_PIC_URL, excludedTitles } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const PropertiesCards = () => {
  const [houses, setHouses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getHousesList();
  }, []);

  const getHousesList = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setHouses(data.houses.slice(0, 4));
      console.log(data.houses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <div className="flex flex-wrap gap-8 justify-center p-2">
      {houses.length === 0 ? (
        <h1 className="md:text-xl font-semibold">API Data Loading...</h1>
      ) : (
        houses.map(
          (house) =>
            !excludedTitles.includes(house.title) &&
            house.image_url &&
            house.image_url !== No_PIC_URL && (
              <div
                className="text-sm shadow-lg hover:cursor-pointer hover:shadow-xl"
                key={house.id}
              >
                <img
                  className="md:w-60 h-40 m-4 rounded-lg"
                  src={house.image_url}
                  alt={house.title}
                />
                <div className="flex justify-between mx-5">
                  <h3>{house.title}</h3>
                  <p>Rent: KSH {house.rent}</p>
                </div>
                <p className="py-4">Locality: Nairobi</p>
                <button
                  className="bg-blue-200 py-2 p-2 m-4 rounded-md text-sm hover:bg-blue-300 focus:outline-none focus:ring"
                  onClick={() => handleViewDetails(house.id)}
                >
                  View details
                </button>
              </div>
            )
        )
      )}
    </div>
  );
};

export default PropertiesCards;
