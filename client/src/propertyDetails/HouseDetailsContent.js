import React, { useState } from "react";
import BookingForm from "./BookingForm";
import DetailsSection from "./DetailsSection";
import AdditionalDetailsSection from "./AdditionalDetailsSection";
import axios from "axios";

const HouseDetails = ({ house }) => {
  const [showForm, setShowForm] = useState(false);

  const handleBookingSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    axios
      .post("https://booking-server-76dj.onrender.com/api/book", {
        ...formData,
        houseId: house.id,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // alert("Property booked!");
    // setShowForm(false);
  };

  const handleBookingClick = () => {
    setShowForm(true);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">{house.title}</h2>
      <img
        src={
          house.title === "Standard"
            ? "https://st3.depositphotos.com/1006542/13733/i/1600/depositphotos_137336964-stock-photo-roadside-motel-room-interior.jpg"
            : house.title === "Deluxe"
            ? "https://st3.depositphotos.com/11388896/36722/i/1600/depositphotos_367224568-stock-photo-wendover-nevada-july-2018-king.jpg"
            : "https://st3.depositphotos.com/1006542/13734/i/1600/depositphotos_137341932-stock-photo-interior-of-bedroom-in-hotel.jpg"
        }
        alt={house.title}
        className="mb-4 rounded-md w-full"
      />
      <DetailsSection house={house} />
      <div className="flex justify-center">
        <button
          className="bg-blue-200 p-2 rounded-md text-sm hover:bg-blue-300 focus:outline-none focus:ring"
          onClick={handleBookingClick}
        >
          Book property
        </button>
      </div>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-gray-800 opacity-50"></div>
          <div className="bg-white p-8 rounded-md z-10">
            <BookingForm
              onSubmit={handleBookingSubmit}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseDetails;
