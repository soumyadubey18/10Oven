import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement logic to submit feedback, for now let's just log the data
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Feedback:", feedback);
    console.log("Rating:", rating);
    setSubmitted(true);
    setTimeout(()=>navigate('/'),5000)
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`cursor-pointer text-2xl ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => handleRatingChange(i)}
        />
      );
    }
    return stars;
  };

  return (
    <div className=" flex flex-col items-center justify-center h-screen bg-black pb-5">
      <div id="logo" className="flex flex-row items-center justify-center  cursor-pointer w-24 h-24 rounded-full bg-white">
        <img src={logo} alt="Cafe Logo" className="h-16" />
      </div>
      <div id="form" className=" lg:w-1/3 mx-auto w mt-5  px-6 py-4 bg-gray-100 rounded-lg shadow-md">
        {submitted ? (
          <p className="text-xl text-black text-center">Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl mb-2 font-semibold text-center text-black ">
              Leave Your Feedback
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-ovenRed font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none  focus:border-red-300"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-ovenRed font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none  focus:border-red-300"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-ovenRed font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none  focus:border-red-300"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="feedback"
                className="block text-ovenRed font-bold mb-2"
              >
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none  focus:border-red-300"
                value={feedback}
                onChange={handleFeedbackChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-ovenRed font-bold mb-2"
              >
                Rate Us
              </label>
              <div className="flex items-center">{renderStars()}</div>
            </div>
            <button
              type="submit"
              className="w-full bg-ovenRed text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
