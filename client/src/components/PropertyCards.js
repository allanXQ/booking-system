import React, { useEffect, useState } from "react";
import { API_URL, No_PIC_URL, excludedTitles } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const housedata = [
  {
    id: "101",
    title: "Standard",
    availableFrom: "2024-04-20",
    price: 75,
    description:
      "A cozy and affordable room with essential amenities perfect for short stays.",
    amenities: ["WiFi", "Air Conditioning", "Television"],
  },
  {
    id: "201",
    title: "Deluxe",
    availableFrom: "2024-04-19",
    price: 95,
    description:
      "A spacious room with upgraded furnishings and additional amenities for enhanced comfort.",
    amenities: ["WiFi", "Air Conditioning", "Television", "Mini Fridge"],
  },
  {
    id: "301",
    title: "Suite",
    availableFrom: "2024-04-20",
    price: 150,
    description:
      "A luxurious suite offering a premium experience with full amenities and exclusive features.",
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Television",
      "Mini Fridge",
      "Kitchenette",
      "Balcony",
    ],
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
        houses.map((house) => (
          <div
            className="text-sm shadow-lg hover:cursor-pointer hover:shadow-xl"
            key={house.id}
          >
            <img
              className="md:w-60 h-40 m-4 rounded-lg"
              src={
                house.title === "Standard"
                  ? "https://st3.depositphotos.com/1006542/13733/i/1600/depositphotos_137336964-stock-photo-roadside-motel-room-interior.jpg"
                  : house.title === "Deluxe"
                  ? "https://st3.depositphotos.com/11388896/36722/i/1600/depositphotos_367224568-stock-photo-wendover-nevada-july-2018-king.jpg"
                  : "https://st3.depositphotos.com/1006542/13734/i/1600/depositphotos_137341932-stock-photo-interior-of-bedroom-in-hotel.jpg"
              }
              alt={house.title}
            />
            <div className="flex justify-between mx-5">
              <h3>{house.title}</h3>
              <p>Price: KSH {house.price}</p>
            </div>
            {/* <p className="py-4">Locality: Nairobi</p> */}
            <button
              className="bg-blue-200 py-2 p-2 m-4 rounded-md text-sm hover:bg-blue-300 focus:outline-none focus:ring"
              onClick={() => handleViewDetails(house.id)}
            >
              View details
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default PropertiesCards;
