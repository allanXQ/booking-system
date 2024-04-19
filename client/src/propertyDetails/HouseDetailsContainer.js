import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Shimmer from "./Shimmer";
import HouseDetailsContent from "./HouseDetailsContent";
import { API_URL } from "../utils/constants";

const housedata = [
  {
    id: "101",
    title: "Standard",
    availableFrom: "2024-04-20",
    price: 7500,
    description:
      "A cozy and affordable room with essential amenities perfect for short stays.",
    amenities: ["WiFi", "Air Conditioning", "Television"],
  },
  {
    id: "201",
    title: "Deluxe",
    availableFrom: "2024-04-19",
    price: 9500,
    description:
      "A spacious room with upgraded furnishings and additional amenities for enhanced comfort.",
    amenities: ["WiFi", "Air Conditioning", "Television", "Mini Fridge"],
  },
  {
    id: "301",
    title: "Suite",
    availableFrom: "2024-04-20",
    price: 15000,
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

const HouseDetailsContainer = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        // const response = await fetch(
        //     API_URL
        // );
        const data = housedata;
        const selectedHouse = data.find((house) => house.id === id);
        setHouse(selectedHouse);
      } catch (error) {
        console.error("Error fetching house details:", error);
      }
    };
    fetchHouseDetails();
  }, [id]);

  if (!house) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <HouseDetailsContent house={house} />
    </>
  );
};

export default HouseDetailsContainer;
