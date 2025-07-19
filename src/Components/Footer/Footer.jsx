
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import ScrollingText from './ScrollingText';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">

       {/* <ScrollingText/> */}

      
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12"
        >
       <div className="text-2xl font-bold mb-2 bg-amber-600 bg-clip-text text-transparent">
  AllLegal Uzbekistan
</div>

          <div className="text-gray-300 text-lg text-bold" >OUR MISSION — YOUR SUCCESS</div>
        </motion.div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h3 className="text-lg font-semibold mb-4 bg-amber-600 bg-clip-text text-transparent">About</h3>
            <NavLink to="/aboutus">
              
            
            <ul className="space-y-2">
              <li><a href="/aboutus" className="text-gray-300 hover:text-white transition">Firm</a></li>
              <li><a href="/aboutus" className="text-gray-300 hover:text-white transition">Diversity, Equity & Inclusion</a></li>
              <li><a href="/aboutus" className="text-gray-300 hover:text-white transition">Careers</a></li>
            </ul>
           </NavLink>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.1 }}>
            <h3 className="text-lg font-semibold mb-4 bg-amber-600 bg-clip-text text-transparent">Capabilities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Practices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Key Industries</a></li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }}>
            <h3 className="text-lg font-semibold mb-4 bg-amber-600 bg-clip-text text-transparent">Insights</h3>
        

            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">News & Publications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Events and Webinars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">People</a></li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.3 }}>
            <h3 className="text-lg font-semibold mb-4 bg-amber-600 bg-clip-text text-transparent">Other</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Recognition And Awards</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Client Success Stories</a></li>
            </ul>
          </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.4 }}>
            <h3 className="text-lg font-semibold mb-4 bg-amber-600 bg-clip-text text-transparent">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom info */}
        <div className="border-t border-gray-500 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-2 bg-amber-600 bg-clip-text text-transparent">Locations</h3>
              <p className="text-gray-300">77 Bobur, Yakkasaroy Tashkent, 100022</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-2 bg-amber-600 bg-clip-text text-transparent">Contact Us</h3>
              <p className="text-gray-300">+998 95 198 21 12</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }} className="md:text-right">
              <div className="text-gray-300 text-sm bg-amber-600 bg-clip-text text-transparent">©2025 Prael.egal Uzbekistan</div>
              <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 mt-2">
                <a href="#" className="text-gray-300 hover:text-white text-sm transition bg-amber-600 bg-clip-text text-transparent">Privacy & Cookies</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition bg-amber-600 bg-clip-text text-transparent">Disclaimers</a>

              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Keyframe Styles */}
      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </footer>
  )
}