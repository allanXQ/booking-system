import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Shimmer from "./Shimmer";
import HouseDetailsContent from "./HouseDetailsContent";
import { API_URL } from "../utils/constants";

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
        const selectedHouse = data.find(
          (house) => house.id === parseInt(id, 10)
        );
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
