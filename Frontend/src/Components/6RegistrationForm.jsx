import Card from "./Card";
import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  // Step 1 — State banao
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Step 2 — Har input change pe state update
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Step 3 — Validation
  const validate = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email";
    if (!formData.phone.trim()) return "Phone is required";
    if (formData.phone.length !== 10) return "Phone must be 10 digits";
    return null;
  };

  // Step 4 — Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // page reload rokta hai

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    try {
      setLoading(true);
      setError("");
      await axios.post("/api/enquiry", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registration" className="py-16 bg-blue-50">
      <div className="max-w-lg mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Register Your Child Today!
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill in the details and we'll get in touch.
        </p>

        {/* Success Message */}
        {success && (
          <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-6 text-center">
            ✅ Enquiry submitted successfully! We'll contact you soon.
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-600 p-4 rounded-xl mb-6 text-center">
            ⚠️ {error}
          </div>
        )}

        <Card className="p-8">
          {/* Name */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-1">
              Parent's Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number 
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit number"
              maxLength={10}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-full transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Enquiry →"}
          </button>

          <p className="text-center text-gray-400 text-sm mt-4">
            🔒 Your information is safe with us
          </p>
        </Card>

      </div>
    </section>
  );
};

export default RegistrationForm;