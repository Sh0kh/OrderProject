'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Paperclip, Send } from 'lucide-react';

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    helpText: '',
    opportunities: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Text and Quotes */}
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Join Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 mb-6" />
          <p className="text-lg text-gray-500">
            Looking for a career at <br />
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent font-medium">AllLegal Uzbekistan?</span>
          </p>

          <div className="gooo mt-8">
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-md border border-gray-200 p-8 rounded-xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <select
              name="helpText"
              value={formData.helpText}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>Help me find</option>
              <option>Legal Internship</option>
              <option>Associate Position</option>
              <option>Research Role</option>
            </select>
            <select
              name="opportunities"
              value={formData.opportunities}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>Opportunities in</option>
              <option>Litigation</option>
              <option>Corporate Law</option>
              <option>Tax & Finance</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Attach a link to your CV (Google Doc, Google Drive) and send us a message."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md h-24 mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full bg-black hover:bg-black transition-colors duration-300 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send
          </motion.button>
        </div>
      </div>
    </section>
  );
}
