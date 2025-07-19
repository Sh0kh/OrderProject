'use client';
import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Send,
  Youtube,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import AboutMe from '../Components/AboutUs/AboutMe';
import AboutWhy from '../Components/AboutUs/AboutWhy';
import JoinUs from '../Components/Home/components/JoinUs/JoinUs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Xabaringiz muvaffaqiyatli yuborildi!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-6 leading-tight">
              Biz bilan qanday<br />
              bog'lanish mumkin?
            </h1>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-gray-600" />
                <p className="text-xl font-semibold text-gray-800">
                  +998 71 200 25 05
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-gray-600" />
                <p className="text-xl font-semibold text-gray-800">
                  info@AllLegal.uz
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-gray-600 mt-1" />
                <p className="text-lg text-gray-800">
                  O'zbekiston, Guliston sh., Navbahor ko'chasi 12A
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4 pt-8 flex-wrap"
            >
              {[Facebook, Linkedin, Send, MessageCircle, Youtube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors cursor-pointer"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                )
              )}
              {['X', 'VK'].map((label) => (
                <div
                  key={label}
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="w-6 h-6 text-white flex items-center justify-center text-sm font-bold">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Guliston Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6102.378028497495!2d68.76669554999999!3d40.4926635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b219e12984b9e9%3A0xb2d3c0bb9b5f5f33!2sGuliston%2C%20Sirdaryo%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1720863742191!5m2!1sen!2s"
                width="100%"
                height="384"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="bg-amber-600 hover:bg-amber-700 p-4 rounded-full shadow-lg cursor-pointer transition-colors">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      <JoinUs />
      <AboutMe />
      <AboutWhy />
    </div>
  );
}
