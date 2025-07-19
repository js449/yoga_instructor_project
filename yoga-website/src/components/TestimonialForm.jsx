// src/components/TestimonialForm.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const TestimonialForm = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendTestimonial = (e) => {
    e.preventDefault();
    setSending(true);

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
      rating: form.current.rating.value,
    };

    emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_TESTIMONIAL,
  formData,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)
      .then(
        () => {
          alert("Thank you for your testimonial! We appreciate your feedback.");
          setSending(false);
          form.current.reset();
        },
        () => {
          alert("Oops! Something went wrong. Please try again later.");
          setSending(false);
        }
      );
  };

  return (
    <section className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Submit Your Testimonial
      </h3>
      <form ref={form} onSubmit={sendTestimonial} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          name="message"
          placeholder="Write your testimonial here..."
          required
          rows="4"
          className="p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <label className="block font-semibold">Rating (1 to 5 stars):</label>
        <select
          name="rating"
          required
          className="w-full p-3 border rounded"
          defaultValue=""
        >
          <option value="" disabled>
            Select rating
          </option>
          <option value="5">⭐⭐⭐⭐⭐ (5)</option>
          <option value="4">⭐⭐⭐⭐ (4)</option>
          <option value="3">⭐⭐⭐ (3)</option>
          <option value="2">⭐⭐ (2)</option>
          <option value="1">⭐ (1)</option>
        </select>
        <button
          type="submit"
          disabled={sending}
          className={`bg-green-600 text-white font-semibold py-3 rounded shadow-md hover:bg-green-700 transition duration-300 ${
            sending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {sending ? "Sending..." : "Send Testimonial"}
        </button>
      </form>
    </section>
  );
};

export default TestimonialForm;
