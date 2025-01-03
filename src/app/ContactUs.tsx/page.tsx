'use client';
import React, { useState } from "react"; 

const  ContactUs = ()  => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true); 
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-pink-600 font-bold text-center mb-6">Contact Me!</h1>

      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button type="submit" className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Submit
          </button>
        </form>
      ) : (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-2xl font-bold text-green-600 text-center">Thank You!</h2>
            <p className="text-center text-gray-700 mt-2">
              Your message has been submitted successfully.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
