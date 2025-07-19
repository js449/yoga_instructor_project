// src/pages/Contact.jsx
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedClass = params.get("class");
    if (selectedClass && form.current) {
      form.current.message.value = `Hi, I'm interested in the ${selectedClass} class. Please provide more info.`;
    }
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    // Using form.current to get values for safety
    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT,
  formData,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)
    .then(
      () => {
        alert("Message sent successfully!");
        setSending(false);
        form.current.reset();
      },
      () => {
        alert("Message failed to send. Try again.");
        setSending(false);
      }
    );
  };

  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-md"
      >
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
          placeholder="Your Message"
          required
          rows="5"
          className="p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          disabled={sending}
          className={`bg-green-600 text-white font-semibold py-3 rounded shadow-md hover:bg-green-700 transition duration-300 ${
            sending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
