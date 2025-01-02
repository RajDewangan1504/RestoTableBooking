import React, { useState } from "react";
import Layout from "../components/Layout";
import MyButton from "../components/MyButton";
import FormItem from "../utils/FormItem";

export default function Order() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    time: "",
    guests: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedFormData = { ...prevState, [name]: value };
      console.log("Updated formData", updatedFormData); // Log updated state
      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    console.log("formData",formData);
    e.preventDefault();
    try {
      const response = await fetch(
        "https://resto-table-booking.vercel.app/api/bookings/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("data",data);
        setSuccessMessage(`Booking successful for ${data.name} on ${data.date} at ${data.time}`);
        setErrorMessage("");
        setFormData({ name: "", contact: "", date: "", time: "", guests: "" });
      } else {
        setErrorMessage("Error while booking. Please try again.");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to the server. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <Layout title="Book Table" subtitle="Free and Fast">
      <div className="container-wrapper flex flex-col h-full items-center justify-center py-7">
        <form
          className="grid grid-cols-2 md:grid-cols-1 gap-5 border border-gray-300 shadow-lg p-6 rounded-md max-w-4xl w-full"
          onSubmit={handleSubmit}
        >
          <FormItem
            labelText="Your Name"
            inputType="text"
            inputPlaceholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormItem
            labelText="Your Number"
            inputType="tel"
            inputPlaceholder="Enter your number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          <FormItem
            labelText="Number of Guests"
            inputType="number"
            inputPlaceholder="Enter number of guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          />
          <FormItem
            labelText="Date"
            inputType="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <FormItem
            labelText="Time"
            inputType="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          <div className="pt-7">
            <MyButton text="Book Table" className="w-20" />
          </div>
        </form>

        {/* Success and Error Messages */}
        {successMessage && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {errorMessage}
          </div>
        )}
      </div>
    </Layout>
  );
}

