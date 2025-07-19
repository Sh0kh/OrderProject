import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Users, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import MapIc from "./map.svg"
export default function AboutUs() {
  const [stats, setStats] = useState({
    people: 0,
    projects: 0,
    capabilities: 0,
    ranking: 0
  });

  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const animateNumber = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setStats(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 16);
    };

    animateNumber(40, 'people', 2000);
    animateNumber(5000, 'projects', 2500);
    animateNumber(50, 'capabilities', 1800);
    animateNumber(3, 'ranking', 1500);
  }, [isInView]);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <div className="w-24 h-1 bg-amber-600 mb-8"></div>
          <p className="text-gray-600 max-w-2xl">
            Welcome to <span className="text-amber-600 font-semibold">AllLegal Uzbekistan</span>
          </p>
          <div className="mt-8 flex justify-start space-x-8 text-sm text-gray-700">
            <span className="flex items-center">
              <Award className="w-4 h-4 mr-1 text-amber-600" />
              JUSTICE
            </span>
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1 text-amber-600" />
              EXPERTISE
            </span>
            <span className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-1 text-amber-600" />
              RESULTS
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-amber-600">
              <h2 className="text-3xl font-bold text-amber-600 mb-4">
                AllLegal Uzbekistan: Law That Moves Global Business Forward
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When the stakes are high and the terrain is complex, top-tier companies turn to
                AllLegal Uzbekistan. We're not just legal advisors — we're strategic partners in
                cross-border success.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team blends elite legal talent with deep local insight and global perspective.
                We build tailored legal strategies that align with your business goals.
              </p>
              <p className="text-amber-600 font-semibold">
                In every case, our mission is clear: deliver results, protect your interests, and drive your advantage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'People', value: stats.people + '+' },
                { label: 'Successful projects', value: stats.projects.toLocaleString() + '+' },
                { label: 'Capabilities', value: stats.capabilities + '+' },
                { label: 'Ranking', value: '#' + stats.ranking }
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + idx * 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl font-bold text-amber-600 mb-2">{item.value}</div>
                  <div className="text-gray-600 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 mt-[-70px] rounded-2xl p-8 h-96 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={MapIc}
                  alt="Map"
                />
              </div>

              <div className="absolute bottom-8 right-8 bg-white rounded-lg px-4 py-2 shadow-lg">
                <div className="text-amber-600 font-bold text-sm">AllLegal</div>
                <div className="text-gray-600 text-xs">Uzbekistan</div>
              </div>

              <div className="absolute top-16 left-16 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/2 right-16 w-2 h-2 bg-red-500 rounded-full animate-ping animation-delay-1000"></div>
              <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-red-300 rounded-full animate-ping animation-delay-2000"></div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-600">
                <h4 className="font-bold text-gray-900 mb-2">Global Reach</h4>
                <p className="text-gray-600 text-sm">
                  Strategic partnerships across multiple jurisdictions for comprehensive legal solutions.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-600">
                <h4 className="font-bold text-gray-900 mb-2">Local Expertise</h4>
                <p className="text-gray-600 text-sm">
                  Deep understanding of Uzbekistan's legal landscape and business environment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
