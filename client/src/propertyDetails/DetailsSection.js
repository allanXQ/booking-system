import React from "react";

const DetailsSection = ({ house }) => {
  return (
    <div className="my-5">
      <p className="font-semibold text-sm">
        A cozy and spacious house located in Nairobi, offering a tranquil living
        experience. This house features a generous area of [house.area] sq.ft,
        with [house.room_available_count] available rooms. It is available for
        occupancy from [house.available_from]. Enjoy the convenience of this
        well-located property, perfect for those seeking a comfortable and
        convenient lifestyle.
      </p>
      <div className="flex flex-wrap pt-4">
        <div className="w-full md:w-1/2 text-gray-600 text-left">
          <p className="mb-2">Locality: Nairobi</p>
          <p className="mb-2">Available Rooms: 3</p>
        </div>
        <div className="w-full md:w-1/2 text-gray-600 text-left">
          <p className="mb-2">Area: {house.area} sq.ft</p>
          <p className="mb-2">Available from: {house.available_from}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
