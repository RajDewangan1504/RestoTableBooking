import React from "react";

export default function BookingItems({ item }) {
  console.log("tiem",item);
  return (
    <div className="relative flex flex-col gap-4 items-start py-6 px-4 bg-white max-w-xs w-full h-full rounded-md shadow-lg hover:scale-105 transition-all duration-300">
      <div className="w-full">
        <h3 className="text-xl font-semibold text-primary mb-2">{item.name}</h3>
        <p className="text-gray-600">
          <strong>Contact:</strong> {item.contact}
        </p>
        <p className="text-gray-600">
          <strong>Date:</strong> {item.date}
        </p>
        <p className="text-gray-600">
          <strong>Time:</strong> {item.time}
        </p>
        <p className="text-gray-600">
          <strong>Guests:</strong> {item.guests}
        </p>
      </div>
    </div>
  );
}
