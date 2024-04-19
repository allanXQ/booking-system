import React from "react";

const DetailsSection = ({ house }) => {
  return (
    <div className="my-5">
      <p className="font-semibold text-sm">{house.description}</p>
      <div className="flex flex-wrap pt-4">
        <div className="w-full md:w-1/2 text-gray-600 text-left">
          <p className="mb-2">Price: {house.price} KSH</p>
          <p className="mb-2">Available from: {house.availableFrom}</p>
        </div>
        <div className="w-full md:w-1/2 text-gray-600 text-left">
          <p className="mb-2">
            Amenities:
            {house.amenities.map((amenity, index) => (
              <span key={index}> {amenity}, </span>
            ))}
          </p>
          {/* <p className="mb-2">Available Rooms: 3</p> */}
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
