"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        () => {
          setSuccess("✅ Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        () => {
          setSuccess("❌ Failed to send message. Try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-8">Let’s work together or just say hello 👋</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all py-3 rounded-lg font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="mt-4 text-center text-sm">{success}</p>}
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
          <h3 className="text-2xl font-bold">Let’s Connect</h3>
          <p className="text-gray-400">You can also reach me directly through:</p>

          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-400" /> your@email.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-indigo-400" /> +123 456 7890
            </p>
          </div>

          <div className="flex gap-6 mt-4">
            <a href="https://github.com/Arnoldcharles" target="_blank" className="text-gray-400 hover:text-white text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/arnold-charles-442074375" target="_blank" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-white text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
