import React, { useEffect, useState } from "react";
import { API_URL, No_PIC_URL, excludedTitles } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const housedata = [
  {
    id: 1,
    title: "Homestead",
    image_url:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    size: "2273",
    room_available_count: 4,
    available_from: "2022-09-08",
    description:
      "Elegant two-story residence featuring a spacious living area, a modern kitchen, and a charming backyard. Ideal for families seeking comfort and style.",
  },
  {
    id: 2,
    title: "Sanctuary",
    image_url:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    rent: 4177,
    size: "1369",
    room_available_count: 3,
    available_from: "2022-07-22",
    description:
      "Contemporary urban dwelling with sleek finishes, ample natural light, and a cozy balcony perfect for relaxation. Situated in a vibrant neighborhood.",
  },
  {
    id: 3,
    title: "Retreat",
    image_url:
      "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600",
    rent: 3120,
    size: "1493",
    room_available_count: 4,
    available_from: "2022-09-10",
    description:
      "Traditional cottage with a touch of rustic charm, surrounded by lush greenery and offering a tranquil retreat from city life. Features a stone fireplace.",
  },
  {
    id: 4,
    title: "Loft",
    image_url:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
    rent: 4314,
    size: "1704",
    room_available_count: 5,
    available_from: "2022-12-03",
    description:
      "Modern loft-style apartment with an open floor plan, high ceilings, and industrial accents. Includes a private terrace with scenic views.",
  },
];

const PropertiesCards = () => {
  const [houses, setHouses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getHousesList();
  }, []);

  const getHousesList = async () => {
    try {
      // const response = await fetch(API_URL);
      const data = housedata;
      setHouses(data);
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
